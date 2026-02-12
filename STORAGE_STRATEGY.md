# SkyVault — Storage Strategy & Phase 4 Planning

---

## Phase 4 Overview: File Upload Service & Storage Manager

Phase 4 is where we build the **core file handling infrastructure** — the heart of SkyVault.

### What Phase 4 Covers

| Sub-task | Description |
|---|---|
| **File Upload Service** | Receives files (initially via API, eventually via Telegram MTProto), validates file size/type, generates unique file IDs, calculates checksums, and handles multipart uploads for large files. |
| **GCP Storage Integration** | Uploads files to a cloud storage bucket (originally spec'd as GCP Cloud Storage). This service creates the storage paths, manages uploads, and provides signed URLs for access. |
| **Storage Manager Service** | Acts as the abstraction layer over the actual storage backend. It manages bucket operations, tracks storage objects, and publishes Kafka events like `storage.object.created` and `storage.object.deleted`. |
| **Upload Progress Tracking** | Publishes `file.upload.progress` events to Kafka, which the WebSocket Realtime Service (in a later phase) will use to push real-time progress updates to clients. |

### Phase 4 Flow

```
User uploads file → File Upload Service validates → Storage Manager uploads to Cloud Storage
                                                  → Kafka event: file.uploaded
                                                  → File Processing Service (Phase 5) picks it up
```

---

## How User Access Works

Users get **two interfaces** to their files:

1. **Website (Next.js frontend)** — A web dashboard where users can upload, browse, view images, stream videos, and manage files.
2. **Telegram Bot** — Users interact with a bot in Telegram to upload files (send file to bot), download files (bot sends them back), and get real-time notifications.

Both interfaces talk to the **same backend** (API Gateway → Microservices → Storage), so files uploaded via Telegram are visible on the website and vice versa.

---

## Why GCP Was Originally Chosen

The PRD chose GCP for several reasons:

1. **Cloud Run** — Pay-per-use serverless containers. Each microservice deploys as a Cloud Run service with automatic scaling. Perfect for a learning project because you only pay for actual usage.
2. **Cloud Storage** — Automatically scales, no capacity planning needed. Supports signed URLs for secure temporary access, lifecycle policies for cold storage, and server-side encryption.
3. **Cloud CDN** — Built-in CDN for video streaming with low latency.
4. **Integrated Ecosystem** — Cloud Build for CI/CD, Cloud Monitoring, Cloud Logging, Secret Manager, all work seamlessly together.
5. **Learning Value** — The PRD explicitly states "Recommended for Learning" for Cloud Run deployment.

---

## Alternatives to GCP Storage

The storage layer is abstracted behind the **Storage Manager Service**, which means the backend can be swapped out.

| Alternative | Pros | Cons |
|---|---|---|
| **AWS S3** | Most popular, massive ecosystem, signed URLs, lifecycle policies. Very similar API to GCP Storage. | Slightly different SDK, but nearly identical in concept. |
| **MinIO** (self-hosted S3-compatible) | **Free**, runs locally via Docker, S3-compatible API so code works on both MinIO and AWS. Great for development. | You manage the infrastructure yourself. No built-in CDN. |
| **Azure Blob Storage** | Good if you're in the Microsoft ecosystem. Similar capabilities to S3/GCS. | Less common in open-source projects. |
| **Cloudflare R2** | **No egress fees** (huge cost saver for file downloads/streaming), S3-compatible API. | Newer, smaller ecosystem. |
| **Local filesystem + Docker volume** | Simplest to start with, zero cost, no cloud account needed. | Not production-ready, no signed URLs, no CDN. |

### Development Recommendation

For **development/learning**, we'll use **MinIO** in Docker — it gives an S3-compatible API locally with zero cost, and code will work on AWS S3 or any S3-compatible storage later. Docker Compose config:

```yaml
minio:
  image: minio/minio
  ports:
    - "9000:9000"
    - "9001:9001"  # Console UI
  environment:
    MINIO_ROOT_USER: minioadmin
    MINIO_ROOT_PASSWORD: minioadmin
  command: server /data --console-address ":9001"
```

---

## The GCP Free Tier Problem

| GCP Free Tier | Amount |
|---|---|
| Cloud Storage | **5 GB total** (not per user!) |
| Egress (downloads) | **1 GB/month** |

So if you have 100 users, that's **50 MB per user** on the free tier — basically nothing. Even paid, GCP Storage costs ~$0.02/GB/month for storage + $0.12/GB for downloads.

---

## Telegram MTProto Storage — The Original Idea

The original idea was to use Telegram's free storage (2GB per user) to provide cloud storage.

### Why It's Attractive
- **Free storage** — 2GB per user at zero cost
- **No infrastructure** — Telegram handles everything

### Why Pure Telegram Storage Is Problematic

| Concern | Detail |
|---|---|
| **No indexing/querying** | Telegram stores files as messages in chats. You can't query "give me all PDFs uploaded in January" without scanning every message. |
| **Rate limits** | Telegram's API has strict rate limits (~30 requests/second). Listing files, generating previews, searching — all become slow. |
| **No signed URLs** | You can't generate temporary download links. Every download goes through your server as a proxy → high bandwidth costs. |
| **No streaming support** | HLS adaptive streaming, seeking, quality variants — impossible directly from Telegram storage. |
| **Reliability** | You're at Telegram's mercy. If they change their API or ToS, your entire storage layer breaks. |

---

## ✅ Chosen Approach: Hybrid Architecture (Best of Both Worlds)

We use Telegram as the **actual storage backend** with a smart metadata layer on our side.

### Architecture Diagram

```
┌─────────────────────────────────────────────────┐
│              OUR INFRASTRUCTURE                 │
│                                                 │
│  ┌──────────────┐    ┌──────────────────────┐   │
│  │  MongoDB      │    │  MinIO (small)       │   │
│  │  (Metadata,   │    │  (Thumbnails, cached │   │
│  │   Indexes,    │    │   previews ONLY)     │   │
│  │   Search)     │    │  ~500MB total        │   │
│  └──────────────┘    └──────────────────────┘   │
│         │                      │                │
│         └──────────┬───────────┘                │
│                    │                            │
│         ┌──────────▼───────────┐                │
│         │  Storage Manager     │                │
│         │  Service             │                │
│         │  (Abstraction Layer) │                │
│         └──────────┬───────────┘                │
│                    │                            │
└────────────────────┼────────────────────────────┘
                     │
        ┌────────────▼────────────┐
        │   TELEGRAM STORAGE      │
        │   (Actual file storage) │
        │   2GB per user - FREE!  │
        └─────────────────────────┘
```

### How It Works

1. **User uploads a file** (via website or Telegram bot)
2. **File Upload Service** sends the file to a dedicated Telegram channel/chat (one per user or one shared channel) using MTProto
3. Telegram stores the file and returns a `file_id` (a unique reference to the file on Telegram's servers)
4. **MongoDB** stores the metadata: `file_id`, filename, size, mime_type, tags, folder info, upload date, user_id, etc.
5. **MinIO** stores ONLY thumbnails and preview images (~50KB each)

### Download Flow

1. User requests file from website or bot
2. Service looks up the `file_id` from MongoDB
3. Uses MTProto API to download the file from Telegram
4. Streams it to the user (or sends via bot)

### Browse/Search Flow

1. Query hits **MongoDB** (with proper indexes) — blazing fast
2. Returns file list with thumbnails served from MinIO
3. Actual files are fetched from Telegram only on demand

### Cost Breakdown

| Component | Cost |
|---|---|
| Telegram storage | **$0** (unlimited for bot, 2GB per user account) |
| MongoDB Atlas (free tier) | **$0** (512MB, enough for millions of metadata records) |
| MinIO (Docker, self-hosted) | **$0** (thumbnails + previews only, ~500MB) |
| **Total** | **$0** 🎉 |

### What We Keep from the PRD

- ✅ All 14 microservices architecture
- ✅ Kafka event-driven communication
- ✅ WebSocket real-time updates
- ✅ MongoDB metadata, search, indexing
- ✅ Upload progress tracking
- ✅ File processing (thumbnails, previews)
- ✅ Download with permission checks
- ✅ Activity logging
- ✅ Admin dashboard

### What Changes

- ❌ No HLS adaptive streaming (Telegram doesn't support it)
- ⚠️ Video streaming will be **progressive download** instead of adaptive bitrate (still works fine for most videos)
- ⚠️ Downloads go through our server as proxy (adds server bandwidth cost, but fine on Cloud Run free tier for small scale)
- ⚠️ Rate limits on Telegram API mean bulk operations need queuing

### Storage Manager Abstraction

The **Storage Manager Service** uses an adapter pattern so backends can be swapped:

```typescript
interface StorageAdapter {
  upload(file: Buffer, path: string): Promise<StorageResult>;
  download(path: string): Promise<ReadableStream>;
  delete(path: string): Promise<void>;
  getSignedUrl(path: string, expiry: number): Promise<string>;
}

class TelegramStorageAdapter implements StorageAdapter { ... }
class GCPStorageAdapter implements StorageAdapter { ... }
class MinIOStorageAdapter implements StorageAdapter { ... }
```

This means when we want to scale beyond Telegram's limits, we just swap the adapter to GCP/S3 — no other code changes needed.

# TeleDrive 🚀

> Cloud storage platform with Telegram integration built on microservices architecture

TeleDrive is a production-ready cloud storage platform that leverages Telegram as the primary interface for file management. Users can upload, download, view images, and stream videos directly through Telegram, while also accessing a web dashboard for enhanced viewing experiences.

## 🏗️ Architecture

This project demonstrates modern microservices architecture using:
- **TypeScript** - Type-safe development
- **MongoDB** - Document database
- **Kafka** - Event-driven communication
- **WebSockets** - Real-time updates
- **Telegram MTProto** - Telegram integration
- **GCP** - Cloud infrastructure

### Microservices (14 Total)

1. **API Gateway** - Entry point, routing, rate limiting
2. **Auth Service** - Authentication & authorization
3. **User Service** - User management & profiles
4. **File Upload Service** - File upload handling
5. **File Processing Service** - Image/video processing
6. **File Metadata Service** - Search & metadata
7. **Download Service** - Secure downloads
8. **Video Streaming Service** - HLS streaming
9. **Preview Service** - Thumbnails & previews
10. **Notification Service** - Multi-channel notifications
11. **WebSocket Service** - Real-time updates
12. **Storage Manager Service** - Cloud storage management
13. **Activity Log Service** - Centralized logging
14. **Admin Service** - System administration

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0
- **Docker** & Docker Compose
- **Telegram Bot Token** (from @BotFather)
- **GCP Account** (for production deployment)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ayown/sky-vault.git
cd sky-vault
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Start Infrastructure (MongoDB + Kafka)

```bash
pnpm docker:up
```

This will start:
- MongoDB on `localhost:27017`
- Kafka on `localhost:9093`
- Zookeeper on `localhost:2181`
- Kafka UI on `http://localhost:8080`
- Mongo Express on `http://localhost:8081`

### 5. Verify Infrastructure

```bash
# Check all containers are running
docker-compose ps

# View logs
pnpm docker:logs
```

## 📦 Project Structure

```
teledrive/
├── packages/                 # Shared packages
│   ├── shared-types/        # TypeScript types & interfaces
│   ├── shared-utils/        # Common utilities
│   └── shared-config/       # Configuration management
├── services/                # Microservices
│   ├── api-gateway/
│   ├── auth-service/
│   ├── user-service/
│   ├── file-upload-service/
│   ├── file-processing-service/
│   ├── file-metadata-service/
│   ├── download-service/
│   ├── video-streaming-service/
│   ├── preview-service/
│   ├── notification-service/
│   ├── websocket-service/
│   ├── storage-manager-service/
│   ├── activity-log-service/
│   └── admin-service/
├── apps/                    # Frontend applications
├── docs/                    # Documentation
├── infrastructure/          # Infrastructure configs
├── scripts/                 # Utility scripts
├── docker-compose.yml       # Docker configuration
├── package.json            # Root package.json
├── pnpm-workspace.yaml     # Workspace configuration
└── tsconfig.base.json      # Base TypeScript config
```

## 🛠️ Development

### Build All Services

```bash
pnpm build
```

### Run in Development Mode

```bash
pnpm dev
```

### Run Tests

```bash
pnpm test
```

### Lint Code

```bash
pnpm lint
```

## 📊 Monitoring & Debugging

### Kafka UI
Access Kafka topics and messages at `http://localhost:8080`

### Mongo Express
Browse MongoDB collections at `http://localhost:8081`
- Username: `admin`
- Password: `admin`

### Docker Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f mongodb
docker-compose logs -f kafka
```

## 🔧 Configuration

### Environment Variables

Key environment variables in `.env`:

```bash
# MongoDB
MONGODB_URI=mongodb://admin:teledrive_password_2024@localhost:27017/teledrive?authSource=admin

# Kafka
KAFKA_BROKERS=localhost:9093

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Telegram
TELEGRAM_BOT_TOKEN=your-telegram-bot-token-here
TELEGRAM_API_ID=your-telegram-api-id
TELEGRAM_API_HASH=your-telegram-api-hash

# GCP
GCP_PROJECT_ID=your-gcp-project-id
GCP_STORAGE_BUCKET=teledrive-files
```

## 📚 Documentation

- [PRD (Product Requirements Document)](./docs/PRD.pdf)
- [Architecture Overview](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🔄 Development Phases

This project follows a 15-phase development plan:

- ✅ **Phase 1**: Foundation & Infrastructure Setup
- 🔄 **Phase 2**: Auth Service & User Service
- ⏳ **Phase 3**: API Gateway & Basic Routing
- ⏳ **Phase 4**: File Upload Service & Storage Manager
- ⏳ **Phase 5**: File Processing Service
- ⏳ **Phase 6**: File Metadata Service & Search
- ⏳ **Phase 7**: Download Service
- ⏳ **Phase 8**: Video Streaming Service
- ⏳ **Phase 9**: Preview Service
- ⏳ **Phase 10**: Notification Service
- ⏳ **Phase 11**: WebSocket Realtime Service
- ⏳ **Phase 12**: Activity Log Service
- ⏳ **Phase 13**: Admin Service & Dashboard
- ⏳ **Phase 14**: Integration, Testing & Bug Fixes
- ⏳ **Phase 15**: GCP Deployment & Production Launch

## 🧪 Testing

### Verify MongoDB Connection

```bash
# Using mongosh
mongosh "mongodb://admin:teledrive_password_2024@localhost:27017/teledrive?authSource=admin"

# Create test document
db.test.insertOne({ message: "Hello TeleDrive!" })
```

### Verify Kafka

```bash
# List topics (from inside kafka container)
docker exec -it teledrive-kafka kafka-topics --list --bootstrap-server localhost:9092

# Create test topic
docker exec -it teledrive-kafka kafka-topics --create --topic test --bootstrap-server localhost:9092

# Produce test message
docker exec -it teledrive-kafka kafka-console-producer --topic test --bootstrap-server localhost:9092
# Type a message and press Enter

# Consume test message
docker exec -it teledrive-kafka kafka-console-consumer --topic test --from-beginning --bootstrap-server localhost:9092
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **TeleDrive Architecture Team**

## 🙏 Acknowledgments

- Telegram for the amazing MTProto protocol
- The open-source community for excellent tools and libraries
- All contributors who help improve this project

---

**Happy Coding! 🎉**

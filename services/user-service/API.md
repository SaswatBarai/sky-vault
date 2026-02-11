# User Service API

Base URL: `http://localhost:3002` (configurable via `USER_SERVICE_PORT`)

All endpoints require **Authorization: Bearer &lt;access_token&gt;** (from Auth Service).

## Health

- **GET /health** — Service health check.
  - **200**: `{ status, service, timestamp, uptime }`

## User

- **GET /users/me** — Current user profile.
  - **200**: User object (id, username, firstName, lastName, photoUrl, role, storageQuota, isActive, createdAt, updatedAt).
  - **401**: Missing or invalid token.
  - **404**: User not found.

- **PATCH /users/me** — Update current user profile.
  - **Body**: Optional `firstName`, `lastName`, `username`, `photoUrl`.
  - **200**: Updated user object.
  - **401**: Missing or invalid token.
  - **404**: User not found.

- **GET /users/me/quota** — Storage quota for current user.
  - **200**: `{ total, used }` (bytes).
  - **401**: Missing or invalid token.
  - **404**: User not found.

## Storage quota

- Stored per user (created at first login via Telegram).
- Default total: 2GB. Used is updated by storage/file services.
- Use User Service methods (or internal APIs) to add/subtract used bytes and check quota before uploads.

## Status codes

- **200** — Success.
- **401** — Unauthorized (invalid/missing token).
- **404** — User not found.
- **500** — Internal server error.

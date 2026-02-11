# Auth Service API

Base URL: `http://localhost:3001` (configurable via `AUTH_SERVICE_PORT`)

## Health

- **GET /health** — Service health check.
  - **200**: `{ status, service, timestamp, uptime }`

## Authentication

- **POST /auth/login** — Telegram OAuth login.
  - **Body**: Telegram widget auth data (e.g. `id`, `first_name`, `last_name`, `username`, `photo_url`, `auth_date`, `hash`).
  - **200**: `{ user, accessToken, refreshToken }`
  - **401**: Invalid Telegram auth data.

- **POST /auth/refresh** — Refresh access token.
  - **Body**: `{ "refreshToken": "<refresh_token>" }`
  - **200**: `{ accessToken, refreshToken }`
  - **401**: Invalid or expired refresh token.

- **GET /auth/me** — Current user (protected).
  - **Headers**: `Authorization: Bearer <access_token>`
  - **200**: User object.
  - **401**: Missing or invalid token.
  - **404**: User not found.

## JWT

- Access token: short-lived (e.g. 15m). Use in `Authorization: Bearer <token>`.
- Refresh token: long-lived (e.g. 30d). Use only with POST /auth/refresh.
- Claims: `userId`, `role`, `version` (and `exp`, `iat`).

## Status codes

- **200** — Success.
- **400** — Validation error (body/query/params).
- **401** — Unauthorized (invalid/missing token or Telegram data).
- **404** — User not found.
- **500** — Internal server error.

import { config } from '@teledrive/shared-config';

/**
 * Route entry: maps a URL prefix to a downstream service.
 *   prefix     – path prefix the gateway listens on (e.g. "/api/v1/auth")
 *   target     – full base URL of the downstream service
 *   name       – friendly service name (used in logs / circuit-breaker keys)
 *   isPublic   – if true the route is accessible WITHOUT a valid JWT
 *   stripPrefix – if true the prefix is removed before forwarding
 *   rewriteTo  – the downstream mount point that replaces the stripped prefix
 *                 e.g. /api/v1/auth/login  →  /auth/login  (rewriteTo = "/auth")
 */
export interface ServiceRoute {
    prefix: string;
    target: string;
    name: string;
    isPublic: boolean;
    stripPrefix: boolean;
    rewriteTo: string;
}

/**
 * Ordered list of routes.  More-specific prefixes should come first so
 * Express matches them before the shorter catch-all.
 */
export const serviceRoutes: ServiceRoute[] = [
    // ── Auth Service ──────────────────────────────────────
    {
        prefix: '/api/v1/auth',
        target: `http://localhost:${config.ports.authService}`,
        name: 'auth-service',
        isPublic: true,
        stripPrefix: true,
        rewriteTo: '/auth', // /api/v1/auth/login  →  /auth/login
    },

    // ── User Service ──────────────────────────────────────
    {
        prefix: '/api/v1/users',
        target: `http://localhost:${config.ports.userService}`,
        name: 'user-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/users', // /api/v1/users/me  →  /users/me
    },

    // ── File Upload Service ───────────────────────────────
    {
        prefix: '/api/v1/upload',
        target: `http://localhost:${config.ports.fileUploadService}`,
        name: 'file-upload-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/upload',
    },

    // ── File Metadata Service ─────────────────────────────
    {
        prefix: '/api/v1/files',
        target: `http://localhost:${config.ports.fileMetadataService}`,
        name: 'file-metadata-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/files',
    },

    // ── Download Service ──────────────────────────────────
    {
        prefix: '/api/v1/download',
        target: `http://localhost:${config.ports.downloadService}`,
        name: 'download-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/download',
    },

    // ── Video Streaming Service ───────────────────────────
    {
        prefix: '/api/v1/stream',
        target: `http://localhost:${config.ports.videoStreamingService}`,
        name: 'video-streaming-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/stream',
    },

    // ── Preview Service ───────────────────────────────────
    {
        prefix: '/api/v1/preview',
        target: `http://localhost:${config.ports.previewService}`,
        name: 'preview-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/preview',
    },

    // ── Notification Service ──────────────────────────────
    {
        prefix: '/api/v1/notifications',
        target: `http://localhost:${config.ports.notificationService}`,
        name: 'notification-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/notifications',
    },

    // ── Admin Service ─────────────────────────────────────
    {
        prefix: '/api/v1/admin',
        target: `http://localhost:${config.ports.adminService}`,
        name: 'admin-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/admin',
    },

    // ── Activity Log Service ──────────────────────────────
    {
        prefix: '/api/v1/activity',
        target: `http://localhost:${config.ports.activityLogService}`,
        name: 'activity-log-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/activity',
    },

    // ── Storage Manager Service ───────────────────────────
    {
        prefix: '/api/v1/storage',
        target: `http://localhost:${config.ports.storageManagerService}`,
        name: 'storage-manager-service',
        isPublic: false,
        stripPrefix: true,
        rewriteTo: '/storage',
    },
];


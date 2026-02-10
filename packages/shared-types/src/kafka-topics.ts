// Kafka Topic Names
export const KAFKA_TOPICS = {
    // User Events
    USER_REGISTERED: 'user.registered',
    USER_UPDATED: 'user.updated',
    USER_DELETED: 'user.deleted',
    USER_LOGGED_IN: 'user.logged_in',
    USER_LOGGED_OUT: 'user.logged_out',
    USER_QUOTA_EXCEEDED: 'user.quota_exceeded',

    // File Events
    FILE_UPLOADED: 'file.uploaded',
    FILE_UPLOAD_FAILED: 'file.upload.failed',
    FILE_UPLOAD_PROGRESS: 'file.upload.progress',
    FILE_DELETED: 'file.deleted',

    // Processing Events
    FILE_PROCESSING_STARTED: 'file.processing.started',
    FILE_PROCESSING_COMPLETED: 'file.processing.completed',
    FILE_PROCESSING_FAILED: 'file.processing.failed',

    // Download Events
    DOWNLOAD_REQUESTED: 'download.requested',
    DOWNLOAD_COMPLETED: 'download.completed',
    DOWNLOAD_FAILED: 'download.failed',

    // Streaming Events
    VIDEO_STREAMING_STARTED: 'video.streaming.started',
    VIDEO_STREAMING_STOPPED: 'video.streaming.stopped',
    VIDEO_PLAYBACK_PROGRESS: 'video.playback.progress',

    // Notification Events
    NOTIFICATION_CREATED: 'notification.created',
    NOTIFICATION_SENT: 'notification.sent',
    NOTIFICATION_DELIVERED: 'notification.delivered',
    NOTIFICATION_FAILED: 'notification.failed',

    // Storage Events
    STORAGE_OBJECT_CREATED: 'storage.object.created',
    STORAGE_OBJECT_DELETED: 'storage.object.deleted',
    STORAGE_POLICY_APPLIED: 'storage.policy.applied',

    // Activity Events
    ACTIVITY_LOGGED: 'activity.logged',

    // Auth Events
    TOKEN_REVOKED: 'token.revoked',

    // Admin Events
    ADMIN_ACTION_EXECUTED: 'admin.action.executed',
    USER_ACCOUNT_MODIFIED: 'user.account.modified',
    SYSTEM_CONFIG_CHANGED: 'system.config.changed',

    // Metadata Events
    METADATA_UPDATED: 'metadata.updated',
    METADATA_SEARCH_COMPLETED: 'metadata.search.completed',

    // Preview Events
    PREVIEW_GENERATED: 'preview.generated',
    PREVIEW_CACHE_MISS: 'preview.cache.miss',

    // API Events
    API_REQUEST_LOGGED: 'api.request.logged',
    API_ERROR_OCCURRED: 'api.error.occurred',
} as const;

export type KafkaTopicName = typeof KAFKA_TOPICS[keyof typeof KAFKA_TOPICS];

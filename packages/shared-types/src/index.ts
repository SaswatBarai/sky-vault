// User Types
export interface User {
    _id: string;
    telegram_id: string;
    username: string;
    email?: string;
    profile_picture?: string;
    storage_quota: number;
    storage_used: number;
    preferences: UserPreferences;
    created_at: Date;
    updated_at: Date;
    is_active: boolean;
    last_login_at?: Date;
}

export interface UserPreferences {
    theme: 'light' | 'dark';
    notifications_enabled: boolean;
    language: string;
}

// Auth Types
export interface AuthSession {
    _id: string;
    user_id: string;
    refresh_token_hash: string;
    access_token_hash?: string;
    issued_at: Date;
    expires_at: Date;
    device_info: DeviceInfo;
    is_revoked: boolean;
    revoked_at?: Date;
}

export interface DeviceInfo {
    user_agent: string;
    ip_address: string;
    device_id?: string;
}

export interface JWTPayload {
    user_id: string;
    telegram_id: string;
    username: string;
    iat: number;
    exp: number;
}

// File Types
export interface File {
    _id: string;
    file_id: string;
    user_id: string;
    filename: string;
    size: number;
    mime_type: string;
    storage_path: string;
    checksum: string;
    upload_status: UploadStatus;
    processing_status: ProcessingStatus;
    processed_variants: ProcessedVariant[];
    metadata: FileMetadata;
    tags: string[];
    folder_id?: string;
    is_public: boolean;
    upload_started_at: Date;
    upload_completed_at?: Date;
    created_at: Date;
    updated_at: Date;
}

export type UploadStatus = 'uploading' | 'completed' | 'failed';
export type ProcessingStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface ProcessedVariant {
    type: 'thumbnail' | 'transcode' | 'preview';
    size: string;
    url: string;
    width?: number;
    height?: number;
    bitrate?: number;
}

export interface FileMetadata {
    dimensions?: { width: number; height: number };
    duration?: number;
    codec?: string;
    exif?: Record<string, any>;
    [key: string]: any;
}

// Kafka Event Types
export interface KafkaEvent<T = any> {
    event_id: string;
    event_type: string;
    timestamp: Date;
    service_name: string;
    data: T;
}

export interface FileUploadedEvent {
    file_id: string;
    user_id: string;
    filename: string;
    size: number;
    mime_type: string;
}

export interface FileProcessingCompletedEvent {
    file_id: string;
    processing_type: string;
    variants: ProcessedVariant[];
}

export interface UserRegisteredEvent {
    user_id: string;
    telegram_id: string;
    username: string;
}

// Notification Types
export interface Notification {
    _id: string;
    notification_id: string;
    user_id: string;
    type: NotificationType;
    title: string;
    message: string;
    priority: NotificationPriority;
    status: NotificationStatus;
    channels: NotificationChannel[];
    data?: Record<string, any>;
    created_at: Date;
    sent_at?: Date;
    read_at?: Date;
}

export type NotificationType =
    | 'upload_complete'
    | 'processing_complete'
    | 'quota_warning'
    | 'download_ready'
    | 'system_alert';

export type NotificationPriority = 'low' | 'medium' | 'high' | 'critical';
export type NotificationStatus = 'pending' | 'sent' | 'delivered' | 'failed';
export type NotificationChannel = 'telegram' | 'in_app' | 'email';

// API Response Types
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: ApiError;
    timestamp: Date;
}

export interface ApiError {
    code: string;
    message: string;
    details?: any;
}

// Service Health Types
export interface HealthCheck {
    service: string;
    status: 'healthy' | 'unhealthy' | 'degraded';
    timestamp: Date;
    details?: Record<string, any>;
}

export * from './kafka-topics';
export * from './service-events';

// Service-specific event payloads
export interface ServiceEvent<T = any> {
    eventId: string;
    eventType: string;
    timestamp: Date;
    serviceName: string;
    payload: T;
    metadata?: Record<string, any>;
}

// File Upload Events
export interface FileUploadStartedPayload {
    fileId: string;
    userId: string;
    filename: string;
    size: number;
    mimeType: string;
}

export interface FileUploadProgressPayload {
    fileId: string;
    userId: string;
    bytesUploaded: number;
    totalBytes: number;
    percentage: number;
}

export interface FileUploadCompletedPayload {
    fileId: string;
    userId: string;
    filename: string;
    size: number;
    storagePath: string;
    checksum: string;
}

// Processing Events
export interface ProcessingJobPayload {
    jobId: string;
    fileId: string;
    processingType: 'thumbnail' | 'transcode' | 'metadata_extraction';
    status: 'started' | 'completed' | 'failed';
    error?: string;
}

// Download Events
export interface DownloadRequestedPayload {
    downloadId: string;
    fileId: string;
    userId: string;
    ipAddress: string;
}

// Notification Events
export interface NotificationPayload {
    notificationId: string;
    userId: string;
    type: string;
    title: string;
    message: string;
    priority: 'low' | 'medium' | 'high' | 'critical';
    channels: string[];
}

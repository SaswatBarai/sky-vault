import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables
config({ path: resolve(process.cwd(), '../../.env') });

export interface Config {
    // MongoDB
    mongodb: {
        uri: string;
        database: string;
    };

    // Kafka
    kafka: {
        brokers: string[];
        clientId: string;
    };

    // JWT
    jwt: {
        secret: string;
        expiresIn: string;
        refreshExpiresIn: string;
    };

    // Telegram
    telegram: {
        botToken: string;
        apiId: string;
        apiHash: string;
    };

    // GCP
    gcp: {
        projectId: string;
        storageBucket: string;
        credentialsPath: string;
    };

    // Service Ports
    ports: {
        apiGateway: number;
        authService: number;
        userService: number;
        fileUploadService: number;
        fileProcessingService: number;
        fileMetadataService: number;
        downloadService: number;
        videoStreamingService: number;
        previewService: number;
        notificationService: number;
        websocketService: number;
        storageManagerService: number;
        activityLogService: number;
        adminService: number;
    };

    // Environment
    env: string;
    logLevel: string;

    // Rate Limiting
    rateLimit: {
        windowMs: number;
        maxRequests: number;
    };

    // Storage
    storage: {
        defaultQuota: number;
    };
}

function getEnv(key: string, defaultValue?: string): string {
    const value = process.env[key];
    if (!value && !defaultValue) {
        throw new Error(`Environment variable ${key} is required but not set`);
    }
    return value || defaultValue!;
}

function getEnvNumber(key: string, defaultValue: number): number {
    const value = process.env[key];
    return value ? parseInt(value, 10) : defaultValue;
}

export const config: Config = {
    mongodb: {
        uri: getEnv('MONGODB_URI', 'mongodb://admin:teledrive_password_2024@localhost:27017/teledrive?authSource=admin'),
        database: getEnv('MONGODB_DATABASE', 'teledrive'),
    },

    kafka: {
        brokers: getEnv('KAFKA_BROKERS', 'localhost:9093').split(','),
        clientId: getEnv('KAFKA_CLIENT_ID', 'teledrive-services'),
    },

    jwt: {
        secret: getEnv('JWT_SECRET', 'your-super-secret-jwt-key-change-this-in-production'),
        expiresIn: getEnv('JWT_EXPIRES_IN', '15m'),
        refreshExpiresIn: getEnv('JWT_REFRESH_EXPIRES_IN', '7d'),
    },

    telegram: {
        botToken: getEnv('TELEGRAM_BOT_TOKEN', ''),
        apiId: getEnv('TELEGRAM_API_ID', ''),
        apiHash: getEnv('TELEGRAM_API_HASH', ''),
    },

    gcp: {
        projectId: getEnv('GCP_PROJECT_ID', ''),
        storageBucket: getEnv('GCP_STORAGE_BUCKET', 'teledrive-files'),
        credentialsPath: getEnv('GCP_CREDENTIALS_PATH', './gcp-credentials.json'),
    },

    ports: {
        apiGateway: getEnvNumber('API_GATEWAY_PORT', 3000),
        authService: getEnvNumber('AUTH_SERVICE_PORT', 3001),
        userService: getEnvNumber('USER_SERVICE_PORT', 3002),
        fileUploadService: getEnvNumber('FILE_UPLOAD_SERVICE_PORT', 3003),
        fileProcessingService: getEnvNumber('FILE_PROCESSING_SERVICE_PORT', 3004),
        fileMetadataService: getEnvNumber('FILE_METADATA_SERVICE_PORT', 3005),
        downloadService: getEnvNumber('DOWNLOAD_SERVICE_PORT', 3006),
        videoStreamingService: getEnvNumber('VIDEO_STREAMING_SERVICE_PORT', 3007),
        previewService: getEnvNumber('PREVIEW_SERVICE_PORT', 3008),
        notificationService: getEnvNumber('NOTIFICATION_SERVICE_PORT', 3009),
        websocketService: getEnvNumber('WEBSOCKET_SERVICE_PORT', 3010),
        storageManagerService: getEnvNumber('STORAGE_MANAGER_SERVICE_PORT', 3011),
        activityLogService: getEnvNumber('ACTIVITY_LOG_SERVICE_PORT', 3012),
        adminService: getEnvNumber('ADMIN_SERVICE_PORT', 3013),
    },

    env: getEnv('NODE_ENV', 'development'),
    logLevel: getEnv('LOG_LEVEL', 'debug'),

    rateLimit: {
        windowMs: getEnvNumber('RATE_LIMIT_WINDOW_MS', 60000),
        maxRequests: getEnvNumber('RATE_LIMIT_MAX_REQUESTS', 100),
    },

    storage: {
        defaultQuota: getEnvNumber('DEFAULT_STORAGE_QUOTA', 5368709120), // 5GB
    },
};

export default config;

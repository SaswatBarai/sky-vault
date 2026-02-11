import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

export const config = {
    mongodb: {
        uri: process.env.MONGODB_URI || 'mongodb://admin:teledrive_password_2024@localhost:27017/teledrive?authSource=admin',
    },
    kafka: {
        brokers: (process.env.KAFKA_BROKERS || 'localhost:9093').split(','),
        clientId: 'teledrive-client',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'default-secret-key',
        expiresIn: '7d',
    },
    telegram: {
        botToken: process.env.TELEGRAM_BOT_TOKEN,
        apiId: parseInt(process.env.TELEGRAM_API_ID || '0'),
        apiHash: process.env.TELEGRAM_API_HASH,
    },
    gcp: {
        projectId: process.env.GCP_PROJECT_ID,
        storageBucket: process.env.GCP_STORAGE_BUCKET,
    }
} as const;

export type Config = typeof config;
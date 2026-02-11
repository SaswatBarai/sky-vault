import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        include: ['src/**/*.test.ts'],
        env: {
            TELEGRAM_BOT_TOKEN: 'test-token',
            TELEGRAM_API_ID: 'test-api-id',
            TELEGRAM_API_HASH: 'test-api-hash',
            GCP_PROJECT_ID: 'test-project',
            GCP_STORAGE_BUCKET: 'test-bucket',
            GCP_CREDENTIALS_PATH: './gcp-credentials.json',
            JWT_SECRET: 'test-jwt-secret',
        },
    },
    resolve: {
        alias: {
            '@teledrive/shared-config': path.resolve(__dirname, '../../packages/shared-config/src'),
            '@teledrive/shared-types': path.resolve(__dirname, '../../packages/shared-types/src'),
        },
    },
});

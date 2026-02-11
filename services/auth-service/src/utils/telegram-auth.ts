import crypto from 'crypto';
import { config } from '@teledrive/shared-config';

interface TelegramAuthData {
    id: string;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    auth_date: number;
    hash: string;
}

export const verifyTelegramAuth = (data: TelegramAuthData): boolean => {
    const { hash, ...userData } = data;
    
    // 1. Create the data-check-string
    // Sort keys alphabetically and join with newline
    const dataCheckArr = Object.keys(userData)
        .sort()
        .map(key => `${key}=${(userData as any)[key]}`);
    
    const dataCheckString = dataCheckArr.join('\n');

    // 2. Create the Secret Key using SHA256 of the Bot Token
    const secretKey = crypto
        .createHash('sha256')
        .update(config.telegram.botToken || '')
        .digest();

    // 3. Calculate HMAC-SHA256
    const hmac = crypto
        .createHmac('sha256', secretKey)
        .update(dataCheckString)
        .digest('hex');

    // 4. Compare calculated hash with received hash
    return hmac === hash;
};
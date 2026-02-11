import { User } from '../models/user.models';
import { verifyTelegramAuth } from '../utils/telegram-auth';
import { generateTokens, verifyToken } from '../utils/jwt';
import { IUser } from '@teledrive/shared-types';

export class AuthService {
    
    /**
     * Handles Telegram Login: Verifies hash, upserts user, returns tokens
     */
    async loginWithTelegram(authData: any) {
        // 1. Verify Telegram Data
        const isValid = verifyTelegramAuth(authData);
        if (!isValid) {
            throw new Error('INVALID_AUTH_DATA');
        }

        // 2. Find or Create User (Upsert)
        const userId = authData.id.toString();
        let user = await User.findById(userId);

        if (!user) {
            // Create new user
            user = new User({
                _id: userId,
                firstName: authData.first_name,
                lastName: authData.last_name,
                username: authData.username,
                photoUrl: authData.photo_url,
                role: 'user',
                storageQuota: { total: 2 * 1024 * 1024 * 1024, used: 0 }
            });
        } else {
            // Update existing user details to keep them fresh
            user.firstName = authData.first_name;
            user.lastName = authData.last_name;
            user.username = authData.username;
            user.photoUrl = authData.photo_url;
        }

        await user.save();

        // 3. Generate Tokens
        const userObj: IUser = { ...user.toObject(), id: user._id };
        const tokens = generateTokens(userObj);

        return { user: userObj, ...tokens };
    }

    /**
     * Handles Token Refresh
     */
    async refreshToken(token: string) {
        // Verify token
        const payload = verifyToken(token);
        
        // Check if user exists and is active
        const user = await User.findById(payload.userId);
        if (!user || !user.isActive) {
            throw new Error('USER_NOT_FOUND');
        }

        // Generate new tokens
        const userObj: IUser = { ...user.toObject(), id: user._id };
        return generateTokens(userObj);
    }
}
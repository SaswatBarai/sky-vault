import bcrypt from 'bcryptjs';
import { User } from '../models/user.models';
import { AuthSession } from '../models/auth-session.model';
import { verifyTelegramAuth } from '../utils/telegram-auth';
import { generateTokens, verifyToken } from '../utils/jwt';
import { publishUserRegistered, publishUserLoggedIn, publishUserLoggedOut, publishTokenRevoked } from '../utils/kafka';
import { IUser } from '@teledrive/shared-types';

const REFRESH_TOKEN_SALT_ROUNDS = 10;

export class AuthService {

    /**
     * Handles Telegram Login: Verifies hash, upserts user, stores session, returns tokens
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
        const isNewUser = !user;

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

        // 3. Publish Kafka events
        if (isNewUser && user.createdAt) {
            await publishUserRegistered({ id: user._id, username: user.username, firstName: user.firstName, createdAt: user.createdAt });
        }
        await publishUserLoggedIn(user._id, new Date().toISOString());

        // 4. Generate Tokens
        const userObj: IUser = { ...user.toObject(), id: user._id };
        const tokens = generateTokens(userObj);

        // 5. Store session with hashed refresh token
        const refreshTokenHash = await bcrypt.hash(tokens.refreshToken, REFRESH_TOKEN_SALT_ROUNDS);
        await AuthSession.create({
            userId: user._id,
            refreshTokenHash,
            issuedAt: new Date(),
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
            deviceInfo: authData.deviceInfo || 'unknown',
        });

        return { user: userObj, ...tokens };
    }

    /**
     * Handles Token Refresh — single-use: old refresh token is revoked, new session created
     */
    async refreshToken(token: string) {
        // 1. Verify JWT validity
        const payload = verifyToken(token);

        // 2. Check if user exists and is active
        const user = await User.findById(payload.userId);
        if (!user || !user.isActive) {
            throw new Error('USER_NOT_FOUND');
        }

        // 3. Find a valid (non-revoked) session matching this refresh token
        const sessions = await AuthSession.find({
            userId: payload.userId,
            isRevoked: false,
        });

        let matchedSession = null;
        for (const session of sessions) {
            const isMatch = await bcrypt.compare(token, session.refreshTokenHash);
            if (isMatch) {
                matchedSession = session;
                break;
            }
        }

        if (!matchedSession) {
            throw new Error('SESSION_NOT_FOUND');
        }

        // 4. Revoke the old session (single-use refresh tokens)
        matchedSession.isRevoked = true;
        await matchedSession.save();

        // 5. Generate new tokens
        const userObj: IUser = { ...user.toObject(), id: user._id };
        const newTokens = generateTokens(userObj);

        // 6. Store new session
        const refreshTokenHash = await bcrypt.hash(newTokens.refreshToken, REFRESH_TOKEN_SALT_ROUNDS);
        await AuthSession.create({
            userId: user._id,
            refreshTokenHash,
            issuedAt: new Date(),
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            deviceInfo: matchedSession.deviceInfo,
        });

        return newTokens;
    }

    /**
     * Handles Logout — revokes the session and publishes Kafka events
     */
    async logout(userId: string, refreshToken: string) {
        // Find the session matching this refresh token
        const sessions = await AuthSession.find({
            userId,
            isRevoked: false,
        });

        let matchedSession = null;
        for (const session of sessions) {
            const isMatch = await bcrypt.compare(refreshToken, session.refreshTokenHash);
            if (isMatch) {
                matchedSession = session;
                break;
            }
        }

        if (!matchedSession) {
            throw new Error('SESSION_NOT_FOUND');
        }

        // Revoke the session
        matchedSession.isRevoked = true;
        await matchedSession.save();

        // Publish Kafka events
        await publishUserLoggedOut(userId, 'manual');
        await publishTokenRevoked(userId, matchedSession._id.toString());

        return { message: 'Logged out successfully' };
    }
}
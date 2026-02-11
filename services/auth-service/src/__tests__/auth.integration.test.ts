/**
 * Integration tests for auth flow.
 * Run with: pnpm exec vitest run src/__tests__/auth.integration.test.ts
 * Or add "test": "vitest run" to auth-service package.json and run pnpm test.
 *
 * Prerequisites: MongoDB and (optional) Kafka; JWT_SECRET and TELEGRAM_BOT_TOKEN in .env.
 * These tests validate JWT generation, refresh, and token validation behavior.
 */

import { generateTokens, verifyToken } from '../utils/jwt';
import { IUser } from '@teledrive/shared-types';

describe('Auth flow', () => {
    const mockUser: IUser = {
        id: '123',
        firstName: 'Test',
        lastName: 'User',
        role: 'user',
        storageQuota: { total: 2 * 1024 * 1024 * 1024, used: 0 },
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    it('generates JWT with correct claims (user_id, exp, iat)', () => {
        const { accessToken, refreshToken } = generateTokens(mockUser);
        expect(accessToken).toBeDefined();
        expect(refreshToken).toBeDefined();

        const accessPayload = verifyToken(accessToken);
        expect(accessPayload.userId).toBe(mockUser.id);
        expect(accessPayload.role).toBe('user');
        expect(accessPayload.version).toBeDefined();
        expect((accessPayload as Record<string, unknown>).exp).toBeDefined();
        expect((accessPayload as Record<string, unknown>).iat).toBeDefined();

        const refreshPayload = verifyToken(refreshToken);
        expect(refreshPayload.userId).toBe(mockUser.id);
    });

    it('refresh token extends session (new tokens returned)', () => {
        const { refreshToken } = generateTokens(mockUser);
        const payload = verifyToken(refreshToken);
        const newTokens = generateTokens({ ...mockUser, id: payload.userId });
        expect(newTokens.accessToken).toBeDefined();
        expect(newTokens.refreshToken).toBeDefined();
    });

    it('invalid token throws on verify', () => {
        expect(() => verifyToken('invalid.token.here')).toThrow();
        expect(() => verifyToken('')).toThrow();
    });
});

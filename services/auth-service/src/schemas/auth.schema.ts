import { z } from 'zod';

export const TelegramLoginSchema = z.object({
    body: z.object({
        id: z.union([z.string(), z.number()]).transform(val => val.toString()),
        first_name: z.string(),
        last_name: z.string().optional(),
        username: z.string().optional(),
        photo_url: z.string().optional(),
        auth_date: z.number(),
        hash: z.string(),
    })
});

export const RefreshTokenSchema = z.object({
    body: z.object({
        refreshToken: z.string().min(1, "Refresh token is required")
    })
});
export * from './kafka-topics';
export * from './service-events';

// User Interface
export interface IUser {
    id: string; // This will be the Telegram User ID
    username?: string;
    firstName: string;
    lastName?: string;
    photoUrl?: string;
    role: 'user' | 'admin';
    storageQuota: {
        total: number; // in bytes (e.g., 2GB)
        used: number;
    };
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// JWT Payload
export interface IJwtPayload {
    userId: string;
    role: 'user' | 'admin';
    version: number; // To invalidate tokens if needed
}

// Auth Response
export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

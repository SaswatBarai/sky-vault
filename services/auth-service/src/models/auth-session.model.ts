import mongoose, { Schema, Document } from 'mongoose';

export interface AuthSessionDocument extends Document {
    userId: string;
    refreshTokenHash: string;
    issuedAt: Date;
    expiresAt: Date;
    deviceInfo?: string;
    isRevoked: boolean;
}

const AuthSessionSchema = new Schema({
    userId: { type: String, required: true, index: true },
    refreshTokenHash: { type: String, required: true, index: true },
    issuedAt: { type: Date, required: true, default: Date.now },
    expiresAt: { type: Date, required: true },
    deviceInfo: { type: String },
    isRevoked: { type: Boolean, default: false },
}, {
    timestamps: true,
});

// TTL index: automatically remove expired sessions after 7 days past expiry
AuthSessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 7 * 24 * 60 * 60 });

export const AuthSession = mongoose.model<AuthSessionDocument>('AuthSession', AuthSessionSchema);

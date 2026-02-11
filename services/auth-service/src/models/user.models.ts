import mongoose, { Schema } from 'mongoose';
import { IUser } from '@teledrive/shared-types';

export interface UserDocument extends Omit<IUser, 'id'> {
    _id: string;
}

const UserSchema = new Schema({
    _id: { type: String, required: true },
    username: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String },
    photoUrl: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    storageQuota: {
        total: { type: Number, default: 2 * 1024 * 1024 * 1024 },
        used: { type: Number, default: 0 }
    },
    isActive: { type: Boolean, default: true }
}, { 
    timestamps: true,
    _id: false 
});

export const User = mongoose.model<UserDocument>('User', UserSchema);
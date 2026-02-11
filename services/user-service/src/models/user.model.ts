import mongoose, { Schema } from 'mongoose';
import { IUser } from '@teledrive/shared-types';

export interface UserDocument extends Omit<IUser, 'id'> {
    _id: string; // Telegram ID as primary key
}

const UserSchema = new Schema({
    _id: { type: String, required: true }, // Telegram ID as primary key
    username: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String },
    photoUrl: { type: String },
    role: { 
        type: String, 
        enum: ['user', 'admin'], 
        default: 'user' 
    },
    storageQuota: {
        total: { type: Number, default: 2 * 1024 * 1024 * 1024 }, // Default 2GB
        used: { type: Number, default: 0 }
    },
    isActive: { type: Boolean, default: true }
}, { 
    timestamps: true,
    _id: false // Disable auto-generated ObjectId since we use Telegram ID
});

export const User = mongoose.model<UserDocument>('User', UserSchema);
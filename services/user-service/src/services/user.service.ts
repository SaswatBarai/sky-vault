import { User } from '../models/user.model';
import { IUser } from '@teledrive/shared-types';

export class UserService {

    async getById(userId: string): Promise<IUser | null> {
        const user = await User.findById(userId);
        if (!user || !user.isActive) return null;
        return { ...user.toObject(), id: user._id };
    }

    async updateProfile(userId: string, data: Partial<Pick<IUser, 'firstName' | 'lastName' | 'username' | 'photoUrl'>>): Promise<IUser | null> {
        const user = await User.findByIdAndUpdate(
            userId,
            { $set: data },
            { new: true }
        );
        if (!user || !user.isActive) return null;
        return { ...user.toObject(), id: user._id };
    }

    async getStorageQuota(userId: string): Promise<{ total: number; used: number } | null> {
        const user = await User.findById(userId).select('storageQuota');
        if (!user || !user.isActive) return null;
        return user.storageQuota;
    }

    /**
     * Add bytes to used quota. Returns new used value or null if user not found / quota exceeded.
     */
    async addStorageUsed(userId: string, bytes: number): Promise<{ used: number; total: number } | null> {
        const user = await User.findById(userId);
        if (!user || !user.isActive) return null;
        const newUsed = (user.storageQuota.used ?? 0) + bytes;
        if (newUsed > user.storageQuota.total) return null;
        user.storageQuota.used = newUsed;
        await user.save();
        return { used: user.storageQuota.used, total: user.storageQuota.total };
    }

    /**
     * Subtract bytes from used quota (e.g. on file delete).
     */
    async subtractStorageUsed(userId: string, bytes: number): Promise<{ used: number; total: number } | null> {
        const user = await User.findById(userId);
        if (!user || !user.isActive) return null;
        user.storageQuota.used = Math.max(0, (user.storageQuota.used ?? 0) - bytes);
        await user.save();
        return { used: user.storageQuota.used, total: user.storageQuota.total };
    }

    /**
     * Check if user has at least `bytes` available.
     */
    async hasQuota(userId: string, bytes: number): Promise<boolean> {
        const user = await User.findById(userId).select('storageQuota');
        if (!user || !user.isActive) return false;
        const used = user.storageQuota.used ?? 0;
        const total = user.storageQuota.total ?? 0;
        return used + bytes <= total;
    }

    /**
     * Admin: List users with pagination and optional search.
     */
    async listUsers(page: number = 1, limit: number = 20, search?: string): Promise<{
        users: IUser[];
        total: number;
        page: number;
        totalPages: number;
    }> {
        const skip = (page - 1) * limit;
        const query: any = {};

        if (search) {
            query.$or = [
                { username: { $regex: search, $options: 'i' } },
                { firstName: { $regex: search, $options: 'i' } },
                { lastName: { $regex: search, $options: 'i' } },
            ];
        }

        const [users, total] = await Promise.all([
            User.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
            User.countDocuments(query),
        ]);

        return {
            users: users.map(u => ({ ...u.toObject(), id: u._id })),
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }

    /**
     * Admin: Get any user by ID (including inactive).
     */
    async getAnyUserById(userId: string): Promise<IUser | null> {
        const user = await User.findById(userId);
        if (!user) return null;
        return { ...user.toObject(), id: user._id };
    }
}

import jwt, { SignOptions } from "jsonwebtoken";
import { config } from "@teledrive/shared-config";
import { IJwtPayload, IUser } from "@teledrive/shared-types";

export const generateTokens = (user: IUser): { accessToken: string; refreshToken: string } => {
    const payload: IJwtPayload = {
        userId: user.id,
        role: user.role,
        version: 1 // Increment this if you want to invalidate existing tokens
    }
    
    const accessTokenOptions: SignOptions = {
        expiresIn: config.jwt.accessTokenExpiresIn as any
    };
    
    const refreshTokenOptions: SignOptions = {
        expiresIn: config.jwt.refreshExpiresIn as any
    };
    
    const accessToken = jwt.sign(payload, config.jwt.secret, accessTokenOptions);
    const refreshToken = jwt.sign(payload, config.jwt.secret, refreshTokenOptions);
    
    return { accessToken, refreshToken };
}

export const verifyToken = (token: string): IJwtPayload => {
    return jwt.verify(token, config.jwt.secret) as IJwtPayload;
}

export const decodeToken = (token: string): IJwtPayload | null => {
    return jwt.decode(token) as IJwtPayload | null;
}
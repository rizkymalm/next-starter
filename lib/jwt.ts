import jwt from 'jsonwebtoken';

const accessSecret = process.env.JWT_ACCESS_SECRET!;
const refreshSecret = process.env.JWT_REFRESH_SECRET!;

export type Role = 'USER' | 'ADMIN' | 'SUPER_ADMIN';

export interface JwtPayload {
    id: string;
    email: string;
    role: Role;
}

export function signAccessToken(payload: JwtPayload) {
    return jwt.sign(payload, accessSecret, {
        expiresIn: '10m',
    });
}

export function signRefreshToken(payload: JwtPayload) {
    return jwt.sign(payload, refreshSecret, {
        expiresIn: '1d',
    });
}

export function verifyAccessToken(token: string) {
    return jwt.verify(token, accessSecret) as JwtPayload;
}

export function verifyRefreshToken(token: string) {
    return jwt.verify(token, refreshSecret) as JwtPayload;
}

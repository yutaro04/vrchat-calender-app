/**
 * JWT認証ヘルパー
 */

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';
const JWT_EXPIRES_IN = '7d'; // 7日間有効

export interface JwtPayload {
  userId: number;
  nickname: string;
}

/**
 * JWTトークンを生成
 */
export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

/**
 * JWTトークンを検証してペイロードを取得
 */
export function verifyToken(token: string): JwtPayload | null {
  try {
    // "Bearer "プレフィックスを削除
    const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;

    const decoded = jwt.verify(actualToken, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error('JWT verification failed:', error);
    return null;
  }
}

/**
 * AuthorizationヘッダーからユーザーIDを取得
 */
export function getUserIdFromToken(authHeader: string | null): number | null {
  if (!authHeader) {
    return null;
  }

  const payload = verifyToken(authHeader);
  return payload?.userId ?? null;
}

/**
 * ユーザーのイベント統計情報取得APIコントローラー
 */

import { NextRequest } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import {
  successResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api/apiResponse';

/**
 * GET /api/users/me/stats
 * ログインユーザーの参加予定・開催予定の件数を取得
 */
export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return unauthorizedResponse();
    }

    // メールアドレスからユーザーIDを取得
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { id: true },
    });

    if (!user) {
      return unauthorizedResponse();
    }

    const userId = user.id;

    // 参加予定: roleが"admin"以外の件数
    const participatingCount = await prisma.eventParticipant.count({
      where: {
        userId,
        role: { not: 'admin' },
        deletedAt: null,
      },
    });

    // 開催予定: roleが"admin"の件数
    const hostingCount = await prisma.eventParticipant.count({
      where: {
        userId,
        role: 'admin',
        deletedAt: null,
      },
    });

    const data = {
      participating: participatingCount,
      hosting: hostingCount,
    };

    return successResponse(data);
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return serverErrorResponse('統計情報の取得に失敗しました');
  }
}

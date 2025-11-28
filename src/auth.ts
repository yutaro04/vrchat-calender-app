import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" && profile?.email) {
        try {
          // Prisma経由でpublic.usersテーブルにUpsert
          // Supabase Auth側はトリガーで自動同期される
          const dbUser = await prisma.user.upsert({
            where: { email: profile.email },
            update: {
              nickname: profile.name || profile.email.split("@")[0],
              avatarUrl: (profile as any).picture || null,
            },
            create: {
              email: profile.email,
              nickname: profile.name || profile.email.split("@")[0],
              avatarUrl: (profile as any).picture || null,
            },
          });

          // NextAuthのユーザーIDにDBのIDをセット
          user.id = dbUser.id.toString();

          return true;
        } catch (error) {
          console.error("Error syncing user to database:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account, profile }) {
      // 初回サインイン時にユーザー情報とアカウント情報をトークンに追加
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      if (profile) {
        token.picture = (profile as any).picture;
        token.name = profile.name;
      }
      return token;
    },
    async session({ session, token }) {
      // セッションにユーザーIDとプロバイダー情報を追加
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.picture as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});

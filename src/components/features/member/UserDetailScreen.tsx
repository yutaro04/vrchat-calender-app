import React from "react";
import FloatingNav from "./FloatingNav";

const UserDetailScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <div>
              <h1 className="text-2xl font-bold tracking-wider">
                VIRTUAL <span className="font-normal">EVENTS</span>
              </h1>
              <p className="text-xs text-gray-500 mt-1 tracking-wide">FOR VRCHAT</p>
              <p className="text-xs text-gray-600 mt-1">バーチャル世界で開催されるイベントを発見し、共有しよう</p>
            </div>
          </div>
          
          <FloatingNav />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">会員詳細</h2>
          <p className="text-gray-600">プロフィール情報の確認と編集ができます</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-4xl">
          {/* Profile Header */}
          <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 text-white">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-medium">プロフィール情報</h3>
            </div>
            <button className="bg-white px-4 py-2 rounded text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
              編集
            </button>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/api/placeholder/96/96"
                  alt="プロフィール写真"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-1">ニックネーム</label>
                  <input
                    type="text"
                    defaultValue="VRChatユーザー"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-1">自己紹介文</label>
              <textarea
                rows={3}
                defaultValue="VRChatで色々なイベントに参加しています。音楽イベントやアート展示が好きです。よろしくお願いします！"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  メールアドレス
                </label>
                <input
                  type="email"
                  defaultValue="user@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  パスワード
                </label>
                <input
                  type="password"
                  defaultValue="********"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-8 max-w-4xl">
          <button className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            アカウント設定
          </button>
          <button className="px-6 py-3 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors">
            ログアウト
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-sm text-gray-500">
        © 2025 VRChat Events Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default UserDetailScreen;
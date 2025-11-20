import React from 'react';

// これは仮置きのコンポーネント

const FloatingNav: React.FC = () => {
  return (
    <div className="bg-white border-2 border-gray-900 rounded-2xl p-2 flex flex-col gap-3 items-center">
      {/* Top Navigation Bar */}
      <div className="w-full flex items-center gap-1">
        {/* User Info Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-900">
            <div className="w-full h-full rounded-full bg-gray-300"></div>
          </div>
          <span className="text-xs text-gray-900 font-normal">User Name</span>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        {/* Navigation Icons */}
        <div className="flex items-center gap-1">
          <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          {/* Active button */}
          <button className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="w-full border-t border-gray-200 pt-2">
        <div className="flex gap-2">
          {/* Participating Events Card */}
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-600">参加予定</div>
              <div className="text-sm font-bold text-gray-900">3件</div>
            </div>
          </div>

          {/* Hosting Events Card */}
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-600">開催予定</div>
              <div className="text-sm font-bold text-gray-900">2件</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;

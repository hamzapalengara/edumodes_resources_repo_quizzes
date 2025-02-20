import React from 'react';

const NumberTracingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-300 to-purple-200 p-6">
      <div className="w-[420px] h-[240px] bg-white rounded-2xl shadow-xl mx-auto overflow-hidden">
        <div className="h-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-bl from-indigo-200/40 to-purple-200/40 rounded-full blur-2xl"></div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-indigo-900 text-center mb-4 relative">
            Number Tracing
          </h1>

          {/* Preview Content */}
          <div className="flex items-center justify-center gap-6 relative">
            {/* Sample Numbers */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/50">
                <span className="text-2xl font-bold text-indigo-900">1</span>
              </div>
              <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/50">
                <span className="text-2xl font-bold text-indigo-900">2</span>
              </div>
              <div className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/50">
                <span className="text-2xl font-bold text-indigo-900">3</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-16 w-px bg-indigo-300/50"></div>

            {/* Fruits */}
            <div className="flex items-center gap-2">
              <span className="text-3xl filter drop-shadow-md">🍎</span>
              <span className="text-3xl filter drop-shadow-md">🍌</span>
              <span className="text-3xl filter drop-shadow-md">🍇</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 text-center relative">
            <p className="text-indigo-800 text-sm">
              Learn to write numbers 1-10 with colorful fruits!
            </p>
          </div>

          {/* Level Indicator */}
          <div className="mt-4 flex items-center justify-center gap-1">
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
            <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
            <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberTracingThumbnail; 
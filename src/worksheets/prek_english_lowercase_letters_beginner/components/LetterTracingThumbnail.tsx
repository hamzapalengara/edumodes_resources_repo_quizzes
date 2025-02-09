import React from 'react';

const LetterTracingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-emerald-300 to-yellow-200 p-6">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-xl mx-auto overflow-hidden">
        <div className="h-full bg-gradient-to-b from-emerald-200 via-yellow-100 to-emerald-100 p-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-emerald-900 text-center mb-4">
            Jungle Letter Adventure
          </h1>

          {/* Preview Content */}
          <div className="flex items-center justify-center gap-6">
            {/* Sample Letters */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-emerald-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-900">a</span>
              </div>
              <div className="w-12 h-12 bg-emerald-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-900">b</span>
              </div>
              <div className="w-12 h-12 bg-emerald-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-900">c</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-16 w-px bg-emerald-300/50"></div>

            {/* Animals */}
            <div className="flex items-center gap-2">
              <span className="text-3xl">🦁</span>
              <span className="text-3xl">🐘</span>
              <span className="text-3xl">🦒</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 text-center">
            <p className="text-emerald-700 text-sm">
              Learn to write lowercase letters a-j with jungle animal friends!
            </p>
          </div>

          {/* Level Indicator */}
          <div className="mt-4 flex items-center justify-center gap-1">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-200"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterTracingThumbnail; 
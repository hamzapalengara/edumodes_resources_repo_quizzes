import React from 'react';

const NumberTracingThumbnail: React.FC = () => {
  return (
    // Outer container: exactly 500x375px (4:3)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-300 to-purple-200 flex items-center justify-center">
      {/* Inner container: exactly 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 relative">
          {/* Decorative background elements - scaled for inner container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-bl from-indigo-200/40 to-purple-200/40 rounded-full blur-xl"></div>
          </div>

          {/* Content scaled for 420x240 container */}
          <div className="relative h-full flex flex-col justify-between">
            {/* Title */}
            <h1 className="text-2xl font-bold text-indigo-900 text-center">
              Number Tracing
            </h1>

            {/* Preview Content */}
            <div className="flex items-center justify-center gap-4">
              {/* Sample Numbers */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/50">
                  <span className="text-xl font-bold text-indigo-900">1</span>
                </div>
                <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/50">
                  <span className="text-xl font-bold text-indigo-900">2</span>
                </div>
                <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/50">
                  <span className="text-xl font-bold text-indigo-900">3</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-12 w-px bg-indigo-300/50"></div>

              {/* Fruits */}
              <div className="flex items-center gap-2">
                <span className="text-2xl filter drop-shadow-md">🍎</span>
                <span className="text-2xl filter drop-shadow-md">🍌</span>
                <span className="text-2xl filter drop-shadow-md">🍇</span>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="space-y-2">
              {/* Description */}
              <p className="text-sm text-indigo-800 text-center">
                Learn to write numbers 1-10 with colorful fruits!
              </p>

              {/* Level Indicator */}
              <div className="flex items-center justify-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberTracingThumbnail; 
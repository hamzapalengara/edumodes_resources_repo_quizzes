import React from 'react';

const ObjectCountingTenThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-emerald-100 via-emerald-50 to-cyan-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white/60 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden border border-emerald-200">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-200/40 to-cyan-200/40 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-200/40 to-emerald-200/40 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-bold text-emerald-900 mb-2">
            Count Objects and Match Numbers
          </h1>
          <p className="text-cyan-800 font-medium mb-4">
            Count and Choose Numbers 5-10
          </p>

          {/* Preview Elements */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-2 text-3xl">
              <span>🧊</span>
              <span>🧊</span>
              <span>🧊</span>
              <span>🧊</span>
              <span>🧊</span>
              <span>🧊</span>
              <span>🧊</span>
            </div>
            <span className="text-2xl text-emerald-400">➡️</span>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-12 h-12 bg-white/80 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-emerald-800 border border-emerald-200">
                6
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-emerald-800 border-2 border-emerald-200">
                7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectCountingTenThumbnail; 
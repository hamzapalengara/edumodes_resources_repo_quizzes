import React from 'react';

const ObjectCountingTwentyThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-purple-800/50 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden border border-purple-500/20">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-bold text-purple-100 mb-2">
            Count Objects and Match Numbers
          </h1>
          <p className="text-purple-200 font-medium mb-4">
            Count and Choose Numbers 11-20
          </p>

          {/* Preview Elements */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-wrap gap-1 max-w-[180px] justify-center">
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
              <span className="text-2xl">💎</span>
            </div>
            <span className="text-2xl text-purple-300">➡️</span>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-12 h-12 bg-purple-800/70 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-purple-200 border border-purple-500/30">
                12
              </div>
              <div className="w-12 h-12 bg-purple-600/50 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-purple-100 border-2 border-purple-400/30">
                13
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectCountingTwentyThumbnail; 
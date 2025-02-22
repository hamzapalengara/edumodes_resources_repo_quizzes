import React from 'react';

const NumberSoundMatchingTenThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-black/50 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden border border-red-500/20">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-red-800/20 to-slate-900/20 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-bold text-red-100 mb-2">
            Match Numbers 5-10 with Sounds
          </h1>
          <p className="text-red-200 font-medium mb-4">
            Listen and Find the Right Number
          </p>

          {/* Preview Elements */}
          <div className="flex items-center justify-center gap-4">
            <div className="bg-black/70 rounded-lg p-3 flex items-center gap-2 border border-red-500/30">
              <span className="text-2xl">🔊</span>
              <span className="font-bold text-red-400">"seven"</span>
            </div>
            <span className="text-2xl text-red-300">➡️</span>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-12 h-12 bg-black/70 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-red-200 border border-red-500/30">
                6
              </div>
              <div className="w-12 h-12 bg-red-900/50 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-red-300 border-2 border-red-500/30">
                7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSoundMatchingTenThumbnail; 
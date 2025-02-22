import React from 'react';

const NumberSoundMatchingFiveThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-slate-800/50 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden border border-blue-500/20">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-bold text-blue-100 mb-2">
            Match Numbers 1-5 with Sounds
          </h1>
          <p className="text-blue-200 font-medium mb-4">
            Listen and Find the Right Number
          </p>

          {/* Preview Elements */}
          <div className="flex items-center justify-center gap-4">
            <div className="bg-slate-800/70 rounded-lg p-3 flex items-center gap-2 border border-blue-500/30">
              <span className="text-2xl">🔊</span>
              <span className="font-bold text-red-400">"three"</span>
            </div>
            <span className="text-2xl text-blue-300">➡️</span>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-12 h-12 bg-slate-800/70 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-blue-200 border border-blue-500/30">
                2
              </div>
              <div className="w-12 h-12 bg-green-900/50 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-green-300 border-2 border-green-500/30">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSoundMatchingFiveThumbnail; 
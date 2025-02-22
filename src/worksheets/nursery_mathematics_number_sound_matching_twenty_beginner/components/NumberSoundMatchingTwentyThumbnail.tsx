import React from 'react';

const NumberSoundMatchingTwentyThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white/60 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden border border-pink-200">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200/40 to-blue-200/40 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-200/40 to-pink-200/40 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-bold text-pink-900 mb-2">
            Match Numbers 11-20 with Sounds
          </h1>
          <p className="text-blue-800 font-medium mb-4">
            Listen and Find the Right Number
          </p>

          {/* Preview Elements */}
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white/80 rounded-lg p-3 flex items-center gap-2 border border-pink-200">
              <span className="text-2xl">🔊</span>
              <span className="font-bold text-blue-700">"thirteen"</span>
            </div>
            <span className="text-2xl text-pink-400">➡️</span>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-12 h-12 bg-white/80 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-pink-800 border border-pink-200">
                12
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-blue-800 border-2 border-blue-200">
                13
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSoundMatchingTwentyThumbnail; 
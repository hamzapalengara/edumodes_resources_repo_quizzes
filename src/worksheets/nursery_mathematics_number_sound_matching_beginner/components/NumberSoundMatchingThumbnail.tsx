import React from 'react';

const NumberSoundMatchingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-200/40 to-purple-200/40 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-bold text-indigo-900 mb-2">
            Number Sound Matching
          </h1>
          <p className="text-indigo-700 font-medium mb-4">
            Listen and Match Numbers 1-10
          </p>

          {/* Preview Elements */}
          <div className="flex items-center justify-center gap-4">
            <div className="bg-indigo-100 rounded-lg p-3 flex items-center gap-2">
              <span className="text-2xl">🔊</span>
              <span className="font-bold text-indigo-900">"seven"</span>
            </div>
            <span className="text-2xl">➡️</span>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-indigo-900 border-2 border-indigo-200">
                5
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-green-800 border-2 border-green-300">
                7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSoundMatchingThumbnail; 
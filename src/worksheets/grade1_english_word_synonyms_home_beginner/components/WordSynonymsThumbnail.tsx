import React from 'react';

const WordSynonymsThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col">
        {/* Title */}
        <h1 className="text-2xl font-bold text-amber-300 text-center mb-2">
          Home & Family Synonyms
        </h1>
        <p className="text-amber-200 text-center text-sm mb-4">
          Match words that mean the same thing
        </p>

        {/* Preview Grid */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {/* Example Card 1 - Matched Pair */}
          <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">🧹</span>
            <span className="text-xs font-bold text-white">neat</span>
          </div>
          <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">✨</span>
            <span className="text-xs font-bold text-white">tidy</span>
          </div>

          {/* Example Card 2 - Unmatched */}
          <div className="bg-gradient-to-br from-amber-900 to-rose-900 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">🛋️</span>
            <span className="text-xs font-bold text-amber-100">cozy</span>
          </div>
          <div className="bg-gradient-to-br from-amber-900 to-rose-900 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">🧸</span>
            <span className="text-xs font-bold text-amber-100">comfy</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex justify-center gap-4">
          <div className="flex items-center text-amber-300 text-xs">
            <span className="text-lg mr-1">🏠</span>
            Home Theme
          </div>
          <div className="flex items-center text-amber-300 text-xs">
            <span className="text-lg mr-1">🔊</span>
            Voice Guide
          </div>
          <div className="flex items-center text-amber-300 text-xs">
            <span className="text-lg mr-1">🎨</span>
            Color Match
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSynonymsThumbnail; 
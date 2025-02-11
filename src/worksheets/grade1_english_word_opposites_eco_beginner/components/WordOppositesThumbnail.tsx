import React from 'react';

const WordOppositesThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col">
        {/* Title */}
        <h1 className="text-2xl font-bold text-green-300 text-center mb-2">
          Eco-Friendly Opposites
        </h1>
        <p className="text-green-200 text-center text-sm mb-4">
          Match environmental word pairs
        </p>

        {/* Preview Grid */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {/* Example Card 1 - Matched Pair */}
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">♻️</span>
            <span className="text-xs font-bold text-white">reuse</span>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">🗑️</span>
            <span className="text-xs font-bold text-white">waste</span>
          </div>

          {/* Example Card 2 - Unmatched */}
          <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">🌿</span>
            <span className="text-xs font-bold text-green-100">clean</span>
          </div>
          <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">💨</span>
            <span className="text-xs font-bold text-green-100">polluted</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex justify-center gap-4">
          <div className="flex items-center text-green-300 text-xs">
            <span className="text-lg mr-1">🎨</span>
            Color Match
          </div>
          <div className="flex items-center text-green-300 text-xs">
            <span className="text-lg mr-1">🔊</span>
            Voice Guide
          </div>
          <div className="flex items-center text-green-300 text-xs">
            <span className="text-lg mr-1">🌍</span>
            Eco Theme
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesThumbnail; 
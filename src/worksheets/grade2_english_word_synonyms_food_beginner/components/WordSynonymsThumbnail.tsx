import React from 'react';

const WordSynonymsThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white/80 backdrop-blur-sm rounded-xl p-4 flex flex-col shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-bold text-orange-600 text-center mb-2">
          Food Words That Mean the Same
        </h1>
        <p className="text-gray-600 text-center text-sm mb-4">
          Match similar food and taste words
        </p>

        {/* Preview Grid */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {/* Example Card 1 - Matched Pair */}
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">😋</span>
            <span className="text-xs font-bold text-white">delicious</span>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">🍽️</span>
            <span className="text-xs font-bold text-white">tasty</span>
          </div>

          {/* Example Card 2 - Unmatched */}
          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">🍎</span>
            <span className="text-xs font-bold text-orange-600">crisp</span>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-2 flex flex-col items-center">
            <span className="text-xl">🥜</span>
            <span className="text-xs font-bold text-orange-600">crunchy</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex justify-center gap-4">
          <div className="flex items-center text-orange-600 text-xs">
            <span className="text-lg mr-1">🍽️</span>
            Food Theme
          </div>
          <div className="flex items-center text-orange-600 text-xs">
            <span className="text-lg mr-1">🔊</span>
            Voice Guide
          </div>
          <div className="flex items-center text-orange-600 text-xs">
            <span className="text-lg mr-1">✨</span>
            Fun Effects
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSynonymsThumbnail; 
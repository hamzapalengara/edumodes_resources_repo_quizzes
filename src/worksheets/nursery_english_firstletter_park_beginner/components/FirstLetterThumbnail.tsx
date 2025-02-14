import React from 'react';

const FirstLetterThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-sky-100 to-green-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col">
        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-green-800 mb-1">
            Pop Park Word Balloons
          </h1>
          <div className="flex items-center justify-center gap-2 text-green-600">
            <span className="text-xl">🎈</span>
            <p className="text-sm">Listen and Pop</p>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Park Scene */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl">🌳</span>
            <span className="text-3xl">🎡</span>
            <span className="text-3xl">🛝</span>
          </div>

          {/* Balloon Letters */}
          <div className="flex gap-4 mb-4">
            <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-white font-bold transform -skew-y-2">
              P
            </div>
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold transform -skew-y-2">
              S
            </div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold transform -skew-y-2">
              T
            </div>
          </div>

          {/* Feature Tags */}
          <div className="flex gap-3">
            <div className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span>🎈</span>
              <span className="text-sm text-green-700">Pop</span>
            </div>
            <div className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span>👂</span>
              <span className="text-sm text-green-700">Listen</span>
            </div>
            <div className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span>🌳</span>
              <span className="text-sm text-green-700">Park</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterThumbnail; 
import React from 'react';

const FirstLetterThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col">
        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-red-800 mb-1">
            Listen and Find Body Part Letters
          </h1>
          <div className="flex items-center justify-center gap-2 text-red-600">
            <span className="text-xl">👂</span>
            <p className="text-sm">Hear and Match</p>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Audio to Letter Flow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔊</span>
              <span className="text-3xl">👉</span>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-800 font-bold">
                H
              </div>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-800 font-bold">
                E
              </div>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-800 font-bold">
                A
              </div>
            </div>
          </div>

          {/* Body Part Examples */}
          <div className="flex gap-4 text-2xl mb-4">
            <span>👤</span>
            <span>👂</span>
            <span>💪</span>
          </div>

          {/* Feature Tags */}
          <div className="flex gap-3">
            <div className="bg-red-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span>🎧</span>
              <span className="text-sm text-red-700">Listen</span>
            </div>
            <div className="bg-red-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span>🎯</span>
              <span className="text-sm text-red-700">Match</span>
            </div>
            <div className="bg-red-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span>👤</span>
              <span className="text-sm text-red-700">Body Parts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterThumbnail; 
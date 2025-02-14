import React from 'react';

const FirstLetterThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col">
        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-green-800 mb-1">
            Animal Words First Letters
          </h1>
          <p className="text-sm text-green-600">Listen and Find</p>
        </div>

        {/* Preview Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Animal Examples */}
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🦁</span>
              <span className="text-2xl font-bold text-green-700">L</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐘</span>
              <span className="text-2xl font-bold text-green-700">E</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🦒</span>
              <span className="text-2xl font-bold text-green-700">G</span>
            </div>
          </div>

          {/* Feature Tags */}
          <div className="flex gap-3">
            <div className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span>🔊</span>
              <span className="text-sm text-green-700">Listen</span>
            </div>
            <div className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span>🎯</span>
              <span className="text-sm text-green-700">Match</span>
            </div>
            <div className="bg-green-100 px-3 py-1 rounded-full flex items-center gap-1">
              <span>🦁</span>
              <span className="text-sm text-green-700">Animals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterThumbnail; 
import React from 'react';

const FirstLetterThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Sound Wave Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="text-9xl text-purple-500">🎵</div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-purple-800 mb-6 relative z-10">
          Listen and Find First Letter
        </h1>

        {/* Sound to Letter Concept */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="text-4xl">🔊</div>
          <div className="text-3xl">→</div>
          <div className="text-3xl font-bold text-purple-600">A B C</div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-600 text-sm">
            🎧 Listen Carefully
          </div>
          <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-600 text-sm">
            🎯 Find First Sound
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterThumbnail; 
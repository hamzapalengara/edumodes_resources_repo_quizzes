import React from 'react';

const WordOppositesThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-500 to-yellow-500 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Match Space Word Opposites
        </h1>
        
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-1">✨</span>
            <span className="font-bold text-gray-700">bright</span>
          </div>
          
          <div className="text-2xl text-blue-500">⟷</div>
          
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-1">🌑</span>
            <span className="font-bold text-gray-700">dark</span>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600 text-center">
          Match 10 pairs of space-themed opposites
        </div>
      </div>
    </div>
  );
};

export default WordOppositesThumbnail; 
import React from 'react';

const SentenceBuildingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Daily Conversation Practice
        </h1>
        
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <span className="text-3xl">❓</span>
            <span className="text-3xl">🗣️</span>
            <span className="text-3xl">✏️</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-blue-600">
            <span className="font-mono">May I borrow your pencil</span>
          </div>
          <div className="text-sm text-gray-600">
            Build polite daily conversation sentences
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentenceBuildingThumbnail; 
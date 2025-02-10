import React from 'react';

const SentenceBuildingThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center p-4">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Build Simple Sentences
          </h1>
          
          {/* Preview of sentence building */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-3xl">🐭</div>
            <div className="flex gap-1">
              <span className="bg-blue-100 px-3 py-1 rounded-lg text-blue-600 font-semibold">Mice</span>
              <span className="bg-blue-100 px-3 py-1 rounded-lg text-blue-600 font-semibold">like</span>
              <span className="bg-blue-100 px-3 py-1 rounded-lg text-blue-600 font-semibold">cheese</span>
            </div>
            <div className="text-3xl">🧀</div>
          </div>

          {/* Additional visual elements */}
          <div className="flex justify-center gap-4 text-2xl">
            <span>🚌</span>
            <span>✈️</span>
            <span>🍋</span>
            <span>🐧</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentenceBuildingThumbnail; 
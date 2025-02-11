import React from 'react';

const WordSearchThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-600 to-purple-500 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Sports Word Search</h1>
          <p className="text-blue-600">BALL → TEAM</p>
        </div>
        
        {/* Preview Grid */}
        <div className="grid grid-cols-4 gap-1 max-w-[200px] mx-auto">
          {Array(16).fill(null).map((_, i) => (
            <div
              key={i}
              className="w-full aspect-square bg-blue-50 rounded flex items-center justify-center text-blue-800 font-bold"
            >
              {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
            </div>
          ))}
        </div>

        {/* Preview Words */}
        <div className="flex justify-center mt-4 gap-2">
          <span className="text-xl">⚽</span>
          <span className="text-xl">🏊</span>
          <span className="text-xl">🏃</span>
        </div>
      </div>
    </div>
  );
};

export default WordSearchThumbnail; 
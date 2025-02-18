import React from 'react';

const TreasureThumbnail: React.FC = () => {
  return (
    <div 
      className="w-[500px] h-[375px] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #FFB6C1 0%, #FFD700 100%)'
      }}
    >
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-pink-800">
            Cherry Blossom Math
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-3xl">
            <span>🌸</span>
            <span>➕</span>
            <span>➖</span>
            <span>✨</span>
          </div>
          
          <div className="text-pink-600 font-medium">
            Multi-Digit Operations
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureThumbnail; 
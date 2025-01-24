import React from 'react';

const TreasureThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-center text-amber-600">
          Count Steps to Treasure! 🎯
        </h1>
        
        <div className="flex flex-col items-center gap-3">
          {/* Example counting steps */}
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold">1:</span>
            <span className="text-2xl">👣</span>
            <span className="text-2xl transform" style={{ transform: 'scaleX(-1)' }}>🏃</span>
            <span className="text-2xl">🎁</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold">2:</span>
            <span className="text-2xl">👣 👣</span>
            <span className="text-2xl transform" style={{ transform: 'scaleX(-1)' }}>🏃</span>
            <span className="text-2xl">🎁</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500 font-bold">3:</span>
            <span className="text-2xl">👣 👣 👣</span>
            <span className="text-2xl transform" style={{ transform: 'scaleX(-1)' }}>🏃</span>
            <span className="text-2xl">🎁</span>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <span className="text-sm">...to</span>
            <span className="text-2xl">10 steps!</span>
          </div>
        </div>

        <div className="text-lg text-gray-600 text-center">
          Fun counting adventure from 1 to 10!
        </div>
      </div>
    </div>
  );
};

export default TreasureThumbnail; 
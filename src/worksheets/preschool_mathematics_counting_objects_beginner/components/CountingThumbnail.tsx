import React from 'react';

const CountingThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-center text-pink-600">
          Let's Count Together! 🎯
        </h1>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Example counting objects */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍎</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">❤️</span>
            <span className="text-2xl">❤️</span>
            <span className="text-2xl">❤️</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">...to</span>
            <div className="flex gap-1">
              <span className="text-2xl">☀️</span>
              <span className="text-xl">×10</span>
            </div>
          </div>
        </div>

        <div className="text-lg text-gray-600 text-center">
          Fun counting practice from 1 to 10!
        </div>
      </div>
    </div>
  );
};

export default CountingThumbnail; 
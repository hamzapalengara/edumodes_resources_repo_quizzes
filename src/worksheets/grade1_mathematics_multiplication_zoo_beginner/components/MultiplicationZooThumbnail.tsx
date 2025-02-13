import React from 'react';

const MultiplicationZooThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-amber-600 text-center mb-4">
          Zoo Animals Multiplication
        </h1>
        
        <div className="text-amber-600 text-lg font-semibold mb-4">
          Numbers 2-5
        </div>

        <div className="flex gap-4 items-center justify-center">
          <div className="bg-amber-50 rounded-lg p-3 text-center">
            <div className="text-amber-700 text-sm mb-1">3 Enclosures</div>
            <div className="flex gap-1 justify-center">
              <span className="text-2xl">🦁</span>
              <span className="text-2xl">🦁</span>
            </div>
          </div>

          <div className="text-2xl text-amber-600 font-bold">×</div>

          <div className="bg-amber-50 rounded-lg p-3 text-center">
            <div className="text-amber-700 text-sm mb-1">2 Lions Each</div>
            <div className="text-2xl">3 × 2 = 6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationZooThumbnail; 
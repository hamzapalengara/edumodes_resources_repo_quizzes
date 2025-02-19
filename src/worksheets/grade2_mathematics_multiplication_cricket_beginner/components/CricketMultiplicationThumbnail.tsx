import React from 'react';

const CricketMultiplicationThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-4 relative overflow-hidden">
        {/* Cricket field lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full border-4 border-black rounded-full" />
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black transform -translate-y-1/2" />
        </div>

        {/* Cricket stumps decoration */}
        <div className="absolute top-2 right-4 text-2xl">🏏</div>
        <div className="absolute bottom-2 left-4 text-2xl">🎯</div>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-between">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-green-800 mb-1">
              Match Cricket Runs
            </h1>
            <div className="text-lg text-green-600">
              3 Times Table
            </div>
          </div>

          {/* Example cards */}
          <div className="flex items-center justify-center gap-6">
            <div className="bg-green-100 rounded-lg p-3 transform -rotate-3 shadow">
              <div className="text-xl font-bold text-green-800">3 × 4</div>
            </div>
            <div className="text-2xl text-green-800">=</div>
            <div className="bg-green-100 rounded-lg p-3 transform rotate-3 shadow">
              <div className="text-xl font-bold text-green-800">12</div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-green-700 font-medium text-center">
            Score runs with multiplication! 🏏
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketMultiplicationThumbnail; 
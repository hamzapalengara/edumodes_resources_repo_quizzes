import React from 'react';

const MultiplicationTable6Thumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center p-6">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <div className="h-full flex flex-col items-center justify-between">
          {/* Title */}
          <h1 className="text-2xl font-bold text-blue-700 text-center">
            Build Multiplication Table of 6
          </h1>

          {/* Range */}
          <div className="text-lg text-blue-600 font-medium">
            6 × 1 → 6 × 10
          </div>

          {/* Example */}
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-blue-700 mb-2">
              6 × 4 = 24
            </div>
            <div className="flex flex-wrap gap-1 justify-center max-w-[200px]">
              <span>🎲🎲🎲🎲🎲🎲</span>
              <span className="text-blue-300 mx-1">|</span>
              <span>🎲🎲🎲🎲🎲🎲</span>
              <span className="text-blue-300 mx-1">|</span>
              <span>🎲🎲🎲🎲🎲🎲</span>
              <span className="text-blue-300 mx-1">|</span>
              <span>🎲🎲🎲🎲🎲🎲</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable6Thumbnail; 
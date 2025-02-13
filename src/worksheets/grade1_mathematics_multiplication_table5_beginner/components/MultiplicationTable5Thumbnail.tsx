import React from 'react';

const MultiplicationTable5Thumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center p-6">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <div className="h-full flex flex-col items-center justify-between">
          {/* Title */}
          <h1 className="text-2xl font-bold text-teal-700 text-center">
            Build Multiplication Table of 5
          </h1>

          {/* Range */}
          <div className="text-lg text-teal-600 font-medium">
            5 × 1 → 5 × 10
          </div>

          {/* Example */}
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-teal-700 mb-2">
              5 × 4 = 20
            </div>
            <div className="flex flex-wrap gap-1 justify-center max-w-[200px]">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-teal-300 mx-1">|</span>
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-teal-300 mx-1">|</span>
              <span>⭐⭐⭐⭐⭐</span>
              <span className="text-teal-300 mx-1">|</span>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable5Thumbnail; 
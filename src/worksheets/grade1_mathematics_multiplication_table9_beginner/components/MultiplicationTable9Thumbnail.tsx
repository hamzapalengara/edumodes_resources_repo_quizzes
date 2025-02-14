import React from 'react';

const MultiplicationTable9Thumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-fuchsia-400 via-purple-400 to-pink-400 flex items-center justify-center p-6">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <div className="h-full flex flex-col items-center justify-between">
          {/* Title */}
          <h1 className="text-2xl font-bold text-purple-700 text-center">
            🎪 Build Multiplication Table of 9 🎪
          </h1>

          {/* Range */}
          <div className="text-lg text-purple-600 font-medium">
            9 × 1 → 9 × 10
          </div>

          {/* Example */}
          <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-purple-700 mb-2">
              9 × 4 = 36
            </div>
            <div className="flex flex-wrap gap-1 justify-center max-w-[200px]">
              <span>🎈🎈🎈🎈🎈🎈🎈🎈🎈</span>
              <span className="text-purple-300 mx-1">|</span>
              <span>🎈🎈🎈🎈🎈🎈🎈🎈🎈</span>
              <span className="text-purple-300 mx-1">|</span>
              <span>🎈🎈🎈🎈🎈🎈🎈🎈🎈</span>
              <span className="text-purple-300 mx-1">|</span>
              <span>🎈🎈🎈🎈🎈🎈🎈🎈🎈</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable9Thumbnail; 
import React from 'react';

const MultiplicationTable4Thumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-purple-700 mb-4 text-center">
          Build Multiplication Table of 4
        </h1>
        <div className="text-center text-purple-600 text-lg mb-4">
          4 × 1 → 4 × 10
        </div>
        <div className="flex justify-center gap-8 items-center">
          <div className="text-center">
            <div className="text-xl font-bold text-purple-700 mb-2">4 × 4 = 16</div>
            <div className="flex gap-1 justify-center text-2xl">
              🍇🍇🍇🍇 | 🍇🍇🍇🍇 | 🍇🍇🍇🍇 | 🍇🍇🍇🍇
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable4Thumbnail; 
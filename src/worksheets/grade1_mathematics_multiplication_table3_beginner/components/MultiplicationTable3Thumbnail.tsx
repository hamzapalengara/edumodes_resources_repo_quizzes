import React from 'react';

const MultiplicationTable3Thumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-orange-700 mb-4 text-center">
          Multiply by 3
        </h1>
        <div className="text-center text-orange-600 text-lg mb-4">
          3 × 1 → 3 × 10
        </div>
        <div className="flex justify-center gap-8 items-center">
          <div className="text-center">
            <div className="text-xl font-bold text-orange-700 mb-2">3 × 4 = 12</div>
            <div className="flex gap-1 justify-center text-2xl">
              🍊🍊🍊 | 🍊🍊🍊 | 🍊🍊🍊 | 🍊🍊🍊
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable3Thumbnail; 
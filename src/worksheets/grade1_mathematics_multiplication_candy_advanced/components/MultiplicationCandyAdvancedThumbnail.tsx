import React from 'react';

const MultiplicationCandyAdvancedThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-900 via-red-900 to-pink-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 grid grid-cols-8 gap-4 p-8">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="text-white text-2xl">
            {i % 2 === 0 ? '🍬' : '🍭'}
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-xl relative overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 to-red-600 p-4">
          <h1 className="text-xl font-bold text-white text-center">
            Sweet Shop Multiplication
          </h1>
          <p className="text-pink-100 text-center text-sm">
            Numbers 5-10
          </p>
        </div>

        {/* Content Preview */}
        <div className="p-4">
          {/* Example Groups */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-pink-50 rounded-lg p-2">
              <p className="text-pink-700 text-sm font-medium mb-1">
                Candy Box 1
              </p>
              <div className="flex gap-1">
                <span className="text-xl">🍫 🍫 🍫</span>
              </div>
            </div>
            <div className="bg-pink-50 rounded-lg p-2">
              <p className="text-pink-700 text-sm font-medium mb-1">
                Candy Box 2
              </p>
              <div className="flex gap-1">
                <span className="text-xl">🍫 🍫 🍫</span>
              </div>
            </div>
          </div>

          {/* Example Problems */}
          <div className="space-y-2">
            <div className="bg-pink-100 rounded-lg p-2 text-center text-pink-800">
              6 × 8 = 48 chocolates
            </div>
            <div className="bg-red-100 rounded-lg p-2 text-center text-red-800">
              7 × 9 = 63 candies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationCandyAdvancedThumbnail; 
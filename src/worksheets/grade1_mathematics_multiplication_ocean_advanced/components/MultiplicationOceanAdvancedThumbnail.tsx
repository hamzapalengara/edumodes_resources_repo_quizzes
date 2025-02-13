import React from 'react';

const MultiplicationOceanAdvancedThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-cyan-900 via-blue-900 to-cyan-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 grid grid-cols-8 gap-4 p-8">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="text-white text-2xl">
            {i % 2 === 0 ? '🐠' : '🌊'}
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-xl relative overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
          <h1 className="text-xl font-bold text-white text-center">
            Ocean Groups Multiplication
          </h1>
          <p className="text-cyan-100 text-center text-sm">
            Numbers 5-10
          </p>
        </div>

        {/* Content Preview */}
        <div className="p-4">
          {/* Example Groups */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-cyan-50 rounded-lg p-2">
              <p className="text-cyan-700 text-sm font-medium mb-1">
                Coral Reef 1
              </p>
              <div className="flex gap-1">
                <span className="text-xl">🐠 🐠 🐠</span>
              </div>
            </div>
            <div className="bg-cyan-50 rounded-lg p-2">
              <p className="text-cyan-700 text-sm font-medium mb-1">
                Coral Reef 2
              </p>
              <div className="flex gap-1">
                <span className="text-xl">🐠 🐠 🐠</span>
              </div>
            </div>
          </div>

          {/* Example Problems */}
          <div className="space-y-2">
            <div className="bg-cyan-100 rounded-lg p-2 text-center text-cyan-800">
              6 × 8 = 48 fish
            </div>
            <div className="bg-blue-100 rounded-lg p-2 text-center text-blue-800">
              7 × 9 = 63 dolphins
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationOceanAdvancedThumbnail; 
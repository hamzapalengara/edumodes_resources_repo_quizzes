import React from 'react';

// Helper to render multiple fruits
const renderFruits = (emoji: string, count: number) => {
  return (
    <div className="grid grid-cols-3 gap-0.5 place-items-center">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="text-2xl">
          {emoji}
        </span>
      ))}
    </div>
  );
};

const NumberMatchingThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-300 to-yellow-300 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-orange-600 mb-2 text-center font-system">
          Numbers 1-5 Matching
        </h1>
        
        {/* Preview of content range */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg text-gray-500 font-system">1</span>
          <span className="text-lg text-gray-500 font-system">→</span>
          <span className="text-lg text-gray-500 font-system">5</span>
        </div>
        
        {/* Preview of game elements */}
        <div className="flex items-center gap-4">
          {/* Number cards preview */}
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-orange-200">
              <span className="text-xl font-bold text-orange-600">1</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-orange-200">
              <span className="text-xl font-bold text-orange-600">2</span>
            </div>
          </div>

          <span className="text-xl">➡️</span>

          {/* Fruit cards preview */}
          <div className="flex -space-x-2">
            <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-orange-200 p-0.5">
              {renderFruits('🍎', 1)}
            </div>
            <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-orange-200 p-0.5">
              {renderFruits('🍌', 2)}
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600 font-system">
          Match numbers with their fruit quantities
        </p>
      </div>
    </div>
  );
};

export default NumberMatchingThumbnail; 
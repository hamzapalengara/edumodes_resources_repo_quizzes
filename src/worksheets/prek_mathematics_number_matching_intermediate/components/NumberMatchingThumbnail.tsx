import React from 'react';

// Helper to render multiple animals
const renderAnimals = (emoji: string, count: number) => {
  return (
    <div className="grid grid-cols-3 gap-0.5 place-items-center">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="text-xl">
          {emoji}
        </span>
      ))}
    </div>
  );
};

const NumberMatchingThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-blue-300 to-cyan-300 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-2 text-center font-system">
          Numbers 6-10 Matching
        </h1>
        
        {/* Preview of content range */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg text-gray-500 font-system">6</span>
          <span className="text-lg text-gray-500 font-system">→</span>
          <span className="text-lg text-gray-500 font-system">10</span>
        </div>
        
        {/* Preview of game elements */}
        <div className="flex items-center gap-4">
          {/* Number cards preview */}
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-blue-200">
              <span className="text-xl font-bold text-blue-600">6</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-blue-200">
              <span className="text-xl font-bold text-blue-600">7</span>
            </div>
          </div>

          <span className="text-xl">➡️</span>

          {/* Animal cards preview */}
          <div className="flex -space-x-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 border-2 border-blue-400 flex items-center justify-center p-0.5">
              {renderAnimals('🐠', 6)}
            </div>
            <div className="w-12 h-12 rounded-lg bg-teal-100 border-2 border-teal-400 flex items-center justify-center p-0.5">
              {renderAnimals('🐋', 7)}
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600 font-system">
          Match numbers with ocean animal groups
        </p>
      </div>
    </div>
  );
};

export default NumberMatchingThumbnail; 
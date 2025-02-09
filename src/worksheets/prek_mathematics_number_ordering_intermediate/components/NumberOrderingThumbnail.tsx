import React from 'react';

const NumberOrderingThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-sky-300 to-teal-300 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-sky-600 mb-2 text-center font-system">
          Order Numbers 1-4
        </h1>
        
        {/* Preview of content range */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg text-gray-500 font-system">1</span>
          <span className="text-lg text-gray-500 font-system">→</span>
          <span className="text-lg text-gray-500 font-system">4</span>
        </div>
        
        {/* Preview of game elements */}
        <div className="flex items-center gap-4">
          {/* Jumbled numbers with drag indicator */}
          <div className="flex gap-2 relative">
            {[2, 1, 4, 3].map((num) => (
              <div
                key={num}
                className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-sky-200"
              >
                <span className="text-lg font-bold text-sky-600">{num}</span>
              </div>
            ))}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm text-gray-500">
              ↓ drag
            </div>
          </div>

          <span className="text-xl">➡️</span>

          {/* Target boxes */}
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="w-10 h-10 rounded-lg bg-teal-100 shadow-md flex items-center justify-center border-2 border-teal-400"
              >
                <span className="text-lg font-bold text-sky-600">{num}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600 font-system">
          Drag numbers to put them in order
        </p>
      </div>
    </div>
  );
};

export default NumberOrderingThumbnail; 
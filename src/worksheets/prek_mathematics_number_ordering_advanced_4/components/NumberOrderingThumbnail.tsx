import React from 'react';

const NumberOrderingThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-teal-300 to-cyan-300 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-teal-600 mb-2 text-center font-system">
          Order Numbers 15-20
        </h1>
        
        {/* Preview of content range */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base text-gray-500 font-system">15</span>
          <span className="text-base text-gray-500 font-system">→</span>
          <span className="text-base text-gray-500 font-system">20</span>
        </div>
        
        {/* Preview of game elements */}
        <div className="flex items-center gap-3">
          {/* Jumbled numbers with drag indicator */}
          <div className="flex gap-1 relative">
            {[17, 20, 15, 19, 16, 18].map((num) => (
              <div
                key={num}
                className="w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-teal-200"
              >
                <span className="text-sm font-bold text-teal-600">{num}</span>
              </div>
            ))}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-gray-500">
              drag
            </div>
          </div>

          <span className="text-base">➡️</span>

          {/* Target boxes */}
          <div className="flex gap-1">
            {[15, 16, 17, 18, 19, 20].map((num) => (
              <div
                key={num}
                className="w-8 h-8 rounded-lg bg-green-100 shadow-md flex items-center justify-center border-2 border-green-400"
              >
                <span className="text-sm font-bold text-teal-600">{num}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-2 text-xs text-gray-600 font-system">
          Drag numbers to put them in order
        </p>
      </div>
    </div>
  );
};

export default NumberOrderingThumbnail; 
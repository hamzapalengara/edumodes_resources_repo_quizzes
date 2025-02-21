import React from 'react';

const NumberTenThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center p-8">
      <div className="w-[420px] h-[240px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Trace and Find Number 10
        </h1>
        
        <div className="flex items-center justify-center gap-6">
          {/* Number Display */}
          <div className="text-6xl font-bold text-green-600">10</div>
          
          {/* Watermelons Display */}
          <div className="grid grid-cols-5 gap-1">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="text-2xl">🍉</div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <div className="text-sm font-medium text-gray-600">
            • Trace the number
          </div>
          <div className="text-sm font-medium text-gray-600">
            • Count the watermelons
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberTenThumbnail; 
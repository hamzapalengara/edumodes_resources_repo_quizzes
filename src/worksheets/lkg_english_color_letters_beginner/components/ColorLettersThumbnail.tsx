import React from 'react';

const ColorLettersThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-400 via-fuchsia-300 to-yellow-200 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Match Colors with First Letters
        </h1>

        {/* Preview Content */}
        <div className="flex items-center justify-center space-x-4">
          {/* Color Examples */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
              R
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              B
            </div>
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              G
            </div>
          </div>

          {/* Arrow */}
          <div className="text-2xl text-gray-600">→</div>

          {/* Color Words */}
          <div className="flex flex-col items-start space-y-1">
            <span className="text-red-600 font-bold">RED</span>
            <span className="text-blue-600 font-bold">BLUE</span>
            <span className="text-green-600 font-bold">GREEN</span>
          </div>
        </div>

        {/* Range Indicator */}
        <div className="mt-4 text-gray-600">
          10 Basic Colors
        </div>
      </div>
    </div>
  );
};

export default ColorLettersThumbnail; 
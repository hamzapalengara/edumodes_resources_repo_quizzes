import React from 'react';

const NumberLettersThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Match Numbers with First Letters
        </h1>

        {/* Preview Content */}
        <div className="flex items-center justify-center space-x-4">
          {/* Number Examples */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              O
            </div>
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              T
            </div>
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
              F
            </div>
          </div>

          {/* Arrow */}
          <div className="text-2xl text-gray-600">→</div>

          {/* Number Words */}
          <div className="flex flex-col items-start space-y-1">
            <span className="text-blue-600 font-bold">ONE</span>
            <span className="text-green-600 font-bold">TWO</span>
            <span className="text-red-600 font-bold">FOUR</span>
          </div>
        </div>

        {/* Range Indicator */}
        <div className="mt-4 text-gray-600">
          Numbers 1-10
        </div>
      </div>
    </div>
  );
};

export default NumberLettersThumbnail; 
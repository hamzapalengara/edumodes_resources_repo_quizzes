import React from 'react';

const ThreeDigitCarsThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-2 left-2 text-4xl rotate-[-15deg] opacity-20">🚗</div>
        <div className="absolute top-2 right-2 text-4xl rotate-[15deg] opacity-20">🚙</div>
        <div className="absolute bottom-2 left-2 text-4xl rotate-[15deg] opacity-20">🚘</div>
        <div className="absolute bottom-2 right-2 text-4xl rotate-[-15deg] opacity-20">🚖</div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-4 relative z-10">
          Three-Digit Numbers in Cars
        </h1>
        <div className="text-blue-600 text-sm mb-6">Place Value Practice</div>

        {/* Preview Car with Number */}
        <div className="relative w-48 h-24 mb-4">
          <div className="absolute inset-0 bg-blue-500 rounded-xl shadow-lg">
            {/* Windows */}
            <div className="absolute top-3 right-12 w-12 h-8 bg-blue-200 rounded-lg"></div>
            <div className="absolute top-3 left-12 w-12 h-8 bg-blue-200 rounded-lg"></div>
            {/* Wheels */}
            <div className="absolute bottom-[-4px] left-6 w-8 h-8 bg-gray-800 rounded-full"></div>
            <div className="absolute bottom-[-4px] right-6 w-8 h-8 bg-gray-800 rounded-full"></div>
          </div>
          {/* Number Display */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        text-2xl font-bold text-white flex gap-2">
            <span className="bg-blue-700 px-2 py-1 rounded">3</span>
            <span className="bg-blue-700 px-2 py-1 rounded">7</span>
            <span className="bg-blue-700 px-2 py-1 rounded">8</span>
          </div>
        </div>

        {/* Preview Elements */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-sm">📊</span>
          </div>
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-sm">🎯</span>
          </div>
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-sm">💡</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDigitCarsThumbnail; 
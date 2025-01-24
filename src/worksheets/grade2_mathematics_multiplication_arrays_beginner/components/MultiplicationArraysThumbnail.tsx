import React from 'react';

const MultiplicationArraysThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl shadow-2xl p-6 flex flex-col items-center justify-between relative overflow-hidden">
        {/* Decorative circles in the background */}
        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 opacity-50" />
        <div className="absolute bottom-[-30px] left-[-30px] w-48 h-48 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 opacity-50" />
        
        {/* Main content */}
        <div className="z-10">
          <h1 className="text-2xl font-bold text-indigo-800 mb-3 text-center">
            Multiplication with Arrays
          </h1>
          <p className="text-sm text-indigo-600 text-center mb-4">
            Discover the magic of multiplication through visual patterns!
          </p>
        </div>

        {/* Sample Array Visual */}
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-lg border-2 border-indigo-300 shadow-lg z-10 transform -rotate-3">
          <div className="grid grid-rows-3 gap-2">
            <div className="flex gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
            </div>
            <div className="flex gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
            </div>
            <div className="flex gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="flex gap-2 z-10 mt-4">
          <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm font-medium shadow-md">
            Arrays
          </span>
          <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium shadow-md">
            Multiplication
          </span>
          <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm font-medium shadow-md">
            Visual Math
          </span>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationArraysThumbnail; 
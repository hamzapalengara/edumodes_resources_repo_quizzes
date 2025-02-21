import React from 'react';
import { NUMBER_FIVE } from './NumberFiveWorksheet';

const NumberFiveThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-500 to-yellow-500 p-4 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-2xl shadow-lg p-6">
        <div className="relative h-full flex flex-col justify-between">
          {/* Title */}
          <h1 className="text-2xl font-bold text-indigo-900 text-center">
            Trace & Find Number 5
          </h1>

          {/* Preview Content */}
          <div className="flex items-center justify-between">
            {/* Left: Tracing Preview */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-sm font-medium text-indigo-600">Trace</div>
              <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center relative">
                <span className="text-4xl font-bold text-indigo-900">5</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Center: Arrow */}
            <div className="text-2xl text-indigo-400">➡️</div>

            {/* Right: Finding Game Preview */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-sm font-medium text-indigo-600">Find</div>
              <div className="grid grid-cols-2 gap-1">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-indigo-900">7 🍌</span>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white">5 🍎</span>
                </div>
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-indigo-900">2 🍊</span>
                </div>
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-indigo-900">5 🍎</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Strawberries */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-2xl filter drop-shadow-md">
                  {NUMBER_FIVE.fruitEmoji}
                </span>
              ))}
            </div>
            <p className="text-sm text-indigo-600">
              Two Fun Activities in One!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberFiveThumbnail; 
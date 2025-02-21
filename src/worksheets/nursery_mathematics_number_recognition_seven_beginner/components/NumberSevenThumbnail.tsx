import React from 'react';
import { NUMBER_SEVEN } from './NumberSevenWorksheet';

const NumberSevenThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 border border-zinc-700/50 shadow-lg flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/30 to-amber-400/30 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-zinc-700/30 to-zinc-600/30 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-4 text-center relative z-10">
          Number Seven with Motorcycles
        </h1>

        {/* Preview Content */}
        <div className="flex items-center gap-6 relative z-10">
          {/* Number Display */}
          <div className="text-6xl font-bold text-orange-500">{NUMBER_SEVEN.value}</div>

          {/* Motorcycles */}
          <div className="flex flex-wrap gap-2 justify-center max-w-[200px]">
            {[...Array(NUMBER_SEVEN.vehicleCount)].map((_, index) => (
              <span key={index} className="text-3xl filter drop-shadow-lg">
                {NUMBER_SEVEN.vehicleEmoji}
              </span>
            ))}
          </div>
        </div>

        {/* Preview Grid */}
        <div className="mt-4 grid grid-cols-4 gap-1 w-48 relative z-10">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className={`w-full aspect-square flex items-center justify-center text-lg font-bold rounded
                ${[1, 3, 6, 8].includes(index) ? 'bg-orange-500 text-white' : 'bg-zinc-800 text-orange-400'}`}
            >
              {[1, 3, 6, 8].includes(index) ? '7 🏍️' : `${Math.floor(Math.random() * 9) + 1} 🚗`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberSevenThumbnail; 
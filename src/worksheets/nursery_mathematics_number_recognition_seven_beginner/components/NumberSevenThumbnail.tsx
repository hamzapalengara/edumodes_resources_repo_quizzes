import React from 'react';
import { NUMBER_SEVEN } from './NumberSevenWorksheet';

const NumberSevenThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-5xl font-bold text-[#2E7D32]">{NUMBER_SEVEN.value}</div>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="text-3xl">{NUMBER_SEVEN.fruitEmoji}</div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Tracing Preview */}
          <div className="aspect-square relative bg-[#E8F5E9]/50 rounded-lg p-2">
            <svg viewBox={NUMBER_SEVEN.viewBox} className="w-full h-full">
              <path
                d={NUMBER_SEVEN.paths[0].d}
                fill="none"
                stroke="#4CAF50"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="8,8"
              />
              <path
                d={NUMBER_SEVEN.paths[1].d}
                fill="none"
                stroke="#4CAF50"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="8,8"
              />
            </svg>
          </div>

          {/* Number Grid Preview */}
          <div className="grid grid-cols-3 gap-1.5">
            {['2', '7 🥭', '4', '7 🥭', '3', '7 🥭', '5', '7 🥭', '1'].map((item, index) => (
              <div
                key={index}
                className={`aspect-square flex items-center justify-center text-base font-bold rounded-lg
                  ${item.startsWith('7') ? 'bg-[#E8F5E9] text-[#2E7D32]' : 'bg-gray-50 text-gray-500'}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold text-[#2E7D32]">Trace and Find Number 7 with Mangoes</h2>
        </div>
      </div>
    </div>
  );
};

export default NumberSevenThumbnail; 
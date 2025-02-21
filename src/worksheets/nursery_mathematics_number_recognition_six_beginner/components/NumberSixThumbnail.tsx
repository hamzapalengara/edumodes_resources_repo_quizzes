import React from 'react';
import { NUMBER_SIX } from './NumberSixWorksheet';

const NumberSixThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-indigo-600">{NUMBER_SIX.value}</div>
            <div className="flex gap-1">
              {[...Array(NUMBER_SIX.fruitCount)].map((_, i) => (
                <div key={i} className="text-2xl">{NUMBER_SIX.fruitEmoji}</div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Tracing Preview */}
          <div className="aspect-square relative">
            <svg viewBox={NUMBER_SIX.viewBox} className="w-full h-full">
              {NUMBER_SIX.paths.map((path, index) => (
                <g key={path.id}>
                  <path
                    d={path.d}
                    fill="none"
                    stroke="#ddd"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d={path.d}
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="5,5"
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Number Grid Preview */}
          <div className="grid grid-cols-3 gap-1">
            {['1', '6', '3', '6', '2', '6', '4', '6', '5'].map((num, index) => (
              <div
                key={index}
                className={`aspect-square flex items-center justify-center text-lg font-bold rounded
                  ${num === '6' ? 'bg-green-100 text-green-700' : 'bg-gray-50'}`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold text-gray-800">Trace and Find Number 6</h2>
        </div>
      </div>
    </div>
  );
};

export default NumberSixThumbnail; 
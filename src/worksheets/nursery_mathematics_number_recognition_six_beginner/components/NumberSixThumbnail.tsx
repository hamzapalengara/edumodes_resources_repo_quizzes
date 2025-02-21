import React from 'react';
import { motion } from 'framer-motion';

const NUMBER_SIX = {
  value: '6',
  fruitEmoji: '🥭',
  viewBox: '0 0 200 200',
  paths: [
    { id: 'curve_down', d: 'M90 40C95 40 95 45 90 50C85 60 75 90 70 140', order: 1 },
    { id: 'circle', d: 'M70 140C70 170 85 180 100 180S130 170 130 140C130 110 115 100 100 100C85 100 70 110 70 140', order: 2 }
  ]
};

const NumberSixThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375 (4:3)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 via-pink-50 to-yellow-100 flex items-center justify-center">
      {/* Inner container: 420x240 */}
      <div className="w-[420px] h-[240px] bg-white rounded-2xl shadow-lg p-4 flex gap-6">
        {/* Left side - Number demonstration */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center font-system">
            Number 6 with Mangoes
          </h1>
          <div className="relative w-24 h-24">
            <svg viewBox={NUMBER_SIX.viewBox} className="w-full h-full">
              {/* Guide paths */}
              {NUMBER_SIX.paths.map((path) => (
                <path
                  key={`guide-${path.id}`}
                  d={path.d}
                  fill="none"
                  stroke="rgba(34, 211, 238, 0.2)"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}
              {/* Solid paths */}
              {NUMBER_SIX.paths.map((path) => (
                <path
                  key={`solid-${path.id}`}
                  d={path.d}
                  fill="none"
                  stroke="#0EA5E9"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}
            </svg>
          </div>
          <div className="text-sm text-cyan-600 mt-2 font-system">
            1 → 6
          </div>
        </div>

        {/* Right side - Preview */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-2">
            {/* Mango emojis in a 2x2 grid */}
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center text-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -5, 0],
                  rotate: [-5, 5, -5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {NUMBER_SIX.fruitEmoji}
              </motion.div>
            ))}
          </div>
          <div className="mt-4 text-sm text-cyan-600 font-system">
            Trace & Find
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSixThumbnail; 
import React from 'react';
import { motion } from 'framer-motion';

const NUMBER_EIGHT = {
  value: '8',
  vehicleEmoji: '⛵',
  viewBox: '0 0 200 200',
  paths: [
    { id: 'first_down', d: 'M80 20C60 20 40 40 40 60C40 80 60 100 80 100', order: 1 },
    { id: 'second_down', d: 'M80 100C100 100 120 120 120 140C120 160 100 180 80 180', order: 2 },
    { id: 'second_up', d: 'M80 180C60 180 40 160 40 140C40 120 60 100 80 100', order: 3 },
    { id: 'first_up', d: 'M80 100C100 100 120 80 120 60C120 40 100 20 80 20', order: 4 }
  ]
};

const NumberEightThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375 (4:3)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-100 via-pink-50 to-yellow-100 flex items-center justify-center">
      {/* Inner container: 420x240 */}
      <div className="w-[420px] h-[240px] bg-white rounded-2xl shadow-lg p-4 flex gap-6">
        {/* Left side - Number demonstration */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center font-system">
            Number 8 with Boats
          </h1>
          <div className="relative w-24 h-24">
            <svg viewBox={NUMBER_EIGHT.viewBox} className="w-full h-full">
              {/* Guide paths */}
              {NUMBER_EIGHT.paths.map((path) => (
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
              {NUMBER_EIGHT.paths.map((path) => (
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
            1 → 8
          </div>
        </div>

        {/* Right side - Preview */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-2">
            {/* Boat emojis in a 2x2 grid */}
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
                {NUMBER_EIGHT.vehicleEmoji}
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

export default NumberEightThumbnail; 
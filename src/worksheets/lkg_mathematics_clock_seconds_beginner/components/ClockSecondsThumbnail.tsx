import React from 'react';
import { motion } from 'framer-motion';

const ClockSecondsThumbnail: React.FC = () => {
  const renderClock = () => {
    const clockSize = 120; // Fixed size for thumbnail
    const secondsHandHeight = clockSize * 0.5; // Match main component

    return (
      <div className="relative" style={{ width: clockSize, height: clockSize }}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 border-4 border-orange-200 shadow-lg">
          {/* Second Markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const radius = clockSize * 0.45;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={i}
                className="absolute bg-orange-400"
                style={{
                  width: '0.5rem',
                  height: '1rem',
                  left: `calc(50% + ${x}px - 0.25rem)`,
                  top: `calc(50% + ${y}px - 0.5rem)`,
                  transform: `rotate(${i * 30}deg)`
                }}
              />
            );
          })}

          {/* Sample Seconds Hand */}
          <motion.div
            className="absolute bg-gradient-to-t from-red-500 to-orange-400 rounded-full"
            style={{
              width: '0.375rem',
              height: secondsHandHeight,
              left: 'calc(50% - 0.1875rem)',
              bottom: '50%',
              transformOrigin: 'bottom',
              transform: 'rotate(45deg)'
            }}
            animate={{ rotate: [45, 225] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              S
            </div>
          </motion.div>

          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-amber-300 border-2 border-white" />
        </div>
      </div>
    );
  };

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center p-6">
      <div className="w-[420px] h-[240px] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-center text-orange-600">
          Count the Seconds!
        </h1>
        
        <div className="flex items-center justify-center gap-8">
          {/* Sample Clock */}
          <div className="flex-shrink-0">
            {renderClock()}
          </div>

          {/* Sample Counter */}
          <div className="flex flex-col items-center">
            <div className="text-3xl font-mono font-bold text-orange-600 animate-pulse">
              5
            </div>
            <div className="text-sm text-orange-500 mt-1">
              seconds
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <div className="text-sm font-medium text-orange-500 px-3 py-1 bg-orange-50 rounded-full">
            2-10 seconds
          </div>
          <div className="text-sm font-medium text-orange-500 px-3 py-1 bg-orange-50 rounded-full">
            6 Questions
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockSecondsThumbnail; 
import React from 'react';
import { motion } from 'framer-motion';

const ClockTimeThumbnail: React.FC = () => {
  const renderClock = () => {
    return (
      <div className="relative w-40 h-40 bg-white rounded-full shadow-xl border-4 border-indigo-100">
        {/* Clock Numbers */}
        {[...Array(12)].map((_, i) => {
          const angle = ((i + 1) * 30 * Math.PI) / 180;
          const radius = 55;
          const x = Math.sin(angle) * radius;
          const y = -Math.cos(angle) * radius;
          return (
            <div
              key={i}
              className="absolute w-6 h-6 flex items-center justify-center font-bold text-indigo-800"
              style={{
                left: `calc(50% + ${x}px - 12px)`,
                top: `calc(50% + ${y}px - 12px)`,
              }}
            >
              {i + 1}
            </div>
          );
        })}

        {/* Hour Hand - pointing to 3 */}
        <motion.div
          className="absolute w-1 bg-indigo-800 rounded-full origin-bottom"
          style={{
            height: '25%',
            left: 'calc(50% - 1px)',
            bottom: '50%',
            transformOrigin: 'bottom',
          }}
          animate={{ rotate: [0, 90] }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Minute Hand - pointing to 12 */}
        <motion.div
          className="absolute w-0.5 bg-indigo-600 rounded-full origin-bottom"
          style={{
            height: '35%',
            left: 'calc(50% - 0.5px)',
            bottom: '50%',
            transformOrigin: 'bottom',
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Center Dot */}
        <div className="absolute w-3 h-3 bg-indigo-800 rounded-full" 
          style={{ left: 'calc(50% - 6px)', top: 'calc(50% - 6px)' }} 
        />
      </div>
    );
  };

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-400 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/20 backdrop-blur-md rounded-xl p-4 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-1 h-full">
            {Array.from({ length: 64 }).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.02,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Title with Animated Border */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-2xl font-bold text-white">
              Tell Time on Analog Clock
            </h1>
          </motion.div>

          {/* Clock and Options Display */}
          <div className="flex items-center gap-6">
            {/* Clock */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
            >
              {renderClock()}
            </motion.div>

            {/* Time Options */}
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold">
                3:00
              </div>
              <div className="bg-white/30 text-white px-4 py-2 rounded-lg font-bold">
                3:30
              </div>
              <div className="bg-white/30 text-white px-4 py-2 rounded-lg font-bold">
                4:00
              </div>
            </motion.div>
          </div>

          {/* Animated Footer Line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClockTimeThumbnail; 
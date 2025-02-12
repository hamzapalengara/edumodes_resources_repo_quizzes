import React from 'react';
import { motion } from 'framer-motion';

const VehicleLettersThumbnail: React.FC = () => {
  // Sample vehicles for animated preview
  const previewVehicles = [
    { emoji: '✈️', letter: 'A', delay: 0, y: -20 },
    { emoji: '🚗', letter: 'C', delay: 0.2, y: 0 },
    { emoji: '🚀', letter: 'R', delay: 0.4, y: -30 },
  ];

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-4 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
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

        {/* Content */}
        <div className="relative z-10">
          {/* Title with Animated Border */}
          <motion.div
            className="text-center mb-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="absolute inset-0 rounded-lg"
              animate={{
                background: [
                  "linear-gradient(90deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)",
                  "linear-gradient(180deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)",
                  "linear-gradient(270deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)",
                  "linear-gradient(360deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)",
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ opacity: 0.1 }}
            />
            <h1 className="text-2xl font-bold text-white">
              Vehicle Letter Match
            </h1>
          </motion.div>

          {/* Animated Vehicles */}
          <div className="flex justify-center items-center gap-6">
            {previewVehicles.map((vehicle, index) => (
              <div key={index} className="relative">
                {/* Vehicle with Movement */}
                <motion.div
                  className="text-4xl mb-2"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ 
                    y: [0, vehicle.y, 0],
                    opacity: 1,
                    rotate: vehicle.y !== 0 ? [-2, 2, -2] : 0
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: vehicle.delay
                    },
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: vehicle.delay
                    }
                  }}
                >
                  {vehicle.emoji}
                </motion.div>

                {/* Letter Box with Glow */}
                <motion.div
                  className="w-8 h-8 border-2 border-white/70 rounded-lg flex items-center justify-center bg-white/30 backdrop-blur-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: vehicle.delay + 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-lg font-bold text-white drop-shadow-glow">
                    {vehicle.letter}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Moving Clouds */}
          <motion.div
            className="absolute top-0 left-0 right-0 opacity-20"
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ☁️ ☁️ ☁️
          </motion.div>

          {/* Range Indicator */}
          <motion.div
            className="absolute bottom-4 left-0 right-0 text-center text-white text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            A → Y
          </motion.div>
        </div>
      </div>

      {/* Add custom styles for glow effect */}
      <style>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
        }
      `}</style>
    </div>
  );
};

export default VehicleLettersThumbnail; 
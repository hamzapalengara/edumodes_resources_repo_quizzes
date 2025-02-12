import React from 'react';
import { motion } from 'framer-motion';

const BodyLettersThumbnail: React.FC = () => {
  // Sample body parts for animated preview
  const previewBodyParts = [
    { emoji: '👂', letter: 'E', delay: 0, y: -20 },
    { emoji: '👄', letter: 'M', delay: 0.2, y: 0 },
    { emoji: '👃', letter: 'N', delay: 0.4, y: -15 },
  ];

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center p-4">
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
                  "linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)",
                  "linear-gradient(180deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)",
                  "linear-gradient(270deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)",
                  "linear-gradient(360deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)",
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
              Body Part Letters
            </h1>
          </motion.div>

          {/* Animated Body Parts */}
          <div className="flex justify-center items-center gap-6">
            {previewBodyParts.map((part, index) => (
              <div key={index} className="relative">
                {/* Body Part with Movement */}
                <motion.div
                  className="text-4xl mb-2"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ 
                    y: [0, part.y, 0],
                    opacity: 1,
                    rotate: part.y !== 0 ? [-2, 2, -2] : 0
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: part.delay
                    },
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: part.delay
                    }
                  }}
                >
                  {part.emoji}
                </motion.div>

                {/* Letter Box with Glow */}
                <motion.div
                  className="w-8 h-8 border-2 border-white/70 rounded-lg flex items-center justify-center bg-white/30 backdrop-blur-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: part.delay + 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-lg font-bold text-white drop-shadow-glow">
                    {part.letter}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Range Indicator */}
          <motion.div
            className="absolute bottom-4 left-0 right-0 text-center text-white text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            A → T
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

export default BodyLettersThumbnail; 
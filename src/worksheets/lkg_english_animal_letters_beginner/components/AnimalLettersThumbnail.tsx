import React from 'react';
import { motion } from 'framer-motion';

const AnimalLettersThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-emerald-700 via-emerald-500 to-lime-400 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/95 rounded-xl shadow-lg p-4 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-1 h-full">
            {Array.from({ length: 64 }).map((_, index) => (
              <motion.div
                key={index}
                className="bg-emerald-900 rounded-sm"
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
        <div className="relative z-10">
          {/* Title with Animated Border */}
          <motion.div
            className="text-center mb-4 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="absolute inset-0 rounded-lg"
              initial={{ background: "linear-gradient(90deg, #047857 0%, #84cc16 100%)" }}
              animate={{
                background: [
                  "linear-gradient(90deg, #047857 0%, #84cc16 100%)",
                  "linear-gradient(180deg, #047857 0%, #84cc16 100%)",
                  "linear-gradient(270deg, #047857 0%, #84cc16 100%)",
                  "linear-gradient(360deg, #047857 0%, #84cc16 100%)",
                  "linear-gradient(90deg, #047857 0%, #84cc16 100%)",
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ opacity: 0.1 }}
            />
            <h1 className="text-2xl font-bold text-emerald-800">
              Animal First Letters
            </h1>
          </motion.div>

          {/* Preview Content */}
          <div className="flex justify-center items-center gap-8">
            {/* Example Animals */}
            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="text-4xl drop-shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                🐕
              </motion.div>
              <motion.div
                className="w-8 h-8 border-2 border-emerald-400 rounded-lg flex items-center justify-center bg-white shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-xl font-bold text-emerald-800">D</span>
              </motion.div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="text-4xl drop-shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.4 }}
              >
                🐱
              </motion.div>
              <motion.div
                className="w-8 h-8 border-2 border-emerald-400 rounded-lg flex items-center justify-center bg-white shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-xl font-bold text-emerald-800">C</span>
              </motion.div>
            </div>
          </div>

          {/* Instructions Preview */}
          <motion.div
            className="text-center mt-4 text-emerald-800/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Touch animals to hear their names!
          </motion.div>

          {/* Animated Footer */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-lime-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimalLettersThumbnail; 
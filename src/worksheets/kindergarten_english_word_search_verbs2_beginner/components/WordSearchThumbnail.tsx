import React from 'react';
import { motion } from 'framer-motion';

const WordSearchThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center p-4">
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
              initial={{ background: "linear-gradient(90deg, #34d399 0%, #3b82f6 100%)" }}
              animate={{
                background: [
                  "linear-gradient(90deg, #34d399 0%, #3b82f6 100%)",
                  "linear-gradient(180deg, #34d399 0%, #3b82f6 100%)",
                  "linear-gradient(270deg, #34d399 0%, #3b82f6 100%)",
                  "linear-gradient(360deg, #34d399 0%, #3b82f6 100%)",
                  "linear-gradient(90deg, #34d399 0%, #3b82f6 100%)",
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
              More Action Words
            </h1>
          </motion.div>

          {/* Interactive Preview */}
          <div className="flex justify-center gap-4 mb-4">
            <motion.div
              className="flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-emerald-800">WALK</span>
              <span className="text-emerald-600">→</span>
              <span className="text-emerald-800">SKIP</span>
            </motion.div>
          </div>

          {/* Action Icons Grid */}
          <div className="grid grid-cols-4 gap-3 max-w-[200px] mx-auto">
            {['🚶', '👏', '🎨', '👋'].map((emoji, index) => (
              <motion.div
                key={index}
                className="bg-emerald-50 rounded-lg p-2 flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1 + 0.3
                }}
              >
                <span className="text-2xl">{emoji}</span>
              </motion.div>
            ))}
          </div>

          {/* Animated Footer */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default WordSearchThumbnail; 
import React from 'react';
import { motion } from 'framer-motion';

const MultiplicationMatchThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%) rotate(45deg)'
              }}
            >
              {['🚀', '🌸', '🐠', '🍬', '🍎'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-center mb-4">
            Match Groups to Multiply!
          </h1>

          {/* Example Groups */}
          <div className="flex gap-4 justify-center mb-4">
            <motion.div
              className="bg-indigo-100 rounded-lg p-2 flex flex-wrap justify-center gap-1 w-24"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xl">🚀</span>
              <span className="text-xl">🚀</span>
              <span className="text-xl">🚀</span>
            </motion.div>
            <motion.div
              className="bg-purple-100 rounded-lg p-2 flex flex-wrap justify-center gap-1 w-24"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xl">🚀</span>
              <span className="text-xl">🚀</span>
              <span className="text-xl">🚀</span>
            </motion.div>
          </div>

          {/* Formula */}
          <motion.div
            className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-3 font-bold text-lg text-indigo-600"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            2 × 3 = 6
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <motion.div
              className="text-sm font-medium text-indigo-600 px-3 py-1 bg-indigo-50 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Numbers 2-5
            </motion.div>
            <motion.div
              className="text-sm font-medium text-purple-600 px-3 py-1 bg-purple-50 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Fun Themes
            </motion.div>
            <motion.div
              className="text-sm font-medium text-pink-600 px-3 py-1 bg-pink-50 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Match & Learn
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationMatchThumbnail; 
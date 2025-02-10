import React from 'react';
import { motion } from 'framer-motion';

const WordUnscrambleThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center p-4">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-xl p-6 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <span className="absolute top-2 left-2 text-4xl">📚</span>
          <span className="absolute top-2 right-2 text-4xl">🎨</span>
          <span className="absolute bottom-2 left-2 text-4xl">⏰</span>
          <span className="absolute bottom-2 right-2 text-4xl">🚪</span>
        </div>

        <div className="relative flex flex-col items-center space-y-4">
          {/* Title */}
          <motion.h1 
            className="text-2xl font-bold text-purple-600 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Everyday Words Adventure
          </motion.h1>

          {/* Preview */}
          <div className="flex items-center justify-center space-x-4">
            <motion.span 
              className="text-4xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📚
            </motion.span>
            <span className="text-2xl font-bold text-purple-600">→</span>
            <div className="flex space-x-2">
              {['B', 'O', 'O', 'K'].map((letter, index) => (
                <motion.div
                  key={index}
                  className="w-8 h-8 bg-purple-100 border-2 border-purple-300 rounded-lg flex items-center justify-center font-bold text-purple-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 text-center">
            Learn everyday words through fun unscrambling!
          </p>

          {/* Level Indicators */}
          <div className="flex space-x-2">
            {['School', 'Home', 'Actions'].map((level, index) => (
              <motion.div
                key={level}
                className="px-2 py-1 bg-purple-100 rounded-full text-xs text-purple-600 font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {level}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleThumbnail; 
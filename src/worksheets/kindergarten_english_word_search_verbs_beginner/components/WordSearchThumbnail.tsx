import React from 'react';
import { motion } from 'framer-motion';

const WordSearchThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white/95 rounded-xl shadow-lg p-4 relative overflow-hidden">
        {/* Background Animated Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute top-4 left-4 text-4xl opacity-20"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🏃
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 text-4xl opacity-20"
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💃
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-8 text-4xl opacity-20"
            animate={{ 
              x: [0, 10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎮
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-indigo-800 text-center mb-2">
            Action Word Search
          </h1>
          
          <div className="flex justify-center gap-4 mb-4">
            <motion.div
              className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span>RUN</span>
              <span>→</span>
              <span>JUMP</span>
            </motion.div>
          </div>

          {/* Mini Grid Preview */}
          <div className="grid grid-cols-4 gap-1 max-w-[160px] mx-auto">
            {['R', 'U', 'N', '★'].map((letter, index) => (
              <motion.div
                key={index}
                className="w-8 h-8 bg-indigo-100 rounded flex items-center justify-center font-bold text-indigo-800"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {letter}
              </motion.div>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex justify-center gap-3 mt-4">
            <motion.span 
              className="text-2xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🏃
            </motion.span>
            <motion.span 
              className="text-2xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
              🦘
            </motion.span>
            <motion.span 
              className="text-2xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            >
              🎤
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchThumbnail; 
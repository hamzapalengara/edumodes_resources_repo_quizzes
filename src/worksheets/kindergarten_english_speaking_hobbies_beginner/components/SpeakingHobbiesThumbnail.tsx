import React from 'react';
import { motion } from 'framer-motion';

const SpeakingHobbiesThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-violet-400 via-indigo-300 to-sky-300 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Speech practice indicators */}
      <motion.div 
        className="absolute top-4 right-4 w-16 h-16 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-4xl">🗣️</span>
      </motion.div>
      <motion.div 
        className="absolute bottom-4 left-4 w-16 h-16 flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <span className="text-4xl">👂</span>
      </motion.div>
      <motion.div 
        className="absolute top-1/2 left-8 w-12 h-12 flex items-center justify-center"
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-3xl">💭</span>
      </motion.div>
      <motion.div 
        className="absolute top-8 right-1/2 w-14 h-14 flex items-center justify-center"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="text-3xl">🎯</span>
      </motion.div>

      <div className="w-[420px] h-[240px] bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col relative overflow-hidden">
        {/* Communication practice background */}
        <div className="absolute inset-0 opacity-5">
          <span className="absolute top-4 left-4 text-4xl">🗣️</span>
          <span className="absolute top-4 right-4 text-4xl">👂</span>
          <span className="absolute bottom-4 left-4 text-4xl">💭</span>
          <span className="absolute bottom-4 right-4 text-4xl">🎯</span>
        </div>
        
        <div className="space-y-1 text-center mb-3">
          <h1 className="text-lg font-bold bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
            Speaking Practice
          </h1>
          <p className="text-sm font-medium text-violet-600">
            Improve Communication Skills
          </p>
        </div>

        {/* Practice Preview */}
        <div className="flex-1 flex flex-col justify-center space-y-4 relative z-10">
          {/* Friend's message */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
              👧
            </div>
            <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-lg p-2">
              <p className="text-sm font-medium text-violet-800">
                Let's talk about hobbies! 🌟
              </p>
            </div>
          </div>

          {/* Practice indicators */}
          <div className="flex justify-center gap-2">
            <div className="px-2 py-1 bg-violet-100 rounded-full text-xs text-violet-600 flex items-center gap-1">
              🎤 Clear Speech
            </div>
            <div className="px-2 py-1 bg-sky-100 rounded-full text-xs text-sky-600 flex items-center gap-1">
              👂 Active Listening
            </div>
          </div>

          {/* Response area */}
          <div className="flex items-start justify-end gap-2">
            <div className="bg-gradient-to-r from-sky-100 to-indigo-100 rounded-lg p-2 flex items-center gap-2">
              <span className="text-sm font-medium text-sky-800">
                Practice Speaking 🗣️
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
              👦
            </div>
          </div>
        </div>

        {/* Feature Indicators */}
        <div className="flex justify-center gap-2 mt-2 relative z-10">
          <div className="px-2 py-1 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full text-xs text-violet-600 flex items-center gap-1">
            🎯 Pronunciation
          </div>
          <div className="px-2 py-1 bg-gradient-to-r from-sky-100 to-indigo-100 rounded-full text-xs text-sky-600 flex items-center gap-1">
            💭 Natural Dialogue
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingHobbiesThumbnail; 
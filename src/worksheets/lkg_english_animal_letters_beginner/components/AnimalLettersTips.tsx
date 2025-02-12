import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const AnimalLettersTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-500 to-lime-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mb-4 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            How to Learn Animal Letters 🎯
          </h1>
        </div>

        {/* Main Tips */}
        <div className="space-y-4 p-4">
          {/* Listen and Learn */}
          <motion.div
            className="bg-white/30 backdrop-blur-md rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">👂</span> Listen Carefully
            </h2>
            <div className="bg-white/40 rounded-lg p-3 shadow-md">
              <ul className="space-y-2 text-white">
                <li>• Touch each animal to hear its name</li>
                <li>• Listen for the first sound</li>
                <li>• Try saying the name yourself</li>
                <li>• Make the animal sound too!</li>
              </ul>
            </div>
          </motion.div>

          {/* Look and Remember */}
          <motion.div
            className="bg-white/30 backdrop-blur-md rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">👀</span> Look and Remember
            </h2>
            <div className="bg-white/40 rounded-lg p-3 shadow-md">
              <ul className="space-y-2 text-white">
                <li>• Look at each animal picture</li>
                <li>• Remember what it starts with</li>
                <li>• Think of the sound it makes</li>
                <li>• Match the letter to the sound</li>
              </ul>
            </div>
          </motion.div>

          {/* Type the Letter */}
          <motion.div
            className="bg-white/30 backdrop-blur-md rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">⌨️</span> Type the Letter
            </h2>
            <div className="bg-white/40 rounded-lg p-3 shadow-md">
              <ul className="space-y-2 text-white">
                <li>• Touch the empty box</li>
                <li>• Type the first letter you hear</li>
                <li>• Use CAPITAL letters</li>
                <li>• Try again if needed</li>
              </ul>
            </div>
          </motion.div>

          {/* Fun Practice Ideas */}
          <motion.div
            className="bg-white/30 backdrop-blur-md rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">🎮</span> Fun Practice Ideas
            </h2>
            <div className="space-y-3">
              <div className="bg-white/40 rounded-lg p-3 shadow-md">
                <h3 className="font-bold text-white mb-2">Animal Sounds Game</h3>
                <p className="text-white/90">
                  Make animal sounds and guess the first letter!
                </p>
              </div>
              <div className="bg-white/40 rounded-lg p-3 shadow-md">
                <h3 className="font-bold text-white mb-2">Letter Hunt</h3>
                <p className="text-white/90">
                  Find things that start with the same letter as your favorite animal.
                </p>
              </div>
              <div className="bg-white/40 rounded-lg p-3 shadow-md">
                <h3 className="font-bold text-white mb-2">Draw and Write</h3>
                <p className="text-white/90">
                  Draw animals and practice writing their first letters.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Remember */}
          <motion.div
            className="bg-white/30 backdrop-blur-md rounded-xl p-4 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">💡</span> Remember
            </h2>
            <div className="bg-white/40 rounded-lg p-3 shadow-md">
              <ul className="space-y-2 text-white">
                <li>• Take your time</li>
                <li>• Listen to each name carefully</li>
                <li>• Have fun with animal sounds</li>
                <li>• Practice makes perfect!</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimalLettersTips; 
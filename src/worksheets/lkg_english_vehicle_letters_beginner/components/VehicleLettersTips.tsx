import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const VehicleLettersTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            How to Learn Vehicle Letters 🎯
          </h1>
        </div>

        {/* Main Tips */}
        <div className="space-y-4 p-4">
          {/* Listen and Learn */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">👂</span> Listen Carefully
            </h2>
            <div className="bg-white/30 rounded-lg p-3">
              <ul className="space-y-2 text-white">
                <li>• Touch each vehicle to hear its name</li>
                <li>• Listen for the first sound</li>
                <li>• Try saying the name yourself</li>
                <li>• Make the vehicle sound too!</li>
              </ul>
            </div>
          </motion.div>

          {/* Look and Remember */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">👀</span> Look and Remember
            </h2>
            <div className="bg-white/30 rounded-lg p-3">
              <ul className="space-y-2 text-white">
                <li>• Look at each vehicle picture</li>
                <li>• Remember what it starts with</li>
                <li>• Think of the sound it makes</li>
                <li>• Match the letter to the sound</li>
              </ul>
            </div>
          </motion.div>

          {/* Type the Letter */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">⌨️</span> Type the Letter
            </h2>
            <div className="bg-white/30 rounded-lg p-3">
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
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">🎮</span> Fun Practice Ideas
            </h2>
            <div className="space-y-3">
              <div className="bg-white/30 rounded-lg p-3">
                <h3 className="font-bold text-white mb-2">Vehicle Sound Game</h3>
                <p className="text-white/90">
                  Make vehicle sounds and guess the first letter!
                </p>
              </div>
              <div className="bg-white/30 rounded-lg p-3">
                <h3 className="font-bold text-white mb-2">Transportation Hunt</h3>
                <p className="text-white/90">
                  Look for vehicles outside and name their first letters.
                </p>
              </div>
              <div className="bg-white/30 rounded-lg p-3">
                <h3 className="font-bold text-white mb-2">Draw and Write</h3>
                <p className="text-white/90">
                  Draw your favorite vehicles and practice writing their letters.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vehicle Categories */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">🚦</span> Vehicle Groups
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/30 rounded-lg p-3">
                <h3 className="font-bold text-white mb-2">Land Vehicles</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-2xl">🚗</span>
                  <span className="text-2xl">🚌</span>
                  <span className="text-2xl">🚂</span>
                  <span className="text-2xl">🏍️</span>
                </div>
              </div>
              <div className="bg-white/30 rounded-lg p-3">
                <h3 className="font-bold text-white mb-2">Air Vehicles</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-2xl">✈️</span>
                  <span className="text-2xl">🚁</span>
                  <span className="text-2xl">🛸</span>
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Remember */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">💡</span> Remember
            </h2>
            <div className="bg-white/30 rounded-lg p-3">
              <ul className="space-y-2 text-white">
                <li>• Take your time</li>
                <li>• Listen to each name carefully</li>
                <li>• Have fun with vehicle sounds</li>
                <li>• Practice makes perfect!</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VehicleLettersTips; 
import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BodyLettersTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            How to Learn Body Part Letters 🎯
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
                <li>• Touch each body part picture to hear its name</li>
                <li>• Listen for the first sound in each word</li>
                <li>• Try saying the name yourself</li>
                <li>• Think about what each body part does</li>
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
                <li>• Look at each body part emoji</li>
                <li>• Point to that part on your own body</li>
                <li>• Remember what it does</li>
                <li>• Match the letter to the body part</li>
              </ul>
            </div>
          </motion.div>

          {/* Move and Learn */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">🤸</span> Move and Learn
            </h2>
            <div className="bg-white/30 rounded-lg p-3">
              <ul className="space-y-2 text-white">
                <li>• Wave your hands when learning 'H'</li>
                <li>• Tap your nose for 'N'</li>
                <li>• Point to your mouth for 'M'</li>
                <li>• Move your legs for 'L'</li>
              </ul>
            </div>
          </motion.div>

          {/* Type the Letter */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
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

          {/* Fun Activities */}
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">🎮</span> Fun Learning Games
            </h2>
            <div className="space-y-3">
              <div className="bg-white/30 rounded-lg p-3">
                <h3 className="font-bold text-white mb-2">Simon Says</h3>
                <p className="text-white/90">
                  Play "Simon Says" with body parts and their letters!
                </p>
              </div>
              <div className="bg-white/30 rounded-lg p-3">
                <h3 className="font-bold text-white mb-2">Body Letter Hunt</h3>
                <p className="text-white/90">
                  Find things that start with the same letter as body parts.
                </p>
              </div>
              <div className="bg-white/30 rounded-lg p-3">
                <h3 className="font-bold text-white mb-2">Draw and Write</h3>
                <p className="text-white/90">
                  Draw body parts and practice writing their first letters.
                </p>
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
                <li>• Use your own body to learn</li>
                <li>• Make learning active and fun</li>
                <li>• Practice makes perfect!</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BodyLettersTips; 
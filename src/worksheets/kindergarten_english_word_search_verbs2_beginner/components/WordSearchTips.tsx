import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-blue-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* How to Play */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            How to Find More Action Words 🔍
          </h2>
          
          <div className="bg-white/30 rounded-lg p-4">
            <ol className="space-y-3 text-white">
              <motion.li 
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="font-bold">1.</span>
                <p>Look at the word list at the top - these are all things you can do!</p>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="font-bold">2.</span>
                <p>Words can be found going across (➡️) or down (⬇️) in the grid.</p>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-bold">3.</span>
                <p>Touch and drag your finger over the letters when you find a word.</p>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="font-bold">4.</span>
                <p>Each found word will light up in its own special color! 🌈</p>
              </motion.li>
            </ol>
          </div>
        </div>

        {/* Search Strategies */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Smart Search Strategies 🧠
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              className="bg-white/30 rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-bold text-white mb-2">Look for Patterns</h3>
              <ul className="space-y-2 text-white">
                <li>• Start with short words first (WALK, CLAP)</li>
                <li>• Look for common first letters (W, S)</li>
                <li>• Check both directions (across and down)</li>
                <li>• Use the emojis as hints! 🎯</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white/30 rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-bold text-white mb-2">Stay Organized</h3>
              <ul className="space-y-2 text-white">
                <li>• Go row by row</li>
                <li>• Then check column by column</li>
                <li>• Cross off words as you find them</li>
                <li>• Keep track of your progress! 📝</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun Facts About Action Words! ⭐
          </h2>
          
          <div className="space-y-4">
            <motion.div 
              className="bg-white/30 rounded-lg p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="font-bold text-white mb-2">Action Words in Daily Life</h3>
              <p className="text-white">
                From morning to night, we use action words all the time! When we WALK to school, 
                WAVE to friends, SMILE at family, and WASH our hands! 🌞
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/30 rounded-lg p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="font-bold text-white mb-2">Why Learn Action Words?</h3>
              <p className="text-white">
                Action words help us tell stories about what we do and see! They make our 
                speaking and writing more exciting and clear! ✨
              </p>
            </motion.div>
          </div>
        </div>

        {/* Helpful Reminders */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Remember These Tips! 🌟
          </h2>
          
          <div className="bg-white/30 rounded-lg p-4">
            <motion.ul 
              className="space-y-3 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <li className="flex items-start space-x-2">
                <span>🎯</span>
                <p>Take your time - it's not a race!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🧩</span>
                <p>Try different directions if you get stuck!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌈</span>
                <p>Celebrate each word you find!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>💪</span>
                <p>You can do it - keep searching!</p>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 
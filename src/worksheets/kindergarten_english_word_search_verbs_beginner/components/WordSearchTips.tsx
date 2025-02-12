import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* How to Play */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            How to Find Action Words 🔍
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
                <p>Look at the word list and notice how each word shows an action (something you can do).</p>
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
                <li>• Start with short words first (RUN, EAT)</li>
                <li>• Look for common first letters (R, S)</li>
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
              <h3 className="font-bold text-white mb-2">What are Action Words?</h3>
              <p className="text-white">
                Action words tell us what people, animals, or things do! They are like little 
                movies in our mind - we can picture the action happening! 🎬
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/30 rounded-lg p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="font-bold text-white mb-2">Why are They Important?</h3>
              <p className="text-white">
                Action words help us tell stories, explain what we're doing, and share our 
                experiences with others! They make our language come alive! ✨
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
                <p>If you get stuck, try a different strategy!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌈</span>
                <p>Have fun and celebrate each word you find!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>💪</span>
                <p>Practice makes perfect - keep trying!</p>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 
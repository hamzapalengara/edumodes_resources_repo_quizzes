import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto overflow-hidden">
          <div className="p-4">
            <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
              Tips & Activities for Learning Everyday Words 🌟
            </h1>

            {/* Word Learning Strategies */}
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                Word Learning Strategies 📚
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">
                    Look and Say 👀
                  </h3>
                  <p>
                    1. Look at the picture carefully<br />
                    2. Say the word out loud<br />
                    3. Break the word into smaller parts<br />
                    4. Practice saying it slowly, then faster
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">
                    Memory Tricks 🧠
                  </h3>
                  <p>
                    1. Connect the word to something you know<br />
                    2. Make a funny sentence with the word<br />
                    3. Draw a picture of the word<br />
                    4. Act out the word if possible
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Fun Activities */}
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                Fun Learning Activities 🎮
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">
                    Word Hunt 🔍
                  </h3>
                  <p>
                    Look for these words in your home or classroom. When you find one,
                    say it out loud and spell it!
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">
                    Word Actions 🎭
                  </h3>
                  <p>
                    Act out each word like charades. Can someone guess what word
                    you're showing?
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">
                    Word Artist 🎨
                  </h3>
                  <p>
                    Draw pictures for each word and create your own word dictionary!
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Category Games */}
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                Word Category Games 🎯
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">
                    School Items
                  </h3>
                  <p>
                    Find more words that belong in school:<br />
                    • BOOK<br />
                    • DESK<br />
                    • PEN<br />
                    What else can you add?
                  </p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">
                    Home Objects
                  </h3>
                  <p>
                    Look around your home for more words:<br />
                    • LAMP<br />
                    • DOOR<br />
                    • CLOCK<br />
                    Can you find more?
                  </p>
                </div>
                <div className="bg-pink-50 rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">
                    Daily Actions
                  </h3>
                  <p>
                    What other actions do you do daily?<br />
                    • PLAY<br />
                    • WASH<br />
                    • READ<br />
                    Add your own!
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Parent Tips */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                Tips for Parents and Teachers 👥
              </h2>
              <div className="bg-yellow-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🌟</span>
                    <span>Make learning fun by turning it into a game</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">📝</span>
                    <span>Practice writing these words in different contexts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🗣️</span>
                    <span>Use these words in daily conversations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🎨</span>
                    <span>Encourage creativity in learning new words</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">🎯</span>
                    <span>Set small, achievable goals for word learning</span>
                  </li>
                </ul>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleTips; 
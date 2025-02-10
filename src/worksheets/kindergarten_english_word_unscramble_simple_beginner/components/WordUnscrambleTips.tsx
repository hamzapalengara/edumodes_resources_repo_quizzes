import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <WorksheetHeader />
      <div className="p-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h1 className="text-2xl font-bold text-center mb-8 text-green-600">
            Vegetable Word Unscramble - Tips 🥕
          </h1>

          {/* Tips for Young Learners */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold mb-4 text-green-700">
              Tips for Young Learners 🌱
            </h2>
            <div className="bg-green-50 rounded-lg p-4">
              <ul className="space-y-3">
                <li>• Look at the vegetable picture for a hint! 🥕</li>
                <li>• Click letters to hear their sounds 🔊</li>
                <li>• Try to say the vegetable name out loud 🗣️</li>
                <li>• Think about vegetables you've eaten before 🥗</li>
                <li>• Earn points for each correct answer! ⭐</li>
              </ul>
            </div>
          </motion.div>

          {/* Helpful Strategies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold mb-4 text-green-700">
              Helpful Strategies 💡
            </h2>
            <div className="bg-green-50 rounded-lg p-4">
              <ul className="space-y-3">
                <li>• Find the first letter of the vegetable name</li>
                <li>• Look for vowels (a, e, i, o, u) in the scrambled word</li>
                <li>• Think about common letter pairs in vegetable names (like 'ch' in 'chard')</li>
                <li>• Use the hint if you're stuck</li>
                <li>• Remember that longer words can be harder to unscramble</li>
              </ul>
            </div>
          </motion.div>

          {/* Word Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold mb-4 text-green-700">
              Vegetable Categories 🥬
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-600 mb-2">Easy Veggies</h3>
                <p className="text-sm text-gray-600">
                  Simple and common vegetables like:
                  <br />• BEAN
                  <br />• CORN
                  <br />• PEAS
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-600 mb-2">Common Veggies</h3>
                <p className="text-sm text-gray-600">
                  Everyday vegetables like:
                  <br />• KALE
                  <br />• GARLIC
                  <br />• GINGER
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-600 mb-2">More Veggies</h3>
                <p className="text-sm text-gray-600">
                  Longer vegetable names like:
                  <br />• CARROT
                  <br />• CABBAGE
                  <br />• SPINACH
                </p>
              </div>
            </div>
          </motion.div>

          {/* Reminder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-green-50 rounded-lg p-4 text-center"
          >
            <p className="text-green-700">
              Remember: Take your time and have fun learning about vegetables! 🌟
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WordUnscrambleTips; 
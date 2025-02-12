import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Dice data with patterns and correct numbers
const DICE_PATTERNS = [
  { pattern: '⚀', number: 1, sound: 'one dot' },
  { pattern: '⚁', number: 2, sound: 'two dots' },
  { pattern: '⚂', number: 3, sound: 'three dots' },
  { pattern: '⚃', number: 4, sound: 'four dots' },
  { pattern: '⚄', number: 5, sound: 'five dots' },
  { pattern: '⚅', number: 6, sound: 'six dots' },
];

const DiceCountingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Dice Counting - Answer Key
          </h2>
        </div>

        {/* Dice Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {DICE_PATTERNS.map((dice, index) => (
            <motion.div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Dice Pattern */}
              <div className="text-6xl mb-4">
                {dice.pattern}
              </div>

              {/* Answer */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-lg flex items-center justify-center text-3xl font-bold text-white shadow-md mx-auto">
                  {dice.number}
                </div>
                <p className="mt-2 text-white">
                  {dice.sound}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4 text-white text-center shadow-lg">
          <p className="text-lg">
            Help students count the dots on each dice and write the correct number.
            Encourage them to count slowly and carefully!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiceCountingAnswerKey; 
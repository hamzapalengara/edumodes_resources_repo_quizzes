import React from 'react';
import { motion } from 'framer-motion';

const SOLUTIONS = [
  {
    groups: 2,
    itemsPerGroup: 3,
    theme: 'Space',
    emoji: '🚀',
    formula: '2 × 3 = 6',
    explanation: 'Two groups of three rockets equals six rockets in total.'
  },
  {
    groups: 3,
    itemsPerGroup: 4,
    theme: 'Garden',
    emoji: '🌸',
    formula: '3 × 4 = 12',
    explanation: 'Three groups of four flowers equals twelve flowers in total.'
  },
  {
    groups: 4,
    itemsPerGroup: 2,
    theme: 'Ocean',
    emoji: '🐠',
    formula: '4 × 2 = 8',
    explanation: 'Four groups of two fish equals eight fish in total.'
  },
  {
    groups: 2,
    itemsPerGroup: 5,
    theme: 'Candy',
    emoji: '🍬',
    formula: '2 × 5 = 10',
    explanation: 'Two groups of five candies equals ten candies in total.'
  },
  {
    groups: 5,
    itemsPerGroup: 3,
    theme: 'Fruit',
    emoji: '🍎',
    formula: '5 × 3 = 15',
    explanation: 'Five groups of three apples equals fifteen apples in total.'
  }
];

const MultiplicationMatchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 px-0 md:p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-2 md:p-6">
          <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
            Answer Key: Match Groups to Multiplication Facts
          </h1>

          <div className="space-y-6">
            {SOLUTIONS.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="font-semibold text-lg text-indigo-600 mb-3">
                  Question {index + 1}: {solution.theme} Theme
                </h2>

                {/* Visual Groups */}
                <div className="flex flex-wrap gap-4 mb-4">
                  {[...Array(solution.groups)].map((_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="bg-indigo-50 rounded-lg p-2 flex flex-wrap gap-1 justify-center"
                      style={{ width: '100px' }}
                    >
                      {[...Array(solution.itemsPerGroup)].map((_, itemIndex) => (
                        <span key={itemIndex} className="text-2xl">
                          {solution.emoji}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Formula and Explanation */}
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-bold text-lg text-purple-600 mb-2">
                    {solution.formula}
                  </div>
                  <p className="text-purple-700">{solution.explanation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationMatchAnswerKey; 
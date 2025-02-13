import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_TIPS = [
  {
    title: 'Break Down Sweet Groups',
    icon: '🍫',
    description: 'Split larger numbers into smaller, familiar ones.',
    example: '8 × 7 = (5 × 7) + (3 × 7) = 35 + 21 = 56 chocolates'
  },
  {
    title: 'Count by Candy Rows',
    icon: '🍬',
    description: 'Count by the multiplier the number of times needed.',
    example: '6 × 8: Count by 8s → 8, 16, 24, 32, 40, 48 candies'
  },
  {
    title: 'Visualize Display Cases',
    icon: '🍭',
    description: 'Think of multiplication as equal groups in different display cases.',
    example: '7 × 6: Seven cases with six lollipops each'
  },
  {
    title: 'Use Known Sweet Facts',
    icon: '🧁',
    description: 'Use facts you know to solve harder ones.',
    example: 'If you know 5 × 9 = 45, then 6 × 9 is just one more tray of 9: 45 + 9 = 54'
  },
  {
    title: 'Double the Treats',
    icon: '🍪',
    description: 'Double a number and add one more group if needed.',
    example: '9 × 5 = (5 × 5) + (4 × 5) = 25 + 20 = 45 cookies'
  }
];

const HELPFUL_REMINDERS = [
  {
    icon: '🎯',
    text: 'Focus on one candy display at a time when counting'
  },
  {
    icon: '🍰',
    text: 'Remember that multiplication is like stacking layers of treats'
  },
  {
    icon: '📝',
    text: 'Keep track of your running total like counting candies in a jar'
  },
  {
    icon: '🎨',
    text: 'Draw or visualize the candy groups to make counting easier'
  },
  {
    icon: '✨',
    text: 'Start with smaller candy boxes, then build up to larger ones'
  }
];

const PRACTICE_EXAMPLE = {
  problem: '8 × 7 = 56',
  steps: [
    'Step 1: Break down 8 candy boxes into 5 + 3',
    'Step 2: Count first 5 boxes: 5 × 7 = 35 candies',
    'Step 3: Count last 3 boxes: 3 × 7 = 21 candies',
    'Step 4: Add all candies: 35 + 21 = 56',
    'Final Answer: 8 × 7 = 56 candies total'
  ],
  visual: [
    '🍬🍬🍬🍬🍬🍬🍬',
    '🍬🍬🍬🍬🍬🍬🍬',
    '🍬🍬🍬🍬🍬🍬🍬',
    '🍬🍬🍬🍬🍬🍬🍬',
    '🍬🍬🍬🍬🍬🍬🍬',
    '🍬🍬🍬🍬🍬🍬🍬',
    '🍬🍬🍬🍬🍬🍬🍬',
    '🍬🍬🍬🍬🍬🍬🍬'
  ]
};

const MultiplicationCandyAdvancedTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-pink-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-8">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-pink-300 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Sweet Shop Multiplication Tips & Tricks
        </motion.h1>

        {/* Main Tips */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-pink-300 mb-4">
            Candy Shop Multiplication Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MULTIPLICATION_TIPS.map((tip, index) => (
              <motion.div
                key={tip.title}
                className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border-2 border-pink-500/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{tip.icon}</span>
                  <h3 className="text-lg font-semibold text-pink-300">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-pink-200 mb-2">{tip.description}</p>
                <div className="bg-black/20 rounded-lg p-2 text-pink-300">
                  <span className="text-sm">Example: </span>
                  {tip.example}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Helpful Reminders */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-pink-300 mb-4">
            Sweet Success Reminders
          </h2>
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border-2 border-pink-500/30">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HELPFUL_REMINDERS.map((reminder, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3 text-pink-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <span className="text-2xl">{reminder.icon}</span>
                  <span>{reminder.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Practice Example */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl font-bold text-pink-300 mb-4">
            Sweet Shop Example
          </h2>
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border-2 border-pink-500/30">
            <h3 className="text-lg font-semibold text-pink-300 mb-4">
              Problem: {PRACTICE_EXAMPLE.problem}
            </h3>

            {/* Visual Representation */}
            <div className="mb-4 bg-black/20 rounded-lg p-4">
              <p className="text-sm text-pink-300 mb-2">Candy Box Groups:</p>
              <div className="grid grid-cols-4 gap-2">
                {PRACTICE_EXAMPLE.visual.map((row, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {row}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solution Steps */}
            <div className="bg-black/20 rounded-lg p-4">
              <p className="text-sm text-pink-300 mb-2">Solution Steps:</p>
              <ul className="space-y-2">
                {PRACTICE_EXAMPLE.steps.map((step, i) => (
                  <motion.li
                    key={i}
                    className="text-pink-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                  >
                    {step}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MultiplicationCandyAdvancedTips; 
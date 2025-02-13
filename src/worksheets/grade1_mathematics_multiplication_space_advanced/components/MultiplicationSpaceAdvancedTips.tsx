import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_TIPS = [
  {
    title: 'Break Down Large Numbers',
    icon: '🔢',
    description: 'Split larger numbers into smaller, familiar ones.',
    example: '8 × 7 = (5 × 7) + (3 × 7) = 35 + 21 = 56'
  },
  {
    title: 'Use Skip Counting',
    icon: '⏭️',
    description: 'Count by the multiplier the number of times needed.',
    example: '6 × 8: Count by 8s → 8, 16, 24, 32, 40, 48'
  },
  {
    title: 'Visualize Groups',
    icon: '👥',
    description: 'Think of multiplication as equal groups of objects.',
    example: '7 × 6: Seven groups of six stars ⭐⭐⭐⭐⭐⭐'
  },
  {
    title: 'Use Known Facts',
    icon: '🧠',
    description: 'Use facts you know to solve harder ones.',
    example: 'If you know 5 × 9 = 45, then 6 × 9 is just one more group of 9: 45 + 9 = 54'
  },
  {
    title: 'Double and Add',
    icon: '✖️',
    description: 'Double a number and add one more group if needed.',
    example: '9 × 5 = (5 × 5) + (4 × 5) = 25 + 20 = 45'
  }
];

const HELPFUL_REMINDERS = [
  {
    icon: '🎯',
    text: 'Focus on one group at a time when counting'
  },
  {
    icon: '🔄',
    text: 'Remember that multiplication is repeated addition'
  },
  {
    icon: '📝',
    text: 'Write down your running total to avoid mistakes'
  },
  {
    icon: '🎨',
    text: 'Draw or visualize the groups to make counting easier'
  },
  {
    icon: '✨',
    text: 'Practice with smaller numbers first, then build up'
  }
];

const PRACTICE_EXAMPLE = {
  problem: '8 × 7 = 56',
  steps: [
    'Step 1: Break down 8 into 5 + 3',
    'Step 2: Multiply 5 × 7 = 35',
    'Step 3: Multiply 3 × 7 = 21',
    'Step 4: Add the results: 35 + 21 = 56',
    'Final Answer: 8 × 7 = 56'
  ],
  visual: [
    '⭐⭐⭐⭐⭐⭐⭐',
    '⭐⭐⭐⭐⭐⭐⭐',
    '⭐⭐⭐⭐⭐⭐⭐',
    '⭐⭐⭐⭐⭐⭐⭐',
    '⭐⭐⭐⭐⭐⭐⭐',
    '⭐⭐⭐⭐⭐⭐⭐',
    '⭐⭐⭐⭐⭐⭐⭐',
    '⭐⭐⭐⭐⭐⭐⭐'
  ]
};

const MultiplicationSpaceAdvancedTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-8">
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-purple-300 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Space Multiplication Tips & Tricks
        </motion.h1>

        {/* Main Tips */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-purple-300 mb-4">
            Cosmic Multiplication Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MULTIPLICATION_TIPS.map((tip, index) => (
              <motion.div
                key={tip.title}
                className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{tip.icon}</span>
                  <h3 className="text-lg font-semibold text-purple-300">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-purple-200 mb-2">{tip.description}</p>
                <div className="bg-black/20 rounded-lg p-2 text-purple-300">
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
          <h2 className="text-xl font-bold text-purple-300 mb-4">
            Mission Control Reminders
          </h2>
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500/30">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HELPFUL_REMINDERS.map((reminder, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3 text-purple-200"
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
          <h2 className="text-xl font-bold text-purple-300 mb-4">
            Training Mission Example
          </h2>
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500/30">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">
              Problem: {PRACTICE_EXAMPLE.problem}
            </h3>

            {/* Visual Representation */}
            <div className="mb-4 bg-black/20 rounded-lg p-4">
              <p className="text-sm text-purple-300 mb-2">Visual Groups:</p>
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
              <p className="text-sm text-purple-300 mb-2">Solution Steps:</p>
              <ul className="space-y-2">
                {PRACTICE_EXAMPLE.steps.map((step, i) => (
                  <motion.li
                    key={i}
                    className="text-purple-200"
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

export default MultiplicationSpaceAdvancedTips; 
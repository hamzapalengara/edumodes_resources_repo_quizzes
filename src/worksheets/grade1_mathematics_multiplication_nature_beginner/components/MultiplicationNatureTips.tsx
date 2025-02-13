import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_TIPS = [
  {
    title: 'Count the Garden Plots',
    icon: '🌺',
    description: 'First, count how many separate garden plots or groups you see. This is your first number in the multiplication fact.',
    example: 'If you see 3 flower gardens, your first number is 3'
  },
  {
    title: 'Count Items in One Plot',
    icon: '🌸',
    description: 'Count how many items are in just one garden plot or group. This is your second number.',
    example: 'If each garden has 4 flowers, your second number is 4'
  },
  {
    title: 'Skip Count Through Nature',
    icon: '🦋',
    description: 'Count by the number of items in each group to find the total.',
    example: 'For 3 groups of 4: "4 butterflies, 8 butterflies, 12 butterflies"'
  },
  {
    title: 'Special Case: Groups of One',
    icon: '🐦',
    description: 'When there is just one item in each group, multiply by 1.',
    example: '4 trees with 1 bird each is 4 × 1 = 4 birds'
  },
  {
    title: 'Draw Your Garden',
    icon: '✏️',
    description: 'If you\'re unsure, draw circles for garden plots and dots for items.',
    example: 'Draw 2 circles (plots) and put 3 dots (flowers) in each'
  }
];

const HELPFUL_REMINDERS = [
  {
    icon: '🌱',
    text: 'Look for equal groups - each garden plot should have the same number of items'
  },
  {
    icon: '🌿',
    text: 'The first number tells you how many garden plots or groups'
  },
  {
    icon: '🍃',
    text: 'The second number tells you how many items in each plot or group'
  },
  {
    icon: '🌺',
    text: 'The answer is the total number of all items in all groups'
  }
];

const MultiplicationNatureTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-emerald-600 mb-6">
          Tips for Garden Groups Multiplication
        </h1>

        {/* Main Tips Section */}
        <div className="space-y-4 mb-8">
          {MULTIPLICATION_TIPS.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{tip.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-emerald-600 mb-2">
                    {tip.title}
                  </h2>
                  <p className="text-gray-700 mb-2">{tip.description}</p>
                  <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                    <strong>Example:</strong> {tip.example}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Helpful Reminders Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-emerald-600 mb-4">
            Garden Multiplication Reminders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HELPFUL_REMINDERS.map((reminder, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                <span className="text-2xl">{reminder.icon}</span>
                <p className="text-green-700">{reminder.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Practice Example */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-xl font-bold text-emerald-600 mb-4">
            Try This Garden Example
          </h2>
          <div className="space-y-4">
            <div className="bg-lime-50 p-4 rounded-lg">
              <div className="text-lime-700 mb-4">
                Look at these flower gardens:
              </div>
              <div className="flex gap-4 flex-wrap mb-4">
                <div className="bg-white p-3 rounded-lg">
                  🌸🌸🌸
                </div>
                <div className="bg-white p-3 rounded-lg">
                  🌸🌸🌸
                </div>
              </div>
              <div className="space-y-2 text-lime-700">
                <p>1. Count the garden plots: 2 plots</p>
                <p>2. Count flowers in one plot: 3 flowers</p>
                <p>3. Write the multiplication fact: 2 × 3 = 6</p>
                <p>4. Check: Count all flowers to verify the total is 6</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationNatureTips; 
import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_TIPS = [
  {
    title: 'Count the Groups First',
    icon: '👥',
    description: 'Look at how many separate groups there are. This is your first number in the multiplication fact.',
    example: 'If you see 3 groups of stars, your first number is 3'
  },
  {
    title: 'Count Items in One Group',
    icon: '🔢',
    description: 'Count how many items are in just one group. This is your second number.',
    example: 'If each group has 4 items, your second number is 4'
  },
  {
    title: 'Use Skip Counting',
    icon: '⏭️',
    description: 'Count by the number of items in each group to find the total.',
    example: 'For 3 groups of 4: count "4, 8, 12"'
  },
  {
    title: 'Remember Order Doesn\'t Matter',
    icon: '🔄',
    description: 'The order of numbers in multiplication doesn\'t change the answer.',
    example: '2 × 3 = 6 and 3 × 2 = 6 are both correct'
  },
  {
    title: 'Draw or Visualize',
    icon: '✏️',
    description: 'If you\'re unsure, draw the groups to help you count.',
    example: 'Draw circles for groups and dots for items'
  }
];

const HELPFUL_REMINDERS = [
  {
    icon: '💡',
    text: 'Look for equal groups - each group should have the same number of items'
  },
  {
    icon: '🎯',
    text: 'The first number in multiplication tells you how many groups'
  },
  {
    icon: '📝',
    text: 'The second number tells you how many items in each group'
  },
  {
    icon: '✨',
    text: 'The answer is the total number of all items'
  }
];

const MultiplicationChoiceTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Tips for Matching Groups to Multiplication Facts
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
                  <h2 className="text-xl font-bold text-purple-600 mb-2">
                    {tip.title}
                  </h2>
                  <p className="text-gray-700 mb-2">{tip.description}</p>
                  <div className="bg-purple-50 p-3 rounded-lg text-purple-600">
                    <strong>Example:</strong> {tip.example}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Helpful Reminders Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-purple-600 mb-4">
            Helpful Reminders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HELPFUL_REMINDERS.map((reminder, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-rose-50 p-3 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                <span className="text-2xl">{reminder.icon}</span>
                <p className="text-rose-700">{reminder.text}</p>
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
          <h2 className="text-xl font-bold text-purple-600 mb-4">
            Try This Example
          </h2>
          <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-amber-700 mb-4">
                Look at these groups of stars:
              </div>
              <div className="flex gap-4 flex-wrap mb-4">
                <div className="bg-white p-3 rounded-lg">
                  ⭐⭐⭐
                </div>
                <div className="bg-white p-3 rounded-lg">
                  ⭐⭐⭐
                </div>
              </div>
              <div className="space-y-2 text-amber-700">
                <p>1. Count the groups: 2 groups</p>
                <p>2. Count stars in one group: 3 stars</p>
                <p>3. Write the multiplication fact: 2 × 3 = 6</p>
                <p>4. Check: Count all stars to verify the total is 6</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationChoiceTips; 
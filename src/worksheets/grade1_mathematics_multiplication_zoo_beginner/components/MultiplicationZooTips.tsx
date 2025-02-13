import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_TIPS = [
  {
    title: 'Count Zoo Groups',
    icon: '🦁',
    description: 'Look for how many different enclosures or areas there are. This is your first number in multiplication.',
    example: 'If there are 3 lion enclosures, your first number is 3'
  },
  {
    title: 'Count Animals in Each Group',
    icon: '👥',
    description: 'Count how many animals are in one group. This is your second number in multiplication.',
    example: 'If each monkey habitat has 3 monkeys, your second number is 3'
  },
  {
    title: 'Add Groups Together',
    icon: '➕',
    description: 'You can add the same number over and over to find the total.',
    example: '4 penguin pools with 2 penguins each: 2 + 2 + 2 + 2 = 8'
  },
  {
    title: 'Use Multiplication',
    icon: '✖️',
    description: 'Multiplication is a faster way to add equal groups.',
    example: '5 areas with 2 giraffes each: 5 × 2 = 10 giraffes'
  },
  {
    title: 'Draw Pictures',
    icon: '🎨',
    description: 'Drawing the animals in groups can help you see the multiplication problem clearly.',
    example: '3 gorilla sanctuaries with 3 gorillas each: 🦍🦍🦍 | 🦍🦍🦍 | 🦍🦍🦍'
  }
];

const HELPFUL_REMINDERS = [
  {
    icon: '💡',
    text: 'The first number tells you how many groups (enclosures)'
  },
  {
    icon: '📝',
    text: 'The second number tells you how many animals in each group'
  },
  {
    icon: '🎯',
    text: 'The answer is the total number of animals'
  },
  {
    icon: '🔍',
    text: 'Look for words like "each" and "in each" in zoo problems'
  },
  {
    icon: '✨',
    text: 'Drawing animal groups can help you solve multiplication problems'
  }
];

const MultiplicationZooTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-amber-600 mb-6">
          Zoo Multiplication Tips
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
                  <h2 className="text-xl font-bold text-amber-600 mb-2">
                    {tip.title}
                  </h2>
                  <p className="text-amber-700 mb-2">{tip.description}</p>
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-600">
                    <strong>Example:</strong> {tip.example}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Helpful Reminders Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-amber-600 mb-4">
            Helpful Zoo Reminders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HELPFUL_REMINDERS.map((reminder, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                <span className="text-2xl">{reminder.icon}</span>
                <p className="text-amber-700">{reminder.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Practice Area */}
        <motion.div
          className="mt-8 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-xl font-bold text-amber-600 mb-4">
            Try This Example
          </h2>
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-amber-700 mb-4">
              Problem: There are 3 penguin pools, and each pool has 2 penguins. How many penguins are there in total?
            </p>
            <div className="space-y-2 text-amber-600">
              <p>1. Count the groups (pools): 3</p>
              <p>2. Count animals per group (penguins per pool): 2</p>
              <p>3. Draw or imagine the groups:</p>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-white p-3 rounded-lg">
                  Pool 1: 🐧🐧
                </div>
                <div className="bg-white p-3 rounded-lg">
                  Pool 2: 🐧🐧
                </div>
                <div className="bg-white p-3 rounded-lg">
                  Pool 3: 🐧🐧
                </div>
              </div>
              <p className="mt-4">4. Add them up: 2 + 2 + 2 = 6</p>
              <p>5. Or multiply: 3 × 2 = 6</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationZooTips; 
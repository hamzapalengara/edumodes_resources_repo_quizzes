import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MULTIPLICATION_TIPS = [
  {
    title: 'Think of Groups',
    icon: '👥',
    description: 'Multiplication is about equal groups. When you see "3 baskets with 4 apples each", think of 3 groups, each containing 4 apples.',
    example: '3 groups of 4 = 4 + 4 + 4 = 12'
  },
  {
    title: 'Count the Total',
    icon: '🔢',
    description: 'Add up all the items in each group to find the total. This helps you understand what multiplication really means.',
    example: 'If 2 children have 3 balloons each: 3 + 3 = 6'
  },
  {
    title: 'Use Visual Groups',
    icon: '👀',
    description: 'Draw or imagine the groups to help you see the total. This makes multiplication easier to understand.',
    example: '2 gardens with 5 flowers each: 🌸🌸🌸🌸🌸 | 🌸🌸🌸🌸🌸'
  },
  {
    title: 'Look for Patterns',
    icon: '🔄',
    description: 'Notice that multiplication is repeated addition. The same number is added over and over.',
    example: '4 plates with 2 slices each: 2 + 2 + 2 + 2 = 8'
  },
  {
    title: 'Real-Life Examples',
    icon: '🌟',
    description: 'Think about real situations where you see equal groups, like cookies on plates or flowers in gardens.',
    example: '3 plates with 3 pizza slices each = 9 slices total'
  }
];

const HELPFUL_REMINDERS = [
  {
    icon: '💡',
    text: 'The first number tells you how many groups'
  },
  {
    icon: '📝',
    text: 'The second number tells you how many items in each group'
  },
  {
    icon: '🎯',
    text: 'The answer is the total of all items in all groups'
  },
  {
    icon: '🔍',
    text: 'Look for words like "each" and "per" in story problems'
  },
  {
    icon: '✨',
    text: 'Drawing pictures can help you solve multiplication problems'
  }
];

const MultiplicationGroupsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-center text-amber-600 mb-6">
          Tips for Multiplication Story Problems
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
            Helpful Reminders
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
              Problem: There are 3 cookie jars, and each jar has 4 cookies. How many cookies are there in total?
            </p>
            <div className="space-y-2 text-amber-600">
              <p>1. Count the groups (jars): 3</p>
              <p>2. Count items per group (cookies per jar): 4</p>
              <p>3. Draw or imagine the groups:</p>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-white p-3 rounded-lg">
                  Jar 1: 🍪🍪🍪🍪
                </div>
                <div className="bg-white p-3 rounded-lg">
                  Jar 2: 🍪🍪🍪🍪
                </div>
                <div className="bg-white p-3 rounded-lg">
                  Jar 3: 🍪🍪🍪🍪
                </div>
              </div>
              <p className="mt-4">4. Add them up: 4 + 4 + 4 = 12</p>
              <p>5. Or multiply: 3 × 4 = 12</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationGroupsTips; 
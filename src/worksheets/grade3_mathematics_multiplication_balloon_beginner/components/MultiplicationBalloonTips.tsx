import React from 'react';
import { motion } from 'framer-motion';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const tips = [
  {
    title: "The Zero Rule",
    description: "When multiplying by 10, just add a zero to the end of the number!",
    icon: "🎯",
    example: "3 × 10 = 30 (add a zero after 3)"
  },
  {
    title: "Count by Tens",
    description: "Practice counting by tens to see the pattern: 10, 20, 30, 40...",
    icon: "🔢",
    example: "Each step adds another 10!"
  },
  {
    title: "Balloon Bundles",
    description: "Think of each bundle as a group of 10 balloons.",
    icon: "🎈",
    example: "4 bundles = 4 × 10 = 40 balloons"
  },
  {
    title: "Number Line Jumps",
    description: "Each jump on the number line is worth 10.",
    icon: "➡️",
    example: "5 jumps = 5 × 10 = 50"
  }
];

const advancedStrategies = [
  {
    title: "Double and Add Zero",
    description: "First double the number, then add a zero.",
    example: "5 × 10 = (5 × 2) + 0 = 10 + 0 = 50"
  },
  {
    title: "Place Value Power",
    description: "Moving a digit one place to the left multiplies it by 10.",
    example: "7 becomes 70 when multiplied by 10"
  },
  {
    title: "Break It Down",
    description: "Break larger numbers into smaller ones.",
    example: "12 × 10 = (10 × 10) + (2 × 10) = 100 + 20 = 120"
  }
];

const MultiplicationBalloonTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-pink-100">
      <TipsHeader />
      
      <div className="max-w-4xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-3xl font-bold text-sky-600 mb-6 text-center">
            🎈 Balloon Festival Multiplication Tips 🎈
          </h2>

          {/* Main Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-sky-50 rounded-lg p-6 shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{tip.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-sky-600 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      {tip.description}
                    </p>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-sm text-sky-700">
                      Example: {tip.example}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Advanced Strategies */}
          <div className="bg-gradient-to-r from-sky-100 to-pink-100 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-sky-600 mb-4">
              🚀 Advanced Balloon Strategies
            </h3>
            <div className="space-y-4">
              {advancedStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-md rounded-lg p-4"
                >
                  <h4 className="text-lg font-bold text-pink-500 mb-2">
                    {strategy.title}
                  </h4>
                  <p className="text-gray-700 mb-2">
                    {strategy.description}
                  </p>
                  <div className="bg-sky-50 rounded-lg p-3 text-sm text-sky-700">
                    {strategy.example}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reminder Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 bg-gradient-to-r from-pink-100 to-sky-100 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-2xl font-bold text-sky-600 mb-4 text-center">
              🌟 Remember
            </h3>
            <p className="text-center text-lg">
              Multiplying by 10 is like adding a zero to the end of a number.
              It's as simple as attaching another balloon to your bundle! 🎈
            </p>
            <div className="mt-4 text-center text-2xl">
              1 → 10 | 2 → 20 | 3 → 30 | 4 → 40 | 5 → 50
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationBalloonTips; 
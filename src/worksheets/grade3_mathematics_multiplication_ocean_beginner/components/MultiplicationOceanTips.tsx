import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationOceanTips: React.FC = () => {
  const tips = [
    {
      title: "Start with the Basics",
      description: "Remember that multiplication by 5 is like counting by 5s. Each step adds 5 to the previous number.",
      icon: "🔢",
      example: "5, 10, 15, 20, 25..."
    },
    {
      title: "Look for Patterns",
      description: "Numbers that are multiples of 5 always end in either 5 or 0.",
      icon: "🔍",
      example: "15 ends in 5, 20 ends in 0"
    },
    {
      title: "Use Skip Counting",
      description: "Practice counting by 5s to help you find the next number in the sequence.",
      icon: "⏭️",
      example: "Count: 5, 10, 15, 20..."
    },
    {
      title: "Visualize the Path",
      description: "Think of each multiple of 5 as a step deeper into the ocean, discovering new sea creatures.",
      icon: "🌊",
      example: "5 (shallow) → 25 (middle) → 50 (deep)"
    }
  ];

  const strategies = [
    {
      title: "Double and Add",
      description: "To multiply by 5, multiply by 10 and then divide by 2.",
      example: "7 × 5 = (7 × 10) ÷ 2 = 70 ÷ 2 = 35"
    },
    {
      title: "Use Known Facts",
      description: "If you know 2 × 5 = 10, you can find 4 × 5 by doubling 10.",
      example: "4 × 5 = double(2 × 5) = double(10) = 20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-cyan-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <h1 className="text-3xl font-bold text-center text-white mb-8">
              Ocean Explorer Multiplication - Tips & Tricks 🌊
            </h1>

            <div className="grid gap-6 md:grid-cols-2">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{tip.icon}</span>
                    <h3 className="text-xl font-bold text-white">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-cyan-100 mb-3">
                    {tip.description}
                  </p>
                  <div className="bg-blue-900/30 rounded-lg p-3 text-cyan-200">
                    Example: {tip.example}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-white/5 backdrop-blur-md rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Advanced Strategies</span> 🧠
              </h2>
              
              <div className="space-y-6">
                {strategies.map((strategy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-blue-900/30 rounded-lg p-4"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {strategy.title}
                    </h3>
                    <p className="text-cyan-100 mb-2">
                      {strategy.description}
                    </p>
                    <div className="text-cyan-200 font-mono bg-blue-900/40 rounded p-2">
                      {strategy.example}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Remember! 🌟
              </h2>
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-6">
                <p className="text-cyan-100 text-lg">
                  Each sea creature you discover represents a multiple of 5.
                  Follow the path from shallow to deep water, and you'll master
                  multiplication by 5!
                </p>
                <div className="mt-4 text-3xl">
                  🐠 → 🐋 → 🐢 → 🦈 → 🐙 → 🌊
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationOceanTips; 
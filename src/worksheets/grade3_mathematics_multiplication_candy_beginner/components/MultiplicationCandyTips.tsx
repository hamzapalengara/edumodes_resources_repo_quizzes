import React from 'react';
import { motion } from 'framer-motion';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const MultiplicationCandyTips: React.FC = () => {
  const tips = [
    {
      title: "Start with the Basics",
      description: "Remember that multiplication by 6 is like counting by 6s. Each step adds 6 to the previous number.",
      icon: "🔢",
      example: "6, 12, 18, 24, 30..."
    },
    {
      title: "Look for Patterns",
      description: "Numbers that are multiples of 6 always end in either 6 or 0.",
      icon: "🔍",
      example: "6 ends in 6, 30 ends in 0"
    },
    {
      title: "Use Skip Counting",
      description: "Practice counting by 6s to help you find the next number in the sequence.",
      icon: "⏭️",
      example: "Count: 6, 12, 18, 24..."
    },
    {
      title: "Visualize Packages",
      description: "Think of each multiple of 6 as a package of candies being prepared for shipping.",
      icon: "📦",
      example: "6 candies per package"
    }
  ];

  const strategies = [
    {
      title: "Double and Triple",
      description: "To multiply by 6, first multiply by 2, then multiply by 3.",
      example: "4 × 6 = (4 × 2) × 3 = 8 × 3 = 24"
    },
    {
      title: "Use Known Facts",
      description: "If you know 5 × 6 = 30, you can find 6 × 6 by adding one more group of 6.",
      example: "6 × 6 = (5 × 6) + 6 = 30 + 6 = 36"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 to-purple-600">
      <TipsHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Candy Factory Guide 🏭
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-pink-900/50 backdrop-blur-md p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{tip.icon}</span>
                  <h3 className="text-xl font-bold text-white">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-pink-100 mb-3">
                  {tip.description}
                </p>
                <div className="bg-purple-900/30 rounded-lg p-3 text-pink-200">
                  Example: {tip.example}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-purple-900/50 backdrop-blur-md rounded-lg p-6"
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
                  className="bg-pink-900/30 rounded-lg p-4"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-pink-100 mb-2">
                    {strategy.description}
                  </p>
                  <div className="text-pink-200 font-mono bg-purple-900/40 rounded p-2">
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
            <div className="bg-pink-900/50 backdrop-blur-md rounded-lg p-6">
              <p className="text-pink-100 text-lg">
                Each candy package represents a multiple of 6.
                Follow the path through the factory, and you'll master
                multiplication by 6!
              </p>
              <div className="mt-4 text-3xl">
                🍬 → 🍭 → 🍫 → 🧁 → 🍪 → 📦
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationCandyTips; 
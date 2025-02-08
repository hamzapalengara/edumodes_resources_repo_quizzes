import React from 'react';
import { motion } from 'framer-motion';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const MultiplicationTreasureTips: React.FC = () => {
  const tips = [
    {
      title: "Start with the Map",
      description: "Remember that multiplication by 9 is like following a treasure map. Each step adds 9 to the previous number.",
      icon: "🗺️",
      example: "9, 18, 27, 36, 45..."
    },
    {
      title: "Count Your Gems",
      description: "Each treasure chest contains exactly 9 gems. Count them carefully to find the right path!",
      icon: "💎",
      example: "1 chest = 9, 2 chests = 18"
    },
    {
      title: "Use Skip Counting",
      description: "Practice counting by 9s to help you find the next treasure on your map.",
      icon: "🏆",
      example: "Count: 9, 18, 27, 36..."
    },
    {
      title: "Follow the Trail",
      description: "Think of each multiple of 9 as a treasure marker leading you to greater riches.",
      icon: "✨",
      example: "9 gems per chest"
    }
  ];

  const strategies = [
    {
      title: "The Ten Times Trick",
      description: "To multiply by 9, multiply by 10 first, then subtract the original number.",
      example: "4 × 9 = (4 × 10) - 4 = 40 - 4 = 36"
    },
    {
      title: "Use Known Treasures",
      description: "If you know 5 × 9 = 45, you can find 6 × 9 by adding one more group of 9.",
      example: "6 × 9 = (5 × 9) + 9 = 45 + 9 = 54"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-yellow-900">
      <TipsHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Treasure Hunter's Guide 💎
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-emerald-900/50 backdrop-blur-md p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{tip.icon}</span>
                  <h3 className="text-xl font-bold text-white">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-emerald-100 mb-3">
                  {tip.description}
                </p>
                <div className="bg-yellow-900/30 rounded-lg p-3 text-emerald-200">
                  Example: {tip.example}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-yellow-900/50 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>Advanced Treasure Hunting</span> 🗝️
            </h2>
            
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-emerald-900/30 rounded-lg p-4"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-emerald-100 mb-2">
                    {strategy.description}
                  </p>
                  <div className="text-emerald-200 font-mono bg-yellow-900/40 rounded p-2">
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
            <div className="bg-emerald-900/50 backdrop-blur-md rounded-lg p-6">
              <p className="text-emerald-100 text-lg">
                Each treasure chest contains exactly 9 gems.
                Follow the treasure map carefully, and you'll master
                multiplication by 9 while discovering amazing treasures!
              </p>
              <div className="mt-4 text-3xl">
                💎 → 👑 → 💍 → 🏆 → 🔮 → ✨
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationTreasureTips; 
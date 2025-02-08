import React from 'react';
import { motion } from 'framer-motion';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const MultiplicationPotionTips: React.FC = () => {
  const tips = [
    {
      title: "Start with the Basics",
      description: "Remember that multiplication by 7 is like counting by 7s. Each step adds 7 to the previous number.",
      icon: "🔢",
      example: "7, 14, 21, 28, 35..."
    },
    {
      title: "Follow the Recipe",
      description: "Each magical ingredient represents a group of 7. Count them carefully to create the perfect potion!",
      icon: "⚗️",
      example: "1 group = 7, 2 groups = 14"
    },
    {
      title: "Use Skip Counting",
      description: "Practice counting by 7s to help you find the next ingredient in the sequence.",
      icon: "🧙‍♂️",
      example: "Count: 7, 14, 21, 28..."
    },
    {
      title: "Visualize the Magic",
      description: "Think of each multiple of 7 as a magical ingredient being added to your potion.",
      icon: "✨",
      example: "7 sparkles per ingredient"
    }
  ];

  const strategies = [
    {
      title: "Double and Add",
      description: "To multiply by 7, first multiply by 2, then by 3, and add the results together.",
      example: "4 × 7 = (4 × 2) + (4 × 5) = 8 + 20 = 28"
    },
    {
      title: "Use Known Facts",
      description: "If you know 5 × 7 = 35, you can find 6 × 7 by adding one more group of 7.",
      example: "6 × 7 = (5 × 7) + 7 = 35 + 7 = 42"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 to-indigo-900">
      <TipsHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Wizard's Guide to Potion Making 🧙‍♂️
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-indigo-900/50 backdrop-blur-md p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{tip.icon}</span>
                  <h3 className="text-xl font-bold text-white">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-indigo-100 mb-3">
                  {tip.description}
                </p>
                <div className="bg-purple-900/30 rounded-lg p-3 text-indigo-200">
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
              <span>Advanced Brewing Techniques</span> 🧪
            </h2>
            
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-indigo-900/30 rounded-lg p-4"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-indigo-100 mb-2">
                    {strategy.description}
                  </p>
                  <div className="text-indigo-200 font-mono bg-purple-900/40 rounded p-2">
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
            <div className="bg-indigo-900/50 backdrop-blur-md rounded-lg p-6">
              <p className="text-indigo-100 text-lg">
                Each magical ingredient represents a group of 7.
                Follow the recipe carefully, and you'll master
                multiplication by 7 while creating powerful potions!
              </p>
              <div className="mt-4 text-3xl">
                🌟 → 🌙 → 🔮 → ⚗️ → 🧪 → 📖
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationPotionTips; 
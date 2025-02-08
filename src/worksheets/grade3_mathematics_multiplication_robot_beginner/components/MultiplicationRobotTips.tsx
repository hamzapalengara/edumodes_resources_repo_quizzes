import React from 'react';
import { motion } from 'framer-motion';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const MultiplicationRobotTips: React.FC = () => {
  const tips = [
    {
      title: "Start with the Basics",
      description: "Remember that multiplication by 8 is like counting by 8s. Each step adds 8 to the previous number.",
      icon: "🔢",
      example: "8, 16, 24, 32, 40..."
    },
    {
      title: "Follow the Assembly Guide",
      description: "Each robot component represents a group of 8. Count them carefully to build the perfect robot!",
      icon: "🔧",
      example: "1 group = 8, 2 groups = 16"
    },
    {
      title: "Use Skip Counting",
      description: "Practice counting by 8s to help you find the next component in the sequence.",
      icon: "🤖",
      example: "Count: 8, 16, 24, 32..."
    },
    {
      title: "Visualize the Assembly",
      description: "Think of each multiple of 8 as a component being added to your robot.",
      icon: "⚡",
      example: "8 parts per component"
    }
  ];

  const strategies = [
    {
      title: "Double and Double Again",
      description: "To multiply by 8, double the number three times.",
      example: "3 × 8 = 3 × 2 = 6 × 2 = 12 × 2 = 24"
    },
    {
      title: "Use Known Facts",
      description: "If you know 5 × 8 = 40, you can find 6 × 8 by adding one more group of 8.",
      example: "6 × 8 = (5 × 8) + 8 = 40 + 8 = 48"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-pink-900">
      <TipsHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Robot Assembly Guide 🤖
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyan-900/50 backdrop-blur-md p-6 rounded-lg"
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
                <div className="bg-pink-900/30 rounded-lg p-3 text-cyan-200">
                  Example: {tip.example}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-pink-900/50 backdrop-blur-md rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>Advanced Assembly Techniques</span> ⚙️
            </h2>
            
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-cyan-900/30 rounded-lg p-4"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-cyan-100 mb-2">
                    {strategy.description}
                  </p>
                  <div className="text-cyan-200 font-mono bg-pink-900/40 rounded p-2">
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
            <div className="bg-cyan-900/50 backdrop-blur-md rounded-lg p-6">
              <p className="text-cyan-100 text-lg">
                Each robot component represents a group of 8.
                Follow the assembly sequence carefully, and you'll master
                multiplication by 8 while building an amazing robot!
              </p>
              <div className="mt-4 text-3xl">
                🔧 → ⚡ → 🔌 → 🔋 → 💾 → 🤖
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationRobotTips; 
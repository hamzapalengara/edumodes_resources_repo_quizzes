import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DIVISION_TIPS = [
  {
    title: "Count Your Sea Friends",
    icon: "🐠",
    description: "Always start by counting all the sea creatures you need to divide.",
    example: "If you see 6 fish 🐠🐠🐠🐠🐠🐠, count them all first!"
  },
  {
    title: "Make Equal Ocean Groups",
    icon: "🌊",
    description: "When dividing, each group must have the same number of sea creatures.",
    example: "If dividing 6 crabs into 2 groups, each group should have 3 crabs: 🦀🦀🦀 | 🦀🦀🦀"
  },
  {
    title: "One at a Time",
    icon: "👆",
    description: "Try putting one sea creature in each group at a time until all are used.",
    example: "For 4 ÷ 2: First round: 🐋|🐋, Second round: 🐋🐋|🐋🐋"
  },
  {
    title: "Check Your Groups",
    icon: "✅",
    description: "After making groups, count the sea creatures in each group to make sure they're equal.",
    example: "If you have 2 groups, count each group: Group 1: 1,2,3 | Group 2: 1,2,3"
  },
  {
    title: "Think About Sharing",
    icon: "🤝",
    description: "Division is like sharing sea creatures equally with friends.",
    example: "Sharing 6 turtles with 3 friends means each friend gets 2 turtles: 🐢🐢|🐢🐢|🐢🐢"
  }
];

const HELPFUL_REMINDERS = [
  "Take your time - swim slowly! 🐠",
  "If you make a mistake, you can always start over! 🔄",
  "Use your fingers to count like starfish! 🌟",
  "Ask for help if you need it - learning together is fun! 🤗",
  "Practice makes perfect - keep swimming! 🏊‍♂️"
];

const DivisionSeaTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <motion.h1
          className="text-2xl font-bold text-center text-cyan-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ocean Division Tips
        </motion.h1>

        {/* Main Tips */}
        <div className="space-y-4">
          {DIVISION_TIPS.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{tip.icon}</div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-cyan-600 mb-2">
                    {tip.title}
                  </h2>
                  <p className="text-cyan-700 mb-3">
                    {tip.description}
                  </p>
                  <div className="bg-cyan-50 p-3 rounded-lg">
                    <p className="text-cyan-600">
                      <span className="font-semibold">Example:</span> {tip.example}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Helpful Reminders */}
        <motion.div
          className="mt-8 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-bold text-cyan-600 mb-4">
            Ocean Reminders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HELPFUL_REMINDERS.map((reminder, index) => (
              <motion.div
                key={index}
                className="bg-cyan-50 p-3 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + (index * 0.1) }}
              >
                <p className="text-cyan-600 font-medium">
                  {reminder}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Practice Area */}
        <motion.div
          className="mt-8 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-xl font-bold text-cyan-600 mb-4">
            Try This! 🎯
          </h2>
          <div className="bg-cyan-50 p-4 rounded-lg">
            <p className="text-cyan-700 mb-3">
              Here's a simple practice problem:
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {"🐠🐠🐠🐠".split("").map((fish, i) => (
                <span key={i} className="text-2xl">{fish}</span>
              ))}
            </div>
            <p className="text-cyan-600 font-medium text-center">
              Can you divide these 4 fish into 2 equal groups?
            </p>
            <p className="text-cyan-500 text-center mt-2">
              (Try using your finger to move them into groups!)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DivisionSeaTips; 
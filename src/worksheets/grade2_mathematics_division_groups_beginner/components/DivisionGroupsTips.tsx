import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DIVISION_TIPS = [
  {
    title: "Count the Total First",
    icon: "🔢",
    description: "Always start by counting all the objects you need to divide.",
    example: "If you see 12 stars ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️, count them all first!"
  },
  {
    title: "Make Equal Groups",
    icon: "👥",
    description: "When dividing, each group must have the same number of objects.",
    example: "If dividing 15 flowers into 3 groups, each group should have 5 flowers: 🌸🌸🌸🌸🌸 | 🌸🌸🌸🌸🌸 | 🌸🌸🌸🌸🌸"
  },
  {
    title: "One at a Time",
    icon: "👆",
    description: "Try putting one object in each group at a time until all objects are used.",
    example: "For 6 ÷ 2: First round: 🍎|🍎, Second round: 🍎🍎|🍎🍎, Third round: 🍎🍎🍎|🍎🍎🍎"
  },
  {
    title: "Check Your Work",
    icon: "✅",
    description: "After making groups, count the objects in each group to make sure they're equal.",
    example: "If you have 3 groups, count each group: Group 1: 1,2,3,4 | Group 2: 1,2,3,4 | Group 3: 1,2,3,4"
  },
  {
    title: "Think About Sharing",
    icon: "🤝",
    description: "Division is like sharing things equally with friends.",
    example: "Sharing 8 cookies with 4 friends means each friend gets 2 cookies: 🍪🍪|🍪🍪|🍪🍪|🍪🍪"
  }
];

const HELPFUL_REMINDERS = [
  "Take your time - it's okay to count slowly! 🐢",
  "If you make a mistake, you can always start over! 🔄",
  "Use your fingers to keep track while counting! 👐",
  "Ask for help if you need it - learning together is fun! 🤗",
  "Practice makes perfect - keep trying! 💪"
];

const DivisionGroupsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <motion.h1
          className="text-2xl font-bold text-center text-indigo-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tips for Division by Grouping
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
                  <h2 className="text-xl font-bold text-indigo-600 mb-2">
                    {tip.title}
                  </h2>
                  <p className="text-indigo-700 mb-3">
                    {tip.description}
                  </p>
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <p className="text-indigo-600">
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
          <h2 className="text-xl font-bold text-indigo-600 mb-4">
            Helpful Reminders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HELPFUL_REMINDERS.map((reminder, index) => (
              <motion.div
                key={index}
                className="bg-indigo-50 p-3 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + (index * 0.1) }}
              >
                <p className="text-indigo-600 font-medium">
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
          <h2 className="text-xl font-bold text-indigo-600 mb-4">
            Try This! 🎯
          </h2>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-indigo-700 mb-3">
              Here's a simple practice problem:
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {"🍕🍕🍕🍕🍕🍕".split("").map((pizza, i) => (
                <span key={i} className="text-2xl">{pizza}</span>
              ))}
            </div>
            <p className="text-indigo-600 font-medium text-center">
              Can you divide these 6 pizzas into 2 equal groups?
            </p>
            <p className="text-indigo-500 text-center mt-2">
              (Try using your finger to move them into groups!)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DivisionGroupsTips; 
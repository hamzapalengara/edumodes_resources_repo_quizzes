import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DIVISION_TIPS = [
  {
    title: "Read the Story Carefully",
    icon: "📖",
    description: "Take time to understand what needs to be shared and with how many.",
    example: "If sharing 8 cookies with 4 friends, first identify: 8 total cookies, 4 friends"
  },
  {
    title: "Share One at a Time",
    icon: "👆",
    description: "Give one item to each person or group before starting the next round.",
    example: "For 6 balloons ÷ 2: First give one balloon each: 🎈|🎈, then another: 🎈🎈🎈|🎈🎈🎈"
  },
  {
    title: "Make Equal Groups",
    icon: "⚖️",
    description: "Everyone should get the same amount - that's fair sharing!",
    example: "When sharing 10 flowers in 5 pots: 🌸🌸|🌸🌸|🌸🌸|🌸🌸|🌸🌸"
  },
  {
    title: "Check Your Answer",
    icon: "✅",
    description: "Count each group to make sure they're equal.",
    example: "If each friend should get 2 cookies: Count 🍪🍪, 🍪🍪, 🍪🍪, 🍪🍪"
  },
  {
    title: "Think About Fairness",
    icon: "🤝",
    description: "Division is about sharing fairly with everyone.",
    example: "Like sharing 4 presents between 2 sisters: 🎁🎁|🎁🎁 - both get the same!"
  }
];

const HELPFUL_REMINDERS = [
  "Take your time to read each story! 📚",
  "If you make a mistake, you can always start over! 🔄",
  "Use your fingers to keep track while sharing! 👐",
  "Ask for help if you need it - we're here to help! 🤗",
  "Practice makes perfect - keep trying! 💪"
];

const DivisionStoryTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <motion.h1
          className="text-2xl font-bold text-center text-amber-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Division Story Problem Tips
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
                  <h2 className="text-xl font-bold text-amber-600 mb-2">
                    {tip.title}
                  </h2>
                  <p className="text-amber-700 mb-3">
                    {tip.description}
                  </p>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <p className="text-amber-600">
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
          <h2 className="text-xl font-bold text-amber-600 mb-4">
            Helpful Reminders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HELPFUL_REMINDERS.map((reminder, index) => (
              <motion.div
                key={index}
                className="bg-amber-50 p-3 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + (index * 0.1) }}
              >
                <p className="text-amber-600 font-medium">
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
          <h2 className="text-xl font-bold text-amber-600 mb-4">
            Try This! 🎯
          </h2>
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-amber-700 mb-3">
              Here's a simple practice problem:
            </p>
            <div className="text-center mb-4">
              <p className="text-lg font-medium text-amber-700">
                You have 6 cookies to share with 2 friends.
              </p>
              <div className="flex flex-wrap gap-2 justify-center my-4">
                {"🍪🍪🍪🍪🍪🍪".split("").map((cookie, i) => (
                  <span key={i} className="text-2xl">{cookie}</span>
                ))}
              </div>
              <p className="text-amber-600 font-medium">
                How many cookies will each friend get?
              </p>
            </div>
            <p className="text-amber-500 text-center mt-2">
              (Try solving this before moving on to the worksheet!)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DivisionStoryTips; 
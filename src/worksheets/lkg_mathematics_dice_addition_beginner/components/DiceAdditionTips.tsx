import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DiceAdditionTips: React.FC = () => {
  const tips = [
    {
      title: "Count First Dice",
      content: "Start by counting all dots on the first dice carefully, one by one.",
      icon: "1️⃣"
    },
    {
      title: "Count Second Dice",
      content: "Next, count all dots on the second dice, one by one.",
      icon: "2️⃣"
    },
    {
      title: "Add Together",
      content: "Add the number from the first dice to the number from the second dice.",
      icon: "➕"
    },
    {
      title: "Use Your Fingers",
      content: "Hold up fingers for the first number, then add more fingers for the second number.",
      icon: "✋"
    },
    {
      title: "Count Out Loud",
      content: "Say each number out loud as you count to help remember the total.",
      icon: "🗣️"
    },
    {
      title: "Double Check",
      content: "Count one more time to make sure your answer is correct.",
      icon: "✅"
    }
  ];

  const strategies = [
    "Start with the bigger number, then add the smaller number",
    "Use dots pattern recognition to count faster",
    "Practice counting up from any number",
    "Remember common sums like 3+3=6"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-rose-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Tips for Adding Dice Numbers
          </h2>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex items-start gap-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl">{tip.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
                <p className="text-white/90">{tip.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Strategies */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4 text-white">
          <h3 className="text-xl font-bold mb-2 text-center">Quick Addition Strategies</h3>
          <ul className="list-disc pl-6 space-y-2">
            {strategies.map((strategy, index) => (
              <li key={index}>{strategy}</li>
            ))}
          </ul>
        </div>

        {/* Example Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4 text-white">
          <h3 className="text-xl font-bold mb-2 text-center">Example: Adding 4 + 3</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>First, count dots on the first dice: "1, 2, 3, 4"</li>
            <li>Then, count dots on the second dice: "1, 2, 3"</li>
            <li>Now, start from 4 and count up 3 more: "4... 5, 6, 7"</li>
            <li>The answer is 7!</li>
          </ol>
        </div>

        {/* Note for Teachers and Parents */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4 text-white">
          <h3 className="text-xl font-bold mb-2 text-center">Note for Teachers and Parents</h3>
          <p className="text-white/90">
            This worksheet helps develop addition skills through visual counting and number recognition.
            Encourage students to use different strategies and praise their effort in finding the correct sums.
            If a student struggles, guide them to count out loud and use their fingers to keep track of numbers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiceAdditionTips; 
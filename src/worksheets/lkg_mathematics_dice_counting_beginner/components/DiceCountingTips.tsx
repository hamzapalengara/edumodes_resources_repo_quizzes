import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DiceCountingTips: React.FC = () => {
  const tips = [
    {
      title: "Count One by One",
      content: "Touch each dot on the dice as you count them, moving from left to right and top to bottom.",
      icon: "👆"
    },
    {
      title: "Say Numbers Out Loud",
      content: "Count each dot out loud to help remember the total number of dots.",
      icon: "🗣️"
    },
    {
      title: "Recognize Patterns",
      content: "Learn to recognize common dice patterns without counting every dot.",
      icon: "👀"
    },
    {
      title: "Use Your Finger",
      content: "Point to each dot with your finger to keep track of what you've counted.",
      icon: "✋"
    },
    {
      title: "Double Check",
      content: "Count the dots twice to make sure you have the right number.",
      icon: "✅"
    },
    {
      title: "Practice Writing",
      content: "Practice writing the numbers 1-6 clearly and neatly.",
      icon: "✏️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Tips for Counting Dice Dots
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

        {/* Reminder Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4 text-white">
          <h3 className="text-xl font-bold mb-2 text-center">Remember</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Take your time - counting accuracy is more important than speed</li>
            <li>Point to each dot as you count to avoid counting the same dot twice</li>
            <li>Say the numbers out loud while counting</li>
            <li>Double-check your answer before writing it down</li>
          </ul>
        </div>

        {/* Teacher/Parent Note */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4 text-white">
          <h3 className="text-xl font-bold mb-2 text-center">Note for Teachers and Parents</h3>
          <p className="text-white/90">
            This worksheet helps develop one-to-one correspondence, number recognition, and counting skills.
            Encourage students to use their fingers to point to each dot while counting to reinforce accurate counting habits.
            Celebrate their successes and provide gentle guidance when needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiceCountingTips; 
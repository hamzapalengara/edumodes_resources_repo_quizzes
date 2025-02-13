import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ClockTimeTips: React.FC = () => {
  const tips = [
    {
      title: "Start with the Hour Hand",
      content: "Look at the short hand first. It points to the current hour. If it's between two numbers, use the smaller number.",
      icon: "🕐"
    },
    {
      title: "Check the Minute Hand",
      content: "The long hand shows the minutes. When it points to 12, it's o'clock. When it points to 6, it's thirty minutes.",
      icon: "🕒"
    },
    {
      title: "Learn Special Positions",
      content: "Remember: 12 = o'clock, 3 = fifteen, 6 = thirty, 9 = forty-five minutes.",
      icon: "🎯"
    },
    {
      title: "Practice Counting by 5s",
      content: "Each number represents 5 minutes when reading the minute hand. Count: 5, 10, 15, 20, 25, 30...",
      icon: "🔢"
    },
    {
      title: "Use Memory Tricks",
      content: "Think of the clock like a face: 12 is the top, 6 is the bottom, 3 is the right ear, 9 is the left ear.",
      icon: "🧠"
    },
    {
      title: "Check Your Answer",
      content: "After choosing your answer, double-check both hands to make sure you read the time correctly.",
      icon: "✅"
    }
  ];

  const commonTimes = [
    { time: "O'clock", description: "Minute hand on 12" },
    { time: "Half past", description: "Minute hand on 6" },
    { time: "Quarter past", description: "Minute hand on 3" },
    { time: "Quarter to", description: "Minute hand on 9" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-white text-center">
            Tips for Reading Clock Time
          </h1>
        </div>

        {/* Main Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{tip.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-white/90">
                    {tip.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Common Times Reference */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Common Times to Remember
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {commonTimes.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/30 rounded-lg p-3 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                <h3 className="font-bold text-white mb-2">{item.time}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Practice Tips */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Practice Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Daily Practice</h3>
              <ul className="text-white/90 list-disc list-inside space-y-1">
                <li>Look at real clocks throughout the day</li>
                <li>Say the time out loud when you check</li>
                <li>Notice patterns in daily routines</li>
                <li>Draw clock faces and practice</li>
              </ul>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Fun Games</h3>
              <ul className="text-white/90 list-disc list-inside space-y-1">
                <li>Race to tell the time</li>
                <li>Make a paper clock to practice</li>
                <li>Play "What time is it?"</li>
                <li>Set alarms and predict the time</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Remember Box */}
        <motion.div
          className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-xl font-bold text-white mb-2">Remember!</h2>
          <p className="text-white/90">
            Take your time, practice regularly, and don't be afraid to make mistakes.
            Learning to read a clock is an important life skill that gets easier with practice!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ClockTimeTips; 
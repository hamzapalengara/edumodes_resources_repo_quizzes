import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const FruitLettersTips: React.FC = () => {
  const tips = [
    {
      title: "Listen and Learn",
      icon: "👂",
      description: "Click on each fruit to hear its name. Pay attention to the first sound you hear.",
      example: "When you hear 'Apple', notice it starts with the 'A' sound.",
    },
    {
      title: "Look and Remember",
      icon: "👀",
      description: "Look at the fruit emoji and try to remember its first letter.",
      example: "🍌 Banana starts with 'B'",
    },
    {
      title: "Type the Letter",
      icon: "⌨️",
      description: "Type the first letter you hear in the fruit's name.",
      example: "For Cherry 🍒, type 'C'",
    },
    {
      title: "Practice Makes Perfect",
      icon: "🎯",
      description: "If you make a mistake, listen to the fruit name again and try once more.",
      example: "Keep practicing until you can match all fruits with their letters!",
    },
    {
      title: "Find More Examples",
      icon: "🔍",
      description: "Think of other fruits that start with the same letter.",
      example: "Pear 🍐 and Pineapple both start with 'P'",
    },
    {
      title: "Make it Fun",
      icon: "🎮",
      description: "Turn it into a game! See how quickly you can match all the letters correctly.",
      example: "Challenge yourself to complete the worksheet faster each time.",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-white text-center">
            Tips for Learning Fruit Letters
          </h1>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="bg-white/40 backdrop-blur-md rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Tip Header */}
              <div className="flex items-center mb-3">
                <span className="text-4xl mr-3">{tip.icon}</span>
                <h2 className="text-xl font-bold text-white">{tip.title}</h2>
              </div>

              {/* Tip Content */}
              <div className="space-y-2">
                <p className="text-white text-lg">
                  {tip.description}
                </p>
                <div className="bg-white/30 rounded-lg p-3 mt-2">
                  <p className="text-white">
                    <span className="font-bold">Example:</span> {tip.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-xl font-bold text-white text-center mb-3">
            Remember! 🌟
          </h2>
          <ul className="space-y-2 text-white text-lg">
            <li className="flex items-center">
              <span className="mr-2">🎵</span>
              Learning letters can be fun with fruits!
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Practice regularly to improve your skills
            </li>
            <li className="flex items-center">
              <span className="mr-2">🏆</span>
              Celebrate your progress as you learn each letter
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FruitLettersTips; 
import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberLettersTips: React.FC = () => {
  const tips = [
    {
      title: "Start with Easy Numbers",
      content: "Begin with numbers students know well like One and Two. These are often easier to remember.",
      icon: "🎯"
    },
    {
      title: "Use Word Associations",
      content: "Connect number words to things that start with the same letter: One like Ocean, Two like Tree.",
      icon: "👀"
    },
    {
      title: "Sound It Out",
      content: "Emphasize the first sound of each number word. For example, 'O-o-one', 'T-t-two'.",
      icon: "🗣️"
    },
    {
      title: "Interactive Learning",
      content: "Touch each number to hear its name and a helpful word that starts with the same letter.",
      icon: "👆"
    },
    {
      title: "Practice Writing",
      content: "After typing the letter, try writing both the number and its first letter on paper.",
      icon: "✏️"
    },
    {
      title: "Count and Learn",
      content: "Count objects while saying the number words, paying attention to their first letters.",
      icon: "🔢"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Tips for Learning Number Letters
          </h2>
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
              <div className="flex items-start space-x-4">
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

        {/* Additional Notes */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-center">
            Remember
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Take breaks between practice sessions</li>
            <li>Celebrate each correct answer</li>
            <li>Make learning fun with counting games</li>
            <li>Review regularly to reinforce learning</li>
          </ul>
        </div>

        {/* For Teachers/Parents */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-center">
            For Teachers and Parents
          </h3>
          <p className="text-center">
            This worksheet helps develop letter recognition, number awareness, and phonemic understanding.
            Encourage students to say the number word and its first letter sound together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumberLettersTips; 
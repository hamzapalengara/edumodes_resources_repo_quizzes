import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ColorLettersTips: React.FC = () => {
  const tips = [
    {
      title: "Start with Familiar Colors",
      content: "Begin with colors students see every day like Red and Blue. These are often easier to remember.",
      icon: "🎯"
    },
    {
      title: "Use Visual Associations",
      content: "Connect colors to common objects: Red like a rose, Blue like the sky, Green like grass.",
      icon: "👀"
    },
    {
      title: "Sound It Out",
      content: "Emphasize the first sound of each color name. For example, 'R-r-red', 'B-b-blue'.",
      icon: "🗣️"
    },
    {
      title: "Interactive Learning",
      content: "Touch each color box to hear its name and a helpful association. This helps with memory.",
      icon: "👆"
    },
    {
      title: "Practice Writing",
      content: "After typing the letter, try writing it on paper. This reinforces the learning.",
      icon: "✏️"
    },
    {
      title: "Look for Colors Around You",
      content: "Point out colors in the environment and practice saying their first letters.",
      icon: "🌈"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white text-center">
            Tips for Learning Color Letters
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
            <li>Make learning fun with color games</li>
            <li>Review regularly to reinforce learning</li>
          </ul>
        </div>

        {/* For Teachers/Parents */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-center">
            For Teachers and Parents
          </h3>
          <p className="text-center">
            This worksheet helps develop letter recognition, color awareness, and phonemic understanding.
            Encourage students to say the color name and its first letter sound together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorLettersTips; 
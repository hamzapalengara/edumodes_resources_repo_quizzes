import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/TipsHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface TipSection {
  title: string;
  emoji: string;
  tips: string[];
}

const LEARNING_TIPS: TipSection[] = [
  {
    title: "Picture Power",
    emoji: "🖼️",
    tips: [
      "Point to the picture and say the word clearly",
      "Make a simple sentence using the word",
      "Draw your own picture of the word",
      "Find similar pictures in books or magazines"
    ]
  },
  {
    title: "Word Play",
    emoji: "🎯",
    tips: [
      "Clap while saying each word",
      "Break longer words into smaller parts",
      "Practice writing the word in the air",
      "Make up a silly song with the word"
    ]
  },
  {
    title: "Memory Magic",
    emoji: "✨",
    tips: [
      "Create a story about the picture",
      "Connect the word to something you know",
      "Play memory matching games",
      "Review words before bedtime"
    ]
  },
  {
    title: "Fun Activities",
    emoji: "🎨",
    tips: [
      "Create a picture dictionary",
      "Play 'I Spy' with the words",
      "Act out the words when possible",
      "Make word-picture flashcards"
    ]
  }
];

const PARENT_TIPS = [
  "Set aside regular practice time each day",
  "Make learning fun and engaging",
  "Celebrate small achievements",
  "Use words in everyday conversations",
  "Be patient and encouraging",
  "Create a positive learning environment"
];

const PictureWordTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-orange-700 text-center mb-8">
              Tips for Picture Word Learning
            </h1>

            {/* Learning Tips Sections */}
            <div className="grid gap-6">
              {LEARNING_TIPS.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-orange-50 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{section.emoji}</span>
                    <h2 className="text-xl font-bold text-orange-800">{section.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip, tipIndex) => (
                      <motion.li
                        key={tipIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + tipIndex * 0.1 }}
                        className="flex items-start gap-2 text-orange-700"
                      >
                        <span className="text-orange-500 mt-1">•</span>
                        {tip}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Parent Tips Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-yellow-50 rounded-lg"
            >
              <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                <span>👨‍👩‍👧‍👦</span> Tips for Parents and Teachers
              </h2>
              <ul className="space-y-3">
                {PARENT_TIPS.map((tip, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-2 text-orange-700"
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-8 p-4 bg-orange-100 rounded-lg text-center"
            >
              <h3 className="font-bold text-orange-800 mb-2">Remember!</h3>
              <p className="text-orange-700">
                Learning should be fun and engaging. Take breaks when needed and celebrate every success! 🌟
              </p>
            </motion.div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default PictureWordTips; 
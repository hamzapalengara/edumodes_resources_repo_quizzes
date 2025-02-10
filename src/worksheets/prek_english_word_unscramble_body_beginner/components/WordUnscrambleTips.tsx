import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LEARNING_TIPS = [
  {
    title: 'Look at the Picture! 👀',
    description: 'Each word comes with a fun emoji. Use it as a clue to guess the body part!',
    example: 'When you see 👄, think about parts of your face used for talking and eating.'
  },
  {
    title: 'Say it Out Loud! 🗣️',
    description: 'Speaking the letters and words helps you remember them better.',
    example: 'Try saying "H-A-N-D" while looking at your own hand!'
  },
  {
    title: 'Use the Hints! 💡',
    description: 'Read the hint carefully - it tells you what the body part does.',
    example: 'If the hint says "You use this to walk", think about your legs!'
  }
];

const MOVEMENT_ACTIVITIES = [
  {
    title: 'Simon Says',
    emoji: '🎮',
    description: 'Play "Simon Says" using the body parts you\'re learning:',
    steps: [
      'Simon says touch your NOSE',
      'Simon says wiggle your HANDS',
      'Simon says point to your EARS'
    ]
  },
  {
    title: 'Body Part Dance',
    emoji: '💃',
    description: 'Make up a fun dance using different body parts:',
    steps: [
      'Wave your ARMS up high',
      'Tap your FEET on the ground',
      'Nod your HEAD to the beat'
    ]
  },
  {
    title: 'Mirror Game',
    emoji: '🪞',
    description: 'Play with a friend and copy each other\'s movements:',
    steps: [
      'Touch your EYES (carefully!)',
      'Open and close your MOUTH',
      'Wiggle your LEGS'
    ]
  }
];

const FUN_FACTS = [
  {
    fact: 'Your body has over 600 muscles!',
    emoji: '💪'
  },
  {
    fact: 'Your brain is about the size of two fists put together!',
    emoji: '🧠'
  },
  {
    fact: 'You have about 20 baby teeth and 32 adult teeth!',
    emoji: '🦷'
  },
  {
    fact: 'Your heart beats about 100,000 times every day!',
    emoji: '❤️'
  }
];

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 py-4 shadow-md mb-6 border-y-2 border-pink-200">
          <h1 className="text-3xl font-bold text-center text-pink-600">
            Fun Tips for Learning Body Parts! 🌟
          </h1>
        </div>

        <div className="space-y-8 px-4">
          {/* Learning Tips Section */}
          <motion.div 
            className="bg-white shadow-md py-6 border-y-2 border-pink-200 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Smart Learning Tips 📚
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              {LEARNING_TIPS.map((tip, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="font-bold text-lg text-pink-600 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {tip.description}
                  </p>
                  <p className="text-purple-600 italic text-sm">
                    Try this: {tip.example}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Activities Section */}
          <motion.div 
            className="bg-white shadow-md py-6 border-y-2 border-pink-200 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Fun Movement Activities 🎯
            </h2>
            
            <div className="space-y-6 px-4">
              {MOVEMENT_ACTIVITIES.map((activity, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">{activity.emoji}</span>
                    <h3 className="font-bold text-lg text-yellow-600">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {activity.description}
                  </p>
                  <ul className="list-disc list-inside text-purple-600 space-y-1">
                    {activity.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div 
            className="bg-white shadow-md py-6 border-y-2 border-pink-200 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Amazing Body Facts! ✨
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
              {FUN_FACTS.map((fact, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{fact.emoji}</span>
                    <p className="text-purple-600 font-medium">
                      {fact.fact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Parent Tips Section */}
          <motion.div 
            className="bg-white shadow-md py-6 border-y-2 border-pink-200 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Tips for Parents and Teachers 👨‍🏫
            </h2>
            
            <div className="space-y-4 px-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-pink-600 mb-2">
                  Make it Interactive
                </h3>
                <p className="text-gray-600">
                  Use real-world connections! When teaching body parts, have children point to their own body parts or look in a mirror.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-yellow-600 mb-2">
                  Positive Reinforcement
                </h3>
                <p className="text-gray-600">
                  Celebrate every success! When children unscramble a word correctly, have them demonstrate what that body part can do.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-purple-600 mb-2">
                  Extended Learning
                </h3>
                <p className="text-gray-600">
                  After the game, try drawing and labeling a body together, or create simple songs about different body parts and their functions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleTips; 
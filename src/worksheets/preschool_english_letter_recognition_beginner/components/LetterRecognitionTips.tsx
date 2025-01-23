import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LetterRecognitionTips: React.FC = () => {
  const tips = [
    {
      title: "Sing the ABC Song",
      description: "Sing along with the alphabet song and stop at each empty space. The missing letter is the one you're singing!",
      icon: "🎵",
      color: "from-pink-50 to-purple-50"
    },
    {
      title: "Look for Patterns",
      description: "Letters follow a special order, like stepping stones in a magical garden. Look at what comes before and after!",
      icon: "🌈",
      color: "from-blue-50 to-green-50"
    },
    {
      title: "Make it Fun",
      description: "Pretend you're on a letter treasure hunt! Each missing letter is a hidden gem waiting to be discovered.",
      icon: "💎",
      color: "from-yellow-50 to-orange-50"
    },
    {
      title: "Take Your Time",
      description: "Like a careful artist, take your time to think about each letter. Every correct answer is worth celebrating!",
      icon: "🎨",
      color: "from-purple-50 to-pink-50"
    }
  ];

  const funFacts = [
    {
      fact: "Did you know? The alphabet is like a special code that helps us read and write!",
      icon: "🔍"
    },
    {
      fact: "Letters are like building blocks - we use them to make words and tell stories!",
      icon: "📚"
    },
    {
      fact: "Each letter has its own special sound, like musical notes in a song!",
      icon: "🎼"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-8">
            Let's Make Learning Letters Fun! 🎪
          </h1>

          {/* Quick Tips Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                className={`rounded-xl p-6 bg-gradient-to-r ${tip.color}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.span 
                    className="text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {tip.icon}
                  </motion.span>
                  <div>
                    <h3 className="text-lg font-bold text-purple-800 mb-2">{tip.title}</h3>
                    <p className="text-purple-600">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun Facts Section */}
          <div className="mt-8 bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-purple-800 mb-6 text-center flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
              Fun Letter Facts
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </h2>
            
            <div className="space-y-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-white/80 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.span 
                    className="text-3xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {fact.icon}
                  </motion.span>
                  <p className="text-purple-700">{fact.fact}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Encouragement Message */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-8 py-4">
              <p className="text-lg text-purple-800 font-medium flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🌟
                </motion.span>
                Remember: Every letter you learn is a new adventure!
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🎈
                </motion.span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LetterRecognitionTips; 
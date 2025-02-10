import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ANSWERS = [
  {
    level: 1,
    title: 'Basic Body Parts',
    description: 'Let\'s start with simple body parts we use every day!',
    words: [
      { word: 'ARM', emoji: '💪', scrambled: 'RAM', hint: 'You use this to lift things', funFact: 'Your arms have over 30 muscles!' },
      { word: 'LEG', emoji: '🦵', scrambled: 'GLE', hint: 'You use this to walk and run', funFact: 'Your legs are the strongest parts of your body!' },
      { word: 'EYE', emoji: '👁️', scrambled: 'YEE', hint: 'You see with these', funFact: 'Your eyes blink about 15-20 times every minute!' }
    ]
  },
  {
    level: 2,
    title: 'Moving Parts',
    description: 'These body parts help us move and do things!',
    words: [
      { word: 'HAND', emoji: '🤚', scrambled: 'HADN', hint: 'You use this to grab things', funFact: 'Each hand has 27 bones!' },
      { word: 'FOOT', emoji: '🦶', scrambled: 'OTOF', hint: 'You wear shoes on these', funFact: 'Your feet have 26 bones each!' },
      { word: 'HEAD', emoji: '👤', scrambled: 'DAHE', hint: 'Where your brain lives', funFact: 'Your brain is the size of two fists put together!' }
    ]
  },
  {
    level: 3,
    title: 'Face Parts',
    description: 'These parts help us sense the world around us!',
    words: [
      { word: 'MOUTH', emoji: '👄', scrambled: 'UHTMO', hint: 'You eat and talk with this', funFact: 'Your tongue has about 10,000 taste buds!' },
      { word: 'TEETH', emoji: '🦷', scrambled: 'EEHTT', hint: 'You chew with these', funFact: 'Adults have 32 teeth!' },
      { word: 'NOSE', emoji: '👃', scrambled: 'EONS', hint: 'You smell with this', funFact: 'You can smell over 1 trillion different scents!' },
      { word: 'EARS', emoji: '👂', scrambled: 'RASE', hint: 'You hear with these', funFact: 'Your ears never stop growing!' }
    ]
  }
];

const WordUnscrambleAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 py-4 shadow-md mb-6 border-y-2 border-pink-200">
          <h1 className="text-3xl font-bold text-center text-pink-600">
            Body Parts Word Fun - Answer Key 🎯
          </h1>
        </div>

        <div className="space-y-8 px-4">
          {ANSWERS.map((level) => (
            <div key={level.level} className="bg-white shadow-md py-6 border-y-2 border-pink-200 rounded-2xl">
              <h2 className="text-2xl font-bold text-center text-pink-600 mb-2">
                Level {level.level}: {level.title}
              </h2>
              <p className="text-center text-purple-500 mb-6 italic">
                {level.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {level.words.map((word, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <motion.span 
                        className="text-4xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {word.emoji}
                      </motion.span>
                      <div className="text-pink-600 font-bold">
                        Word #{index + 1}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-white bg-opacity-50 p-2 rounded-lg">
                        <span className="font-semibold text-purple-600">Scrambled:</span>
                        <span className="ml-2 font-mono text-lg">{word.scrambled}</span>
                      </div>
                      <div className="bg-white bg-opacity-50 p-2 rounded-lg">
                        <span className="font-semibold text-purple-600">Answer:</span>
                        <span className="ml-2 font-mono text-lg text-green-600 font-bold">{word.word}</span>
                      </div>
                      <div className="bg-white bg-opacity-50 p-2 rounded-lg">
                        <span className="font-semibold text-purple-600">Hint:</span>
                        <span className="ml-2 italic">{word.hint}</span>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded-lg">
                        <span className="font-semibold text-yellow-600">Fun Fact:</span>
                        <span className="ml-2 text-yellow-700">{word.funFact}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-white shadow-md py-6 border-y-2 border-pink-200 rounded-2xl mx-4">
          <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
            Helpful Tips for Parents and Teachers 📚
          </h2>
          <div className="space-y-4 px-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-pink-600 mb-2">
                Learning Strategy
              </h3>
              <p className="text-gray-600">
                Help children connect each body part with its function. For example, when learning "ARM", have them do different arm movements!
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-yellow-600 mb-2">
                Making it Fun
              </h3>
              <p className="text-gray-600">
                Turn it into a game! Have children point to each body part as they unscramble the word. This helps reinforce learning through movement.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-purple-600 mb-2">
                Extension Activities
              </h3>
              <p className="text-gray-600">
                After completing the worksheet, ask children to draw a person and label the body parts they've learned. This helps reinforce spelling and vocabulary!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleAnswerKey; 
import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LEVELS = [
  {
    level: 1,
    title: "School Items",
    description: "Common objects you use at school",
    words: [
      { word: 'BOOK', emoji: '📚', scrambled: 'OKBO', hint: 'We read stories in this', funFact: 'The first books were written on clay tablets!' },
      { word: 'DESK', emoji: '🪑', scrambled: 'EKSD', hint: 'You sit and work at this', funFact: 'School desks were first used over 130 years ago!' },
      { word: 'PEN', emoji: '✏️', scrambled: 'NEP', hint: 'You write with this', funFact: 'The first pens were made from bird feathers!' }
    ]
  },
  {
    level: 2,
    title: "Home Objects",
    description: "Things you see around your house",
    words: [
      { word: 'LAMP', emoji: '💡', scrambled: 'APLM', hint: 'Gives us light at home', funFact: 'The first lamp was invented over 70,000 years ago!' },
      { word: 'DOOR', emoji: '🚪', scrambled: 'ODRO', hint: 'You walk through this', funFact: 'The tallest door in the world is 495 feet high!' },
      { word: 'CLOCK', emoji: '⏰', scrambled: 'KOLCC', hint: 'Tells us the time', funFact: 'The first alarm clock could only ring at 4 AM!' }
    ]
  },
  {
    level: 3,
    title: "Daily Activities",
    description: "Actions you do every day",
    words: [
      { word: 'PLAY', emoji: '🎮', scrambled: 'YALP', hint: 'Having fun with toys or games', funFact: 'Playing helps your brain grow stronger!' },
      { word: 'WASH', emoji: '🚿', scrambled: 'HSWA', hint: 'Getting clean with water', funFact: 'We use about 17 gallons of water in a shower!' },
      { word: 'READ', emoji: '📖', scrambled: 'DERA', hint: 'Looking at words in a book', funFact: 'Reading makes you smarter every day!' },
      { word: 'DRAW', emoji: '🎨', scrambled: 'WADR', hint: 'Making pictures with colors', funFact: 'The first crayons were made in 1903!' }
    ]
  }
];

const WordUnscrambleAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto overflow-hidden">
          <div className="p-4">
            <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
              Everyday Words - Answer Key 📝
            </h1>

            <div className="space-y-8">
              {LEVELS.map((level, levelIndex) => (
                <motion.div
                  key={levelIndex}
                  className="bg-purple-50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: levelIndex * 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-purple-600 mb-2">
                    Level {level.level}: {level.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{level.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {level.words.map((word, wordIndex) => (
                      <div
                        key={wordIndex}
                        className="bg-white rounded-lg p-4 shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">{word.emoji}</span>
                          <span className="text-xl font-bold text-purple-600">
                            {word.word}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <p>
                            <span className="font-semibold">Scrambled:</span>{' '}
                            <span className="font-mono">{word.scrambled}</span>
                          </p>
                          <p>
                            <span className="font-semibold">Hint:</span>{' '}
                            {word.hint}
                          </p>
                          <p className="text-purple-600">
                            <span className="font-semibold">Fun Fact:</span>{' '}
                            {word.funFact}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Tips */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Tips for Parents and Teachers
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="font-bold text-blue-600 mb-2">
                    Vocabulary Building
                  </h3>
                  <p>
                    Use these words in daily conversations to help reinforce learning.
                    Point out these objects and actions during the day.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="font-bold text-blue-600 mb-2">
                    Reading Practice
                  </h3>
                  <p>
                    Encourage children to read these words in books and signs.
                    Help them connect the written words with real objects.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="font-bold text-blue-600 mb-2">
                    Writing Activities
                  </h3>
                  <p>
                    Have children practice writing these words in their own sentences.
                    Create simple stories using these everyday words.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleAnswerKey; 
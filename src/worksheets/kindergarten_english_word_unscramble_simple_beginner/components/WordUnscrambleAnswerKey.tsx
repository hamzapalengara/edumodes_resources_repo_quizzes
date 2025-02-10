import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LEVELS = [
  {
    title: "Easy Veggies",
    description: "Simple and common vegetables",
    words: [
      { word: 'BEAN', emoji: '🫛', scrambled: 'EANB', hint: 'Green pods with seeds', funFact: 'Beans are full of protein!' },
      { word: 'CORN', emoji: '🌽', scrambled: 'NOCR', hint: 'Yellow kernels on a cob', funFact: 'Each ear has 800 kernels!' },
      { word: 'PEAS', emoji: '🫛', scrambled: 'ASPE', hint: 'Small round green veggies', funFact: 'One of the oldest crops!' }
    ]
  },
  {
    title: "Common Veggies",
    description: "Everyday vegetables",
    words: [
      { word: 'KALE', emoji: '🥬', scrambled: 'ELKA', hint: 'Curly green leaves', funFact: 'Super healthy green!' },
      { word: 'GARLIC', emoji: '🧄', scrambled: 'LICGAR', hint: 'Strong smelling bulb', funFact: 'Used as medicine for ages!' },
      { word: 'GINGER', emoji: '🫚', scrambled: 'GERING', hint: 'Spicy root', funFact: 'Helps upset stomachs!' }
    ]
  },
  {
    title: "More Veggies",
    description: "Longer vegetable names",
    words: [
      { word: 'CARROT', emoji: '🥕', scrambled: 'RTACRO', hint: 'Orange and long', funFact: 'Helps night vision!' },
      { word: 'CABBAGE', emoji: '🥬', scrambled: 'BEGCAB', hint: 'Round leafy head', funFact: 'Very ancient vegetable!' },
      { word: 'SPINACH', emoji: '🥬', scrambled: 'CHSPINA', hint: 'Dark green leaves', funFact: 'Makes you strong!' },
      { word: 'PUMPKIN', emoji: '🎃', scrambled: 'KINPUMP', hint: 'Halloween vegetable', funFact: 'Can grow huge!' }
    ]
  }
];

const WordUnscrambleAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <WorksheetHeader />
      <div className="p-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h1 className="text-2xl font-bold text-center mb-8 text-green-600">
            Vegetable Word Unscramble - Answer Key 🥕
          </h1>

          {LEVELS.map((level, index) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold mb-2 text-green-700">
                {level.title}
              </h2>
              <p className="text-gray-600 mb-4">{level.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {level.words.map(word => (
                  <div key={word.word} className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{word.emoji}</span>
                      <span className="font-bold text-green-800">{word.word}</span>
                    </div>
                    <p className="text-sm text-gray-600">Scrambled: {word.scrambled}</p>
                    <p className="text-sm text-gray-600">Hint: {word.hint}</p>
                    <p className="text-sm text-green-600 mt-2">Fun Fact: {word.funFact}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-green-700 mb-4">Tips for Parents and Teachers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Help children learn about different vegetables while building vocabulary</li>
              <li>• Use the fun facts to make learning more engaging and memorable</li>
              <li>• Encourage children to draw the vegetables they learn about</li>
              <li>• Practice writing the words after unscrambling them</li>
              <li>• Create simple sentences using the vegetable words</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WordUnscrambleAnswerKey; 
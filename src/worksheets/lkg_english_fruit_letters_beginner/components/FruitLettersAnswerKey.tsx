import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import dragonFruitImage from '../assets/dragon-fruit.png';

// Fruit data with name, image emoji/src, and correct first letter
const FRUITS = [
  { name: 'APPLE', emoji: '🍎', letter: 'A', sound: 'crunchy apple' },
  { name: 'BANANA', emoji: '🍌', letter: 'B', sound: 'sweet banana' },
  { name: 'CHERRY', emoji: '🍒', letter: 'C', sound: 'juicy cherry' },
  { name: 'DRAGON FRUIT', image: dragonFruitImage, letter: 'D', sound: 'exotic dragon fruit' },
  { name: 'GRAPES', emoji: '🍇', letter: 'G', sound: 'bouncy grapes' },
  { name: 'KIWI', emoji: '🥝', letter: 'K', sound: 'tangy kiwi' },
  { name: 'ORANGE', emoji: '🍊', letter: 'O', sound: 'zesty orange' },
  { name: 'PEAR', emoji: '🍐', letter: 'P', sound: 'sweet pear' },
  { name: 'STRAWBERRY', emoji: '🍓', letter: 'S', sound: 'yummy strawberry' },
  { name: 'WATERMELON', emoji: '🍉', letter: 'W', sound: 'refreshing watermelon' },
];

const FruitLettersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-white text-center">
            Fruit Letters - Answer Key
          </h1>
        </div>

        {/* Fruit Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {FRUITS.map((fruit, index) => (
            <motion.div
              key={index}
              className="bg-white/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Fruit Image/Emoji */}
              <div className="text-5xl mb-4 drop-shadow-lg">
                {fruit.emoji ? (
                  <span>{fruit.emoji}</span>
                ) : (
                  <img 
                    src={fruit.image} 
                    alt={fruit.name}
                    className="w-16 h-16 object-contain"
                  />
                )}
              </div>

              {/* Answer Display */}
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-white mb-2">
                  {fruit.name}
                </div>
                <div className="w-12 h-12 border-4 border-white/70 rounded-lg flex items-center justify-center bg-white/50 shadow-md">
                  <span className="text-2xl font-bold text-green-700">
                    {fruit.letter}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Tips */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 text-white">
          <h2 className="text-xl font-bold mb-3 text-center">Learning Tips</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">🎯</span>
              Look at the first letter of each fruit's name
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔊</span>
              Say the fruit name out loud to hear its beginning sound
            </li>
            <li className="flex items-center">
              <span className="mr-2">✍️</span>
              Practice writing each letter while saying the fruit name
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Try to find other words that start with the same letter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FruitLettersAnswerKey; 
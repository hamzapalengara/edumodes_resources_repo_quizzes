import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ANIMALS = [
  { name: 'DOG', emoji: '🐕', letter: 'D', sound: 'woof woof' },
  { name: 'CAT', emoji: '🐱', letter: 'C', sound: 'meow meow' },
  { name: 'ELEPHANT', emoji: '🐘', letter: 'E', sound: 'trumpet' },
  { name: 'LION', emoji: '🦁', letter: 'L', sound: 'roar' },
  { name: 'MONKEY', emoji: '🐒', letter: 'M', sound: 'ooh ooh ah ah' },
  { name: 'RABBIT', emoji: '🐰', letter: 'R', sound: 'hop hop' },
  { name: 'TIGER', emoji: '🐯', letter: 'T', sound: 'growl' },
  { name: 'BEAR', emoji: '🐻', letter: 'B', sound: 'grr grr' },
  { name: 'PENGUIN', emoji: '🐧', letter: 'P', sound: 'waddle waddle' },
  { name: 'ZEBRA', emoji: '🦓', letter: 'Z', sound: 'neigh' },
];

const AnimalLettersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-500 to-lime-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mb-4 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Animal Letters - Answer Key 🎯
          </h1>
        </div>

        {/* Animal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {ANIMALS.map((animal, index) => (
            <motion.div
              key={index}
              className="bg-white/40 backdrop-blur-md rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                {/* Animal Emoji */}
                <div className="text-5xl drop-shadow-lg">{animal.emoji}</div>
                
                {/* Animal Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {animal.name}
                  </h3>
                  <p className="text-white/90">
                    Starts with letter <span className="font-bold text-2xl">{animal.letter}</span>
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Sound: {animal.sound}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Tips */}
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 mt-4 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Tips for Learning</h2>
          <div className="space-y-4">
            <div className="bg-white/40 rounded-lg p-3 shadow-md">
              <h3 className="font-bold text-white mb-2">Listen and Say</h3>
              <p className="text-white/90">
                Say each animal name slowly and listen for the first sound.
              </p>
            </div>
            <div className="bg-white/40 rounded-lg p-3 shadow-md">
              <h3 className="font-bold text-white mb-2">Make the Sounds</h3>
              <p className="text-white/90">
                Practice making animal sounds while learning their first letters!
              </p>
            </div>
            <div className="bg-white/40 rounded-lg p-3 shadow-md">
              <h3 className="font-bold text-white mb-2">Draw and Write</h3>
              <p className="text-white/90">
                Try drawing the animals and writing their first letters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalLettersAnswerKey; 
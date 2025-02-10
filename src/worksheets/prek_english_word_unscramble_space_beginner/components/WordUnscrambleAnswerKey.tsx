import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import { SPACE_EMOJIS } from './EmojiHelper';

const ANSWERS = [
  {
    level: 1,
    title: 'Basic Space Words',
    words: [
      { word: 'STAR', emoji: SPACE_EMOJIS.glowingStar, scrambled: 'RATS', hint: 'Twinkles in the night sky' },
      { word: 'MOON', emoji: SPACE_EMOJIS.fullMoon, scrambled: 'NMOO', hint: 'Lights up the night' },
      { word: 'SUN', emoji: SPACE_EMOJIS.sunWithFace, scrambled: 'NSU', hint: 'Center of our solar system' }
    ]
  },
  {
    level: 2,
    title: 'Space Objects',
    words: [
      { word: 'COMET', emoji: SPACE_EMOJIS.comet, scrambled: 'METCO', hint: 'Ice ball with a tail' },
      { word: 'EARTH', emoji: '🌍', scrambled: 'THEAR', hint: 'Our home planet' },
      { word: 'SPACE', emoji: SPACE_EMOJIS.milkyWay, scrambled: 'CASPE', hint: 'The final frontier' }
    ]
  },
  {
    level: 3,
    title: 'Advanced Space Words',
    words: [
      { word: 'ROCKET', emoji: SPACE_EMOJIS.rocket, scrambled: 'TKOCER', hint: 'Blasts into space' },
      { word: 'PLANET', emoji: SPACE_EMOJIS.ringedPlanet, scrambled: 'LPNATE', hint: 'Orbits around the sun' },
      { word: 'METEOR', emoji: SPACE_EMOJIS.meteor, scrambled: 'MORETE', hint: 'Shooting star' },
      { word: 'UFO', emoji: SPACE_EMOJIS.flyingSaucer, scrambled: 'OFU', hint: 'Flying saucer' }
    ]
  }
];

const WordUnscrambleAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-blue-50 py-4 shadow-md mb-6 border-y-2 border-blue-100">
          <h1 className="text-3xl font-bold text-center text-blue-600">
            Space Word Explorer - Answer Key {SPACE_EMOJIS.rocket}
          </h1>
        </div>

        <div className="space-y-8">
          {ANSWERS.map((level) => (
            <div key={level.level} className="bg-white shadow-md py-6 border-y-2 border-blue-100">
              <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                Level {level.level}: {level.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {level.words.map((word, index) => (
                  <motion.div
                    key={index}
                    className="bg-blue-50 p-4 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-4xl">{word.emoji}</span>
                      <div className="text-blue-600 font-bold">
                        Word #{index + 1}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold text-gray-600">Scrambled:</span>
                        <span className="ml-2 font-mono text-lg">{word.scrambled}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-600">Answer:</span>
                        <span className="ml-2 font-mono text-lg text-green-600 font-bold">{word.word}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-600">Hint:</span>
                        <span className="ml-2 italic">{word.hint}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleAnswerKey; 
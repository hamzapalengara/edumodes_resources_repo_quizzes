import React from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_PICTURES = [
  { word: 'cat', emoji: '🐱', hint: 'A furry pet that says "meow"' },
  { word: 'box', emoji: '📦', hint: 'A container where we keep things' },
  { word: 'jam', emoji: '🍓', hint: 'Sweet fruit spread for bread' },
  { word: 'red', emoji: '🔴', hint: 'The color of a stop sign' },
  { word: 'fun', emoji: '🎪', hint: 'When we play and feel happy' },
  { word: 'dog', emoji: '🐕', hint: 'A friendly pet that says "woof"' },
  { word: 'leg', emoji: '🦵', hint: 'We use it to walk and jump' },
  { word: 'pen', emoji: '🖊️', hint: 'We use it to write and draw' },
  { word: 'sun', emoji: '☀️', hint: 'Bright light in the sky during day' },
  { word: 'hat', emoji: '👒', hint: 'We wear it to cover our head' }
];

const PictureWordAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-green-700 text-center mb-8">
              Picture Word Matching - Answer Key
            </h1>

            <div className="grid gap-6">
              {WORD_PICTURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-50 rounded-lg p-4 flex items-center gap-4"
                >
                  <div className="text-5xl">{item.emoji}</div>
                  <div>
                    <div className="text-xl font-bold text-green-800 mb-1">{item.word}</div>
                    <p className="text-green-600">{item.hint}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-green-100 rounded-lg">
              <h2 className="text-lg font-bold text-green-800 mb-2">Tips for Learning:</h2>
              <ul className="list-disc list-inside space-y-2 text-green-700">
                <li>Look at the picture and say the word out loud</li>
                <li>Try to use the word in a simple sentence</li>
                <li>Practice writing the word while looking at the picture</li>
                <li>Make connections with things you see in daily life</li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default PictureWordAnswerKey; 

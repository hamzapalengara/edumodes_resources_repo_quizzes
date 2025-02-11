import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_PAIRS = [
  {
    word1: 'Neat',
    word2: 'Tidy',
    emoji1: '🧹',
    emoji2: '✨',
    explanation: 'Both words describe a clean and well-organized space in your home.',
  },
  {
    word1: 'Huge',
    word2: 'Large',
    emoji1: '🏰',
    emoji2: '🏡',
    explanation: 'These words describe something that is very big, like a spacious room or house.',
  },
  {
    word1: 'Silent',
    word2: 'Quiet',
    emoji1: '🤫',
    emoji2: '😶',
    explanation: 'Both words mean there is very little or no noise, like during naptime.',
  },
  {
    word1: 'Quick',
    word2: 'Fast',
    emoji1: '⚡',
    emoji2: '🏃',
    explanation: 'These words describe something that happens in a very short time, like getting ready for school.',
  },
  {
    word1: 'Shut',
    word2: 'Closed',
    emoji1: '🚪',
    emoji2: '🔒',
    explanation: 'Both words mean something is not open, like a door or window.',
  },
  {
    word1: 'Cheerful',
    word2: 'Joyful',
    emoji1: '😊',
    emoji2: '😄',
    explanation: 'These words describe feeling happy and showing it, like during family celebrations.',
  },
  {
    word1: 'Cozy',
    word2: 'Comfy',
    emoji1: '🛋️',
    emoji2: '🧸',
    explanation: 'Both words mean something is warm and comfortable, like your favorite spot on the sofa.',
  },
  {
    word1: 'Tough',
    word2: 'Stiff',
    emoji1: '💪',
    emoji2: '🪵',
    explanation: 'These words describe something that is hard or difficult to bend, like a new cardboard box.',
  },
  {
    word1: 'Shiny',
    word2: 'Glowing',
    emoji1: '✨',
    emoji2: '💫',
    explanation: 'Both words describe something that produces or reflects light, like clean windows or holiday decorations.',
  },
  {
    word1: 'Packed',
    word2: 'Filled',
    emoji1: '📦',
    emoji2: '🎁',
    explanation: 'These words mean something is completely full, like a toy box or storage container.',
  },
];

const WordSynonymsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-amber-300 text-center mb-2">
            Home & Family Synonyms - Answer Key
          </h1>
          <p className="text-amber-200 text-center">
            Learn about words that mean the same thing in your home
          </p>
        </div>

        <div className="grid gap-0.5 md:gap-4">
          {WORD_PAIRS.map((pair, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-black/40"
            >
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <div className="flex items-center bg-amber-900/50 rounded-lg px-3 py-1">
                  <span className="text-xl mr-2">{pair.emoji1}</span>
                  <span className="font-bold text-amber-300">{pair.word1}</span>
                </div>
                <div className="text-amber-300 font-bold">=</div>
                <div className="flex items-center bg-amber-900/50 rounded-lg px-3 py-1">
                  <span className="text-xl mr-2">{pair.emoji2}</span>
                  <span className="font-bold text-amber-300">{pair.word2}</span>
                </div>
              </div>
              <p className="text-amber-100 text-sm md:text-base">
                {pair.explanation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-amber-300 mb-4">
            Tips for Learning Synonyms
          </h2>
          <ul className="list-disc list-inside text-amber-100 space-y-2">
            <li>Think about how these words are used in your daily home life</li>
            <li>Practice using both words in sentences about your family activities</li>
            <li>Look for these word pairs in books you read at home</li>
            <li>Create your own examples using objects and situations in your house</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordSynonymsAnswerKey; 
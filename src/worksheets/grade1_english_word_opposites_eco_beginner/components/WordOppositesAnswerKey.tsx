import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_PAIRS = [
  {
    word1: 'reuse',
    word2: 'waste',
    emoji1: '♻️',
    emoji2: '🗑️',
    explanation: 'Reusing items helps save resources, while wasting creates unnecessary trash.',
  },
  {
    word1: 'clean',
    word2: 'polluted',
    emoji1: '🌿',
    emoji2: '💨',
    explanation: 'Clean environments are healthy for all, while pollution harms nature and living beings.',
  },
  {
    word1: 'renewable',
    word2: 'depleting',
    emoji1: '☀️',
    emoji2: '⚡',
    explanation: 'Renewable resources can be used again and again, while depleting resources run out.',
  },
  {
    word1: 'natural',
    word2: 'artificial',
    emoji1: '🌳',
    emoji2: '🏭',
    explanation: 'Natural things come from nature, while artificial things are human-made.',
  },
  {
    word1: 'organic',
    word2: 'synthetic',
    emoji1: '🥬',
    emoji2: '🧪',
    explanation: 'Organic materials come from living things, while synthetic materials are created in labs.',
  },
  {
    word1: 'sustainable',
    word2: 'wasteful',
    emoji1: '🌱',
    emoji2: '📦',
    explanation: 'Sustainable practices help preserve resources, while wasteful actions deplete them.',
  },
  {
    word1: 'preserve',
    word2: 'destroy',
    emoji1: '🌍',
    emoji2: '💥',
    explanation: 'Preserving helps protect nature, while destroying harms our environment.',
  },
  {
    word1: 'biodegradable',
    word2: 'plastic',
    emoji1: '🍂',
    emoji2: '🥤',
    explanation: 'Biodegradable items break down naturally, while plastic remains in nature for hundreds of years.',
  },
  {
    word1: 'conserve',
    word2: 'squander',
    emoji1: '💧',
    emoji2: '💸',
    explanation: 'Conserving resources ensures they last longer, while squandering wastes them needlessly.',
  },
  {
    word1: 'protect',
    word2: 'harm',
    emoji1: '🛡️',
    emoji2: '⚠️',
    explanation: 'Protecting nature helps it thrive, while harming it damages ecosystems.',
  },
];

const WordOppositesAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-green-300 text-center mb-2">
            Eco-Friendly Opposites - Answer Key
          </h1>
          <p className="text-green-200 text-center">
            Learn about environmental opposites and their meanings
          </p>
        </div>

        <div className="grid gap-0.5 md:gap-4">
          {WORD_PAIRS.map((pair, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-black/40"
            >
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <div className="flex items-center bg-green-900/50 rounded-lg px-3 py-1">
                  <span className="text-xl mr-2">{pair.emoji1}</span>
                  <span className="font-bold text-green-300">{pair.word1}</span>
                </div>
                <div className="text-green-300 font-bold">vs</div>
                <div className="flex items-center bg-red-900/50 rounded-lg px-3 py-1">
                  <span className="text-xl mr-2">{pair.emoji2}</span>
                  <span className="font-bold text-red-300">{pair.word2}</span>
                </div>
              </div>
              <p className="text-green-100 text-sm md:text-base">
                {pair.explanation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-green-300 mb-4">
            Tips for Learning Opposites
          </h2>
          <ul className="list-disc list-inside text-green-100 space-y-2">
            <li>Think about how each word relates to environmental impact</li>
            <li>Look for clues in the emojis that represent each word</li>
            <li>Consider how the words affect our planet differently</li>
            <li>Connect the words to real-world environmental actions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesAnswerKey; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { 
    word: 'WALK', 
    emoji: '🚶',
    hint: 'Move forward using your legs',
    examples: '🚶‍♂️ 🚶‍♀️ 🦮'
  },
  { 
    word: 'SKIP', 
    emoji: '⭐',
    hint: 'Jump and hop while moving forward',
    examples: '💫 ⭐ 🌟'
  },
  { 
    word: 'DRAW', 
    emoji: '🎨',
    hint: 'Make pictures with pencils or crayons',
    examples: '🎨 ✏️ 🖍️'
  },
  { 
    word: 'COOK', 
    emoji: '👩‍🍳',
    hint: 'Make food using heat',
    examples: '🍳 🥘 🍲'
  },
  { 
    word: 'CLAP', 
    emoji: '👏',
    hint: 'Hit your hands together to make a sound',
    examples: '👏 🙌 👐'
  },
  { 
    word: 'WAVE', 
    emoji: '👋',
    hint: 'Move your hand back and forth to say hello',
    examples: '👋 🤚 ✋'
  },
  { 
    word: 'SMILE', 
    emoji: '😊',
    hint: 'Make a happy face by curving your lips up',
    examples: '😊 😃 😄'
  },
  { 
    word: 'CLIMB', 
    emoji: '🧗',
    hint: 'Move up something using your hands and feet',
    examples: '🧗‍♂️ 🧗‍♀️ 🌳'
  },
  { 
    word: 'PAINT', 
    emoji: '🎨',
    hint: 'Make pictures using colors and brushes',
    examples: '🎨 🖌️ 🎭'
  },
  { 
    word: 'WASH', 
    emoji: '🧼',
    hint: 'Clean something with water and soap',
    examples: '🧼 💧 🚿'
  },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-blue-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            More Action Words - Answer Key 🎯
          </h1>
        </div>

        {/* Action Words and Their Meanings */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Action Words</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORD_LIST.map(({ word, emoji, hint, examples }) => (
              <div 
                key={word}
                className="bg-white/30 rounded-lg p-3"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{emoji}</span>
                  <h3 className="font-bold text-white">{word}</h3>
                </div>
                <p className="text-white/90 mb-2">{hint}</p>
                <div className="text-2xl">{examples}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Understanding Action Words</h2>
          <div className="space-y-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">What are Action Words?</h3>
              <p className="text-white/90">
                Action words (verbs) tell us what someone or something is doing. They show movement and activity!
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Using Action Words</h3>
              <p className="text-white/90">
                We use action words to describe what we do every day, from morning until night.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Making Sentences</h3>
              <p className="text-white/90">
                Try making simple sentences with these action words: "I can walk", "We can clap", "They can smile"
              </p>
            </div>
          </div>
        </div>

        {/* Practice Ideas */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4">Fun Practice Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Action Game</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Act out each word</li>
                <li>Play follow the leader</li>
                <li>Make action cards</li>
                <li>Create movement stories</li>
              </ul>
            </div>
            
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Word Practice</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Draw pictures of actions</li>
                <li>Write simple sentences</li>
                <li>Make a daily action list</li>
                <li>Create action comics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 
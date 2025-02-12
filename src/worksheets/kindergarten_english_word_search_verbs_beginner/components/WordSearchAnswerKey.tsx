import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { 
    word: 'RUN', 
    emoji: '🏃',
    hint: 'Move quickly with your legs',
    examples: '🏃‍♂️ 🏃‍♀️ 🐆'
  },
  { 
    word: 'JUMP', 
    emoji: '🦘',
    hint: 'Push off the ground and move up in the air',
    examples: '🦘 ⭐ 🌟'
  },
  { 
    word: 'SWIM', 
    emoji: '🏊',
    hint: 'Move through water using your arms and legs',
    examples: '🏊‍♂️ 🐠 🌊'
  },
  { 
    word: 'DANCE', 
    emoji: '💃',
    hint: 'Move your body to music',
    examples: '💃 🕺 🎵'
  },
  { 
    word: 'SING', 
    emoji: '🎤',
    hint: 'Make music with your voice',
    examples: '🎤 🎵 🎶'
  },
  { 
    word: 'READ', 
    emoji: '📚',
    hint: 'Look at and understand written words',
    examples: '📖 📕 👀'
  },
  { 
    word: 'WRITE', 
    emoji: '✏️',
    hint: 'Make letters and words on paper',
    examples: '✏️ 📝 ✍️'
  },
  { 
    word: 'SLEEP', 
    emoji: '😴',
    hint: 'Rest with your eyes closed',
    examples: '😴 💤 🛏️'
  },
  { 
    word: 'PLAY', 
    emoji: '🎮',
    hint: 'Do fun activities for enjoyment',
    examples: '🎮 🎨 ⚽'
  },
  { 
    word: 'EAT', 
    emoji: '🍽️',
    hint: 'Put food in your mouth and chew',
    examples: '🍽️ 🍎 🥪'
  },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Action Words - Answer Key 🎯
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
                Action words (verbs) tell us what someone or something is doing. They are the "doing" words in our language!
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Using Action Words</h3>
              <p className="text-white/90">
                We use action words to describe activities, movements, and things we do every day.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Making Sentences</h3>
              <p className="text-white/90">
                Try making simple sentences with these action words: "I can run", "We can dance", "They can sing"
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
                <li>Play charades</li>
                <li>Make action cards</li>
                <li>Create movement stories</li>
              </ul>
            </div>
            
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Word Practice</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Draw pictures of actions</li>
                <li>Write simple sentences</li>
                <li>Make action word cards</li>
                <li>Create action stories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 
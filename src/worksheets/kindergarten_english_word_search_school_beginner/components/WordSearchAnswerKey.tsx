import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// School-themed words with explanations
const WORD_LIST = [
  { 
    word: 'BOOK', 
    emoji: '📚',
    explanation: 'Books help us learn and read stories. You can find many books in the school library!'
  },
  { 
    word: 'DESK', 
    emoji: '🪑',
    explanation: 'A desk is where you sit and do your work at school. It holds your books and supplies.'
  },
  { 
    word: 'PEN', 
    emoji: '✏️',
    explanation: 'We use pens and pencils to write and draw in our notebooks.'
  },
  { 
    word: 'BAG', 
    emoji: '🎒',
    explanation: 'Your school bag carries all your books, lunch, and supplies to and from school.'
  },
  { 
    word: 'READ', 
    emoji: '📖',
    explanation: 'Reading helps us learn new things and enjoy stories. We read every day at school!'
  },
  { 
    word: 'DRAW', 
    emoji: '🎨',
    explanation: 'Drawing lets us be creative and make pictures of what we imagine.'
  },
  { 
    word: 'MAP', 
    emoji: '🗺️',
    explanation: 'Maps show us where places are in the world. We use them to learn about geography.'
  },
  { 
    word: 'ART', 
    emoji: '🎭',
    explanation: 'In art class, we create beautiful things using colors, shapes, and our imagination.'
  },
  { 
    word: 'GYM', 
    emoji: '🏃',
    explanation: 'In gym class, we exercise, play sports, and have fun staying active!'
  },
  { 
    word: 'MATH', 
    emoji: '🔢',
    explanation: 'Math helps us count, add, subtract, and solve number problems.'
  },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Instructions */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white mb-4">School Words Answer Key</h2>
          <p className="text-white mb-4">
            Here are all the school-related words in the puzzle. Each word is something you can find or do at school!
          </p>
        </div>

        {/* Word List with Explanations */}
        <div className="space-y-2">
          {WORD_LIST.map(({ word, emoji, explanation }) => (
            <div
              key={word}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
            >
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-3">{emoji}</span>
                <span className="text-2xl font-bold text-white">{word}</span>
              </div>
              <p className="text-white">
                {explanation}
              </p>
            </div>
          ))}
        </div>

        {/* Learning Benefits */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mt-4">
          <h3 className="text-xl font-bold text-white mb-2">Learning Benefits</h3>
          <ul className="text-white space-y-2">
            <li className="flex items-center">
              <span className="text-xl mr-2">📝</span>
              Practice spelling school words
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">🔍</span>
              Improve word recognition
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">🏫</span>
              Learn about school vocabulary
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">👀</span>
              Develop visual skills
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Home-themed words with explanations
const WORD_LIST = [
  { 
    word: 'BED', 
    emoji: '🛏️',
    explanation: 'A bed is where we sleep and rest at night. It helps us feel cozy and comfortable!'
  },
  { 
    word: 'SOFA', 
    emoji: '🛋️',
    explanation: 'A sofa or couch is where we sit in the living room. We can relax and read books here.'
  },
  { 
    word: 'LAMP', 
    emoji: '💡',
    explanation: 'A lamp gives us light to see when it\'s dark. It helps us read and play inside.'
  },
  { 
    word: 'DOOR', 
    emoji: '🚪',
    explanation: 'A door lets us go in and out of rooms. It can open and close to keep us safe.'
  },
  { 
    word: 'SINK', 
    emoji: '🚰',
    explanation: 'We use the sink to wash our hands and get water. It helps us stay clean and healthy!'
  },
  { 
    word: 'BATH', 
    emoji: '🛁',
    explanation: 'We take a bath to get clean. Bath time can be fun with bubbles and toys!'
  },
  { 
    word: 'ROOM', 
    emoji: '🏠',
    explanation: 'A room is a space in our home. We have different rooms for different activities.'
  },
  { 
    word: 'TOYS', 
    emoji: '🧸',
    explanation: 'Toys are fun things we play with at home. They help us learn and be creative!'
  },
  { 
    word: 'BOWL', 
    emoji: '🥣',
    explanation: 'We use bowls to eat our food. They can hold cereal, soup, and other yummy things!'
  },
  { 
    word: 'COOK', 
    emoji: '👩‍🍳',
    explanation: 'To cook means to make food in the kitchen. It\'s how we prepare our tasty meals!'
  },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 to-amber-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Instructions */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white mb-4">Home Words Answer Key</h2>
          <p className="text-white mb-4">
            Here are all the words about things we find at home. Each word is something you can see or do in your house!
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
              Practice spelling home words
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">🔍</span>
              Improve word recognition
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">🏠</span>
              Learn about household vocabulary
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
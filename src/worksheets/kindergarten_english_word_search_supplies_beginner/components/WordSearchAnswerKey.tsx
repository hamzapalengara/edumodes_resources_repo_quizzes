import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_LIST = [
  { 
    word: 'PEN', 
    emoji: '🖊️',
    hint: 'A tool that uses ink to write or draw. It can make dark, clear lines.'
  },
  { 
    word: 'BOOK', 
    emoji: '📚',
    hint: 'Contains pages with stories, pictures, or information to read and learn from.'
  },
  { 
    word: 'RULER', 
    emoji: '📏',
    hint: 'A long, straight tool with numbers that helps measure things and draw straight lines.'
  },
  { 
    word: 'PAPER', 
    emoji: '📄',
    hint: 'Flat, thin sheets we write, draw, and color on. Can be blank or lined.'
  },
  { 
    word: 'DESK', 
    emoji: '🪑',
    hint: 'A table where you sit to do your work, with space for your books and supplies.'
  },
  { 
    word: 'GLUE', 
    emoji: '🧊',
    hint: 'Sticky stuff that helps stick papers and things together. Remember to close the cap!'
  },
  { 
    word: 'TAPE', 
    emoji: '📼',
    hint: 'Clear, sticky strip that holds things together. Comes on a roll.'
  },
  { 
    word: 'PENCIL', 
    emoji: '✏️',
    hint: 'A writing tool with lead inside that can be erased if you make a mistake.'
  },
  { 
    word: 'ERASER', 
    emoji: '🧼',
    hint: 'Helps fix mistakes by rubbing away pencil marks. Like magic!'
  },
  { 
    word: 'BAG', 
    emoji: '🎒',
    hint: 'Carries all your school supplies and books. Worn on your back.'
  },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            School Supplies Word Search - Answer Key 📚
          </h1>
        </div>

        {/* Words and Their Meanings */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Words and Their Uses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORD_LIST.map(({ word, emoji, hint }) => (
              <div 
                key={word}
                className="bg-white/30 rounded-lg p-3 flex items-start"
              >
                <span className="text-2xl mr-3">{emoji}</span>
                <div>
                  <h3 className="font-bold text-white">{word}</h3>
                  <p className="text-white/80 text-sm">{hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Finding Words */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Tips for Finding Words</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">1. Look for Short Words First</h3>
              <p className="text-white/80">
                Start with short words like "PEN" and "BAG". They're easier to spot!
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">2. Use the Hints</h3>
              <p className="text-white/80">
                Think about what each item is used for. This can help you remember the word.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">3. Follow the Lines</h3>
              <p className="text-white/80">
                Words go across (➡️) or down (⬇️). Use your finger to follow the letters.
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4">Teaching Tips</h2>
          <div className="space-y-3">
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Classroom Connection</h3>
              <p className="text-white/80">
                Point out these items in your classroom. Let students touch and use them
                to understand their purpose better.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Organization Skills</h3>
              <p className="text-white/80">
                Discuss how to take care of school supplies and keep them organized in
                their desk or bag.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-3">
              <h3 className="font-bold text-white mb-2">Make it Fun</h3>
              <p className="text-white/80">
                Turn it into a game! Have students race to find their favorite school
                supply in the word search.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 
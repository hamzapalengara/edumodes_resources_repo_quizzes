import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const VOWEL_INFO = [
  {
    letter: 'a',
    examples: ['apple', 'cat', 'hat'],
    emoji: '🍎',
  },
  {
    letter: 'e',
    examples: ['egg', 'bed', 'pet'],
    emoji: '🥚',
  },
  {
    letter: 'i',
    examples: ['igloo', 'fish', 'pig'],
    emoji: '🐷',
  },
  {
    letter: 'o',
    examples: ['orange', 'dog', 'fox'],
    emoji: '🦊',
  },
  {
    letter: 'u',
    examples: ['umbrella', 'bug', 'duck'],
    emoji: '🦆',
  },
];

const VowelHuntAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-600">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
            Vowel Hunt - Answer Guide
          </h1>

          {/* Main Explanation */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 mb-6">
            <h2 className="text-xl font-bold text-white mb-2">What are Vowels?</h2>
            <p className="text-white mb-4">
              Vowels are special letters that make smooth sounds. In English, there are 5 main vowels:
              a, e, i, o, u. Every word needs at least one vowel!
            </p>
          </div>

          {/* Vowel Examples */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VOWEL_INFO.map((info) => (
              <div
                key={info.letter}
                className="bg-white/30 backdrop-blur-sm rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">{info.emoji}</span>
                  <span className="text-2xl font-bold text-white uppercase">
                    {info.letter}
                  </span>
                </div>
                <div className="space-y-1">
                  {info.examples.map((word) => (
                    <div
                      key={word}
                      className="bg-white/20 rounded-lg p-2 text-white"
                    >
                      {word.split('').map((letter, i) => (
                        <span
                          key={i}
                          className={`${
                            letter === info.letter ? 'text-yellow-300 font-bold' : ''
                          }`}
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-6 bg-white/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-white mb-2">Tips for Finding Vowels</h2>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li>Every word must have at least one vowel</li>
              <li>Vowels make soft, flowing sounds</li>
              <li>Try saying the alphabet and notice which letters feel different</li>
              <li>Remember: A, E, I, O, U are your vowel friends!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VowelHuntAnswerKey; 
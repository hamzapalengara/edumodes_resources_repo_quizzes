import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface Word {
  word: string;
  emoji: string;
  letter: string;
  explanation: string;
}

const words: Word[] = [
  {
    word: "lion",
    emoji: "🦁",
    letter: "l",
    explanation: "Lion starts with the letter 'l' like in 'leg'. Listen for the 'lll' sound at the beginning."
  },
  {
    word: "monkey",
    emoji: "🐒",
    letter: "m",
    explanation: "Monkey starts with the letter 'm' like in 'mom'. You can hear the 'mmm' sound at the start."
  },
  {
    word: "tiger",
    emoji: "🐯",
    letter: "t",
    explanation: "Tiger begins with the letter 't' like in 'top'. Notice the 'tuh' sound at the beginning."
  },
  {
    word: "elephant",
    emoji: "🐘",
    letter: "e",
    explanation: "Elephant starts with the letter 'e' like in 'egg'. Listen for the 'eh' sound at the start."
  },
  {
    word: "penguin",
    emoji: "🐧",
    letter: "p",
    explanation: "Penguin begins with the letter 'p' like in 'pig'. You can hear the 'puh' sound at the beginning."
  },
  {
    word: "giraffe",
    emoji: "🦒",
    letter: "g",
    explanation: "Giraffe starts with the letter 'g' like in 'girl'. Notice the 'guh' sound at the start."
  },
  {
    word: "zebra",
    emoji: "🦓",
    letter: "z",
    explanation: "Zebra begins with the letter 'z' like in 'zoo'. Listen for the 'zzz' sound at the beginning."
  },
  {
    word: "kangaroo",
    emoji: "🦘",
    letter: "k",
    explanation: "Kangaroo starts with the letter 'k' like in 'kite'. You can hear the 'kuh' sound at the start."
  },
  {
    word: "dolphin",
    emoji: "🐬",
    letter: "d",
    explanation: "Dolphin begins with the letter 'd' like in 'dog'. Notice the 'duh' sound at the beginning."
  },
  {
    word: "bear",
    emoji: "🐻",
    letter: "b",
    explanation: "Bear starts with the letter 'b' like in 'ball'. You can hear the 'buh' sound at the start."
  }
];

const FirstLetterAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4 border-2 border-green-100">
          <h1 className="text-2xl font-bold text-green-800 text-center">
            Animal Words - First Letter Answer Key
          </h1>
          <p className="text-green-600 text-center mt-2">
            Learn how each animal word begins and practice the letter sounds!
          </p>
        </div>

        {/* Answer Grid */}
        <div className="grid gap-4">
          {words.map((word, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border-2 border-green-100"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Word and Letter Section */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <span className="text-3xl">{word.emoji}</span>
                  <div>
                    <h2 className="text-xl font-bold text-green-800 capitalize">
                      {word.word}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-600">Starts with:</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-lg">
                        {word.letter.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="flex-1 bg-green-50 p-3 rounded-lg">
                  <p className="text-green-700">
                    {word.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-lg shadow-md mt-6 p-6 border-2 border-green-100">
          <h2 className="text-xl font-bold text-green-800 mb-4">
            Tips for Learning Animal First Letters
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🦁</span>
              <div>
                <h3 className="font-semibold text-green-700">Listen to Animal Sounds</h3>
                <p className="text-gray-600">Many animals make sounds that start with their first letter!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🗣️</span>
              <div>
                <h3 className="font-semibold text-green-700">Say It Slowly</h3>
                <p className="text-gray-600">Try saying the animal name slowly to hear each sound clearly.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h3 className="font-semibold text-green-700">Practice Makes Perfect</h3>
                <p className="text-gray-600">The more you practice, the better you'll get at identifying first letters!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterAnswerKey; 
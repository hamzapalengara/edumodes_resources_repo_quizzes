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
    word: "swing",
    emoji: "🎡",
    letter: "s",
    explanation: "Swing starts with the letter 's' like in 'sun'. Listen for the 'sss' sound at the beginning."
  },
  {
    word: "park",
    emoji: "🌳",
    letter: "p",
    explanation: "Park begins with the letter 'p' like in 'play'. You can hear the 'puh' sound at the start."
  },
  {
    word: "tree",
    emoji: "🌲",
    letter: "t",
    explanation: "Tree starts with the letter 't' like in 'toy'. Notice the 'tuh' sound at the beginning."
  },
  {
    word: "ball",
    emoji: "⚽",
    letter: "b",
    explanation: "Ball begins with the letter 'b' like in 'boy'. Listen for the 'buh' sound at the start."
  },
  {
    word: "slide",
    emoji: "🛝",
    letter: "s",
    explanation: "Slide starts with the letter 's' like in 'sun'. You can hear the 'sss' sound at the beginning."
  },
  {
    word: "flower",
    emoji: "🌸",
    letter: "f",
    explanation: "Flower begins with the letter 'f' like in 'fun'. Notice the 'fff' sound at the start."
  },
  {
    word: "grass",
    emoji: "🌿",
    letter: "g",
    explanation: "Grass starts with the letter 'g' like in 'go'. Listen for the 'guh' sound at the beginning."
  },
  {
    word: "monkey",
    emoji: "🐒",
    letter: "m",
    explanation: "Monkey begins with the letter 'm' like in 'mom'. You can hear the 'mmm' sound at the start."
  },
  {
    word: "leaf",
    emoji: "🍁",
    letter: "l",
    explanation: "Leaf starts with the letter 'l' like in 'love'. Notice the 'lll' sound at the beginning."
  },
  {
    word: "rope",
    emoji: "🪢",
    letter: "r",
    explanation: "Rope begins with the letter 'r' like in 'run'. Listen for the 'rrr' sound at the start."
  }
];

const FirstLetterAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4 border-2 border-green-200">
          <h1 className="text-2xl font-bold text-green-800 text-center">
            Park Words - First Letter Answer Key
          </h1>
          <p className="text-green-600 text-center mt-2">
            Learn how each park word begins and practice the letter sounds!
          </p>
        </div>

        {/* Answer Grid */}
        <div className="grid gap-4">
          {words.map((word, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border-2 border-green-200"
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
        <div className="bg-white rounded-lg shadow-md mt-6 p-6 border-2 border-green-200">
          <h2 className="text-xl font-bold text-green-800 mb-4">
            Tips for Learning Park Word Letters
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎈</span>
              <div>
                <h3 className="font-semibold text-green-700">Pop and Learn</h3>
                <p className="text-gray-600">Pop the balloon with the correct first letter to make learning fun!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👂</span>
              <div>
                <h3 className="font-semibold text-green-700">Listen Carefully</h3>
                <p className="text-gray-600">Pay attention to the first sound you hear in each park word.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-green-700">Practice Makes Perfect</h3>
                <p className="text-gray-600">Keep practicing with the balloons to master park word letters!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterAnswerKey; 
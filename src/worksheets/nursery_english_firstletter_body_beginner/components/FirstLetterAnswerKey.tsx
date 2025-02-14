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
    word: "head",
    emoji: "👤",
    letter: "h",
    explanation: "Head starts with the letter 'h' like in 'hat'. Listen for the 'huh' sound at the beginning."
  },
  {
    word: "nose",
    emoji: "👃",
    letter: "n",
    explanation: "Nose starts with the letter 'n' like in 'net'. You can hear the 'nnn' sound at the start."
  },
  {
    word: "mouth",
    emoji: "👄",
    letter: "m",
    explanation: "Mouth begins with the letter 'm' like in 'mom'. Notice the 'mmm' sound at the beginning."
  },
  {
    word: "ear",
    emoji: "👂",
    letter: "e",
    explanation: "Ear starts with the letter 'e' like in 'egg'. Listen for the 'eh' sound at the start."
  },
  {
    word: "finger",
    emoji: "👆",
    letter: "f",
    explanation: "Finger begins with the letter 'f' like in 'fun'. You can hear the 'fff' sound at the beginning."
  },
  {
    word: "leg",
    emoji: "🦵",
    letter: "l",
    explanation: "Leg starts with the letter 'l' like in 'lip'. Notice the 'lll' sound at the start."
  },
  {
    word: "arm",
    emoji: "💪",
    letter: "a",
    explanation: "Arm begins with the letter 'a' like in 'apple'. Listen for the 'ah' sound at the beginning."
  },
  {
    word: "tooth",
    emoji: "🦷",
    letter: "t",
    explanation: "Tooth starts with the letter 't' like in 'top'. You can hear the 'tuh' sound at the start."
  },
  {
    word: "hand",
    emoji: "✋",
    letter: "h",
    explanation: "Hand begins with the letter 'h' like in 'hat'. Notice the 'huh' sound at the beginning."
  },
  {
    word: "knee",
    emoji: "🦵",
    letter: "k",
    explanation: "Knee starts with the letter 'k' like in 'kite'. Listen for the 'kuh' sound at the start."
  }
];

const FirstLetterAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4 border-2 border-red-100">
          <h1 className="text-2xl font-bold text-red-800 text-center">
            Body Part Words - First Letter Answer Key
          </h1>
          <p className="text-red-600 text-center mt-2">
            Learn how each body part word begins and practice the letter sounds!
          </p>
        </div>

        {/* Answer Grid */}
        <div className="grid gap-4">
          {words.map((word, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border-2 border-red-100"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Word and Letter Section */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <span className="text-3xl">{word.emoji}</span>
                  <div>
                    <h2 className="text-xl font-bold text-red-800 capitalize">
                      {word.word}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-600">Starts with:</span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold text-lg">
                        {word.letter.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="flex-1 bg-red-50 p-3 rounded-lg">
                  <p className="text-red-700">
                    {word.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-lg shadow-md mt-6 p-6 border-2 border-red-100">
          <h2 className="text-xl font-bold text-red-800 mb-4">
            Tips for Learning Body Part Letters
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👂</span>
              <div>
                <h3 className="font-semibold text-red-700">Listen Carefully</h3>
                <p className="text-gray-600">Pay attention to the first sound you hear in each word.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🗣️</span>
              <div>
                <h3 className="font-semibold text-red-700">Say It Slowly</h3>
                <p className="text-gray-600">Try saying the body part name slowly to hear each sound clearly.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h3 className="font-semibold text-red-700">Practice Makes Perfect</h3>
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
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
    word: "book",
    emoji: "📚",
    letter: "b",
    explanation: "Book starts with the letter 'b' like in 'ball'. You can hear the 'buh' sound at the beginning."
  },
  {
    word: "pencil",
    emoji: "✏️",
    letter: "p",
    explanation: "Pencil starts with the letter 'p' like in 'pig'. Listen for the 'puh' sound at the start."
  },
  {
    word: "desk",
    emoji: "🪑",
    letter: "d",
    explanation: "Desk begins with the letter 'd' like in 'dog'. Notice the 'duh' sound at the beginning."
  },
  {
    word: "teacher",
    emoji: "👩‍🏫",
    letter: "t",
    explanation: "Teacher starts with the letter 't' like in 'top'. You can hear the 'tuh' sound at the start."
  },
  {
    word: "ruler",
    emoji: "📏",
    letter: "r",
    explanation: "Ruler begins with the letter 'r' like in 'red'. Listen for the 'ruh' sound at the beginning."
  },
  {
    word: "scissors",
    emoji: "✂️",
    letter: "s",
    explanation: "Scissors starts with the letter 's' like in 'sun'. Notice the 'sss' sound at the start."
  },
  {
    word: "crayon",
    emoji: "🖍️",
    letter: "c",
    explanation: "Crayon begins with the letter 'c' like in 'cat'. You can hear the 'kuh' sound at the beginning."
  },
  {
    word: "map",
    emoji: "🗺️",
    letter: "m",
    explanation: "Map starts with the letter 'm' like in 'mom'. Listen for the 'mmm' sound at the start."
  },
  {
    word: "lunch",
    emoji: "🍱",
    letter: "l",
    explanation: "Lunch begins with the letter 'l' like in 'lion'. Notice the 'lll' sound at the beginning."
  },
  {
    word: "notebook",
    emoji: "📓",
    letter: "n",
    explanation: "Notebook starts with the letter 'n' like in 'nose'. You can hear the 'nnn' sound at the start."
  }
];

const FirstLetterAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4 border-2 border-blue-100">
          <h1 className="text-2xl font-bold text-blue-800 text-center">
            School Words - First Letter Answer Key
          </h1>
          <p className="text-blue-600 text-center mt-2">
            Learn how each school word begins and practice the letter sounds!
          </p>
        </div>

        {/* Answer Grid */}
        <div className="grid gap-4">
          {words.map((word, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border-2 border-blue-100"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Word and Letter Section */}
                <div className="flex items-center gap-3 min-w-[200px]">
                  <span className="text-3xl">{word.emoji}</span>
                  <div>
                    <h2 className="text-xl font-bold text-blue-800 capitalize">
                      {word.word}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-600">Starts with:</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold text-lg">
                        {word.letter.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="flex-1 bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-700">
                    {word.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-lg shadow-md mt-6 p-6 border-2 border-blue-100">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            Tips for Learning First Letters
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👂</span>
              <div>
                <h3 className="font-semibold text-blue-700">Listen Carefully</h3>
                <p className="text-gray-600">Pay attention to the first sound you hear when the word is spoken.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🗣️</span>
              <div>
                <h3 className="font-semibold text-blue-700">Say It Slowly</h3>
                <p className="text-gray-600">Try saying the word slowly to hear each sound clearly.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h3 className="font-semibold text-blue-700">Practice Makes Perfect</h3>
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
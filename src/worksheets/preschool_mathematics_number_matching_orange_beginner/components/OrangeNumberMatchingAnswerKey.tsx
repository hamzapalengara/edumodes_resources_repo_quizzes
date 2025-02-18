import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const OrangeNumberMatchingAnswerKey: React.FC = () => {
  const numberPairs = [
    {
      number: '6',
      word: 'six',
      description: "Six oranges - like a small basket of oranges"
    },
    {
      number: '7',
      word: 'seven',
      description: "Seven oranges - like a week of daily oranges"
    },
    {
      number: '8',
      word: 'eight',
      description: "Eight oranges - like sharing with a friend (4 each)"
    },
    {
      number: '9',
      word: 'nine',
      description: "Nine oranges - like a square of oranges (3 x 3)"
    },
    {
      number: '10',
      word: 'ten',
      description: "Ten oranges - like counting all your fingers"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-orange-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Orange Number Match - Answer Key 🍊
          </h1>

          <div className="grid gap-6">
            {numberPairs.map((pair, index) => (
              <div key={index} className="bg-orange-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-orange-900 rounded-lg text-4xl font-bold">
                    {pair.number}
                  </div>
                  <div className="text-2xl">➡️</div>
                  <div className="w-32 h-16 flex items-center justify-center bg-orange-900 rounded-lg text-4xl font-bold">
                    {pair.word}
                  </div>
                </div>
                <p className="text-center text-orange-100">
                  {pair.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-orange-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Numbers tell us how many things we have</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Each number has a special word we use to say it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>We can count up from 6 to 10 in order</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Practice counting real objects to understand numbers better</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrangeNumberMatchingAnswerKey; 
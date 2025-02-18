import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const AppleNumberMatchingAnswerKey: React.FC = () => {
  const numberPairs = [
    {
      number: '1',
      word: 'one',
      description: "One apple - the first number we learn to count"
    },
    {
      number: '2',
      word: 'two',
      description: "Two apples - like a pair of apples growing together"
    },
    {
      number: '3',
      word: 'three',
      description: "Three apples - like a small group on a branch"
    },
    {
      number: '4',
      word: 'four',
      description: "Four apples - like a square of apples in a basket"
    },
    {
      number: '5',
      word: 'five',
      description: "Five apples - like counting fingers on one hand"
    }
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-red-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Apple Number Match - Answer Key 🍎
          </h1>

          <div className="grid gap-6">
            {numberPairs.map((pair, index) => (
              <div key={index} className="bg-red-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-900 rounded-lg text-4xl font-bold">
                    {pair.number}
                  </div>
                  <div className="text-2xl">➡️</div>
                  <div className="w-32 h-16 flex items-center justify-center bg-red-900 rounded-lg text-4xl font-bold">
                    {pair.word}
                  </div>
                </div>
                <p className="text-center text-red-100">
                  {pair.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-red-100">
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
                <span>We can count up from 1 to 5 in order</span>
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

export default AppleNumberMatchingAnswerKey; 
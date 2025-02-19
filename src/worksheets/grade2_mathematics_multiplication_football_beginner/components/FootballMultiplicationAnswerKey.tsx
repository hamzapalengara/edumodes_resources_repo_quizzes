import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const FootballMultiplicationAnswerKey: React.FC = () => {
  const multiplicationFacts = [
    {
      fact: '2 × 1',
      answer: '2',
      description: "Like scoring 2 goals in one shot"
    },
    {
      fact: '2 × 2',
      answer: '4',
      description: "Like 2 players each scoring 2 goals"
    },
    {
      fact: '2 × 3',
      answer: '6',
      description: "Like 3 pairs of players on the field"
    },
    {
      fact: '2 × 4',
      answer: '8',
      description: "Like 4 pairs of football boots"
    },
    {
      fact: '2 × 5',
      answer: '10',
      description: "Like 5 pairs making a team of 10"
    },
    {
      fact: '2 × 6',
      answer: '12',
      description: "Like 6 pairs of players ready to play"
    },
    {
      fact: '2 × 7',
      answer: '14',
      description: "Like 7 pairs of players warming up"
    },
    {
      fact: '2 × 8',
      answer: '16',
      description: "Like 8 pairs of players practicing"
    },
    {
      fact: '2 × 9',
      answer: '18',
      description: "Like 9 pairs of players in a tournament"
    },
    {
      fact: '2 × 10',
      answer: '20',
      description: "Like 10 pairs making two full teams"
    }
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-green-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Football Multiplication - Answer Key ⚽
          </h1>

          <div className="grid gap-6">
            {multiplicationFacts.map((fact, index) => (
              <div key={index} className="bg-green-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-24 h-16 flex items-center justify-center bg-green-900 rounded-lg text-2xl font-bold">
                    {fact.fact}
                  </div>
                  <div className="text-2xl">=</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-green-900 rounded-lg text-2xl font-bold">
                    {fact.answer}
                  </div>
                </div>
                <p className="text-center text-green-100">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>The 2 times table shows what happens when we count in pairs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Each answer is an even number (2, 4, 6, 8, 10...)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>You can use doubles to help remember (1+1, 2+2, 3+3...)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Think of pairs in football to help visualize each fact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballMultiplicationAnswerKey; 
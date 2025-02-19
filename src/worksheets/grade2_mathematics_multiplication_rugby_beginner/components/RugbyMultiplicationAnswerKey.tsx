import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const RugbyMultiplicationAnswerKey: React.FC = () => {
  const multiplicationFacts = [
    {
      fact: '6 × 1',
      answer: '6',
      description: "Like one rugby team on the field"
    },
    {
      fact: '6 × 2',
      answer: '12',
      description: "Like two teams ready to play"
    },
    {
      fact: '6 × 3',
      answer: '18',
      description: "Like three teams in a tournament"
    },
    {
      fact: '6 × 4',
      answer: '24',
      description: "Like four teams in rotation"
    },
    {
      fact: '6 × 5',
      answer: '30',
      description: "Like five teams in a league"
    },
    {
      fact: '6 × 6',
      answer: '36',
      description: "Like six teams in a championship"
    },
    {
      fact: '6 × 7',
      answer: '42',
      description: "Like seven teams in a division"
    },
    {
      fact: '6 × 8',
      answer: '48',
      description: "Like eight teams in playoffs"
    },
    {
      fact: '6 × 9',
      answer: '54',
      description: "Like nine teams in a conference"
    },
    {
      fact: '6 × 10',
      answer: '60',
      description: "Like ten teams in a major league"
    }
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-green-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Rugby Multiplication - Answer Key 🏉
          </h1>

          <div className="grid gap-6">
            {multiplicationFacts.map((fact, index) => (
              <div key={index} className="bg-green-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-24 h-16 flex items-center justify-center bg-green-800 rounded-lg text-2xl font-bold text-white">
                    {fact.fact}
                  </div>
                  <div className="text-2xl">=</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-400 rounded-lg text-2xl font-bold text-green-900">
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
            <h2 className="text-xl font-bold mb-4 text-amber-400">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>The 6 times table shows what happens when we count in sixes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Think of rugby teams with 6 players to help remember</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>All answers are even numbers (end in 0, 2, 4, 6, 8)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Use rugby formations to visualize each multiplication fact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RugbyMultiplicationAnswerKey; 
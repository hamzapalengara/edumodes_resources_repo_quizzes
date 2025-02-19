import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BasketballMultiplicationAnswerKey: React.FC = () => {
  const multiplicationFacts = [
    {
      fact: '7 × 1',
      answer: '7',
      description: "Like one basketball team on the court"
    },
    {
      fact: '7 × 2',
      answer: '14',
      description: "Like two teams in a game"
    },
    {
      fact: '7 × 3',
      answer: '21',
      description: "Like three teams in rotation"
    },
    {
      fact: '7 × 4',
      answer: '28',
      description: "Like four teams in a mini-tournament"
    },
    {
      fact: '7 × 5',
      answer: '35',
      description: "Like five teams in practice"
    },
    {
      fact: '7 × 6',
      answer: '42',
      description: "Like six teams in a league"
    },
    {
      fact: '7 × 7',
      answer: '49',
      description: "Like seven teams in playoffs"
    },
    {
      fact: '7 × 8',
      answer: '56',
      description: "Like eight teams in a division"
    },
    {
      fact: '7 × 9',
      answer: '63',
      description: "Like nine teams in a conference"
    },
    {
      fact: '7 × 10',
      answer: '70',
      description: "Like ten teams in a championship"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-orange-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Basketball Multiplication - Answer Key 🏀
          </h1>

          <div className="grid gap-6">
            {multiplicationFacts.map((fact, index) => (
              <div key={index} className="bg-orange-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-24 h-16 flex items-center justify-center bg-orange-800 rounded-lg text-2xl font-bold text-white">
                    {fact.fact}
                  </div>
                  <div className="text-2xl">=</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-400 rounded-lg text-2xl font-bold text-orange-900">
                    {fact.answer}
                  </div>
                </div>
                <p className="text-center text-orange-100">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-amber-400">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-orange-100">
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>The 7 times table shows what happens when we count in sevens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Think of basketball teams to help remember the facts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Look for patterns in the answers (7, 14, 21, 28, 35...)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">•</span>
                <span>Use basketball formations to visualize each multiplication fact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketballMultiplicationAnswerKey; 
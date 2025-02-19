import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BasketballMultiplicationAnswerKey: React.FC = () => {
  const multiplicationFacts = [
    {
      fact: '7 × 1',
      answer: '7',
      description: "Like scoring one free throw worth 7 points"
    },
    {
      fact: '7 × 2',
      answer: '14',
      description: "Like making two shots from downtown"
    },
    {
      fact: '7 × 3',
      answer: '21',
      description: "Like scoring three slam dunks"
    },
    {
      fact: '7 × 4',
      answer: '28',
      description: "Like four perfect layups"
    },
    {
      fact: '7 × 5',
      answer: '35',
      description: "Like five successful jump shots"
    },
    {
      fact: '7 × 6',
      answer: '42',
      description: "Like six three-pointers in a row"
    },
    {
      fact: '7 × 7',
      answer: '49',
      description: "Like seven players scoring 7 each"
    },
    {
      fact: '7 × 8',
      answer: '56',
      description: "Like eight perfect assists"
    },
    {
      fact: '7 × 9',
      answer: '63',
      description: "Like nine fast breaks"
    },
    {
      fact: '7 × 10',
      answer: '70',
      description: "Like ten successful shots"
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
                  <div className="w-24 h-16 flex items-center justify-center bg-indigo-600 rounded-lg text-2xl font-bold text-white">
                    {fact.fact}
                  </div>
                  <div className="text-2xl">=</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-orange-400 rounded-lg text-2xl font-bold text-indigo-900">
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
            <h2 className="text-xl font-bold mb-4 text-orange-400">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-orange-100">
              <li className="flex items-start gap-3">
                <span className="text-orange-400">•</span>
                <span>The 7 times table shows what happens when we count in sevens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400">•</span>
                <span>Think of basketball scores and points to help remember</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400">•</span>
                <span>Look for patterns in the answers (7, 14, 21, 28...)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400">•</span>
                <span>Use basketball game scenarios to visualize multiplication</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketballMultiplicationAnswerKey; 
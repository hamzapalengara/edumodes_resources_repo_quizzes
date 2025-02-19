import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BoxingMultiplicationAnswerKey: React.FC = () => {
  const multiplicationFacts = [
    {
      fact: '8 × 1',
      answer: '8',
      description: "Like one round in a boxing match"
    },
    {
      fact: '8 × 2',
      answer: '16',
      description: "Like two rounds completed"
    },
    {
      fact: '8 × 3',
      answer: '24',
      description: "Like three rounds of boxing"
    },
    {
      fact: '8 × 4',
      answer: '32',
      description: "Like four rounds in the ring"
    },
    {
      fact: '8 × 5',
      answer: '40',
      description: "Like five rounds of sparring"
    },
    {
      fact: '8 × 6',
      answer: '48',
      description: "Like six rounds of training"
    },
    {
      fact: '8 × 7',
      answer: '56',
      description: "Like seven rounds of practice"
    },
    {
      fact: '8 × 8',
      answer: '64',
      description: "Like eight rounds in a championship"
    },
    {
      fact: '8 × 9',
      answer: '72',
      description: "Like nine rounds of endurance"
    },
    {
      fact: '8 × 10',
      answer: '80',
      description: "Like ten rounds in a title fight"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Boxing Multiplication - Answer Key 🥊
          </h1>

          <div className="grid gap-6">
            {multiplicationFacts.map((fact, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-24 h-16 flex items-center justify-center bg-slate-800 rounded-lg text-2xl font-bold text-white">
                    {fact.fact}
                  </div>
                  <div className="text-2xl">=</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-red-500 rounded-lg text-2xl font-bold text-white">
                    {fact.answer}
                  </div>
                </div>
                <p className="text-center text-slate-100">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-slate-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-400">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-slate-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>The 8 times table shows what happens when we count in eights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Think of boxing rounds to help remember the facts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Look for patterns in the answers (8, 16, 24, 32, 40...)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Use boxing rounds to visualize each multiplication fact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxingMultiplicationAnswerKey; 
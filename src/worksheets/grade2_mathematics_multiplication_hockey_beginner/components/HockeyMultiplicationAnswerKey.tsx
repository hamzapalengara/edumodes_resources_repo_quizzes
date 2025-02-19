import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const HockeyMultiplicationAnswerKey: React.FC = () => {
  const multiplicationFacts = [
    {
      fact: '5 × 1',
      answer: '5',
      description: "Like one line of players on the ice"
    },
    {
      fact: '5 × 2',
      answer: '10',
      description: "Like two lines ready to play"
    },
    {
      fact: '5 × 3',
      answer: '15',
      description: "Like three full lines of players"
    },
    {
      fact: '5 × 4',
      answer: '20',
      description: "Like four lines in rotation"
    },
    {
      fact: '5 × 5',
      answer: '25',
      description: "Like a full team roster"
    },
    {
      fact: '5 × 6',
      answer: '30',
      description: "Like six lines of players"
    },
    {
      fact: '5 × 7',
      answer: '35',
      description: "Like seven groups in practice"
    },
    {
      fact: '5 × 8',
      answer: '40',
      description: "Like eight lines scrimmaging"
    },
    {
      fact: '5 × 9',
      answer: '45',
      description: "Like nine groups at training"
    },
    {
      fact: '5 × 10',
      answer: '50',
      description: "Like ten full lines of players"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-slate-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Hockey Multiplication - Answer Key 🏒
          </h1>

          <div className="grid gap-6">
            {multiplicationFacts.map((fact, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-24 h-16 flex items-center justify-center bg-red-800 rounded-lg text-2xl font-bold text-white">
                    {fact.fact}
                  </div>
                  <div className="text-2xl">=</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-slate-200 rounded-lg text-2xl font-bold text-slate-900">
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
            <h2 className="text-xl font-bold mb-4 text-red-400">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-slate-100">
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span>The 5 times table shows what happens when we count in fives</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span>Each answer is like counting complete lines of players</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span>Answers alternate between ending in 5 and 0</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">•</span>
                <span>Think of hockey team formations to help visualize each fact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HockeyMultiplicationAnswerKey; 
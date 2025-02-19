import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const CricketMultiplicationAnswerKey: React.FC = () => {
  const multiplicationFacts = [
    {
      fact: '3 × 1',
      answer: '3',
      description: "Like scoring a boundary of three runs"
    },
    {
      fact: '3 × 2',
      answer: '6',
      description: "Like two boundaries of three runs each"
    },
    {
      fact: '3 × 3',
      answer: '9',
      description: "Like three boundaries of three runs each"
    },
    {
      fact: '3 × 4',
      answer: '12',
      description: "Like four sets of three runs"
    },
    {
      fact: '3 × 5',
      answer: '15',
      description: "Like five boundaries worth three runs"
    },
    {
      fact: '3 × 6',
      answer: '18',
      description: "Like six overs with three runs each"
    },
    {
      fact: '3 × 7',
      answer: '21',
      description: "Like seven groups of three fielders"
    },
    {
      fact: '3 × 8',
      answer: '24',
      description: "Like eight boundaries of three runs"
    },
    {
      fact: '3 × 9',
      answer: '27',
      description: "Like nine sets of three runs"
    },
    {
      fact: '3 × 10',
      answer: '30',
      description: "Like ten overs with three runs each"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-blue-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Cricket Multiplication - Answer Key 🏏
          </h1>

          <div className="grid gap-6">
            {multiplicationFacts.map((fact, index) => (
              <div key={index} className="bg-blue-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-24 h-16 flex items-center justify-center bg-blue-900 rounded-lg text-2xl font-bold">
                    {fact.fact}
                  </div>
                  <div className="text-2xl">=</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-900 rounded-lg text-2xl font-bold">
                    {fact.answer}
                  </div>
                </div>
                <p className="text-center text-blue-100">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>The 3 times table shows what happens when we count in threes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Each answer is like scoring multiple boundaries of three runs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>You can use cricket scoring to help remember the facts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Think of groups of three in cricket to help visualize each fact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketMultiplicationAnswerKey; 
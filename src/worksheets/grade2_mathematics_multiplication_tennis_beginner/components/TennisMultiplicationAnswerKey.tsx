import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TennisMultiplicationAnswerKey: React.FC = () => {
  const multiplicationFacts = [
    {
      fact: '4 × 1',
      answer: '4',
      description: "Like winning one game with four points"
    },
    {
      fact: '4 × 2',
      answer: '8',
      description: "Like winning two games in a set"
    },
    {
      fact: '4 × 3',
      answer: '12',
      description: "Like winning three games in a row"
    },
    {
      fact: '4 × 4',
      answer: '16',
      description: "Like four complete games in tennis"
    },
    {
      fact: '4 × 5',
      answer: '20',
      description: "Like winning five games in a set"
    },
    {
      fact: '4 × 6',
      answer: '24',
      description: "Like winning six games to win a set"
    },
    {
      fact: '4 × 7',
      answer: '28',
      description: "Like seven games in a tiebreak set"
    },
    {
      fact: '4 × 8',
      answer: '32',
      description: "Like eight games in a long set"
    },
    {
      fact: '4 × 9',
      answer: '36',
      description: "Like nine games in an extended set"
    },
    {
      fact: '4 × 10',
      answer: '40',
      description: "Like reaching game point in tennis"
    }
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-green-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Tennis Multiplication - Answer Key 🎾
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
                <span>The 4 times table shows what happens when we count in fours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Each answer is like counting complete tennis games</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>You can use tennis scoring to help remember the facts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300">•</span>
                <span>Think of groups of four in tennis to help visualize each fact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TennisMultiplicationAnswerKey; 
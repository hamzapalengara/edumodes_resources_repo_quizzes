import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpaceAnswerKey: React.FC = () => {
  const problems = [
    {
      id: 1,
      operation: 'multiplication',
      num1: 24,
      num2: 3,
      answer: 72,
      explanation: "Multiply the number of stars in each cluster (24) by the number of clusters (3)"
    },
    {
      id: 2,
      operation: 'addition',
      num1: 458,
      num2: 367,
      answer: 825,
      explanation: "Add the total number of meteorites in both regions"
    },
    {
      id: 3,
      operation: 'subtraction',
      num1: 902,
      num2: 545,
      answer: 357,
      explanation: "Subtract the cleared space debris from the total amount"
    },
    {
      id: 4,
      operation: 'multiplication',
      num1: 16,
      num2: 4,
      answer: 64,
      explanation: "Multiply the satellites per orbit (16) by the number of orbits (4)"
    },
    {
      id: 5,
      operation: 'addition',
      num1: 734,
      num2: 289,
      answer: 1023,
      explanation: "Add the light years between different celestial objects"
    },
    {
      id: 6,
      operation: 'subtraction',
      num1: 856,
      num2: 378,
      answer: 478,
      explanation: "Calculate the remaining distance between planets"
    }
  ];

  const getOperationSymbol = (operation: string): string => {
    switch (operation) {
      case 'addition': return '+';
      case 'subtraction': return '-';
      case 'multiplication': return '×';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-white">
          <h1 className="text-3xl font-bold text-center mb-8">
            Space Math Adventure - Answer Key 🚀
          </h1>

          <div className="grid gap-6">
            {problems.map((problem) => (
              <div key={problem.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Problem {problem.id}</h3>
                  <span className="text-blue-300">Answer: {problem.answer}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <div className="font-mono text-lg space-y-2">
                      <div>{problem.num1}</div>
                      <div>{getOperationSymbol(problem.operation)} {problem.num2}</div>
                      <div className="border-t-2 border-blue-400 pt-1">
                        {problem.answer}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <h4 className="text-blue-300 font-medium mb-2">Explanation:</h4>
                    <p>{problem.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">General Tips:</h2>
            <ul className="list-disc list-inside space-y-2 text-blue-300">
              <li>Break down larger numbers into smaller parts for easier calculation</li>
              <li>Use the standard algorithm for multi-digit operations</li>
              <li>Check your work by estimating if the answer makes sense</li>
              <li>Pay attention to operation signs (+ - ×)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceAnswerKey; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const AthleticsMultiplicationAnswerKey: React.FC = () => {
  const multiplicationFacts = [
    {
      fact: '9 × 1',
      answer: '9',
      description: "Like one lap around the track"
    },
    {
      fact: '9 × 2',
      answer: '18',
      description: "Like two sprints completed"
    },
    {
      fact: '9 × 3',
      answer: '27',
      description: "Like three relay races"
    },
    {
      fact: '9 × 4',
      answer: '36',
      description: "Like four hurdle jumps"
    },
    {
      fact: '9 × 5',
      answer: '45',
      description: "Like five long jumps"
    },
    {
      fact: '9 × 6',
      answer: '54',
      description: "Like six high jumps"
    },
    {
      fact: '9 × 7',
      answer: '63',
      description: "Like seven javelin throws"
    },
    {
      fact: '9 × 8',
      answer: '72',
      description: "Like eight pole vaults"
    },
    {
      fact: '9 × 9',
      answer: '81',
      description: "Like nine discus throws"
    },
    {
      fact: '9 × 10',
      answer: '90',
      description: "Like ten medal ceremonies"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="bg-blue-800 rounded-lg p-4 md:p-6 shadow-lg text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Athletics Multiplication - Answer Key 🏃
          </h1>

          <div className="grid gap-6">
            {multiplicationFacts.map((fact, index) => (
              <div key={index} className="bg-blue-700 rounded-lg p-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-24 h-16 flex items-center justify-center bg-blue-800 rounded-lg text-2xl font-bold text-white">
                    {fact.fact}
                  </div>
                  <div className="text-2xl">=</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-orange-500 rounded-lg text-2xl font-bold text-white">
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
            <h2 className="text-xl font-bold mb-4 text-yellow-400">
              Key Points to Remember:
            </h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>The 9 times table shows what happens when we count in nines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Think of athletic events to help remember the facts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Look for patterns in the answers (9, 18, 27, 36, 45...)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">•</span>
                <span>Use track laps to visualize each multiplication fact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleticsMultiplicationAnswerKey; 
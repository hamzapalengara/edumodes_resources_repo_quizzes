import React from 'react';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const AdditionAnswerKey: React.FC = () => {
  const problems = [
    { num1: 12, num2: 15 },
    { num1: 24, num2: 38 },
    { num1: 45, num2: 27 },
    { num1: 33, num2: 49 },
    { num1: 56, num2: 17 }
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <AnswerKeyHeader />
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
              Two-Digit Addition Practice - Answers
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map(({ num1, num2 }, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-right font-mono text-lg mb-2">
                    <div>{num1}</div>
                    <div className="border-b border-gray-400">+ {num2}</div>
                    <div className="mt-2 text-green-600 font-bold">{num1 + num2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default AdditionAnswerKey; 
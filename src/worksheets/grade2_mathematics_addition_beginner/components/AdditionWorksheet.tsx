import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const AdditionWorksheet: React.FC = () => {
  const [score] = useState(0);
  const [totalQuestions] = useState(10);

  const problems = [
    { num1: 12, num2: 15 },
    { num1: 24, num2: 38 },
    { num1: 45, num2: 27 },
    { num1: 33, num2: 49 },
    { num1: 56, num2: 17 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <WorksheetHeader>
        <div className="text-sm text-gray-600 px-4">
          Score: {score}/{totalQuestions}
        </div>
      </WorksheetHeader>
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
              Two-Digit Addition Practice
            </h1>
            
            {/* Student info section */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6">
              <div className="text-sm text-gray-600">
                Student Name: _____________________
              </div>
              <div className="text-sm text-gray-600">
                Date: _____________________
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h2 className="font-bold text-gray-800 mb-2">Instructions:</h2>
              <p className="text-gray-600">
                Solve each addition problem. Show your work in the space provided.
                Write your answers clearly and check your work.
              </p>
            </div>

            {/* Problems */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map(({ num1, num2 }, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-right font-mono text-lg mb-2">
                    <div>{num1}</div>
                    <div className="border-b border-gray-400">+ {num2}</div>
                    <div className="mt-2">_____</div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    Work space:
                    <div className="h-20 border border-dashed border-gray-300 rounded mt-1"></div>
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

export default AdditionWorksheet; 
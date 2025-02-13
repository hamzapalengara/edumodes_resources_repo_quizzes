import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TABLE_CELLS = [
  { num1: '2', num2: '1', answer: '2' },
  { num1: '2', num2: '2', answer: '4' },
  { num1: '2', num2: '3', answer: '6' },
  { num1: '2', num2: '4', answer: '8' },
  { num1: '2', num2: '5', answer: '10' },
  { num1: '2', num2: '6', answer: '12' },
  { num1: '2', num2: '7', answer: '14' },
  { num1: '2', num2: '8', answer: '16' },
  { num1: '2', num2: '9', answer: '18' },
  { num1: '2', num2: '10', answer: '20' },
];

const MultiplicationTable2AnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-8">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-8">
          <h1 className="text-2xl font-bold text-center text-green-700 mb-4">
            Answer Key: Multiplication Table of 2
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Complete Table */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold text-green-700 mb-4">
              Complete Multiplication Table
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {TABLE_CELLS.map((cell, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-4 rounded-lg flex items-center justify-center gap-3 text-xl"
                >
                  <span className="font-bold text-green-700">{cell.num1}</span>
                  <span className="text-green-600">×</span>
                  <span className="font-bold text-green-700">{cell.num2}</span>
                  <span className="text-green-600">=</span>
                  <span className="font-bold text-green-700 bg-green-100 px-4 py-2 rounded-lg">
                    {cell.answer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Explanations */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold text-green-700 mb-4">
              Explanations
            </h2>
            <div className="space-y-4">
              {TABLE_CELLS.map((cell, index) => (
                <div key={index} className="p-3 bg-green-50 rounded-lg">
                  <p className="text-green-700">
                    <span className="font-bold">{cell.num1} × {cell.num2} = {cell.answer}</span>
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    This means adding {cell.num1} to itself {cell.num2} times:
                  </p>
                  <p className="text-green-600 font-mono mt-1">
                    {Array.from({ length: parseInt(cell.num2) })
                      .fill(cell.num1)
                      .join(' + ')} = {cell.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pattern Recognition */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold text-green-700 mb-4">
              Pattern Recognition
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                All answers in the 2 times table are even numbers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                Each answer increases by 2 as we multiply by the next number
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                2 × 5 = 10 is a helpful reference point (half of 20)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">•</span>
                The last digit pattern repeats: 2, 4, 6, 8, 0, 2, 4, 6, 8, 0
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable2AnswerKey; 
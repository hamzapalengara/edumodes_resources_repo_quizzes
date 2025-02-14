import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TABLE_CELLS = [
  { num1: '8', num2: '1', answer: '8', explanation: 'One group of eight flags' },
  { num1: '8', num2: '2', answer: '16', explanation: 'Two groups of eight flags' },
  { num1: '8', num2: '3', answer: '24', explanation: 'Three groups of eight flags' },
  { num1: '8', num2: '4', answer: '32', explanation: 'Four groups of eight flags' },
  { num1: '8', num2: '5', answer: '40', explanation: 'Five groups of eight flags' },
  { num1: '8', num2: '6', answer: '48', explanation: 'Six groups of eight flags' },
  { num1: '8', num2: '7', answer: '56', explanation: 'Seven groups of eight flags' },
  { num1: '8', num2: '8', answer: '64', explanation: 'Eight groups of eight flags' },
  { num1: '8', num2: '9', answer: '72', explanation: 'Nine groups of eight flags' },
  { num1: '8', num2: '10', answer: '80', explanation: 'Ten groups of eight flags' },
];

const VISUAL_AIDS: Record<string, string[]> = {
  '8': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '16': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '24': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '32': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '40': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '48': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '56': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '64': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '72': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️'],
  '80': ['⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '|', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️', '⛳️']
};

const MultiplicationTable8AnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-green-700 mb-4">
            Multiplication Table of 8 - Answer Key
          </h1>
          <p className="text-green-600 mb-4">
            Each multiplication fact is shown with a visual representation using park flags.
            The divider (|) separates each group of eight to make counting easier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TABLE_CELLS.map((cell, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center gap-3 text-xl mb-3">
                <span className="font-bold text-green-700">{cell.num1}</span>
                <span className="text-green-600">×</span>
                <span className="font-bold text-green-700">{cell.num2}</span>
                <span className="text-green-600">=</span>
                <span className="font-bold text-green-700">{cell.answer}</span>
              </div>

              <p className="text-center text-green-600 mb-3">
                {cell.explanation}
              </p>

              <div className="bg-green-50 p-2 rounded-lg overflow-x-auto">
                <div className="flex flex-wrap gap-1 justify-center min-w-[200px]">
                  {VISUAL_AIDS[cell.answer].map((item, i) => (
                    <span
                      key={i}
                      className={item === '|' ? 'text-green-300 mx-1' : ''}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable8AnswerKey; 
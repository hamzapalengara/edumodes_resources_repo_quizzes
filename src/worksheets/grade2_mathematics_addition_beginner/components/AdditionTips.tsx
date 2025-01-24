import React from 'react';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const AdditionTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-white w-full">
      <TipsHeader />
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-700 mb-4">How to Add Two-Digit Numbers</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                Line up the numbers vertically, aligning the ones (right) digits
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                Start with the ones column and add those digits first
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                If the sum in the ones column is 10 or more, carry over to the tens column
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                Add the tens column, including any number carried over
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">5.</span>
                Write your final answer with the digits properly aligned
              </li>
            </ul>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default AdditionTips; 
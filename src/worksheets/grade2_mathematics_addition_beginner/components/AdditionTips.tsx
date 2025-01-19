import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const AdditionTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <WorksheetHeader>
        <div className="text-sm text-gray-600 px-4">
          Tips & Guidance
        </div>
      </WorksheetHeader>
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
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
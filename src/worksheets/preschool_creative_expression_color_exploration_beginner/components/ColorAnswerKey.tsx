import React from 'react';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const ColorAnswerKey: React.FC = () => {
  const colors = [
    { color: 'Red', name: 'red', bgClass: 'bg-red-500', borderClass: 'border-red-600' },
    { color: 'Blue', name: 'blue', bgClass: 'bg-blue-500', borderClass: 'border-blue-600' },
    { color: 'Yellow', name: 'yellow', bgClass: 'bg-yellow-400', borderClass: 'border-yellow-500' },
    { color: 'Green', name: 'green', bgClass: 'bg-green-500', borderClass: 'border-green-600' },
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <AnswerKeyHeader />
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
              Color Recognition Guide
            </h1>

            <div className="space-y-6">
              {colors.map((color) => (
                <div key={color.name} className="flex items-center space-x-4">
                  <div 
                    className={`w-16 h-16 ${color.bgClass} border-4 ${color.borderClass} rounded-lg`}
                    aria-label={`${color.color} color sample`}
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">{color.color}</h2>
                    <p className="text-gray-600">
                      Pronunciation: "{color.color.toLowerCase()}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h2 className="font-bold text-gray-800 mb-2">Teaching Notes:</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Encourage clear pronunciation of color names</li>
                <li>• Use real-world examples of each color</li>
                <li>• Practice color recognition in different contexts</li>
                <li>• Make the learning experience playful and interactive</li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ColorAnswerKey; 
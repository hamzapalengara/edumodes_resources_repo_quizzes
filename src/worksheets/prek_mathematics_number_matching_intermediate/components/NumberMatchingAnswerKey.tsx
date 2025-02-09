import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const renderAnimals = (count: number, emoji: string) => {
  return Array(count).fill(emoji).join(' ');
};

const OCEAN_ANIMALS = ['🐠', '🐋', '🐟', '🦈', '🐡'];

const NumberMatchingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-blue-800 mb-6">Answer Key: Ocean Numbers Matching</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Number-Animal Matches</h2>
            <div className="space-y-4">
              {[6, 7, 8, 9, 10].map((num, index) => (
                <div key={num} className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm mr-4">
                    <span className="text-2xl font-bold text-blue-800">{num}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl mb-2">
                      {renderAnimals(num, OCEAN_ANIMALS[index % OCEAN_ANIMALS.length])}
                    </div>
                    <p className="text-gray-600">
                      Count {num} {OCEAN_ANIMALS[index % OCEAN_ANIMALS.length]} ocean animals
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Learning Points</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📚</span>
                <span>Each number (6-10) corresponds to a specific quantity of ocean animals</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎯</span>
                <span>Matching colors appear when correct pairs are found</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔢</span>
                <span>Practice counting objects one by one to find the total</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">👥</span>
                <span>Guide students to count systematically from left to right</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎓</span>
                <span>Reinforce number recognition alongside counting skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🌟</span>
                <span>Celebrate each successful match to build confidence</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberMatchingAnswerKey; 
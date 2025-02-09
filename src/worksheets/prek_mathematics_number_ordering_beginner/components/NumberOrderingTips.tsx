import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberOrderingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-purple-800 mb-6">Tips for Number Ordering Game</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">For Students</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔍</span>
                <span>Look for the smallest number (1) first</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">👆</span>
                <span>Drag each number to its correct spot - they'll snap into place!</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎯</span>
                <span>Numbers will stick to the boxes when you get close enough</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔄</span>
                <span>If a number bounces back, try placing it in a different box</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">For Teachers and Parents</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">📝</span>
                <span>Encourage counting out loud while arranging numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎮</span>
                <span>Practice counting with physical objects before playing</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🗣️</span>
                <span>Ask which number comes first, second, and third</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🌟</span>
                <span>Celebrate each correct arrangement to build confidence</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Learning Extensions</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔢</span>
                <span>Practice counting backward from 3 to 1</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">➕</span>
                <span>Use fingers to show each number as you count</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎨</span>
                <span>Draw groups of objects to match each number</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberOrderingTips; 
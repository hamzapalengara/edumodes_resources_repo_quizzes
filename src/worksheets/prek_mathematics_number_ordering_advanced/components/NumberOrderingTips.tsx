import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberOrderingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-emerald-800 mb-6">Tips for Number Ordering Game</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">For Students</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🔍</span>
                <span>Start by finding number 1, then look for 2, 3, 4, and 5</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">👆</span>
                <span>Drag each number to its correct spot - they'll snap into place!</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🎯</span>
                <span>Watch for the green box when you place a number correctly</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🔄</span>
                <span>Each level has a different arrangement - stay focused!</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">For Teachers and Parents</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">📝</span>
                <span>Encourage counting from 1 to 5 before starting each level</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🎮</span>
                <span>Help identify patterns in number sequences up to 5</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🗣️</span>
                <span>Ask which number comes before and after each number</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🌟</span>
                <span>Celebrate progress through each level to build confidence</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">Learning Extensions</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🔢</span>
                <span>Practice counting backward from 5 to 1</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">➕</span>
                <span>Create groups of objects matching each number</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">🎨</span>
                <span>Draw pictures showing different ways to arrange five items</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberOrderingTips; 
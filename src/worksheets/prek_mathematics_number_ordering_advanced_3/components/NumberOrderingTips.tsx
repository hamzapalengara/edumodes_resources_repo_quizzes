import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberOrderingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-indigo-800 mb-6">Tips for Number Ordering Game</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">For Students</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🔍</span>
                <span>Start with the smallest number (10) and work your way up</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">👆</span>
                <span>Each level adds more numbers - take your time to think!</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🎯</span>
                <span>Watch for the green box when you place a number correctly</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🔄</span>
                <span>If you make a mistake, the number will bounce back - try again!</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">For Teachers and Parents</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">📝</span>
                <span>Help children understand that teen numbers start with 1 (10, 11, 12...)</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🎮</span>
                <span>Practice counting from 10 to 15 before starting each level</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🗣️</span>
                <span>Ask which number comes before and after each teen number</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🌟</span>
                <span>Celebrate progress as they master larger number sequences</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Learning Extensions</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🔢</span>
                <span>Practice counting backward from 15 to 10</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">➕</span>
                <span>Create groups of objects to represent teen numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🎨</span>
                <span>Write teen numbers and practice number formation</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🎲</span>
                <span>Play "What comes next?" with numbers 10-15</span>
              </li>
            </ul>
          </section>

          <div className="mt-8 bg-indigo-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
              Progressive Learning Note 📚
            </h3>
            <p className="text-gray-700">
              This worksheet introduces teen numbers gradually:
              <br />- Level 1: Numbers 10-13
              <br />- Level 2: Numbers 10-14
              <br />- Level 3: Numbers 10-15
              <br />
              This step-by-step approach helps build confidence with larger numbers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberOrderingTips; 
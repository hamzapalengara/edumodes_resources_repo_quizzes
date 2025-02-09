import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberOrderingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-teal-800 mb-6">Tips for Number Ordering Game</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-teal-700 mb-4">For Students</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🔍</span>
                <span>Start with fifteen (15) and work your way up to twenty (20)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">👆</span>
                <span>Each level adds more numbers - take your time to think!</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🎯</span>
                <span>Watch for the green box when you place a number correctly</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🔄</span>
                <span>If you make a mistake, the number will bounce back - try again!</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-teal-700 mb-4">For Teachers and Parents</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">📝</span>
                <span>Help children understand that teen numbers are made up of 10 plus more</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🎮</span>
                <span>Practice counting from 15 to 20 before starting each level</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🗣️</span>
                <span>Ask which number comes before and after each teen number</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🌟</span>
                <span>Celebrate progress as they master larger teen numbers</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-teal-700 mb-4">Learning Extensions</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🔢</span>
                <span>Practice counting backward from 20 to 15</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">➕</span>
                <span>Create groups of objects to represent teen numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🎨</span>
                <span>Write teen numbers and practice number formation</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">🎲</span>
                <span>Play "What comes next?" with numbers 15-20</span>
              </li>
            </ul>
          </section>

          <div className="mt-8 bg-teal-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-teal-700 mb-2">
              Progressive Learning Note 📚
            </h3>
            <p className="text-gray-700">
              This worksheet introduces higher teen numbers gradually:
              <br />- Level 1: Numbers 15-17
              <br />- Level 2: Numbers 15-18
              <br />- Level 3: Numbers 15-20
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
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberMatchingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-blue-800 mb-6">Tips for Ocean Numbers Matching Game</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">For Students</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔍</span>
                <span>Count the ocean animals one by one, pointing to each as you count</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">👆</span>
                <span>Try saying the numbers out loud as you see them</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎯</span>
                <span>Look for the matching color when you make a correct pair</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔄</span>
                <span>If you make a mistake, try again! Practice makes perfect</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">For Teachers and Parents</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📝</span>
                <span>Encourage counting out loud and using fingers to keep track</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎮</span>
                <span>Start with fewer cards if needed and gradually increase difficulty</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🗣️</span>
                <span>Ask students to explain their matching strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🌊</span>
                <span>Use the ocean theme to discuss marine life while practicing numbers</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Learning Extensions</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔢</span>
                <span>Practice counting backwards from 10 to 6</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">➕</span>
                <span>Compare quantities: Which group has more? Which has fewer?</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎨</span>
                <span>Draw your own ocean animals and practice grouping them</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberMatchingTips; 
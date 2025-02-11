import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordOppositesTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-orange-300 text-center mb-2">
            Food & Senses Learning Tips
          </h1>
          <p className="text-orange-200 text-center">
            Fun ways to learn and remember food opposites using your senses
          </p>
        </div>

        {/* Learning Strategies */}
        <div className="grid gap-0.5 md:gap-4">
          {/* Taste Adventures */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-orange-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">👅</span>
              Taste Adventures
            </h2>
            <ul className="space-y-2 text-orange-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">🍯</span>
                <span>Try tasting sweet honey and sour lemon (with adult supervision)</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🌶️</span>
                <span>Compare bland rice with spicy sauce (remember to start mild!)</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🍊</span>
                <span>Experience juicy oranges versus dry crackers</span>
              </li>
            </ul>
          </div>

          {/* Touch & Temperature */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-orange-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">🤚</span>
              Touch & Temperature
            </h2>
            <ul className="space-y-2 text-orange-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">🥜</span>
                <span>Feel the difference between hard nuts and soft bread</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🍦</span>
                <span>Notice hot soup versus cold ice cream (careful with hot foods!)</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🥤</span>
                <span>Compare thick smoothies with thin water</span>
              </li>
            </ul>
          </div>

          {/* Kitchen Science */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-orange-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">🧪</span>
              Kitchen Science
            </h2>
            <div className="grid gap-2">
              <div className="bg-orange-900/50 rounded-lg p-3">
                <h3 className="font-bold text-orange-300 mb-2">Fresh vs. Stale Experiment 🥖</h3>
                <p className="text-orange-100">Compare fresh bread with bread left out (with adult help). Notice the changes!</p>
              </div>
              <div className="bg-orange-900/50 rounded-lg p-3">
                <h3 className="font-bold text-orange-300 mb-2">Strength Test ☕</h3>
                <p className="text-orange-100">Mix different amounts of water with juice to make strong and weak drinks.</p>
              </div>
              <div className="bg-orange-900/50 rounded-lg p-3">
                <h3 className="font-bold text-orange-300 mb-2">Health Detective 🔍</h3>
                <p className="text-orange-100">Sort foods into healthy and unhealthy groups. Discuss why with family!</p>
              </div>
            </div>
          </div>

          {/* Fun Activities */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4">
            <h2 className="text-xl font-bold text-orange-300 mb-4 flex items-center">
              <span className="text-2xl mr-2">🎮</span>
              Fun Learning Games
            </h2>
            <ul className="space-y-2 text-orange-100">
              <li className="flex items-start">
                <span className="text-lg mr-2">📝</span>
                <span>Draw pictures of opposite food pairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🎭</span>
                <span>Act out reactions to different tastes</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">📸</span>
                <span>Make a photo diary of opposite foods</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2">🎨</span>
                <span>Create a taste map with opposite flavors</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Safety Note */}
        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-4 text-center">
          <p className="text-orange-300 font-bold mb-2">
            Remember! 🚸
          </p>
          <p className="text-orange-100">
            Always do food activities with adult supervision and be careful with hot foods and new tastes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesTips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-green-800 mb-6">Tips for Jungle Word Safari</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">For Young Explorers</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🔍</span>
                <span>Look at the animal picture to help you guess the word</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">💡</span>
                <span>Use the hint button if you need extra help</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">👆</span>
                <span>Click each letter to place it in the boxes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🔄</span>
                <span>If you make a mistake, press Clear and try again</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">⭐</span>
                <span>Each correct animal word gives you 10 points!</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Helpful Strategies</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🎯</span>
                <span>Try to find the first letter of the animal's name</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🔤</span>
                <span>Sound out the letters as you place them</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🧩</span>
                <span>Look for common letter patterns you know</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🌟</span>
                <span>Think about what makes each animal special</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Fun Facts About Our Animals</h2>
            <div className="grid gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-600 mb-2">Level 1 Animals</h3>
                <ul className="space-y-2">
                  <li>🦁 Lions are called the "King of the Jungle"</li>
                  <li>🐻 Bears love to eat honey and fish</li>
                  <li>🐺 Wolves live and hunt in packs</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-600 mb-2">Level 2 Animals</h3>
                <ul className="space-y-2">
                  <li>🐯 Tigers have beautiful orange and black stripes</li>
                  <li>🐍 Snakes can move without legs</li>
                  <li>🦅 Eagles can see very far away</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-600 mb-2">Level 3 Animals</h3>
                <ul className="space-y-2">
                  <li>🦓 Zebras have unique stripe patterns</li>
                  <li>🦛 Hippos spend most of their time in water</li>
                  <li>🦏 Rhinos have tough, armor-like skin</li>
                  <li>🐼 Pandas eat bamboo almost all day long</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-100">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">
              Remember! 🌟
            </h3>
            <p className="text-yellow-800">
              Take your time and have fun learning about these amazing animals! 
              If you get stuck, use the hints and try to remember what makes each animal special.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleTips; 
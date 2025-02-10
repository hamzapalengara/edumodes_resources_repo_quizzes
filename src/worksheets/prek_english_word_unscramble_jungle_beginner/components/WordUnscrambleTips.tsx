import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-md border-y-2 border-green-100">
          <h1 className="text-2xl font-bold text-green-700 py-4 text-center border-b border-green-100">
            Tips for Jungle Word Safari
          </h1>
          
          <section className="py-6 border-b border-green-100">
            <h2 className="text-xl font-semibold text-green-700 mb-4 px-4">For Young Explorers</h2>
            <ul className="space-y-3 px-4">
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

          <section className="py-6 border-b border-green-100">
            <h2 className="text-xl font-semibold text-green-700 mb-4 px-4">Helpful Strategies</h2>
            <ul className="space-y-3 px-4">
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
                <span>Think about animals you've seen in books or at the zoo</span>
              </li>
            </ul>
          </section>

          <section className="py-6">
            <h2 className="text-xl font-semibold text-green-700 mb-4 px-4">Fun Facts About Our Animals</h2>
            <div className="space-y-4">
              <div className="py-4 border-y border-green-100">
                <h3 className="font-semibold text-green-600 mb-2 px-4">Level 1 Animals</h3>
                <ul className="space-y-2 px-4">
                  <li>🦁 Lions are called the "King of the Jungle"</li>
                  <li>🐻 Bears love to eat honey and fish</li>
                  <li>🐺 Wolves live and hunt in packs</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-green-100">
                <h3 className="font-semibold text-green-600 mb-2 px-4">Level 2 Animals</h3>
                <ul className="space-y-2 px-4">
                  <li>🐯 Tigers have beautiful orange and black stripes</li>
                  <li>🐍 Snakes can move without legs</li>
                  <li>🦅 Eagles can see very far away</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-green-100">
                <h3 className="font-semibold text-green-600 mb-2 px-4">Level 3 Animals</h3>
                <ul className="space-y-2 px-4">
                  <li>🦓 Zebras have unique stripe patterns</li>
                  <li>🦛 Hippos spend most of their time in water</li>
                  <li>🦏 Rhinos have tough, armor-like skin</li>
                  <li>🐼 Pandas eat bamboo almost all day long</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="py-6 border-t border-green-100">
            <div className="px-4">
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
    </div>
  );
};

export default WordUnscrambleTips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-md border-y-2 border-pink-100">
          <h1 className="text-2xl font-bold text-pink-600 py-4 text-center border-b border-pink-100">
            Tips for Fruity Word Scramble
          </h1>
          
          <section className="py-6 border-b border-pink-100">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 px-4">For Young Fruit Explorers</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🔍</span>
                <span>Look at the fruit picture to help you guess the word</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">💡</span>
                <span>Use the hint button if you need extra help</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">👆</span>
                <span>Click each letter to place it in the boxes</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🔄</span>
                <span>If you make a mistake, press Clear and try again</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">⭐</span>
                <span>Each correct fruit word gives you 10 points!</span>
              </li>
            </ul>
          </section>

          <section className="py-6 border-b border-pink-100">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 px-4">Helpful Strategies</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🎯</span>
                <span>Try to find the first letter of the fruit's name</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🔤</span>
                <span>Sound out the letters as you place them</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🧩</span>
                <span>Look for common letter patterns you know</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🌟</span>
                <span>Think about fruits you've seen at home or in stores</span>
              </li>
            </ul>
          </section>

          <section className="py-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 px-4">Fun Facts About Our Fruits</h2>
            <div className="space-y-4">
              <div className="py-4 border-y border-pink-100">
                <h3 className="font-semibold text-pink-600 mb-2 px-4">Level 1 Fruits</h3>
                <ul className="space-y-2 px-4">
                  <li>🍐 Pears are rich in fiber and good for your tummy</li>
                  <li>🫐 Plums are sweet and help keep you healthy</li>
                  <li>🥝 Kiwis have more vitamin C than oranges</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-pink-100">
                <h3 className="font-semibold text-pink-600 mb-2 px-4">Level 2 Fruits</h3>
                <ul className="space-y-2 px-4">
                  <li>🍎 Apples float in water because they're 25% air</li>
                  <li>🥭 Mangoes are called the "King of Fruits"</li>
                  <li>🍑 Peaches belong to the rose family</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-pink-100">
                <h3 className="font-semibold text-pink-600 mb-2 px-4">Level 3 Fruits</h3>
                <ul className="space-y-2 px-4">
                  <li>🍊 Oranges were originally green, not orange</li>
                  <li>🍌 Bananas are berries, but strawberries aren't</li>
                  <li>🍇 Grapes can make raisins when dried</li>
                  <li>🍋 Lemons can power a small light bulb</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="py-6 border-t border-pink-100">
            <div className="px-4">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">
                Remember! 🌟
              </h3>
              <p className="text-orange-800">
                Fruits are not just delicious - they're also super healthy for you! 
                While you learn to spell their names, think about which ones are your favorites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleTips; 
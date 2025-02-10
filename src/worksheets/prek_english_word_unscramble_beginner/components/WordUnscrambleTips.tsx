import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-md border-y-2 border-blue-100">
          <h1 className="text-2xl font-bold text-purple-600 py-4 text-center border-b border-blue-100">
            Tips for Word Unscramble Fun
          </h1>
          
          <section className="py-6 border-b border-blue-100">
            <h2 className="text-xl font-semibold text-purple-600 mb-4 px-4">For Young Learners</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔍</span>
                <span>Look at the picture to help you guess the word</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">👆</span>
                <span>Click each letter to place it in the boxes</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔄</span>
                <span>If you make a mistake, press Clear and try again</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">⭐</span>
                <span>Each correct word gives you 10 points!</span>
              </li>
            </ul>
          </section>

          <section className="py-6 border-b border-blue-100">
            <h2 className="text-xl font-semibold text-purple-600 mb-4 px-4">Helpful Strategies</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎯</span>
                <span>Try to find the first letter of the word</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔤</span>
                <span>Sound out the letters as you place them</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🧩</span>
                <span>Look for common letter patterns you know</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🌟</span>
                <span>Think about words you see every day</span>
              </li>
            </ul>
          </section>

          <section className="py-6">
            <h2 className="text-xl font-semibold text-purple-600 mb-4 px-4">Fun Facts About Our Words</h2>
            <div className="space-y-4">
              <div className="py-4 border-y border-blue-100">
                <h3 className="font-semibold text-purple-600 mb-2 px-4">Level 1 Words</h3>
                <ul className="space-y-2 px-4">
                  <li>🐱 CAT - Your furry friend at home</li>
                  <li>🐶 DOG - Man's best friend</li>
                  <li>☀️ SUN - Brightens up our day</li>
                  <li>🎩 HAT - Keeps your head warm</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-blue-100">
                <h3 className="font-semibold text-purple-600 mb-2 px-4">Level 2 Words</h3>
                <ul className="space-y-2 px-4">
                  <li>🛏️ BED - Where you sleep at night</li>
                  <li>👜 BAG - Carries your things</li>
                  <li>🐠 FISH - Swims in water</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-blue-100">
                <h3 className="font-semibold text-purple-600 mb-2 px-4">Level 3 Words</h3>
                <ul className="space-y-2 px-4">
                  <li>⭐ STAR - Twinkles in the night sky</li>
                  <li>🎂 CAKE - Sweet birthday treat</li>
                  <li>🌳 TREE - Gives us shade and oxygen</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="py-6 border-t border-blue-100">
            <div className="px-4">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                Remember! 🌟
              </h3>
              <p className="text-purple-800">
                Take your time and have fun learning new words! 
                If you get stuck, look at the picture and try to remember what it shows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleTips; 
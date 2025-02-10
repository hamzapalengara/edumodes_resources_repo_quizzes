import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-md border-y-2 border-pink-100">
          <h1 className="text-2xl font-bold text-pink-600 py-4 text-center border-b border-pink-100">
            Tips for Flower Word Garden
          </h1>
          
          <section className="py-6 border-b border-pink-100">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 px-4">For Young Gardeners</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🔍</span>
                <span>Look at the flower picture to help you guess the word</span>
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
                <span>Each correct flower word gives you 10 points!</span>
              </li>
            </ul>
          </section>

          <section className="py-6 border-b border-pink-100">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 px-4">Helpful Strategies</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🎯</span>
                <span>Try to find the first letter of the flower's name</span>
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
                <span>Think about flowers you've seen in gardens or parks</span>
              </li>
            </ul>
          </section>

          <section className="py-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 px-4">Fun Facts About Our Flowers</h2>
            <div className="space-y-4">
              <div className="py-4 border-y border-pink-100">
                <h3 className="font-semibold text-pink-600 mb-2 px-4">Level 1 Flowers</h3>
                <ul className="space-y-2 px-4">
                  <li>🌹 Roses come in many different colors</li>
                  <li>🌸 Lilies are often used in beautiful bouquets</li>
                  <li>🌺 Iris flowers are named after the rainbow goddess</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-pink-100">
                <h3 className="font-semibold text-pink-600 mb-2 px-4">Level 2 Flowers</h3>
                <ul className="space-y-2 px-4">
                  <li>🌼 Daisies close their petals at night</li>
                  <li>🌷 Tulips were once more valuable than gold</li>
                  <li>💮 Lotus flowers grow in ponds and lakes</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-pink-100">
                <h3 className="font-semibold text-pink-600 mb-2 px-4">Level 3 Flowers</h3>
                <ul className="space-y-2 px-4">
                  <li>🌺 Orchids can live for up to 100 years</li>
                  <li>🌸 Poppies can have up to 60 petals</li>
                  <li>💜 Violets can be made into sweet candy</li>
                  <li>🌸 Dahlias have been growing for millions of years</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="py-6 border-t border-pink-100">
            <div className="px-4">
              <h3 className="text-lg font-semibold text-rose-700 mb-2">
                Remember! 🌟
              </h3>
              <p className="text-rose-800">
                Take your time and enjoy learning about these beautiful flowers! 
                If you get stuck, use the hints and try to remember what makes each flower special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleTips; 
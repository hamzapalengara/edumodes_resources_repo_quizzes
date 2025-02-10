import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordUnscrambleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-md border-y-2 border-blue-100">
          <h1 className="text-2xl font-bold text-blue-600 py-4 text-center border-b border-blue-100">
            Tips for Action Words Fun
          </h1>
          
          <section className="py-6 border-b border-blue-100">
            <h2 className="text-xl font-semibold text-blue-600 mb-4 px-4">For Young Learners</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔍</span>
                <span>Look at the action picture to help you guess the word</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">💡</span>
                <span>Use the hint button if you need extra help</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">👆</span>
                <span>Click each letter to hear its sound</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔄</span>
                <span>If you make a mistake, press Clear and try again</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">⭐</span>
                <span>Each correct action word gives you 10 points!</span>
              </li>
            </ul>
          </section>

          <section className="py-6 border-b border-blue-100">
            <h2 className="text-xl font-semibold text-blue-600 mb-4 px-4">Helpful Strategies</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎯</span>
                <span>Try to act out the action while solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔤</span>
                <span>Sound out the letters as you place them</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🧩</span>
                <span>Look for common letter patterns you know</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🌟</span>
                <span>Think about actions you do every day</span>
              </li>
            </ul>
          </section>

          <section className="py-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4 px-4">Fun Facts About Our Actions</h2>
            <div className="space-y-4">
              <div className="py-4 border-y border-blue-100">
                <h3 className="font-semibold text-blue-600 mb-2 px-4">Level 1 Actions</h3>
                <ul className="space-y-2 px-4">
                  <li>🏃 RUN - Your heart beats faster when you run</li>
                  <li>⬆️ JUMP - Kangaroos can jump very high</li>
                  <li>🚶 WALK - Walking is good for your health</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-blue-100">
                <h3 className="font-semibold text-blue-600 mb-2 px-4">Level 2 Actions</h3>
                <ul className="space-y-2 px-4">
                  <li>💃 DANCE - Dancing makes you happy</li>
                  <li>😴 SLEEP - Everyone needs sleep to grow</li>
                  <li>😊 SMILE - Smiling is contagious</li>
                </ul>
              </div>
              
              <div className="py-4 border-b border-blue-100">
                <h3 className="font-semibold text-blue-600 mb-2 px-4">Level 3 Actions</h3>
                <ul className="space-y-2 px-4">
                  <li>😂 LAUGH - Laughing is good for you</li>
                  <li>✍️ WRITE - Writing helps you remember things</li>
                  <li>👏 CLAP - Clapping shows you're happy</li>
                  <li>🎤 SING - Birds love to sing too</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="py-6 border-t border-blue-100">
            <div className="px-4">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Remember! 🌟
              </h3>
              <p className="text-indigo-800">
                Have fun learning these action words! Try to use them in sentences and act them out while you learn.
                If you get stuck, use the hints and remember to listen to the letter sounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleTips; 
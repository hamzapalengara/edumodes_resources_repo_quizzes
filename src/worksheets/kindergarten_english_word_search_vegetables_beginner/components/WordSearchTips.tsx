import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-lime-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* How to Play */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            How to Play 🎮
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="font-bold">1.</span>
                <p>Look at the list of healthy vegetables you need to find.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold">2.</span>
                <p>Words can be found going across (→) or down (↓) in the grid.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold">3.</span>
                <p>Touch and drag your finger over the letters to select a word.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold">4.</span>
                <p>When you find a word, it will light up and show a vegetable emoji! 🎉</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Helpful Strategies */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Helpful Strategies 💡
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span>•</span>
                <p>Start with short words like "YAM" and "PEAS" - they're easier to spot!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <p>Look for the first letter of each word in the grid.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <p>Use your finger to follow each row and column carefully.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <p>Take your time - it's not a race! 🐢</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Fun Vegetable Facts */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Fun Vegetable Facts 🥬
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span>🥕</span>
                <p>Carrots help you see better, especially at night!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🥔</span>
                <p>Potatoes can be cooked in many ways: mashed, baked, or made into fries!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🍅</span>
                <p>Tomatoes are actually fruits, but we use them as vegetables!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🥦</span>
                <p>Broccoli looks like tiny trees and is full of vitamins!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🥒</span>
                <p>Cucumbers are made of mostly water and help keep you cool!</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Reminders */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Remember 🌟
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span>🥗</span>
                <p>Eating vegetables helps you grow strong and healthy!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌈</span>
                <p>Try to eat vegetables of different colors every day!</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>🎉</span>
                <p>Celebrate each word you find - you're doing great!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 
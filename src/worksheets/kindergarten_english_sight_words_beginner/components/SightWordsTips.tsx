import React from 'react';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const SightWordsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TipsHeader />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
            Tips for Word Search Success
          </h1>

          {/* General Strategies */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              General Strategies 🎯
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2">1. Look for Patterns</h3>
                <ul className="space-y-2 text-blue-600">
                  <li>• Start with the first letter of each word</li>
                  <li>• Look for words going left to right</li>
                  <li>• Look for words going top to bottom</li>
                  <li>• Use your finger to guide your eyes</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-700 mb-2">2. Use the Pictures</h3>
                <ul className="space-y-2 text-green-600">
                  <li>• Look at the picture clues</li>
                  <li>• Say the word out loud</li>
                  <li>• Think about how it's spelled</li>
                  <li>• Count the letters in the word</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Aids */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">
              Visual Helpers 👀
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-700 mb-2">Using Your Finger</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">👆</span>
                    <span>Point to each letter as you look</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">➡️</span>
                    <span>Move from left to right</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">⬇️</span>
                    <span>Move from top to bottom</span>
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-700 mb-2">Take Your Time</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">🐢</span>
                    <span>Go slow and steady</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    <span>Celebrate each word you find</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <span>Focus on one word at a time</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="bg-pink-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-pink-800 mb-4">
              Fun Facts About Word Searches 🌟
            </h2>
            <div className="space-y-4 text-pink-700">
              <p className="flex items-center gap-3">
                <span className="text-2xl">🧩</span>
                <span>Word searches help improve your memory and attention!</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <span>They make learning new words fun and exciting!</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                <span>You can color or highlight words as you find them!</span>
              </p>
            </div>
          </div>

          {/* Encouragement */}
          <div className="mt-8 text-center">
            <p className="text-xl font-bold text-blue-600">
              Remember: Practice makes perfect! 🌈
            </p>
            <p className="text-gray-600 mt-2">
              Every word you find makes you better at word searches!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SightWordsTips; 
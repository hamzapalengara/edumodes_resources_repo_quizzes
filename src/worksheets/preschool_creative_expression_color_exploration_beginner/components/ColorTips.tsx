import React from 'react';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const ColorTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <TipsHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Teaching Tips for Colors 🎨
          </h1>

          {/* Activity 1 Tips */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
              <span className="mr-2">🎯</span> Tips for Activity 1: Learning Colors
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Help children explore and learn colors through these engaging methods:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="mr-2">👉</span>
                  <span>Start with one color at a time to avoid overwhelming the child</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🗣️</span>
                  <span>Encourage repeating the color names out loud</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🏠</span>
                  <span>Point out colors in their everyday environment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎨</span>
                  <span>Use art activities to reinforce color recognition</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Activity 2 Tips */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="mr-2">🔍</span> Tips for Activity 2: Color Detective Game
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Make the color identification game more effective with these strategies:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="mr-2">🌟</span>
                  <span>Celebrate each correct answer with enthusiasm</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🤔</span>
                  <span>If a mistake is made, gently guide them to the correct answer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔄</span>
                  <span>Repeat the activity to reinforce learning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎮</span>
                  <span>Keep the atmosphere playful and encouraging</span>
                </li>
              </ul>
            </div>
          </section>

          {/* General Teaching Tips */}
          <section className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="mr-2">💡</span> Additional Teaching Tips
            </h2>
            <div className="space-y-4 text-blue-700">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">📝</span>
                  <span>Use consistent examples to help build strong associations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎵</span>
                  <span>Incorporate songs and rhymes about colors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📚</span>
                  <span>Read books that focus on colors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎨</span>
                  <span>Do color mixing activities to explore how colors work</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌈</span>
                  <span>Make connections to colors in nature and daily life</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ColorTips; 
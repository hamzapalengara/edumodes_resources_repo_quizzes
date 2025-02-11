import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSynonymsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="bg-white/80 backdrop-blur-sm p-4 shadow-lg rounded-xl mb-4">
          <h1 className="text-2xl font-bold text-orange-600 text-center mb-2">
            Fun Ways to Learn Food Words
          </h1>
          <p className="text-gray-600 text-center">
            Exciting activities to help you remember food and taste words
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid gap-0.5 md:gap-4">
          {/* Taste Testing Lab */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
              <span className="text-2xl mr-2">🧪</span>
              Taste Testing Lab
            </h2>
            <div className="grid gap-2">
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3">
                <h3 className="font-bold text-orange-600 mb-2">Sweet Words Game 🍯</h3>
                <p className="text-gray-700">
                  Try different sweet foods and use both "delicious" and "tasty" to describe them.
                  Which word fits better? Why?
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3">
                <h3 className="font-bold text-orange-600 mb-2">Temperature Talk ❄️</h3>
                <p className="text-gray-700">
                  Compare cold drinks using "icy" and "chilled". Notice how the words feel different
                  when you say them!
                </p>
              </div>
            </div>
          </div>

          {/* Word Detective */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
              <span className="text-2xl mr-2">🔍</span>
              Word Detective
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-bold">Mission 1:</span> Look through a cookbook or food magazine.
                Circle pairs of similar words that describe food.
              </p>
              <p>
                <span className="font-bold">Mission 2:</span> Watch cooking shows and listen for
                synonym pairs. Write them down in your food word collection!
              </p>
              <div className="bg-orange-50 rounded-lg p-3 mt-2">
                <p className="font-medium text-orange-600">Detective's Tip:</p>
                <p className="text-sm">
                  Sometimes similar words have tiny differences! For example, "crisp" often describes
                  fresh fruits and vegetables, while "crunchy" is used more for snacks and nuts.
                </p>
              </div>
            </div>
          </div>

          {/* Kitchen Adventures */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
              <span className="text-2xl mr-2">👩‍🍳</span>
              Kitchen Adventures
            </h2>
            <div className="grid gap-3">
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3">
                <h3 className="font-bold text-orange-600 mb-2">Food Description Challenge 🎯</h3>
                <p className="text-gray-700">
                  During meals, practice describing your food using synonym pairs:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                  <li>Is the soup flavorful or savory?</li>
                  <li>Are the vegetables nutritious or healthy?</li>
                  <li>Is the bread tender or soft?</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3">
                <h3 className="font-bold text-orange-600 mb-2">Aroma Adventure 👃</h3>
                <p className="text-gray-700">
                  Smell different foods and spices. Practice using "smelly" and "fragrant" to describe
                  what you notice. Which word works better for good smells?
                </p>
              </div>
            </div>
          </div>

          {/* Fun Games */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
              <span className="text-2xl mr-2">🎮</span>
              Fun Word Games
            </h2>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3">
                <h3 className="font-bold text-orange-600 mb-2">Synonym Memory Match 🎴</h3>
                <p className="text-gray-700">
                  Make cards with food words and their synonyms. Play memory match with friends!
                  When you find a pair, use both words in a sentence about food.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3">
                <h3 className="font-bold text-orange-600 mb-2">Food Word Chain ⛓️</h3>
                <p className="text-gray-700">
                  Start with one food word and take turns saying its synonyms. See how many similar
                  words you can chain together!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Note */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md text-center">
          <p className="text-orange-600 font-bold mb-2">
            Remember! 🚸
          </p>
          <p className="text-gray-700">
            Always do food activities with adult supervision. Be careful with hot foods and new tastes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordSynonymsTips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchAnswerKey: React.FC = () => {
  const wordList = [
    { word: 'CORN', emoji: '🌽', hint: 'Yellow vegetable that grows on tall stalks' },
    { word: 'PEAS', emoji: '🫛', hint: 'Small round green vegetables in a pod' },
    { word: 'BEET', emoji: '🫒', hint: 'Red root vegetable that can stain' },
    { word: 'KALE', emoji: '🥬', hint: 'Leafy green vegetable full of vitamins' },
    { word: 'YAM', emoji: '🍠', hint: 'Sweet orange root vegetable' },
    { word: 'BEAN', emoji: '🫘', hint: 'Grows in pods and can be many colors' },
    { word: 'LEEK', emoji: '🧅', hint: 'Long green and white vegetable like a big green onion' },
    { word: 'ONION', emoji: '🧅', hint: 'Makes you cry when you cut it' },
    { word: 'MINT', emoji: '🌿', hint: 'Fresh herb with cool taste' },
    { word: 'PEAR', emoji: '🍐', hint: 'Sweet green fruit shaped like a teardrop' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-lime-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Word List with Meanings */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Vegetable Word List
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wordList.map(({ word, emoji, hint }) => (
              <div
                key={word}
                className="bg-white rounded-lg p-3 flex items-start space-x-3"
              >
                <span className="text-2xl">{emoji}</span>
                <div>
                  <h3 className="font-bold text-gray-800">{word}</h3>
                  <p className="text-sm text-gray-600">{hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Finding Words */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Tips for Finding Words
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li>• Look for words going across (→) and down (↓)</li>
              <li>• Start with short words like "YAM" and "PEAS"</li>
              <li>• Use your finger to follow each row and column</li>
              <li>• When you find a word, it will show a vegetable emoji!</li>
            </ul>
          </div>
        </div>

        {/* Teaching Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Teaching Tips
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Nutrition Education:</strong>
                <p className="text-sm mt-1">
                  Discuss how each vegetable helps us grow strong and healthy.
                </p>
              </li>
              <li>
                <strong>Color Recognition:</strong>
                <p className="text-sm mt-1">
                  Talk about the different colors of vegetables and why they're important.
                </p>
              </li>
              <li>
                <strong>Garden Learning:</strong>
                <p className="text-sm mt-1">
                  Explain how different vegetables grow (underground, on vines, etc.).
                </p>
              </li>
              <li>
                <strong>Taste Exploration:</strong>
                <p className="text-sm mt-1">
                  Encourage trying new vegetables and describing their tastes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 
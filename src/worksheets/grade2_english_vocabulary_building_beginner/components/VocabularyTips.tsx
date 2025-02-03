import React from 'react';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';

const VocabularyTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TipsHeader />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-amber-600">
            Tips for Learning New Words
          </h1>

          <div className="space-y-8">
            {/* Visual Learning */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">👀</span> Look and Remember
              </h2>
              <ul className="list-disc list-inside space-y-2 text-amber-700">
                <li>Look at each picture carefully</li>
                <li>Try to remember what the picture shows</li>
                <li>Connect the picture with the word in your mind</li>
                <li>Practice drawing the pictures and writing the words</li>
              </ul>
            </div>

            {/* Word Practice */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">✍️</span> Practice the Words
              </h2>
              <ul className="list-disc list-inside space-y-2 text-blue-700">
                <li>Say each word out loud</li>
                <li>Break the word into its sounds (c-a-t)</li>
                <li>Write each word three times</li>
                <li>Try to spell the word without looking</li>
              </ul>
            </div>

            {/* Using Words */}
            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">💭</span> Use the Words
              </h2>
              <ul className="list-disc list-inside space-y-2 text-green-700">
                <li>Make a sentence with each word</li>
                <li>Tell a story using these words</li>
                <li>Point out these things in your daily life</li>
                <li>Play word games with family and friends</li>
              </ul>
            </div>

            {/* Fun Activities */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎮</span> Fun Learning Activities
              </h2>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>Create flashcards with pictures and words</li>
                <li>Play memory matching games</li>
                <li>Draw pictures for each word</li>
                <li>Act out the words like charades</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
              <span className="text-2xl mr-2">💡</span> Remember
            </h2>
            <p className="text-yellow-700">
              Learning new words is like making new friends - the more you spend time with them, 
              the better you'll remember them! Keep practicing and have fun while learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyTips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const VowelWordsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-6">
            Tips for Finding Vowel Words
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Vowel Recognition */}
            <div className="bg-yellow-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌻</span> Know Your Vowels
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {[
                  { letter: 'A', words: ['ant', 'apple', 'ask'] },
                  { letter: 'E', words: ['egg', 'end', 'eat'] },
                  { letter: 'I', words: ['ink', 'ice', 'in'] },
                  { letter: 'O', words: ['owl', 'on', 'ox'] },
                  { letter: 'U', words: ['up', 'us', 'under'] },
                ].map(vowel => (
                  <div key={vowel.letter} className="bg-white rounded-lg p-3 text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{vowel.letter}</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      {vowel.words.map(word => (
                        <div key={word}>{word}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Strategies */}
            <div className="bg-green-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌿</span> Fun Learning Strategies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎵</span> Vowel Song
                  </h3>
                  <p className="text-gray-600">
                    Sing "A-E-I-O-U" to the tune of "Old MacDonald"
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">👆</span> Point and Say
                  </h3>
                  <p className="text-gray-600">
                    Point to the first letter and say it out loud
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎨</span> Color Code
                  </h3>
                  <p className="text-gray-600">
                    Imagine vowels in your favorite color
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🌈</span> Rainbow Write
                  </h3>
                  <p className="text-gray-600">
                    Practice writing vowels in rainbow colors
                  </p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Watch Out For
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-bold text-red-600">Looking at Any Letter</p>
                    <p className="text-gray-600">Only look at the first letter of the word</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-bold text-red-600">Rushing Too Fast</p>
                    <p className="text-gray-600">Take your time to check each word carefully</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-bold text-red-600">Forgetting Some Vowels</p>
                    <p className="text-gray-600">Remember all five: a, e, i, o, u</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Tips */}
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Practice Ideas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Word Hunt</h3>
                  <p className="text-gray-600">
                    Look for vowel words in your favorite books
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Memory Game</h3>
                  <p className="text-gray-600">
                    Make cards with vowel and non-vowel words
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">I Spy</h3>
                  <p className="text-gray-600">
                    Play "I spy" with things that start with vowels
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Word Chain</h3>
                  <p className="text-gray-600">
                    Take turns saying vowel words in a chain
                  </p>
                </div>
              </div>
            </div>

            {/* Parent/Teacher Section */}
            <div className="bg-purple-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📝</span> For Parents & Teachers
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Daily Practice</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Start with short, simple words</li>
                    <li>Use visual aids and physical objects</li>
                    <li>Make it fun with games and songs</li>
                    <li>Celebrate progress and effort</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Extension Activities</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Create word sorting games</li>
                    <li>Draw pictures for vowel words</li>
                    <li>Write simple sentences</li>
                    <li>Make vowel word collages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VowelWordsTips; 
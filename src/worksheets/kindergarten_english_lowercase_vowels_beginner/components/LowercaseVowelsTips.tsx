import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LowercaseVowelsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-violet-200">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-6">
            Tips for Finding Vowels
          </h1>

          <div className="space-y-6">
            {/* Strategy 1 */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span>🎯</span> Remember the Magic Five
              </h2>
              <p className="text-purple-700 mb-2">
                There are five main vowels that you need to find:
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {['a', 'e', 'i', 'o', 'u'].map((vowel) => (
                  <div
                    key={vowel}
                    className="w-12 h-12 rounded-full bg-purple-200 
                             flex items-center justify-center text-2xl font-bold text-purple-800"
                  >
                    {vowel}
                  </div>
                ))}
              </div>
              <p className="text-purple-600 text-sm">
                Say them out loud: "a, e, i, o, u"
              </p>
            </div>

            {/* Strategy 2 */}
            <div className="bg-pink-50 rounded-lg p-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span>🎵</span> Sing the Vowel Song
              </h2>
              <p className="text-purple-700">
                Try this fun song to remember the vowels:
              </p>
              <div className="bg-white rounded-lg p-4 mt-2 text-purple-700">
                <p className="italic">
                  "A-E-I-O-U,<br />
                  These are vowels through and through!<br />
                  In every word you say or do,<br />
                  You'll find a vowel or maybe two!"
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span>🎮</span> Game Tips
              </h2>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>Look carefully at each letter</li>
                <li>If you're not sure, say the letter sound</li>
                <li>Take your time - there's no rush!</li>
                <li>If you make a mistake, learn from it</li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-pink-50 rounded-lg p-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span>💡</span> Remember with Words
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                <div className="bg-white p-2 rounded-lg text-center">
                  <div className="text-2xl">🍎</div>
                  <div className="font-bold text-purple-800">apple</div>
                  <div className="text-sm text-purple-600">for 'a'</div>
                </div>
                <div className="bg-white p-2 rounded-lg text-center">
                  <div className="text-2xl">🐘</div>
                  <div className="font-bold text-purple-800">elephant</div>
                  <div className="text-sm text-purple-600">for 'e'</div>
                </div>
                <div className="bg-white p-2 rounded-lg text-center">
                  <div className="text-2xl">🍦</div>
                  <div className="font-bold text-purple-800">ice cream</div>
                  <div className="text-sm text-purple-600">for 'i'</div>
                </div>
                <div className="bg-white p-2 rounded-lg text-center">
                  <div className="text-2xl">🐙</div>
                  <div className="font-bold text-purple-800">octopus</div>
                  <div className="text-sm text-purple-600">for 'o'</div>
                </div>
                <div className="bg-white p-2 rounded-lg text-center">
                  <div className="text-2xl">☂️</div>
                  <div className="font-bold text-purple-800">umbrella</div>
                  <div className="text-sm text-purple-600">for 'u'</div>
                </div>
              </div>
            </div>

            {/* Encouragement */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 text-center">
              <h2 className="text-xl font-bold text-purple-800 mb-2">
                You Can Do It! 🌟
              </h2>
              <p className="text-purple-700">
                Practice makes perfect! The more you play, the better you'll get at finding vowels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowercaseVowelsTips; 
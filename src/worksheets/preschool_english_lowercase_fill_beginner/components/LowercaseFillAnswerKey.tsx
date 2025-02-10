import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LowercaseFillAnswerKey: React.FC = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-teal-800 mb-6">
            Answer Key: Lowercase Letters
          </h1>

          {/* Complete Alphabet Display */}
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-0.5 md:gap-4 mb-8">
            {alphabet.map((letter, index) => (
              <div
                key={index}
                className="w-full aspect-square rounded-lg border-2 border-teal-200 
                         bg-teal-50 flex items-center justify-center text-2xl font-bold text-teal-700"
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Tips and Explanations */}
          <div className="space-y-4 text-gray-600">
            <div className="p-4 bg-teal-50 rounded-lg">
              <h2 className="font-bold text-teal-800 mb-2">Letter Order Tips</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Remember that lowercase letters follow the same order as uppercase letters</li>
                <li>Practice writing each letter to reinforce recognition</li>
                <li>Notice the unique shapes and features of each letter</li>
              </ul>
            </div>

            <div className="p-4 bg-emerald-50 rounded-lg">
              <h2 className="font-bold text-emerald-800 mb-2">Common Letter Pairs</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-emerald-600">b/d</span>
                  <span className="text-sm">- Mirror images</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-emerald-600">p/q</span>
                  <span className="text-sm">- Flipped versions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-emerald-600">m/n</span>
                  <span className="text-sm">- Similar shapes</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-teal-50 rounded-lg">
              <h2 className="font-bold text-teal-800 mb-2">Letter Groups</h2>
              <div className="space-y-2">
                <div>
                  <span className="font-bold text-teal-700">Tall Letters:</span>
                  <span className="ml-2">b, d, f, h, k, l, t</span>
                </div>
                <div>
                  <span className="font-bold text-teal-700">Short Letters:</span>
                  <span className="ml-2">a, c, e, i, m, n, o, r, s, u, v, w, x, z</span>
                </div>
                <div>
                  <span className="font-bold text-teal-700">Letters with Tails:</span>
                  <span className="ml-2">g, j, p, q, y</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowercaseFillAnswerKey; 
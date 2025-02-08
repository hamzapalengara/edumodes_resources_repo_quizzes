import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const RhymingSpaceTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100">
      <WorksheetHeader />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
            Tips for Finding Space Rhyming Words
          </h1>

          {/* Understanding Rhyming Words */}
          <div className="mb-8 bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
              <span>🎵</span> What Are Rhyming Words?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">1.</span>
                <div>
                  <p className="font-semibold text-indigo-700">Same Ending Sound</p>
                  <p className="text-indigo-600">Rhyming words end with the same sound, like STAR and FAR.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">2.</span>
                <div>
                  <p className="font-semibold text-indigo-700">Say Them Out Loud</p>
                  <p className="text-indigo-600">Try saying the words to hear if they rhyme: MOON and SOON.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">3.</span>
                <div>
                  <p className="font-semibold text-indigo-700">Different Spellings</p>
                  <p className="text-indigo-600">Some rhyming words might be spelled differently but sound the same.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Word Search Strategies */}
          <div className="mb-8 bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
              <span>🔍</span> Finding Words in the Grid
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">1.</span>
                <div>
                  <p className="font-semibold text-indigo-700">Look for First Letters</p>
                  <p className="text-indigo-600">Start by finding the first letter of each word in the list.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">2.</span>
                <div>
                  <p className="font-semibold text-indigo-700">Use the Pictures</p>
                  <p className="text-indigo-600">The emoji next to each word pair gives you a clue about their meaning.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">3.</span>
                <div>
                  <p className="font-semibold text-indigo-700">Read the Hints</p>
                  <p className="text-indigo-600">Each rhyming pair has a hint that helps you understand both words.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Space Theme Examples */}
          <div className="mb-8 bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
              <span>🚀</span> Space Word Examples
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">⭐</span>
                  <p className="font-bold text-indigo-700">STAR and FAR</p>
                </div>
                <p className="text-indigo-600">Stars are far away in the sky!</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌙</span>
                  <p className="font-bold text-indigo-700">MOON and SOON</p>
                </div>
                <p className="text-indigo-600">The moon will rise soon!</p>
              </div>
            </div>
          </div>

          {/* Interactive Features */}
          <div className="mb-8 bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
              <span>🎮</span> Using the Interactive Features
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">1.</span>
                <div>
                  <p className="font-semibold text-indigo-700">Drag to Select</p>
                  <p className="text-indigo-600">Click and drag (or use your finger) to highlight letters in the grid.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">2.</span>
                <div>
                  <p className="font-semibold text-indigo-700">Listen for Words</p>
                  <p className="text-indigo-600">When you find a word, you'll hear it and its rhyming partner!</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">3.</span>
                <div>
                  <p className="font-semibold text-indigo-700">Watch for Colors</p>
                  <p className="text-indigo-600">Found words will be highlighted in matching colors.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Encouragement */}
          <div className="text-center bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center justify-center gap-2">
              <span>⭐</span> Remember
            </h2>
            <p className="text-indigo-600 max-w-lg mx-auto">
              Take your time exploring the space of rhyming words! Each pair you find helps you learn
              about sounds and meanings. Have fun on your cosmic word adventure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RhymingSpaceTips; 
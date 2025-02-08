import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NatureWordsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100">
      <WorksheetHeader />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-emerald-600">
            Tips for Finding Nature Words
          </h1>

          {/* General Word Search Tips */}
          <div className="mb-8 bg-emerald-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-emerald-700 flex items-center gap-2">
              <span>🔍</span> General Tips
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">1.</span>
                <div>
                  <p className="font-semibold text-emerald-700">Look for First Letters</p>
                  <p className="text-emerald-600">Start by finding the first letter of each word you're looking for.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">2.</span>
                <div>
                  <p className="font-semibold text-emerald-700">Use Your Finger</p>
                  <p className="text-emerald-600">Move your finger along each row, column, and diagonal to help your eyes focus.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">3.</span>
                <div>
                  <p className="font-semibold text-emerald-700">Work Systematically</p>
                  <p className="text-emerald-600">Search one direction at a time: left to right, up and down, then diagonally.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Nature Words Specific Tips */}
          <div className="mb-8 bg-emerald-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-emerald-700 flex items-center gap-2">
              <span>🌿</span> Nature Words Tips
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">1.</span>
                <div>
                  <p className="font-semibold text-emerald-700">Think About Plants</p>
                  <p className="text-emerald-600">Many words are related to plants: TREES, LEAF, STEM, SEED</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">2.</span>
                <div>
                  <p className="font-semibold text-emerald-700">Look for Actions</p>
                  <p className="text-emerald-600">Some words show what things do: GROW, FLOW</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">3.</span>
                <div>
                  <p className="font-semibold text-emerald-700">Find Living Things</p>
                  <p className="text-emerald-600">Look for words about living things: BIRD, PLANT</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Interactive Features */}
          <div className="mb-8 bg-emerald-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-emerald-700 flex items-center gap-2">
              <span>🎯</span> Using the Interactive Features
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">1.</span>
                <div>
                  <p className="font-semibold text-emerald-700">Drag to Select</p>
                  <p className="text-emerald-600">Click and drag your mouse (or use your finger on touch screens) to select letters.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">2.</span>
                <div>
                  <p className="font-semibold text-emerald-700">Listen for Hints</p>
                  <p className="text-emerald-600">When you find a word, it will be read aloud with its meaning.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">3.</span>
                <div>
                  <p className="font-semibold text-emerald-700">Watch Your Progress</p>
                  <p className="text-emerald-600">Found words will be crossed out and highlighted in the word list.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Encouragement Section */}
          <div className="text-center bg-emerald-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-emerald-700 flex items-center justify-center gap-2">
              <span>⭐</span> Remember
            </h2>
            <p className="text-emerald-600 max-w-lg mx-auto">
              Take your time and have fun! Each word you find helps you learn about nature.
              If you get stuck, try looking at the pictures next to the words for clues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureWordsTips; 
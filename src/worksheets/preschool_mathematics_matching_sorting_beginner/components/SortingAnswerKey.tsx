import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const SortingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full md:max-w-5xl md:mx-auto p-4 md:p-6">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-violet-100 p-6 shadow-lg">
            {/* Title Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-violet-800 mb-2">
                Fun Toy Sorting and Matching Game - Answer Key
              </h1>
              <p className="text-violet-600 text-lg">
                Guide for teachers and parents
              </p>
            </div>

            {/* Level 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-violet-700 mb-4">Level 1: Color Sorting</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-bold text-violet-800 mb-2">Red Things Box</h3>
                  <div className="flex gap-2 text-2xl">🔴 ❤️</div>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-bold text-violet-800 mb-2">Blue Things Box</h3>
                  <div className="flex gap-2 text-2xl">🔵 💙</div>
                </div>
              </div>
            </div>

            {/* Level 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-violet-700 mb-4">Level 2: Shape Sorting</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-bold text-violet-800 mb-2">Round Things Box</h3>
                  <div className="flex gap-2 text-2xl">⭕ 🔴</div>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-bold text-violet-800 mb-2">Square Things Box</h3>
                  <div className="flex gap-2 text-2xl">⬜ 📦</div>
                </div>
              </div>
            </div>

            {/* Level 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-violet-700 mb-4">Level 3: Size Sorting</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-bold text-violet-800 mb-2">Big Animals Box</h3>
                  <div className="flex gap-2 text-2xl">🐘 🦒</div>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-bold text-violet-800 mb-2">Small Animals Box</h3>
                  <div className="flex gap-2 text-2xl">🐁 🐞</div>
                </div>
              </div>
            </div>

            {/* Teaching Tips */}
            <div className="bg-violet-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-violet-700 mb-4">Teaching Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-violet-800">
                <li>Start with Level 1 (colors) as it's the most basic sorting concept</li>
                <li>Encourage children to verbalize their sorting decisions</li>
                <li>Use the visual cues (emojis) to help children identify patterns</li>
                <li>Celebrate each successful match to build confidence</li>
                <li>If a child struggles, focus on one category at a time</li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default SortingAnswerKey; 
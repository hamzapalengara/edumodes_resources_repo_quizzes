import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const RainbowColoringAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <WorksheetHeader />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Rainbow Colors - Answer Key 🌈
        </h1>

        {/* Activity 1: Rainbow */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            1. Rainbow Colors Order
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-500"></div>
              <span className="font-bold">Red (Top)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500"></div>
              <span className="font-bold">Orange</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
              <span className="font-bold">Yellow</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500"></div>
              <span className="font-bold">Green</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500"></div>
              <span className="font-bold">Blue</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
              <span className="font-bold">Indigo</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500"></div>
              <span className="font-bold">Violet</span>
            </div>
          </div>
        </div>

        {/* Activity 2: Happy Sun */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            2. Happy Sun Example
          </h2>
          <div className="text-lg">
            <p>The sun can be colored with any colors! Here's one example:</p>
            <ul className="mt-4 space-y-2">
              <li>• Center: Yellow</li>
              <li>• Rays: Orange or Yellow</li>
              <li>• Eyes: Blue</li>
              <li>• Smile: Red</li>
            </ul>
            <p className="mt-4 text-blue-600 italic">
              Remember: There's no wrong way to color the sun - be creative!
            </p>
          </div>
        </div>

        {/* Activity 3: Color Patterns */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            3. Pattern Solutions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Pattern 1:</h3>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded bg-red-500"></div>
                <div className="w-12 h-12 rounded bg-yellow-400"></div>
                <div className="w-12 h-12 rounded bg-red-500"></div>
                <div className="w-12 h-12 rounded bg-yellow-400"></div>
                <div className="w-12 h-12 rounded bg-red-500"></div>
                <div className="w-12 h-12 rounded bg-yellow-400"></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Pattern 2:</h3>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded bg-blue-500"></div>
                <div className="w-12 h-12 rounded bg-blue-500"></div>
                <div className="w-12 h-12 rounded bg-blue-500"></div>
                <div className="w-12 h-12 rounded bg-blue-500"></div>
                <div className="w-12 h-12 rounded bg-blue-500"></div>
                <div className="w-12 h-12 rounded bg-blue-500"></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Pattern 3:</h3>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded bg-green-500"></div>
                <div className="w-12 h-12 rounded bg-yellow-400"></div>
                <div className="w-12 h-12 rounded bg-green-500"></div>
                <div className="w-12 h-12 rounded bg-yellow-400"></div>
                <div className="w-12 h-12 rounded bg-green-500"></div>
                <div className="w-12 h-12 rounded bg-yellow-400"></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Pattern 4:</h3>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded bg-red-500"></div>
                <div className="w-12 h-12 rounded bg-red-500"></div>
                <div className="w-12 h-12 rounded bg-red-500"></div>
                <div className="w-12 h-12 rounded bg-red-500"></div>
                <div className="w-12 h-12 rounded bg-red-500"></div>
                <div className="w-12 h-12 rounded bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainbowColoringAnswerKey; 
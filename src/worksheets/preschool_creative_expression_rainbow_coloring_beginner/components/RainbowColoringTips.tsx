import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const RainbowColoringTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <WorksheetHeader />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Teaching Tips 📚
        </h1>

        {/* Activity 1: Rainbow Tips */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            1. Rainbow Colors Activity
          </h2>
          <div className="space-y-4">
            <p className="text-lg">Help children learn the rainbow colors with these tips:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Use the mnemonic "ROY G. BIV" to remember the color order</li>
              <li>Point out rainbows in nature after rain</li>
              <li>Look for these colors in everyday objects</li>
              <li>Practice saying each color name clearly</li>
              <li>Discuss how rainbows form in nature</li>
            </ul>
          </div>
        </div>

        {/* Activity 2: Drawing Tips */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            2. Happy Sun Activity
          </h2>
          <div className="space-y-4">
            <p className="text-lg">Encourage creativity and expression:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Let children choose their favorite colors</li>
              <li>Discuss why the sun is important</li>
              <li>Talk about warm and cool colors</li>
              <li>Ask them why they chose certain colors</li>
              <li>Celebrate their unique color choices</li>
            </ul>
          </div>
        </div>

        {/* Activity 3: Pattern Tips */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            3. Color Patterns Activity
          </h2>
          <div className="space-y-4">
            <p className="text-lg">Help children understand patterns:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Start with the simplest pattern (all same color)</li>
              <li>Use words like "next" and "takes turns"</li>
              <li>Point to each box while saying the pattern</li>
              <li>Find patterns in their environment</li>
              <li>Celebrate each completed pattern</li>
            </ul>
          </div>
        </div>

        {/* General Teaching Tips */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            General Tips
          </h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Keep the session fun and engaging</li>
              <li>Take breaks if needed</li>
              <li>Offer positive reinforcement</li>
              <li>Allow for mistakes and learning</li>
              <li>Make connections to real-world objects</li>
              <li>Use clear, simple instructions</li>
              <li>Celebrate their achievements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainbowColoringTips; 
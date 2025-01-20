import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const RainbowColoringTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <WorksheetHeader />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Rainbow Coloring - Tips for Parents and Teachers 🌈
        </h1>

        <div className="space-y-6">
          {/* Overview */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">
              Activity Overview
            </h2>
            <p className="text-gray-700">
              This interactive worksheet helps children learn about colors while creating their own rainbow.
              The activity combines color recognition, sequencing, and fine motor skills in an engaging way.
            </p>
          </div>

          {/* Learning Objectives */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">
              Learning Objectives
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Recognize and name basic colors</li>
              <li>Understand color sequences in a rainbow</li>
              <li>Develop fine motor skills through interactive coloring</li>
              <li>Learn about patterns and order in nature</li>
            </ul>
          </div>

          {/* Teaching Tips */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">
              Teaching Tips
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Before the Activity:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Discuss rainbows and when we see them in nature</li>
                  <li>Show pictures of real rainbows</li>
                  <li>Practice naming colors in everyday objects</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">During the Activity:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Say each color name out loud as it's selected</li>
                  <li>Encourage discussion about favorite colors</li>
                  <li>Help with the sequence if needed</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-2">Extension Activities:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Create rainbow art with different materials</li>
                  <li>Go on a color scavenger hunt</li>
                  <li>Sing songs about rainbows and colors</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">
              Troubleshooting
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">If the child struggles with color order:</span>
                {" "}Introduce the "ROY G. BIV" memory aid and practice it together.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">If attention wanders:</span>
                {" "}Break the activity into smaller segments and celebrate each completed arc.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">For color recognition issues:</span>
                {" "}Use real objects of each color as reference points.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainbowColoringTips; 
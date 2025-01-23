import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

// Tip section component
const TipSection = ({ title, tips }: { title: string; tips: string[] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-violet-800 mb-4">{title}</h2>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-violet-500 mt-1">•</span>
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example component to demonstrate concepts
const Example = ({ title, items }: { title: string; items: { emoji: string; label: string }[] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-violet-800 mb-4">{title}</h2>
      <div className="flex flex-wrap gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="text-4xl">{item.emoji}</div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ColorMatchingTips: React.FC = () => {
  const preparationTips = [
    "Set up a distraction-free environment to help children focus on the colors",
    "Ensure good lighting for accurate color perception",
    "Consider starting with fewer colors for younger children or those new to color matching",
    "Have real objects of similar colors ready for hands-on reinforcement"
  ];

  const teachingStrategies = [
    "Begin with primary colors (red, blue, yellow) before introducing others",
    "Use consistent and clear language when describing colors",
    "Encourage children to verbalize the colors they're matching",
    "Provide positive reinforcement for both attempts and successful matches",
    "Make connections to familiar objects in the child's environment"
  ];

  const troubleshooting = [
    "If a child struggles, reduce the number of colors presented at once",
    "Use the audio feature to help reinforce color names",
    "Take breaks if the child shows signs of frustration",
    "Consider checking for color vision deficiency if consistent difficulties arise"
  ];

  const extensions = [
    "Create a color scavenger hunt in the room or home",
    "Sort everyday objects by color (toys, clothes, food)",
    "Draw pictures using the colors learned",
    "Play 'I Spy' games focusing on colors",
    "Make color mixing experiments with paint or playdough"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full md:max-w-4xl md:mx-auto p-4 md:p-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-violet-800">Teaching Tips for Rainbow Adventure</h1>
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                This guide provides strategies and tips for teaching color recognition and matching skills to young children.
                Use these suggestions to create an engaging and effective learning experience.
              </p>
            </div>

            {/* Example Matches */}
            <Example
              title="Color Association Examples"
              items={[
                { emoji: '🍎', label: 'Red Apple' },
                { emoji: '🌊', label: 'Blue Ocean' },
                { emoji: '🌿', label: 'Green Leaf' },
                { emoji: '🌟', label: 'Yellow Star' }
              ]}
            />

            {/* Tips Sections */}
            <div className="grid grid-cols-1 gap-6">
              <TipSection title="Preparation Tips" tips={preparationTips} />
              <TipSection title="Teaching Strategies" tips={teachingStrategies} />
              <TipSection title="Troubleshooting" tips={troubleshooting} />
              <TipSection title="Extension Activities" tips={extensions} />
            </div>

            {/* Learning Objectives */}
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
              <h2 className="text-xl font-semibold text-violet-800 mb-4">Learning Objectives</h2>
              <ul className="space-y-2 text-violet-700">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Recognize and name 10 different colors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Match colors to familiar objects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Develop fine motor skills through drag-and-drop activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Build color-related vocabulary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Practice visual discrimination skills</span>
                </li>
              </ul>
            </div>

            {/* Assessment Guidelines */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Assessment Guidelines</h2>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Observe if the child can consistently match colors correctly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Note whether they can name colors independently</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Monitor progress in recognizing different shades of colors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Track improvement in drag-and-drop accuracy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ColorMatchingTips; 
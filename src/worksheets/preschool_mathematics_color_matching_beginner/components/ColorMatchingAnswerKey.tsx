import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const COLORS = [
  { id: 'red', color: '#FF5252', emoji: '🍎', name: 'Red', description: 'like an apple' },
  { id: 'blue', color: '#448AFF', emoji: '🌊', name: 'Blue', description: 'like the ocean' },
  { id: 'green', color: '#4CAF50', emoji: '🌿', name: 'Green', description: 'like leaves' },
  { id: 'yellow', color: '#FFD740', emoji: '🌟', name: 'Yellow', description: 'like a star' },
  { id: 'purple', color: '#9C27B0', emoji: '🍇', name: 'Purple', description: 'like grapes' },
  { id: 'orange', color: '#FF9800', emoji: '🍊', name: 'Orange', description: 'like an orange' },
  { id: 'pink', color: '#FF4081', emoji: '🌸', name: 'Pink', description: 'like a flower' },
  { id: 'brown', color: '#795548', emoji: '🐻', name: 'Brown', description: 'like a bear' },
  { id: 'gray', color: '#9E9E9E', emoji: '🐘', name: 'Gray', description: 'like an elephant' },
  { id: 'teal', color: '#009688', emoji: '🐢', name: 'Teal', description: 'like a turtle' },
];

const ColorMatchingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full md:max-w-4xl md:mx-auto p-4 md:p-6">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-violet-800 mb-6">Rainbow Adventure - Answer Key</h1>

            {/* Color Matches */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-violet-700 mb-4">Correct Color Matches</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COLORS.map((color) => (
                  <div 
                    key={color.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-gray-50"
                  >
                    <div 
                      className="w-12 h-12 rounded-lg shadow-sm flex items-center justify-center text-2xl"
                      style={{ backgroundColor: color.color }}
                    >
                      {color.emoji}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{color.name}</p>
                      <p className="text-gray-600 text-sm">{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Tips */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-blue-800 mb-4">Teaching Tips</h2>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Start with basic colors (red, blue, yellow) before introducing others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Use real-world examples to reinforce color recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Encourage children to name the colors as they match them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Celebrate each successful match to build confidence</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-green-800 mb-4">Extension Activities</h2>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Ask children to find objects of the same color in their environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Create color-based sorting games with household items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Practice mixing colors to understand color relationships</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-purple-800 mb-4">Learning Objectives</h2>
                <ul className="space-y-3 text-purple-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Recognize and identify 10 different colors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Associate colors with common objects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Develop fine motor skills through drag-and-drop interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">•</span>
                    <span>Build vocabulary related to colors and objects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ColorMatchingAnswerKey; 
import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface ShapeExample {
  type: string;
  objects: Array<{
    name: string;
    emoji: string;
    scene: string;
    explanation: string;
  }>;
}

const ShapeAnswerKey: React.FC = () => {
  const [activeShape, setActiveShape] = useState<string | null>(null);

  const shapes: ShapeExample[] = [
    {
      type: 'circle',
      objects: [
        { name: 'Sun', emoji: '☀️', scene: 'Park', explanation: 'The sun is a perfect circle in the sky' },
        { name: 'Ball', emoji: '🏐', scene: 'Beach', explanation: 'Beach balls are round like circles' },
        { name: 'Lion Face', emoji: '🦁', scene: 'Zoo', explanation: 'A lion\'s face is circular in shape' }
      ]
    },
    {
      type: 'square',
      objects: [
        { name: 'Gift Box', emoji: '🎁', scene: 'Park', explanation: 'Gift boxes often have square faces' },
        { name: 'Ice Cube', emoji: '🧊', scene: 'Beach', explanation: 'Ice cubes are shaped like squares' },
        { name: 'Window', emoji: '🪟', scene: 'Zoo', explanation: 'Many windows are square-shaped' }
      ]
    },
    {
      type: 'triangle',
      objects: [
        { name: 'Tree', emoji: '🌲', scene: 'Park', explanation: 'Pine trees have a triangular shape' },
        { name: 'Umbrella', emoji: '⛱️', scene: 'Beach', explanation: 'Beach umbrellas form triangles when open' },
        { name: 'Mountain', emoji: '🏔️', scene: 'Zoo', explanation: 'Mountains often appear triangular' }
      ]
    },
    {
      type: 'rectangle',
      objects: [
        { name: 'Bench', emoji: '🪑', scene: 'Park', explanation: 'Park benches are rectangular' },
        { name: 'Pool', emoji: '🏊', scene: 'Beach', explanation: 'Swimming pools are often rectangular' },
        { name: 'Giraffe', emoji: '🦒', scene: 'Zoo', explanation: 'A giraffe\'s long neck forms a rectangle' }
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <WorksheetHeader>
        <h1 className="text-xl sm:text-2xl font-bold text-white px-4">Shape Safari Guide</h1>
      </WorksheetHeader>

      <div className="p-4 md:p-6 space-y-4 md:space-y-6 max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 md:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-blue-800 mb-3 sm:mb-4">Finding Shapes in Our World</h2>
          <p className="text-blue-700 text-base sm:text-lg">
            Click on each shape below to see where they are hidden in our safari scenes!
          </p>
        </div>

        {/* Shape Sections */}
        <div className="space-y-3 sm:space-y-4">
          {shapes.map((shape, index) => (
            <TouchContainer key={shape.type}>
              <div 
                className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 p-4 sm:p-6 ${
                  activeShape === shape.type 
                    ? 'border-purple-400 shadow-lg' 
                    : 'border-gray-200 hover:border-purple-200'
                }`}
                onClick={() => setActiveShape(activeShape === shape.type ? null : shape.type)}
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Shape Title */}
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-purple-800 capitalize">
                      {shape.type}s
                    </h3>
                    <span className="text-2xl sm:text-3xl">
                      {index === 0 ? '⭕' : 
                       index === 1 ? '⬛' : 
                       index === 2 ? '▲' : '▬'}
                    </span>
                  </div>

                  {/* Objects List */}
                  {activeShape === shape.type && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn">
                      {shape.objects.map((obj, i) => (
                        <div 
                          key={i}
                          className="bg-purple-50 rounded-lg p-3 sm:p-4"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{obj.emoji}</span>
                            <span className="font-medium text-purple-800">{obj.name}</span>
                          </div>
                          <div className="text-sm text-purple-600">
                            <span className="font-medium">Scene:</span> {obj.scene}
                          </div>
                          <p className="text-sm text-purple-700 mt-2">
                            {obj.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </TouchContainer>
          ))}
        </div>

        {/* Tips Box */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 md:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-yellow-800 mb-3 sm:mb-4">Remember:</h3>
          <ul className="space-y-2 sm:space-y-3 text-yellow-700">
            <li className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">⭕</span>
              <span className="text-sm sm:text-base">Circles are round with no corners</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">⬛</span>
              <span className="text-sm sm:text-base">Squares have four equal sides</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">▲</span>
              <span className="text-sm sm:text-base">Triangles have three sides</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">▬</span>
              <span className="text-sm sm:text-base">Rectangles are longer than they are tall</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShapeAnswerKey; 
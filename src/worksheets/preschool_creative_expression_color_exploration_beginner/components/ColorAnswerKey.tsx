import React from 'react';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

interface ColorInfo {
  name: string;
  bgClass: string;
  emoji: string;
  examples: string[];
}

const colors: ColorInfo[] = [
  { 
    name: 'Red', 
    bgClass: 'bg-red-500',
    emoji: '🍎', 
    examples: ['apple', 'strawberry', 'fire truck']
  },
  { 
    name: 'Orange',
    bgClass: 'bg-orange-500',
    emoji: '🍊', 
    examples: ['orange', 'carrot', 'sunset']
  },
  { 
    name: 'Yellow',
    bgClass: 'bg-yellow-400',
    emoji: '⭐', 
    examples: ['star', 'sun', 'banana']
  },
  { 
    name: 'Green',
    bgClass: 'bg-green-500',
    emoji: '🌿', 
    examples: ['leaf', 'grass', 'tree']
  },
  { 
    name: 'Blue',
    bgClass: 'bg-blue-500',
    emoji: '🌊', 
    examples: ['ocean', 'sky', 'blueberry']
  },
  { 
    name: 'Indigo',
    bgClass: 'bg-indigo-500',
    emoji: '🌌', 
    examples: ['night sky', 'blueberries', 'butterfly']
  },
  { 
    name: 'Violet',
    bgClass: 'bg-purple-500',
    emoji: '🌸', 
    examples: ['flower', 'grapes', 'butterfly']
  },
];

const ColorAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnswerKeyHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Rainbow Colors - Answer Key 🌈
          </h1>

          <div className="grid gap-6">
            {colors.map((color) => (
              <div 
                key={color.name}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-6">
                  {/* Color Sample */}
                  <div className={`w-24 h-24 ${color.bgClass} rounded-xl shadow-inner flex items-center justify-center`}>
                    <span className="text-4xl" role="img" aria-label={color.name}>
                      {color.emoji}
                    </span>
                  </div>

                  {/* Color Information */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">
                      {color.name}
                    </h2>
                    <p className="text-gray-600">
                      Examples: {color.examples.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Learning Tips 💡
            </h2>
            <ul className="text-blue-700 space-y-2">
              <li>• Each color is shown with its name and common examples</li>
              <li>• The emoji helps children remember the color through familiar objects</li>
              <li>• Practice identifying these colors in your surroundings</li>
              <li>• Use the examples to help remember each color</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ColorAnswerKey; 
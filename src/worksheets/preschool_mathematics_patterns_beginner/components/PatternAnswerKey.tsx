import React from 'react';

const shapes = {
  circle: {
    icon: '⭕',
    name: 'Circle',
  },
  square: {
    icon: '⬜',
    name: 'Square',
  },
  triangle: {
    icon: '🔺',
    name: 'Triangle',
  },
  star: {
    icon: '⭐',
    name: 'Star',
  },
  heart: {
    icon: '❤️',
    name: 'Heart',
  }
} as const;

const patterns = [
  {
    sequence: ['circle', 'star', 'circle', 'star'],
    answer: 'star',
    explanation: 'Alternating pattern: Circle, Star repeats'
  },
  {
    sequence: ['heart', 'square', 'heart', 'square'],
    answer: 'heart',
    explanation: 'Alternating pattern: Heart, Square repeats'
  },
  {
    sequence: ['star', 'star', 'star', 'star'],
    answer: 'star',
    explanation: 'Simple repeating pattern: All Stars'
  },
  {
    sequence: ['circle', 'triangle', 'heart', 'circle', 'triangle', 'heart'],
    answer: 'triangle',
    explanation: 'Three-shape pattern: Circle, Triangle, Heart repeats'
  },
  {
    sequence: ['circle', 'circle', 'circle', 'circle', 'circle'],
    answer: 'circle',
    explanation: 'Simple repeating pattern: All Circles'
  },
  {
    sequence: ['star', 'star', 'heart', 'heart', 'star', 'star'],
    answer: 'star',
    explanation: 'Alternating pairs pattern: Two Stars, Two Hearts repeats'
  },
  {
    sequence: ['square', 'heart', 'triangle', 'square', 'heart', 'triangle'],
    answer: 'heart',
    explanation: 'Three-shape pattern: Square, Heart, Triangle repeats'
  },
  {
    sequence: ['circle', 'star', 'heart', 'triangle', 'circle', 'star', 'heart', 'triangle'],
    answer: 'heart',
    explanation: 'Four-shape pattern: Circle, Star, Heart, Triangle repeats'
  },
  {
    sequence: ['heart', 'heart', 'star', 'heart', 'heart', 'star'],
    answer: 'star',
    explanation: 'Pattern with repetition: Two Hearts, One Star repeats'
  },
  {
    sequence: ['star', 'circle', 'circle', 'star', 'circle', 'circle'],
    answer: 'circle',
    explanation: 'Pattern with repetition: One Star, Two Circles repeats'
  }
];

const PatternAnswerKey: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 text-center">
        🔍 Pattern Magic - Answer Key 🔍
      </h1>

      <div className="space-y-6">
        {patterns.map((pattern, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
            <h2 className="text-lg font-bold text-blue-700 mb-4">
              Pattern {index + 1}
            </h2>
            
            {/* Pattern Display */}
            <div className="flex flex-wrap items-center gap-2 mb-4 bg-blue-50 p-3 rounded-xl">
              {pattern.sequence.map((shape, shapeIndex) => (
                <div
                  key={shapeIndex}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl bg-white rounded-lg shadow"
                >
                  {shapes[shape as keyof typeof shapes].icon}
                </div>
              ))}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl bg-green-100 rounded-lg shadow border-2 border-green-400">
                {shapes[pattern.answer as keyof typeof shapes].icon}
              </div>
            </div>

            {/* Answer and Explanation */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-700">
                <span className="font-bold">Answer:</span>
                <span>{shapes[pattern.answer as keyof typeof shapes].name}</span>
                <span className="text-2xl">{shapes[pattern.answer as keyof typeof shapes].icon}</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <span className="font-bold">Explanation:</span>
                <span>{pattern.explanation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatternAnswerKey; 
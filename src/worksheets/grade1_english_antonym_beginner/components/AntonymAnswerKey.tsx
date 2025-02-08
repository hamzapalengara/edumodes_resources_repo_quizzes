import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word search puzzle data with antonym pairs
const PUZZLE_DATA = {
  grid: [
    ['B', 'I', 'G', 'H', 'O', 'T', 'P', 'S'],
    ['S', 'M', 'A', 'L', 'L', 'F', 'A', 'T'],
    ['U', 'C', 'O', 'L', 'D', 'A', 'R', 'O'],
    ['P', 'H', 'A', 'P', 'P', 'Y', 'K', 'P'],
    ['S', 'A', 'D', 'E', 'W', 'S', 'L', 'D'],
    ['F', 'A', 'S', 'T', 'N', 'I', 'N', 'O'],
    ['S', 'L', 'O', 'W', 'E', 'W', 'E', 'W'],
    ['N', 'E', 'W', 'O', 'L', 'D', 'T', 'N']
  ],
  antonymPairs: [
    {
      given: "BIG",
      opposite: "SMALL",
      explanation: "BIG means taking up lots of space, while SMALL means taking up little space.",
      image: "🐘"
    },
    {
      given: "HOT",
      opposite: "COLD",
      explanation: "HOT means having a high temperature, while COLD means having a low temperature.",
      image: "🌡️"
    },
    {
      given: "HAPPY",
      opposite: "SAD",
      explanation: "HAPPY means feeling good and joyful, while SAD means feeling down and unhappy.",
      image: "😊"
    },
    {
      given: "FAST",
      opposite: "SLOW",
      explanation: "FAST means moving or happening quickly, while SLOW means taking a long time.",
      image: "🐇"
    },
    {
      given: "NEW",
      opposite: "OLD",
      explanation: "NEW means recently made or obtained, while OLD means having existed for a long time.",
      image: "📦"
    }
  ]
};

const AntonymAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      <WorksheetHeader />
      
      <div className="px-0 md:p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
          <h1 className="text-2xl font-bold text-center mb-4 md:mb-6 text-purple-600">
            Answer Key: Opposite Words
          </h1>

          <div className="space-y-6">
            {PUZZLE_DATA.antonymPairs.map(({ given, opposite, explanation, image }) => (
              <div 
                key={given}
                className="bg-purple-50 p-4 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{image}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-purple-700">{given}</span>
                      <span className="text-gray-500">⟷</span>
                      <span className="font-bold text-purple-700">{opposite}</span>
                    </div>
                    <p className="text-gray-700">{explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grid Location Guide */}
          <div className="mt-8 bg-indigo-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-purple-700">
              Word Locations in Grid:
            </h2>
            <div className="space-y-2">
              {PUZZLE_DATA.antonymPairs.map(({ given, opposite }) => (
                <div 
                  key={given}
                  className="flex items-center gap-2"
                >
                  <span className="font-semibold text-purple-600">{given}:</span>
                  <span className="text-gray-700">Find {opposite} in the grid</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Tips */}
          <div className="mt-8 bg-purple-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-purple-700">
              Understanding Opposites:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Opposites are words that have completely different meanings</li>
              <li>When you see one word, think about what would mean the exact opposite</li>
              <li>Use the pictures and explanations to help understand the meanings</li>
              <li>Practice using these opposite pairs in your own sentences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntonymAnswerKey; 
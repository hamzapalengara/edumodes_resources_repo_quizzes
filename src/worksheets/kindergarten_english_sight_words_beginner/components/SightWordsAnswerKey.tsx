import React from 'react';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

// Word search puzzle data (same as worksheet)
const PUZZLE_DATA = {
  grid: [
    ['T', 'H', 'E', 'Y', 'S', 'W', 'M', 'P'],
    ['G', 'O', 'N', 'I', 'L', 'B', 'A', 'L'],
    ['I', 'X', 'T', 'H', 'I', 'S', 'K', 'A'],
    ['F', 'P', 'W', 'A', 'N', 'T', 'E', 'Y'],
    ['T', 'N', 'H', 'V', 'E', 'O', 'P', 'R'],
    ['S', 'A', 'A', 'E', 'C', 'O', 'M', 'E'],
    ['H', 'E', 'T', 'R', 'E', 'E', 'N', 'D'],
    ['C', 'A', 'R', 'R', 'O', 'T', 'O', 'W']
  ],
  words: [
    { word: 'THEY', image: '👥', hint: 'More than one person', direction: 'Horizontal (right)', startPosition: '(1,1)' },
    { word: 'THIS', image: '👆', hint: 'Pointing to something near', direction: 'Horizontal (right)', startPosition: '(3,3)' },
    { word: 'WANT', image: '🙏', hint: 'To wish for something', direction: 'Horizontal (right)', startPosition: '(4,3)' },
    { word: 'COME', image: '🚶', hint: 'To move towards someone', direction: 'Horizontal (right)', startPosition: '(6,5)' },
    { word: 'HAVE', image: '✋', hint: 'To own or possess', direction: 'Horizontal (right)', startPosition: '(5,4)' },
    { word: 'PLAY', image: '🎮', hint: 'To have fun with toys or games', direction: 'Horizontal (right)', startPosition: '(2,8)' },
    { word: 'MAKE', image: '🛠️', hint: 'To create something', direction: 'Horizontal (right)', startPosition: '(7,1)' },
    { word: 'TREE', image: '🌳', hint: 'A tall plant with leaves', direction: 'Horizontal (right)', startPosition: '(7,3)' },
    { word: 'GIFT', image: '🎁', hint: 'Something you receive on special days', direction: 'Vertical (down)', startPosition: '(2,1)' },
    { word: 'NOW', image: '⌚', hint: 'At this moment', direction: 'Horizontal (right)', startPosition: '(8,6)' }
  ]
};

const SightWordsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnswerKeyHeader />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-green-600">
            Word Search Solutions
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Solution Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-8 gap-1 bg-blue-50 p-4 rounded-lg">
                {PUZZLE_DATA.grid.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {row.map((letter, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className="w-10 h-10 flex items-center justify-center text-lg font-bold rounded
                          bg-white border-2 border-blue-200"
                      >
                        {letter}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Solution Details */}
            <div className="md:w-96">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">
                  Word Locations:
                </h2>
                <div className="space-y-6">
                  {PUZZLE_DATA.words.map(({ word, image, hint, direction, startPosition }) => (
                    <div key={word} className="bg-white p-4 rounded-lg shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{image}</span>
                        <span className="font-bold text-blue-600">{word}</span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p><span className="font-semibold">Hint:</span> {hint}</p>
                        <p><span className="font-semibold">Direction:</span> {direction}</p>
                        <p><span className="font-semibold">Starts at:</span> {startPosition}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Learning Tips */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-4">
              Tips for Solving Word Search Puzzles:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Look for the first letter of each word</li>
              <li>Words can go horizontally (left to right)</li>
              <li>Words can go vertically (top to bottom)</li>
              <li>Use the pictures as clues</li>
              <li>Take your time and be patient</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SightWordsAnswerKey; 
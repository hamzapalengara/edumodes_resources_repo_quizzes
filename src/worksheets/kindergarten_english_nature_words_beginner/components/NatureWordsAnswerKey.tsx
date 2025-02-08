import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word colors for found words (same as worksheet)
const WORD_COLORS = [
  'bg-green-200',   // Light green
  'bg-emerald-200', // Light emerald
  'bg-teal-200',    // Light teal
  'bg-lime-200',    // Light lime
  'bg-cyan-200',    // Light cyan
  'bg-sky-200',     // Light sky
  'bg-blue-200',    // Light blue
  'bg-indigo-200',  // Light indigo
  'bg-violet-200',  // Light violet
  'bg-purple-200'   // Light purple
];

// Word search puzzle data with nature theme (same as worksheet)
const PUZZLE_DATA = {
  grid: [
    ['T', 'R', 'E', 'E', 'S', 'W', 'B', 'P'],
    ['G', 'R', 'O', 'W', 'L', 'B', 'I', 'L'],
    ['L', 'X', 'B', 'I', 'R', 'D', 'K', 'A'],
    ['F', 'P', 'L', 'N', 'S', 'T', 'E', 'N'],
    ['L', 'E', 'A', 'F', 'E', 'W', 'P', 'T'],
    ['O', 'A', 'N', 'E', 'E', 'D', 'M', 'S'],
    ['W', 'K', 'T', 'S', 'T', 'E', 'M', 'D'],
    ['S', 'E', 'E', 'D', 'S', 'T', 'O', 'W']
  ],
  words: [
    { word: 'TREES', image: '🌳', hint: 'Tall plants with leaves', positions: [[0,0], [0,1], [0,2], [0,3], [0,4]] },
    { word: 'GROW', image: '🌱', hint: 'To get bigger', positions: [[1,0], [1,1], [1,2], [1,3]] },
    { word: 'BIRD', image: '🐦', hint: 'A flying animal', positions: [[2,2], [2,3], [2,4], [2,5]] },
    { word: 'LEAF', image: '🍃', hint: 'A green part of a plant', positions: [[4,1], [4,2], [4,3], [4,4]] },
    { word: 'SEED', image: '🌰', hint: 'Plants grow from this', positions: [[7,0], [7,1], [7,2], [7,3]] },
    { word: 'FLOW', image: '💧', hint: 'How water moves', positions: [[5,0], [5,1], [5,2], [5,3]] },
    { word: 'NEED', image: '❤️', hint: 'Must have something', positions: [[5,3], [5,4], [5,5], [5,6]] },
    { word: 'PLANT', image: '🌿', hint: 'A living thing that grows', positions: [[3,4], [3,5], [3,6], [3,7], [3,8]] },
    { word: 'DEW', image: '💦', hint: 'Morning water drops', positions: [[4,4], [4,5], [4,6]] },
    { word: 'STEM', image: '🎋', hint: 'Part of a plant that holds it up', positions: [[6,3], [6,4], [6,5], [6,6]] }
  ]
};

const NatureWordsAnswerKey: React.FC = () => {
  // Create a grid that shows which cells belong to which words
  const gridWithWordIndices = Array(8).fill(null).map(() => Array(8).fill(null));
  
  // Fill in the grid with word indices
  PUZZLE_DATA.words.forEach((wordData, wordIndex) => {
    wordData.positions.forEach(([row, col]) => {
      if (row < 8 && col < 8) { // Only mark positions within grid bounds
        gridWithWordIndices[row][col] = wordIndex;
      }
    });
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100">
      <WorksheetHeader />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-emerald-600">
            Nature Words - Answer Key
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Word Search Grid with Solutions */}
            <div className="flex-1">
              <div className="grid grid-cols-8 gap-1 bg-emerald-50 p-4 rounded-lg">
                {PUZZLE_DATA.grid.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {row.map((letter, colIndex) => {
                      const wordIndex = gridWithWordIndices[rowIndex][colIndex];
                      return (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`
                            w-10 h-10 flex items-center justify-center
                            text-lg font-bold rounded
                            ${wordIndex !== null ? WORD_COLORS[wordIndex] : 'bg-white'}
                            border-2 border-emerald-200
                          `}
                        >
                          {letter}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Word List with Explanations */}
            <div className="md:w-64">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-emerald-700">
                  Words and Their Meanings:
                </h2>
                <div className="space-y-4">
                  {PUZZLE_DATA.words.map(({ word, image, hint }, index) => (
                    <div
                      key={word}
                      className={`flex items-center gap-3 p-2 rounded ${WORD_COLORS[index]}`}
                    >
                      <span className="text-2xl">{image}</span>
                      <div>
                        <div className="font-bold">{word}</div>
                        <div className="text-sm text-emerald-600">{hint}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Tips */}
          <div className="mt-8 bg-emerald-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-emerald-700">
              How to Read the Answer Key:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-emerald-700">
              <li>Each word is highlighted in a different color</li>
              <li>Words can be found horizontally, vertically, or diagonally</li>
              <li>Some letters may be part of multiple words</li>
              <li>Use the emojis and hints to remember what each word means</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureWordsAnswerKey; 
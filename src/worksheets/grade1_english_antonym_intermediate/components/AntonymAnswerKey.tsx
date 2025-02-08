import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word colors for found words - Rainbow theme
const WORD_COLORS = [
  'bg-violet-200',  // Light violet
  'bg-indigo-200',  // Light indigo
  'bg-blue-200',    // Light blue
  'bg-green-200',   // Light green
  'bg-yellow-200',  // Light yellow
  'bg-orange-200',  // Light orange
  'bg-red-200',     // Light red
  'bg-pink-200',    // Light pink
];

// Word search puzzle data with challenging antonym pairs
const PUZZLE_DATA = {
  grid: [
    ['C', 'R', 'E', 'A', 'T', 'E', 'X', 'X'],
    ['D', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['E', 'X', 'B', 'R', 'A', 'V', 'E', 'X'],
    ['S', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['T', 'X', 'S', 'T', 'R', 'O', 'N', 'G'],
    ['R', 'X', 'W', 'E', 'A', 'K', 'X', 'X'],
    ['O', 'X', 'C', 'O', 'W', 'A', 'R', 'D'],
    ['Y', 'X', 'L', 'E', 'A', 'D', 'X', 'X'],
    ['X', 'X', 'F', 'A', 'I', 'L', 'X', 'X']
  ],
  antonymPairs: [
    {
      given: "CREATE",
      opposite: "DESTROY",
      explanation: "CREATE means to make something new, while DESTROY means to break or tear something apart.",
      image: "🎨",
      positions: {
        CREATE: [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5]],
        DESTROY: [[1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0]]
      }
    },
    {
      given: "BRAVE",
      opposite: "COWARD",
      explanation: "BRAVE means showing courage in difficult situations, while COWARD means someone who lacks courage.",
      image: "🦁",
      positions: {
        BRAVE: [[2,2], [2,3], [2,4], [2,5], [2,6]],
        COWARD: [[6,2], [6,3], [6,4], [6,5], [6,6], [6,7]]
      }
    },
    {
      given: "STRONG",
      opposite: "WEAK",
      explanation: "STRONG means having great physical or mental power, while WEAK means lacking strength or power.",
      image: "💪",
      positions: {
        STRONG: [[4,2], [4,3], [4,4], [4,5], [4,6], [4,7]],
        WEAK: [[5,2], [5,3], [5,4], [5,5]]
      }
    },
    {
      given: "FOLLOW",
      opposite: "LEAD",
      explanation: "FOLLOW means to go after someone or something, while LEAD means to guide or direct others.",
      image: "👣",
      positions: {
        FOLLOW: [[6,1], [6,2], [6,3], [6,4], [6,5], [6,6]],
        LEAD: [[7,2], [7,3], [7,4], [7,5]]
      }
    },
    {
      given: "SUCCEED",
      opposite: "FAIL",
      explanation: "SUCCEED means to accomplish a goal or task, while FAIL means to be unsuccessful.",
      image: "🎯",
      positions: {
        SUCCEED: [[3,2], [3,3], [3,4], [3,5], [3,6], [3,7]],
        FAIL: [[8,2], [8,3], [8,4], [8,5]]
      }
    }
  ]
};

const AntonymAnswerKey: React.FC = () => {
  // Create a grid that shows which cells belong to which words
  const gridWithWords = Array(9).fill(null).map(() => Array(8).fill(null));
  
  // Update the grid with word positions
  PUZZLE_DATA.antonymPairs.forEach((pair, pairIndex) => {
    Object.entries(pair.positions).forEach(([_, positions]) => {
      positions.forEach(([row, col]: [number, number]) => {
        if (row < 9 && col < 8) { // Add bounds checking
          gridWithWords[row][col] = {
            letter: PUZZLE_DATA.grid[row][col],
            wordIndex: pairIndex
          };
        }
      });
    });
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-indigo-100">
      <WorksheetHeader />
      
      <div className="px-0 md:p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
          <h1 className="text-2xl font-bold text-center mb-4 md:mb-6 text-violet-600">
            Answer Key: Intermediate Antonyms
          </h1>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Word Search Grid with Solutions */}
            <div className="flex-1">
              <div className="grid grid-cols-8 gap-0.5 md:gap-1 bg-violet-50 p-2 md:p-4 rounded-lg">
                {PUZZLE_DATA.grid.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {row.map((letter, colIndex) => {
                      const wordIndex = gridWithWords[rowIndex]?.[colIndex]?.wordIndex;
                      return (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`
                            w-full aspect-square flex items-center justify-center
                            text-base md:text-lg font-bold rounded
                            ${wordIndex !== undefined ? WORD_COLORS[wordIndex] : 'bg-white'}
                            border md:border-2 border-violet-200
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
            <div className="md:w-72">
              <div className="bg-violet-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-violet-700">
                  Word Pairs and Meanings:
                </h2>
                <div className="space-y-4">
                  {PUZZLE_DATA.antonymPairs.map(({ given, opposite, explanation, image }, index) => (
                    <div key={index} className="mb-8">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl">{image}</span>
                        <div className="text-xl font-bold text-purple-600">{given}</div>
                        <div className="text-gray-500">vs</div>
                        <div className="text-xl font-bold text-blue-600">{opposite}</div>
                      </div>
                      <p className="text-gray-700">{explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Word Finding Tips */}
          <div className="mt-8 bg-violet-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-violet-700">
              Tips for Finding Words:
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-violet-600 mb-2">Word Directions</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Words can go across (→) or down (↓)</li>
                  <li>Some words are hidden diagonally (↘)</li>
                  <li>Look carefully for longer words</li>
                  <li>Pay attention to shared letters</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-violet-600 mb-2">Understanding Antonyms</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Think about opposite meanings</li>
                  <li>Consider different word forms</li>
                  <li>Use context clues from hints</li>
                  <li>Look for related concepts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Extensions */}
          <div className="mt-8 bg-indigo-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-indigo-700">
              Extend Your Learning:
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">Make Sentences:</span> Practice using each pair of antonyms in sentences to better understand their meanings.
              </p>
              <p>
                <span className="font-semibold">Find More Examples:</span> Can you think of other situations where these opposite words might be used?
              </p>
              <p>
                <span className="font-semibold">Word Families:</span> Look for other words that are related to each antonym pair (e.g., CREATE → creative, creation).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntonymAnswerKey; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word colors for found words - More distinct colors
const WORD_COLORS = [
  'bg-red-200',     // Light red
  'bg-blue-200',    // Light blue
  'bg-green-200',   // Light green
  'bg-yellow-200',  // Light yellow
  'bg-purple-200',  // Light purple
  'bg-orange-200',  // Light orange
  'bg-teal-200',    // Light teal
  'bg-pink-200',    // Light pink
  'bg-indigo-200',  // Light indigo
  'bg-emerald-200'  // Light emerald
];

// Word search puzzle data with space theme and rhyming words
const PUZZLE_DATA = {
  grid: [
    ['S', 'T', 'A', 'R', 'X', 'F', 'A', 'R'],
    ['P', 'M', 'O', 'O', 'N', 'X', 'X', 'X'],
    ['A', 'X', 'X', 'X', 'S', 'O', 'O', 'N'],
    ['C', 'X', 'X', 'B', 'L', 'U', 'E', 'X'],
    ['E', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['R', 'A', 'C', 'E', 'X', 'S', 'K', 'Y'],
    ['O', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['C', 'X', 'D', 'O', 'C', 'K', 'X', 'X'],
    ['K', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  ],
  rhymePairs: [
    {
      words: ['STAR', 'FAR'],
      image: '⭐',
      positions: {
        STAR: [[0,0], [0,1], [0,2], [0,3]],
        FAR: [[0,5], [0,6], [0,7]]
      }
    },
    {
      words: ['MOON', 'SOON'],
      image: '🌙',
      positions: {
        MOON: [[1,1], [1,2], [1,3], [1,4]],
        SOON: [[2,4], [2,5], [2,6], [2,7]]
      }
    },
    {
      words: ['SPACE', 'RACE'],
      image: '🚀',
      positions: {
        SPACE: [[0,0], [1,0], [2,0], [3,0], [4,0]],
        RACE: [[5,0], [5,1], [5,2], [5,3]]
      }
    },
    {
      words: ['BLUE', 'SKY'],
      image: '🌌',
      positions: {
        BLUE: [[3,3], [3,4], [3,5], [3,6]],
        SKY: [[5,5], [5,6], [5,7]]
      }
    },
    {
      words: ['ROCK', 'DOCK'],
      image: '🛸',
      positions: {
        ROCK: [[5,0], [6,0], [7,0], [8,0]],
        DOCK: [[7,2], [7,3], [7,4], [7,5]]
      }
    }
  ]
};

const RhymingSpaceAnswerKey: React.FC = () => {
  // Create a grid that shows which cells belong to which words
  const gridWithWordIndices = Array(9).fill(null).map(() => Array(8).fill(null));
  
  // Fill in the grid with word indices
  PUZZLE_DATA.rhymePairs.forEach((pair, pairIndex) => {
    Object.values(pair.positions).forEach(positions => {
      positions.forEach(([row, col]: [number, number]) => {
        if (row < 9 && col < 8) {
          gridWithWordIndices[row][col] = pairIndex;
        }
      });
    });
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <WorksheetHeader />
      
      <div className="p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
            Space Rhyming Words - Answer Key
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Word Search Grid with Solutions */}
            <div className="flex-1">
              <div className="grid grid-cols-8 gap-1 bg-gray-50 p-4 rounded-lg">
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
                            border-2 border-gray-200
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

            {/* Word List with Directions */}
            <div className="md:w-72">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">
                  Word Locations:
                </h2>
                <div className="space-y-4">
                  {PUZZLE_DATA.rhymePairs.map(({ words, image }, index) => (
                    <div
                      key={words.join('-')}
                      className={`p-4 rounded-lg ${WORD_COLORS[index]}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{image}</span>
                        <div className="flex-1">
                          <div className="font-bold">
                            {words[0]} • {words[1]}
                          </div>
                          <div className="text-sm mt-1">
                            <div>• {words[0]}: {words[0] === 'SPACE' || words[0] === 'ROCK' ? 'Down' : 'Left to Right'}</div>
                            <div>• {words[1]}: Left to Right</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Learning Tips */}
          <div className="mt-8 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Understanding Rhyming Words:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Words that rhyme have the same ending sound</li>
              <li>Each color shows a pair of rhyming words</li>
              <li>Look at the hints to understand how the words are related</li>
              <li>Practice saying the words out loud to hear the rhyme</li>
              <li>Notice how some rhyming words have different spellings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RhymingSpaceAnswerKey; 
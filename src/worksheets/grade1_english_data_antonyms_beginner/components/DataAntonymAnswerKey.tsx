import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word colors for found words - Blue/Cyan theme
const WORD_COLORS = [
  'bg-blue-200',    // Light blue
  'bg-cyan-200',    // Light cyan
  'bg-sky-200',     // Light sky
  'bg-teal-200',    // Light teal
  'bg-indigo-200'   // Light indigo
];

// Antonym pairs with explanations
const ANTONYM_PAIRS = [
  {
    given: 'FULL',
    opposite: 'EMPTY',
    explanation: "When a container is FULL, it has no space left. When it's EMPTY, it has nothing inside.",
    image: '📦'
  },
  {
    given: 'FIRST',
    opposite: 'LAST',
    explanation: "FIRST means at the beginning of a sequence. LAST means at the end of a sequence.",
    image: '🏁'
  },
  {
    given: 'START',
    opposite: 'END',
    explanation: "START is the beginning of something. END is where something finishes.",
    image: '🎯'
  },
  {
    given: 'YES',
    opposite: 'NO',
    explanation: "YES is used to agree or confirm. NO is used to disagree or deny.",
    image: '✅'
  },
  {
    given: 'IN',
    opposite: 'OUT',
    explanation: "IN means inside or within something. OUT means outside or away from something.",
    image: '🚪'
  }
];

// Grid solution with word locations
const GRID_SOLUTION = [
  ['F', 'U', 'L', 'L', 'E', 'M', 'P'],
  ['I', 'N', 'F', 'I', 'R', 'S', 'T'],
  ['R', 'L', 'A', 'S', 'T', 'O', 'Y'],
  ['S', 'T', 'A', 'R', 'T', 'P', 'E'],
  ['T', 'E', 'N', 'D', 'Y', 'E', 'S'],
  ['N', 'O', 'P', 'T', 'Y', 'N', 'S']
];

// Word locations in grid
const WORD_LOCATIONS = [
  { word: 'FULL', direction: 'horizontal', start: [0, 0], end: [0, 3] },
  { word: 'EMPTY', direction: 'vertical', start: [0, 4], end: [4, 4] },
  { word: 'FIRST', direction: 'horizontal', start: [1, 2], end: [1, 6] },
  { word: 'LAST', direction: 'horizontal', start: [2, 2], end: [2, 5] },
  { word: 'START', direction: 'horizontal', start: [3, 0], end: [3, 4] },
  { word: 'END', direction: 'horizontal', start: [4, 2], end: [4, 4] },
  { word: 'YES', direction: 'horizontal', start: [4, 4], end: [4, 6] },
  { word: 'NO', direction: 'horizontal', start: [5, 0], end: [5, 1] },
  { word: 'IN', direction: 'horizontal', start: [1, 1], end: [1, 2] },
  { word: 'OUT', direction: 'vertical', start: [2, 5], end: [5, 5] }
];

const DataAntonymAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100">
      <WorksheetHeader />
      
      <div className="px-0 md:p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
          <h1 className="text-2xl font-bold text-center mb-4 md:mb-6 text-blue-600">
            Answer Key: Opposite Words
          </h1>

          {/* Word Locations in Grid */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              Word Locations in Grid
            </h2>
            <div className="grid grid-cols-7 gap-0.5 md:gap-1 bg-blue-50 p-2 md:p-4 rounded-lg">
              {GRID_SOLUTION.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.map((letter, colIndex) => {
                    const wordLocation = WORD_LOCATIONS.find(loc => {
                      if (loc.direction === 'horizontal') {
                        return (
                          rowIndex === loc.start[0] &&
                          colIndex >= loc.start[1] &&
                          colIndex <= loc.end[1]
                        );
                      } else {
                        return (
                          colIndex === loc.start[1] &&
                          rowIndex >= loc.start[0] &&
                          rowIndex <= loc.end[0]
                        );
                      }
                    });

                    const wordIndex = wordLocation ? WORD_LOCATIONS.indexOf(wordLocation) % WORD_COLORS.length : -1;

                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`
                          w-full aspect-square flex items-center justify-center
                          text-base md:text-lg font-bold rounded
                          ${wordIndex >= 0 ? WORD_COLORS[wordIndex] : 'bg-white'}
                          border md:border-2 border-blue-200
                        `}
                      >
                        {letter}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* Understanding Opposites */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              Understanding Opposites
            </h2>
            <div className="grid gap-4">
              {ANTONYM_PAIRS.map(({ given, opposite, explanation, image }, index) => (
                <div
                  key={`${given}-${opposite}`}
                  className={`${WORD_COLORS[index]} rounded-lg p-4`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{image}</span>
                    <div>
                      <div className="font-bold text-lg mb-2">
                        {given} ↔️ {opposite}
                      </div>
                      <p className="text-gray-700">{explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips for Finding Words */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              Tips for Finding Words
            </h2>
            <div className="bg-blue-50 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Words can be found horizontally (left to right) or vertically (top to bottom)</li>
                <li>Each word is connected to its opposite by meaning</li>
                <li>Look for the given word first, then find its opposite</li>
                <li>Use the emoji hints to help understand the relationship between words</li>
                <li>Take your time and read each letter carefully</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataAntonymAnswerKey; 
import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import confetti from 'canvas-confetti';

// Word colors for found words - Rainbow theme for more challenge
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
      hint: "One makes new things, the other breaks them apart",
      image: "🎨",
      points: 20
    },
    {
      given: "BRAVE",
      opposite: "COWARD",
      hint: "One faces fears, the other runs away",
      image: "🦁",
      points: 20
    },
    {
      given: "STRONG",
      opposite: "WEAK",
      hint: "One has great power, the other has little",
      image: "💪",
      points: 20
    },
    {
      given: "FOLLOW",
      opposite: "LEAD",
      hint: "One shows the way, the other comes after",
      image: "👣",
      points: 20
    },
    {
      given: "SUCCEED",
      opposite: "FAIL",
      hint: "One reaches the goal, the other doesn't make it",
      image: "🎯",
      points: 20
    }
  ]
};

interface Cell {
  letter: string;
  selected: boolean;
  isPartOfWord: boolean;
  wordIndex?: number;
}

interface Position {
  row: number;
  col: number;
}

// Speech synthesis utility with more expressive feedback
const speak = (text: string) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.1; // Slightly higher pitch for more enthusiasm
  window.speechSynthesis.speak(utterance);
};

const AntonymWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>(
    PUZZLE_DATA.grid.map(row =>
      row.map(letter => ({
        letter,
        selected: false,
        isPartOfWord: false
      }))
    )
  );
  const [selectedCells, setSelectedCells] = useState<Position[]>([]);
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const [lastTouchPosition, setLastTouchPosition] = useState<Position | null>(null);

  // Add ref for touch container
  const gridContainerRef = React.useRef<HTMLDivElement>(null);

  // Initialize grid and add touch-action style
  useEffect(() => {
    if (gridContainerRef.current) {
      gridContainerRef.current.style.touchAction = 'none';
    }

    // Add document-level touch end handler
    const handleDocumentTouchEnd = () => {
      if (isDragging) {
        const word = selectedCells.map(cell => grid[cell.row][cell.col].letter).join('');
        checkWord(word);
        resetSelection();
      }
    };

    document.addEventListener('touchend', handleDocumentTouchEnd);
    return () => {
      document.removeEventListener('touchend', handleDocumentTouchEnd);
    };
  }, [isDragging, selectedCells, grid]);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  const getCellPosition = (event: React.TouchEvent | React.MouseEvent): Position | null => {
    const element = event.target as HTMLElement;
    const cell = element.closest('[data-row]');
    if (!cell) return null;

    const row = parseInt(cell.getAttribute('data-row') || '0', 10);
    const col = parseInt(cell.getAttribute('data-col') || '0', 10);
    return { row, col };
  };

  const handleStart = (event: React.TouchEvent | React.MouseEvent) => {
    const position = getCellPosition(event);
    if (!position) return;

    const { row, col } = position;
    setIsDragging(true);
    setLastTouchPosition(position);

    const newGrid = [...grid];
    newGrid[row][col].selected = true;
    setGrid(newGrid);
    setSelectedCells([position]);

    if ('touches' in event) {
      event.preventDefault();
    }
  };

  const handleMove = (event: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    let position: Position | null = null;

    if ('touches' in event) {
      event.preventDefault();
      const touch = event.touches[0];
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      if (element) {
        const cell = element.closest('[data-row]');
        if (cell) {
          position = {
            row: parseInt(cell.getAttribute('data-row') || '0', 10),
            col: parseInt(cell.getAttribute('data-col') || '0', 10)
          };
        }
      }
    } else {
      position = getCellPosition(event);
    }

    if (!position || (lastTouchPosition?.row === position.row && lastTouchPosition?.col === position.col)) {
      return;
    }

    setLastTouchPosition(position);
    const { row, col } = position;

    // Only add cell if it's not already selected
    if (!selectedCells.some(cell => cell.row === row && cell.col === col)) {
      const newGrid = [...grid];
      newGrid[row][col].selected = true;
      setGrid(newGrid);
      
      const newSelectedCells = [...selectedCells, position];
      setSelectedCells(newSelectedCells);
    }
  };

  const checkWord = (word: string) => {
    const wordPair = PUZZLE_DATA.antonymPairs.find(
      pair => pair.opposite === word || pair.given === word
    );
    
    if (wordPair && !foundWords.has(word)) {
      // Mark cells as part of word with color index
      const newGrid = [...grid];
      selectedCells.forEach(({ row, col }) => {
        newGrid[row][col].isPartOfWord = true;
        newGrid[row][col].wordIndex = PUZZLE_DATA.antonymPairs.indexOf(wordPair);
      });
      setGrid(newGrid);
      
      // Add to found words
      const newFoundWords = new Set(foundWords);
      newFoundWords.add(word);
      setFoundWords(newFoundWords);
      
      // Add points and bonus
      speak(`Excellent! ${word} is the opposite of ${wordPair.given}. ${wordPair.hint}`);
      
      // Trigger confetti with custom colors
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B5CF6', '#6366F1', '#3B82F6', '#10B981']
      });
    }
  };

  const resetSelection = () => {
    // Clear selection
    const newGrid = [...grid];
    grid.forEach((row, i) => {
      row.forEach((_, j) => {
        if (!newGrid[i][j].isPartOfWord) {
          newGrid[i][j].selected = false;
        }
      });
    });
    setGrid(newGrid);
    setSelectedCells([]);
    setIsDragging(false);
    setLastTouchPosition(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50">
      <WorksheetHeader />
      <div className="p-4">
        <WorksheetTracker
          totalQuestions={PUZZLE_DATA.antonymPairs.length}
          pointsPerQuestion={20}
          onSummaryGenerated={handleSummaryGenerated}
        >
          {({ score }) => (
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay score={score} totalQuestions={PUZZLE_DATA.antonymPairs.length * 20} />
              <div className="px-0 md:p-4 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
                  <h1 className="text-2xl font-bold text-center mb-4 md:mb-6 text-violet-600">
                    Find the Opposite Words!
                  </h1>

                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    {/* Word Search Grid */}
                    <div className="flex-1">
                      <div 
                        ref={gridContainerRef}
                        className="grid grid-cols-8 gap-0.5 md:gap-1 bg-violet-50 p-2 md:p-4 rounded-lg select-none"
                      >
                        {grid.map((row, rowIndex) => (
                          <React.Fragment key={rowIndex}>
                            {row.map((cell, colIndex) => (
                              <div
                                key={`${rowIndex}-${colIndex}`}
                                data-row={rowIndex}
                                data-col={colIndex}
                                className={`
                                  w-full aspect-square flex items-center justify-center
                                  text-base md:text-lg font-bold rounded cursor-pointer
                                  ${cell.isPartOfWord ? WORD_COLORS[cell.wordIndex!] : cell.selected ? 'bg-yellow-100' : 'bg-white'}
                                  border md:border-2 border-violet-200 transition-colors
                                  select-none hover:scale-105 transform duration-150
                                `}
                                onMouseDown={handleStart}
                                onMouseEnter={handleMove}
                                onMouseUp={() => {
                                  if (isDragging) {
                                    const word = selectedCells.map(cell => grid[cell.row][cell.col].letter).join('');
                                    checkWord(word);
                                    resetSelection();
                                  }
                                }}
                                onTouchStart={handleStart}
                                onTouchMove={handleMove}
                              >
                                {cell.letter}
                              </div>
                            ))}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Word List */}
                    <div className="md:w-64">
                      <div className="bg-violet-50 p-4 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4 text-violet-700">
                          Find Opposites For:
                        </h2>
                        <div className="space-y-4">
                          {PUZZLE_DATA.antonymPairs.map(({ given, opposite, hint, image }, index) => (
                            <div
                              key={given}
                              className={`
                                flex items-center gap-3 p-2 rounded
                                ${foundWords.has(opposite) ? WORD_COLORS[index] : 'bg-white'}
                                transform transition-transform hover:scale-105 duration-200
                              `}
                            >
                              <span className="text-2xl">{image}</span>
                              <div>
                                <div className="font-bold">{given}</div>
                                <div className="text-sm text-violet-600 italic">
                                  {foundWords.has(opposite) ? opposite : hint}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bonus Points Info */}
                      <div className="mt-4 bg-indigo-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-indigo-700 mb-2">
                          Bonus Points:
                        </h3>
                        <p className="text-sm text-indigo-600">
                          Find words quickly to earn extra points! You have 10 seconds for each word.
                        </p>
                      </div>
                    </div>
                  </div>

                  {foundWords.size === PUZZLE_DATA.antonymPairs.length && (
                    <div className="mt-8 text-center">
                      <h2 className="text-2xl font-bold text-violet-600">
                        🎉 Amazing! You've found all the opposite words! 🌟
                      </h2>
                      <p className="mt-2 text-violet-500">
                        Total Score: {score} points
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </WorksheetTracker>
      </div>
    </div>
  );
};

export default AntonymWorksheet; 
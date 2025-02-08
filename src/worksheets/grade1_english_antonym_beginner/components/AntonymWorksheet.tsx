import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import confetti from 'canvas-confetti';

// Word colors for found words - Purple theme
const WORD_COLORS = [
  'bg-purple-200',  // Light purple
  'bg-indigo-200',  // Light indigo
  'bg-violet-200',  // Light violet
  'bg-fuchsia-200', // Light fuchsia
  'bg-pink-200',    // Light pink
  'bg-blue-200',    // Light blue
  'bg-sky-200',     // Light sky
  'bg-cyan-200',    // Light cyan
  'bg-slate-200',   // Light slate
  'bg-gray-200'     // Light gray
];

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
      words: ['BIG', 'SMALL'],
      image: '📏',
      hint: 'Find the opposite of BIG',
      shownWord: 'BIG'
    },
    {
      words: ['HOT', 'COLD'],
      image: '🌡️',
      hint: 'Find the opposite of HOT',
      shownWord: 'HOT'
    },
    {
      words: ['HAPPY', 'SAD'],
      image: '😊',
      hint: 'Find the opposite of HAPPY',
      shownWord: 'HAPPY'
    },
    {
      words: ['FAST', 'SLOW'],
      image: '🐇',
      hint: 'Find the opposite of FAST',
      shownWord: 'FAST'
    },
    {
      words: ['NEW', 'OLD'],
      image: '📦',
      hint: 'Find the opposite of NEW',
      shownWord: 'NEW'
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

// Speech synthesis utility
const speak = (text: string) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.8;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
};

const AntonymWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [selectedCells, setSelectedCells] = useState<Position[]>([]);
  const [foundWords, setFoundWords] = useState<Set<string>>(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [lastTouchPosition, setLastTouchPosition] = useState<Position | null>(null);

  // Add ref for touch container
  const gridContainerRef = React.useRef<HTMLDivElement>(null);

  // Initialize grid and add touch-action style
  useEffect(() => {
    const initialGrid = PUZZLE_DATA.grid.map(row =>
      row.map(letter => ({
        letter,
        selected: false,
        isPartOfWord: false
      }))
    );
    setGrid(initialGrid);

    if (gridContainerRef.current) {
      gridContainerRef.current.style.touchAction = 'none';
    }
  }, []);

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
    setCurrentWord(grid[row][col].letter);

    if ('touches' in event) {
      event.preventDefault();
    }
  };

  const handleMove = (event: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    let position: Position | null = null;

    if ('touches' in event) {
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
      event.preventDefault();
    } else {
      position = getCellPosition(event);
    }

    if (!position || (lastTouchPosition?.row === position.row && lastTouchPosition?.col === position.col)) {
      return;
    }

    setLastTouchPosition(position);
    const { row, col } = position;

    const newGrid = [...grid];
    newGrid[row][col].selected = true;
    setGrid(newGrid);
    
    const newSelectedCells = [...selectedCells, position];
    setSelectedCells(newSelectedCells);
    
    const word = newSelectedCells.map(cell => grid[cell.row][cell.col].letter).join('');
    setCurrentWord(word);
  };

  // Find the antonym pair for a word
  const findAntonymPair = (word: string) => {
    return PUZZLE_DATA.antonymPairs.find(pair => pair.words.includes(word));
  };

  return (
    <WorksheetTracker
      totalQuestions={5}  // 5 antonym pairs
      pointsPerQuestion={20}  // 20 points per correct answer
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markAttempted, score }) => (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
          <WorksheetHeader />
          
          <div className="bg-blue-50 p-4 shadow-md mb-4">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score}
                totalQuestions={100}  // Total possible score (5 pairs * 20 points)
              />
            </div>
          </div>
          
          <div className="px-0 md:p-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
              <h1 className="text-2xl font-bold text-center mb-4 md:mb-6 text-purple-600">
                Find the Opposite Words!
              </h1>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Word Search Grid */}
                <div className="flex-1">
                  <div 
                    ref={gridContainerRef}
                    className="grid grid-cols-8 gap-0.5 md:gap-1 bg-purple-50 p-2 md:p-4 rounded-lg select-none"
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
                              border md:border-2 border-purple-200 transition-colors
                              select-none
                            `}
                            onMouseDown={handleStart}
                            onMouseEnter={handleMove}
                            onMouseUp={() => {
                              const selectedWord = currentWord;
                              const antonymPair = findAntonymPair(selectedWord);
                              
                              markAttempted();
                              
                              if (antonymPair && !foundWords.has(selectedWord)) {
                                // Mark cells as part of word with color index
                                const newGrid = [...grid];
                                const wordIndex = PUZZLE_DATA.antonymPairs.indexOf(antonymPair);
                                selectedCells.forEach(({ row, col }) => {
                                  newGrid[row][col].isPartOfWord = true;
                                  newGrid[row][col].wordIndex = wordIndex;
                                });
                                setGrid(newGrid);
                                
                                // Add to found words
                                const newFoundWords = new Set(foundWords);
                                newFoundWords.add(selectedWord);
                                setFoundWords(newFoundWords);
                                
                                // Mark as correct (this will add points)
                                markCorrect();
                                
                                // Trigger confetti with theme colors
                                confetti({
                                  particleCount: 100,
                                  spread: 70,
                                  origin: { y: 0.6 },
                                  colors: ['#C084FC', '#818CF8', '#A78BFA', '#F0ABFC', '#E879F9']
                                });

                                // Speak only the found word
                                speak(selectedWord);
                              }

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
                              setCurrentWord('');
                              setIsDragging(false);
                              setLastTouchPosition(null);
                            }}
                            onTouchStart={handleStart}
                            onTouchMove={handleMove}
                            onTouchEnd={() => {
                              const selectedWord = currentWord;
                              const antonymPair = findAntonymPair(selectedWord);
                              
                              markAttempted();
                              
                              if (antonymPair && !foundWords.has(selectedWord)) {
                                // Mark cells as part of word with color index
                                const newGrid = [...grid];
                                const wordIndex = PUZZLE_DATA.antonymPairs.indexOf(antonymPair);
                                selectedCells.forEach(({ row, col }) => {
                                  newGrid[row][col].isPartOfWord = true;
                                  newGrid[row][col].wordIndex = wordIndex;
                                });
                                setGrid(newGrid);
                                
                                // Add to found words
                                const newFoundWords = new Set(foundWords);
                                newFoundWords.add(selectedWord);
                                setFoundWords(newFoundWords);
                                
                                // Mark as correct (this will add points)
                                markCorrect();
                                
                                // Trigger confetti with theme colors
                                confetti({
                                  particleCount: 100,
                                  spread: 70,
                                  origin: { y: 0.6 },
                                  colors: ['#C084FC', '#818CF8', '#A78BFA', '#F0ABFC', '#E879F9']
                                });

                                // Speak only the found word
                                speak(selectedWord);
                              }

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
                              setCurrentWord('');
                              setIsDragging(false);
                              setLastTouchPosition(null);
                            }}
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
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-purple-700">
                      Find the Opposites:
                    </h2>
                    <div className="space-y-4">
                      {PUZZLE_DATA.antonymPairs.map(({ words, image, hint, shownWord }, index) => {
                        const oppositeWord = words.find(w => w !== shownWord)!;
                        return (
                          <div
                            key={words.join('-')}
                            className={`
                              p-3 rounded-lg
                              ${foundWords.has(oppositeWord) ? WORD_COLORS[index] : 'bg-white'}
                            `}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{image}</span>
                              <div className="flex-1">
                                <div className="font-bold">
                                  {shownWord}
                                </div>
                                <div className={`font-bold ${foundWords.has(oppositeWord) ? '' : 'opacity-0'}`}>
                                  {oppositeWord}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm text-purple-600">{hint}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {foundWords.size === PUZZLE_DATA.antonymPairs.length * 2 && (
                <div className="mt-8 text-center">
                  <h2 className="text-2xl font-bold text-purple-600">
                    🎉 Amazing! You've found all the opposite words! 🎯
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default AntonymWorksheet; 
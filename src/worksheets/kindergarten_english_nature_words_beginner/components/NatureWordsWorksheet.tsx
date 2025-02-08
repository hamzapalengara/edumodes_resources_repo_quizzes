import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import confetti from 'canvas-confetti';

// Word colors for found words
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

// Word search puzzle data with nature theme
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
    { word: 'TREES', image: '🌳', hint: 'Tall plants with leaves' },
    { word: 'GROW', image: '🌱', hint: 'To get bigger' },
    { word: 'BIRD', image: '🐦', hint: 'A flying animal' },
    { word: 'LEAF', image: '🍃', hint: 'A green part of a plant' },
    { word: 'SEED', image: '🌰', hint: 'Plants grow from this' },
    { word: 'FLOW', image: '💧', hint: 'How water moves' },
    { word: 'NEED', image: '❤️', hint: 'Must have something' },
    { word: 'PLANT', image: '🌿', hint: 'A living thing that grows' },
    { word: 'DEW', image: '💦', hint: 'Morning water drops' },
    { word: 'STEM', image: '🎋', hint: 'Part of a plant that holds it up' }
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
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
};

const NatureWordsWorksheet: React.FC = () => {
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

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markAttempted, score }) => (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100">
          <WorksheetHeader />
          
          <div className="bg-green-50 p-4 shadow-md mb-4">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score}
                totalQuestions={100}
              />
            </div>
          </div>
          
          <div className="px-0 md:p-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
              <h1 className="text-2xl font-bold text-center mb-4 md:mb-6 text-emerald-600">
                Find Nature Words
              </h1>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Word Search Grid */}
                <div className="flex-1">
                  <div 
                    ref={gridContainerRef}
                    className="grid grid-cols-8 gap-0.5 md:gap-1 bg-emerald-50 p-2 md:p-4 rounded-lg select-none"
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
                              border md:border-2 border-emerald-200 transition-colors
                              select-none
                            `}
                            onMouseDown={handleStart}
                            onMouseEnter={handleMove}
                            onMouseUp={() => {
                              const selectedWord = currentWord;
                              const wordIndex = PUZZLE_DATA.words.findIndex(({ word }) => word === selectedWord);
                              
                              markAttempted();
                              
                              if (wordIndex !== -1 && !foundWords.has(selectedWord)) {
                                const wordData = PUZZLE_DATA.words[wordIndex];
                                
                                // Mark cells as part of word with color index
                                const newGrid = [...grid];
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
                                
                                // Trigger confetti with nature colors
                                confetti({
                                  particleCount: 100,
                                  spread: 70,
                                  origin: { y: 0.6 },
                                  colors: ['#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0']
                                });

                                // Speak the word and its hint
                                speak(`${wordData.word}. ${wordData.hint}`);
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
                              const wordIndex = PUZZLE_DATA.words.findIndex(({ word }) => word === selectedWord);
                              
                              markAttempted();
                              
                              if (wordIndex !== -1 && !foundWords.has(selectedWord)) {
                                const wordData = PUZZLE_DATA.words[wordIndex];
                                
                                // Mark cells as part of word with color index
                                const newGrid = [...grid];
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
                                
                                // Trigger confetti with nature colors
                                confetti({
                                  particleCount: 100,
                                  spread: 70,
                                  origin: { y: 0.6 },
                                  colors: ['#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0']
                                });

                                // Speak the word and its hint
                                speak(`${wordData.word}. ${wordData.hint}`);
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
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-emerald-700">
                      Nature Words to Find:
                    </h2>
                    <div className="space-y-4">
                      {PUZZLE_DATA.words.map(({ word, image, hint }, index) => (
                        <div
                          key={word}
                          className={`
                            flex items-center gap-3 p-2 rounded
                            ${foundWords.has(word) ? WORD_COLORS[index] : 'bg-white'}
                          `}
                        >
                          <span className="text-2xl">{image}</span>
                          <div>
                            <div className={`font-bold ${foundWords.has(word) ? 'line-through' : ''}`}>
                              {word}
                            </div>
                            <div className="text-sm text-emerald-600">{hint}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {foundWords.size === PUZZLE_DATA.words.length && (
                <div className="mt-8 text-center">
                  <h2 className="text-2xl font-bold text-emerald-600">
                    🌿 Congratulations! You've found all the nature words! 🌱
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

export default NatureWordsWorksheet; 
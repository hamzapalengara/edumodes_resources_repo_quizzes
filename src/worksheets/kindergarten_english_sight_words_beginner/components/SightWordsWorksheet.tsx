import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import confetti from 'canvas-confetti';

// Word colors for found words
const WORD_COLORS = [
  'bg-green-200',   // Light green
  'bg-blue-200',    // Light blue
  'bg-purple-200',  // Light purple
  'bg-pink-200',    // Light pink
  'bg-yellow-200',  // Light yellow
  'bg-orange-200',  // Light orange
  'bg-red-200',     // Light red
  'bg-indigo-200',  // Light indigo
  'bg-teal-200',    // Light teal
  'bg-cyan-200'     // Light cyan
];

// Word search puzzle data
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
    { word: 'THEY', image: '👥', hint: 'More than one person' },
    { word: 'THIS', image: '👆', hint: 'Pointing to something near' },
    { word: 'WANT', image: '🙏', hint: 'To wish for something' },
    { word: 'COME', image: '🚶', hint: 'To move towards someone' },
    { word: 'HAVE', image: '✋', hint: 'To own or possess' },
    { word: 'PLAY', image: '🎮', hint: 'To have fun with toys or games' },
    { word: 'MAKE', image: '🛠️', hint: 'To create something' },
    { word: 'TREE', image: '🌳', hint: 'A tall plant with leaves' },
    { word: 'GIFT', image: '🎁', hint: 'Something you receive on special days' },
    { word: 'NOW', image: '⌚', hint: 'At this moment' }
  ]
};

interface Cell {
  letter: string;
  selected: boolean;
  isPartOfWord: boolean;
  wordIndex?: number; // Add wordIndex to track which word the cell belongs to
}

interface Position {
  row: number;
  col: number;
}

// Add this utility function at the top
const speak = (text: string) => {
  // Cancel any ongoing speech
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  
  // Create and speak new utterance
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
};

const SightWordsWorksheet: React.FC = () => {
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

    // Add touch-action: none to the container
    if (gridContainerRef.current) {
      gridContainerRef.current.style.touchAction = 'none';
    }
  }, []);

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

    // Prevent scrolling on touch devices
    if ('touches' in event) {
      event.preventDefault();
    }
  };

  const handleMove = (event: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    let position: Position | null = null;

    if ('touches' in event) {
      // Touch event
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
      // Mouse event
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

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ addPoints, markCorrect, markAttempted, score }) => (
        <div className="min-h-screen bg-gray-50">
          <WorksheetHeader />
          
          <div className="bg-blue-50 p-4 shadow-md mb-4">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score}
                totalQuestions={100}
              />
            </div>
          </div>
          
          <div className="p-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
                Find the Sight Words
              </h1>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Word Search Grid */}
                <div className="flex-1">
                  <div 
                    ref={gridContainerRef}
                    className="grid grid-cols-8 gap-1 bg-blue-50 p-4 rounded-lg select-none"
                  >
                    {grid.map((row, rowIndex) => (
                      <React.Fragment key={rowIndex}>
                        {row.map((cell, colIndex) => (
                          <div
                            key={`${rowIndex}-${colIndex}`}
                            data-row={rowIndex}
                            data-col={colIndex}
                            className={`
                              w-10 h-10 flex items-center justify-center
                              text-lg font-bold rounded cursor-pointer
                              ${cell.isPartOfWord ? WORD_COLORS[cell.wordIndex!] : cell.selected ? 'bg-yellow-100' : 'bg-white'}
                              border-2 border-blue-200 transition-colors
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
                                
                                // Add points and mark as correct
                                addPoints();
                                markCorrect();
                                
                                // Trigger confetti for each found word
                                confetti({
                                  particleCount: 100,
                                  spread: 70,
                                  origin: { y: 0.6 }
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
                                
                                // Add points and mark as correct
                                addPoints();
                                markCorrect();
                                
                                // Trigger confetti for each found word
                                confetti({
                                  particleCount: 100,
                                  spread: 70,
                                  origin: { y: 0.6 }
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
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700">
                      Words to Find:
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
                            <div className="text-sm text-gray-600">{hint}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {foundWords.size === PUZZLE_DATA.words.length && (
                <div className="mt-8 text-center">
                  <h2 className="text-2xl font-bold text-green-600">
                    🎉 Congratulations! You've found all the words! 🎉
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

export default SightWordsWorksheet; 
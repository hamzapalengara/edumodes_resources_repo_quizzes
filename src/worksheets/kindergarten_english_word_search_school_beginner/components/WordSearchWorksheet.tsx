import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// School-themed 3-4 letter words suitable for kindergarten
const WORD_LIST = [
  { word: 'BOOK', emoji: '📚' },
  { word: 'DESK', emoji: '🪑' },
  { word: 'PEN', emoji: '✏️' },
  { word: 'BAG', emoji: '🎒' },
  { word: 'READ', emoji: '📖' },
  { word: 'DRAW', emoji: '🎨' },
  { word: 'MAP', emoji: '🗺️' },
  { word: 'ART', emoji: '🎭' },
  { word: 'GYM', emoji: '🏃' },
  { word: 'MATH', emoji: '🔢' },
];

// Grid size (7x7 for 4-letter words)
const GRID_SIZE = 7;

// Educational theme colors (with background and text colors)
const WORD_COLORS = [
  { bg: 'bg-blue-200', text: 'text-blue-800' },    // Knowledge
  { bg: 'bg-green-200', text: 'text-green-800' },  // Growth
  { bg: 'bg-purple-200', text: 'text-purple-800' }, // Creativity
  { bg: 'bg-red-200', text: 'text-red-800' },      // Energy
  { bg: 'bg-yellow-200', text: 'text-yellow-800' }, // Intelligence
  { bg: 'bg-teal-200', text: 'text-teal-800' },    // Wisdom
  { bg: 'bg-indigo-200', text: 'text-indigo-800' }, // Learning
  { bg: 'bg-orange-200', text: 'text-orange-800' }, // Enthusiasm
  { bg: 'bg-cyan-200', text: 'text-cyan-800' },    // Focus
  { bg: 'bg-rose-200', text: 'text-rose-800' },    // Achievement
];

interface Cell {
  letter: string;
  isSelected: boolean;
  isPartOfWord: boolean;
  row: number;
  col: number;
}

interface WordPosition {
  word: string;
  emoji: string;
  found: boolean;
  cells: { row: number; col: number }[];
  colorIndex?: number;
}

const WordSearchWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [wordPositions, setWordPositions] = useState<WordPosition[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [touchStartCell, setTouchStartCell] = useState<Cell | null>(null);

  // Initialize grid and place words
  useEffect(() => {
    const newGrid: Cell[][] = Array(GRID_SIZE).fill(null).map((_, row) =>
      Array(GRID_SIZE).fill(null).map((_, col) => ({
        letter: '',
        isSelected: false,
        isPartOfWord: false,
        row,
        col,
      }))
    );

    const positions: WordPosition[] = [];
    const directions = [
      { dx: 1, dy: 0 }, // horizontal
      { dx: 0, dy: 1 }, // vertical
    ];

    // Place each word
    WORD_LIST.forEach(({ word, emoji }) => {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 100;

      while (!placed && attempts < maxAttempts) {
        attempts++;
        const direction = directions[Math.floor(Math.random() * directions.length)];
        const startRow = Math.floor(Math.random() * (GRID_SIZE - (direction.dy * word.length)));
        const startCol = Math.floor(Math.random() * (GRID_SIZE - (direction.dx * word.length)));

        // Check if space is available
        let canPlace = true;
        const cells: { row: number; col: number }[] = [];
        for (let i = 0; i < word.length; i++) {
          const row = startRow + (direction.dy * i);
          const col = startCol + (direction.dx * i);
          if (newGrid[row][col].letter !== '' && newGrid[row][col].letter !== word[i]) {
            canPlace = false;
            break;
          }
          cells.push({ row, col });
        }

        if (canPlace) {
          // Place the word
          for (let i = 0; i < word.length; i++) {
            const row = startRow + (direction.dy * i);
            const col = startCol + (direction.dx * i);
            newGrid[row][col].letter = word[i];
            newGrid[row][col].isPartOfWord = true;
          }
          positions.push({ word, emoji, found: false, cells });
          placed = true;
        }
      }

      if (!placed) {
        console.warn(`Could not place word: ${word}`);
      }
    });

    // Fill remaining cells with random letters
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if (newGrid[row][col].letter === '') {
          newGrid[row][col].letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }

    setGrid(newGrid);
    setWordPositions(positions);
  }, []);

  const stopCurrentSpeech = () => {
    if (speechRef.current) {
      window.speechSynthesis.cancel();
    }
  };

  const speak = (text: string, rate = 0.9, pitch = 1, volume = 0.8) => {
    stopCurrentSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    speechRef.current = utterance;

    try {
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Error with speech synthesis:', error);
    }
  };

  const provideFeedback = (correct: boolean) => {
    if (correct) {
      const selectedWord = selectedCells.map(cell => cell.letter).join('');
      speak(`Excellent! You found the word ${selectedWord}!`);
    } else {
      speak("Keep trying! You can do it!");
    }
  };

  const handleCellMouseDown = (cell: Cell) => {
    setIsSelecting(true);
    setSelectedCells([cell]);
    const newGrid = [...grid];
    newGrid[cell.row][cell.col].isSelected = true;
    setGrid(newGrid);
  };

  const handleCellMouseEnter = (cell: Cell) => {
    if (!isSelecting) return;

    const lastCell = selectedCells[selectedCells.length - 1];
    const isAdjacent = (
      (Math.abs(cell.row - lastCell.row) === 1 && cell.col === lastCell.col) || // vertical
      (Math.abs(cell.col - lastCell.col) === 1 && cell.row === lastCell.row)    // horizontal
    );

    if (isAdjacent) {
      setSelectedCells([...selectedCells, cell]);
      const newGrid = [...grid];
      newGrid[cell.row][cell.col].isSelected = true;
      setGrid(newGrid);
    }
  };

  const handleCellMouseUp = (
    { markCorrect, markIncorrect }: { markCorrect: () => void; markIncorrect: () => void }
  ) => {
    setIsSelecting(false);
    const selectedWord = selectedCells.map(cell => cell.letter).join('');
    
    // Check if word exists and hasn't been found
    const wordPosition = wordPositions.find(wp => 
      wp.word === selectedWord && !wp.found &&
      wp.cells.every((pos, index) => 
        pos.row === selectedCells[index]?.row && 
        pos.col === selectedCells[index]?.col
      )
    );

    if (wordPosition) {
      markCorrect();
      provideFeedback(true);
      setFoundWords([...foundWords, selectedWord]);
      
      // Update word position status with color index
      setWordPositions(wordPositions.map(wp =>
        wp.word === selectedWord ? { ...wp, found: true, colorIndex: foundWords.length } : wp
      ));

      // Check if game is complete
      if (foundWords.length + 1 === WORD_LIST.length) {
        setIsComplete(true);
        // Celebration feedback with delay
        setTimeout(() => {
          speak("Congratulations! You've found all the words!", 1, 1.2, 1);
        }, 1000);
      }
    } else {
      markIncorrect();
      provideFeedback(false);
    }

    // Clear selection
    const newGrid = grid.map(row =>
      row.map(cell => ({ ...cell, isSelected: false }))
    );
    setGrid(newGrid);
    setSelectedCells([]);
  };

  const handleTouchStart = (cell: Cell) => {
    setIsSelecting(true);
    setTouchStartCell(cell);
    setSelectedCells([cell]);
    const newGrid = [...grid];
    newGrid[cell.row][cell.col].isSelected = true;
    setGrid(newGrid);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent page scrolling while selecting
    e.preventDefault();
    e.stopPropagation();

    if (!isSelecting || !touchStartCell) return;

    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!element) return;

    const cellElement = element.closest('[data-cell]');
    if (!cellElement) return;

    const row = parseInt(cellElement.getAttribute('data-row') || '-1');
    const col = parseInt(cellElement.getAttribute('data-col') || '-1');
    
    if (row >= 0 && col >= 0) {
      const cell = grid[row][col];
      const lastCell = selectedCells[selectedCells.length - 1];

      const isAdjacent = (
        (Math.abs(cell.row - lastCell.row) === 1 && cell.col === lastCell.col) || // vertical
        (Math.abs(cell.col - lastCell.col) === 1 && cell.row === lastCell.row)    // horizontal
      );

      if (isAdjacent && !selectedCells.some(selected => selected.row === row && selected.col === col)) {
        setSelectedCells([...selectedCells, cell]);
        const newGrid = [...grid];
        newGrid[row][col].isSelected = true;
        setGrid(newGrid);
      }
    }
  };

  // Add touch event handlers to prevent scrolling on the grid container
  useEffect(() => {
    const gridContainer = document.querySelector('.word-search-grid');
    if (gridContainer) {
      const preventScroll = (e: Event) => {
        if (isSelecting && e instanceof TouchEvent) {
          e.preventDefault();
        }
      };

      gridContainer.addEventListener('touchmove', preventScroll as EventListener, { passive: false });
      return () => {
        gridContainer.removeEventListener('touchmove', preventScroll as EventListener);
      };
    }
  }, [isSelecting]);

  const handleTouchEnd = ({ markCorrect, markIncorrect }: { markCorrect: () => void; markIncorrect: () => void }) => {
    setTouchStartCell(null);
    handleCellMouseUp({ markCorrect, markIncorrect });
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={WORD_LIST.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markIncorrect, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 md:p-4 mb-4">
              <ScoreDisplay 
                score={score}
                totalQuestions={WORD_LIST.length * 10}
              />
            </div>

            {/* Instructions and Word List */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 md:p-4 mb-4">
              {/* Simple Instructions */}
              <div className="text-white text-center mb-3">
                <p className="text-lg font-medium">Find these school words in the grid! 🔍</p>
                <p className="text-sm opacity-90">Swipe to connect the letters</p>
              </div>

              {/* Word List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 md:gap-2">
                {WORD_LIST.map(({ word, emoji }) => {
                  const foundWord = wordPositions.find(wp => wp.word === word && wp.found);
                  const colorIndex = foundWord?.colorIndex || 0;
                  return (
                    <div
                      key={word}
                      className={`
                        flex items-center justify-center p-1.5 md:p-2 rounded-lg
                        ${foundWord ? WORD_COLORS[colorIndex].bg : 'bg-white/50'}
                        transition-colors duration-300
                      `}
                    >
                      <span className="text-lg md:text-xl mr-1">{emoji}</span>
                      <span className={`text-sm md:text-base font-bold ${foundWord ? `${WORD_COLORS[colorIndex].text} line-through` : 'text-purple-900'}`}>
                        {word}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Game Grid */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 md:p-4">
              <div 
                className="word-search-grid grid grid-cols-7 gap-0.5 md:gap-1 touch-none"
                onMouseLeave={() => {
                  if (isSelecting) {
                    handleCellMouseUp({ markCorrect, markIncorrect });
                  }
                }}
              >
                {grid.map((row, rowIndex) =>
                  row.map((cell, colIndex) => {
                    const foundWordPosition = wordPositions.find(wp => 
                      wp.found && wp.cells.some(pos => 
                        pos.row === cell.row && pos.col === cell.col
                      )
                    );

                    let cellStyle = 'bg-white hover:bg-yellow-100';
                    let textStyle = 'text-gray-800';

                    if (cell.isSelected) {
                      cellStyle = 'bg-yellow-300 scale-95';
                    } else if (foundWordPosition) {
                      const colorIndex = foundWordPosition.colorIndex || 0;
                      cellStyle = WORD_COLORS[colorIndex].bg;
                      textStyle = WORD_COLORS[colorIndex].text;
                    }

                    return (
                      <motion.div
                        key={`${rowIndex}-${colIndex}`}
                        data-cell
                        data-row={rowIndex}
                        data-col={colIndex}
                        className={`
                          w-full aspect-square rounded-lg flex items-center justify-center
                          text-lg md:text-2xl font-bold cursor-pointer select-none
                          ${cellStyle} ${textStyle}
                          transition-colors duration-150
                        `}
                        onMouseDown={() => handleCellMouseDown(cell)}
                        onMouseEnter={() => handleCellMouseEnter(cell)}
                        onMouseUp={() => handleCellMouseUp({ markCorrect, markIncorrect })}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          handleTouchStart(cell);
                        }}
                        onTouchMove={(e) => {
                          e.preventDefault();
                          handleTouchMove(e);
                        }}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          handleTouchEnd({ markCorrect, markIncorrect });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {cell.letter}
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Completion Modal */}
            {isComplete && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white rounded-xl p-6 max-w-sm mx-4 text-center"
                >
                  <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                    Outstanding Work! 🎓
                  </h2>
                  <p className="text-gray-600 mb-6">
                    You've discovered all the school words!
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-6 rounded-full
                             transition-all duration-300 transform hover:scale-105"
                  >
                    Play Again 📚
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default WordSearchWorksheet; 
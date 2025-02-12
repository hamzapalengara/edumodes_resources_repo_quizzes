import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Action verbs with emojis and colors
const WORD_LIST = [
  { 
    word: 'RUN', 
    emoji: '🏃',
    bgColor: 'bg-red-200',
    textColor: 'text-red-800',
    borderColor: 'border-red-300'
  },
  { 
    word: 'JUMP', 
    emoji: '🦘',
    bgColor: 'bg-orange-200',
    textColor: 'text-orange-800',
    borderColor: 'border-orange-300'
  },
  { 
    word: 'SWIM', 
    emoji: '🏊',
    bgColor: 'bg-blue-200',
    textColor: 'text-blue-800',
    borderColor: 'border-blue-300'
  },
  { 
    word: 'DANCE', 
    emoji: '💃',
    bgColor: 'bg-pink-200',
    textColor: 'text-pink-800',
    borderColor: 'border-pink-300'
  },
  { 
    word: 'SING', 
    emoji: '🎤',
    bgColor: 'bg-purple-200',
    textColor: 'text-purple-800',
    borderColor: 'border-purple-300'
  },
  { 
    word: 'READ', 
    emoji: '📚',
    bgColor: 'bg-yellow-200',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-300'
  },
  { 
    word: 'WRITE', 
    emoji: '✏️',
    bgColor: 'bg-green-200',
    textColor: 'text-green-800',
    borderColor: 'border-green-300'
  },
  { 
    word: 'SLEEP', 
    emoji: '😴',
    bgColor: 'bg-indigo-200',
    textColor: 'text-indigo-800',
    borderColor: 'border-indigo-300'
  },
  { 
    word: 'PLAY', 
    emoji: '🎮',
    bgColor: 'bg-cyan-200',
    textColor: 'text-cyan-800',
    borderColor: 'border-cyan-300'
  },
  { 
    word: 'EAT', 
    emoji: '🍽️',
    bgColor: 'bg-amber-200',
    textColor: 'text-amber-800',
    borderColor: 'border-amber-300'
  },
];

const GRID_SIZE = 8;

interface Cell {
  letter: string;
  isSelected: boolean;
  isPartOfWord: boolean;
  row: number;
  col: number;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

interface WordPosition {
  word: string;
  emoji: string;
  found: boolean;
  cells: { row: number; col: number; }[];
  bgColor: string;
  textColor: string;
  borderColor: string;
}

const WordSearchWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [wordPositions, setWordPositions] = useState<WordPosition[]>([]);
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartCell, setTouchStartCell] = useState<Cell | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

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
    WORD_LIST.forEach(({ word, emoji, bgColor, textColor, borderColor }) => {
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
          positions.push({ word, emoji, found: false, cells, bgColor, textColor, borderColor });
          placed = true;
        }
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

  // Speech synthesis for feedback
  const speak = (text: string, pitch = 1, rate = 1, volume = 1) => {
    if ('speechSynthesis' in window) {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      speechRef.current = new SpeechSynthesisUtterance(text);
      speechRef.current.pitch = pitch;
      speechRef.current.rate = rate;
      speechRef.current.volume = volume;
      window.speechSynthesis.speak(speechRef.current);
    }
  };

  const provideFeedback = (isCorrect: boolean, word?: string) => {
    if (isCorrect && word) {
      const phrases = [
        `Great job! ${word} is an action word!`,
        `Wonderful! You found ${word}!`,
        `Amazing! ${word} is something you can do!`,
        `You found ${word}! Watch the action!`,
        `Excellent! ${word} is a fun action!`
      ];
      speak(phrases[Math.floor(Math.random() * phrases.length)], 1.2, 1, 1);
    } else {
      speak("Try again! Look for action words!", 0.8, 1, 0.8);
    }
  };

  const handleCellMouseDown = (cell: Cell) => {
    setIsDragging(true);
    setSelectedCells([cell]);
  };

  const handleCellMouseEnter = (cell: Cell) => {
    if (isDragging) {
      const lastCell = selectedCells[0];
      if (cell.row === lastCell.row || cell.col === lastCell.col) {
        const newSelectedCells = getSelectedCells(lastCell, cell);
        setSelectedCells(newSelectedCells);
      }
    }
  };

  const handleCellMouseUp = (
    { markCorrect, markIncorrect }: { 
      markCorrect: () => void; 
      markIncorrect: () => void;
    }
  ) => {
    if (!isDragging) return;
    
    const selectedWord = getSelectedWord();
    const wordPosition = wordPositions.find(wp => !wp.found && wp.word === selectedWord);

    if (wordPosition) {
      const isCorrectSelection = checkSelection(wordPosition);
      if (isCorrectSelection) {
        setWordPositions(positions =>
          positions.map(pos =>
            pos.word === wordPosition.word ? { ...pos, found: true } : pos
          )
        );
        markCorrect();
        provideFeedback(true, wordPosition.word);

        // Check if all words are found
        if (wordPositions.filter(wp => wp.found).length === WORD_LIST.length - 1) {
          setIsComplete(true);
          speak("Congratulations! You've found all the action words!", 1.2, 1, 1);
        }
      } else {
        markIncorrect();
        provideFeedback(false);
      }
    } else {
      markIncorrect();
      provideFeedback(false);
    }

    setIsDragging(false);
    setSelectedCells([]);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent, cell: Cell) => {
    e.preventDefault();
    setTouchStartCell(cell);
    setSelectedCells([cell]);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!touchStartCell || !isDragging) return;

    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
    
    if (element) {
      const row = parseInt(element.getAttribute('data-row') || '-1');
      const col = parseInt(element.getAttribute('data-col') || '-1');
      
      if (row >= 0 && col >= 0 && grid[row] && grid[row][col]) {
        const targetCell = grid[row][col];
        if (targetCell.row === touchStartCell.row || targetCell.col === touchStartCell.col) {
          const newSelectedCells = getSelectedCells(touchStartCell, targetCell);
          setSelectedCells(newSelectedCells);
        }
      }
    }
  };

  const handleTouchEnd = (
    e: React.TouchEvent,
    { markCorrect, markIncorrect }: { 
      markCorrect: () => void; 
      markIncorrect: () => void;
    }
  ) => {
    e.preventDefault();
    if (!touchStartCell || !isDragging) return;

    const selectedWord = getSelectedWord();
    const wordPosition = wordPositions.find(wp => !wp.found && wp.word === selectedWord);

    if (wordPosition) {
      const isCorrectSelection = checkSelection(wordPosition);
      if (isCorrectSelection) {
        setWordPositions(positions =>
          positions.map(pos =>
            pos.word === wordPosition.word ? { ...pos, found: true } : pos
          )
        );
        markCorrect();
        provideFeedback(true, wordPosition.word);
      } else {
        markIncorrect();
        provideFeedback(false);
      }
    } else {
      markIncorrect();
      provideFeedback(false);
    }

    setTouchStartCell(null);
    setSelectedCells([]);
    setIsDragging(false);
  };

  // Helper functions
  const getSelectedCells = (startCell: Cell, endCell: Cell) => {
    const cells: Cell[] = [];
    if (startCell.row === endCell.row) {
      const row = startCell.row;
      const start = Math.min(startCell.col, endCell.col);
      const end = Math.max(startCell.col, endCell.col);
      for (let col = start; col <= end; col++) {
        cells.push(grid[row][col]);
      }
    } else if (startCell.col === endCell.col) {
      const col = startCell.col;
      const start = Math.min(startCell.row, endCell.row);
      const end = Math.max(startCell.row, endCell.row);
      for (let row = start; row <= end; row++) {
        cells.push(grid[row][col]);
      }
    }
    return cells;
  };

  const getSelectedWord = () => {
    return selectedCells.map(cell => cell.letter).join('');
  };

  const checkSelection = (wordPosition: WordPosition) => {
    if (selectedCells.length !== wordPosition.word.length) return false;
    return selectedCells.every((cell) =>
      wordPosition.cells.some(pos => pos.row === cell.row && pos.col === cell.col)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={WORD_LIST.length}
        pointsPerQuestion={10}
        onSummaryGenerated={(summary: WorksheetSummary) => {
          console.log('Worksheet Summary:', summary);
        }}
      >
        {({ markCorrect, markIncorrect, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score and Word List - Now at the top */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
              <ScoreDisplay
                score={score}
                totalQuestions={WORD_LIST.length * 10}
              />
              
              <h2 className="text-xl font-bold text-white mt-4 mb-2 text-center">
                Find These Action Words!
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {wordPositions.map((wordPos) => (
                  <motion.div
                    key={wordPos.word}
                    className={`
                      flex items-center justify-center gap-2 p-2 rounded-lg
                      ${wordPos.found ? `${wordPos.bgColor} ${wordPos.textColor}` : 'bg-white/30 text-white'}
                      transition-colors duration-300
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl">{wordPos.emoji}</span>
                    <span className={`font-bold ${wordPos.found ? 'line-through' : ''}`}>
                      {wordPos.word}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Word Search Grid */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div 
                className="grid grid-cols-8 gap-0.5 md:gap-1 aspect-square max-w-lg mx-auto"
                style={{ touchAction: 'none' }}
              >
                {grid.map((row, rowIndex) =>
                  row.map((cell, colIndex) => {
                    const wordPosition = wordPositions.find(wp => 
                      wp.found && wp.cells.some(c => c.row === cell.row && c.col === cell.col)
                    );

                    return (
                      <motion.div
                        key={`${rowIndex}-${colIndex}`}
                        className={`
                          w-full aspect-square rounded-md flex items-center justify-center
                          font-bold text-lg md:text-xl select-none cursor-pointer
                          ${
                            selectedCells.includes(cell)
                              ? 'bg-yellow-300 text-yellow-800'
                              : wordPosition
                              ? `${wordPosition.bgColor} ${wordPosition.textColor} ${wordPosition.borderColor} border-2`
                              : 'bg-white/90 text-gray-800'
                          }
                          transition-colors duration-200
                        `}
                        onMouseDown={() => handleCellMouseDown(cell)}
                        onMouseEnter={() => handleCellMouseEnter(cell)}
                        onMouseUp={() => handleCellMouseUp({ markCorrect, markIncorrect })}
                        onTouchStart={(e) => handleTouchStart(e, cell)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={(e) => handleTouchEnd(e, { markCorrect, markIncorrect })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-row={rowIndex}
                        data-col={colIndex}
                        style={{ touchAction: 'none' }}
                      >
                        {cell.letter}
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Completion Message */}
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              >
                <div className="bg-white rounded-xl p-6 m-4 text-center">
                  <h2 className="text-2xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
                  <p className="text-lg mb-4">
                    You've found all the action words!
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600"
                  >
                    Play Again
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default WordSearchWorksheet; 
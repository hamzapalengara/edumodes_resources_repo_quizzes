import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Weather and Seasons theme with emojis and colors
const WORD_LIST = [
  { 
    word: 'SUNNY', 
    emoji: '☀️', 
    bgColor: 'bg-yellow-400',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-500'
  },
  { 
    word: 'RAINY', 
    emoji: '🌧️', 
    bgColor: 'bg-blue-400',
    textColor: 'text-white',
    borderColor: 'border-blue-500'
  },
  { 
    word: 'WINDY', 
    emoji: '💨', 
    bgColor: 'bg-gray-200',
    textColor: 'text-gray-800',
    borderColor: 'border-gray-300'
  },
  { 
    word: 'SNOW', 
    emoji: '❄️', 
    bgColor: 'bg-white',
    textColor: 'text-blue-800',
    borderColor: 'border-blue-200'
  },
  { 
    word: 'STORM', 
    emoji: '⛈️', 
    bgColor: 'bg-gray-600',
    textColor: 'text-white',
    borderColor: 'border-gray-700'
  },
  { 
    word: 'SUMMER', 
    emoji: '🌞', 
    bgColor: 'bg-orange-400',
    textColor: 'text-white',
    borderColor: 'border-orange-500'
  },
  { 
    word: 'WINTER', 
    emoji: '🥶', 
    bgColor: 'bg-blue-200',
    textColor: 'text-blue-800',
    borderColor: 'border-blue-300'
  },
  { 
    word: 'SPRING', 
    emoji: '🌸', 
    bgColor: 'bg-pink-200',
    textColor: 'text-pink-800',
    borderColor: 'border-pink-300'
  },
  { 
    word: 'AUTUMN', 
    emoji: '🍂', 
    bgColor: 'bg-amber-500',
    textColor: 'text-white',
    borderColor: 'border-amber-600'
  },
  { 
    word: 'CLOUD', 
    emoji: '☁️', 
    bgColor: 'bg-gray-300',
    textColor: 'text-gray-800',
    borderColor: 'border-gray-400'
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
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
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
        `Great job! You found ${word}!`,
        `Wonderful! ${word} is a type of weather!`,
        `Amazing! ${word} is part of our seasons!`,
        `You found ${word}! Look at the weather symbol!`,
        `Excellent! ${word} makes our weather interesting!`
      ];
      speak(phrases[Math.floor(Math.random() * phrases.length)], 1.2, 1, 1);
    } else {
      speak("Try again! Look for weather and season words!", 0.8, 1, 0.8);
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

    if (isAdjacent && !selectedCells.some(c => c.row === cell.row && c.col === cell.col)) {
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
        pos.row === selectedCells[index].row && pos.col === selectedCells[index].col
      )
    );

    if (wordPosition) {
      // Mark word as found
      setWordPositions(prevPositions =>
        prevPositions.map(wp =>
          wp.word === wordPosition.word ? { ...wp, found: true } : wp
        )
      );
      setFoundWords(prev => [...prev, wordPosition.word]);
      
      // Update grid colors
      const newGrid = [...grid];
      selectedCells.forEach(cell => {
        newGrid[cell.row][cell.col] = {
          ...cell,
          isSelected: false,
          bgColor: wordPosition.bgColor,
          textColor: wordPosition.textColor,
          borderColor: wordPosition.borderColor
        };
      });
      setGrid(newGrid);

      // Provide feedback
      provideFeedback(true, wordPosition.word);
      markCorrect(); // This will add 10 points

      // Check if all words are found
      if (foundWords.length + 1 === WORD_LIST.length) {
        setIsComplete(true);
        speak("Congratulations! You've found all the weather and season words!", 1.2, 1, 1);
      }
    } else {
      // Clear selection
      const newGrid = [...grid];
      selectedCells.forEach(cell => {
        newGrid[cell.row][cell.col].isSelected = false;
      });
      setGrid(newGrid);
      provideFeedback(false);
      markIncorrect();
    }
    setSelectedCells([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-orange-400">
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
            {/* Score Display */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
              <ScoreDisplay 
                score={score}
                totalQuestions={WORD_LIST.length * 10}
              />
            </div>

            {/* Word List */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
              <h2 className="text-xl font-bold text-white mb-4 text-center">
                Find These Weather & Season Words!
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {WORD_LIST.map(({ word, emoji }) => {
                  const isFound = foundWords.includes(word);
                  return (
                    <div
                      key={word}
                      className={`
                        flex items-center justify-center p-2 rounded-lg
                        ${isFound ? 'bg-green-500/50 text-white' : 'bg-white/30 text-white'}
                        transition-colors duration-300
                      `}
                    >
                      <span className="mr-2">{emoji}</span>
                      <span className={isFound ? 'line-through' : ''}>{word}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Word Search Grid */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div 
                className="grid grid-cols-8 gap-0.5 md:gap-1 aspect-square max-w-lg mx-auto"
                style={{ touchAction: 'none' }}
              >
                {grid.map((row, rowIndex) =>
                  row.map((cell, colIndex) => (
                    <motion.div
                      key={`${rowIndex}-${colIndex}`}
                      className={`
                        w-full aspect-square rounded-md flex items-center justify-center
                        font-bold text-lg md:text-xl select-none cursor-pointer cell
                        ${cell.bgColor || 'bg-white/80'}
                        ${cell.textColor || 'text-gray-800'}
                        ${cell.borderColor ? `border-2 ${cell.borderColor}` : ''}
                        ${cell.isSelected ? 'bg-yellow-300 text-yellow-800' : ''}
                        transition-colors duration-200
                      `}
                      onMouseDown={() => handleCellMouseDown(cell)}
                      onMouseEnter={() => handleCellMouseEnter(cell)}
                      onMouseUp={() => handleCellMouseUp({ markCorrect, markIncorrect })}
                      onTouchStart={(e) => {
                        e.preventDefault(); // Prevent default touch behavior
                        handleCellMouseDown(cell);
                      }}
                      onTouchMove={(e) => {
                        e.preventDefault(); // Prevent scrolling
                        const touch = e.touches[0];
                        const element = document.elementFromPoint(touch.clientX, touch.clientY);
                        if (element) {
                          const row = parseInt(element.getAttribute('data-row') || '-1');
                          const col = parseInt(element.getAttribute('data-col') || '-1');
                          if (row >= 0 && col >= 0 && grid[row] && grid[row][col]) {
                            handleCellMouseEnter(grid[row][col]);
                          }
                        }
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault(); // Prevent default touch behavior
                        handleCellMouseUp({ markCorrect, markIncorrect });
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-row={rowIndex}
                      data-col={colIndex}
                    >
                      {cell.letter}
                    </motion.div>
                  ))
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
                    You've found all the weather and season words!
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
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
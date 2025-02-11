import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Vegetable theme colors
const WORD_COLORS = [
  { bg: 'bg-green-200', text: 'text-green-800' },
  { bg: 'bg-emerald-200', text: 'text-emerald-800' },
  { bg: 'bg-lime-200', text: 'text-lime-800' },
  { bg: 'bg-orange-200', text: 'text-orange-800' },
  { bg: 'bg-red-200', text: 'text-red-800' },
];

// Using a 7x7 grid since our longest word is 6 letters (CARROT)
const GRID_SIZE = 7;

// Common vegetables with short names for kindergarten level
const WORD_LIST = [
  { word: 'CORN', emoji: '🌽' },
  { word: 'PEAS', emoji: '🫛' },
  { word: 'BEET', emoji: '🫒' },
  { word: 'KALE', emoji: '🥬' },
  { word: 'YAM', emoji: '🍠' },
  { word: 'BEAN', emoji: '🫘' },
  { word: 'LEEK', emoji: '🧅' },
  { word: 'ONION', emoji: '🧅' },
  { word: 'MINT', emoji: '🌿' },
  { word: 'PEAR', emoji: '🍐' },
];

interface Cell {
  letter: string;
  isSelected: boolean;
  isPartOfWord: boolean;
  row: number;
  col: number;
  emoji?: string;
}

interface WordPosition {
  word: string;
  emoji: string;
  found: boolean;
  cells: { row: number; col: number; }[];
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
        `Yummy! You found ${word}! That's a healthy vegetable!`,
        `Great job! You found ${word}! Keep growing strong!`,
        `Amazing! You found ${word}! Vegetables are so good for you!`,
        `Wonderful! You found ${word}! You're doing great!`,
        `Super! You found ${word}! Keep picking those veggies!`
      ];
      speak(phrases[Math.floor(Math.random() * phrases.length)], 1.2, 1, 1);
    } else {
      speak("Keep trying! You can do it!", 0.8, 1, 0.8);
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
        pos.row === selectedCells[index]?.row && 
        pos.col === selectedCells[index]?.col
      )
    );

    if (wordPosition) {
      markCorrect();
      provideFeedback(true, wordPosition.word);
      setFoundWords([...foundWords, selectedWord]);
      
      // Update word position status with color index
      setWordPositions(wordPositions.map(wp =>
        wp.word === selectedWord ? { ...wp, found: true, colorIndex: foundWords.length % WORD_COLORS.length } : wp
      ));

      // Check if game is complete
      if (foundWords.length + 1 === WORD_LIST.length) {
        setIsComplete(true);
        // Celebration feedback with delay
        setTimeout(() => {
          speak("Amazing! You've found all the healthy vegetables! You're a garden champion!", 1, 1.2, 1);
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
    setSelectedCells([cell]);
    const newGrid = [...grid];
    newGrid[cell.row][cell.col].isSelected = true;
    setGrid(newGrid);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    
    if (!isSelecting) return;

    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
    
    if (!element?.dataset?.cell) return;

    const cellData = element.dataset.cell;
    const [row, col] = cellData.split(',').map(Number);
    const cell = grid[row][col];
    const lastCell = selectedCells[selectedCells.length - 1];

    if (cell.row === lastCell.row && cell.col === lastCell.col) return;

    const isAdjacent = (
      (Math.abs(cell.row - lastCell.row) === 1 && cell.col === lastCell.col) || // vertical
      (Math.abs(cell.col - lastCell.col) === 1 && cell.row === lastCell.row)    // horizontal
    );

    if (isAdjacent && !selectedCells.some(c => c.row === row && c.col === col)) {
      setSelectedCells([...selectedCells, cell]);
      const newGrid = [...grid];
      newGrid[row][col].isSelected = true;
      setGrid(newGrid);
    }
  };

  const handleTouchEnd = (
    { markCorrect, markIncorrect }: { markCorrect: () => void; markIncorrect: () => void }
  ) => {
    handleCellMouseUp({ markCorrect, markIncorrect });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-lime-400">
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
              <ScoreDisplay score={score} totalQuestions={WORD_LIST.length * 10} />
            </div>

            {/* Word List */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
              {/* Instructions */}
              <div className="text-center mb-3">
                <p className="text-white text-lg font-medium">
                  Find these healthy vegetables in the grid below! 🥬
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Words can go across ➡️ or down ⬇️
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {WORD_LIST.map(({ word, emoji }) => {
                  const isFound = wordPositions.find(wp => wp.word === word)?.found;
                  const colorIndex = wordPositions.find(wp => wp.word === word)?.colorIndex ?? 0;
                  return (
                    <motion.div
                      key={word}
                      className={`flex items-center justify-center p-2 rounded-lg ${
                        isFound ? WORD_COLORS[colorIndex].bg : 'bg-gray-200'
                      }`}
                      animate={{
                        scale: isFound ? [1.1, 1] : 1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <span className="text-xl mr-2">{emoji}</span>
                      <span className={`font-bold ${
                        isFound 
                          ? `${WORD_COLORS[colorIndex].text} line-through decoration-2` 
                          : 'text-gray-500'
                      }`}>
                        {word}
                      </span>
                      {isFound && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="ml-1 text-green-600"
                        >
                          ✓
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Grid */}
            <div 
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
              onTouchMove={(e) => e.preventDefault()}
              style={{ touchAction: 'none' }}
            >
              <div className="grid grid-cols-7 gap-0.5 md:gap-1">
                {grid.map((row, rowIndex) =>
                  row.map((cell, colIndex) => {
                    const wordPosition = wordPositions.find(wp =>
                      wp.found && wp.cells.some(pos => pos.row === rowIndex && pos.col === colIndex)
                    );
                    const colorIndex = wordPosition?.colorIndex ?? 0;

                    return (
                      <motion.div
                        key={`${rowIndex}-${colIndex}`}
                        className={`
                          w-full aspect-square rounded-lg flex items-center justify-center
                          text-lg md:text-xl font-bold select-none touch-none
                          ${cell.isSelected ? 'bg-green-300 text-green-800' : 
                            wordPosition ? `${WORD_COLORS[colorIndex].bg} ${WORD_COLORS[colorIndex].text}` :
                            'bg-white text-gray-700'}
                          ${cell.isPartOfWord ? 'hover:bg-green-100' : ''}
                        `}
                        data-cell={`${rowIndex},${colIndex}`}
                        onMouseDown={() => handleCellMouseDown(cell)}
                        onMouseEnter={() => handleCellMouseEnter(cell)}
                        onMouseUp={() => handleCellMouseUp({ markCorrect, markIncorrect })}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          handleTouchStart(cell);
                        }}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={() => handleTouchEnd({ markCorrect, markIncorrect })}
                        animate={{
                          scale: cell.isSelected ? 0.95 : 1,
                          transition: { duration: 0.1 }
                        }}
                      >
                        {wordPosition ? wordPosition.emoji : cell.letter}
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
                className="mt-4 p-4 bg-green-100 text-green-800 rounded-xl text-center"
              >
                <h2 className="text-2xl font-bold mb-2">🥬 Amazing Job! 🥬</h2>
                <p>You've found all the healthy vegetables!</p>
              </motion.div>
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default WordSearchWorksheet; 
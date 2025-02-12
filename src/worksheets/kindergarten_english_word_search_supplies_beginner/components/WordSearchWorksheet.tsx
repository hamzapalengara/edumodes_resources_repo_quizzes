import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Theme colors for word highlights
const WORD_COLORS = [
  { bg: 'bg-blue-200', text: 'text-blue-800', border: 'border-blue-400' },
  { bg: 'bg-green-200', text: 'text-green-800', border: 'border-green-400' },
  { bg: 'bg-purple-200', text: 'text-purple-800', border: 'border-purple-400' },
  { bg: 'bg-rose-200', text: 'text-rose-800', border: 'border-rose-400' },
  { bg: 'bg-amber-200', text: 'text-amber-800', border: 'border-amber-400' },
  { bg: 'bg-teal-200', text: 'text-teal-800', border: 'border-teal-400' },
  { bg: 'bg-indigo-200', text: 'text-indigo-800', border: 'border-indigo-400' },
  { bg: 'bg-pink-200', text: 'text-pink-800', border: 'border-pink-400' },
  { bg: 'bg-cyan-200', text: 'text-cyan-800', border: 'border-cyan-400' },
  { bg: 'bg-orange-200', text: 'text-orange-800', border: 'border-orange-400' },
];

// Word list with emojis
const WORD_LIST = [
  { word: 'PEN', emoji: '🖊️' },
  { word: 'BOOK', emoji: '📚' },
  { word: 'RULER', emoji: '📏' },
  { word: 'PAPER', emoji: '📄' },
  { word: 'DESK', emoji: '🪑' },
  { word: 'GLUE', emoji: '🧊' },
  { word: 'TAPE', emoji: '📼' },
  { word: 'PENCIL', emoji: '✏️' },
  { word: 'ERASER', emoji: '🧼' },
  { word: 'BAG', emoji: '🎒' },
];

interface Cell {
  letter: string;
  isSelected: boolean;
  isPartOfWord: boolean;
  row: number;
  col: number;
  colorIndex?: number;
}

interface WordPosition {
  word: string;
  emoji: string;
  found: boolean;
  cells: { row: number; col: number }[];
  colorIndex?: number;
}

const WordSearchWorksheet: React.FC = () => {
  const gridSize = 8;
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [wordPositions, setWordPositions] = useState<WordPosition[]>([]);
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartCell, setTouchStartCell] = useState<Cell | null>(null);

  // Initialize grid and place words
  useEffect(() => {
    // Initialize empty grid
    const newGrid: Cell[][] = Array(gridSize)
      .fill(null)
      .map((_, row) =>
        Array(gridSize)
          .fill(null)
          .map((_, col) => ({
            letter: '',
            isSelected: false,
            isPartOfWord: false,
            row,
            col,
          }))
      );

    // Initialize word positions array with found set to false
    const positions: WordPosition[] = [];

    // Place each word
    WORD_LIST.forEach((wordData, index) => {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 100;

      while (!placed && attempts < maxAttempts) {
        const isHorizontal = Math.random() < 0.5;
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);

        if (canPlaceWord(wordData.word, row, col, isHorizontal, newGrid)) {
          const cells = placeWord(wordData.word, row, col, isHorizontal, newGrid);
          positions.push({
            ...wordData,
            found: false,
            cells,
            colorIndex: index,
          });
          
          // Mark cells as part of word and set color index
          cells.forEach(({ row, col }) => {
            newGrid[row][col].isPartOfWord = true;
            newGrid[row][col].colorIndex = index;
          });
          
          placed = true;
        }
        attempts++;
      }
    });

    // Fill remaining empty cells with random letters
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (newGrid[row][col].letter === '') {
          newGrid[row][col].letter = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
        }
      }
    }

    setGrid(newGrid);
    setWordPositions(positions);
  }, []);

  // Helper function to check if a word can be placed
  const canPlaceWord = (word: string, row: number, col: number, isHorizontal: boolean, grid: Cell[][]) => {
    if (isHorizontal && col + word.length > gridSize) return false;
    if (!isHorizontal && row + word.length > gridSize) return false;

    for (let i = 0; i < word.length; i++) {
      const currentRow = isHorizontal ? row : row + i;
      const currentCol = isHorizontal ? col + i : col;
      const cell = grid[currentRow][currentCol];
      if (cell.letter !== '' && cell.letter !== word[i]) return false;
    }
    return true;
  };

  // Helper function to place a word in the grid
  const placeWord = (word: string, row: number, col: number, isHorizontal: boolean, grid: Cell[][]) => {
    const cells: { row: number; col: number }[] = [];
    for (let i = 0; i < word.length; i++) {
      const currentRow = isHorizontal ? row : row + i;
      const currentCol = isHorizontal ? col + i : col;
      grid[currentRow][currentCol].letter = word[i];
      cells.push({ row: currentRow, col: currentCol });
    }
    return cells;
  };

  // Speech synthesis for feedback
  const speak = (text: string, pitch = 1, rate = 0.9, volume = 1) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Provide feedback when word is found
  const provideFeedback = (isCorrect: boolean, word?: string) => {
    if (isCorrect && word) {
      speak(`You found ${word}! Good job!`);
    } else {
      speak('Try again!');
    }
  };

  // Add success message when all words are found
  useEffect(() => {
    if (wordPositions.every(pos => pos.found)) {
      speak('Congratulations! You found all the school supplies!', 1, 0.9, 1);
    }
  }, [wordPositions]);

  // Mouse and touch event handlers
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
    if (!isDragging) return; // Prevent handling if not dragging (touch event)
    
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
        markCorrect(); // This will add 10 points
        provideFeedback(true, wordPosition.word);
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
    e.preventDefault(); // Prevent mouse events from firing
    setTouchStartCell(cell);
    setSelectedCells([cell]);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent mouse events from firing
    if (!touchStartCell) return;

    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
    const row = parseInt(element?.dataset?.row || '0');
    const col = parseInt(element?.dataset?.col || '0');
    
    if (!isNaN(row) && !isNaN(col)) {
      const cell = grid[row][col];
      if (cell.row === touchStartCell.row || cell.col === touchStartCell.col) {
        const newSelectedCells = getSelectedCells(touchStartCell, cell);
        setSelectedCells(newSelectedCells);
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
    e.preventDefault(); // Prevent mouse events from firing
    if (!touchStartCell) return;

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
        markCorrect(); // This will add 10 points
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

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={WORD_LIST.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
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

            {/* Success Message */}
            {wordPositions.every(pos => pos.found) && (
              <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 mb-4 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  🎉 Congratulations! 🎉
                </h2>
                <p className="text-white">
                  You found all the school supplies! Great job!
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Word Search Grid */}
              <div className="md:col-span-2 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="grid grid-cols-8 gap-0.5 md:gap-1 aspect-square">
                  {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`
                          w-full aspect-square rounded-sm md:rounded
                          flex items-center justify-center
                          text-lg md:text-xl font-bold
                          select-none cursor-pointer
                          transition-colors duration-200
                          ${
                            selectedCells.includes(cell)
                              ? 'bg-yellow-200 text-yellow-800'
                              : cell.isPartOfWord && wordPositions[cell.colorIndex!].found
                              ? WORD_COLORS[cell.colorIndex!]
                              : 'bg-white text-gray-800'
                          }
                        `}
                        data-row={rowIndex}
                        data-col={colIndex}
                        onMouseDown={() => handleCellMouseDown(cell)}
                        onMouseEnter={() => handleCellMouseEnter(cell)}
                        onMouseUp={() => handleCellMouseUp({ markCorrect, markIncorrect })}
                        onTouchStart={(e) => handleTouchStart(e, cell)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={(e) => handleTouchEnd(e, { markCorrect, markIncorrect })}
                      >
                        {cell.letter}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Word List */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <h2 className="text-xl font-bold text-white mb-4">
                  Find These Words:
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {wordPositions.map((wordPos) => (
                    <div
                      key={wordPos.word}
                      className={`
                        flex items-center gap-2 p-2 rounded
                        ${
                          wordPos.found
                            ? WORD_COLORS[wordPos.colorIndex!]
                            : 'bg-white/50 text-white'
                        }
                      `}
                    >
                      <span className="text-xl">{wordPos.emoji}</span>
                      <span className="font-bold">{wordPos.word}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default WordSearchWorksheet; 
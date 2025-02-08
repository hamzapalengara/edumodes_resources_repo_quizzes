import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import confetti from 'canvas-confetti';

interface GridCell {
  value: number;
  isPath: boolean;
  isSelected: boolean;
  row: number;
  col: number;
}

interface FloatingCandy {
  id: number;
  candy: string;
  startX: number;
  startY: number;
}

interface ScoreAnimation {
  id: number;
  points: number;
  x: number;
  y: number;
}

// Fixed grid with numbers up to 60 (multiples of 6)
const generateGrid = (): GridCell[][] => {
  const grid: GridCell[][] = [];
  const size = 5;
  
  // Create the grid with pairs of multiplication numbers in each row
  const values = [
    [42, 6, 12, 48, 54],     // First row has 6 and 12
    [18, 36, 24, 30, 12],    // Second row has 18 and 24
    [60, 30, 42, 36, 48],    // Third row has 30 and 36
    [24, 54, 60, 18, 6],     // Fourth row has 42 and 48
    [12, 18, 30, 42, 60]     // Fifth row has 54 and 60
  ];

  for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = {
        value: values[i][j],
        isPath: false,
        isSelected: false,
        row: i,
        col: j
      };
    }
  }
  
  return grid;
};

const CANDIES = ['🍬', '🍭', '🍫', '🧁', '🍪', '🍩', '🍡', '🍰', '🍮', '📦'];
const CANDY_NAMES = ['candy', 'lollipop', 'chocolate', 'cupcake', 'cookie', 'donut', 'dango', 'cake', 'pudding', 'candy box'];

const MultiplicationCandyWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [selectedCells, setSelectedCells] = useState<GridCell[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const message = 'Help package candies by following numbers multiplied by 6! 🏭';
  const [lastSelectedValue, setLastSelectedValue] = useState(0);
  const [candiesCollected, setCandiesCollected] = useState(0);
  const [floatingCandies, setFloatingCandies] = useState<FloatingCandy[]>([]);
  const [candyCounter, setCandyCounter] = useState(0);
  const [scoreAnimations, setScoreAnimations] = useState<ScoreAnimation[]>([]);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  // Cancel any ongoing speech when component unmounts
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const addFloatingCandy = (cellElement: HTMLElement) => {
    const rect = cellElement.getBoundingClientRect();
    const candy = {
      id: candyCounter,
      candy: CANDIES[candiesCollected],
      startX: rect.left + rect.width / 2,
      startY: rect.top + rect.height / 2
    };
    setFloatingCandies(prev => [...prev, candy]);
    setCandyCounter(prev => prev + 1);

    // Add score animation
    const scoreAnim = {
      id: scoreCounter,
      points: 1,
      x: rect.left + rect.width / 2,
      y: rect.top
    };
    setScoreAnimations(prev => [...prev, scoreAnim]);
    setScoreCounter(prev => prev + 1);

    // Remove the candy after animation completes
    setTimeout(() => {
      setFloatingCandies(prev => prev.filter(t => t.id !== candy.id));
      setScoreAnimations(prev => prev.filter(s => s.id !== scoreAnim.id));
    }, 1000);
  };

  const handleCellClick = (cell: GridCell, event: React.MouseEvent<HTMLButtonElement>, markCorrect: () => void, markAttempted: () => void) => {
    setAttempts(prev => prev + 1);
    markAttempted();
    
    // First selection must be 6
    if (selectedCells.length === 0) {
      if (cell.value === 6) {
        setSelectedCells([cell]);
        setLastSelectedValue(6);
        setCandiesCollected(1);
        speak("1 times 6 equals 6, packaged some candy!");
        addFloatingCandy(event.currentTarget);
        markCorrect();
      } else {
        speak("Start with 6 candies in the first package!");
        if (attempts > 2) {
          setShowHint(true);
        }
      }
      return;
    }

    // Next selections must be the next multiple of 6
    const nextExpectedValue = lastSelectedValue + 6;
    if (cell.value === nextExpectedValue && !selectedCells.includes(cell)) {
      const newSelectedCells = [...selectedCells, cell];
      setSelectedCells(newSelectedCells);
      setLastSelectedValue(cell.value);
      setCandiesCollected(prev => prev + 1);
      setShowHint(false);
      addFloatingCandy(event.currentTarget);
      markCorrect();

      // Calculate the multiplication fact
      const multiplier = cell.value / 6;
      speak(`${multiplier} times 6 equals ${cell.value}, packaged a ${CANDY_NAMES[candiesCollected]}!`);

      if (cell.value === 60) {
        handleLevelComplete();
      }
    } else {
      if (selectedCells.includes(cell)) {
        speak("We've already packaged these candies!");
      } else if (cell.value < nextExpectedValue) {
        speak("That's too few candies for this package!");
      } else if (cell.value > nextExpectedValue) {
        speak("That's too many candies! Let's count by 6.");
      }
      
      if (attempts > 3) {
        setShowHint(true);
      }
    }
  };

  const handleLevelComplete = () => {
    setShowCelebration(true);
    speak("Amazing job! All the candies are packaged!");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const getCandyForCell = (cell: GridCell) => {
    if (!selectedCells.includes(cell)) return null;
    const index = selectedCells.findIndex(selected => 
      selected.row === cell.row && selected.col === cell.col
    );
    return CANDIES[index];
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    if (summary.summary.questions_attempted === 10) {
      handleLevelComplete();
    }
  };

  if (grid.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={1}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markAttempted }) => (
        <div className="min-h-screen bg-gradient-to-b from-pink-500 to-purple-600">
          <WorksheetHeader />
          
          <div className="p-4 w-full max-w-6xl mx-auto">
            <div className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 mb-4">
              <ScoreDisplay 
                score={candiesCollected} 
                totalQuestions={10}
              />
            </div>

            <div className="text-center mt-2 text-xl bg-white/10 backdrop-blur-md rounded-lg shadow-md p-3">
              <div className="flex items-center justify-center gap-2">
                <span>{selectedCells.length === 0 ? '🏭' : ''}</span>
                <span className="font-bold text-white">Candies packaged:</span>
                <div className="flex gap-1">
                  {Array(candiesCollected).fill(null).map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-2xl"
                    >
                      {CANDIES[index]}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-pink-400/20 backdrop-blur-md border-l-4 border-pink-400 p-4 rounded-r-lg"
              >
                <p className="text-pink-100">
                  <span className="font-bold">Factory Hint:</span> Look for the number {lastSelectedValue + 6}. 
                  It's the next multiple of 6 after {lastSelectedValue}!
                </p>
              </motion.div>
            )}
          </div>

          <TouchContainer>
            <div className="max-w-2xl mx-auto p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-center mb-6 text-white"
              >
                {message}
              </motion.div>

              <div className="grid gap-3 mx-auto relative" 
                   style={{ 
                     gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                     maxWidth: '500px' 
                   }}>
                {grid.map((row, i) =>
                  row.map((cell, j) => {
                    const candy = getCandyForCell(cell);
                    return (
                      <motion.button
                        key={`${i}-${j}`}
                        onClick={(e) => handleCellClick(cell, e, markCorrect, markAttempted)}
                        className={`
                          aspect-square rounded-lg shadow-lg text-2xl font-bold
                          flex items-center justify-center
                          transition-colors duration-300 relative
                          ${selectedCells.includes(cell) 
                            ? 'bg-pink-500 text-white' 
                            : 'bg-white/10 backdrop-blur-md hover:bg-white/20 text-white'}
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {candy ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-3xl"
                          >
                            {candy}
                          </motion.span>
                        ) : (
                          cell.value
                        )}
                        {cell.value === 6 && selectedCells.length === 0 && (
                          <span className="absolute -top-4 text-2xl animate-bounce">
                            🏭
                          </span>
                        )}
                        {cell.value === 60 && !selectedCells.includes(cell) && (
                          <span className="absolute -bottom-4 text-2xl">
                            📦
                          </span>
                        )}
                      </motion.button>
                    );
                  })
                )}

                <AnimatePresence>
                  {floatingCandies.map((candy) => (
                    <motion.div
                      key={candy.id}
                      className="text-4xl fixed pointer-events-none"
                      initial={{ 
                        x: candy.startX,
                        y: candy.startY,
                        scale: 1,
                        opacity: 1
                      }}
                      animate={{ 
                        x: [candy.startX, candy.startX - 50, candy.startX + 50],
                        y: [candy.startY, candy.startY - 100, candy.startY],
                        scale: [1, 1.5, 1],
                        opacity: [1, 1, 0]
                      }}
                      transition={{ 
                        duration: 1,
                        times: [0, 0.5, 1],
                        ease: "easeOut"
                      }}
                      exit={{ opacity: 0 }}
                    >
                      {CANDIES[selectedCells.length - 1]}
                    </motion.div>
                  ))}

                  {scoreAnimations.map((scoreAnim) => (
                    <motion.div
                      key={`score-${scoreAnim.id}`}
                      className="text-2xl font-bold text-pink-300 fixed pointer-events-none"
                      initial={{ 
                        x: scoreAnim.x,
                        y: scoreAnim.y,
                        scale: 1,
                        opacity: 1
                      }}
                      animate={{ 
                        y: scoreAnim.y - 60,
                        scale: [1, 1.2, 1],
                        opacity: [1, 1, 0]
                      }}
                      transition={{ 
                        duration: 1,
                        ease: "easeOut"
                      }}
                      exit={{ opacity: 0 }}
                    >
                      +{scoreAnim.points}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {showCelebration && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center mt-8"
                >
                  <h2 className="text-3xl font-bold text-white">
                    🎉 Factory Complete! All candies are packaged! 🏭
                  </h2>
                  <div className="text-2xl mt-4">
                    🍬 🍭 🍫 🧁 🍪 → 📦
                  </div>
                  <div className="text-3xl font-bold text-pink-300 mt-4">
                    Score: {candiesCollected} out of 10
                  </div>
                </motion.div>
              )}
            </div>
          </TouchContainer>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default MultiplicationCandyWorksheet; 
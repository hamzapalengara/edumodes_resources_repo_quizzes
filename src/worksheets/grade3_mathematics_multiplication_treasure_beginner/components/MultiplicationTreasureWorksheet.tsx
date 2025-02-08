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

interface FloatingTreasure {
  id: number;
  treasure: string;
  startX: number;
  startY: number;
}

interface ScoreAnimation {
  id: number;
  points: number;
  x: number;
  y: number;
}

// Fixed grid with numbers up to 90 (multiples of 9)
const generateGrid = (): GridCell[][] => {
  const grid: GridCell[][] = [];
  const size = 5;
  
  // Create the grid with multiplication numbers
  const values = [
    [63, 9, 18, 72, 81],
    [27, 54, 36, 45, 18],
    [90, 45, 63, 54, 72],
    [36, 81, 90, 27, 9],
    [18, 27, 45, 63, 90]
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

const TREASURES = ['💎', '🌟', '👑', '💍', '🏆', '🔮', '⭐', '💰', '🗝️', '✨'];
const TREASURE_NAMES = ['gem', 'star', 'crown', 'ring', 'trophy', 'crystal', 'medallion', 'gold', 'key', 'sparkle'];

const MultiplicationTreasureWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [selectedCells, setSelectedCells] = useState<GridCell[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const message = 'Collect treasures in groups of 9! 💎';
  const [lastSelectedValue, setLastSelectedValue] = useState(0);
  const [treasuresCollected, setTreasuresCollected] = useState(0);
  const [floatingTreasures, setFloatingTreasures] = useState<FloatingTreasure[]>([]);
  const [treasureCounter, setTreasureCounter] = useState(0);
  const [scoreAnimations, setScoreAnimations] = useState<ScoreAnimation[]>([]);
  const [scoreCounter, setScoreCounter] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const addFloatingTreasure = (cellElement: HTMLElement) => {
    const rect = cellElement.getBoundingClientRect();
    const treasure = {
      id: treasureCounter,
      treasure: TREASURES[treasuresCollected],
      startX: rect.left + rect.width / 2,
      startY: rect.top + rect.height / 2
    };
    setFloatingTreasures(prev => [...prev, treasure]);
    setTreasureCounter(prev => prev + 1);

    const scoreAnim = {
      id: scoreCounter,
      points: 1,
      x: rect.left + rect.width / 2,
      y: rect.top
    };
    setScoreAnimations(prev => [...prev, scoreAnim]);
    setScoreCounter(prev => prev + 1);

    setTimeout(() => {
      setFloatingTreasures(prev => prev.filter(t => t.id !== treasure.id));
      setScoreAnimations(prev => prev.filter(s => s.id !== scoreAnim.id));
    }, 1000);
  };

  const handleCellClick = (cell: GridCell, event: React.MouseEvent<HTMLButtonElement>, markCorrect: () => void, markAttempted: () => void) => {
    setAttempts(prev => prev + 1);
    markAttempted();
    
    if (selectedCells.length === 0) {
      if (cell.value === 9) {
        setSelectedCells([cell]);
        setLastSelectedValue(9);
        setTreasuresCollected(1);
        speak("1 times 9 equals 9, found a precious gem!");
        addFloatingTreasure(event.currentTarget);
        markCorrect();
      } else {
        speak("Start with 9 treasures for your first discovery!");
        if (attempts > 2) {
          setShowHint(true);
        }
      }
      return;
    }

    const nextExpectedValue = lastSelectedValue + 9;
    if (cell.value === nextExpectedValue && !selectedCells.includes(cell)) {
      const newSelectedCells = [...selectedCells, cell];
      setSelectedCells(newSelectedCells);
      setLastSelectedValue(cell.value);
      setTreasuresCollected(prev => prev + 1);
      setShowHint(false);
      addFloatingTreasure(event.currentTarget);
      markCorrect();

      const multiplier = cell.value / 9;
      speak(`${multiplier} times 9 equals ${cell.value}, discovered ${TREASURE_NAMES[treasuresCollected]}!`);

      if (cell.value === 90) {
        handleLevelComplete();
      }
    } else {
      if (selectedCells.includes(cell)) {
        speak("We've already found this treasure!");
      } else if (cell.value < nextExpectedValue) {
        speak("Not enough treasures in this chest!");
      } else if (cell.value > nextExpectedValue) {
        speak("Too many treasures! Let's count by 9.");
      }
      
      if (attempts > 3) {
        setShowHint(true);
      }
    }
  };

  const handleLevelComplete = () => {
    setShowCelebration(true);
    speak("Amazing! You've discovered all the treasures!");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#50C878', '#FFB90F']
    });
  };

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const getTreasureForCell = (cell: GridCell) => {
    if (!selectedCells.includes(cell)) return null;
    const index = selectedCells.findIndex(selected => 
      selected.row === cell.row && selected.col === cell.col
    );
    return TREASURES[index];
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
        <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-yellow-900">
          <WorksheetHeader />
          
          <div className="p-4 w-full max-w-6xl mx-auto">
            <div className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 mb-4">
              <ScoreDisplay 
                score={treasuresCollected} 
                totalQuestions={10}
              />
            </div>

            <div className="text-center mt-2 text-xl bg-white/10 backdrop-blur-md rounded-lg shadow-md p-3">
              <div className="flex items-center justify-center gap-2">
                <span>{selectedCells.length === 0 ? '💎' : ''}</span>
                <span className="font-bold text-white">Treasure Collection:</span>
                <div className="flex gap-1">
                  {Array(treasuresCollected).fill(null).map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-2xl"
                    >
                      {TREASURES[index]}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-emerald-400/20 backdrop-blur-md border-l-4 border-emerald-400 p-4 rounded-r-lg"
              >
                <p className="text-emerald-100">
                  <span className="font-bold">Treasure Map Hint:</span> Look for {lastSelectedValue + 9} treasures. 
                  It's the next multiple of 9 after {lastSelectedValue}!
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
                    const treasure = getTreasureForCell(cell);
                    return (
                      <motion.button
                        key={`${i}-${j}`}
                        onClick={(e) => handleCellClick(cell, e, markCorrect, markAttempted)}
                        className={`
                          aspect-square rounded-lg shadow-lg text-2xl font-bold
                          flex items-center justify-center
                          transition-colors duration-300 relative
                          ${selectedCells.includes(cell) 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-white/10 backdrop-blur-md hover:bg-white/20 text-white'}
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {treasure ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-3xl"
                          >
                            {treasure}
                          </motion.span>
                        ) : (
                          cell.value
                        )}
                        {cell.value === 9 && selectedCells.length === 0 && (
                          <span className="absolute -top-4 text-2xl animate-bounce">
                            💎
                          </span>
                        )}
                        {cell.value === 90 && !selectedCells.includes(cell) && (
                          <span className="absolute -bottom-4 text-2xl">
                            ✨
                          </span>
                        )}
                      </motion.button>
                    );
                  })
                )}

                <AnimatePresence>
                  {floatingTreasures.map((treasure) => (
                    <motion.div
                      key={treasure.id}
                      className="text-4xl fixed pointer-events-none"
                      initial={{ 
                        x: treasure.startX,
                        y: treasure.startY,
                        scale: 1,
                        opacity: 1
                      }}
                      animate={{ 
                        x: [treasure.startX, treasure.startX - 50, treasure.startX + 50],
                        y: [treasure.startY, treasure.startY - 100, treasure.startY],
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
                      {TREASURES[selectedCells.length - 1]}
                    </motion.div>
                  ))}

                  {scoreAnimations.map((scoreAnim) => (
                    <motion.div
                      key={`score-${scoreAnim.id}`}
                      className="text-2xl font-bold text-yellow-300 fixed pointer-events-none"
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
                    🎉 All Treasures Found! You're a Master Explorer! ✨
                  </h2>
                  <div className="text-2xl mt-4">
                    💎 👑 💍 🏆 🔮 → ✨
                  </div>
                  <div className="text-3xl font-bold text-yellow-300 mt-4">
                    Score: {treasuresCollected} out of 10
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

export default MultiplicationTreasureWorksheet; 
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

interface FloatingBalloon {
  id: number;
  balloon: string;
  startX: number;
  startY: number;
}

interface ScoreAnimation {
  id: number;
  points: number;
  x: number;
  y: number;
}

// Fixed grid with numbers up to 100 (multiples of 10)
const generateGrid = (): GridCell[][] => {
  const grid: GridCell[][] = [];
  const size = 5;
  
  // Create the grid with multiplication numbers
  const values = [
    [70, 10, 20, 80, 90],
    [30, 60, 40, 50, 20],
    [100, 50, 70, 60, 80],
    [40, 90, 100, 30, 10],
    [20, 30, 50, 70, 100]
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

const BALLOONS = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];
const BALLOON_COLORS = ['red', 'blue', 'yellow', 'green', 'purple', 'pink', 'orange', 'cyan', 'magenta', 'rainbow'];

const MultiplicationBalloonWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [selectedCells, setSelectedCells] = useState<GridCell[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const message = 'Bundle balloons in groups of 10! 🎈';
  const [lastSelectedValue, setLastSelectedValue] = useState(0);
  const [balloonsCollected, setBalloonsCollected] = useState(0);
  const [floatingBalloons, setFloatingBalloons] = useState<FloatingBalloon[]>([]);
  const [balloonCounter, setBalloonCounter] = useState(0);
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

  const addFloatingBalloon = (cellElement: HTMLElement) => {
    const rect = cellElement.getBoundingClientRect();
    const balloon = {
      id: balloonCounter,
      balloon: BALLOONS[balloonsCollected],
      startX: rect.left + rect.width / 2,
      startY: rect.top + rect.height / 2
    };
    setFloatingBalloons(prev => [...prev, balloon]);
    setBalloonCounter(prev => prev + 1);

    const scoreAnim = {
      id: scoreCounter,
      points: 1,
      x: rect.left + rect.width / 2,
      y: rect.top
    };
    setScoreAnimations(prev => [...prev, scoreAnim]);
    setScoreCounter(prev => prev + 1);

    setTimeout(() => {
      setFloatingBalloons(prev => prev.filter(b => b.id !== balloon.id));
      setScoreAnimations(prev => prev.filter(s => s.id !== scoreAnim.id));
    }, 1000);
  };

  const handleCellClick = (cell: GridCell, event: React.MouseEvent<HTMLButtonElement>, markCorrect: () => void, markAttempted: () => void) => {
    setAttempts(prev => prev + 1);
    markAttempted();
    
    if (selectedCells.length === 0) {
      if (cell.value === 10) {
        setSelectedCells([cell]);
        setLastSelectedValue(10);
        setBalloonsCollected(1);
        speak("1 times 10 equals 10, collected a red balloon!");
        addFloatingBalloon(event.currentTarget);
        markCorrect();
      } else {
        speak("Start with 10 balloons for your first bundle!");
        if (attempts > 2) {
          setShowHint(true);
        }
      }
      return;
    }

    const nextExpectedValue = lastSelectedValue + 10;
    if (cell.value === nextExpectedValue && !selectedCells.includes(cell)) {
      const newSelectedCells = [...selectedCells, cell];
      setSelectedCells(newSelectedCells);
      setLastSelectedValue(cell.value);
      setBalloonsCollected(prev => prev + 1);
      setShowHint(false);
      addFloatingBalloon(event.currentTarget);
      markCorrect();

      const multiplier = cell.value / 10;
      speak(`${multiplier} times 10 equals ${cell.value}, collected a ${BALLOON_COLORS[balloonsCollected]} balloon!`);

      if (cell.value === 100) {
        handleLevelComplete();
      }
    } else {
      if (selectedCells.includes(cell)) {
        speak("We've already collected these balloons!");
      } else if (cell.value < nextExpectedValue) {
        speak("Not enough balloons in this bundle!");
      } else if (cell.value > nextExpectedValue) {
        speak("Too many balloons! Let's count by 10.");
      }
      
      if (attempts > 3) {
        setShowHint(true);
      }
    }
  };

  const handleLevelComplete = () => {
    setShowCelebration(true);
    speak("Amazing! You've collected all the balloon bundles!");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3', '#FF8B94']
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

  const getBalloonForCell = (cell: GridCell) => {
    if (!selectedCells.includes(cell)) return null;
    const index = selectedCells.findIndex(selected => 
      selected.row === cell.row && selected.col === cell.col
    );
    return BALLOONS[index];
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
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-pink-100">
          <WorksheetHeader />
          
          <div className="p-4 w-full max-w-6xl mx-auto">
            <div className="w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-4 mb-4">
              <ScoreDisplay 
                score={balloonsCollected} 
                totalQuestions={10}
              />
            </div>

            <div className="text-center mt-2 text-xl bg-white/80 backdrop-blur-md rounded-lg shadow-md p-3">
              <div className="flex items-center justify-center gap-2">
                <span>{selectedCells.length === 0 ? '🎈' : ''}</span>
                <span className="font-bold text-sky-600">Balloon Collection:</span>
                <div className="flex gap-1">
                  {Array(balloonsCollected).fill(null).map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-2xl"
                    >
                      {BALLOONS[index]}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-sky-100/80 backdrop-blur-md border-l-4 border-sky-400 p-4 rounded-r-lg"
              >
                <p className="text-sky-800">
                  <span className="font-bold">Festival Hint:</span> Look for {lastSelectedValue + 10} balloons. 
                  It's the next multiple of 10 after {lastSelectedValue}!
                </p>
              </motion.div>
            )}
          </div>

          <TouchContainer>
            <div className="max-w-2xl mx-auto p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-center mb-6 text-sky-600"
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
                    const balloon = getBalloonForCell(cell);
                    return (
                      <motion.button
                        key={`${i}-${j}`}
                        onClick={(e) => handleCellClick(cell, e, markCorrect, markAttempted)}
                        className={`
                          aspect-square rounded-lg shadow-lg text-2xl font-bold
                          flex items-center justify-center
                          transition-colors duration-300 relative
                          ${selectedCells.includes(cell) 
                            ? 'bg-gradient-to-br from-sky-400 to-pink-400 text-white' 
                            : 'bg-white/80 backdrop-blur-md hover:bg-white/90 text-sky-600'}
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {balloon ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-3xl"
                          >
                            {balloon}
                          </motion.span>
                        ) : (
                          cell.value
                        )}
                        {cell.value === 10 && selectedCells.length === 0 && (
                          <span className="absolute -top-4 text-2xl animate-bounce">
                            🎈
                          </span>
                        )}
                        {cell.value === 100 && !selectedCells.includes(cell) && (
                          <span className="absolute -bottom-4 text-2xl">
                            🎉
                          </span>
                        )}
                      </motion.button>
                    );
                  })
                )}

                <AnimatePresence>
                  {floatingBalloons.map((balloon) => (
                    <motion.div
                      key={balloon.id}
                      className="text-4xl fixed pointer-events-none"
                      initial={{ 
                        x: balloon.startX,
                        y: balloon.startY,
                        scale: 1,
                        opacity: 1
                      }}
                      animate={{ 
                        x: [balloon.startX, balloon.startX - 50, balloon.startX + 50],
                        y: [balloon.startY, balloon.startY - 100, balloon.startY],
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
                      {BALLOONS[selectedCells.length - 1]}
                    </motion.div>
                  ))}

                  {scoreAnimations.map((scoreAnim) => (
                    <motion.div
                      key={`score-${scoreAnim.id}`}
                      className="text-2xl font-bold text-sky-500 fixed pointer-events-none"
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
                  <h2 className="text-3xl font-bold text-sky-600">
                    🎉 All Balloons Collected! You're a Festival Star! 🎈
                  </h2>
                  <div className="text-2xl mt-4">
                    🎈 🎈 🎈 🎈 🎈 → 🎉
                  </div>
                  <div className="text-3xl font-bold text-pink-500 mt-4">
                    Score: {balloonsCollected} out of 10
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

export default MultiplicationBalloonWorksheet; 
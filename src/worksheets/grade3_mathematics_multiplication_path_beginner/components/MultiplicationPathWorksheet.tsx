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

interface JumpingTreat {
  id: number;
  treat: string;
  startX: number;
  startY: number;
}

interface ScoreAnimation {
  id: number;
  points: number;
  x: number;
  y: number;
}

// Fixed grid with numbers up to 20
const generateGrid = (): GridCell[][] => {
  const grid: GridCell[][] = [];
  const size = 5;
  
  // Create the grid with pairs of multiplication numbers in each row
  const values = [
    [15, 2, 4, 17, 19],     // First row has 2 and 4
    [6, 13, 8, 16, 3],      // Second row has 6 and 8
    [12, 10, 18, 12, 14],   // Third row has 10 and 12
    [7, 14, 16, 11, 5],     // Fourth row has 14 and 16
    [9, 20, 18, 15, 13]     // Fifth row has 18 and 20
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

const TREAT_EMOJIS = ['🐟', '🥩', '🍗', '🥪', '🥓', '🍤', '🥐', '🧀', '🥨', '🥣'];
const TREAT_NAMES = ['fish', 'steak', 'chicken', 'sandwich', 'bacon', 'shrimp', 'croissant', 'cheese', 'pretzel', 'bowl of food'];

const MultiplicationPathWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [selectedCells, setSelectedCells] = useState<GridCell[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const message = 'Help the hungry cat 🐱 find treats by following numbers multiplied by 2';
  const [lastSelectedValue, setLastSelectedValue] = useState(0);
  const [treatsCollected, setTreatsCollected] = useState(0);
  const [jumpingTreats, setJumpingTreats] = useState<JumpingTreat[]>([]);
  const [treatCounter, setTreatCounter] = useState(0);
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

  const addJumpingTreat = (cellElement: HTMLElement) => {
    const rect = cellElement.getBoundingClientRect();
    const treat = {
      id: treatCounter,
      treat: '🐟',
      startX: rect.left + rect.width / 2,
      startY: rect.top + rect.height / 2
    };
    setJumpingTreats(prev => [...prev, treat]);
    setTreatCounter(prev => prev + 1);

    // Add score animation
    const scoreAnim = {
      id: scoreCounter,
      points: 1,
      x: rect.left + rect.width / 2,
      y: rect.top
    };
    setScoreAnimations(prev => [...prev, scoreAnim]);
    setScoreCounter(prev => prev + 1);

    // Remove the treat after animation completes
    setTimeout(() => {
      setJumpingTreats(prev => prev.filter(t => t.id !== treat.id));
      setScoreAnimations(prev => prev.filter(s => s.id !== scoreAnim.id));
    }, 1000);
  };

  const handleCellClick = (cell: GridCell, event: React.MouseEvent<HTMLButtonElement>, markCorrect: () => void, markAttempted: () => void) => {
    setAttempts(prev => prev + 1);
    markAttempted();
    
    // First selection must be 2
    if (selectedCells.length === 0) {
      if (cell.value === 2) {
        setSelectedCells([cell]);
        setLastSelectedValue(2);
        setTreatsCollected(1);
        speak("1 times 2 equals 2, found a fish!");
        addJumpingTreat(event.currentTarget);
        markCorrect();
      } else {
        speak("The cat needs to start at number 2!");
        if (attempts > 2) {
          setShowHint(true);
        }
      }
      return;
    }

    // Next selections must be the next multiple of 2
    const nextExpectedValue = lastSelectedValue + 2;
    if (cell.value === nextExpectedValue && !selectedCells.includes(cell)) {
      const newSelectedCells = [...selectedCells, cell];
      setSelectedCells(newSelectedCells);
      setLastSelectedValue(cell.value);
      setTreatsCollected(prev => prev + 1);
      setShowHint(false);
      addJumpingTreat(event.currentTarget);
      markCorrect();

      // Calculate the multiplication fact
      const multiplier = cell.value / 2;
      speak(`${multiplier} times 2 equals ${cell.value}, found a ${TREAT_NAMES[treatsCollected]}!`);

      if (cell.value === 20) {
        handleLevelComplete();
      }
    } else {
      if (selectedCells.includes(cell)) {
        speak("Meow! Already got that treat!");
      } else if (cell.value < nextExpectedValue) {
        speak("The cat already found that smaller treat!");
      } else if (cell.value > nextExpectedValue) {
        speak("That treat is too far ahead! Take smaller steps.");
      }
      
      if (attempts > 3) {
        setShowHint(true);
      }
    }
  };

  const handleLevelComplete = () => {
    setShowCelebration(true);
    speak("Purrrfect! The cat found all the treats and reached its food bowl! 🐱");
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

  const getTreatForCell = (cell: GridCell) => {
    if (!selectedCells.includes(cell)) return null;
    const index = selectedCells.findIndex(selected => 
      selected.row === cell.row && selected.col === cell.col
    );
    return TREAT_EMOJIS[index];
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
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-teal-50">
          <WorksheetHeader />
          
          <div className="p-4 w-full max-w-6xl mx-auto">
            <div className="w-full bg-white rounded-xl shadow-lg p-4 mb-4">
              <ScoreDisplay 
                score={treatsCollected} 
                totalQuestions={10}
              />
            </div>

            <div className="text-center mt-2 text-xl bg-white rounded-lg shadow-md p-3">
              <div className="flex items-center justify-center gap-2">
                <span>{selectedCells.length === 0 ? '🐱' : ''}</span>
                <span className="font-bold text-teal-700">Treats collected:</span>
                <div className="flex gap-1">
                  {Array(treatsCollected).fill(null).map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-2xl"
                    >
                      {TREAT_EMOJIS[index]}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg"
              >
                <p className="text-yellow-800">
                  <span className="font-bold">Hint:</span> Look for the number {lastSelectedValue + 2}. 
                  It's the next multiple of 2 after {lastSelectedValue}!
                </p>
              </motion.div>
            )}
          </div>

          <TouchContainer>
            <div className="max-w-2xl mx-auto p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-center mb-6 text-teal-700"
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
                    const treat = getTreatForCell(cell);
                    return (
                      <motion.button
                        key={`${i}-${j}`}
                        onClick={(e) => handleCellClick(cell, e, markCorrect, markAttempted)}
                        className={`
                          aspect-square rounded-lg shadow-lg text-2xl font-bold
                          flex items-center justify-center
                          transition-colors duration-300 relative
                          ${selectedCells.includes(cell) 
                            ? 'bg-teal-500 text-white' 
                            : 'bg-white hover:bg-red-100'}
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {treat ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-3xl"
                          >
                            {treat}
                          </motion.span>
                        ) : (
                          cell.value
                        )}
                        {cell.value === 2 && selectedCells.length === 0 && (
                          <span className="absolute -top-4 text-2xl animate-bounce">
                            🐱
                          </span>
                        )}
                        {cell.value === 20 && !selectedCells.includes(cell) && (
                          <span className="absolute -bottom-4 text-2xl">
                            🥣
                          </span>
                        )}
                      </motion.button>
                    );
                  })
                )}

                <AnimatePresence>
                  {jumpingTreats.map((treat) => (
                    <motion.div
                      key={treat.id}
                      className="text-4xl fixed pointer-events-none"
                      initial={{ 
                        x: treat.startX,
                        y: treat.startY,
                        scale: 1,
                        opacity: 1
                      }}
                      animate={{ 
                        x: [treat.startX, treat.startX - 50, treat.startX + 50],
                        y: [treat.startY, treat.startY - 100, treat.startY],
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
                      {TREAT_EMOJIS[selectedCells.length - 1]}
                    </motion.div>
                  ))}

                  {scoreAnimations.map((scoreAnim) => (
                    <motion.div
                      key={`score-${scoreAnim.id}`}
                      className="text-2xl font-bold text-yellow-500 fixed pointer-events-none"
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
                  <h2 className="text-3xl font-bold text-teal-600">
                    🎉 Purrrfect! The cat found all the treats! 🐱
                  </h2>
                  <div className="text-2xl mt-4">
                    🐟 🥩 🍗 🥪 🥓 → 🥣
                  </div>
                  <div className="text-3xl font-bold text-yellow-500 mt-4">
                    Score: {treatsCollected} out of 10
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

export default MultiplicationPathWorksheet; 
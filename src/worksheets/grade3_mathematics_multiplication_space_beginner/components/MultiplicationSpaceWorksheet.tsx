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

interface FloatingObject {
  id: number;
  object: string;
  startX: number;
  startY: number;
}

interface ScoreAnimation {
  id: number;
  points: number;
  x: number;
  y: number;
}

// Fixed grid with numbers up to 30 (multiples of 3)
const generateGrid = (): GridCell[][] => {
  const grid: GridCell[][] = [];
  const size = 5;
  
  // Create the grid with pairs of multiplication numbers in each row
  const values = [
    [21, 3, 6, 24, 27],     // First row has 3 and 6
    [9, 18, 12, 15, 4],     // Second row has 9 and 12
    [30, 15, 21, 18, 24],   // Third row has 15 and 18
    [12, 27, 30, 8, 6],     // Fourth row has 21 and 24
    [3, 9, 15, 21, 30]      // Fifth row has 27 and 30
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

const SPACE_OBJECTS = ['🌟', '🌍', '🌙', '🪐', '☄️', '🌠', '🛸', '🚀', '🌌', '👨‍🚀'];
const OBJECT_NAMES = ['star', 'Earth', 'moon', 'Saturn', 'comet', 'shooting star', 'UFO', 'rocket', 'galaxy', 'astronaut'];

const MultiplicationSpaceWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [selectedCells, setSelectedCells] = useState<GridCell[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const message = 'Help the astronaut explore space by following numbers multiplied by 3! 👨‍🚀';
  const [lastSelectedValue, setLastSelectedValue] = useState(0);
  const [objectsCollected, setObjectsCollected] = useState(0);
  const [floatingObjects, setFloatingObjects] = useState<FloatingObject[]>([]);
  const [objectCounter, setObjectCounter] = useState(0);
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

  const addFloatingObject = (cellElement: HTMLElement) => {
    const rect = cellElement.getBoundingClientRect();
    const object = {
      id: objectCounter,
      object: SPACE_OBJECTS[objectsCollected],
      startX: rect.left + rect.width / 2,
      startY: rect.top + rect.height / 2
    };
    setFloatingObjects(prev => [...prev, object]);
    setObjectCounter(prev => prev + 1);

    // Add score animation
    const scoreAnim = {
      id: scoreCounter,
      points: 1,
      x: rect.left + rect.width / 2,
      y: rect.top
    };
    setScoreAnimations(prev => [...prev, scoreAnim]);
    setScoreCounter(prev => prev + 1);

    // Remove the object after animation completes
    setTimeout(() => {
      setFloatingObjects(prev => prev.filter(t => t.id !== object.id));
      setScoreAnimations(prev => prev.filter(s => s.id !== scoreAnim.id));
    }, 1000);
  };

  const handleCellClick = (cell: GridCell, event: React.MouseEvent<HTMLButtonElement>, markCorrect: () => void, markAttempted: () => void) => {
    setAttempts(prev => prev + 1);
    markAttempted();
    
    // First selection must be 3
    if (selectedCells.length === 0) {
      if (cell.value === 3) {
        setSelectedCells([cell]);
        setLastSelectedValue(3);
        setObjectsCollected(1);
        speak("1 times 3 equals 3, found a star!");
        addFloatingObject(event.currentTarget);
        markCorrect();
      } else {
        speak("The astronaut needs to start at number 3!");
        if (attempts > 2) {
          setShowHint(true);
        }
      }
      return;
    }

    // Next selections must be the next multiple of 3
    const nextExpectedValue = lastSelectedValue + 3;
    if (cell.value === nextExpectedValue && !selectedCells.includes(cell)) {
      const newSelectedCells = [...selectedCells, cell];
      setSelectedCells(newSelectedCells);
      setLastSelectedValue(cell.value);
      setObjectsCollected(prev => prev + 1);
      setShowHint(false);
      addFloatingObject(event.currentTarget);
      markCorrect();

      // Calculate the multiplication fact
      const multiplier = cell.value / 3;
      speak(`${multiplier} times 3 equals ${cell.value}, found a ${OBJECT_NAMES[objectsCollected]}!`);

      if (cell.value === 30) {
        handleLevelComplete();
      }
    } else {
      if (selectedCells.includes(cell)) {
        speak("Already discovered this space object!");
      } else if (cell.value < nextExpectedValue) {
        speak("We've already passed that space object!");
      } else if (cell.value > nextExpectedValue) {
        speak("That's too far ahead in space! Take smaller steps.");
      }
      
      if (attempts > 3) {
        setShowHint(true);
      }
    }
  };

  const handleLevelComplete = () => {
    setShowCelebration(true);
    speak("Mission accomplished! You've explored the entire galaxy!");
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

  const getObjectForCell = (cell: GridCell) => {
    if (!selectedCells.includes(cell)) return null;
    const index = selectedCells.findIndex(selected => 
      selected.row === cell.row && selected.col === cell.col
    );
    return SPACE_OBJECTS[index];
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
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900">
          <WorksheetHeader />
          
          <div className="p-4 w-full max-w-6xl mx-auto">
            <div className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 mb-4">
              <ScoreDisplay 
                score={objectsCollected} 
                totalQuestions={10}
              />
            </div>

            <div className="text-center mt-2 text-xl bg-white/10 backdrop-blur-md rounded-lg shadow-md p-3">
              <div className="flex items-center justify-center gap-2">
                <span>{selectedCells.length === 0 ? '👨‍🚀' : ''}</span>
                <span className="font-bold text-white">Space objects discovered:</span>
                <div className="flex gap-1">
                  {Array(objectsCollected).fill(null).map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-2xl"
                    >
                      {SPACE_OBJECTS[index]}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-yellow-400/20 backdrop-blur-md border-l-4 border-yellow-400 p-4 rounded-r-lg"
              >
                <p className="text-yellow-200">
                  <span className="font-bold">Navigation Hint:</span> Look for the number {lastSelectedValue + 3}. 
                  It's the next multiple of 3 after {lastSelectedValue}!
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
                    const object = getObjectForCell(cell);
                    return (
                      <motion.button
                        key={`${i}-${j}`}
                        onClick={(e) => handleCellClick(cell, e, markCorrect, markAttempted)}
                        className={`
                          aspect-square rounded-lg shadow-lg text-2xl font-bold
                          flex items-center justify-center
                          transition-colors duration-300 relative
                          ${selectedCells.includes(cell) 
                            ? 'bg-indigo-500 text-white' 
                            : 'bg-white/10 backdrop-blur-md hover:bg-white/20 text-white'}
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {object ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-3xl"
                          >
                            {object}
                          </motion.span>
                        ) : (
                          cell.value
                        )}
                        {cell.value === 3 && selectedCells.length === 0 && (
                          <span className="absolute -top-4 text-2xl animate-bounce">
                            👨‍🚀
                          </span>
                        )}
                        {cell.value === 30 && !selectedCells.includes(cell) && (
                          <span className="absolute -bottom-4 text-2xl">
                            🌌
                          </span>
                        )}
                      </motion.button>
                    );
                  })
                )}

                <AnimatePresence>
                  {floatingObjects.map((object) => (
                    <motion.div
                      key={object.id}
                      className="text-4xl fixed pointer-events-none"
                      initial={{ 
                        x: object.startX,
                        y: object.startY,
                        scale: 1,
                        opacity: 1
                      }}
                      animate={{ 
                        x: [object.startX, object.startX - 50, object.startX + 50],
                        y: [object.startY, object.startY - 100, object.startY],
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
                      {SPACE_OBJECTS[selectedCells.length - 1]}
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
                    🎉 Mission Complete! You've mastered space multiplication! 👨‍🚀
                  </h2>
                  <div className="text-2xl mt-4">
                    🌟 🌍 🌙 🪐 ☄️ → 🌌
                  </div>
                  <div className="text-3xl font-bold text-yellow-300 mt-4">
                    Score: {objectsCollected} out of 10
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

export default MultiplicationSpaceWorksheet; 
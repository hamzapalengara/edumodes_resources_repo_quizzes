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

interface FloatingCreature {
  id: number;
  creature: string;
  startX: number;
  startY: number;
}

interface ScoreAnimation {
  id: number;
  points: number;
  x: number;
  y: number;
}

// Fixed grid with numbers up to 50 (multiples of 5)
const generateGrid = (): GridCell[][] => {
  const grid: GridCell[][] = [];
  const size = 5;
  
  // Create the grid with pairs of multiplication numbers in each row
  const values = [
    [35, 5, 10, 40, 45],     // First row has 5 and 10
    [15, 30, 20, 25, 10],    // Second row has 15 and 20
    [50, 25, 35, 30, 40],    // Third row has 25 and 30
    [20, 45, 50, 15, 5],     // Fourth row has 35 and 40
    [10, 15, 25, 35, 50]     // Fifth row has 45 and 50
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

const SEA_CREATURES = ['🐠', '🐋', '🐢', '🦈', '🐙', '🦑', '🐡', '🦀', '🐚', '🤿'];
const CREATURE_NAMES = ['tropical fish', 'whale', 'turtle', 'shark', 'octopus', 'squid', 'pufferfish', 'crab', 'seashell', 'diving mask'];

const MultiplicationOceanWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [selectedCells, setSelectedCells] = useState<GridCell[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const message = 'Help the diver discover sea creatures by following numbers multiplied by 5! 🤿';
  const [lastSelectedValue, setLastSelectedValue] = useState(0);
  const [creaturesFound, setCreaturesFound] = useState(0);
  const [floatingCreatures, setFloatingCreatures] = useState<FloatingCreature[]>([]);
  const [creatureCounter, setCreatureCounter] = useState(0);
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

  const addFloatingCreature = (cellElement: HTMLElement) => {
    const rect = cellElement.getBoundingClientRect();
    const creature = {
      id: creatureCounter,
      creature: SEA_CREATURES[creaturesFound],
      startX: rect.left + rect.width / 2,
      startY: rect.top + rect.height / 2
    };
    setFloatingCreatures(prev => [...prev, creature]);
    setCreatureCounter(prev => prev + 1);

    // Add score animation
    const scoreAnim = {
      id: scoreCounter,
      points: 1,
      x: rect.left + rect.width / 2,
      y: rect.top
    };
    setScoreAnimations(prev => [...prev, scoreAnim]);
    setScoreCounter(prev => prev + 1);

    // Remove the creature after animation completes
    setTimeout(() => {
      setFloatingCreatures(prev => prev.filter(t => t.id !== creature.id));
      setScoreAnimations(prev => prev.filter(s => s.id !== scoreAnim.id));
    }, 1000);
  };

  const handleCellClick = (cell: GridCell, event: React.MouseEvent<HTMLButtonElement>, markCorrect: () => void, markAttempted: () => void) => {
    setAttempts(prev => prev + 1);
    markAttempted();
    
    // First selection must be 5
    if (selectedCells.length === 0) {
      if (cell.value === 5) {
        setSelectedCells([cell]);
        setLastSelectedValue(5);
        setCreaturesFound(1);
        speak("1 times 5 equals 5, found a tropical fish!");
        addFloatingCreature(event.currentTarget);
        markCorrect();
      } else {
        speak("The diver needs to start at number 5!");
        if (attempts > 2) {
          setShowHint(true);
        }
      }
      return;
    }

    // Next selections must be the next multiple of 5
    const nextExpectedValue = lastSelectedValue + 5;
    if (cell.value === nextExpectedValue && !selectedCells.includes(cell)) {
      const newSelectedCells = [...selectedCells, cell];
      setSelectedCells(newSelectedCells);
      setLastSelectedValue(cell.value);
      setCreaturesFound(prev => prev + 1);
      setShowHint(false);
      addFloatingCreature(event.currentTarget);
      markCorrect();

      // Calculate the multiplication fact
      const multiplier = cell.value / 5;
      speak(`${multiplier} times 5 equals ${cell.value}, found a ${CREATURE_NAMES[creaturesFound]}!`);

      if (cell.value === 50) {
        handleLevelComplete();
      }
    } else {
      if (selectedCells.includes(cell)) {
        speak("We've already discovered this sea creature!");
      } else if (cell.value < nextExpectedValue) {
        speak("We've already explored that area!");
      } else if (cell.value > nextExpectedValue) {
        speak("That's too deep! Let's explore step by step.");
      }
      
      if (attempts > 3) {
        setShowHint(true);
      }
    }
  };

  const handleLevelComplete = () => {
    setShowCelebration(true);
    speak("Amazing dive! You've discovered all the sea creatures!");
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

  const getCreatureForCell = (cell: GridCell) => {
    if (!selectedCells.includes(cell)) return null;
    const index = selectedCells.findIndex(selected => 
      selected.row === cell.row && selected.col === cell.col
    );
    return SEA_CREATURES[index];
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
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-cyan-900">
          <WorksheetHeader />
          
          <div className="p-4 w-full max-w-6xl mx-auto">
            <div className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 mb-4">
              <ScoreDisplay 
                score={creaturesFound} 
                totalQuestions={10}
              />
            </div>

            <div className="text-center mt-2 text-xl bg-white/10 backdrop-blur-md rounded-lg shadow-md p-3">
              <div className="flex items-center justify-center gap-2">
                <span>{selectedCells.length === 0 ? '🤿' : ''}</span>
                <span className="font-bold text-white">Sea creatures discovered:</span>
                <div className="flex gap-1">
                  {Array(creaturesFound).fill(null).map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-2xl"
                    >
                      {SEA_CREATURES[index]}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-blue-400/20 backdrop-blur-md border-l-4 border-blue-400 p-4 rounded-r-lg"
              >
                <p className="text-blue-200">
                  <span className="font-bold">Diving Hint:</span> Look for the number {lastSelectedValue + 5}. 
                  It's the next multiple of 5 after {lastSelectedValue}!
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
                    const creature = getCreatureForCell(cell);
                    return (
                      <motion.button
                        key={`${i}-${j}`}
                        onClick={(e) => handleCellClick(cell, e, markCorrect, markAttempted)}
                        className={`
                          aspect-square rounded-lg shadow-lg text-2xl font-bold
                          flex items-center justify-center
                          transition-colors duration-300 relative
                          ${selectedCells.includes(cell) 
                            ? 'bg-cyan-500 text-white' 
                            : 'bg-white/10 backdrop-blur-md hover:bg-white/20 text-white'}
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {creature ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-3xl"
                          >
                            {creature}
                          </motion.span>
                        ) : (
                          cell.value
                        )}
                        {cell.value === 5 && selectedCells.length === 0 && (
                          <span className="absolute -top-4 text-2xl animate-bounce">
                            🤿
                          </span>
                        )}
                        {cell.value === 50 && !selectedCells.includes(cell) && (
                          <span className="absolute -bottom-4 text-2xl">
                            🌊
                          </span>
                        )}
                      </motion.button>
                    );
                  })
                )}

                <AnimatePresence>
                  {floatingCreatures.map((creature) => (
                    <motion.div
                      key={creature.id}
                      className="text-4xl fixed pointer-events-none"
                      initial={{ 
                        x: creature.startX,
                        y: creature.startY,
                        scale: 1,
                        opacity: 1
                      }}
                      animate={{ 
                        x: [creature.startX, creature.startX - 50, creature.startX + 50],
                        y: [creature.startY, creature.startY - 100, creature.startY],
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
                      {SEA_CREATURES[selectedCells.length - 1]}
                    </motion.div>
                  ))}

                  {scoreAnimations.map((scoreAnim) => (
                    <motion.div
                      key={`score-${scoreAnim.id}`}
                      className="text-2xl font-bold text-cyan-300 fixed pointer-events-none"
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
                    🎉 Ocean Exploration Complete! You've discovered all the sea creatures! 🤿
                  </h2>
                  <div className="text-2xl mt-4">
                    🐠 🐋 🐢 🦈 🐙 → 🌊
                  </div>
                  <div className="text-3xl font-bold text-cyan-300 mt-4">
                    Score: {creaturesFound} out of 10
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

export default MultiplicationOceanWorksheet; 
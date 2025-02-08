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

interface FloatingDino {
  id: number;
  dino: string;
  startX: number;
  startY: number;
}

interface ScoreAnimation {
  id: number;
  points: number;
  x: number;
  y: number;
}

const DINOS = ['🦖', '🦕', '🦖', '🦕', '🦖', '🦕', '🦖', '🦕', '🦖', '🦕'];
const DINO_NAMES = ['T-Rex', 'Brontosaurus', 'Raptor', 'Diplodocus', 'Spinosaurus', 'Brachiosaurus', 'Allosaurus', 'Apatosaurus', 'Carnotaurus', 'Stegosaurus'];

// Fixed grid with numbers up to 110 (multiples of 11)
const generateGrid = (): GridCell[][] => {
  const grid: GridCell[][] = [];
  const size = 5;
  
  // Create the grid with multiplication numbers
  const values = [
    [77, 11, 22, 88, 99],
    [33, 66, 44, 55, 22],
    [110, 55, 77, 66, 88],
    [44, 99, 110, 33, 11],
    [22, 33, 55, 77, 110]
  ];

  for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = {
        value: values[i][j],
        isPath: values[i][j] <= 110 && values[i][j] % 11 === 0,
        isSelected: false,
        row: i,
        col: j
      };
    }
  }
  
  return grid;
};

const MultiplicationDinosaurWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [selectedCells, setSelectedCells] = useState<GridCell[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastSelectedValue, setLastSelectedValue] = useState(0);
  const [dinosCollected, setDinosCollected] = useState(0);
  const [floatingDinos, setFloatingDinos] = useState<FloatingDino[]>([]);
  const [dinoCounter, setDinoCounter] = useState(0);
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

  const addFloatingDino = useCallback((cellElement: HTMLElement) => {
    const rect = cellElement.getBoundingClientRect();
    const dino = {
      id: dinoCounter,
      dino: DINOS[dinosCollected],
      startX: rect.left + rect.width / 2,
      startY: rect.top + rect.height / 2
    };
    setFloatingDinos(prev => [...prev, dino]);
    setDinoCounter(prev => prev + 1);

    const scoreAnim = {
      id: scoreCounter,
      points: 10,
      x: rect.left + rect.width / 2,
      y: rect.top
    };
    setScoreAnimations(prev => [...prev, scoreAnim]);
    setScoreCounter(prev => prev + 1);

    setTimeout(() => {
      setFloatingDinos(prev => prev.filter(d => d.id !== dino.id));
      setScoreAnimations(prev => prev.filter(s => s.id !== scoreAnim.id));
    }, 1000);
  }, [dinosCollected, dinoCounter, scoreCounter]);

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleCellClick = useCallback((
    cell: GridCell, 
    event: React.MouseEvent<HTMLButtonElement>,
    markCorrect: () => void,
    markAttempted: () => void
  ) => {
    setAttempts(prev => prev + 1);
    markAttempted();
    
    if (selectedCells.length === 0) {
      if (cell.value === 11) {
        setSelectedCells([cell]);
        setLastSelectedValue(11);
        setDinosCollected(1);
        speak(`1 times 11 equals 11, discovered a ${DINO_NAMES[0]}!`);
        addFloatingDino(event.currentTarget);
        markCorrect();
      } else {
        speak("Start with 11 to find your first dinosaur!");
        if (attempts > 2) {
          setShowHint(true);
        }
      }
      return;
    }

    const nextExpectedValue = lastSelectedValue + 11;
    if (cell.value === nextExpectedValue && !selectedCells.some(c => c.value === cell.value)) {
      const newSelectedCells = [...selectedCells, cell];
      setSelectedCells(newSelectedCells);
      setLastSelectedValue(cell.value);
      setDinosCollected(prev => prev + 1);
      setShowHint(false);
      addFloatingDino(event.currentTarget);
      markCorrect();

      const multiplier = cell.value / 11;
      speak(`${multiplier} times 11 equals ${cell.value}, discovered a ${DINO_NAMES[dinosCollected]}!`);

      if (cell.value === 110) {
        handleLevelComplete();
      }
    } else {
      if (selectedCells.some(c => c.value === cell.value)) {
        speak("We've already discovered this dinosaur!");
      } else if (cell.value < nextExpectedValue) {
        speak("This number is too small! Keep searching!");
      } else if (cell.value > nextExpectedValue) {
        speak("That's too far ahead! Let's count by 11s.");
      }
      
      if (attempts > 3) {
        setShowHint(true);
      }
    }
  }, [selectedCells, lastSelectedValue, dinosCollected, addFloatingDino, attempts, speak]);

  const handleLevelComplete = useCallback(() => {
    setShowCelebration(true);
    speak("Amazing! You've discovered all the dinosaurs!");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#92400E', '#15803D', '#854D0E', '#166534', '#A16207']
    });
  }, [speak]);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  if (grid.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markAttempted }) => (
        <div className="min-h-screen bg-gradient-to-b from-amber-800 to-green-900">
          <WorksheetHeader />
          
          <TouchContainer>
            <div className="max-w-4xl mx-auto p-4">
              <div className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 mb-4">
                <ScoreDisplay 
                  score={dinosCollected * 10}
                  totalQuestions={100}
                />
              </div>

              <div className="text-center mt-2 text-xl bg-white/10 backdrop-blur-md rounded-lg shadow-md p-3">
                <div className="flex items-center justify-center gap-2">
                  <span>{selectedCells.length === 0 ? '🦖' : ''}</span>
                  <span className="font-bold text-amber-100">Dinosaur Collection:</span>
                  <div className="flex gap-1">
                    {Array(dinosCollected).fill(null).map((_, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-2xl"
                      >
                        {DINOS[index]}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-amber-900/50 backdrop-blur-md border-l-4 border-amber-400 p-4 rounded-r-lg"
                >
                  <p className="text-amber-100">
                    Find {selectedCells.length + 1} × 11 = {(selectedCells.length + 1) * 11} to discover the next dinosaur!
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 mt-4"
              >
                {/* Grid */}
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {grid.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      {row.map((cell) => {
                        const isSelected = selectedCells.some(c => c.value === cell.value);
                        return (
                          <motion.button
                            key={`${cell.row}-${cell.col}`}
                            className={`
                              w-full aspect-square rounded-lg text-xl font-bold
                              ${cell.isPath ? '' : 'opacity-0 pointer-events-none'}
                              ${isSelected 
                                ? 'bg-amber-500 text-white' 
                                : 'bg-white/20 text-white hover:bg-white/30'}
                            `}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => handleCellClick(cell, e, markCorrect, markAttempted)}
                            disabled={isSelected || showCelebration}
                          >
                            {cell.value}
                          </motion.button>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>

                {/* Floating Dinos */}
                <AnimatePresence>
                  {floatingDinos.map((dino) => (
                    <motion.div
                      key={dino.id}
                      className="fixed text-4xl pointer-events-none"
                      initial={{ 
                        x: dino.startX,
                        y: dino.startY,
                        opacity: 1,
                        scale: 1
                      }}
                      animate={{ 
                        y: dino.startY - 100,
                        opacity: 0,
                        scale: 1.5
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {dino.dino}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Score Animations */}
                <AnimatePresence>
                  {scoreAnimations.map((anim) => (
                    <motion.div
                      key={anim.id}
                      className="fixed text-xl font-bold text-yellow-300 pointer-events-none"
                      initial={{ 
                        x: anim.x,
                        y: anim.y,
                        opacity: 1,
                        scale: 1
                      }}
                      animate={{ 
                        y: anim.y - 50,
                        opacity: 0,
                        scale: 1.2
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      +{anim.points}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </TouchContainer>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default MultiplicationDinosaurWorksheet; 
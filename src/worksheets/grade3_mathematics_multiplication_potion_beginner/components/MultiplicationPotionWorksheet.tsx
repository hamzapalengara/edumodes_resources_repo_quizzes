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

interface FloatingIngredient {
  id: number;
  ingredient: string;
  startX: number;
  startY: number;
}

interface ScoreAnimation {
  id: number;
  points: number;
  x: number;
  y: number;
}

// Fixed grid with numbers up to 70 (multiples of 7)
const generateGrid = (): GridCell[][] => {
  const grid: GridCell[][] = [];
  const size = 5;
  
  // Create the grid with multiplication numbers
  const values = [
    [49, 7, 14, 56, 63],
    [21, 42, 28, 35, 14],
    [70, 35, 49, 42, 56],
    [28, 63, 70, 21, 7],
    [14, 21, 35, 49, 70]
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

const INGREDIENTS = ['🌟', '🌙', '🔮', '⚗️', '🧪', '🌿', '🍄', '💎', '🌺', '📖'];
const INGREDIENT_NAMES = ['stardust', 'moonlight', 'crystal ball', 'potion', 'elixir', 'herbs', 'mushroom', 'gem', 'flower', 'spellbook'];

const MultiplicationPotionWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [selectedCells, setSelectedCells] = useState<GridCell[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const message = 'Mix magical ingredients in groups of 7! 🧙‍♂️';
  const [lastSelectedValue, setLastSelectedValue] = useState(0);
  const [ingredientsCollected, setIngredientsCollected] = useState(0);
  const [floatingIngredients, setFloatingIngredients] = useState<FloatingIngredient[]>([]);
  const [ingredientCounter, setIngredientCounter] = useState(0);
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

  const addFloatingIngredient = (cellElement: HTMLElement) => {
    const rect = cellElement.getBoundingClientRect();
    const ingredient = {
      id: ingredientCounter,
      ingredient: INGREDIENTS[ingredientsCollected],
      startX: rect.left + rect.width / 2,
      startY: rect.top + rect.height / 2
    };
    setFloatingIngredients(prev => [...prev, ingredient]);
    setIngredientCounter(prev => prev + 1);

    const scoreAnim = {
      id: scoreCounter,
      points: 1,
      x: rect.left + rect.width / 2,
      y: rect.top
    };
    setScoreAnimations(prev => [...prev, scoreAnim]);
    setScoreCounter(prev => prev + 1);

    setTimeout(() => {
      setFloatingIngredients(prev => prev.filter(t => t.id !== ingredient.id));
      setScoreAnimations(prev => prev.filter(s => s.id !== scoreAnim.id));
    }, 1000);
  };

  const handleCellClick = (cell: GridCell, event: React.MouseEvent<HTMLButtonElement>, markCorrect: () => void, markAttempted: () => void) => {
    setAttempts(prev => prev + 1);
    markAttempted();
    
    if (selectedCells.length === 0) {
      if (cell.value === 7) {
        setSelectedCells([cell]);
        setLastSelectedValue(7);
        setIngredientsCollected(1);
        speak("1 times 7 equals 7, collected some stardust!");
        addFloatingIngredient(event.currentTarget);
        markCorrect();
      } else {
        speak("Start with 7 ingredients for the first potion!");
        if (attempts > 2) {
          setShowHint(true);
        }
      }
      return;
    }

    const nextExpectedValue = lastSelectedValue + 7;
    if (cell.value === nextExpectedValue && !selectedCells.includes(cell)) {
      const newSelectedCells = [...selectedCells, cell];
      setSelectedCells(newSelectedCells);
      setLastSelectedValue(cell.value);
      setIngredientsCollected(prev => prev + 1);
      setShowHint(false);
      addFloatingIngredient(event.currentTarget);
      markCorrect();

      const multiplier = cell.value / 7;
      speak(`${multiplier} times 7 equals ${cell.value}, added ${INGREDIENT_NAMES[ingredientsCollected]} to the potion!`);

      if (cell.value === 70) {
        handleLevelComplete();
      }
    } else {
      if (selectedCells.includes(cell)) {
        speak("We've already used these ingredients!");
      } else if (cell.value < nextExpectedValue) {
        speak("That's not enough ingredients for this potion!");
      } else if (cell.value > nextExpectedValue) {
        speak("Too many ingredients! Let's count by 7.");
      }
      
      if (attempts > 3) {
        setShowHint(true);
      }
    }
  };

  const handleLevelComplete = () => {
    setShowCelebration(true);
    speak("Magnificent! The magical potion is complete!");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
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

  const getIngredientForCell = (cell: GridCell) => {
    if (!selectedCells.includes(cell)) return null;
    const index = selectedCells.findIndex(selected => 
      selected.row === cell.row && selected.col === cell.col
    );
    return INGREDIENTS[index];
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
        <div className="min-h-screen bg-gradient-to-b from-purple-700 to-indigo-900">
          <WorksheetHeader />
          
          <div className="p-4 w-full max-w-6xl mx-auto">
            <div className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 mb-4">
              <ScoreDisplay 
                score={ingredientsCollected} 
                totalQuestions={10}
              />
            </div>

            <div className="text-center mt-2 text-xl bg-white/10 backdrop-blur-md rounded-lg shadow-md p-3">
              <div className="flex items-center justify-center gap-2">
                <span>{selectedCells.length === 0 ? '🧙‍♂️' : ''}</span>
                <span className="font-bold text-white">Magical Ingredients:</span>
                <div className="flex gap-1">
                  {Array(ingredientsCollected).fill(null).map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-2xl"
                    >
                      {INGREDIENTS[index]}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-indigo-400/20 backdrop-blur-md border-l-4 border-indigo-400 p-4 rounded-r-lg"
              >
                <p className="text-indigo-100">
                  <span className="font-bold">Wizard's Hint:</span> Look for the number {lastSelectedValue + 7}. 
                  It's the next multiple of 7 after {lastSelectedValue}!
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
                    const ingredient = getIngredientForCell(cell);
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
                        {ingredient ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-3xl"
                          >
                            {ingredient}
                          </motion.span>
                        ) : (
                          cell.value
                        )}
                        {cell.value === 7 && selectedCells.length === 0 && (
                          <span className="absolute -top-4 text-2xl animate-bounce">
                            🧙‍♂️
                          </span>
                        )}
                        {cell.value === 70 && !selectedCells.includes(cell) && (
                          <span className="absolute -bottom-4 text-2xl">
                            📖
                          </span>
                        )}
                      </motion.button>
                    );
                  })
                )}

                <AnimatePresence>
                  {floatingIngredients.map((ingredient) => (
                    <motion.div
                      key={ingredient.id}
                      className="text-4xl fixed pointer-events-none"
                      initial={{ 
                        x: ingredient.startX,
                        y: ingredient.startY,
                        scale: 1,
                        opacity: 1
                      }}
                      animate={{ 
                        x: [ingredient.startX, ingredient.startX - 50, ingredient.startX + 50],
                        y: [ingredient.startY, ingredient.startY - 100, ingredient.startY],
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
                      {INGREDIENTS[selectedCells.length - 1]}
                    </motion.div>
                  ))}

                  {scoreAnimations.map((scoreAnim) => (
                    <motion.div
                      key={`score-${scoreAnim.id}`}
                      className="text-2xl font-bold text-indigo-300 fixed pointer-events-none"
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
                    🎉 Potion Complete! Your magical brew is ready! 🧙‍♂️
                  </h2>
                  <div className="text-2xl mt-4">
                    🌟 🌙 🔮 ⚗️ 🧪 → 📖
                  </div>
                  <div className="text-3xl font-bold text-indigo-300 mt-4">
                    Score: {ingredientsCollected} out of 10
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

export default MultiplicationPotionWorksheet; 
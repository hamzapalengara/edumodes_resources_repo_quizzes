import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetTracker from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import confetti from 'canvas-confetti';

// Multiple levels with different jumbled orders
const LEVELS = [
  { numbers: [2, 1, 4, 3], label: "Level 1" },
  { numbers: [4, 3, 1, 2], label: "Level 2" },
  { numbers: [3, 4, 2, 1], label: "Level 3" }
];

const NumberOrderingWorksheet: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [placedNumbers, setPlacedNumbers] = useState<(number | null)[]>([null, null, null, null]);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [completedPositions, setCompletedPositions] = useState<boolean[]>([false, false, false, false]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const targetRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Speech synthesis
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Reset game
  const resetGame = useCallback(() => {
    setPlacedNumbers([null, null, null, null]);
    setSelectedNumber(null);
    setCompletedPositions([false, false, false, false]);
    setGameCompleted(false);
    setCurrentLevel(0);
    speak("Let's arrange the numbers in order!");
  }, [speak]);

  // Handle drag start
  const handleDragStart = useCallback((number: number) => {
    speak(number.toString());
    setSelectedNumber(number);
  }, [speak]);

  // Check if a point is close to a target box
  const isCloseToTarget = (dragX: number, dragY: number, targetElement: HTMLDivElement) => {
    const rect = targetElement.getBoundingClientRect();
    const targetCenterX = rect.left + rect.width / 2;
    const targetCenterY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(dragX - targetCenterX, 2) + 
      Math.pow(dragY - targetCenterY, 2)
    );
    
    return distance < rect.width; // Snap when within one box width
  };

  // Handle drag end with position
  const handleDragEnd = useCallback((
    number: number,
    markCorrect: () => void,
    markAttempted: () => void,
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { point: { x: number, y: number } }
  ) => {
    const { x, y } = info.point;
    
    // Check each target box
    targetRefs.current.forEach((ref, index) => {
      if (ref && !placedNumbers[index] && isCloseToTarget(x, y, ref)) {
        // Mark attempt only when actually placing a number
        markAttempted();
        
        // Place number in this box
        const newPlacedNumbers = [...placedNumbers];
        newPlacedNumbers[index] = number;
        setPlacedNumbers(newPlacedNumbers);

        // Check if correct
        const isCorrect = number === index + 1;
        const newCompletedPositions = [...completedPositions];
        
        // Only mark correct if this position wasn't already completed
        if (isCorrect && !completedPositions[index]) {
          speak("Correct!");
          markCorrect();
          newCompletedPositions[index] = true;
          setCompletedPositions(newCompletedPositions);

          // Check if level completed
          if (newCompletedPositions.every(pos => pos)) {
            if (currentLevel < LEVELS.length - 1) {
              setTimeout(() => {
                setCurrentLevel(prev => prev + 1);
                setPlacedNumbers([null, null, null, null]);
                setCompletedPositions([false, false, false, false]);
                speak("Great job! Let's try the next level!");
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 },
                  colors: ['#0EA5E9', '#14B8A6', '#0D9488']
                });
              }, 1500);
            } else {
              setGameCompleted(true);
              speak("Excellent! You've completed all levels!");
              confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#0EA5E9', '#14B8A6', '#0D9488', '#0369A1']
              });
            }
          }
        } else {
          if (!isCorrect) {
            speak("Try again!");
            setTimeout(() => {
              const clearedNumbers = [...newPlacedNumbers];
              clearedNumbers[index] = null;
              setPlacedNumbers(clearedNumbers);
            }, 1000);
          }
        }
      }
    });

    setSelectedNumber(null);
  }, [placedNumbers, completedPositions, currentLevel, speak]);

  return (
    <WorksheetTracker
      totalQuestions={12}
      pointsPerQuestion={10}
    >
      {({ score, markCorrect, markAttempted }) => (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-teal-100">
          <WorksheetHeader />

          <div className="bg-sky-100/80 p-4 shadow-md">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score}
                totalQuestions={120}
              />
            </div>
          </div>

          <TouchContainer>
            <main className="px-0 md:px-4 py-8">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-sky-600 text-center mb-6">
                    Put the Numbers in Order! 🔢
                  </h1>

                  {/* Level Indicator */}
                  <div className="text-center mb-4">
                    <span className="text-sm md:text-base text-sky-600 font-semibold bg-sky-100 rounded-full px-4 py-1 inline-block">
                      {LEVELS[currentLevel].label}
                    </span>
                  </div>

                  {/* Instructions */}
                  <div className="text-center mb-6">
                    <p className="text-sm md:text-base text-gray-600 bg-sky-50 rounded-full px-4 py-2 inline-block">
                      Drag numbers to put them in order from 1 to 4
                    </p>
                  </div>

                  {/* Source Numbers */}
                  <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    {LEVELS[currentLevel].numbers.map((num) => (
                      <motion.div
                        key={num}
                        drag={!gameCompleted && !placedNumbers.includes(num)}
                        dragSnapToOrigin
                        onDragStart={() => handleDragStart(num)}
                        onDragEnd={(e, info) => handleDragEnd(num, markCorrect, markAttempted, e, info)}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-md flex items-center justify-center
                          bg-white border-2 border-sky-200
                          ${!gameCompleted && !placedNumbers.includes(num) ? 'cursor-grab active:cursor-grabbing' : ''}
                          transition-colors duration-200`}
                        animate={{ 
                          opacity: placedNumbers.includes(num) ? 0.5 : 1,
                          scale: selectedNumber === num ? 1.1 : 1
                        }}
                        whileDrag={{ 
                          scale: 1.1,
                          zIndex: 50,
                          boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
                        }}
                      >
                        <span className="font-bold text-3xl md:text-4xl text-sky-600 pointer-events-none select-none">
                          {num}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Target Boxes */}
                  <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
                    {placedNumbers.map((num, index) => (
                      <motion.div
                        key={index}
                        ref={el => targetRefs.current[index] = el}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-md flex items-center justify-center
                          ${completedPositions[index] ? 'bg-teal-100 border-teal-400' : 'bg-sky-50 border-sky-300'}
                          ${num === null ? 'border-2 border-dashed' : ''}
                          transition-all duration-300 ease-in-out`}
                        animate={{
                          scale: completedPositions[index] ? [1, 1.1, 1] : 1
                        }}
                      >
                        {num !== null && (
                          <span className="font-bold text-3xl md:text-4xl text-sky-600 select-none">
                            {num}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Reset Button */}
                  {gameCompleted && (
                    <div className="mt-6 text-center">
                      <button
                        onClick={resetGame}
                        className="px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 active:bg-sky-700 transition-colors"
                      >
                        Play Again 🔄
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </TouchContainer>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default NumberOrderingWorksheet; 
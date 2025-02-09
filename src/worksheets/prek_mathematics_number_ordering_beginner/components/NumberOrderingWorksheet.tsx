import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetTracker from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import confetti from 'canvas-confetti';

// Multiple levels with different jumbled orders
const LEVELS = [
  { numbers: [2, 1, 3], label: "Level 1" },
  { numbers: [3, 2, 1], label: "Level 2" }
];

const NumberOrderingWorksheet: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [placedNumbers, setPlacedNumbers] = useState<(number | null)[]>([null, null, null]);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [completedPositions, setCompletedPositions] = useState<boolean[]>([false, false, false]);
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
    setPlacedNumbers([null, null, null]);
    setSelectedNumber(null);
    setCompletedPositions([false, false, false]);
    setGameCompleted(false);
    setCurrentLevel(0);
    speak("Let's arrange the numbers in order!");
  }, [speak]);

  // Handle drag start
  const handleDragStart = useCallback((number: number, markAttempted: () => void) => {
    markAttempted();
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
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { point: { x: number, y: number } }
  ) => {
    const { x, y } = info.point;
    
    // Check each target box
    targetRefs.current.forEach((ref, index) => {
      if (ref && !placedNumbers[index] && isCloseToTarget(x, y, ref)) {
        // Place number in this box
        const newPlacedNumbers = [...placedNumbers];
        newPlacedNumbers[index] = number;
        setPlacedNumbers(newPlacedNumbers);

        // Check if correct
        const isCorrect = number === index + 1;
        const newCompletedPositions = [...completedPositions];
        newCompletedPositions[index] = isCorrect;
        setCompletedPositions(newCompletedPositions);

        if (isCorrect) {
          speak("Correct!");
          markCorrect();
          
          // Check if level completed
          if (newCompletedPositions.every(pos => pos)) {
            if (currentLevel < LEVELS.length - 1) {
              setTimeout(() => {
                setCurrentLevel(prev => prev + 1);
                setPlacedNumbers([null, null, null]);
                setCompletedPositions([false, false, false]);
                speak("Great job! Let's try the next level!");
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 }
                });
              }, 1500);
            } else {
              setGameCompleted(true);
              speak("Excellent! You've completed all levels!");
              confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.6 }
              });
            }
          }
        } else {
          speak("Try again!");
          setTimeout(() => {
            const clearedNumbers = [...newPlacedNumbers];
            clearedNumbers[index] = null;
            setPlacedNumbers(clearedNumbers);
          }, 1000);
        }
      }
    });

    setSelectedNumber(null);
  }, [placedNumbers, completedPositions, currentLevel, speak]);

  return (
    <WorksheetTracker
      totalQuestions={6}
      pointsPerQuestion={10}
    >
      {({ score, markCorrect, markAttempted }) => (
        <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
          <WorksheetHeader />

          <div className="bg-purple-100/80 p-4 shadow-md">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score}
                totalQuestions={60}
              />
            </div>
          </div>

          <TouchContainer>
            <main className="px-0 md:px-4 py-8">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-purple-600 text-center mb-6">
                    Put the Numbers in Order! 🔢
                  </h1>

                  {/* Level Indicator */}
                  <div className="text-center mb-4">
                    <span className="text-sm md:text-base text-purple-600 font-semibold bg-purple-100 rounded-full px-4 py-1 inline-block">
                      {LEVELS[currentLevel].label}
                    </span>
                  </div>

                  {/* Instructions */}
                  <div className="text-center mb-6">
                    <p className="text-sm md:text-base text-gray-600 bg-purple-50 rounded-full px-4 py-2 inline-block">
                      Drag or click numbers to put them in order
                    </p>
                  </div>

                  {/* Source Numbers */}
                  <div className="flex justify-center gap-4 mb-8">
                    {LEVELS[currentLevel].numbers.map((num) => (
                      <motion.div
                        key={num}
                        drag={!gameCompleted && !placedNumbers.includes(num)}
                        dragSnapToOrigin
                        onDragStart={() => handleDragStart(num, markAttempted)}
                        onDragEnd={(e, info) => handleDragEnd(num, markCorrect, e, info)}
                        className={`w-20 h-20 rounded-xl shadow-md flex items-center justify-center
                          bg-white border-2 border-purple-200
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
                        <span className="font-bold text-4xl md:text-5xl text-purple-600 pointer-events-none select-none">
                          {num}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Target Boxes */}
                  <div className="flex justify-center gap-4">
                    {placedNumbers.map((num, index) => (
                      <motion.div
                        key={index}
                        ref={el => targetRefs.current[index] = el}
                        className={`w-20 h-20 rounded-xl shadow-md flex items-center justify-center
                          ${completedPositions[index] ? 'bg-green-100 border-green-400' : 'bg-purple-50 border-purple-300'}
                          ${num === null ? 'border-2 border-dashed' : ''}
                          transition-all duration-300 ease-in-out`}
                        animate={{
                          scale: completedPositions[index] ? [1, 1.1, 1] : 1
                        }}
                      >
                        {num !== null && (
                          <span className="font-bold text-4xl md:text-5xl text-purple-600 select-none">
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
                        className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 active:bg-purple-700 transition-colors"
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
import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetTracker from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import confetti from 'canvas-confetti';

// Multiple levels with different ranges
const LEVELS = [
  { numbers: [16, 15, 17], label: "Level 1 (15-17)" },
  { numbers: [17, 15, 18, 16], label: "Level 2 (15-18)" },
  { numbers: [17, 20, 15, 19, 16, 18], label: "Level 3 (15-20)" }
];

const NumberOrderingWorksheet: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [placedNumbers, setPlacedNumbers] = useState<(number | null)[]>(
    Array(LEVELS[currentLevel].numbers.length).fill(null)
  );
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [completedPositions, setCompletedPositions] = useState<boolean[]>(
    Array(LEVELS[currentLevel].numbers.length).fill(false)
  );
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
    setPlacedNumbers(Array(LEVELS[0].numbers.length).fill(null));
    setSelectedNumber(null);
    setCompletedPositions(Array(LEVELS[0].numbers.length).fill(false));
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
    
    return distance < rect.width;
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
    const levelNumbers = LEVELS[currentLevel].numbers;
    const correctOrder = Array.from({ length: levelNumbers.length }, (_, i) => i + 15);
    
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
        const isCorrect = number === correctOrder[index];
        const newCompletedPositions = [...completedPositions];
        newCompletedPositions[index] = isCorrect;
        setCompletedPositions(newCompletedPositions);

        if (isCorrect) {
          speak("Correct!");
          markCorrect();
          
          // Check if level completed
          if (newCompletedPositions.every(pos => pos)) {
            if (currentLevel < LEVELS.length - 1) {
              const nextLevel = currentLevel + 1;
              setTimeout(() => {
                setCurrentLevel(nextLevel);
                setPlacedNumbers(Array(LEVELS[nextLevel].numbers.length).fill(null));
                setCompletedPositions(Array(LEVELS[nextLevel].numbers.length).fill(false));
                speak("Great job! Let's try the next level!");
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 },
                  colors: ['#2DD4BF', '#14B8A6', '#0D9488']
                });
              }, 1500);
            } else {
              setGameCompleted(true);
              speak("Excellent! You've completed all levels!");
              confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#2DD4BF', '#14B8A6', '#0D9488']
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
      totalQuestions={13}
      pointsPerQuestion={10}
    >
      {({ score, markCorrect, markAttempted }) => (
        <div className="min-h-screen bg-gradient-to-b from-teal-100 to-cyan-100">
          <WorksheetHeader />

          <div className="bg-teal-100/80 p-4 shadow-md">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score}
                totalQuestions={130}
              />
            </div>
          </div>

          <TouchContainer>
            <main className="px-0 md:px-4 py-8">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-teal-600 text-center mb-6">
                    Put the Numbers in Order! 🔢
                  </h1>

                  {/* Level Indicator */}
                  <div className="text-center mb-4">
                    <span className="text-sm md:text-base text-teal-600 font-semibold bg-teal-100 rounded-full px-4 py-1 inline-block">
                      {LEVELS[currentLevel].label}
                    </span>
                  </div>

                  {/* Instructions */}
                  <div className="text-center mb-6">
                    <p className="text-sm md:text-base text-gray-600 bg-teal-50 rounded-full px-4 py-2 inline-block">
                      Drag numbers to put them in order
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
                        className={`w-16 h-16 rounded-xl shadow-md flex items-center justify-center
                          bg-white border-2 border-teal-200
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
                        <span className="font-bold text-3xl md:text-4xl text-teal-600 pointer-events-none select-none">
                          {num}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Target Boxes */}
                  <div className="flex justify-center gap-4 flex-wrap">
                    {Array.from({ length: LEVELS[currentLevel].numbers.length }, (_, i) => i + 15).map((_, index) => (
                      <motion.div
                        key={index}
                        ref={el => targetRefs.current[index] = el}
                        className={`w-16 h-16 rounded-xl shadow-md flex items-center justify-center
                          ${completedPositions[index] ? 'bg-green-100 border-green-400' : 'bg-teal-50 border-teal-300'}
                          ${placedNumbers[index] === null ? 'border-2 border-dashed' : ''}
                          transition-all duration-300 ease-in-out`}
                        animate={{
                          scale: completedPositions[index] ? [1, 1.1, 1] : 1
                        }}
                      >
                        {placedNumbers[index] !== null && (
                          <span className="font-bold text-3xl md:text-4xl text-teal-600 select-none">
                            {placedNumbers[index]}
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
                        className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 active:bg-teal-700 transition-colors"
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
import React, { useState, useEffect, useCallback } from 'react';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import buildingBg from '../building.jpg';

const TOTAL_QUESTIONS = 15; // 5 per level * 3 levels
const POINTS_PER_QUESTION = 10;
const LEVEL_NUMBERS = {
  1: [1, 2, 3, 4, 5, 7, 9],     // Level 1: More numbers including 5 odd numbers
  2: [3, 4, 5, 6, 7, 8, 9],     // Level 2: More numbers including 5 odd numbers
  3: [1, 2, 3, 5, 7, 8, 9],     // Level 3: More numbers including 5 odd numbers
};

// Add decorative objects
const DECORATIVE_OBJECTS = ['🎈', '⭐', '🌟', '🎨', '🌈', '🦋', '🌸'];

interface FallingObject {
  id: number;
  x: number;
  y: number;
  speed: number;
  type: 'number' | 'decorative';
  value: number | string;
  caught?: boolean;
}

interface GameState {
  isGameActive: boolean;
  gameStarted: boolean;
  score: number;
  currentLevel: number;
  fallingObjects: FallingObject[];
  message: string;
  remainingOddNumbers: number;
  isLevelComplete: boolean;
  isGameComplete: boolean;
}

const OddNumbersWorksheet: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    isGameActive: false,
    gameStarted: false,
    score: 0,
    currentLevel: 1,
    fallingObjects: [],
    message: '',
    remainingOddNumbers: 0,
    isLevelComplete: false,
    isGameComplete: false,
  });

  // Speech synthesis setup
  const speak = useCallback((text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  }, []);

  const getSpeedForLevel = useCallback((level: number) => {
    switch(level) {
      case 1: return { min: 0.15, max: 0.25 }; // Slow
      case 2: return { min: 0.25, max: 0.35 }; // Medium
      case 3: return { min: 0.35, max: 0.45 }; // Fast
      default: return { min: 0.15, max: 0.25 };
    }
  }, []);

  const generateFallingObjects = useCallback(() => {
    const currentNumbers = LEVEL_NUMBERS[gameState.currentLevel as keyof typeof LEVEL_NUMBERS];
    const oddNumbers = currentNumbers.filter(n => n % 2 !== 0);
    const evenNumbers = currentNumbers.filter(n => n % 2 === 0);
    
    // Always include at least one odd number and one even number in each batch
    const numbers = [];
    const batchSize = 5; // How many numbers to show at once
    
    // Add one odd number
    numbers.push(oddNumbers[Math.floor(Math.random() * oddNumbers.length)]);
    
    // Add one even number
    numbers.push(evenNumbers[Math.floor(Math.random() * evenNumbers.length)]);
    
    // Fill the rest with a mix
    while (numbers.length < batchSize) {
      // Randomly choose between odd and even
      const pool = Math.random() < 0.5 ? oddNumbers : evenNumbers;
      const number = pool[Math.floor(Math.random() * pool.length)];
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    
    // Shuffle the final array
    numbers.sort(() => Math.random() - 0.5);
    
    const speed = getSpeedForLevel(gameState.currentLevel);
    
    // Generate numbers
    const numberObjects = numbers.map((value, index) => ({
      id: Date.now() + index,
      x: Math.random() * 60 + 20,
      y: -20 - index * 40,
      speed: Math.random() * (speed.max - speed.min) + speed.min,
      type: 'number' as const,
      value,
    }));

    // Add decorative objects
    const decorativeObjects = Array.from({ length: 3 }, (_, index) => ({
      id: Date.now() + numbers.length + index,
      x: Math.random() * 80 + 10,
      y: -20 - Math.random() * 100,
      speed: Math.random() * 0.15 + 0.1,
      type: 'decorative' as const,
      value: DECORATIVE_OBJECTS[Math.floor(Math.random() * DECORATIVE_OBJECTS.length)],
    }));

    return [...numberObjects, ...decorativeObjects];
  }, [gameState.currentLevel, getSpeedForLevel]);

  const startNextLevel = useCallback(() => {
    if (gameState.currentLevel > 3) {
      setGameState(prev => ({
        ...prev,
        isGameActive: false,
        isGameComplete: true,
        message: '🎉 Congratulations! You\'ve completed all levels! 🎉',
      }));
      speak('Congratulations! You\'ve completed all levels!');
      return;
    }

    // Always 5 odd numbers to find per level
    setGameState(prev => ({
      ...prev,
      isGameActive: true,
      isLevelComplete: false,
      fallingObjects: generateFallingObjects(),
      message: `Level ${prev.currentLevel}: Find 5 odd numbers!`,
      remainingOddNumbers: 5,
    }));
    
    // Update level-specific instructions
    const speedText = gameState.currentLevel === 1 ? 'normal' : 
                     gameState.currentLevel === 2 ? 'faster' : 'fastest';
    speak(`Level ${gameState.currentLevel}! Find 5 odd numbers! Numbers will fall at ${speedText} speed!`);
  }, [gameState.currentLevel, generateFallingObjects, speak]);

  const startGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      gameStarted: true,
      currentLevel: 1,
      isGameComplete: false,
    }));
    startNextLevel();
  }, [startNextLevel]);

  // Animation frame for falling numbers
  useEffect(() => {
    if (!gameState.isGameActive) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (timestamp - lastTimestamp < 16) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastTimestamp = timestamp;

      setGameState(prev => {
        if (prev.isLevelComplete || prev.isGameComplete) return prev;

        const updatedObjects = prev.fallingObjects.map(obj => ({
          ...obj,
          y: obj.y + obj.speed,
        }));

        // Only consider numbers for game logic
        const remainingNumbers = updatedObjects
          .filter(obj => obj.type === 'number' && obj.y < 100 && !obj.caught);
        
        if (remainingNumbers.length === 0) {
          // Check if we've caught all odd numbers for this level
          if (prev.remainingOddNumbers === 0) {
            const nextLevel = prev.currentLevel + 1;
            if (nextLevel > 3) {
              speak('Amazing! You\'ve completed all levels! You are an odd numbers master!');
              return {
                ...prev,
                isGameActive: false,
                isGameComplete: true,
                message: '🎉 Congratulations! You\'ve completed all levels! 🎉',
                fallingObjects: [],
              };
            } else {
              // Celebrate level completion and prepare for next level
              speak(`Excellent! You've completed level ${prev.currentLevel}! Get ready for level ${nextLevel}!`);
              return {
                ...prev,
                currentLevel: nextLevel,
                isLevelComplete: true,
                message: `🎉 Level ${prev.currentLevel} Complete! Get ready for Level ${nextLevel}!`,
                fallingObjects: [],
                remainingOddNumbers: 5, // Reset for next level
                isGameActive: false, // Pause game during level transition
              };
            }
          } else {
            // Still have odd numbers to catch in this level
            return {
              ...prev,
              fallingObjects: generateFallingObjects(),
              message: `Level ${prev.currentLevel}: Find ${prev.remainingOddNumbers} more odd numbers!`,
            };
          }
        }

        // Remove objects that are off screen
        const visibleObjects = updatedObjects.filter(obj => 
          obj.type === 'number' ? (obj.y < 100 && !obj.caught) : obj.y < 100
        );

        // Add new decorative objects occasionally
        if (Math.random() < 0.02) {
          const newDecorative = {
            id: Date.now(),
            x: Math.random() * 80 + 10,
            y: -20,
            speed: Math.random() * 0.15 + 0.1,
            type: 'decorative' as const,
            value: DECORATIVE_OBJECTS[Math.floor(Math.random() * DECORATIVE_OBJECTS.length)],
          };
          visibleObjects.push(newDecorative);
        }

        return {
          ...prev,
          fallingObjects: visibleObjects,
        };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [gameState.isGameActive, generateFallingObjects]);

  // Handle level completion
  useEffect(() => {
    if (gameState.isLevelComplete && !gameState.isGameComplete) {
      const timer = setTimeout(() => {
        startNextLevel();
      }, 2000); // Give time for celebration message to be heard
      return () => clearTimeout(timer);
    }
  }, [gameState.isLevelComplete, gameState.isGameComplete, startNextLevel]);

  const handleNumberClick = useCallback((
    number: FallingObject,
    { markCorrect, markIncorrect, markAttempted }: {
      markCorrect: () => void;
      markIncorrect: () => void;
      markAttempted: () => void;
    }
  ) => {
    if (!gameState.isGameActive || typeof number.value !== 'number') return;
    
    markAttempted();

    if (number.value % 2 !== 0) {
      // Odd number - correct!
      markCorrect();
      speak('Correct!');
      
      // First update remaining odd numbers
      const newRemainingOddNumbers = gameState.remainingOddNumbers - 1;
      
      setGameState(prev => {
        const updatedState = {
          ...prev,
          fallingObjects: prev.fallingObjects.map(n =>
            n.id === number.id ? { ...n, caught: true } : n
          ),
          remainingOddNumbers: newRemainingOddNumbers,
          message: 'Correct! That\'s an odd number!',
        };

        // Check if level is complete
        if (newRemainingOddNumbers === 0) {
          const nextLevel = prev.currentLevel + 1;
          if (nextLevel > 3) {
            return {
              ...updatedState,
              isGameActive: false,
              isGameComplete: true,
              message: '🎉 Congratulations! You\'ve completed all levels! 🎉',
            };
          } else {
            return {
              ...updatedState,
              currentLevel: nextLevel,
              isLevelComplete: true,
              message: `🎉 Level ${prev.currentLevel} Complete! Get ready for Level ${nextLevel}!`,
              fallingObjects: [],
              isGameActive: false,
            };
          }
        }

        return updatedState;
      });

      // Handle level completion announcements
      if (newRemainingOddNumbers === 0) {
        const nextLevel = gameState.currentLevel + 1;
        if (nextLevel > 3) {
          speak('Amazing! You\'ve completed all levels! You are an odd numbers master!');
        } else {
          speak(`Excellent! You've completed level ${gameState.currentLevel}! Get ready for level ${nextLevel}!`);
        }
      }
    } else {
      // Even number - wrong!
      markIncorrect();
      speak('Wrong! That\'s not odd!');
      setGameState(prev => ({
        ...prev,
        message: 'That\'s not an odd number! Try again!',
      }));
    }
  }, [gameState.isGameActive, gameState.currentLevel, gameState.remainingOddNumbers, speak]);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <WorksheetTracker
      totalQuestions={TOTAL_QUESTIONS}
      pointsPerQuestion={POINTS_PER_QUESTION}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({
        markCorrect,
        markIncorrect,
        markAttempted,
        score,
      }) => (
        <div className="min-h-screen bg-blue-50">
          {/* Score Display */}
          <div className="w-full bg-white shadow-md mb-4">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay
                score={score}
                totalQuestions={TOTAL_QUESTIONS * POINTS_PER_QUESTION}
              />
            </div>
          </div>

          {/* Game Container */}
          <div className="px-0">
            <div className="max-w-4xl mx-auto">
              {/* Game Area */}
              {!gameState.gameStarted ? (
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-full max-w-xs mx-auto">
                    <button
                      onClick={startGame}
                      className="w-full relative bg-gradient-to-b from-purple-500 to-purple-600 text-white rounded-xl px-8 py-6 text-xl md:text-2xl font-bold hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg border-4 border-purple-700 group"
                    >
                      {/* Building Icon */}
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg border-2 border-gray-400 flex items-center justify-center transform group-hover:translate-y-1 transition-transform">
                        <span className="text-2xl">🏢</span>
                      </div>
                      
                      {/* Button Text */}
                      <span className="ml-12">Start Game!</span>
                      
                      {/* Falling Number Effect */}
                      <div className="absolute -top-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-2xl animate-bounce">1</div>
                        <div className="text-2xl animate-bounce delay-100">3</div>
                      </div>
                    </button>
                    
                    {/* Ground under button */}
                    <div className="absolute -bottom-4 left-0 w-full h-2 bg-gray-800 rounded"></div>
                  </div>
                  
                  <p className="text-gray-600 text-center animate-pulse">
                    Click to Start Finding Odd Numbers!
                  </p>
                </div>
              ) : (
                <div className="relative w-full overflow-hidden min-h-[600px] md:min-h-[800px] bg-gradient-to-b from-blue-200 to-blue-100">
                  {/* Building Background */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
                    style={{ 
                      backgroundImage: `url(${buildingBg})`,
                      filter: 'brightness(0.9)',
                      backgroundPosition: 'center top'
                    }}
                  />
                  
                  {/* Game Info Overlay */}
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white/90 to-white/40 backdrop-blur-sm p-4 rounded-b-lg z-20">
                    <h2 className="text-xl md:text-2xl font-bold text-purple-700 text-center mb-1">
                      Level {gameState.currentLevel}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 text-center font-semibold">
                      {gameState.message}
                    </p>
                    {gameState.isGameActive && (
                      <p className="text-sm md:text-base text-purple-600 text-center font-bold mt-1">
                        Odd numbers remaining: {gameState.remainingOddNumbers}
                      </p>
                    )}
                  </div>

                  {/* Level Complete or Game Complete Overlay */}
                  {(gameState.isLevelComplete || gameState.isGameComplete) && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-40">
                      <div className="bg-white rounded-xl p-6 max-w-sm mx-4 text-center transform scale-up">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">
                          {gameState.isGameComplete ? '🎉 Game Complete! 🎉' : `Level ${gameState.currentLevel - 1} Complete!`}
                        </h3>
                        <p className="text-gray-700">
                          {gameState.isGameComplete 
                            ? 'Congratulations! You\'ve mastered odd numbers!' 
                            : `Get ready for Level ${gameState.currentLevel}!`}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Falling Objects - Numbers and Decorative */}
                  {gameState.fallingObjects.map((obj) => 
                    obj.type === 'decorative' ? (
                      <div
                        key={obj.id}
                        className="absolute transform -translate-x-1/2 text-3xl pointer-events-none"
                        style={{
                          left: `${obj.x}%`,
                          top: `${obj.y}%`,
                          transform: `translateX(-50%) rotate(${Math.sin(obj.y / 10) * 10}deg)`,
                        }}
                      >
                        {obj.value}
                      </div>
                    ) : !obj.caught && (
                      <button
                        key={obj.id}
                        onClick={() => handleNumberClick(obj, { markCorrect, markIncorrect, markAttempted })}
                        disabled={!gameState.isGameActive}
                        className={`
                          absolute transform -translate-x-1/2 
                          w-[70px] h-[70px] md:w-20 md:h-20 
                          flex items-center justify-center 
                          text-3xl md:text-4xl font-bold 
                          shadow-lg
                          transition-all duration-150
                          cursor-pointer z-30
                          active:scale-90
                          touch-manipulation
                          bg-gradient-to-b from-blue-100 to-blue-200 text-blue-700 active:from-blue-200 active:to-blue-300
                          rounded-[100%_100%_50%_50%]
                          before:content-[""]
                          before:absolute before:inset-0
                          before:bg-white/50
                          before:rounded-full
                          before:blur-sm
                        `}
                        style={{
                          left: `${obj.x}%`,
                          top: `${obj.y}%`,
                          transform: `translateX(-50%) rotate(${Math.sin(obj.y / 10) * 3}deg)`,
                          WebkitTapHighlightColor: 'transparent',
                          touchAction: 'manipulation',
                          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                        }}
                      >
                        <div className="relative flex items-center justify-center w-full h-full">
                          <span className="relative z-10 transform scale-110 drop-shadow-md">
                            {obj.value}
                          </span>
                          {/* Cloud effect layers */}
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full opacity-60"></div>
                          <div className="absolute -top-1 left-3 w-5 h-5 bg-white rounded-full opacity-70"></div>
                          <div className="absolute -top-2 right-0 w-4 h-4 bg-white rounded-full opacity-60"></div>
                        </div>
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default OddNumbersWorksheet; 
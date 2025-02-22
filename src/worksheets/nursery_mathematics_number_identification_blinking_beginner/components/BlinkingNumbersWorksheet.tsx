import React, { useState, useEffect, useCallback } from 'react';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import trainStationBg from '../train-station.jpg';

const TOTAL_QUESTIONS = 10;
const POINTS_PER_QUESTION = 10;
const NUMBER_WORDS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const QUESTIONS_PER_LEVEL = 5;
const TRAIN_SIZE = 8; // How many numbers to show in the train

interface GameState {
  currentLevel: number;
  currentQuestion: number;
  targetNumber: number | null;
  trainNumbers: number[];
  isGameActive: boolean;
  gameStarted: boolean;
  message: string;
  correctAnswers: number;
  trainKey: number;
  showTrain: boolean;
}

const BlinkingNumbersWorksheet: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentLevel: 1,
    currentQuestion: 1,
    targetNumber: null,
    trainNumbers: [],
    isGameActive: false,
    gameStarted: false,
    message: '',
    correctAnswers: 0,
    trainKey: 0,
    showTrain: false,
  });

  // Speech synthesis setup
  const speak = useCallback((text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  }, []);

  const getNumbersForLevel = useCallback(() => {
    // For level 1: numbers 1-5
    // For level 2: numbers 6-10
    const start = gameState.currentLevel === 1 ? 1 : 6;
    const end = gameState.currentLevel === 1 ? 5 : 10;
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [gameState.currentLevel]);

  // Train numbers are now generated directly in startNewQuestion
  
  const startNewQuestion = useCallback(() => {
    const numbers = getNumbersForLevel();
    const newTarget = numbers[Math.floor(Math.random() * numbers.length)];
    
    // First, hide the train and set up the new question
    setGameState(prev => ({
      ...prev,
      targetNumber: newTarget,
      isGameActive: true,
      message: 'Listen carefully!',
      trainKey: prev.trainKey + 1,
      showTrain: false,
    }));

    // Announce the target number
    speak(`Find number ${NUMBER_WORDS[newTarget - 1]}`);

    // Generate the number train
    const trainNumbers = Array.from({ length: TRAIN_SIZE }, () => {
      return numbers[Math.floor(Math.random() * numbers.length)];
    });
    
    // Ensure target appears in the train
    const randomPosition = Math.floor(Math.random() * TRAIN_SIZE);
    trainNumbers[randomPosition] = newTarget;

    // Show the train after the voice announcement
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        trainNumbers,
        message: 'Watch for the number!',
        showTrain: true,
      }));
    }, 1000); // Wait 1 second after voice before showing train

  }, [getNumbersForLevel, speak]);

  // Add celebration effect
  const triggerCelebration = useCallback(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Since we're just creating a confetti effect in CSS, we'll create multiple elements
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '1000';

      for (let i = 0; i < particleCount; i++) {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.width = '10px';
        element.style.height = '10px';
        element.style.backgroundColor = `hsl(${randomInRange(0, 360)}deg, 100%, 50%)`;
        element.style.borderRadius = '50%';
        element.style.left = `${randomInRange(0, 100)}%`;
        element.style.top = '-10px';
        element.style.animation = `fall ${randomInRange(1, 3)}s linear`;
        container.appendChild(element);
      }

      document.body.appendChild(container);
      setTimeout(() => document.body.removeChild(container), 3000);
    }, 250);
  }, []);

  const moveToNextQuestion = useCallback(() => {
    const isEndOfLevel = gameState.currentQuestion === QUESTIONS_PER_LEVEL;
    
    if (isEndOfLevel) {
      if (gameState.currentLevel === 1) {
        setGameState(prev => {
          if (prev.correctAnswers >= QUESTIONS_PER_LEVEL) {
            // Don't speak here, will speak after state update
            return {
              ...prev,
              currentLevel: 2,
              currentQuestion: 1,
              correctAnswers: 0,
              message: 'Perfect! Moving to Level 2 (Numbers 6-10)!',
            };
          } else {
            speak(`You got ${prev.correctAnswers} right. Let's try level one again!`);
            return {
              ...prev,
              currentQuestion: 1,
              correctAnswers: 0,
              message: `You got ${prev.correctAnswers} out of 5. Let's try again!`,
            };
          }
        });
        // Speak after state update for level 2 transition
        if (gameState.correctAnswers >= QUESTIONS_PER_LEVEL) {
          speak('Perfect! Moving to level two!');
        }
      } else {
        // End of level 2 - Trigger celebration
        setGameState(prev => ({
          ...prev,
          isGameActive: false,
          message: '🎉 Congratulations! You completed all levels! 🎉',
        }));
        speak('Congratulations! You completed all levels!');
        triggerCelebration();
        return;
      }
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        message: 'Get ready for the next number!',
      }));
    }

    setTimeout(startNewQuestion, 2000);
  }, [gameState.currentLevel, gameState.currentQuestion, gameState.correctAnswers, speak, startNewQuestion, triggerCelebration]);

  const handleNumberClick = useCallback((clickedNumber: number, { markCorrect, markIncorrect, markAttempted }: {
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }) => {
    if (!gameState.isGameActive || !gameState.targetNumber) return;

    markAttempted();

    if (clickedNumber === gameState.targetNumber) {
      // First update the state with new correct answer count
      const newCorrectCount = gameState.correctAnswers + 1;
      
      // Update all state at once to ensure consistency
      setGameState(prev => ({
        ...prev,
        correctAnswers: newCorrectCount,
        message: 'Correct! 🎉',
        isGameActive: false,
      }));

      // Only mark as correct, don't add points (points are added automatically by markCorrect)
      markCorrect();
      speak('Correct!');

      // Log for debugging with the actual new count
      console.log('Correct answer:', {
        currentQuestion: gameState.currentQuestion,
        newCorrectCount: newCorrectCount,
        totalCorrectSoFar: newCorrectCount
      });
    } else {
      markIncorrect();
      speak('Wrong');
      setGameState(prev => ({ 
        ...prev, 
        message: 'Wrong answer!',
        isGameActive: false,
      }));
    }

    setTimeout(moveToNextQuestion, 1500);
  }, [gameState, speak, moveToNextQuestion]);

  const startGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      gameStarted: true,
      isGameActive: true,
      message: 'Get ready!',
      currentQuestion: 1,
      correctAnswers: 0,
    }));
    speak('Let\'s begin!');
    setTimeout(startNewQuestion, 1000);
  }, [speak, startNewQuestion]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Add falling confetti animation style
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        0% {
          transform: translateY(-10px) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
        markAttempted,
        markIncorrect,
        score,
      }: {
        markCorrect: () => void;
        markAttempted: () => void;
        markIncorrect: () => void;
        score: number;
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
          <div className="p-2 md:p-4">
            <div className="max-w-4xl mx-auto">
              {/* Game Status */}
              <div className="text-center mb-4 md:mb-8">
                <h2 className="text-lg md:text-2xl font-bold text-blue-600">
                  Level {gameState.currentLevel}: Numbers {gameState.currentLevel === 1 ? '1-5' : '6-10'}
                </h2>
                <p className="text-base md:text-lg text-gray-600 mt-2">{gameState.message}</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  Question {gameState.currentQuestion} of {QUESTIONS_PER_LEVEL} 
                  {gameState.currentLevel === 1 && ` (${gameState.correctAnswers} correct)`}
                </p>
                {gameState.targetNumber && (
                  <button
                    onClick={() => {
                      if (gameState.targetNumber !== null) {
                        speak(`Find number ${NUMBER_WORDS[gameState.targetNumber - 1]}`);
                      }
                    }}
                    className="mt-2 md:mt-4 px-3 md:px-4 py-1 md:py-2 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200"
                  >
                    🔊 Hear Again
                  </button>
                )}
              </div>

              {/* Start Button or Game Area */}
              {!gameState.gameStarted ? (
                <button
                  onClick={startGame}
                  className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-green-500 text-white rounded-lg text-base md:text-lg font-semibold hover:bg-green-600 transition-colors mx-auto block"
                >
                  Start Game
                </button>
              ) : (
                <div className="relative w-full overflow-hidden min-h-[300px] md:min-h-[400px] rounded-xl">
                  {/* Train Station Background */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url(${trainStationBg})`,
                      filter: 'brightness(0.9)',
                      backgroundSize: '100% 100%'
                    }}
                  />
                  
                  {/* Semi-transparent overlay to ensure number visibility */}
                  <div className="absolute inset-0 bg-white/10"></div>
                  
                  {/* Train Track */}
                  <div className="absolute bottom-8 left-0 w-full h-4 bg-gray-400/80"></div>
                  
                  {/* Train Track Details */}
                  <div className="absolute bottom-8 left-0 w-full">
                    <div className="flex justify-between w-full px-4">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="w-4 h-1 bg-gray-600/90"></div>
                      ))}
                    </div>
                  </div>

                  {/* Number Train */}
                  {gameState.showTrain && (
                    <div 
                      key={gameState.trainKey}
                      className="absolute bottom-12 left-0 flex gap-1 md:gap-2 animate-train"
                    >
                      {gameState.trainNumbers.map((number, index) => (
                        <button
                          key={index}
                          onClick={() => handleNumberClick(number, { markCorrect, markIncorrect, markAttempted })}
                          disabled={!gameState.isGameActive}
                          className={`
                            relative w-14 h-14 md:w-20 md:h-20 text-2xl md:text-4xl font-bold
                            flex items-center justify-center
                            transition-transform
                            ${index === 0 ? 'rounded-l-xl' : index === TRAIN_SIZE - 1 ? 'rounded-r-xl' : ''}
                            ${gameState.isGameActive ? 'cursor-pointer hover:scale-110' : 'cursor-not-allowed opacity-80'}
                            bg-gradient-to-b from-yellow-300 to-yellow-400
                            border-2 md:border-4 border-yellow-500
                            shadow-lg
                            backdrop-blur-sm
                          `}
                        >
                          {number}
                          {/* Train car wheels */}
                          <div className="absolute -bottom-4 md:-bottom-6 left-2 md:left-3 w-3 h-3 md:w-4 md:h-4 bg-gray-800 rounded-full"></div>
                          <div className="absolute -bottom-4 md:-bottom-6 right-2 md:right-3 w-3 h-3 md:w-4 md:h-4 bg-gray-800 rounded-full"></div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Train Smoke */}
                  {gameState.showTrain && (
                    <div className="absolute bottom-24 md:bottom-32 left-2 md:left-4 animate-smoke">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full opacity-60"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-300 rounded-full opacity-40 ml-1 md:ml-2 -mt-1"></div>
                      <div className="w-1 h-1 md:w-2 md:h-2 bg-gray-300 rounded-full opacity-20 ml-2 md:ml-4 -mt-1"></div>
                    </div>
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

export default BlinkingNumbersWorksheet; 
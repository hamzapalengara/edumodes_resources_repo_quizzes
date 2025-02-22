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
    }, 500); // Reduced from 1000ms to 500ms for faster train appearance

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
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-full max-w-xs mx-auto">
                    <button
                      onClick={startGame}
                      className="w-full relative bg-gradient-to-b from-red-500 to-red-600 text-white rounded-xl px-8 py-6 text-xl md:text-2xl font-bold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all shadow-lg border-4 border-red-700 group"
                    >
                      {/* Train Engine Icon */}
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-lg border-2 border-yellow-600 flex items-center justify-center transform group-hover:translate-x-2 transition-transform">
                        <span className="text-2xl">🚂</span>
                      </div>
                      
                      {/* Button Text */}
                      <span className="ml-12">All Aboard!</span>
                      
                      {/* Smoke Effect */}
                      <div className="absolute -top-4 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-3 h-3 bg-gray-200 rounded-full animate-smoke-1"></div>
                        <div className="w-2 h-2 bg-gray-200 rounded-full animate-smoke-2 ml-2"></div>
                      </div>
                    </button>
                    
                    {/* Track under button */}
                    <div className="absolute -bottom-4 left-0 w-full">
                      <div className="h-2 bg-gray-700 rounded"></div>
                      <div className="flex justify-between px-2 -mt-1">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="w-4 h-1 bg-gray-800"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-center animate-pulse">
                    Click to Start Your Train Adventure!
                  </p>
                </div>
              ) : (
                <div className="relative w-full overflow-hidden min-h-[400px] md:min-h-[300px] rounded-xl">
                  {/* Train Station Background */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url(${trainStationBg})`,
                      filter: 'brightness(0.95)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center bottom'
                    }}
                  />
                  
                  {/* Platform and Station Elements */}
                  <div className="absolute bottom-20 left-0 w-full h-12 bg-gradient-to-b from-gray-300 to-gray-400"></div>
                  <div className="absolute bottom-32 left-0 w-full flex justify-around px-4 md:px-8">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-3 md:w-4 h-12 md:h-16 bg-gray-700"></div>
                        <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-yellow-100 shadow-lg animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Train Track with Enhanced Details */}
                  <div className="absolute bottom-8 left-0 w-full">
                    {/* Main Track */}
                    <div className="h-3 md:h-4 bg-gradient-to-b from-gray-600 to-gray-700"></div>
                    
                    {/* Track Details */}
                    <div className="relative">
                      {/* Wooden Sleepers */}
                      <div className="absolute -top-3 md:-top-4 w-full">
                        <div className="flex justify-between w-full px-2 md:px-4">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="w-3 md:w-4 h-1.5 md:h-2 bg-gradient-to-b from-yellow-800 to-yellow-900"></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Rails */}
                      <div className="absolute -top-2 md:-top-3 w-full flex justify-between px-2 md:px-4">
                        <div className="h-0.5 md:h-1 w-full bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400"></div>
                        <div className="h-0.5 md:h-1 w-full bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400"></div>
                      </div>
                    </div>
                  </div>

                  {/* Number Train with Enhanced Design */}
                  {gameState.showTrain && (
                    <div 
                      key={gameState.trainKey}
                      className="absolute bottom-12 left-0 flex gap-0.5 md:gap-2 animate-train"
                    >
                      {/* Engine (First Car) */}
                      <div className="relative w-24 h-24 md:w-36 md:h-36 bg-gradient-to-b from-red-500 to-red-600 rounded-l-xl border-2 border-red-700 flex items-center justify-center shadow-lg">
                        <div className="absolute -top-4 md:-top-6 right-2 md:right-3 w-4 md:w-6 h-6 md:h-8 bg-gray-700 rounded-t-lg"></div>
                        <div className="absolute -bottom-4 md:-bottom-6 left-2 md:left-3 w-4 md:w-6 h-4 md:h-6 bg-gray-800 rounded-full"></div>
                        <div className="absolute -bottom-4 md:-bottom-6 right-2 md:right-3 w-4 md:w-6 h-4 md:h-6 bg-gray-800 rounded-full"></div>
                        {/* Engine Details */}
                        <div className="absolute top-3 left-3 w-6 md:w-8 h-3 md:h-4 bg-yellow-300 rounded"></div>
                        <div className="absolute top-3 right-3 w-4 md:w-6 h-4 md:h-6 bg-gray-800 rounded-full border-2 border-gray-600"></div>
                      </div>

                      {/* Number Cars */}
                      {gameState.trainNumbers.map((number, index) => (
                        <button
                          key={index}
                          onClick={() => handleNumberClick(number, { markCorrect, markIncorrect, markAttempted })}
                          disabled={!gameState.isGameActive}
                          className={`
                            relative w-20 h-20 md:w-32 md:h-32 text-3xl md:text-6xl font-bold
                            flex items-center justify-center
                            transition-transform
                            ${index === TRAIN_SIZE - 1 ? 'rounded-r-xl' : ''}
                            ${gameState.isGameActive ? 'cursor-pointer hover:scale-110 hover:shadow-xl' : 'cursor-not-allowed opacity-80'}
                            bg-gradient-to-b from-yellow-300 to-yellow-400
                            border-2 md:border-4 border-yellow-500
                            shadow-lg
                          `}
                        >
                          {/* Car Window */}
                          <div className="absolute top-2 md:top-3 left-2 md:left-3 right-2 md:right-3 h-2 md:h-3 bg-blue-200 rounded-full opacity-70"></div>
                          
                          {/* Number */}
                          <span className="relative z-10 text-gray-800 drop-shadow-md">{number}</span>
                          
                          {/* Train car wheels with axles */}
                          <div className="absolute -bottom-4 md:-bottom-6 left-0 right-0 flex justify-between px-2 md:px-4">
                            <div className="relative">
                              <div className="w-3 h-3 md:w-6 md:h-6 bg-gray-800 rounded-full"></div>
                              <div className="absolute top-1/2 left-1/2 w-1 md:w-1.5 h-4 md:h-6 bg-gray-700 -translate-x-1/2"></div>
                            </div>
                            <div className="relative">
                              <div className="w-3 h-3 md:w-6 md:h-6 bg-gray-800 rounded-full"></div>
                              <div className="absolute top-1/2 left-1/2 w-1 md:w-1.5 h-4 md:h-6 bg-gray-700 -translate-x-1/2"></div>
                            </div>
                          </div>

                          {/* Connector between cars */}
                          <div className="absolute left-0 top-1/2 -translate-x-2 md:-translate-x-3 w-3 md:w-4 h-2 md:h-3 bg-gray-700"></div>
                          {index < TRAIN_SIZE - 1 && (
                            <div className="absolute right-0 top-1/2 translate-x-2 md:translate-x-3 w-3 md:w-4 h-2 md:h-3 bg-gray-700"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Enhanced Train Smoke */}
                  {gameState.showTrain && (
                    <div className="absolute bottom-20 md:bottom-32 left-4 md:left-8">
                      <div className="relative">
                        <div className="absolute animate-smoke-1 w-3 h-3 md:w-6 md:h-6 bg-gradient-to-t from-gray-300 to-white rounded-full opacity-80"></div>
                        <div className="absolute animate-smoke-2 w-2 h-2 md:w-4 md:h-4 bg-gradient-to-t from-gray-300 to-white rounded-full opacity-60 ml-2 -mt-2"></div>
                        <div className="absolute animate-smoke-3 w-1 h-1 md:w-3 md:h-3 bg-gradient-to-t from-gray-300 to-white rounded-full opacity-40 ml-3 -mt-1"></div>
                      </div>
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
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Questions with different durations in seconds
const TIME_QUESTIONS = [
  { 
    seconds: 3, 
    options: ['2 seconds', '3 seconds', '4 seconds'],
    funFact: "That's as quick as saying 'Mississippi' three times!"
  },
  { 
    seconds: 5, 
    options: ['4 seconds', '5 seconds', '6 seconds'],
    funFact: "High five! ✋ That's how many seconds just passed!"
  },
  { 
    seconds: 8, 
    options: ['7 seconds', '8 seconds', '9 seconds'],
    funFact: "You could do 8 jumping jacks in that time! 🏃‍♂️"
  },
  { 
    seconds: 4, 
    options: ['3 seconds', '4 seconds', '5 seconds'],
    funFact: "That's the time it takes to say 'supercalifragilistic'!"
  },
  { 
    seconds: 6, 
    options: ['5 seconds', '6 seconds', '7 seconds'],
    funFact: "Six seconds - like counting all your fingers! 👐"
  },
  { 
    seconds: 10, 
    options: ['9 seconds', '10 seconds', '11 seconds'],
    funFact: "Ten seconds - that's like counting all your toes! 🦶"
  }
];

const ENCOURAGEMENT_PHRASES = [
  "You're doing great! 🌟",
  "Keep watching carefully! 👀",
  "Almost there! 🎯",
  "You're a super counter! 🦸‍♂️",
  "Time is fun with you! ⭐️"
];

const ClockSecondsWorksheet: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [secondsRotation, setSecondsRotation] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const speak = (text: string) => {
    if (speechSynthesisRef.current) {
      window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    speechSynthesisRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const getSuccessFeedback = (seconds: number) => {
    const phrases = [
      `Excellent! The seconds hand moved for ${seconds} seconds! ${TIME_QUESTIONS[currentQuestion].funFact}`,
      `Perfect! You counted ${seconds} seconds correctly! ${TIME_QUESTIONS[currentQuestion].funFact}`,
      `Amazing! That was exactly ${seconds} seconds! ${TIME_QUESTIONS[currentQuestion].funFact}`,
      `Great job! The clock ticked for ${seconds} seconds! ${TIME_QUESTIONS[currentQuestion].funFact}`
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
      // Speak an encouragement phrase at the start
      speak(ENCOURAGEMENT_PHRASES[Math.floor(Math.random() * ENCOURAGEMENT_PHRASES.length)]);
    }

    const elapsed = timestamp - startTimeRef.current;
    const seconds = Math.floor(elapsed / 1000);
    
    // Update to tick movement instead of continuous
    const currentRotation = seconds * 6; // 6 degrees per second (360/60)

    if (seconds <= TIME_QUESTIONS[currentQuestion].seconds) {
      setSecondsRotation(currentRotation);
      // Play tick sound every second
      if (currentRotation % 6 === 0) {
        const tickSound = new Audio('/sounds/tick.mp3');
        tickSound.volume = 0.3;
        tickSound.play();
      }
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
      startTimeRef.current = null;
      speak("Time's up! How many seconds was that?");
    }
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setSelectedAnswer(null);
    setSecondsRotation(0);
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);
    speak("Watch the seconds hand move!");
  };

  const handleOptionClick = (
    option: string,
    { markCorrect, markIncorrect, markAttempted }: {
      markCorrect: () => void;
      markIncorrect: () => void;
      markAttempted: () => void;
    }
  ) => {
    if (isAnimating) return;
    
    markAttempted();
    setSelectedAnswer(option);
    
    const isCorrect = option === `${TIME_QUESTIONS[currentQuestion].seconds} seconds`;
    
    if (isCorrect) {
      markCorrect();
      speak(getSuccessFeedback(TIME_QUESTIONS[currentQuestion].seconds));
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        if (currentQuestion < TIME_QUESTIONS.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setSelectedAnswer(null);
        }
      }, 3000);
    } else {
      markIncorrect();
      speak("Try again! Watch the seconds hand carefully.");
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  const renderClock = () => {
    // Calculate responsive sizes based on viewport width
    const baseSize = Math.min(window.innerWidth * 0.8, 288); // 288px = 72rem * 4
    const clockSize = Math.min(baseSize, window.innerHeight * 0.4); // Limit height on mobile
    const numberSize = clockSize * 0.167; // 1/6 of clock size
    const centerDotSize = clockSize * 0.083; // 1/12 of clock size
    const secondsHandHeight = clockSize * 0.5; // Reduced from 0.667 to 0.5 for shorter hand

    return (
      <div className="flex justify-center items-center py-4">
        <div className="relative" style={{ width: clockSize, height: clockSize }}>
          {/* Clock Face */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 shadow-xl border-8 border-orange-200">
            {/* Clock Numbers */}
            {[...Array(12)].map((_, i) => {
              const number = ((i - 1 + 12) % 12) + 1;
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const radius = clockSize * 0.35; // Adjust radius based on clock size
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={i}
                  className="absolute flex items-center justify-center"
                  style={{
                    width: numberSize,
                    height: numberSize,
                    left: `calc(50% + ${x}px - ${numberSize/2}px)`,
                    top: `calc(50% + ${y}px - ${numberSize/2}px)`
                  }}
                >
                  <div className="relative w-full h-full">
                    <div className="w-full h-full rounded-full bg-white shadow-lg border-2 border-orange-300 flex items-center justify-center">
                      <span className="text-base sm:text-xl font-bold text-orange-600">
                        {number}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Second Markers */}
            {[...Array(60)].map((_, i) => {
              const angle = (i * 6 - 90) * (Math.PI / 180);
              const radius = clockSize * 0.45; // Adjust radius based on clock size
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isHour = i % 5 === 0;
              
              return (
                <div
                  key={i}
                  className={`absolute rounded-full ${isHour ? 'bg-orange-400' : 'bg-orange-300'}`}
                  style={{
                    width: isHour ? '0.75rem' : '0.5rem',
                    height: isHour ? '1.25rem' : '0.75rem',
                    left: `calc(50% + ${x}px - ${isHour ? '0.375rem' : '0.25rem'})`,
                    top: `calc(50% + ${y}px - ${isHour ? '0.625rem' : '0.375rem'})`,
                    transform: `rotate(${i * 6}deg)`
                  }}
                />
              );
            })}

            {/* Seconds Hand */}
            <motion.div
              className="absolute bg-gradient-to-t from-red-500 to-orange-400 rounded-full origin-bottom"
              style={{
                width: '0.5rem',
                height: secondsHandHeight,
                left: 'calc(50% - 0.25rem)',
                bottom: '50%',
                transformOrigin: 'bottom',
                rotate: secondsRotation
              }}
              animate={{ rotate: secondsRotation }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                S
              </div>
            </motion.div>

            {/* Center Dot */}
            <div 
              className="absolute rounded-full bg-gradient-to-br from-orange-400 to-amber-300 shadow-lg border-4 border-white"
              style={{
                width: centerDotSize,
                height: centerDotSize,
                left: `calc(50% - ${centerDotSize/2}px)`,
                top: `calc(50% - ${centerDotSize/2}px)`
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={TIME_QUESTIONS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ score, markCorrect, markIncorrect, markAttempted }) => (
          <div className="px-2 md:px-4 max-w-4xl mx-auto">
            {/* Score Display with Animation */}
            <motion.div
              className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-4"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <ScoreDisplay 
                score={score}
                totalQuestions={TIME_QUESTIONS.length * 10}
              />
            </motion.div>

            {/* Current Task */}
            <motion.div
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.h2 
                className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4"
                animate={{ scale: isAnimating ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 0.5, repeat: isAnimating ? Infinity : 0 }}
              >
                {isAnimating ? (
                  "Count the seconds! 🕐"
                ) : (
                  selectedAnswer ? (
                    "How many seconds did the hand move? 🤔"
                  ) : (
                    "Click Start to watch the seconds hand! 👇"
                  )
                )}
              </motion.h2>

              {/* Progress Indicator */}
              <div className="flex justify-center mb-4">
                {[...Array(TIME_QUESTIONS.length)].map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      index === currentQuestion 
                        ? 'bg-orange-500' 
                        : index < currentQuestion 
                          ? 'bg-green-500' 
                          : 'bg-gray-200'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: index === currentQuestion ? [0.8, 1.1, 0.8] : 0.8 }}
                    transition={{ duration: 1, repeat: index === currentQuestion ? Infinity : 0 }}
                  />
                ))}
              </div>

              {/* Clock Container with Fun Background */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-100 mb-6 relative overflow-hidden">
                {/* Fun Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  {['⏰', '⌚️', '⏱️', '🕐'].map((emoji, i) => (
                    <div
                      key={i}
                      className="absolute text-2xl"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        transform: 'translate(-50%, -50%) rotate(45deg)'
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                {renderClock()}
              </div>

              {/* Interactive Controls */}
              <div className="flex flex-col items-center space-y-4">
                {!isAnimating && !selectedAnswer && (
                  <motion.button
                    className="w-full sm:w-auto px-8 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startAnimation}
                  >
                    Start Counting! 🎯
                  </motion.button>
                )}

                {!isAnimating && (
                  <div className="grid grid-cols-3 gap-2 w-full">
                    {TIME_QUESTIONS[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        className={`
                          w-full px-2 py-3 text-sm sm:text-base font-bold rounded-full shadow-lg
                          transition-all transform hover:scale-105
                          ${selectedAnswer === option
                            ? option === `${TIME_QUESTIONS[currentQuestion].seconds} seconds`
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                              : 'bg-gradient-to-r from-red-500 to-rose-500 text-white'
                            : 'bg-white text-orange-600 hover:bg-orange-50'
                          }
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleOptionClick(option, { markCorrect, markIncorrect, markAttempted })}
                        disabled={isAnimating}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                )}

                {selectedAnswer && selectedAnswer !== `${TIME_QUESTIONS[currentQuestion].seconds} seconds` && (
                  <motion.button
                    className="w-full sm:w-auto px-8 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all mt-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedAnswer(null);
                      startAnimation();
                    }}
                  >
                    Try Again! 🔄
                  </motion.button>
                )}
              </div>
            </motion.div>

            {/* Celebration Animation */}
            <AnimatePresence>
              {showCelebration && (
                <>
                  <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    numberOfPieces={150}
                    recycle={false}
                    gravity={0.5}
                    colors={[
                      '#F97316',
                      '#FB923C',
                      '#FBBF24',
                      '#FDE68A',
                      '#FEF3C7',
                    ]}
                  />
                  <motion.div
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    exit={{ scale: 0 }}
                  >
                    <div className="text-6xl">🎉</div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default ClockSecondsWorksheet; 
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Time questions with regular numbers for options
const TIME_QUESTIONS = [
  {
    hours: 3,
    minutes: 30,
    options: ['Quarter past 3', 'Half past 3', 'Quarter to 4'],
    correctAnswer: 'Half past 3'
  },
  {
    hours: 9,
    minutes: 15,
    options: ['Quarter past 9', 'Half past 9', 'Quarter to 10'],
    correctAnswer: 'Quarter past 9'
  },
  {
    hours: 6,
    minutes: 45,
    options: ['Quarter to 7', 'Quarter past 6', 'Half past 6'],
    correctAnswer: 'Quarter to 7'
  },
  {
    hours: 12,
    minutes: 30,
    options: ['Half past 12', 'Quarter to 1', 'Quarter past 12'],
    correctAnswer: 'Half past 12'
  },
  {
    hours: 4,
    minutes: 15,
    options: ['Quarter to 5', 'Quarter past 4', 'Half past 4'],
    correctAnswer: 'Quarter past 4'
  },
  {
    hours: 8,
    minutes: 45,
    options: ['Quarter to 9', 'Half past 8', 'Quarter past 8'],
    correctAnswer: 'Quarter to 9'
  },
  {
    hours: 2,
    minutes: 30,
    options: ['Quarter to 3', 'Half past 2', 'Quarter past 2'],
    correctAnswer: 'Half past 2'
  },
  {
    hours: 11,
    minutes: 45,
    options: ['Quarter to 12', 'Half past 11', 'Quarter past 11'],
    correctAnswer: 'Quarter to 12'
  }
];

const ClockTimeAdvancedWorksheet: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(TIME_QUESTIONS.length).fill(''));
  const [showCelebration, setShowCelebration] = useState(false);
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Update window size on resize
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimized speech function with cancellation of previous speech
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

  const getSuccessFeedback = (time: string) => {
    const phrases = [
      `Excellent! It's ${time}!`,
      `Wonderful! The time is ${time}!`,
      `Amazing! You found ${time}!`,
      `Fantastic job! That's ${time}!`
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const provideFeedback = (isCorrect: boolean, time?: string) => {
    if (isCorrect && time) {
      speak(getSuccessFeedback(time));
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    } else {
      speak("Try again! Look carefully at the clock hands.");
    }
  };

  const handleOptionClick = (
    questionIndex: number,
    option: string,
    { markCorrect, markIncorrect, markAttempted }: {
      markCorrect: () => void;
      markIncorrect: () => void;
      markAttempted: () => void;
    },
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    markAttempted();
    const isCorrect = option === TIME_QUESTIONS[questionIndex].correctAnswer;
    
    setSelectedAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = option;
      return newAnswers;
    });

    if (isCorrect) {
      markCorrect();
      // Get the clock's position for confetti origin
      const clockElement = document.getElementById(`clock-${questionIndex}`);
      if (clockElement) {
        const rect = clockElement.getBoundingClientRect();
        setConfettiPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
      provideFeedback(true, option);
    } else {
      markIncorrect();
      provideFeedback(false);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  const renderClock = (hours: number, minutes: number, index: number) => {
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    const minuteDegrees = minutes * 6;

    return (
      <div className="relative w-48 h-48 mx-auto mb-4" id={`clock-${index}`}>
        {/* Clock Face with fun background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 shadow-lg border-4 border-indigo-300 overflow-hidden">
          {/* Fun Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {['🌟', '✨', '⭐️', '🌈'].map((emoji, i) => (
              <div
                key={i}
                className="absolute text-2xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {emoji}
              </div>
            ))}
          </div>

          {/* Hour Numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = ((i * 30 - 90) * Math.PI) / 180;
            const radius = 65;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            // Shift numbers one position clockwise
            const number = ((i - 1 + 12) % 12) + 1;
            return (
              <motion.div
                key={i}
                className="absolute w-8 h-8 flex items-center justify-center"
                style={{
                  left: `calc(50% + ${x}px - 16px)`,
                  top: `calc(50% + ${y}px - 16px)`
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative">
                  <span className="text-lg font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
                    {number}
                  </span>
                  {/* Fun indicators for special positions */}
                  {number === 12 && <span className="absolute -top-6 text-lg">🎯</span>}
                  {number === 3 && <span className="absolute -right-6 text-lg">🌟</span>}
                  {number === 6 && <span className="absolute -bottom-6 text-lg">🌈</span>}
                  {number === 9 && <span className="absolute -left-6 text-lg">✨</span>}
                </div>
              </motion.div>
            );
          })}

          {/* Hour Hand */}
          <motion.div
            className="absolute flex items-center justify-center origin-bottom"
            style={{
              width: '8px',
              height: '35%',
              left: 'calc(50% - 4px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: hourDegrees,
            }}
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: hourDegrees, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="w-full h-full bg-gradient-to-t from-indigo-600 to-violet-500 rounded-full shadow-lg" />
            <span className="absolute -top-4 text-lg">🌙</span>
          </motion.div>

          {/* Minute Hand */}
          <motion.div
            className="absolute flex items-center justify-center origin-bottom"
            style={{
              width: '4px',
              height: '45%',
              left: 'calc(50% - 2px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: minuteDegrees,
            }}
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: minuteDegrees, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="w-full h-full bg-gradient-to-t from-purple-500 to-fuchsia-400 rounded-full shadow-lg" />
            <span className="absolute -top-4 text-lg">☀️</span>
          </motion.div>

          {/* Center Dot */}
          <motion.div
            className="absolute w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
            style={{
              left: 'calc(50% - 12px)',
              top: 'calc(50% - 12px)',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-xs">🎈</span>
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={TIME_QUESTIONS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ score, markCorrect, markIncorrect, markAttempted }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-4">
              <ScoreDisplay 
                score={score}
                totalQuestions={TIME_QUESTIONS.length * 10}
              />
            </div>

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
                    confettiSource={{
                      x: confettiPosition.x,
                      y: confettiPosition.y,
                      w: 0,
                      h: 0
                    }}
                    initialVelocityX={15}
                    initialVelocityY={30}
                    colors={[
                      '#FF69B4', // Pink
                      '#4B0082', // Indigo
                      '#9370DB', // Medium Purple
                      '#8A2BE2', // Blue Violet
                      '#BA55D3', // Medium Orchid
                      '#FF1493', // Deep Pink
                      '#FFD700', // Gold
                      '#00CED1', // Dark Turquoise
                    ]}
                  />
                  <motion.div
                    className="fixed pointer-events-none flex items-center justify-center"
                    style={{
                      left: confettiPosition.x - 40,
                      top: confettiPosition.y - 40,
                    }}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="text-6xl"
                      animate={{ 
                        rotate: [0, -10, 10, -10, 10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 1, repeat: 2 }}
                    >
                      🎉
                    </motion.div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Questions */}
            <div className="space-y-8 p-4">
              {TIME_QUESTIONS.map((question, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 text-center mb-4">
                    What time is shown on the clock?
                  </h2>

                  {renderClock(question.hours, question.minutes, index)}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {question.options.map((option, optionIndex) => (
                      <motion.button
                        key={optionIndex}
                        className={`
                          p-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105
                          ${selectedAnswers[index] === option
                            ? option === question.correctAnswer
                              ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white scale-105'
                              : 'bg-gradient-to-r from-rose-400 to-pink-400 text-white scale-105'
                            : 'bg-white text-indigo-600 hover:bg-indigo-50'
                          }
                          ${selectedAnswers[index] === question.correctAnswer ? 'cursor-default' : 'cursor-pointer'}
                        `}
                        onClick={(e) => handleOptionClick(index, option, { markCorrect, markIncorrect, markAttempted }, e)}
                        disabled={selectedAnswers[index] === question.correctAnswer}
                        whileHover={{ scale: selectedAnswers[index] !== question.correctAnswer ? 1.05 : 1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default ClockTimeAdvancedWorksheet; 
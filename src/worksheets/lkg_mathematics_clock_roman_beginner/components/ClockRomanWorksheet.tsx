import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Roman numeral conversion helper - Fixed order to match clock positions
const ROMAN_NUMERALS = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

// Time questions with regular numbers for options
const TIME_QUESTIONS = [
  {
    hours: 12,
    minutes: 0,
    romanHour: 'XII',
    options: ['12 o\'clock', '3 o\'clock', '6 o\'clock'],
    correctAnswer: '12 o\'clock'
  },
  {
    hours: 3,
    minutes: 0,
    romanHour: 'III',
    options: ['3 o\'clock', '6 o\'clock', '9 o\'clock'],
    correctAnswer: '3 o\'clock'
  },
  {
    hours: 6,
    minutes: 0,
    romanHour: 'VI',
    options: ['12 o\'clock', '6 o\'clock', '3 o\'clock'],
    correctAnswer: '6 o\'clock'
  },
  {
    hours: 9,
    minutes: 0,
    romanHour: 'IX',
    options: ['3 o\'clock', '9 o\'clock', '12 o\'clock'],
    correctAnswer: '9 o\'clock'
  },
  {
    hours: 2,
    minutes: 0,
    romanHour: 'II',
    options: ['2 o\'clock', '5 o\'clock', '11 o\'clock'],
    correctAnswer: '2 o\'clock'
  },
  {
    hours: 5,
    minutes: 0,
    romanHour: 'V',
    options: ['5 o\'clock', '7 o\'clock', '10 o\'clock'],
    correctAnswer: '5 o\'clock'
  },
  {
    hours: 7,
    minutes: 0,
    romanHour: 'VII',
    options: ['4 o\'clock', '7 o\'clock', '10 o\'clock'],
    correctAnswer: '7 o\'clock'
  },
  {
    hours: 10,
    minutes: 0,
    romanHour: 'X',
    options: ['8 o\'clock', '10 o\'clock', '2 o\'clock'],
    correctAnswer: '10 o\'clock'
  }
];

const ClockRomanWorksheet: React.FC = () => {
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
      setTimeout(() => setShowCelebration(false), 3000); // Increased celebration duration
    } else {
      speak("Try again! Look carefully at the Roman numerals on the clock face.");
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
      const clockElement = document.getElementById(`clock-${TIME_QUESTIONS[questionIndex].hours}`);
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

  const renderClock = (hours: number, minutes: number) => {
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    const minuteDegrees = minutes * 6;

    return (
      <div className="relative w-48 h-48 mx-auto mb-4" id={`clock-${hours}`}>
        {/* Clock Face */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-100 shadow-lg border-4 border-indigo-300">
          {/* Hour Numbers (Roman Numerals) */}
          {ROMAN_NUMERALS.map((numeral, i) => {
            const angle = ((i * 30 - 90) * Math.PI) / 180;
            const radius = 65;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.div
                key={i}
                className="absolute w-8 h-8 flex items-center justify-center text-lg font-bold"
                style={{
                  left: `calc(50% + ${x}px - 16px)`,
                  top: `calc(50% + ${y}px - 16px)`
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  {numeral}
                </span>
              </motion.div>
            );
          })}

          {/* Hour Hand */}
          <motion.div
            className="absolute w-2 bg-gradient-to-t from-indigo-600 to-violet-500 rounded-full origin-bottom"
            style={{
              height: '30%',
              left: 'calc(50% - 4px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: hourDegrees,
              boxShadow: '0 0 4px rgba(0,0,0,0.2)'
            }}
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: hourDegrees, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Minute Hand */}
          <motion.div
            className="absolute w-1 bg-gradient-to-t from-purple-500 to-fuchsia-400 rounded-full origin-bottom"
            style={{
              height: '40%',
              left: 'calc(50% - 2px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: minuteDegrees,
              boxShadow: '0 0 4px rgba(0,0,0,0.2)'
            }}
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: minuteDegrees, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Center Dot */}
          <motion.div
            className="absolute w-4 h-4 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full"
            style={{
              left: 'calc(50% - 8px)',
              top: 'calc(50% - 8px)',
              boxShadow: '0 0 4px rgba(0,0,0,0.2)'
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
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

                  {renderClock(question.hours, question.minutes)}

                  <div className="grid grid-cols-3 gap-2">
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

export default ClockRomanWorksheet; 
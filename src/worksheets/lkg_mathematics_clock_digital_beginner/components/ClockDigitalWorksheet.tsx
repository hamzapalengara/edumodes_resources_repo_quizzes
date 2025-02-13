import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Time questions with target angles
const TIME_QUESTIONS = [
  {
    targetHours: 2,
    targetMinutes: 30,
    timeText: "2:30",
    hint: "Move the hour hand between 2 and 3, and the minute hand to 6"
  },
  {
    targetHours: 5,
    targetMinutes: 45,
    timeText: "5:45",
    hint: "Move the hour hand between 5 and 6, and the minute hand to 9"
  },
  {
    targetHours: 9,
    targetMinutes: 15,
    timeText: "9:15",
    hint: "Move the hour hand just past 9, and the minute hand to 3"
  },
  {
    targetHours: 11,
    targetMinutes: 0,
    timeText: "11:00",
    hint: "Move the hour hand to 11 and the minute hand to 12"
  },
  {
    targetHours: 4,
    targetMinutes: 30,
    timeText: "4:30",
    hint: "Move the hour hand between 4 and 5, and the minute hand to 6"
  },
  {
    targetHours: 7,
    targetMinutes: 15,
    timeText: "7:15",
    hint: "Move the hour hand just past 7, and the minute hand to 3"
  },
  {
    targetHours: 1,
    targetMinutes: 45,
    timeText: "1:45",
    hint: "Move the hour hand between 1 and 2, and the minute hand to 9"
  },
  {
    targetHours: 8,
    targetMinutes: 0,
    timeText: "8:00",
    hint: "Move the hour hand to 8 and the minute hand to 12"
  },
  {
    targetHours: 10,
    targetMinutes: 30,
    timeText: "10:30",
    hint: "Move the hour hand between 10 and 11, and the minute hand to 6"
  },
  {
    targetHours: 3,
    targetMinutes: 15,
    timeText: "3:15",
    hint: "Move the hour hand just past 3, and the minute hand to 3"
  }
];

const ClockDigitalWorksheet: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hourRotation, setHourRotation] = useState(150); // Start at 5 o'clock
  const [minuteRotation, setMinuteRotation] = useState(240); // Start at 8 o'clock
  const [showCelebration, setShowCelebration] = useState(false);
  const [showHint, setShowHint] = useState(false);
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

  // Speech synthesis
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

  const getSuccessFeedback = () => {
    const phrases = [
      `Excellent! You set the clock to ${TIME_QUESTIONS[currentQuestion].timeText}!`,
      `Perfect! That's exactly ${TIME_QUESTIONS[currentQuestion].timeText}!`,
      `Amazing job! You showed ${TIME_QUESTIONS[currentQuestion].timeText}!`,
      `Wonderful! You set it to ${TIME_QUESTIONS[currentQuestion].timeText}!`
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const checkTime = (
    { markCorrect, markIncorrect, markAttempted }: {
      markCorrect: () => void;
      markIncorrect: () => void;
      markAttempted: () => void;
    }
  ) => {
    markAttempted();
    
    const question = TIME_QUESTIONS[currentQuestion];
    const targetHourDegrees = ((question.targetHours % 12) + question.targetMinutes / 60) * 30;
    const targetMinuteDegrees = (question.targetMinutes / 60) * 360;

    // Allow for some margin of error (±10 degrees)
    const hourError = Math.abs((hourRotation + 360) % 360 - (targetHourDegrees + 360) % 360);
    const minuteError = Math.abs((minuteRotation + 360) % 360 - (targetMinuteDegrees + 360) % 360);
    
    const isCorrect = hourError <= 10 && minuteError <= 10;

    if (isCorrect) {
      markCorrect();
      speak(getSuccessFeedback());
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        if (currentQuestion < TIME_QUESTIONS.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          // Set new random initial positions for hands
          setHourRotation(Math.random() * 360);
          setMinuteRotation(Math.random() * 360);
        }
      }, 3000);
    } else {
      markIncorrect();
      speak("Try again! Move the hands to show the correct time.");
      setShowHint(true);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  const renderClock = () => {
    return (
      <div className="relative w-72 h-72 mx-auto">
        {/* Clock Face */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 shadow-xl border-8 border-purple-200">
          {/* Clock Numbers */}
          {[...Array(12)].map((_, i) => {
            const number = ((i - 1 + 12) % 12) + 1;
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const radius = 80;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={i}
                className="absolute flex items-center justify-center w-10 h-10"
                style={{
                  left: `calc(50% + ${x}px - 20px)`,
                  top: `calc(50% + ${y}px - 20px)`
                }}
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white shadow-lg border-2 border-purple-300 flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-600">
                      {number}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Hour Hand */}
          <motion.div
            className="absolute w-4 h-32 cursor-grab active:cursor-grabbing touch-none"
            style={{
              left: 'calc(50% - 8px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: hourRotation
            }}
            onPointerDown={(e) => {
              console.log('Hour hand pointer down');
              const clockFace = e.currentTarget.closest('.rounded-full');
              if (!clockFace) return;

              const updateHourRotation = (moveEvent: PointerEvent) => {
                const rect = clockFace.getBoundingClientRect();
                const clockCenterX = rect.left + rect.width / 2;
                const clockCenterY = rect.top + rect.height / 2;

                const angle = Math.atan2(
                  moveEvent.clientX - clockCenterX,
                  -(moveEvent.clientY - clockCenterY)
                ) * (180 / Math.PI);

                setHourRotation((angle + 360) % 360);
              };

              const handlePointerMove = (moveEvent: PointerEvent) => {
                moveEvent.preventDefault();
                updateHourRotation(moveEvent);
              };

              const handlePointerUp = () => {
                console.log('Hour hand pointer up');
                document.removeEventListener('pointermove', handlePointerMove);
                document.removeEventListener('pointerup', handlePointerUp);
              };

              document.addEventListener('pointermove', handlePointerMove);
              document.addEventListener('pointerup', handlePointerUp);
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full shadow-lg">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                H
              </div>
            </div>
          </motion.div>

          {/* Minute Hand */}
          <motion.div
            className="absolute w-2 h-40 cursor-grab active:cursor-grabbing touch-none"
            style={{
              left: 'calc(50% - 4px)',
              bottom: '50%',
              transformOrigin: 'bottom',
              rotate: minuteRotation
            }}
            onPointerDown={(e) => {
              console.log('Minute hand pointer down');
              const clockFace = e.currentTarget.closest('.rounded-full');
              if (!clockFace) return;

              const updateMinuteRotation = (moveEvent: PointerEvent) => {
                const rect = clockFace.getBoundingClientRect();
                const clockCenterX = rect.left + rect.width / 2;
                const clockCenterY = rect.top + rect.height / 2;

                const angle = Math.atan2(
                  moveEvent.clientX - clockCenterX,
                  -(moveEvent.clientY - clockCenterY)
                ) * (180 / Math.PI);

                setMinuteRotation((angle + 360) % 360);
              };

              const handlePointerMove = (moveEvent: PointerEvent) => {
                moveEvent.preventDefault();
                updateMinuteRotation(moveEvent);
              };

              const handlePointerUp = () => {
                console.log('Minute hand pointer up');
                document.removeEventListener('pointermove', handlePointerMove);
                document.removeEventListener('pointerup', handlePointerUp);
              };

              document.addEventListener('pointermove', handlePointerMove);
              document.addEventListener('pointerup', handlePointerUp);
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-blue-500 to-indigo-400 rounded-full shadow-lg">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                M
              </div>
            </div>
          </motion.div>

          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-300 shadow-lg border-4 border-white" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
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

            {/* Current Task */}
            <motion.div
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
                Set the clock to show:
              </h2>
              <div className="text-3xl font-bold text-center text-purple-700 mb-4 font-mono">
                {TIME_QUESTIONS[currentQuestion].timeText}
              </div>
              
              {showHint && (
                <motion.div
                  className="text-sm text-center text-purple-600 bg-purple-50 p-2 rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Hint: {TIME_QUESTIONS[currentQuestion].hint}
                </motion.div>
              )}
            </motion.div>

            {/* Clock */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-100 mb-6">
              {renderClock()}
            </div>

            {/* Check Button */}
            <div className="flex justify-center">
              <motion.button
                className="px-8 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => checkTime({ markCorrect, markIncorrect, markAttempted })}
              >
                Check Time
              </motion.button>
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
                    colors={[
                      '#9333EA', // Purple
                      '#6366F1', // Indigo
                      '#3B82F6', // Blue
                      '#A855F7', // Purple
                      '#818CF8', // Indigo
                      '#60A5FA', // Blue
                      '#C084FC', // Purple
                    ]}
                  />
                </>
              )}
            </AnimatePresence>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default ClockDigitalWorksheet; 
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Constants
const TOTAL_QUESTIONS = 10;
const BASE_QUESTIONS = [
  {
    id: 1,
    count: 1,
    options: ['1', '2', '3', '4'],
    objects: ['🌟'],
  },
  {
    id: 2,
    count: 2,
    options: ['1', '2', '4', '3'],
    objects: ['🍎', '🍎'],
  },
  {
    id: 3,
    count: 3,
    options: ['4', '2', '3', '1'],
    objects: ['🐶', '🐶', '🐶'],
  },
  {
    id: 4,
    count: 4,
    options: ['2', '4', '1', '3'],
    objects: ['🎈', '🎈', '🎈', '🎈'],
  },
  {
    id: 5,
    count: 5,
    options: ['3', '4', '5', '2'],
    objects: ['🦋', '🦋', '🦋', '🦋', '🦋'],
  },
  {
    id: 6,
    count: 2,
    options: ['3', '2', '1', '4'],
    objects: ['🌸', '🌸'],
  },
  {
    id: 7,
    count: 4,
    options: ['4', '3', '5', '2'],
    objects: ['🐠', '🐠', '🐠', '🐠'],
  },
  {
    id: 8,
    count: 1,
    options: ['2', '3', '1', '5'],
    objects: ['🎁'],
  },
  {
    id: 9,
    count: 3,
    options: ['4', '3', '2', '1'],
    objects: ['🌈', '🌈', '🌈'],
  },
  {
    id: 10,
    count: 5,
    options: ['4', '2', '5', '3'],
    objects: ['⭐', '⭐', '⭐', '⭐', '⭐'],
  },
];

// Shuffle array helper function
const shuffleArray = <T extends any>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface ConfettiItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'emoji' | 'number';
}

const ObjectCountingFiveWorksheet: React.FC = () => {
  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <WorksheetTracker
      totalQuestions={TOTAL_QUESTIONS}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markAttempted, score }) => {
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [showSuccess, setShowSuccess] = useState(false);
        const [confetti, setConfetti] = useState<ConfettiItem[]>([]);
        const [completedQuestions, setCompletedQuestions] = useState<boolean[]>(Array(TOTAL_QUESTIONS).fill(false));
        const [isPlaying, setIsPlaying] = useState(false);
        const [isWorksheetCompleted, setIsWorksheetCompleted] = useState(false);
        const [showFinalCelebration, setShowFinalCelebration] = useState(false);
        const [questions] = useState(() => shuffleArray(BASE_QUESTIONS));

        // Speech synthesis
        const speak = useCallback((text: string) => {
          if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.8;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
            setIsPlaying(true);
            utterance.onend = () => setIsPlaying(false);
          }
        }, []);

        // Auto-play current question on mount and question change
        useEffect(() => {
          if (!isWorksheetCompleted) {
            const timer = setTimeout(() => {
              speak(`How many objects do you see? Count them carefully.`);
            }, 1000);
            return () => {
              clearTimeout(timer);
              window.speechSynthesis.cancel();
              setIsPlaying(false);
            };
          }
        }, [currentQuestionIndex, speak, isWorksheetCompleted, questions]);

        // Handle option selection
        const handleOptionClick = useCallback((selectedNumber: string) => {
          if (isWorksheetCompleted) return;
          
          const currentQuestion = questions[currentQuestionIndex];
          markAttempted();

          if (parseInt(selectedNumber) === currentQuestion.count) {
            if (!completedQuestions[currentQuestionIndex]) {
              markCorrect();
              const newCompletedQuestions = [...completedQuestions];
              newCompletedQuestions[currentQuestionIndex] = true;
              setCompletedQuestions(newCompletedQuestions);
            }

            setShowSuccess(true);
            speak(`Excellent! Yes, there ${currentQuestion.count === 1 ? 'is' : 'are'} ${currentQuestion.count} ${currentQuestion.count === 1 ? 'object' : 'objects'}!`);

            // Create confetti for correct answer
            const newConfetti: ConfettiItem[] = Array.from({ length: 20 }).map((_, i) => ({
              id: i,
              x: Math.random() * 100,
              y: -20,
              rotation: Math.random() * 360,
              scale: 0.5 + Math.random() * 1,
              type: Math.random() > 0.5 ? 'emoji' : 'number'
            }));
            setConfetti(newConfetti);

            // Move to next question after delay
            setTimeout(() => {
              setShowSuccess(false);
              if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
              } else {
                setIsWorksheetCompleted(true);
                setShowFinalCelebration(true);
                speak("Wonderful job! You've completed all the counting exercises!");
                const finalConfetti: ConfettiItem[] = Array.from({ length: 100 }).map((_, i) => ({
                  id: i,
                  x: Math.random() * 100,
                  y: -20,
                  rotation: Math.random() * 360,
                  scale: 0.5 + Math.random() * 1,
                  type: Math.random() > 0.5 ? 'emoji' : 'number'
                }));
                setConfetti(finalConfetti);
              }
            }, 2000);
          } else {
            speak(`Try again! Count the objects one by one.`);
          }
        }, [currentQuestionIndex, completedQuestions, markCorrect, markAttempted, speak, isWorksheetCompleted, questions]);

        // Play current question
        const playQuestion = useCallback(() => {
          if (!isPlaying && !isWorksheetCompleted) {
            speak(`How many objects do you see? Count them carefully.`);
          }
        }, [speak, isPlaying, isWorksheetCompleted]);

        return (
          <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100">
            <WorksheetHeader />

            {/* Score and Title Section */}
            <div className="bg-white/30 backdrop-blur-md shadow-lg border border-pink-200">
              <div className="max-w-4xl mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col items-stretch gap-2">
                <div className="w-full flex justify-center items-center">
                  <ScoreDisplay score={score} totalQuestions={TOTAL_QUESTIONS * 10} />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-pink-900 text-center">
                  Count Objects and Match Numbers
                </h2>
              </div>
            </div>

            {/* Main Content */}
            <main className="px-0">
              <div className="bg-white/30 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-pink-200">
                <div className="max-w-4xl mx-auto">
                  {/* Progress Display */}
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full border border-pink-200">
                      <span className="text-sm font-medium text-pink-900">Question:</span>
                      <span className="text-sm font-bold text-pink-900">{currentQuestionIndex + 1} / {TOTAL_QUESTIONS}</span>
                    </div>
                  </div>

                  {/* Question Section */}
                  <div className="mb-8">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 shadow-lg text-center">
                      <h3 className="text-lg md:text-xl font-bold text-pink-900 mb-4">
                        Count the Objects
                      </h3>
                      <button
                        onClick={playQuestion}
                        disabled={isPlaying}
                        className={`
                          px-6 py-3 rounded-full text-white font-semibold
                          flex items-center gap-2 mx-auto
                          transition-all transform hover:scale-105
                          ${isPlaying
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                          }
                          shadow-lg
                        `}
                      >
                        <span className="text-2xl">🔊</span>
                        {isPlaying ? 'Playing...' : 'Hear Question'}
                      </button>

                      {/* Objects Display */}
                      <div className="mt-6 flex flex-wrap justify-center gap-4 text-4xl md:text-5xl">
                        {questions[currentQuestionIndex].objects.map((object, index) => (
                          <span key={index} className="transform hover:scale-110 transition-transform">
                            {object}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Options Grid */}
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        disabled={isWorksheetCompleted}
                        className={`
                          aspect-square w-full text-3xl md:text-4xl font-bold rounded-xl
                          flex items-center justify-center
                          transition-all transform hover:scale-105
                          ${isWorksheetCompleted
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-white hover:bg-blue-50 active:bg-blue-100 text-pink-900'
                          }
                          shadow-lg border-2 border-pink-200 hover:border-blue-300
                          backdrop-blur-sm
                        `}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {/* Final Celebration Overlay */}
                  {showFinalCelebration && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-40">
                      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl transform animate-bounce border-2 border-pink-200">
                        <h2 className="text-2xl font-bold text-pink-900 mb-4">
                          🎉 Amazing Job! 🎉
                        </h2>
                        <p className="text-lg text-blue-800">
                          You've counted all the objects correctly!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </main>

            {/* Confetti Animation */}
            <AnimatePresence>
              {(showSuccess || showFinalCelebration) && (
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                  {confetti.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{
                        x: `${item.x}vw`,
                        y: '-10vh',
                        rotate: item.rotation,
                        scale: item.scale,
                      }}
                      animate={{
                        y: '110vh',
                        rotate: item.rotation + (Math.random() > 0.5 ? 360 : -360),
                        x: `${item.x + (Math.random() * 20 - 10)}vw`,
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        ease: [0.1, 0.4, 0.8, 0.9],
                        delay: item.id * 0.1,
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        color: item.type === 'emoji' ? 'inherit' : 
                               `hsl(${Math.random() * 360}, ${70 + Math.random() * 20}%, ${65 + Math.random() * 15}%)`,
                        textShadow: '0 0 5px rgba(0,0,0,0.2)',
                        fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.type === 'emoji' ? '⭐' : questions[currentQuestionIndex].count}
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default ObjectCountingFiveWorksheet; 
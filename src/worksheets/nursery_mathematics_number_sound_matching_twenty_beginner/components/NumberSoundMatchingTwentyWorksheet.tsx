import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Constants
const TOTAL_QUESTIONS = 10;
const BASE_QUESTIONS = [
  { id: 1, word: 'eleven', number: '11', options: ['11', '12', '13', '14'] },
  { id: 2, word: 'twelve', number: '12', options: ['11', '12', '14', '13'] },
  { id: 3, word: 'thirteen', number: '13', options: ['14', '12', '13', '11'] },
  { id: 4, word: 'fourteen', number: '14', options: ['12', '14', '11', '13'] },
  { id: 5, word: 'fifteen', number: '15', options: ['16', '15', '13', '14'] },
  { id: 6, word: 'sixteen', number: '16', options: ['15', '17', '16', '14'] },
  { id: 7, word: 'seventeen', number: '17', options: ['16', '18', '15', '17'] },
  { id: 8, word: 'eighteen', number: '18', options: ['17', '19', '18', '16'] },
  { id: 9, word: 'nineteen', number: '19', options: ['18', '19', '17', '20'] },
  { id: 10, word: 'twenty', number: '20', options: ['19', '18', '20', '17'] },
];

// Fisher-Yates shuffle algorithm
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

const NumberSoundMatchingTwentyWorksheet: React.FC = () => {
  // Handle summary generation
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
        const [questions] = useState(() => shuffleArray(BASE_QUESTIONS));
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [showSuccess, setShowSuccess] = useState(false);
        const [confetti, setConfetti] = useState<ConfettiItem[]>([]);
        const [completedQuestions, setCompletedQuestions] = useState<boolean[]>(Array(TOTAL_QUESTIONS).fill(false));
        const [isPlaying, setIsPlaying] = useState(false);
        const [isWorksheetCompleted, setIsWorksheetCompleted] = useState(false);
        const [showFinalCelebration, setShowFinalCelebration] = useState(false);

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

        // Auto-play current number on question change
        useEffect(() => {
          if (!isWorksheetCompleted) {
            const currentQuestion = questions[currentQuestionIndex];
            const timer = setTimeout(() => {
              speak(`Find number ${currentQuestion.word}`);
            }, 1500); // Increased delay to ensure proper initialization
            return () => {
              clearTimeout(timer);
              window.speechSynthesis.cancel(); // Cancel any ongoing speech
              setIsPlaying(false); // Reset playing state
            };
          }
        }, [currentQuestionIndex, speak, isWorksheetCompleted, questions]);

        // Handle option selection
        const handleOptionClick = useCallback((selectedNumber: string) => {
          if (isWorksheetCompleted) return; // Prevent selection after completion
          
          const currentQuestion = questions[currentQuestionIndex];
          markAttempted();

          if (selectedNumber === currentQuestion.number) {
            if (!completedQuestions[currentQuestionIndex]) {
              markCorrect();
              const newCompletedQuestions = [...completedQuestions];
              newCompletedQuestions[currentQuestionIndex] = true;
              setCompletedQuestions(newCompletedQuestions);
            }

            setShowSuccess(true);
            speak(`Yes! That's correct, it's number ${currentQuestion.word}!`);

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
                // Final celebration when all questions are completed
                setIsWorksheetCompleted(true);
                setShowFinalCelebration(true);
                speak("Congratulations! You've completed all the numbers!");
                // Create grand finale confetti
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
            speak(`Try again! Find number ${currentQuestion.word}`);
          }
        }, [currentQuestionIndex, completedQuestions, markCorrect, markAttempted, speak, isWorksheetCompleted, questions]);

        // Play current number sound
        const playCurrentNumber = useCallback(() => {
          if (!isPlaying && !isWorksheetCompleted) {
            const currentQuestion = questions[currentQuestionIndex];
            speak(`Find number ${currentQuestion.word}`);
          }
        }, [currentQuestionIndex, speak, isPlaying, isWorksheetCompleted, questions]);

        return (
          <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-200/40 to-blue-200/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/40 to-pink-200/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-pink-200/40 to-blue-200/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <WorksheetHeader />

            {/* Score and Title Section */}
            <div className="bg-white/30 backdrop-blur-md shadow-lg border border-pink-200">
              <div className="max-w-4xl mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col items-stretch gap-2">
                <div className="w-full flex justify-center items-center">
                  <ScoreDisplay score={score} totalQuestions={TOTAL_QUESTIONS * 10} />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-pink-900 text-center">
                  Match Numbers 11-20 with Sounds
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

                  {/* Sound Play Section */}
                  <div className="mb-8">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 shadow-lg text-center">
                      <h3 className="text-lg md:text-xl font-bold text-pink-900 mb-4">
                        Listen to the Number
                      </h3>
                      <button
                        onClick={playCurrentNumber}
                        disabled={isPlaying}
                        className={`
                          px-6 py-3 rounded-full text-white font-semibold
                          flex items-center gap-2 mx-auto
                          transition-all transform hover:scale-105
                          ${isPlaying
                            ? 'bg-blue-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
                          }
                          shadow-lg shadow-blue-200
                        `}
                      >
                        <span className="text-2xl">🔊</span>
                        {isPlaying ? 'Playing...' : 'Play Sound'}
                      </button>
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
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white hover:bg-pink-50 active:bg-pink-100 text-pink-900'
                          }
                          shadow-lg border-2 border-pink-200 hover:border-pink-300
                          backdrop-blur-sm
                        `}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {/* Final Celebration Overlay */}
                  {showFinalCelebration && (
                    <div className="fixed inset-0 bg-pink-900/20 backdrop-blur-sm flex items-center justify-center z-40">
                      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl transform animate-bounce border-2 border-pink-200">
                        <h2 className="text-2xl font-bold text-pink-900 mb-4">
                          🎉 Amazing Job! 🎉
                        </h2>
                        <p className="text-lg text-pink-700">
                          You've matched all the numbers with their sounds!
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
                               `hsl(${Math.random() > 0.5 ? 330 : 200}, ${70 + Math.random() * 20}%, ${65 + Math.random() * 15}%)`,
                        textShadow: '0 0 5px rgba(0,0,0,0.2)',
                        fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.type === 'emoji' ? '⭐' : questions[currentQuestionIndex].number}
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

export default NumberSoundMatchingTwentyWorksheet; 
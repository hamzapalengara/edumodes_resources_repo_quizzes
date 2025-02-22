import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Constants
const TOTAL_QUESTIONS = 5;
const QUESTIONS = [
  { id: 1, word: 'one', number: '1', options: ['1', '2', '3', '4'] },
  { id: 2, word: 'two', number: '2', options: ['1', '2', '4', '3'] },
  { id: 3, word: 'three', number: '3', options: ['4', '2', '3', '1'] },
  { id: 4, word: 'four', number: '4', options: ['2', '4', '1', '3'] },
  { id: 5, word: 'five', number: '5', options: ['3', '5', '2', '4'] },
];

interface ConfettiItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'emoji' | 'number';
}

const NumberSoundMatchingFiveWorksheet: React.FC = () => {
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
            const currentQuestion = QUESTIONS[currentQuestionIndex];
            const timer = setTimeout(() => {
              speak(`Find number ${currentQuestion.word}`);
            }, 1500); // Increased delay to ensure proper initialization
            return () => {
              clearTimeout(timer);
              window.speechSynthesis.cancel(); // Cancel any ongoing speech
              setIsPlaying(false); // Reset playing state
            };
          }
        }, [currentQuestionIndex, speak, isWorksheetCompleted]);

        // Handle option selection
        const handleOptionClick = useCallback((selectedNumber: string) => {
          if (isWorksheetCompleted) return; // Prevent selection after completion
          
          const currentQuestion = QUESTIONS[currentQuestionIndex];
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
              if (currentQuestionIndex < QUESTIONS.length - 1) {
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
        }, [currentQuestionIndex, completedQuestions, markCorrect, markAttempted, speak, isWorksheetCompleted]);

        // Play current number sound
        const playCurrentNumber = useCallback(() => {
          if (!isPlaying && !isWorksheetCompleted) {
            const currentQuestion = QUESTIONS[currentQuestionIndex];
            speak(`Find number ${currentQuestion.word}`);
          }
        }, [currentQuestionIndex, speak, isPlaying, isWorksheetCompleted]);

        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-red-500/20 to-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <WorksheetHeader />

            {/* Score and Title Section */}
            <div className="bg-slate-800/50 backdrop-blur-md shadow-lg border border-blue-500/20">
              <div className="max-w-4xl mx-auto px-2 py-2 md:px-4 md:py-3 flex flex-col items-stretch gap-2">
                <div className="w-full flex justify-center items-center">
                  <ScoreDisplay score={score} totalQuestions={TOTAL_QUESTIONS * 10} />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-100 text-center">
                  Match Numbers 1-5 with Sounds
                </h2>
              </div>
            </div>

            {/* Main Content */}
            <main className="px-0">
              <div className="bg-slate-800/30 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-blue-500/20">
                <div className="max-w-4xl mx-auto">
                  {/* Progress Display */}
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full border border-blue-500/30">
                      <span className="text-sm font-medium text-blue-100">Question:</span>
                      <span className="text-sm font-bold text-blue-100">{currentQuestionIndex + 1} / {TOTAL_QUESTIONS}</span>
                    </div>
                  </div>

                  {/* Sound Play Section */}
                  <div className="mb-8">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 shadow-lg text-center">
                      <h3 className="text-lg md:text-xl font-bold text-blue-100 mb-4">
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
                            ? 'bg-red-800/50 cursor-not-allowed'
                            : 'bg-red-600 hover:bg-red-700 active:bg-red-800'
                          }
                          shadow-lg shadow-red-500/20
                        `}
                      >
                        <span className="text-2xl">🔊</span>
                        {isPlaying ? 'Playing...' : 'Play Sound'}
                      </button>
                    </div>
                  </div>

                  {/* Options Grid */}
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    {QUESTIONS[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        disabled={isWorksheetCompleted}
                        className={`
                          aspect-square w-full text-3xl md:text-4xl font-bold rounded-xl
                          flex items-center justify-center
                          transition-all transform hover:scale-105
                          ${isWorksheetCompleted
                            ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                            : 'bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-blue-100'
                          }
                          shadow-lg border-2 border-blue-500/30 hover:border-blue-400/50
                          backdrop-blur-sm
                        `}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {/* Final Celebration Overlay */}
                  {showFinalCelebration && (
                    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-40">
                      <div className="bg-slate-800 rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl transform animate-bounce border-2 border-blue-500/30">
                        <h2 className="text-2xl font-bold text-blue-100 mb-4">
                          🎉 Amazing Job! 🎉
                        </h2>
                        <p className="text-lg text-blue-200">
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
                               `hsl(${Math.random() > 0.5 ? 200 : 0}, ${70 + Math.random() * 20}%, ${65 + Math.random() * 15}%)`,
                        textShadow: '0 0 5px rgba(0,0,0,0.2)',
                        fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.type === 'emoji' ? '⭐' : QUESTIONS[currentQuestionIndex].number}
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

export default NumberSoundMatchingFiveWorksheet; 
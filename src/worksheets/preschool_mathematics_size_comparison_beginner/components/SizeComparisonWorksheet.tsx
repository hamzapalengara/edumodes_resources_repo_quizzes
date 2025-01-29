import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';

// Define interfaces
interface ComparisonOption {
  emoji: string;
  size: string;
  label: string;
  displaySize: string;
  extraClasses?: string;
}

interface ComparisonQuestion {
  id: number;
  type: 'big_small' | 'tall_short';
  question: string;
  options: ComparisonOption[];
  correctAnswer: string;
}

// Updated comparison questions with visual size differences
const COMPARISON_QUESTIONS: ComparisonQuestion[] = [
  {
    id: 1,
    type: 'big_small',
    question: "Which animal is BIGGER?",
    options: [
      { emoji: '🐭', size: 'small', label: 'Mouse', displaySize: 'text-4xl' },
      { emoji: '🐘', size: 'big', label: 'Elephant', displaySize: 'text-7xl' }
    ],
    correctAnswer: 'big'
  },
  {
    id: 2,
    type: 'tall_short',
    question: "Which one is TALLER?",
    options: [
      { 
        emoji: '🌳', 
        size: 'tall', 
        label: 'Tree', 
        displaySize: 'text-7xl',
        extraClasses: 'transform translate-y-[-10px]' 
      },
      { 
        emoji: '🌱', 
        size: 'short', 
        label: 'Plant', 
        displaySize: 'text-4xl',
        extraClasses: 'transform translate-y-[20px]' 
      }
    ],
    correctAnswer: 'tall'
  },
  {
    id: 3,
    type: 'big_small',
    question: "Which fruit is SMALLER?",
    options: [
      { emoji: '🍎', size: 'big', label: 'Apple', displaySize: 'text-6xl' },
      { emoji: '🫐', size: 'small', label: 'Blueberry', displaySize: 'text-3xl' }
    ],
    correctAnswer: 'small'
  },
  {
    id: 4,
    type: 'tall_short',
    question: "Which building is SHORTER?",
    options: [
      { 
        emoji: '🏠', 
        size: 'short', 
        label: 'House', 
        displaySize: 'text-5xl',
        extraClasses: 'transform translate-y-[15px]' 
      },
      { 
        emoji: '🏢', 
        size: 'tall', 
        label: 'Building', 
        displaySize: 'text-7xl',
        extraClasses: 'transform translate-y-[-10px]' 
      }
    ],
    correctAnswer: 'short'
  },
  {
    id: 5,
    type: 'big_small',
    question: "Which ball is BIGGER?",
    options: [
      { emoji: '⚽', size: 'big', label: 'Soccer Ball', displaySize: 'text-7xl' },
      { emoji: '🏀', size: 'small', label: 'Basketball', displaySize: 'text-5xl' }
    ],
    correctAnswer: 'big'
  },
  {
    id: 6,
    type: 'tall_short',
    question: "Which flower is TALLER?",
    options: [
      { 
        emoji: '🌷', 
        size: 'short', 
        label: 'Tulip', 
        displaySize: 'text-4xl',
        extraClasses: 'transform translate-y-[20px]' 
      },
      { 
        emoji: '🌻', 
        size: 'tall', 
        label: 'Sunflower', 
        displaySize: 'text-7xl',
        extraClasses: 'transform translate-y-[-10px]' 
      }
    ],
    correctAnswer: 'tall'
  },
  {
    id: 7,
    type: 'big_small',
    question: "Which pet is SMALLER?",
    options: [
      { emoji: '🐕', size: 'big', label: 'Dog', displaySize: 'text-7xl' },
      { emoji: '🐹', size: 'small', label: 'Hamster', displaySize: 'text-4xl' }
    ],
    correctAnswer: 'small'
  },
  {
    id: 8,
    type: 'tall_short',
    question: "Which animal is SHORTER?",
    options: [
      { 
        emoji: '🦒', 
        size: 'tall', 
        label: 'Giraffe', 
        displaySize: 'text-7xl',
        extraClasses: 'transform translate-y-[-15px]' 
      },
      { 
        emoji: '🦆', 
        size: 'short', 
        label: 'Duck', 
        displaySize: 'text-4xl',
        extraClasses: 'transform translate-y-[20px]' 
      }
    ],
    correctAnswer: 'short'
  }
];

const SizeComparisonWorksheet: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Get window dimensions for confetti
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentQuestion = COMPARISON_QUESTIONS[currentQuestionIndex];

  // Speech synthesis for feedback
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return (
    <WorksheetTracker
      totalQuestions={COMPARISON_QUESTIONS.length}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Size Comparison Worksheet Summary:', summary);
      }}
    >
      {({ score, markCorrect, markIncorrect, markAttempted }) => {
        const handleOptionClick = (size: string) => {
          if (selectedAnswer !== null) return;
          
          setSelectedAnswer(size);
          markAttempted();
          
          const correct = size === currentQuestion.correctAnswer;
          setIsCorrect(correct);
          
          if (correct) {
            markCorrect();
            speak("That's correct! Great job!");
            if (currentQuestionIndex === COMPARISON_QUESTIONS.length - 1) {
              setShowCelebration(true);
              setTimeout(() => setShowCelebration(false), 5000);
            }
          } else {
            markIncorrect();
            speak("Try again! You can do it!");
          }
          
          setTimeout(() => {
            if (currentQuestionIndex < COMPARISON_QUESTIONS.length - 1) {
              setCurrentQuestionIndex(prev => prev + 1);
              setSelectedAnswer(null);
              setIsCorrect(null);
            }
          }, 2000);
        };

        return (
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
            {showCelebration && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={200}
                recycle={false}
                colors={['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD']}
              />
            )}

            <WorksheetHeader />

            <TouchContainer>
              <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
                <ScoreDisplay score={score/10} totalQuestions={COMPARISON_QUESTIONS.length} />

                <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
                  <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">
                    {currentQuestion.question}
                  </h2>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {currentQuestion.options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          flex flex-col items-center justify-center p-6 rounded-lg min-h-[200px]
                          ${selectedAnswer === null ? 'hover:bg-purple-50 cursor-pointer' : 'cursor-default'}
                          ${selectedAnswer === option.size && isCorrect ? 'bg-green-100' : ''}
                          ${selectedAnswer === option.size && !isCorrect ? 'bg-red-100' : ''}
                          border-4 border-purple-200 transition-all duration-300
                        `}
                        onClick={() => handleOptionClick(option.size)}
                        disabled={selectedAnswer !== null}
                      >
                        <div className={`mb-4 ${option.extraClasses || ''}`}>
                          <span className={option.displaySize}>{option.emoji}</span>
                        </div>
                        <span className="text-xl font-medium text-purple-800">{option.label}</span>
                      </motion.button>
                    ))}
                  </div>

                  <AnimatePresence>
                    {isCorrect !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`text-center text-lg font-bold ${
                          isCorrect ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {isCorrect ? "That's correct! 🎉" : "Try again! You can do it! 💪"}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-8">
                    <div className="flex justify-between text-sm text-purple-600 mb-2">
                      <span>Progress</span>
                      <span>{currentQuestionIndex + 1} of {COMPARISON_QUESTIONS.length}</span>
                    </div>
                    <div className="w-full bg-purple-100 rounded-full h-2.5">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${((currentQuestionIndex + 1) / COMPARISON_QUESTIONS.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TouchContainer>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default SizeComparisonWorksheet; 

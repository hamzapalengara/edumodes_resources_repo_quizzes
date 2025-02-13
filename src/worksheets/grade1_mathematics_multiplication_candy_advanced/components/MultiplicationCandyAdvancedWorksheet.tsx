import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

const CANDY_THEMES = [
  {
    background: 'bg-gradient-to-br from-pink-100 to-red-100',
    accent: 'pink',
    containerBg: 'bg-pink-50',
    borderColor: 'border-pink-200',
    textColor: 'text-pink-800',
    glowEffect: 'shadow-pink-200',
    icon: '🍫',
    name: 'Chocolate Box'
  },
  {
    background: 'bg-gradient-to-br from-red-100 to-pink-100',
    accent: 'red',
    containerBg: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-800',
    glowEffect: 'shadow-red-200',
    icon: '🍬',
    name: 'Candy Jar'
  },
  {
    background: 'bg-gradient-to-br from-rose-100 to-pink-100',
    accent: 'rose',
    containerBg: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-800',
    glowEffect: 'shadow-rose-200',
    icon: '🍭',
    name: 'Lollipop Stand'
  }
];

const MULTIPLICATION_QUESTIONS = [
  {
    id: 1,
    groups: 6,
    itemsPerGroup: 8,
    objectType: '🍫',
    question: 'How many chocolates are there in total?',
    options: ['6 × 8 = 48', '6 × 7 = 42', '6 × 9 = 54', '6 × 6 = 36'],
    correctAnswer: '6 × 8 = 48',
    explanation: '6 × 8 = 48 chocolates',
    theme: CANDY_THEMES[0],
    groupNames: ['Box A', 'Box B', 'Box C', 'Box D', 'Box E', 'Box F']
  },
  {
    id: 2,
    groups: 7,
    itemsPerGroup: 7,
    objectType: '🍭',
    question: 'Count the total number of lollipops:',
    options: ['7 × 7 = 49', '7 × 6 = 42', '7 × 8 = 56', '7 × 5 = 35'],
    correctAnswer: '7 × 7 = 49',
    explanation: '7 × 7 = 49 lollipops',
    theme: CANDY_THEMES[2],
    groupNames: ['Stand 1', 'Stand 2', 'Stand 3', 'Stand 4', 'Stand 5', 'Stand 6', 'Stand 7']
  },
  {
    id: 3,
    groups: 8,
    itemsPerGroup: 6,
    objectType: '🍬',
    question: 'How many candies are in all the jars?',
    options: ['8 × 6 = 48', '8 × 5 = 40', '8 × 7 = 56', '8 × 4 = 32'],
    correctAnswer: '8 × 6 = 48',
    explanation: '8 × 6 = 48 candies',
    theme: CANDY_THEMES[1],
    groupNames: ['Jar I', 'Jar II', 'Jar III', 'Jar IV', 'Jar V', 'Jar VI', 'Jar VII', 'Jar VIII']
  },
  {
    id: 4,
    groups: 9,
    itemsPerGroup: 5,
    objectType: '🍪',
    question: 'Calculate the total number of cookies:',
    options: ['9 × 5 = 45', '9 × 4 = 36', '9 × 6 = 54', '9 × 3 = 27'],
    correctAnswer: '9 × 5 = 45',
    explanation: '9 × 5 = 45 cookies',
    theme: CANDY_THEMES[0],
    groupNames: ['Plate 1', 'Plate 2', 'Plate 3', 'Plate 4', 'Plate 5', 'Plate 6', 'Plate 7', 'Plate 8', 'Plate 9']
  },
  {
    id: 5,
    groups: 6,
    itemsPerGroup: 9,
    objectType: '🧁',
    question: 'Find the total number of cupcakes:',
    options: ['6 × 9 = 54', '6 × 8 = 48', '6 × 7 = 42', '6 × 10 = 60'],
    correctAnswer: '6 × 9 = 54',
    explanation: '6 × 9 = 54 cupcakes',
    theme: CANDY_THEMES[2],
    groupNames: ['Tray A', 'Tray B', 'Tray C', 'Tray D', 'Tray E', 'Tray F']
  }
];

const CompletionMessage: React.FC<{ score: number; totalQuestions: number }> = ({ score, totalQuestions }) => (
  <motion.div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div
      className="bg-white rounded-xl p-8 max-w-md mx-4 text-center shadow-2xl"
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
        Sweet Success! 🎉
      </h2>
      <p className="text-xl text-gray-700 mb-4">
        You've completed all the multiplication questions!
      </p>
      <div className="bg-pink-50 rounded-lg p-4 mb-6">
        <p className="text-lg text-pink-700">
          Final Score: <span className="font-bold">{score}</span> out of {totalQuestions}
        </p>
      </div>
      <div className="flex justify-center gap-2 text-3xl">
        {score === totalQuestions ? '🏆 🍫 🎯' : '🌟 🍬 ⭐'}
      </div>
    </motion.div>
  </motion.div>
);

const MultiplicationCandyAdvancedWorksheet: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = MULTIPLICATION_QUESTIONS[currentQuestionIndex];
  const { theme } = currentQuestion;

  const speakText = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => resolve();
      speechSynthesis.speak(utterance);
    });
  };

  const moveToNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    setShowConfetti(false);
    if (currentQuestionIndex < MULTIPLICATION_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleOptionSelect = async ({ markCorrect, markIncorrect, markAttempted }: {
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }, option: string) => {
    if (selectedOption) return;

    markAttempted();
    setSelectedOption(option);
    const isCorrect = option === currentQuestion.correctAnswer;
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setShowConfetti(true);
      await speakText(currentQuestion.explanation);
      markCorrect();
      setTimeout(() => {
        moveToNextQuestion();
      }, 1500);
    } else {
      await speakText('Try again');
      markIncorrect();
      setTimeout(() => {
        setSelectedOption(null);
        setIsAnswerCorrect(null);
      }, 1500);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className={`min-h-screen ${theme.background}`}>
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={MULTIPLICATION_QUESTIONS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markIncorrect, markAttempted, score }) => (
          <>
            <div className="px-0 md:px-4 max-w-4xl mx-auto py-8">
              {/* Score Display */}
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-8">
                <ScoreDisplay
                  score={score}
                  totalQuestions={MULTIPLICATION_QUESTIONS.length * 10}
                />
              </div>

              {/* Question Container */}
              <motion.div
                key={currentQuestion.id}
                className={`${theme.containerBg} rounded-xl shadow-lg p-4 mb-8`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className={`text-xl font-bold ${theme.textColor} mb-4`}>
                  {currentQuestion.question}
                </h2>

                {/* Visual Groups */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {Array.from({ length: currentQuestion.groups }).map((_, groupIndex) => (
                    <motion.div
                      key={groupIndex}
                      className={`${theme.containerBg} border-2 ${theme.borderColor} rounded-lg p-3`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: groupIndex * 0.1 }}
                    >
                      <p className={`text-sm ${theme.textColor} mb-2`}>
                        {currentQuestion.groupNames[groupIndex]}
                      </p>
                      <div className="grid grid-cols-3 gap-1">
                        {Array.from({ length: currentQuestion.itemsPerGroup }).map((_, itemIndex) => (
                          <motion.span
                            key={itemIndex}
                            className="text-2xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: (groupIndex * currentQuestion.itemsPerGroup + itemIndex) * 0.02 }}
                          >
                            {currentQuestion.objectType}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 gap-4">
                  {currentQuestion.options.map((option, index) => (
                    <motion.button
                      key={option}
                      className={`p-4 rounded-lg text-lg font-bold transition-all
                        ${selectedOption === option
                          ? isAnswerCorrect
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : `${theme.containerBg} ${theme.textColor} hover:shadow-lg`
                        }
                      `}
                      onClick={() => handleOptionSelect({ markCorrect, markIncorrect, markAttempted }, option)}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      disabled={!!selectedOption}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Feedback Message */}
              <AnimatePresence>
                {isAnswerCorrect !== null && (
                  <motion.div
                    className={`text-center text-xl font-bold mb-4
                      ${isAnswerCorrect ? 'text-green-600' : 'text-red-600'}`
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {isAnswerCorrect
                      ? currentQuestion.explanation
                      : 'Try again! Count the groups carefully.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Confetti Effect */}
            {showConfetti && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={200}
                gravity={0.3}
              />
            )}

            {/* Completion Message */}
            {isCompleted && (
              <CompletionMessage 
                score={score} 
                totalQuestions={MULTIPLICATION_QUESTIONS.length * 10} 
              />
            )}
          </>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default MultiplicationCandyAdvancedWorksheet; 
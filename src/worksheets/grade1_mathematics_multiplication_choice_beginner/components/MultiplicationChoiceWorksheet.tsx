import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Theme colors for different question types
const THEMES = [
  {
    name: 'Fruits',
    background: 'from-rose-50 via-pink-50 to-rose-50',
    accent: 'rose',
    containerBg: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-600'
  },
  {
    name: 'Toys',
    background: 'from-purple-50 via-violet-50 to-purple-50',
    accent: 'purple',
    containerBg: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600'
  },
  {
    name: 'Stars',
    background: 'from-amber-50 via-yellow-50 to-amber-50',
    accent: 'amber',
    containerBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600'
  }
];

// Multiplication questions with visual groups
const MULTIPLICATION_QUESTIONS = [
  {
    id: 1,
    groups: 2,
    itemsPerGroup: 3,
    objectType: '🍎',
    question: 'Look at the groups of apples. Which multiplication fact matches these groups?',
    options: [
      { expression: '2 × 3 = 6', isCorrect: true },
      { expression: '3 × 3 = 9', isCorrect: false },
      { expression: '2 × 4 = 8', isCorrect: false },
      { expression: '2 × 2 = 4', isCorrect: false }
    ],
    explanation: 'There are 2 groups with 3 apples in each group, so 2 × 3 = 6',
    theme: THEMES[0],
    groupNames: ['Group 1', 'Group 2']
  },
  {
    id: 2,
    groups: 4,
    itemsPerGroup: 2,
    objectType: '🎈',
    question: 'Count the balloon groups. Which multiplication sentence shows the total?',
    options: [
      { expression: '4 × 2 = 8', isCorrect: true },
      { expression: '2 × 3 = 6', isCorrect: false },
      { expression: '4 × 3 = 12', isCorrect: false },
      { expression: '3 × 3 = 9', isCorrect: false }
    ],
    explanation: 'There are 4 groups with 2 balloons in each group, so 4 × 2 = 8',
    theme: THEMES[1],
    groupNames: ['Group 1', 'Group 2', 'Group 3', 'Group 4']
  },
  {
    id: 3,
    groups: 3,
    itemsPerGroup: 4,
    objectType: '⭐',
    question: 'Find the multiplication fact that matches these star groups.',
    options: [
      { expression: '3 × 4 = 12', isCorrect: true },
      { expression: '3 × 3 = 9', isCorrect: false },
      { expression: '4 × 4 = 16', isCorrect: false },
      { expression: '4 × 2 = 8', isCorrect: false }
    ],
    explanation: 'There are 3 groups with 4 stars in each group, so 3 × 4 = 12',
    theme: THEMES[2],
    groupNames: ['Group 1', 'Group 2', 'Group 3']
  },
  {
    id: 4,
    groups: 5,
    itemsPerGroup: 2,
    objectType: '🍊',
    question: 'Choose the multiplication fact that shows the total number of oranges.',
    options: [
      { expression: '5 × 2 = 10', isCorrect: true },
      { expression: '2 × 4 = 8', isCorrect: false },
      { expression: '5 × 3 = 15', isCorrect: false },
      { expression: '3 × 3 = 9', isCorrect: false }
    ],
    explanation: 'There are 5 groups with 2 oranges in each group, so 5 × 2 = 10',
    theme: THEMES[0],
    groupNames: ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5']
  },
  {
    id: 5,
    groups: 3,
    itemsPerGroup: 5,
    objectType: '🎲',
    question: 'Which multiplication fact shows the total number of dice?',
    options: [
      { expression: '3 × 5 = 15', isCorrect: true },
      { expression: '5 × 2 = 10', isCorrect: false },
      { expression: '3 × 4 = 12', isCorrect: false },
      { expression: '4 × 4 = 16', isCorrect: false }
    ],
    explanation: 'There are 3 groups with 5 dice in each group, so 3 × 5 = 15',
    theme: THEMES[1],
    groupNames: ['Group 1', 'Group 2', 'Group 3']
  },
  {
    id: 6,
    groups: 2,
    itemsPerGroup: 4,
    objectType: '🌟',
    question: 'Look at the star groups. Which multiplication fact matches these groups?',
    options: [
      { expression: '2 × 4 = 8', isCorrect: true },
      { expression: '4 × 3 = 12', isCorrect: false },
      { expression: '2 × 3 = 6', isCorrect: false },
      { expression: '3 × 3 = 9', isCorrect: false }
    ],
    explanation: 'There are 2 groups with 4 stars in each group, so 2 × 4 = 8',
    theme: THEMES[2],
    groupNames: ['Group 1', 'Group 2']
  },
  {
    id: 7,
    groups: 4,
    itemsPerGroup: 3,
    objectType: '🍇',
    question: 'Count the grape groups. Which multiplication fact shows the total?',
    options: [
      { expression: '4 × 3 = 12', isCorrect: true },
      { expression: '3 × 3 = 9', isCorrect: false },
      { expression: '4 × 2 = 8', isCorrect: false },
      { expression: '3 × 4 = 12', isCorrect: false }
    ],
    explanation: 'There are 4 groups with 3 grapes in each group, so 4 × 3 = 12',
    theme: THEMES[0],
    groupNames: ['Group 1', 'Group 2', 'Group 3', 'Group 4']
  },
  {
    id: 8,
    groups: 5,
    itemsPerGroup: 3,
    objectType: '🎯',
    question: 'Which multiplication fact matches these target groups?',
    options: [
      { expression: '5 × 3 = 15', isCorrect: true },
      { expression: '3 × 4 = 12', isCorrect: false },
      { expression: '5 × 2 = 10', isCorrect: false },
      { expression: '4 × 3 = 12', isCorrect: false }
    ],
    explanation: 'There are 5 groups with 3 targets in each group, so 5 × 3 = 15',
    theme: THEMES[1],
    groupNames: ['Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5']
  },
  {
    id: 9,
    groups: 3,
    itemsPerGroup: 3,
    objectType: '🌸',
    question: 'Find the multiplication fact that matches these flower groups.',
    options: [
      { expression: '3 × 3 = 9', isCorrect: true },
      { expression: '3 × 2 = 6', isCorrect: false },
      { expression: '2 × 4 = 8', isCorrect: false },
      { expression: '4 × 2 = 8', isCorrect: false }
    ],
    explanation: 'There are 3 groups with 3 flowers in each group, so 3 × 3 = 9',
    theme: THEMES[2],
    groupNames: ['Group 1', 'Group 2', 'Group 3']
  },
  {
    id: 10,
    groups: 4,
    itemsPerGroup: 4,
    objectType: '🎪',
    question: 'Choose the multiplication fact that shows the total number of tents.',
    options: [
      { expression: '4 × 4 = 16', isCorrect: true },
      { expression: '4 × 3 = 12', isCorrect: false },
      { expression: '3 × 5 = 15', isCorrect: false },
      { expression: '4 × 5 = 20', isCorrect: false }
    ],
    explanation: 'There are 4 groups with 4 tents in each group, so 4 × 4 = 16',
    theme: THEMES[0],
    groupNames: ['Group 1', 'Group 2', 'Group 3', 'Group 4']
  }
];

const MultiplicationChoiceWorksheet: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentProblem = MULTIPLICATION_QUESTIONS[currentQuestion];
  const currentTheme = currentProblem.theme;

  const speakText = (text: string): Promise<void> => {
    return new Promise((resolve) => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.onend = () => resolve();
        window.speechSynthesis.speak(utterance);
      } else {
        resolve();
      }
    });
  };

  const getSuccessFeedback = () => {
    const phrases = [
      'Excellent! ',
      'Great job! ',
      'Perfect! ',
      'Amazing work! '
    ];
    return phrases[Math.floor(Math.random() * phrases.length)] + currentProblem.explanation;
  };

  const moveToNextQuestion = () => {
    setShowCelebration(false);
    if (currentQuestion < MULTIPLICATION_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerCorrect(null);
    } else {
      setIsComplete(true);
      speakText("Congratulations! You've completed all the multiplication problems!");
    }
    setIsTransitioning(false);
  };

  const handleOptionSelect = async ({ markCorrect, markIncorrect, markAttempted }: {
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }, option: string) => {
    if (isTransitioning || selectedOption) return;

    markAttempted();
    setSelectedOption(option);
    
    const isCorrect = currentProblem.options.find(opt => opt.expression === option)?.isCorrect || false;

    if (isCorrect) {
      setIsTransitioning(true);
      markCorrect();
      setIsAnswerCorrect(true);
      setShowCelebration(true);

      // Speak success feedback and move to next question after audio completes
      await speakText(getSuccessFeedback());
      moveToNextQuestion();
    } else {
      markIncorrect();
      setIsAnswerCorrect(false);
      speakText("Try again! Count the groups and items carefully.");
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  // Read the question when it changes
  useEffect(() => {
    if (!isComplete && !isTransitioning) {
      speakText(currentProblem.question);
    }
  }, [currentQuestion, isComplete, isTransitioning]);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.background}`}>
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={MULTIPLICATION_QUESTIONS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ score, markCorrect, markIncorrect, markAttempted }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <motion.div
              className="bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-4"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <ScoreDisplay 
                score={score}
                totalQuestions={MULTIPLICATION_QUESTIONS.length * 10}
              />
            </motion.div>

            {/* Question */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className={`text-xl font-bold ${currentTheme.textColor} mb-4 text-center`}>
                {currentProblem.question}
              </h2>

              {/* Visual Groups */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {Array.from({ length: currentProblem.groups }).map((_, groupIndex) => (
                  <motion.div
                    key={groupIndex}
                    className={`bg-white p-4 rounded-xl border-2 ${currentTheme.borderColor}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: groupIndex * 0.1 }}
                  >
                    <div className={`text-sm font-semibold ${currentTheme.textColor} mb-2`}>
                      {currentProblem.groupNames[groupIndex]}
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {Array.from({ length: currentProblem.itemsPerGroup }).map((_, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="text-2xl flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: (groupIndex * currentProblem.itemsPerGroup + itemIndex) * 0.05,
                            type: "spring",
                            stiffness: 500,
                            damping: 15
                          }}
                        >
                          {currentProblem.objectType}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Multiple Choice Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProblem.options.map((option, index) => (
                  <motion.button
                    key={index}
                    className={`p-4 rounded-xl text-lg font-semibold transition-all
                      ${selectedOption === option.expression
                        ? option.isCorrect
                          ? 'bg-green-100 border-2 border-green-500 text-green-700'
                          : 'bg-red-100 border-2 border-red-500 text-red-700'
                        : `bg-white border-2 ${currentTheme.borderColor} ${currentTheme.textColor} hover:bg-${currentTheme.accent}-50`
                      }
                      ${selectedOption && !option.isCorrect ? 'opacity-50' : ''}
                    `}
                    onClick={() => handleOptionSelect({ markCorrect, markIncorrect, markAttempted }, option.expression)}
                    disabled={!!selectedOption}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    {option.expression}
                  </motion.button>
                ))}
              </div>

              {/* Feedback Message */}
              <AnimatePresence>
                {(isAnswerCorrect !== null || isComplete) && (
                  <motion.div
                    className={`mt-4 p-3 rounded-lg text-center ${
                      isComplete 
                        ? 'bg-purple-100 text-purple-700'
                        : isAnswerCorrect 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    {isComplete ? (
                      <div className="space-y-2">
                        <p className="text-lg font-bold">🎉 Congratulations! 🎉</p>
                        <p>You've completed all the multiplication problems!</p>
                      </div>
                    ) : (
                      <p>
                        {isAnswerCorrect
                          ? currentProblem.explanation
                          : 'Try again! Look carefully at the groups and count the total.'}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Celebration Animation */}
            {showCelebration && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={200}
                gravity={0.3}
              />
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default MultiplicationChoiceWorksheet; 
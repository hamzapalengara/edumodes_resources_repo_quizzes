import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Theme colors for different question types
const THEMES = [
  {
    name: 'Space',
    background: 'from-indigo-50 via-purple-50 to-indigo-50',
    accent: 'indigo',
    containerBg: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    textColor: 'text-indigo-600'
  },
  {
    name: 'Galaxy',
    background: 'from-violet-50 via-fuchsia-50 to-violet-50',
    accent: 'violet',
    containerBg: 'bg-violet-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-600'
  },
  {
    name: 'Cosmos',
    background: 'from-blue-50 via-cyan-50 to-blue-50',
    accent: 'blue',
    containerBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600'
  }
];

// Multiplication questions with visual groups
const MULTIPLICATION_QUESTIONS = [
  {
    id: 1,
    groups: 1,
    itemsPerGroup: 3,
    objectType: '🚀',
    question: 'Count the rocket group. Which multiplication fact shows the total?',
    options: [
      { expression: '1 × 3 = 3', isCorrect: true },
      { expression: '2 × 2 = 4', isCorrect: false },
      { expression: '1 × 2 = 2', isCorrect: false },
      { expression: '2 × 3 = 6', isCorrect: false }
    ],
    explanation: 'There is 1 group with 3 rockets, so 1 × 3 = 3',
    theme: THEMES[0],
    groupNames: ['Launch Pad']
  },
  {
    id: 2,
    groups: 3,
    itemsPerGroup: 1,
    objectType: '🛸',
    question: 'Look at the UFO groups. Which multiplication sentence matches?',
    options: [
      { expression: '3 × 1 = 3', isCorrect: true },
      { expression: '2 × 2 = 4', isCorrect: false },
      { expression: '3 × 2 = 6', isCorrect: false },
      { expression: '2 × 3 = 6', isCorrect: false }
    ],
    explanation: 'There are 3 groups with 1 UFO in each group, so 3 × 1 = 3',
    theme: THEMES[1],
    groupNames: ['Zone 1', 'Zone 2', 'Zone 3']
  },
  {
    id: 3,
    groups: 4,
    itemsPerGroup: 5,
    objectType: '⭐',
    question: 'Find the multiplication fact that matches these star groups.',
    options: [
      { expression: '4 × 5 = 20', isCorrect: true },
      { expression: '5 × 3 = 15', isCorrect: false },
      { expression: '4 × 4 = 16', isCorrect: false },
      { expression: '3 × 5 = 15', isCorrect: false }
    ],
    explanation: 'There are 4 groups with 5 stars in each group, so 4 × 5 = 20',
    theme: THEMES[2],
    groupNames: ['Constellation 1', 'Constellation 2', 'Constellation 3', 'Constellation 4']
  },
  {
    id: 4,
    groups: 2,
    itemsPerGroup: 1,
    objectType: '👨‍🚀',
    question: 'Choose the multiplication fact that shows the total number of astronauts.',
    options: [
      { expression: '2 × 1 = 2', isCorrect: true },
      { expression: '2 × 2 = 4', isCorrect: false },
      { expression: '3 × 1 = 3', isCorrect: false },
      { expression: '1 × 3 = 3', isCorrect: false }
    ],
    explanation: 'There are 2 groups with 1 astronaut in each group, so 2 × 1 = 2',
    theme: THEMES[0],
    groupNames: ['Station 1', 'Station 2']
  },
  {
    id: 5,
    groups: 5,
    itemsPerGroup: 4,
    objectType: '🌟',
    question: 'Which multiplication fact shows the total number of bright stars?',
    options: [
      { expression: '5 × 4 = 20', isCorrect: true },
      { expression: '4 × 3 = 12', isCorrect: false },
      { expression: '5 × 3 = 15', isCorrect: false },
      { expression: '3 × 5 = 15', isCorrect: false }
    ],
    explanation: 'There are 5 groups with 4 bright stars in each group, so 5 × 4 = 20',
    theme: THEMES[1],
    groupNames: ['Galaxy 1', 'Galaxy 2', 'Galaxy 3', 'Galaxy 4', 'Galaxy 5']
  },
  {
    id: 6,
    groups: 1,
    itemsPerGroup: 2,
    objectType: '🛰️',
    question: 'Look at the satellite group. Which multiplication fact matches this group?',
    options: [
      { expression: '1 × 2 = 2', isCorrect: true },
      { expression: '2 × 2 = 4', isCorrect: false },
      { expression: '1 × 3 = 3', isCorrect: false },
      { expression: '2 × 3 = 6', isCorrect: false }
    ],
    explanation: 'There is 1 group with 2 satellites, so 1 × 2 = 2',
    theme: THEMES[2],
    groupNames: ['Orbit Zone']
  },
  {
    id: 7,
    groups: 5,
    itemsPerGroup: 5,
    objectType: '🌠',
    question: 'Count the shooting star groups. Which multiplication fact shows the total?',
    options: [
      { expression: '5 × 5 = 25', isCorrect: true },
      { expression: '5 × 4 = 20', isCorrect: false },
      { expression: '4 × 4 = 16', isCorrect: false },
      { expression: '4 × 5 = 20', isCorrect: false }
    ],
    explanation: 'There are 5 groups with 5 shooting stars in each group, so 5 × 5 = 25',
    theme: THEMES[0],
    groupNames: ['Meteor 1', 'Meteor 2', 'Meteor 3', 'Meteor 4', 'Meteor 5']
  },
  {
    id: 8,
    groups: 2,
    itemsPerGroup: 4,
    objectType: '🌍',
    question: 'Which multiplication fact matches these planet groups?',
    options: [
      { expression: '2 × 4 = 8', isCorrect: true },
      { expression: '3 × 3 = 9', isCorrect: false },
      { expression: '2 × 3 = 6', isCorrect: false },
      { expression: '3 × 2 = 6', isCorrect: false }
    ],
    explanation: 'There are 2 groups with 4 planets in each group, so 2 × 4 = 8',
    theme: THEMES[1],
    groupNames: ['Solar System 1', 'Solar System 2']
  },
  {
    id: 9,
    groups: 4,
    itemsPerGroup: 3,
    objectType: '☄️',
    question: 'Find the multiplication fact that matches these comet groups.',
    options: [
      { expression: '4 × 3 = 12', isCorrect: true },
      { expression: '3 × 3 = 9', isCorrect: false },
      { expression: '4 × 2 = 8', isCorrect: false },
      { expression: '2 × 4 = 8', isCorrect: false }
    ],
    explanation: 'There are 4 groups with 3 comets in each group, so 4 × 3 = 12',
    theme: THEMES[2],
    groupNames: ['Orbit 1', 'Orbit 2', 'Orbit 3', 'Orbit 4']
  },
  {
    id: 10,
    groups: 3,
    itemsPerGroup: 5,
    objectType: '🌎',
    question: 'Choose the multiplication fact that shows the total number of planets.',
    options: [
      { expression: '3 × 5 = 15', isCorrect: true },
      { expression: '5 × 2 = 10', isCorrect: false },
      { expression: '3 × 4 = 12', isCorrect: false },
      { expression: '4 × 3 = 12', isCorrect: false }
    ],
    explanation: 'There are 3 groups with 5 planets in each group, so 3 × 5 = 15',
    theme: THEMES[0],
    groupNames: ['System 1', 'System 2', 'System 3']
  }
];

const MultiplicationSpaceWorksheet: React.FC = () => {
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
      'Out of this world! ',
      'Stellar work! ',
      'Cosmic success! ',
      'Astronomical! '
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
      speakText("Mission accomplished! You've completed all the space multiplication problems!");
    }
    setIsTransitioning(false);
  };

  const handleOptionSelect = async ({ markCorrect, markIncorrect, markAttempted }: {
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }, option: string) => {
    if (isTransitioning) return;

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
      await speakText("Try again! Count the groups and items carefully.");
      // Reset selection after a short delay to allow for retry
      setTimeout(() => {
        setSelectedOption(null);
        setIsAnswerCorrect(null);
      }, 1500);
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
                    disabled={isTransitioning || (!!selectedOption && !!isAnswerCorrect)}
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
                        ? 'bg-indigo-100 text-indigo-700'
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
                        <p className="text-lg font-bold">🚀 Mission Accomplished! 🚀</p>
                        <p>You've completed all the space multiplication problems!</p>
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

export default MultiplicationSpaceWorksheet; 
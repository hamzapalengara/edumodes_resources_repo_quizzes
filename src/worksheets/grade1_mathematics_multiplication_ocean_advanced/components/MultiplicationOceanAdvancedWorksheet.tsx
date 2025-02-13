import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Enhanced theme colors with gradients and ocean-inspired designs
const THEMES = [
  {
    name: 'Coral Reef',
    background: 'from-cyan-900 via-blue-900 to-cyan-900',
    accent: 'cyan',
    containerBg: 'bg-cyan-800',
    borderColor: 'border-cyan-500',
    textColor: 'text-cyan-400',
    glowEffect: 'shadow-lg shadow-cyan-500/50'
  },
  {
    name: 'Deep Ocean',
    background: 'from-blue-900 via-indigo-900 to-blue-900',
    accent: 'blue',
    containerBg: 'bg-blue-900',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-400',
    glowEffect: 'shadow-lg shadow-blue-500/50'
  },
  {
    name: 'Tropical Waters',
    background: 'from-teal-900 via-emerald-900 to-teal-900',
    accent: 'teal',
    containerBg: 'bg-teal-900',
    borderColor: 'border-teal-500',
    textColor: 'text-teal-400',
    glowEffect: 'shadow-lg shadow-teal-500/50'
  }
];

// Advanced multiplication questions with engaging ocean themes
const MULTIPLICATION_QUESTIONS = [
  {
    id: 1,
    groups: 6,
    itemsPerGroup: 8,
    objectType: '🐠',
    question: 'Ocean explorer, count the tropical fish schools! How many fish in total?',
    options: [
      { expression: '6 × 8 = 48', isCorrect: true },
      { expression: '8 × 7 = 56', isCorrect: false },
      { expression: '6 × 7 = 42', isCorrect: false },
      { expression: '7 × 8 = 56', isCorrect: false }
    ],
    explanation: 'Marine survey confirms: 6 schools with 8 fish each equals 6 × 8 = 48 fish!',
    theme: THEMES[0],
    groupNames: ['Reef 1', 'Reef 2', 'Reef 3', 'Reef 4', 'Reef 5', 'Reef 6']
  },
  {
    id: 2,
    groups: 7,
    itemsPerGroup: 7,
    objectType: '🐟',
    question: 'Alert! Count the fish in each coral formation!',
    options: [
      { expression: '7 × 7 = 49', isCorrect: true },
      { expression: '7 × 6 = 42', isCorrect: false },
      { expression: '8 × 6 = 48', isCorrect: false },
      { expression: '6 × 8 = 48', isCorrect: false }
    ],
    explanation: 'Coral survey shows 7 formations with 7 fish each, totaling 7 × 7 = 49 fish!',
    theme: THEMES[1],
    groupNames: ['Coral A', 'Coral B', 'Coral C', 'Coral D', 'Coral E', 'Coral F', 'Coral G']
  },
  {
    id: 3,
    groups: 8,
    itemsPerGroup: 6,
    objectType: '🐋',
    question: 'Whale pod report! Count whales in our observation zones!',
    options: [
      { expression: '8 × 6 = 48', isCorrect: true },
      { expression: '6 × 7 = 42', isCorrect: false },
      { expression: '7 × 7 = 49', isCorrect: false },
      { expression: '8 × 7 = 56', isCorrect: false }
    ],
    explanation: 'Sonar confirms 8 zones with 6 whales each, totaling 8 × 6 = 48 whales!',
    theme: THEMES[2],
    groupNames: ['Pod 1', 'Pod 2', 'Pod 3', 'Pod 4', 'Pod 5', 'Pod 6', 'Pod 7', 'Pod 8']
  },
  {
    id: 4,
    groups: 9,
    itemsPerGroup: 5,
    objectType: '🐢',
    question: 'Sea turtle clusters spotted! Calculate total turtles!',
    options: [
      { expression: '9 × 5 = 45', isCorrect: true },
      { expression: '8 × 6 = 48', isCorrect: false },
      { expression: '7 × 6 = 42', isCorrect: false },
      { expression: '9 × 6 = 54', isCorrect: false }
    ],
    explanation: 'Drone survey shows 9 clusters with 5 turtles each, totaling 9 × 5 = 45 turtles!',
    theme: THEMES[0],
    groupNames: ['Bay 1', 'Bay 2', 'Bay 3', 'Bay 4', 'Bay 5', 'Bay 6', 'Bay 7', 'Bay 8', 'Bay 9']
  },
  {
    id: 5,
    groups: 6,
    itemsPerGroup: 9,
    objectType: '🦈',
    question: 'Shark observation alert! Count sharks in each zone!',
    options: [
      { expression: '6 × 9 = 54', isCorrect: true },
      { expression: '9 × 5 = 45', isCorrect: false },
      { expression: '7 × 8 = 56', isCorrect: false },
      { expression: '8 × 7 = 56', isCorrect: false }
    ],
    explanation: 'Research team tracking 6 zones with 9 sharks each, totaling 6 × 9 = 54 sharks!',
    theme: THEMES[1],
    groupNames: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6']
  },
  {
    id: 6,
    groups: 8,
    itemsPerGroup: 8,
    objectType: '🐡',
    question: 'Pufferfish count in progress! Calculate total observed!',
    options: [
      { expression: '8 × 8 = 64', isCorrect: true },
      { expression: '7 × 9 = 63', isCorrect: false },
      { expression: '8 × 7 = 56', isCorrect: false },
      { expression: '9 × 7 = 63', isCorrect: false }
    ],
    explanation: 'Marine survey reveals 8 areas with 8 pufferfish each, totaling 8 × 8 = 64 pufferfish!',
    theme: THEMES[2],
    groupNames: ['Area α', 'Area β', 'Area γ', 'Area δ', 'Area ε', 'Area ζ', 'Area η', 'Area θ']
  },
  {
    id: 7,
    groups: 7,
    itemsPerGroup: 9,
    objectType: '🐬',
    question: 'Dolphin pod discovery! Count dolphins in each group!',
    options: [
      { expression: '7 × 9 = 63', isCorrect: true },
      { expression: '8 × 8 = 64', isCorrect: false },
      { expression: '9 × 6 = 54', isCorrect: false },
      { expression: '6 × 9 = 54', isCorrect: false }
    ],
    explanation: 'Sonar detects 7 pods with 9 dolphins each, totaling 7 × 9 = 63 dolphins!',
    theme: THEMES[0],
    groupNames: ['Pod I', 'Pod II', 'Pod III', 'Pod IV', 'Pod V', 'Pod VI', 'Pod VII']
  },
  {
    id: 8,
    groups: 9,
    itemsPerGroup: 7,
    objectType: '🦑',
    question: 'Squid gathering observed! Count squids in each group!',
    options: [
      { expression: '9 × 7 = 63', isCorrect: true },
      { expression: '7 × 8 = 56', isCorrect: false },
      { expression: '8 × 8 = 64', isCorrect: false },
      { expression: '9 × 6 = 54', isCorrect: false }
    ],
    explanation: 'Deep sea cameras show 9 groups with 7 squids each, totaling 9 × 7 = 63 squids!',
    theme: THEMES[1],
    groupNames: ['Deep 1', 'Deep 2', 'Deep 3', 'Deep 4', 'Deep 5', 'Deep 6', 'Deep 7', 'Deep 8', 'Deep 9']
  },
  {
    id: 9,
    groups: 9,
    itemsPerGroup: 8,
    objectType: '🐙',
    question: 'Octopus colony alert! Calculate total octopi observed!',
    options: [
      { expression: '9 × 8 = 72', isCorrect: true },
      { expression: '8 × 8 = 64', isCorrect: false },
      { expression: '9 × 7 = 63', isCorrect: false },
      { expression: '7 × 9 = 63', isCorrect: false }
    ],
    explanation: 'Research confirms 9 colonies with 8 octopi each, totaling 9 × 8 = 72 octopi!',
    theme: THEMES[2],
    groupNames: ['Cave 1', 'Cave 2', 'Cave 3', 'Cave 4', 'Cave 5', 'Cave 6', 'Cave 7', 'Cave 8', 'Cave 9']
  },
  {
    id: 10,
    groups: 9,
    itemsPerGroup: 9,
    objectType: '🦐',
    question: 'Final mission! Count all shrimp in the reef sectors!',
    options: [
      { expression: '9 × 9 = 81', isCorrect: true },
      { expression: '9 × 8 = 72', isCorrect: false },
      { expression: '8 × 9 = 72', isCorrect: false },
      { expression: '8 × 8 = 64', isCorrect: false }
    ],
    explanation: 'Mission complete! Found 9 sectors with 9 shrimp each, totaling 9 × 9 = 81 shrimp!',
    theme: THEMES[0],
    groupNames: ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 6', 'Sector 7', 'Sector 8', 'Sector 9']
  }
];

const MultiplicationOceanAdvancedWorksheet: React.FC = () => {
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
      'Ocean-tastic! ',
      'Splashing success! ',
      'Deep sea brilliance! ',
      'Marine mastery! '
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
      speakText("Mission accomplished, Ocean Explorer! You've mastered advanced marine multiplication!");
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

      await speakText(getSuccessFeedback());
      moveToNextQuestion();
    } else {
      markIncorrect();
      setIsAnswerCorrect(false);
      await speakText("Try again, Ocean Explorer! Count your sea creatures carefully.");
      setTimeout(() => {
        setSelectedOption(null);
        setIsAnswerCorrect(null);
      }, 1500);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

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
              className={`bg-black/30 backdrop-blur-lg p-4 rounded-xl ${currentTheme.glowEffect} mb-4`}
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
              className={`bg-black/30 backdrop-blur-lg rounded-xl p-4 ${currentTheme.glowEffect} mb-6`}
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
                    className={`bg-black/40 p-4 rounded-xl border-2 ${currentTheme.borderColor} ${currentTheme.glowEffect}`}
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
                    className={`p-4 rounded-xl text-lg font-semibold transition-all ${currentTheme.glowEffect}
                      ${selectedOption === option.expression
                        ? option.isCorrect
                          ? 'bg-green-900 border-2 border-green-500 text-green-400'
                          : 'bg-red-900 border-2 border-red-500 text-red-400'
                        : `bg-black/40 border-2 ${currentTheme.borderColor} ${currentTheme.textColor} hover:bg-black/60`
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
                    className={`mt-4 p-3 rounded-lg text-center ${currentTheme.glowEffect} ${
                      isComplete 
                        ? 'bg-cyan-900/60 text-cyan-300'
                        : isAnswerCorrect 
                          ? 'bg-green-900/60 text-green-300' 
                          : 'bg-red-900/60 text-red-300'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    {isComplete ? (
                      <div className="space-y-2">
                        <p className="text-lg font-bold">🌊 Ocean Mission Complete! 🌊</p>
                        <p>You've mastered advanced marine multiplication!</p>
                      </div>
                    ) : (
                      <p>
                        {isAnswerCorrect
                          ? currentProblem.explanation
                          : 'Try again, Ocean Explorer! Count your sea creatures carefully.'}
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
                colors={['#67e8f9', '#22d3ee', '#06b6d4', '#0891b2']}
              />
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default MultiplicationOceanAdvancedWorksheet; 
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Enhanced theme colors with gradients and space-inspired designs
const THEMES = [
  {
    name: 'Deep Space',
    background: 'from-slate-900 via-purple-900 to-slate-900',
    accent: 'purple',
    containerBg: 'bg-slate-800',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-400',
    glowEffect: 'shadow-lg shadow-purple-500/50'
  },
  {
    name: 'Nebula',
    background: 'from-pink-900 via-fuchsia-900 to-pink-900',
    accent: 'fuchsia',
    containerBg: 'bg-pink-900',
    borderColor: 'border-fuchsia-500',
    textColor: 'text-fuchsia-400',
    glowEffect: 'shadow-lg shadow-fuchsia-500/50'
  },
  {
    name: 'Cosmic',
    background: 'from-blue-900 via-cyan-900 to-blue-900',
    accent: 'cyan',
    containerBg: 'bg-blue-900',
    borderColor: 'border-cyan-500',
    textColor: 'text-cyan-400',
    glowEffect: 'shadow-lg shadow-cyan-500/50'
  }
];

// Advanced multiplication questions with engaging space themes
const MULTIPLICATION_QUESTIONS = [
  {
    id: 1,
    groups: 6,
    itemsPerGroup: 8,
    objectType: '🚀',
    question: 'Commander, count the rocket squadrons! How many rockets in total?',
    options: [
      { expression: '6 × 8 = 48', isCorrect: true },
      { expression: '8 × 7 = 56', isCorrect: false },
      { expression: '6 × 7 = 42', isCorrect: false },
      { expression: '7 × 8 = 56', isCorrect: false }
    ],
    explanation: 'Mission Control confirms: 6 squadrons with 8 rockets each equals 6 × 8 = 48 rockets!',
    theme: THEMES[0],
    groupNames: ['Alpha Squad', 'Beta Squad', 'Gamma Squad', 'Delta Squad', 'Epsilon Squad', 'Omega Squad']
  },
  {
    id: 2,
    groups: 7,
    itemsPerGroup: 7,
    objectType: '👾',
    question: 'Alert! Space invaders approaching in formation! Calculate their numbers!',
    options: [
      { expression: '7 × 7 = 49', isCorrect: true },
      { expression: '7 × 6 = 42', isCorrect: false },
      { expression: '8 × 6 = 48', isCorrect: false },
      { expression: '6 × 8 = 48', isCorrect: false }
    ],
    explanation: 'Defense scan shows 7 waves with 7 invaders each, totaling 7 × 7 = 49 invaders!',
    theme: THEMES[1],
    groupNames: ['Wave 1', 'Wave 2', 'Wave 3', 'Wave 4', 'Wave 5', 'Wave 6', 'Wave 7']
  },
  {
    id: 3,
    groups: 8,
    itemsPerGroup: 6,
    objectType: '🛸',
    question: 'Space fleet report! Count the UFOs in our surveillance zones!',
    options: [
      { expression: '8 × 6 = 48', isCorrect: true },
      { expression: '6 × 7 = 42', isCorrect: false },
      { expression: '7 × 7 = 49', isCorrect: false },
      { expression: '8 × 7 = 56', isCorrect: false }
    ],
    explanation: 'Radar confirms 8 zones with 6 UFOs each, totaling 8 × 6 = 48 UFOs!',
    theme: THEMES[2],
    groupNames: ['Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E', 'Zone F', 'Zone G', 'Zone H']
  },
  {
    id: 4,
    groups: 9,
    itemsPerGroup: 5,
    objectType: '💫',
    question: 'Stellar clusters detected! Calculate total stars in view!',
    options: [
      { expression: '9 × 5 = 45', isCorrect: true },
      { expression: '8 × 6 = 48', isCorrect: false },
      { expression: '7 × 6 = 42', isCorrect: false },
      { expression: '9 × 6 = 54', isCorrect: false }
    ],
    explanation: 'Telescope data shows 9 clusters with 5 stars each, totaling 9 × 5 = 45 stars!',
    theme: THEMES[0],
    groupNames: ['Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Cluster 5', 'Cluster 6', 'Cluster 7', 'Cluster 8', 'Cluster 9']
  },
  {
    id: 5,
    groups: 6,
    itemsPerGroup: 9,
    objectType: '🌠',
    question: 'Meteor shower alert! Count incoming meteors in each sector!',
    options: [
      { expression: '6 × 9 = 54', isCorrect: true },
      { expression: '9 × 5 = 45', isCorrect: false },
      { expression: '7 × 8 = 56', isCorrect: false },
      { expression: '8 × 7 = 56', isCorrect: false }
    ],
    explanation: 'Radar tracking 6 sectors with 9 meteors each, totaling 6 × 9 = 54 meteors!',
    theme: THEMES[1],
    groupNames: ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 6']
  },
  {
    id: 6,
    groups: 8,
    itemsPerGroup: 8,
    objectType: '🌌',
    question: 'Galaxy mapping in progress! Calculate total nebulae observed!',
    options: [
      { expression: '8 × 8 = 64', isCorrect: true },
      { expression: '7 × 9 = 63', isCorrect: false },
      { expression: '8 × 7 = 56', isCorrect: false },
      { expression: '9 × 7 = 63', isCorrect: false }
    ],
    explanation: 'Deep space scan reveals 8 regions with 8 nebulae each, totaling 8 × 8 = 64 nebulae!',
    theme: THEMES[2],
    groupNames: ['Region α', 'Region β', 'Region γ', 'Region δ', 'Region ε', 'Region ζ', 'Region η', 'Region θ']
  },
  {
    id: 7,
    groups: 7,
    itemsPerGroup: 9,
    objectType: '🌍',
    question: 'Exoplanet discovery! Count habitable planets in each solar system!',
    options: [
      { expression: '7 × 9 = 63', isCorrect: true },
      { expression: '8 × 8 = 64', isCorrect: false },
      { expression: '9 × 6 = 54', isCorrect: false },
      { expression: '6 × 9 = 54', isCorrect: false }
    ],
    explanation: 'Telescope array detects 7 systems with 9 planets each, totaling 7 × 9 = 63 planets!',
    theme: THEMES[0],
    groupNames: ['System I', 'System II', 'System III', 'System IV', 'System V', 'System VI', 'System VII']
  },
  {
    id: 8,
    groups: 9,
    itemsPerGroup: 7,
    objectType: '🛰️',
    question: 'Satellite deployment check! Count satellites in each orbital path!',
    options: [
      { expression: '9 × 7 = 63', isCorrect: true },
      { expression: '7 × 8 = 56', isCorrect: false },
      { expression: '8 × 8 = 64', isCorrect: false },
      { expression: '9 × 6 = 54', isCorrect: false }
    ],
    explanation: 'Orbital scan shows 9 paths with 7 satellites each, totaling 9 × 7 = 63 satellites!',
    theme: THEMES[1],
    groupNames: ['Orbit 1', 'Orbit 2', 'Orbit 3', 'Orbit 4', 'Orbit 5', 'Orbit 6', 'Orbit 7', 'Orbit 8', 'Orbit 9']
  },
  {
    id: 9,
    groups: 9,
    itemsPerGroup: 8,
    objectType: '🌟',
    question: 'Supernova alert! Calculate total bright stars about to explode!',
    options: [
      { expression: '9 × 8 = 72', isCorrect: true },
      { expression: '8 × 8 = 64', isCorrect: false },
      { expression: '9 × 7 = 63', isCorrect: false },
      { expression: '7 × 9 = 63', isCorrect: false }
    ],
    explanation: 'Observatory confirms 9 regions with 8 supernovas each, totaling 9 × 8 = 72 stars!',
    theme: THEMES[2],
    groupNames: ['Nova 1', 'Nova 2', 'Nova 3', 'Nova 4', 'Nova 5', 'Nova 6', 'Nova 7', 'Nova 8', 'Nova 9']
  },
  {
    id: 10,
    groups: 9,
    itemsPerGroup: 9,
    objectType: '🌎',
    question: 'Final mission! Count all Earth-like planets in the cosmic sectors!',
    options: [
      { expression: '9 × 9 = 81', isCorrect: true },
      { expression: '9 × 8 = 72', isCorrect: false },
      { expression: '8 × 9 = 72', isCorrect: false },
      { expression: '8 × 8 = 64', isCorrect: false }
    ],
    explanation: 'Mission complete! Found 9 sectors with 9 Earth-like planets each, totaling 9 × 9 = 81 planets!',
    theme: THEMES[0],
    groupNames: ['Sector Alpha', 'Sector Beta', 'Sector Gamma', 'Sector Delta', 'Sector Epsilon', 'Sector Zeta', 'Sector Eta', 'Sector Theta', 'Sector Omega']
  }
];

const MultiplicationSpaceAdvancedWorksheet: React.FC = () => {
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
      'Cosmic success! ',
      'Stellar achievement! ',
      'Astronomical brilliance! ',
      'Intergalactic genius! '
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
      speakText("Mission accomplished, Space Commander! You've mastered advanced cosmic multiplication!");
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
      await speakText("Recalculate, Space Cadet! Check your cosmic groups carefully.");
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
                        ? 'bg-purple-900/60 text-purple-300'
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
                        <p className="text-lg font-bold">🚀 Space Mission Complete! 🚀</p>
                        <p>You've mastered advanced cosmic multiplication!</p>
                      </div>
                    ) : (
                      <p>
                        {isAnswerCorrect
                          ? currentProblem.explanation
                          : 'Recalculate, Space Cadet! Check your cosmic groups carefully.'}
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

export default MultiplicationSpaceAdvancedWorksheet; 
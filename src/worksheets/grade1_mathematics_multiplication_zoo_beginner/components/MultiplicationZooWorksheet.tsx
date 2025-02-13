import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Theme colors for different zoo areas
const THEMES = [
  {
    name: 'Savanna',
    background: 'from-amber-50 via-yellow-50 to-orange-50',
    accent: 'amber',
    containerBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600'
  },
  {
    name: 'Jungle',
    background: 'from-emerald-50 via-green-50 to-teal-50',
    accent: 'emerald',
    containerBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600'
  },
  {
    name: 'Arctic',
    background: 'from-blue-50 via-sky-50 to-indigo-50',
    accent: 'blue',
    containerBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600'
  }
];

// Multiplication questions with zoo context
const MULTIPLICATION_QUESTIONS = [
  {
    id: 1,
    groups: 3,
    itemsPerGroup: 2,
    objectType: '🦁',
    question: 'There are 3 lion enclosures, with 2 lions in each enclosure. How many lions in total?',
    hint: 'Count all the lions in each enclosure.',
    audioHints: [
      "Let's count the lions in each enclosure.",
      "Count enclosure by enclosure: 2, then 2 more, then 2 more.",
      "Remember, we're finding the total number of lions."
    ],
    theme: THEMES[0],
    groupNames: ['Savanna 1', 'Savanna 2', 'Savanna 3']
  },
  {
    id: 2,
    groups: 4,
    itemsPerGroup: 3,
    objectType: '🐒',
    question: 'Each monkey habitat has 3 monkeys. How many monkeys are there in 4 habitats?',
    hint: 'Count all the monkeys in all habitats.',
    audioHints: [
      "Let's count the monkeys in each habitat.",
      "Count habitat by habitat: 3, then 3 more, then 3 more, then 3 more.",
      "Add up all the monkeys to find the total."
    ],
    theme: THEMES[1],
    groupNames: ['Jungle 1', 'Jungle 2', 'Jungle 3', 'Jungle 4']
  },
  {
    id: 3,
    groups: 2,
    itemsPerGroup: 4,
    objectType: '🐧',
    question: 'Each penguin pool has 4 penguins. How many penguins are there in 2 pools?',
    hint: 'Count the penguins in both pools.',
    audioHints: [
      "Let's count the penguins in each pool.",
      "Count pool by pool: 4, then 4 more.",
      "Add all the penguins together."
    ],
    theme: THEMES[2],
    groupNames: ['Pool 1', 'Pool 2']
  },
  {
    id: 4,
    groups: 5,
    itemsPerGroup: 2,
    objectType: '🦒',
    question: 'Each giraffe area has 2 giraffes. How many giraffes are there in 5 areas?',
    hint: 'Count the giraffes in all areas.',
    audioHints: [
      "Let's count the giraffes in each area.",
      "Count area by area: 2, then 2 more, then 2 more, then 2 more, then 2 more.",
      "Add all the giraffes to find the total."
    ],
    theme: THEMES[0],
    groupNames: ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5']
  },
  {
    id: 5,
    groups: 3,
    itemsPerGroup: 3,
    objectType: '🦍',
    question: 'Each gorilla sanctuary has 3 gorillas. How many gorillas are there in 3 sanctuaries?',
    hint: 'Count the gorillas in all sanctuaries.',
    audioHints: [
      "Let's count the gorillas in each sanctuary.",
      "Count sanctuary by sanctuary: 3, then 3 more, then 3 more.",
      "Add all the gorillas to find the total."
    ],
    theme: THEMES[1],
    groupNames: ['Sanctuary 1', 'Sanctuary 2', 'Sanctuary 3']
  }
];

const MultiplicationZooWorksheet: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isComplete, setIsComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentProblem = MULTIPLICATION_QUESTIONS[currentQuestion];
  const currentTheme = currentProblem.theme;

  useEffect(() => {
    // Speak initial question
    speakText(currentProblem.question);
    
    // Set up interval for hints
    const hintInterval = setInterval(() => {
      speakHint();
    }, 20000); // Give hint every 20 seconds if still working

    return () => clearInterval(hintInterval);
  }, [currentQuestion]);

  const speakText = (text: string) => {
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

  const speakHint = () => {
    const hints = currentProblem.audioHints;
    speakText(hints[currentHintIndex]);
    setCurrentHintIndex((prev) => (prev + 1) % hints.length);
  };

  const handleAnswerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, '');
    setUserAnswer(value);
  };

  const getSuccessFeedback = () => {
    const phrases = [
      `Excellent! That's correct!`,
      `Great job! You got it right!`,
      `Perfect! Well done!`,
      `Amazing work! That's the right answer!`
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const checkAnswer = async ({ markCorrect, markIncorrect, markAttempted }: { 
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }) => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    
    markAttempted();
    const correctAnswer = currentProblem.groups * currentProblem.itemsPerGroup;
    const userAnswerNum = parseInt(userAnswer);

    if (userAnswerNum === correctAnswer) {
      setIsTransitioning(true);
      markCorrect();
      setIsAnswerCorrect(true);
      setShowCelebration(true);
      
      // Only provide voice feedback if not the last question
      if (currentQuestion < MULTIPLICATION_QUESTIONS.length - 1) {
        speakText(getSuccessFeedback());
      }

      setTimeout(() => {
        setShowCelebration(false);
        if (currentQuestion < MULTIPLICATION_QUESTIONS.length - 1) {
          setIsAnswerCorrect(null);
          setCurrentQuestion(prev => prev + 1);
          setCurrentHintIndex(0);
          setUserAnswer('');
        } else {
          // Handle worksheet completion
          setIsComplete(true);
          speakText("Congratulations! You've completed all the zoo multiplication problems!");
        }
        setIsTransitioning(false);
      }, 2000);
    } else {
      markIncorrect();
      setIsAnswerCorrect(false);
      speakText("Try again! Count the groups and animals carefully.");
    }
  };

  const resetQuestion = () => {
    setIsAnswerCorrect(null);
    setCurrentHintIndex(0);
    setUserAnswer('');
    speakText("Let's try again! " + currentProblem.question);
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

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
            <motion.div
              className={`bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-4`}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <ScoreDisplay 
                score={score}
                totalQuestions={MULTIPLICATION_QUESTIONS.length * 10}
              />
            </motion.div>

            <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-6`}>
              <motion.h2 
                className={`text-xl font-bold text-center ${currentTheme.textColor} mb-4`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {currentProblem.question}
              </motion.h2>
              
              <div className={`text-center ${currentTheme.textColor} mb-4`}>
                {currentProblem.hint}
              </div>

              {/* Groups Display */}
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
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: currentProblem.itemsPerGroup }).map((_, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="text-2xl"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: (groupIndex * currentProblem.itemsPerGroup + itemIndex) * 0.1,
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

              {/* Multiplication Formula Input */}
              <div className="mb-6 p-4 bg-white rounded-xl shadow-sm">
                <h3 className={`text-lg font-semibold ${currentTheme.textColor} mb-4 text-center`}>
                  Complete the Multiplication Formula
                </h3>
                <div className="flex items-center justify-center gap-4 text-2xl">
                  <span className={`font-bold ${currentTheme.textColor}`}>
                    {currentProblem.groups}
                  </span>
                  <span className={`font-bold ${currentTheme.textColor}`}>×</span>
                  <span className={`font-bold ${currentTheme.textColor}`}>
                    {currentProblem.itemsPerGroup}
                  </span>
                  <span className={`font-bold ${currentTheme.textColor}`}>=</span>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={handleAnswerInput}
                    className={`w-16 h-12 text-center border-2 ${currentTheme.borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-${currentTheme.accent}-400`}
                    placeholder="?"
                  />
                </div>
                <p className={`text-center mt-2 ${currentTheme.textColor} text-sm`}>
                  Fill in the total number of {currentProblem.objectType}
                </p>
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
                        <p>You've completed all the zoo multiplication problems!</p>
                        <p className="text-sm">You're a zoo multiplication expert!</p>
                      </div>
                    ) : (
                      isAnswerCorrect
                        ? `Great job! ${currentProblem.groups} × ${currentProblem.itemsPerGroup} = ${
                            currentProblem.groups * currentProblem.itemsPerGroup
                          }`
                        : 'Try again! Count all the animals carefully.'
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4">
                {!isComplete && (
                  <>
                    <motion.button
                      onClick={() => checkAnswer({ markCorrect, markIncorrect, markAttempted })}
                      className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg text-sm sm:text-base disabled:opacity-50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isTransitioning}
                    >
                      Check Answer
                    </motion.button>
                    <motion.button
                      className="w-full sm:w-auto px-6 py-3 text-white rounded-full font-semibold shadow-lg text-sm sm:text-base disabled:opacity-50"
                      style={{
                        background: 'linear-gradient(to right, rgb(107, 114, 128), rgb(75, 85, 99))'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetQuestion}
                      disabled={isTransitioning}
                    >
                      Reset
                    </motion.button>
                    <motion.button
                      className={`w-full sm:w-auto px-6 py-3 bg-white border-2 ${currentTheme.borderColor} ${currentTheme.textColor} rounded-full font-semibold shadow-lg text-sm sm:text-base disabled:opacity-50`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={speakHint}
                      disabled={isTransitioning}
                    >
                      Need a Hint? 💡
                    </motion.button>
                  </>
                )}
              </div>
            </div>

            {/* Celebration Animation */}
            {showCelebration && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={200}
                colors={[
                  '#F59E0B', // Amber
                  '#10B981', // Emerald
                  '#3B82F6', // Blue
                  '#FCD34D', // Yellow
                  '#F472B6', // Pink
                ]}
              />
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default MultiplicationZooWorksheet; 
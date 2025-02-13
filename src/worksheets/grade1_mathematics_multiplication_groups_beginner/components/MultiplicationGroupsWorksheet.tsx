import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Theme colors for different questions
const THEMES = [
  {
    name: 'Food',
    background: 'from-amber-50 via-yellow-50 to-orange-50',
    accent: 'amber',
    containerBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600'
  },
  {
    name: 'Garden',
    background: 'from-emerald-50 via-green-50 to-teal-50',
    accent: 'emerald',
    containerBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600'
  },
  {
    name: 'Toys',
    background: 'from-pink-50 via-rose-50 to-red-50',
    accent: 'rose',
    containerBg: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-600'
  }
];

// Multiplication questions with story context
const MULTIPLICATION_QUESTIONS = [
  {
    id: 1,
    groups: 3,
    itemsPerGroup: 4,
    objectType: '🍎',
    question: 'There are 3 baskets, and each basket has 4 apples. How many apples in total?',
    hint: 'Count all the apples in each basket and add them together.',
    audioHints: [
      "Let's count the apples in each basket.",
      "Count basket by basket: 4, then 4 more, then 4 more.",
      "Remember, we're finding the total of all apples."
    ],
    theme: THEMES[0],
    groupNames: ['Basket 1', 'Basket 2', 'Basket 3']
  },
  {
    id: 2,
    groups: 2,
    itemsPerGroup: 5,
    objectType: '🌸',
    question: 'Each garden has 5 flowers. How many flowers are there in 2 gardens?',
    hint: 'Count all the flowers in both gardens.',
    audioHints: [
      "Let's count the flowers in each garden.",
      "Count garden by garden: 5, then 5 more.",
      "Add up all the flowers to find the total."
    ],
    theme: THEMES[1],
    groupNames: ['Garden 1', 'Garden 2']
  },
  {
    id: 3,
    groups: 4,
    itemsPerGroup: 2,
    objectType: '🎈',
    question: 'Each child has 2 balloons. How many balloons do 4 children have?',
    hint: 'Count how many balloons each child has, then find the total.',
    audioHints: [
      "Let's count the balloons for each child.",
      "Count child by child: 2, then 2 more, then 2 more, then 2 more.",
      "Add all the balloons together."
    ],
    theme: THEMES[2],
    groupNames: ['Tom', 'Lisa', 'Maya', 'Jack']
  },
  {
    id: 4,
    groups: 3,
    itemsPerGroup: 3,
    objectType: '🍕',
    question: 'Each plate has 3 pizza slices. How many slices are on 3 plates?',
    hint: 'Count the pizza slices on each plate and add them all up.',
    audioHints: [
      "Let's count the pizza slices on each plate.",
      "Count plate by plate: 3, then 3 more, then 3 more.",
      "Add all the slices to find the total."
    ],
    theme: THEMES[0],
    groupNames: ['Plate 1', 'Plate 2', 'Plate 3']
  },
  {
    id: 5,
    groups: 2,
    itemsPerGroup: 3,
    objectType: '🎁',
    question: 'Each sister got 3 presents. How many presents did 2 sisters get?',
    hint: 'Count the presents each sister got, then add them together.',
    audioHints: [
      "Let's count the presents for each sister.",
      "Count sister by sister: 3, then 3 more.",
      "Add all the presents to find the total."
    ],
    theme: THEMES[2],
    groupNames: ['Emma', 'Lucy']
  }
];

const MultiplicationGroupsWorksheet: React.FC = () => {
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

  const checkAnswer = async ({ markCorrect, markIncorrect, markAttempted }: { 
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }) => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    
    markAttempted();
    const correctAnswer = currentProblem.groups * currentProblem.itemsPerGroup;
    const isCorrect = parseInt(userAnswer) === correctAnswer;

    if (isCorrect) {
      setIsTransitioning(true);
      markCorrect();
      setIsAnswerCorrect(true);
      setShowCelebration(true);
      
      // Create and play the audio feedback
      const utterance = new SpeechSynthesisUtterance(
        `Excellent! ${currentProblem.groups} groups of ${currentProblem.itemsPerGroup} equals ${correctAnswer}!`
      );
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 1;
      
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Return a promise that resolves when speech is complete
      await new Promise<void>((resolve) => {
        utterance.onend = () => {
          setTimeout(() => {
            setShowCelebration(false);
            if (currentQuestion < MULTIPLICATION_QUESTIONS.length - 1) {
              // Reset all states before moving to next question
              setIsAnswerCorrect(null);
              setCurrentQuestion(prev => prev + 1);
              setCurrentHintIndex(0);
              setUserAnswer('');
            } else {
              // Handle worksheet completion
              setIsComplete(true);
              speakText("Congratulations! You've completed all the multiplication problems!");
            }
            setIsTransitioning(false);
            resolve();
          }, 1000);
        };
        window.speechSynthesis.speak(utterance);
      });
    } else {
      markIncorrect();
      setIsAnswerCorrect(false);
      speakText("Not quite right. Try counting all the items again.");
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
                        <p>You've completed all the multiplication problems!</p>
                        <p className="text-sm">Keep practicing to become a multiplication master!</p>
                      </div>
                    ) : (
                      isAnswerCorrect
                        ? `Great job! ${currentProblem.groups} × ${currentProblem.itemsPerGroup} = ${
                            currentProblem.groups * currentProblem.itemsPerGroup
                          }`
                        : 'Try again! Count all the items carefully.'
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
                  '#34D399', // Emerald
                  '#FB7185', // Rose
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

export default MultiplicationGroupsWorksheet; 
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Theme colors for different questions
const THEMES = [
  {
    name: 'Garden',
    background: 'from-green-50 via-emerald-50 to-teal-50',
    accent: 'emerald',
    containerBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600'
  },
  {
    name: 'Sky',
    background: 'from-blue-50 via-sky-50 to-indigo-50',
    accent: 'sky',
    containerBg: 'bg-sky-50',
    borderColor: 'border-sky-200',
    textColor: 'text-sky-600'
  },
  {
    name: 'Sunset',
    background: 'from-orange-50 via-amber-50 to-yellow-50',
    accent: 'amber',
    containerBg: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600'
  },
  {
    name: 'Berry',
    background: 'from-pink-50 via-purple-50 to-fuchsia-50',
    accent: 'purple',
    containerBg: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600'
  },
  {
    name: 'Ocean',
    background: 'from-cyan-50 via-teal-50 to-blue-50',
    accent: 'teal',
    containerBg: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-600'
  }
];

// Division questions with visual objects and audio hints
const DIVISION_QUESTIONS = [
  {
    id: 1,
    totalObjects: 20,
    divisor: 4,
    objectType: '🐰',
    question: 'Help the bunnies form 4 equal groups!',
    hint: 'Count how many bunnies should be in each group.',
    audioHints: [
      "Let's divide 20 bunnies into 4 groups.",
      "Try putting one bunny in each group at a time.",
      "Keep going until all bunnies are in groups!",
      "Each group should have the same number of bunnies."
    ],
    theme: THEMES[0]
  },
  {
    id: 2,
    totalObjects: 12,
    divisor: 3,
    objectType: '⭐️',
    question: 'Sort the stars into 3 equal groups!',
    hint: 'Make sure each group has the same number of stars.',
    audioHints: [
      "We have 12 shining stars to divide into 3 groups.",
      "Place the stars one by one into each group.",
      "Count carefully to make sure each group is equal."
    ],
    theme: THEMES[1]
  },
  {
    id: 3,
    totalObjects: 15,
    divisor: 5,
    objectType: '🌸',
    question: 'Arrange the flowers into 5 equal groups!',
    hint: 'Count carefully to make equal groups of flowers.',
    audioHints: [
      "Time to divide 15 beautiful flowers into 5 groups.",
      "Put one flower in each group, then repeat.",
      "Keep going until all flowers are arranged equally."
    ],
    theme: THEMES[2]
  },
  {
    id: 4,
    totalObjects: 16,
    divisor: 4,
    objectType: '🎈',
    question: 'Put the balloons into 4 equal groups!',
    hint: 'Each group should have the same number of balloons.',
    audioHints: [
      "Let's divide 16 colorful balloons into 4 groups.",
      "One balloon at a time, fill each group equally.",
      "Make sure no group has more balloons than others."
    ],
    theme: THEMES[3]
  },
  {
    id: 5,
    totalObjects: 18,
    divisor: 6,
    objectType: '🍎',
    question: 'Share the apples into 6 equal groups!',
    hint: 'Make sure each group gets the same number of apples.',
    audioHints: [
      "We have 18 apples to share among 6 groups.",
      "Share the apples one by one with each group.",
      "Keep sharing until all groups have the same number."
    ],
    theme: THEMES[4]
  }
];

const DivisionGroupsWorksheet: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userGroups, setUserGroups] = useState<number[][]>(Array(DIVISION_QUESTIONS[0].divisor).fill([]));
  const [showCelebration, setShowCelebration] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [lastClickedGroup, setLastClickedGroup] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');

  const currentProblem = DIVISION_QUESTIONS[currentQuestion];
  const currentTheme = currentProblem.theme;

  const remainingObjects = Array.from(
    { length: currentProblem.totalObjects },
    (_, i) => i
  ).filter(obj => !userGroups.some(group => group.includes(obj)));

  useEffect(() => {
    // Speak initial question
    speakText(currentProblem.question);
    
    // Set up interval for hints
    const hintInterval = setInterval(() => {
      if (remainingObjects.length > 0) {
        speakHint();
      }
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

  const handleObjectClick = (objectId: number) => {
    // Find the next group that needs objects
    let targetGroup = 0;
    const groupSizes = userGroups.map(g => g.length);
    const minSize = Math.min(...groupSizes);
    targetGroup = groupSizes.findIndex(size => size === minSize);

    // Add object to the target group
    const newGroups = [...userGroups];
    newGroups[targetGroup] = [...newGroups[targetGroup], objectId];
    setUserGroups(newGroups);
    setLastClickedGroup(targetGroup);

    // Play a pleasant sound
    const audio = new Audio('/sounds/pop.mp3');
    audio.volume = 0.3;
    audio.play();

    // Speak feedback about the action
    const objectsInGroup = newGroups[targetGroup].length;
    speakText(`Added to group ${targetGroup + 1}. Now it has ${objectsInGroup} ${currentProblem.objectType}`);
  };

  const handleAnswerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, '');
    setUserAnswer(value);
  };

  const checkAnswer = ({ markCorrect, markIncorrect, markAttempted }: { 
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }) => {
    markAttempted();
    const expectedGroupSize = currentProblem.totalObjects / currentProblem.divisor;
    const isCorrect = userGroups.every(group => group.length === expectedGroupSize) && 
                     parseInt(userAnswer) === expectedGroupSize;

    if (isCorrect) {
      markCorrect();
      setIsAnswerCorrect(true);
      setShowCelebration(true);
      
      // Create and play the audio feedback
      const utterance = new SpeechSynthesisUtterance(
        `Excellent! You divided ${currentProblem.totalObjects} into ${currentProblem.divisor} equal groups of ${expectedGroupSize}!`
      );
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 1;
      
      // Only proceed to next question after audio completes
      utterance.onend = () => {
        setTimeout(() => {
          setShowCelebration(false);
          if (currentQuestion < DIVISION_QUESTIONS.length - 1) {
            // Reset all states before moving to next question
            setIsAnswerCorrect(null);
            setCurrentQuestion(prev => prev + 1);
            setUserGroups(Array(DIVISION_QUESTIONS[currentQuestion + 1].divisor).fill([]));
            setCurrentHintIndex(0);
            setUserAnswer('');
            setLastClickedGroup(null);
          }
        }, 1000); // Small delay after audio completes
      };
      
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      window.speechSynthesis.speak(utterance);
    } else {
      markIncorrect();
      setIsAnswerCorrect(false);
      speakText("Not quite right. Check your groups and your division answer.");
    }
  };

  const resetQuestion = () => {
    setUserGroups(Array(currentProblem.divisor).fill([]));
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
        totalQuestions={DIVISION_QUESTIONS.length}
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
                totalQuestions={DIVISION_QUESTIONS.length * 10}
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

              {/* Division Equation Display */}
              <div className={`text-center text-2xl font-bold ${currentTheme.textColor} mb-6`}>
                {currentProblem.totalObjects} ÷ {currentProblem.divisor} = ?
              </div>

              {/* Objects to be grouped */}
              <div className={`${currentTheme.containerBg} p-4 rounded-xl mb-6`}>
                <h3 className={`text-lg font-semibold ${currentTheme.textColor} mb-2`}>
                  Click objects to add them to groups:
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {remainingObjects.map(obj => (
                    <motion.div
                      key={obj}
                      className="text-2xl cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => handleObjectClick(obj)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {currentProblem.objectType}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Groups Container */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {userGroups.map((group, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white p-4 rounded-xl border-2 border-dashed ${currentTheme.borderColor} min-h-[100px]
                      ${lastClickedGroup === index ? 'ring-2 ring-offset-2 ring-' + currentTheme.accent + '-400' : ''}`}
                    animate={{
                      scale: lastClickedGroup === index ? [1, 1.05, 1] : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`text-sm font-semibold ${currentTheme.textColor} mb-2`}>
                      Group {index + 1}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.map(obj => (
                        <motion.div
                          key={obj}
                          className="text-2xl"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
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

              {/* Division Formula Input */}
              <div className="mb-6 p-4 bg-white rounded-xl shadow-sm">
                <h3 className={`text-lg font-semibold ${currentTheme.textColor} mb-4 text-center`}>
                  Complete the Division Formula
                </h3>
                <div className="flex items-center justify-center gap-4 text-2xl">
                  <span className={`font-bold ${currentTheme.textColor}`}>
                    {currentProblem.totalObjects}
                  </span>
                  <span className={`font-bold ${currentTheme.textColor}`}>÷</span>
                  <span className={`font-bold ${currentTheme.textColor}`}>
                    {currentProblem.divisor}
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
                  Fill in the answer to complete the division
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <motion.button
                  onClick={() => checkAnswer({ markCorrect, markIncorrect, markAttempted })}
                  className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check Answer
                </motion.button>
                <motion.button
                  className="px-6 py-2 text-white rounded-full font-semibold shadow-lg"
                  style={{
                    background: 'linear-gradient(to right, rgb(107, 114, 128), rgb(75, 85, 99))'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuestion}
                >
                  Reset
                </motion.button>
                <motion.button
                  className={`px-6 py-2 bg-white border-2 ${currentTheme.borderColor} ${currentTheme.textColor} rounded-full font-semibold shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={speakHint}
                >
                  Need a Hint? 💡
                </motion.button>
              </div>

              {/* Feedback Message */}
              <AnimatePresence>
                {isAnswerCorrect !== null && (
                  <motion.div
                    className={`mt-4 p-3 rounded-lg text-center ${
                      isAnswerCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    {isAnswerCorrect
                      ? `Great job! ${currentProblem.totalObjects} ÷ ${currentProblem.divisor} = ${
                          currentProblem.totalObjects / currentProblem.divisor
                        }`
                      : 'Try again! Check your groups and your division answer.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Celebration Animation */}
            {showCelebration && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={200}
                colors={[
                  '#34D399', // Emerald
                  '#0EA5E9', // Sky
                  '#F59E0B', // Amber
                  '#A855F7', // Purple
                  '#14B8A6', // Teal
                ]}
              />
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default DivisionGroupsWorksheet; 
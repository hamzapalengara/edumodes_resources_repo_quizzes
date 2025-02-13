import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Theme colors for different questions
const THEMES = [
  {
    name: 'Ocean',
    background: 'from-blue-50 via-cyan-50 to-teal-50',
    accent: 'cyan',
    containerBg: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    textColor: 'text-cyan-600'
  },
  {
    name: 'Coral',
    background: 'from-rose-50 via-pink-50 to-orange-50',
    accent: 'rose',
    containerBg: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-600'
  },
  {
    name: 'Seaweed',
    background: 'from-emerald-50 via-green-50 to-teal-50',
    accent: 'emerald',
    containerBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600'
  }
];

// Division questions with sea creatures
const DIVISION_QUESTIONS = [
  {
    id: 1,
    totalObjects: 6,
    divisor: 2,
    objectType: '🐠',
    question: 'Help the fish swim into 2 equal groups!',
    hint: 'Count how many fish should be in each group.',
    audioHints: [
      "Let's divide 6 fish into 2 groups.",
      "Try putting one fish in each group at a time.",
      "Keep going until all fish are in groups!",
      "Each group should have the same number of fish."
    ],
    theme: THEMES[0]
  },
  {
    id: 2,
    totalObjects: 9,
    divisor: 3,
    objectType: '🦀',
    question: 'Sort the crabs into 3 equal groups!',
    hint: 'Make sure each group has the same number of crabs.',
    audioHints: [
      "We have 9 crabs to divide into 3 groups.",
      "Place the crabs one by one into each group.",
      "Count carefully to make sure each group is equal."
    ],
    theme: THEMES[1]
  },
  {
    id: 3,
    totalObjects: 8,
    divisor: 2,
    objectType: '🐋',
    question: 'Guide the whales into 2 equal groups!',
    hint: 'Count carefully to make equal groups of whales.',
    audioHints: [
      "Time to divide 8 whales into 2 groups.",
      "Put one whale in each group, then repeat.",
      "Keep going until all whales are arranged equally."
    ],
    theme: THEMES[2]
  },
  {
    id: 4,
    totalObjects: 10,
    divisor: 5,
    objectType: '🐢',
    question: 'Help the turtles form 5 equal groups!',
    hint: 'Each group should have the same number of turtles.',
    audioHints: [
      "Let's divide 10 turtles into 5 groups.",
      "One turtle at a time, fill each group equally.",
      "Make sure no group has more turtles than others."
    ],
    theme: THEMES[0]
  },
  {
    id: 5,
    totalObjects: 6,
    divisor: 3,
    objectType: '🐡',
    question: 'Share the pufferfish into 3 equal groups!',
    hint: 'Make sure each group gets the same number of pufferfish.',
    audioHints: [
      "We have 6 pufferfish to share among 3 groups.",
      "Share the pufferfish one by one with each group.",
      "Keep sharing until all groups have the same number."
    ],
    theme: THEMES[1]
  }
];

const DivisionSeaWorksheet: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userGroups, setUserGroups] = useState<number[][]>(Array(DIVISION_QUESTIONS[0].divisor).fill([]));
  const [showCelebration, setShowCelebration] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [lastClickedGroup, setLastClickedGroup] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isComplete, setIsComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const checkAnswer = async ({ markCorrect, markIncorrect, markAttempted }: { 
    markCorrect: () => void;
    markIncorrect: () => void;
    markAttempted: () => void;
  }) => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    
    markAttempted();
    const expectedGroupSize = currentProblem.totalObjects / currentProblem.divisor;
    const isCorrect = userGroups.every(group => group.length === expectedGroupSize) && 
                     parseInt(userAnswer) === expectedGroupSize;

    if (isCorrect) {
      setIsTransitioning(true);
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
      
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Return a promise that resolves when speech is complete
      await new Promise<void>((resolve) => {
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
            } else {
              // Handle worksheet completion
              setIsComplete(true);
              speakText("Congratulations! You've completed all the questions!");
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
                  Click sea creatures to add them to groups:
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
                      Ocean Group {index + 1}
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
                        <p>You've completed all the division questions!</p>
                        <p className="text-sm">Keep practicing to become a division master!</p>
                      </div>
                    ) : (
                      isAnswerCorrect
                        ? `Great job! ${currentProblem.totalObjects} ÷ ${currentProblem.divisor} = ${
                            currentProblem.totalObjects / currentProblem.divisor
                          }`
                        : 'Try again! Check your groups and your division answer.'
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
                  '#22D3EE', // Cyan
                  '#0EA5E9', // Sky
                  '#2DD4BF', // Teal
                  '#FB7185', // Rose
                  '#34D399', // Emerald
                ]}
              />
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default DivisionSeaWorksheet; 
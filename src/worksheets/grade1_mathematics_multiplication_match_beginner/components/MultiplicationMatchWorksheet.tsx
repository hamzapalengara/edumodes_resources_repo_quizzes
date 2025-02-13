import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

const THEMES = [
  {
    name: 'Space',
    emoji: '🚀',
    bg: 'bg-indigo-50',
    accent: 'bg-indigo-100',
    text: 'text-indigo-600'
  },
  {
    name: 'Garden',
    emoji: '🌸',
    bg: 'bg-pink-50',
    accent: 'bg-pink-100',
    text: 'text-pink-600'
  },
  {
    name: 'Ocean',
    emoji: '🐠',
    bg: 'bg-blue-50',
    accent: 'bg-blue-100',
    text: 'text-blue-600'
  },
  {
    name: 'Candy',
    emoji: '🍬',
    bg: 'bg-purple-50',
    accent: 'bg-purple-100',
    text: 'text-purple-600'
  },
  {
    name: 'Fruit',
    emoji: '🍎',
    bg: 'bg-red-50',
    accent: 'bg-red-100',
    text: 'text-red-600'
  },
  {
    name: 'Stars',
    emoji: '⭐',
    bg: 'bg-yellow-50',
    accent: 'bg-yellow-100',
    text: 'text-yellow-600'
  },
  {
    name: 'Hearts',
    emoji: '❤️',
    bg: 'bg-rose-50',
    accent: 'bg-rose-100',
    text: 'text-rose-600'
  },
  {
    name: 'Moons',
    emoji: '🌙',
    bg: 'bg-slate-50',
    accent: 'bg-slate-100',
    text: 'text-slate-600'
  },
  {
    name: 'Gems',
    emoji: '💎',
    bg: 'bg-cyan-50',
    accent: 'bg-cyan-100',
    text: 'text-cyan-600'
  },
  {
    name: 'Clouds',
    emoji: '☁️',
    bg: 'bg-sky-50',
    accent: 'bg-sky-100',
    text: 'text-sky-600'
  }
];

const MULTIPLICATION_QUESTIONS = [
  {
    id: 1,
    groups: 2,
    itemsPerGroup: 3,
    theme: THEMES[0],
    options: ['2 × 3 = 6', '2 + 3 = 5', '2 + 2 + 2 = 6'],
    correctAnswer: '2 × 3 = 6',
    hint: "Count the number of rocket groups, then count rockets in each group!"
  },
  {
    id: 2,
    groups: 3,
    itemsPerGroup: 3,
    theme: THEMES[1],
    options: ['3 × 3 = 9', '3 + 3 = 6', '3 + 3 + 3 + 3 = 12'],
    correctAnswer: '3 × 3 = 9',
    hint: "When groups and items are equal, multiply the same number!"
  },
  {
    id: 3,
    groups: 4,
    itemsPerGroup: 2,
    theme: THEMES[2],
    options: ['4 × 2 = 8', '4 + 2 = 6', '2 + 2 + 2 = 6'],
    correctAnswer: '4 × 2 = 8',
    hint: "Remember: first number is how many groups!"
  },
  {
    id: 4,
    groups: 2,
    itemsPerGroup: 5,
    theme: THEMES[3],
    options: ['2 × 5 = 10', '2 + 5 = 7', '5 + 5 + 5 = 15'],
    correctAnswer: '2 × 5 = 10',
    hint: "Look carefully at how many candies are in each group!"
  },
  {
    id: 5,
    groups: 5,
    itemsPerGroup: 2,
    theme: THEMES[4],
    options: ['5 × 2 = 10', '5 + 2 = 7', '2 + 2 + 2 = 6'],
    correctAnswer: '5 × 2 = 10',
    hint: "Count the groups first, then items in each group!"
  },
  {
    id: 6,
    groups: 3,
    itemsPerGroup: 4,
    theme: THEMES[5],
    options: ['3 × 4 = 12', '3 + 4 = 7', '4 + 4 = 8'],
    correctAnswer: '3 × 4 = 12',
    hint: "Count how many groups of stars, then stars in each group!"
  },
  {
    id: 7,
    groups: 4,
    itemsPerGroup: 3,
    theme: THEMES[6],
    options: ['4 × 3 = 12', '4 + 3 = 7', '3 + 3 = 6'],
    correctAnswer: '4 × 3 = 12',
    hint: "Remember to count all groups and hearts in each group!"
  },
  {
    id: 8,
    groups: 2,
    itemsPerGroup: 4,
    theme: THEMES[7],
    options: ['2 × 4 = 8', '2 + 4 = 6', '4 + 4 + 4 = 12'],
    correctAnswer: '2 × 4 = 8',
    hint: "Two groups with four moons each, what's the total?"
  },
  {
    id: 9,
    groups: 5,
    itemsPerGroup: 3,
    theme: THEMES[8],
    options: ['5 × 3 = 15', '5 + 3 = 8', '3 + 3 + 3 = 9'],
    correctAnswer: '5 × 3 = 15',
    hint: "Five groups of three gems, multiply to find the total!"
  },
  {
    id: 10,
    groups: 3,
    itemsPerGroup: 5,
    theme: THEMES[9],
    options: ['3 × 5 = 15', '3 + 5 = 8', '5 + 5 = 10'],
    correctAnswer: '3 × 5 = 15',
    hint: "Three groups with five clouds each, what's the total?"
  }
];

const CORRECT_MESSAGES = [
  "Excellent! That is the right formula!",
  "Perfect match! Well done!",
  "Amazing work! You got it!",
  "Great job! Keep going!",
  "Wonderful! You understand multiplication!"
];

const MultiplicationMatchWorksheet: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);
  const [hasAwardedPoints, setHasAwardedPoints] = useState(false);

  const currentQuestion = MULTIPLICATION_QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === MULTIPLICATION_QUESTIONS.length - 1;

  // Initialize speech synthesis
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      speechSynthesisRef.current = window.speechSynthesis;
    }
  }, []);

  const speakText = (text: string) => {
    if (speechSynthesisRef.current) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1.1; // Slightly higher pitch for engagement
      speechSynthesisRef.current.speak(utterance);
    }
  };

  const handleAnswerSelect = (answer: string, { addPoints, markCorrect, markIncorrect, markAttempted }: any) => {
    if (selectedAnswer === answer) return; // Prevent duplicate selections
    
    markAttempted();
    const correct = answer === currentQuestion.correctAnswer;
    setSelectedAnswer(answer);
    setIsCorrect(correct);

    if (correct && !hasAwardedPoints) {
      setShowCelebration(true);
      addPoints(10);
      setHasAwardedPoints(true);
      markCorrect();
      
      // Speak the correct formula
      const formulaText = currentQuestion.correctAnswer.replace('×', 'times');
      speakText(`Correct! ${formulaText}`);

      setTimeout(() => {
        setShowCelebration(false);
        if (!isLastQuestion) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setIsCorrect(null);
          setHasAwardedPoints(false);
        }
      }, 2000);
    } else if (!correct) {
      markIncorrect();
      speakText("Try again!");
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <WorksheetTracker
      totalQuestions={MULTIPLICATION_QUESTIONS.length}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ addPoints, markCorrect, markIncorrect, markAttempted, score }) => (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 px-0 md:p-4">
          <div className="max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-white shadow-md mb-4 p-4">
              <ScoreDisplay
                score={score}
                totalQuestions={MULTIPLICATION_QUESTIONS.length}
              />
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
              <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
                Match Groups to Multiplication
              </h1>

              {/* Question */}
              <div className={`${currentQuestion.theme.bg} rounded-lg p-4 mb-6`}>
                <h2 className={`font-semibold text-lg ${currentQuestion.theme.text} mb-4`}>
                  Question {currentQuestionIndex + 1}: Count and Match
                </h2>

                {/* Visual Groups */}
                <div className="flex flex-wrap gap-4 justify-center mb-6">
                  {[...Array(currentQuestion.groups)].map((_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className={`${currentQuestion.theme.accent} rounded-lg p-2 flex flex-wrap gap-1 justify-center w-24`}
                    >
                      {[...Array(currentQuestion.itemsPerGroup)].map((_, itemIndex) => (
                        <span key={itemIndex} className="text-2xl">
                          {currentQuestion.theme.emoji}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-3 rounded-lg ${
                        selectedAnswer === option
                          ? option === currentQuestion.correctAnswer
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                          : 'bg-white hover:bg-gray-50'
                      } transition-colors duration-200`}
                      disabled={selectedAnswer !== null && isCorrect === true}
                      onClick={() => handleAnswerSelect(option, { addPoints, markCorrect, markIncorrect, markAttempted })}
                      whileHover={{ scale: selectedAnswer === null || isCorrect === false ? 1.02 : 1 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>

                {/* Feedback */}
                {selectedAnswer && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-3 rounded-lg ${
                      isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {isCorrect ? (
                      CORRECT_MESSAGES[Math.floor(Math.random() * CORRECT_MESSAGES.length)]
                    ) : (
                      <div>
                        <p>Try again! Hint:</p>
                        <p>{currentQuestion.hint}</p>
                        <motion.button
                          className="mt-2 px-4 py-2 bg-white rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                          onClick={handleRetry}
                          whileHover={{ scale: 1.05 }}
                        >
                          Try Another Answer
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Completion Message */}
              {isLastQuestion && isCorrect && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-xl font-bold text-indigo-600 mt-6"
                >
                  🎉 Congratulations! You have completed all questions! 🎉
                </motion.div>
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
              gravity={0.3}
            />
          )}
        </div>
      )}
    </WorksheetTracker>
  );
};

export default MultiplicationMatchWorksheet; 
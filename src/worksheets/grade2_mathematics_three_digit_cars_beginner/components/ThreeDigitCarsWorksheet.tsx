import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';

interface Question {
  id: number;
  number: number;
  targetDigit: number;
  targetPlace: 'hundreds' | 'tens' | 'ones';
  placeValues: {
    hundreds: number;
    tens: number;
    ones: number;
  };
  options: {
    value: number;
    label: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    number: 378,
    targetDigit: 7,
    targetPlace: 'tens',
    placeValues: { hundreds: 3, tens: 7, ones: 8 },
    options: [
      { value: 70, label: "70 (7 tens)" },
      { value: 7, label: "7 (7 ones)" },
      { value: 700, label: "700 (7 hundreds)" },
      { value: 17, label: "17 (1 ten and 7 ones)" }
    ]
  },
  {
    id: 2,
    number: 684,
    targetDigit: 6,
    targetPlace: 'hundreds',
    placeValues: { hundreds: 6, tens: 8, ones: 4 },
    options: [
      { value: 60, label: "60 (6 tens)" },
      { value: 6, label: "6 (6 ones)" },
      { value: 600, label: "600 (6 hundreds)" },
      { value: 16, label: "16 (1 ten and 6 ones)" }
    ]
  },
  {
    id: 3,
    number: 920,
    targetDigit: 2,
    targetPlace: 'tens',
    placeValues: { hundreds: 9, tens: 2, ones: 0 },
    options: [
      { value: 20, label: "20 (2 tens)" },
      { value: 2, label: "2 (2 ones)" },
      { value: 200, label: "200 (2 hundreds)" },
      { value: 12, label: "12 (1 ten and 2 ones)" }
    ]
  },
  {
    id: 4,
    number: 564,
    targetDigit: 4,
    targetPlace: 'ones',
    placeValues: { hundreds: 5, tens: 6, ones: 4 },
    options: [
      { value: 40, label: "40 (4 tens)" },
      { value: 4, label: "4 (4 ones)" },
      { value: 400, label: "400 (4 hundreds)" },
      { value: 14, label: "14 (1 ten and 4 ones)" }
    ]
  },
  {
    id: 5,
    number: 441,
    targetDigit: 4,
    targetPlace: 'hundreds',
    placeValues: { hundreds: 4, tens: 4, ones: 1 },
    options: [
      { value: 40, label: "40 (4 tens)" },
      { value: 4, label: "4 (4 ones)" },
      { value: 400, label: "400 (4 hundreds)" },
      { value: 44, label: "44 (4 tens and 4 ones)" }
    ]
  },
  {
    id: 6,
    number: 212,
    targetDigit: 1,
    targetPlace: 'tens',
    placeValues: { hundreds: 2, tens: 1, ones: 2 },
    options: [
      { value: 10, label: "10 (1 ten)" },
      { value: 1, label: "1 (1 one)" },
      { value: 100, label: "100 (1 hundred)" },
      { value: 12, label: "12 (1 ten and 2 ones)" }
    ]
  },
  {
    id: 7,
    number: 175,
    targetDigit: 5,
    targetPlace: 'ones',
    placeValues: { hundreds: 1, tens: 7, ones: 5 },
    options: [
      { value: 50, label: "50 (5 tens)" },
      { value: 5, label: "5 (5 ones)" },
      { value: 500, label: "500 (5 hundreds)" },
      { value: 15, label: "15 (1 ten and 5 ones)" }
    ]
  },
  {
    id: 8,
    number: 771,
    targetDigit: 7,
    targetPlace: 'hundreds',
    placeValues: { hundreds: 7, tens: 7, ones: 1 },
    options: [
      { value: 70, label: "70 (7 tens)" },
      { value: 7, label: "7 (7 ones)" },
      { value: 700, label: "700 (7 hundreds)" },
      { value: 77, label: "77 (7 tens and 7 ones)" }
    ]
  },
  {
    id: 9,
    number: 859,
    targetDigit: 5,
    targetPlace: 'tens',
    placeValues: { hundreds: 8, tens: 5, ones: 9 },
    options: [
      { value: 50, label: "50 (5 tens)" },
      { value: 5, label: "5 (5 ones)" },
      { value: 500, label: "500 (5 hundreds)" },
      { value: 59, label: "59 (5 tens and 9 ones)" }
    ]
  },
  {
    id: 10,
    number: 243,
    targetDigit: 3,
    targetPlace: 'ones',
    placeValues: { hundreds: 2, tens: 4, ones: 3 },
    options: [
      { value: 30, label: "30 (3 tens)" },
      { value: 3, label: "3 (3 ones)" },
      { value: 300, label: "300 (3 hundreds)" },
      { value: 43, label: "43 (4 tens and 3 ones)" }
    ]
  }
];

const POINTS_PER_QUESTION = 10;

const getPlaceValueName = (place: 'hundreds' | 'tens' | 'ones') => {
  switch (place) {
    case 'hundreds': return 'hundreds';
    case 'tens': return 'tens';
    case 'ones': return 'ones';
    default: return '';
  }
};

const ThreeDigitCarsWorksheet: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const placeName = getPlaceValueName(currentQuestion.targetPlace);

  const handleAnswerSelect = (value: number) => {
    if (showFeedback) return;
    setSelectedAnswer(value);
  };

  const checkAnswer = (markCorrect: () => void, markIncorrect: () => void) => {
    if (selectedAnswer === null || showFeedback) return;

    let correctValue: number;
    switch (currentQuestion.targetPlace) {
      case 'hundreds':
        correctValue = currentQuestion.targetDigit * 100;
        break;
      case 'tens':
        correctValue = currentQuestion.targetDigit * 10;
        break;
      case 'ones':
        correctValue = currentQuestion.targetDigit;
        break;
      default:
        correctValue = 0;
    }

    const correct = selectedAnswer === correctValue;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      markCorrect();
      if (currentQuestionIndex === QUESTIONS.length - 1) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 5000);
      }
      setTimeout(() => {
        if (currentQuestionIndex < QUESTIONS.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setShowFeedback(false);
        }
      }, 2000);
    } else {
      markIncorrect();
      setTimeout(() => {
        setSelectedAnswer(null);
        setShowFeedback(false);
      }, 2000);
    }
  };

  return (
    <WorksheetTracker
      totalQuestions={QUESTIONS.length}
      pointsPerQuestion={POINTS_PER_QUESTION}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Worksheet Summary:', summary);
      }}
    >
      {({ score, markCorrect, markIncorrect }) => (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
          {showCelebration && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={200}
              recycle={false}
            />
          )}

          <WorksheetHeader />

          <TouchContainer>
            <div className="w-full max-w-4xl mx-auto p-4">
              <ScoreDisplay 
                score={score}
                totalQuestions={QUESTIONS.length * POINTS_PER_QUESTION}
              />

              <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
                {/* Car Image with Number */}
                <div className="relative w-full max-w-md mx-auto mb-8">
                  <div className="bg-blue-100 rounded-xl p-6">
                    <div className="car-shape relative w-64 h-32 mx-auto">
                      {/* Car Body */}
                      <div className="absolute inset-0 bg-blue-500 rounded-xl shadow-lg">
                        {/* Windows */}
                        <div className="absolute top-4 right-16 w-16 h-12 bg-blue-200 rounded-lg"></div>
                        <div className="absolute top-4 left-16 w-16 h-12 bg-blue-200 rounded-lg"></div>
                        {/* Wheels */}
                        <div className="absolute bottom-[-8px] left-8 w-12 h-12 bg-gray-800 rounded-full"></div>
                        <div className="absolute bottom-[-8px] right-8 w-12 h-12 bg-gray-800 rounded-full"></div>
                      </div>
                      {/* Number Display */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                    text-4xl font-bold text-white flex gap-4">
                        <span className={`px-3 py-1 rounded ${currentQuestion.targetPlace === 'hundreds' ? 'bg-purple-700 ring-4 ring-yellow-400' : 'bg-blue-700'}`}>
                          {currentQuestion.placeValues.hundreds}
                        </span>
                        <span className={`px-3 py-1 rounded ${currentQuestion.targetPlace === 'tens' ? 'bg-purple-700 ring-4 ring-yellow-400' : 'bg-blue-700'}`}>
                          {currentQuestion.placeValues.tens}
                        </span>
                        <span className={`px-3 py-1 rounded ${currentQuestion.targetPlace === 'ones' ? 'bg-purple-700 ring-4 ring-yellow-400' : 'bg-blue-700'}`}>
                          {currentQuestion.placeValues.ones}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-xl font-bold text-center text-blue-700 mb-6">
                  What is the value of {currentQuestion.targetDigit} in the {placeName} place?
                </h2>

                {/* Options */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {currentQuestion.options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        p-4 rounded-xl text-lg font-bold border-4 transition-colors
                        ${selectedAnswer === option.value 
                          ? 'bg-blue-100 border-blue-500' 
                          : 'border-gray-200 hover:border-blue-300'}
                        ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}
                      `}
                      onClick={() => handleAnswerSelect(option.value)}
                      disabled={showFeedback}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>

                {/* Check Answer Button */}
                <div className="text-center">
                  <button
                    onClick={() => checkAnswer(markCorrect, markIncorrect)}
                    className={`
                      px-8 py-3 rounded-full text-lg font-semibold
                      transition-colors duration-300
                      ${!selectedAnswer || showFeedback
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'}
                    `}
                    disabled={!selectedAnswer || showFeedback}
                  >
                    Check Answer
                  </button>
                </div>

                {/* Feedback Message */}
                <AnimatePresence>
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`text-center text-lg font-bold mt-4 ${
                        isCorrect ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {isCorrect 
                        ? "Great job! That's the correct place value! 🌟" 
                        : "Try again! Remember to check which place the digit is in. 💪"}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-blue-600 mb-2">
                    <span>Progress</span>
                    <span>{currentQuestionIndex + 1} of {QUESTIONS.length}</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TouchContainer>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default ThreeDigitCarsWorksheet; 

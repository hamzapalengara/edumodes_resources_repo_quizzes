import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';

interface PlaceValue {
  hundreds: number;
  tens: number;
  ones: number;
}

interface NumberQuestion {
  id: number;
  type: 'rearrange' | 'identify' | 'compare';
  targetNumber: number;
  placeValues: PlaceValue;
  options?: number[];
  question: string;
  hint?: string;
  explanation?: string;
}

const POINTS_PER_QUESTION = 20;

const NUMBER_QUESTIONS: NumberQuestion[] = [
  {
    id: 1,
    type: 'rearrange',
    targetNumber: 352,
    placeValues: { hundreds: 3, tens: 5, ones: 2 },
    question: "Rearrange these digits to make the largest possible number:",
    hint: "Put the biggest digit in the hundreds place",
    explanation: "5 hundreds + 3 tens + 2 ones = 532"
  },
  {
    id: 2,
    type: 'compare',
    targetNumber: 247,
    placeValues: { hundreds: 2, tens: 4, ones: 7 },
    options: [274, 247, 427, 472],
    question: "Which number has 4 in the tens place and 2 in the hundreds place?",
    hint: "First find 2 in hundreds, then look for 4 in tens"
  },
  {
    id: 3,
    type: 'rearrange',
    targetNumber: 604,
    placeValues: { hundreds: 6, tens: 0, ones: 4 },
    question: "Rearrange these digits to make the smallest possible number:",
    hint: "Put the smallest non-zero digit in the hundreds place",
    explanation: "4 hundreds + 0 tens + 6 ones = 406"
  },
  {
    id: 4,
    type: 'identify',
    targetNumber: 380,
    placeValues: { hundreds: 3, tens: 8, ones: 0 },
    options: [308, 380, 830, 803],
    question: "Which number has 8 tens and is greater than 350?",
    hint: "8 tens = 80, and it needs to be after 350"
  },
  {
    id: 5,
    type: 'rearrange',
    targetNumber: 155,
    placeValues: { hundreds: 1, tens: 5, ones: 5 },
    question: "Using these digits, make a number between 500 and 600:",
    hint: "5 must be in the hundreds place to be in this range",
    explanation: "5 hundreds + 1 ten + 5 ones = 515"
  },
  {
    id: 6,
    type: 'compare',
    targetNumber: 630,
    placeValues: { hundreds: 6, tens: 3, ones: 0 },
    options: [360, 603, 630, 306],
    question: "Which number is 30 more than six hundred?",
    hint: "600 + 30 = 630"
  },
  {
    id: 7,
    type: 'rearrange',
    targetNumber: 407,
    placeValues: { hundreds: 4, tens: 0, ones: 7 },
    question: "Make the largest number with zero in the middle:",
    hint: "Zero must be in the tens place",
    explanation: "7 hundreds + 0 tens + 4 ones = 704"
  },
  {
    id: 8,
    type: 'identify',
    targetNumber: 290,
    placeValues: { hundreds: 2, tens: 9, ones: 0 },
    options: [209, 290, 920, 902],
    question: "Which number is 10 less than three hundred?",
    hint: "300 - 10 = 290"
  },
  {
    id: 9,
    type: 'rearrange',
    targetNumber: 648,
    placeValues: { hundreds: 6, tens: 4, ones: 8 },
    question: "Make an even number between 800 and 900:",
    hint: "It needs to start with 8 and end with an even number",
    explanation: "8 hundreds + 4 tens + 6 ones = 846"
  },
  {
    id: 10,
    type: 'compare',
    targetNumber: 725,
    placeValues: { hundreds: 7, tens: 2, ones: 5 },
    options: [752, 725, 572, 257],
    question: "Which number is closest to 700 + 30?",
    hint: "700 + 30 = 730, find the closest number"
  }
];

const PlaceValueWorksheet: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedBlocks, setSelectedBlocks] = useState<PlaceValue>({ hundreds: 0, tens: 0, ones: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Get window dimensions for confetti
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentQuestion = NUMBER_QUESTIONS[currentQuestionIndex];

  // Speech synthesis for feedback and hints
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleBlockClick = (place: keyof PlaceValue, value: number) => {
    if (hasAnswered) return;
    
    setSelectedBlocks(prev => ({
      ...prev,
      [place]: value
    }));
  };

  const handleNumberSelect = (number: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(number);
  };

  const checkAnswer = (markCorrect: () => void, markIncorrect: () => void) => {
    if (hasAnswered) return;

    let isAnswerCorrect = false;
    if (currentQuestion.type === 'rearrange') {
      const builtNumber = selectedBlocks.hundreds * 100 + selectedBlocks.tens * 10 + selectedBlocks.ones;
      
      // For rearrange questions, check if the answer meets the specific criteria
      switch (currentQuestion.id) {
        case 1: // Largest possible number
          isAnswerCorrect = builtNumber === 532;
          break;
        case 3: // Smallest possible number
          isAnswerCorrect = builtNumber === 406;
          break;
        case 5: // Between 500 and 600
          isAnswerCorrect = builtNumber === 515;
          break;
        case 7: // Largest with zero in middle
          isAnswerCorrect = builtNumber === 704;
          break;
        case 9: // Even number between 800 and 900
          isAnswerCorrect = builtNumber === 846;
          break;
        default:
          isAnswerCorrect = builtNumber === currentQuestion.targetNumber;
      }
    } else {
      isAnswerCorrect = selectedAnswer === currentQuestion.targetNumber;
    }

    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    setHasAnswered(true);

    if (isAnswerCorrect) {
      markCorrect();
      speak("Excellent! That's correct!");
      if (currentQuestionIndex === NUMBER_QUESTIONS.length - 1) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 5000);
      }
      setTimeout(() => {
        if (currentQuestionIndex < NUMBER_QUESTIONS.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedBlocks({ hundreds: 0, tens: 0, ones: 0 });
          setSelectedAnswer(null);
          setShowFeedback(false);
          setHasAnswered(false);
        }
      }, 2000);
    } else {
      markIncorrect();
      speak("Let's try again! Think about the place values.");
      setTimeout(() => {
        setSelectedBlocks({ hundreds: 0, tens: 0, ones: 0 });
        setSelectedAnswer(null);
        setShowFeedback(false);
        setHasAnswered(false);
      }, 2000);
    }
  };

  const renderPlaceValueBlocks = (placeValues: PlaceValue) => {
    return (
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* Hundreds */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-bold text-purple-700 mb-2">Hundreds</div>
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 10 }, (_, i) => (
              <motion.button
                key={`h-${i}`}
                whileHover={{ scale: currentQuestion.type === 'rearrange' ? 1.05 : 1 }}
                whileTap={{ scale: currentQuestion.type === 'rearrange' ? 0.95 : 1 }}
                className={`w-8 h-8 rounded-lg border-2 transition-colors
                  ${(currentQuestion.type === 'rearrange' ? selectedBlocks.hundreds === i : placeValues.hundreds === i)
                    ? 'bg-purple-500 border-purple-700' 
                    : 'bg-purple-100 border-purple-300'}
                  ${currentQuestion.type === 'rearrange' && !hasAnswered 
                    ? 'cursor-pointer hover:border-purple-500'
                    : 'cursor-default'}`}
                onClick={() => currentQuestion.type === 'rearrange' && handleBlockClick('hundreds', i)}
                disabled={currentQuestion.type !== 'rearrange' || hasAnswered}
              >
                {i}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tens */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-bold text-purple-700 mb-2">Tens</div>
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 10 }, (_, i) => (
              <motion.button
                key={`t-${i}`}
                whileHover={{ scale: currentQuestion.type === 'rearrange' ? 1.05 : 1 }}
                whileTap={{ scale: currentQuestion.type === 'rearrange' ? 0.95 : 1 }}
                className={`w-8 h-8 rounded-lg border-2 transition-colors
                  ${(currentQuestion.type === 'rearrange' ? selectedBlocks.tens === i : placeValues.tens === i)
                    ? 'bg-blue-500 border-blue-700' 
                    : 'bg-blue-100 border-blue-300'}
                  ${currentQuestion.type === 'rearrange' && !hasAnswered 
                    ? 'cursor-pointer hover:border-blue-500'
                    : 'cursor-default'}`}
                onClick={() => currentQuestion.type === 'rearrange' && handleBlockClick('tens', i)}
                disabled={currentQuestion.type !== 'rearrange' || hasAnswered}
              >
                {i}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Ones */}
        <div className="flex flex-col items-center">
          <div className="text-lg font-bold text-purple-700 mb-2">Ones</div>
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 10 }, (_, i) => (
              <motion.button
                key={`o-${i}`}
                whileHover={{ scale: currentQuestion.type === 'rearrange' ? 1.05 : 1 }}
                whileTap={{ scale: currentQuestion.type === 'rearrange' ? 0.95 : 1 }}
                className={`w-8 h-8 rounded-lg border-2 transition-colors
                  ${(currentQuestion.type === 'rearrange' ? selectedBlocks.ones === i : placeValues.ones === i)
                    ? 'bg-green-500 border-green-700' 
                    : 'bg-green-100 border-green-300'}
                  ${currentQuestion.type === 'rearrange' && !hasAnswered 
                    ? 'cursor-pointer hover:border-green-500'
                    : 'cursor-default'}`}
                onClick={() => currentQuestion.type === 'rearrange' && handleBlockClick('ones', i)}
                disabled={currentQuestion.type !== 'rearrange' || hasAnswered}
              >
                {i}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <WorksheetTracker
      totalQuestions={NUMBER_QUESTIONS.length}
      pointsPerQuestion={POINTS_PER_QUESTION}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Place Value Summary:', summary);
      }}
    >
      {({ score, markCorrect, markIncorrect }) => (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
          {showCelebration && (
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              numberOfPieces={200}
              recycle={false}
              colors={['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD']}
            />
          )}

          <WorksheetHeader />

          <TouchContainer>
            <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
              <ScoreDisplay 
                score={score} 
                totalQuestions={NUMBER_QUESTIONS.length * POINTS_PER_QUESTION}
              />

              <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
                {/* Question Display */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-purple-700 mb-3">
                    {currentQuestion.question}
                  </h2>
                  {currentQuestion.type === 'rearrange' && (
                    <div className="text-purple-600 flex items-center justify-center gap-2">
                      <span>Available digits: </span>
                      <span className="flex gap-2">
                        {[currentQuestion.placeValues.hundreds, 
                          currentQuestion.placeValues.tens, 
                          currentQuestion.placeValues.ones].map((digit, index) => (
                          <span key={index} className="w-8 h-8 inline-flex items-center justify-center bg-purple-100 rounded-lg font-bold">
                            {digit}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                  {currentQuestion.hint && (
                    <button
                      onClick={() => speak(currentQuestion.hint!)}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-600 hover:bg-purple-200 transition-colors"
                    >
                      <span>💡</span> Need help?
                    </button>
                  )}
                </div>

                {/* Place Value Blocks */}
                {currentQuestion.type === 'rearrange' ? (
                  renderPlaceValueBlocks(selectedBlocks)
                ) : (
                  <div className="mb-8">
                    {renderPlaceValueBlocks(currentQuestion.placeValues)}
                  </div>
                )}

                {/* Number Options */}
                {currentQuestion.options && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {currentQuestion.options.map((number, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                          p-4 rounded-lg border-4 transition-all duration-300 text-2xl font-bold
                          ${selectedAnswer === number
                            ? 'border-purple-500 bg-purple-100'
                            : 'border-gray-200 hover:border-purple-300'}
                          ${hasAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}
                        `}
                        onClick={() => handleNumberSelect(number)}
                        disabled={hasAnswered}
                      >
                        {number}
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* Check Answer Button */}
                <div className="text-center">
                  <button
                    onClick={() => checkAnswer(markCorrect, markIncorrect)}
                    className={`
                      px-8 py-3 rounded-full text-lg font-semibold
                      transition-colors duration-300
                      ${hasAnswered || 
                        (currentQuestion.type === 'rearrange' && 
                          selectedBlocks.hundreds === 0 && 
                          selectedBlocks.tens === 0 && 
                          selectedBlocks.ones === 0) ||
                        (currentQuestion.type !== 'rearrange' && selectedAnswer === null)
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-purple-600 text-white hover:bg-purple-700'}
                    `}
                    disabled={hasAnswered || 
                      (currentQuestion.type === 'rearrange' && 
                        selectedBlocks.hundreds === 0 && 
                        selectedBlocks.tens === 0 && 
                        selectedBlocks.ones === 0) ||
                      (currentQuestion.type !== 'rearrange' && selectedAnswer === null)}
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
                        ? "Excellent work! You're mastering place values! 🌟"
                        : "Let's try again! Think about the question carefully. 💪"}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-purple-600 mb-2">
                    <span>Progress</span>
                    <span>{currentQuestionIndex + 1} of {NUMBER_QUESTIONS.length}</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestionIndex + 1) / NUMBER_QUESTIONS.length) * 100}%` }}
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

export default PlaceValueWorksheet; 
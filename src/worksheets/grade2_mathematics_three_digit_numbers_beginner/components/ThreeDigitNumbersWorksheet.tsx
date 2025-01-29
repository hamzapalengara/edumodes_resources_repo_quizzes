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
  type: 'build' | 'identify' | 'compare';
  targetNumber: number;
  placeValues: PlaceValue;
  options?: number[];
  question: string;
  hint?: string;
}

const POINTS_PER_QUESTION = 20;

const NUMBER_QUESTIONS: NumberQuestion[] = [
  {
    id: 1,
    type: 'build',
    targetNumber: 234,
    placeValues: { hundreds: 2, tens: 3, ones: 4 },
    question: "Make the number:",
    hint: "Start with 2 hundreds, then 3 tens, then 4 ones"
  },
  {
    id: 2,
    type: 'identify',
    targetNumber: 567,
    placeValues: { hundreds: 5, tens: 6, ones: 7 },
    options: [567, 576, 657, 765],
    question: "What number do these blocks show?",
    hint: "Count hundreds first, then tens, then ones"
  },
  {
    id: 3,
    type: 'build',
    targetNumber: 308,
    placeValues: { hundreds: 3, tens: 0, ones: 8 },
    question: "Make the number:",
    hint: "Remember, zero in tens means no tens blocks"
  },
  {
    id: 4,
    type: 'identify',
    targetNumber: 150,
    placeValues: { hundreds: 1, tens: 5, ones: 0 },
    options: [150, 105, 510, 501],
    question: "What number do these blocks show?",
    hint: "Zero in ones means no ones blocks"
  },
  {
    id: 5,
    type: 'build',
    targetNumber: 999,
    placeValues: { hundreds: 9, tens: 9, ones: 9 },
    question: "Make the number:",
    hint: "This is the biggest three-digit number"
  },
  {
    id: 6,
    type: 'identify',
    targetNumber: 203,
    placeValues: { hundreds: 2, tens: 0, ones: 3 },
    options: [203, 230, 320, 302],
    question: "What number do these blocks show?",
    hint: "Look carefully at the tens place"
  },
  {
    id: 7,
    type: 'build',
    targetNumber: 440,
    placeValues: { hundreds: 4, tens: 4, ones: 0 },
    question: "Make the number:",
    hint: "Same digit in hundreds and tens, zero in ones"
  },
  {
    id: 8,
    type: 'identify',
    targetNumber: 700,
    placeValues: { hundreds: 7, tens: 0, ones: 0 },
    options: [700, 70, 707, 770],
    question: "What number do these blocks show?",
    hint: "Seven hundreds with no tens or ones"
  },
  {
    id: 9,
    type: 'build',
    targetNumber: 125,
    placeValues: { hundreds: 1, tens: 2, ones: 5 },
    question: "Make the number:",
    hint: "One hundred, two tens, five ones"
  },
  {
    id: 10,
    type: 'identify',
    targetNumber: 480,
    placeValues: { hundreds: 4, tens: 8, ones: 0 },
    options: [480, 408, 840, 804],
    question: "What number do these blocks show?",
    hint: "Four hundreds, eight tens, no ones"
  }
];

const ThreeDigitNumbersWorksheet: React.FC = () => {
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
    if (currentQuestion.type === 'build') {
      const builtNumber = selectedBlocks.hundreds * 100 + selectedBlocks.tens * 10 + selectedBlocks.ones;
      isAnswerCorrect = builtNumber === currentQuestion.targetNumber;
    } else {
      isAnswerCorrect = selectedAnswer === currentQuestion.targetNumber;
    }

    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    setHasAnswered(true);

    if (isAnswerCorrect) {
      markCorrect();
      speak("Excellent! That's the correct number!");
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
      speak("Let's try again! Think about place values.");
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
                whileHover={{ scale: currentQuestion.type === 'build' ? 1.05 : 1 }}
                whileTap={{ scale: currentQuestion.type === 'build' ? 0.95 : 1 }}
                className={`w-8 h-8 rounded-lg border-2 transition-colors
                  ${(currentQuestion.type === 'build' ? selectedBlocks.hundreds === i : placeValues.hundreds === i)
                    ? 'bg-purple-500 border-purple-700' 
                    : 'bg-purple-100 border-purple-300'}
                  ${currentQuestion.type === 'build' && !hasAnswered 
                    ? 'cursor-pointer hover:border-purple-500'
                    : 'cursor-default'}`}
                onClick={() => currentQuestion.type === 'build' && handleBlockClick('hundreds', i)}
                disabled={currentQuestion.type !== 'build' || hasAnswered}
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
                whileHover={{ scale: currentQuestion.type === 'build' ? 1.05 : 1 }}
                whileTap={{ scale: currentQuestion.type === 'build' ? 0.95 : 1 }}
                className={`w-8 h-8 rounded-lg border-2 transition-colors
                  ${(currentQuestion.type === 'build' ? selectedBlocks.tens === i : placeValues.tens === i)
                    ? 'bg-blue-500 border-blue-700' 
                    : 'bg-blue-100 border-blue-300'}
                  ${currentQuestion.type === 'build' && !hasAnswered 
                    ? 'cursor-pointer hover:border-blue-500'
                    : 'cursor-default'}`}
                onClick={() => currentQuestion.type === 'build' && handleBlockClick('tens', i)}
                disabled={currentQuestion.type !== 'build' || hasAnswered}
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
                whileHover={{ scale: currentQuestion.type === 'build' ? 1.05 : 1 }}
                whileTap={{ scale: currentQuestion.type === 'build' ? 0.95 : 1 }}
                className={`w-8 h-8 rounded-lg border-2 transition-colors
                  ${(currentQuestion.type === 'build' ? selectedBlocks.ones === i : placeValues.ones === i)
                    ? 'bg-green-500 border-green-700' 
                    : 'bg-green-100 border-green-300'}
                  ${currentQuestion.type === 'build' && !hasAnswered 
                    ? 'cursor-pointer hover:border-green-500'
                    : 'cursor-default'}`}
                onClick={() => currentQuestion.type === 'build' && handleBlockClick('ones', i)}
                disabled={currentQuestion.type !== 'build' || hasAnswered}
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
        console.log('Three Digit Numbers Summary:', summary);
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
                {/* Question with Target Number */}
                <div className="text-center mb-6">
                  {currentQuestion.type === 'build' ? (
                    <div className="flex flex-col items-center">
                      <h2 className="text-2xl font-bold text-purple-700 mb-3">
                        Make the number: <span className="text-3xl text-blue-600">{currentQuestion.targetNumber}</span>
                      </h2>
                      <div className="text-purple-600 flex items-center gap-2">
                        <span>👆 Click the blocks below</span>
                      </div>
                    </div>
                  ) : (
                    <h2 className="text-2xl font-bold text-purple-700 mb-3">
                      {currentQuestion.question}
                    </h2>
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
                {currentQuestion.type === 'build' ? (
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
                      ${hasAnswered || (currentQuestion.type === 'build' && 
                        selectedBlocks.hundreds === 0 && 
                        selectedBlocks.tens === 0 && 
                        selectedBlocks.ones === 0) ||
                        (currentQuestion.type !== 'build' && selectedAnswer === null)
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-purple-600 text-white hover:bg-purple-700'}
                    `}
                    disabled={hasAnswered || (currentQuestion.type === 'build' && 
                      selectedBlocks.hundreds === 0 && 
                      selectedBlocks.tens === 0 && 
                      selectedBlocks.ones === 0) ||
                      (currentQuestion.type !== 'build' && selectedAnswer === null)}
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
                        ? "Great job! You understand place values! 🌟"
                        : "Let's try again! Remember to look at each place value. 💪"}
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

export default ThreeDigitNumbersWorksheet; 

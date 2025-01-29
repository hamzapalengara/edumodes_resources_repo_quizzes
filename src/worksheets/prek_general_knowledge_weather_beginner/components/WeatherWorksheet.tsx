import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';

// Define interfaces
interface WeatherOption {
  emoji: string;
  weatherType: string;
  label: string;
  displaySize: string;
  animation?: string;
  hint?: string;
  sound?: string;
}

interface WeatherQuestion {
  id: number;
  type: 'identify' | 'match' | 'activity';
  question: string;
  scenario: string;
  options: WeatherOption[];
  correctAnswer: string;
  feedback: {
    correct: string;
    incorrect: string;
  };
}

// Weather learning activities
const WEATHER_QUESTIONS: WeatherQuestion[] = [
  {
    id: 1,
    type: 'identify',
    question: "What's the weather like when you see this?",
    scenario: "Look at the sky! Can you tell what weather it is?",
    options: [
      { 
        emoji: '☀️', 
        weatherType: 'sunny', 
        label: 'Sunny Day', 
        displaySize: 'text-7xl',
        animation: 'animate-pulse',
        hint: "It's bright and warm!",
        sound: "It's a bright sunny day! Perfect for playing outside!"
      },
      { 
        emoji: '🌧️', 
        weatherType: 'rainy', 
        label: 'Rainy Day', 
        displaySize: 'text-7xl',
        animation: 'animate-bounce',
        hint: "Don't forget your umbrella!",
        sound: "It's raining! Time to wear your raincoat!"
      }
    ],
    correctAnswer: 'sunny',
    feedback: {
      correct: "Yes! It's a sunny day! ☀️",
      incorrect: "Look again! See the bright sun? ☀️"
    }
  },
  {
    id: 2,
    type: 'match',
    question: "What do we need on this day?",
    scenario: "It's raining outside! What should we bring?",
    options: [
      { 
        emoji: '☂️', 
        weatherType: 'umbrella', 
        label: 'Umbrella', 
        displaySize: 'text-7xl',
        hint: "Keeps us dry in the rain!",
        sound: "An umbrella keeps us dry when it rains!"
      },
      { 
        emoji: '🕶️', 
        weatherType: 'sunglasses', 
        label: 'Sunglasses', 
        displaySize: 'text-7xl',
        hint: "For bright sunny days!",
        sound: "Sunglasses protect our eyes from bright sun!"
      }
    ],
    correctAnswer: 'umbrella',
    feedback: {
      correct: "Perfect! We need an umbrella when it rains! ☔",
      incorrect: "When it's raining, we need an umbrella to stay dry! ☔"
    }
  },
  {
    id: 3,
    type: 'identify',
    question: "What's happening in the sky?",
    scenario: "Look up! Do you see the flashing lights?",
    options: [
      { 
        emoji: '⚡', 
        weatherType: 'thunder', 
        label: 'Thunder & Lightning', 
        displaySize: 'text-7xl',
        animation: 'animate-pulse',
        hint: "Bright flashes and loud booms!",
        sound: "Thunder and lightning! It's very loud!"
      },
      { 
        emoji: '🌈', 
        weatherType: 'rainbow', 
        label: 'Rainbow', 
        displaySize: 'text-7xl',
        hint: "Beautiful colors in the sky!",
        sound: "Look at the beautiful rainbow with all its colors!"
      }
    ],
    correctAnswer: 'thunder',
    feedback: {
      correct: "Yes! That's thunder and lightning! ⚡",
      incorrect: "Listen to the loud boom - it's thunder! ⚡"
    }
  },
  {
    id: 4,
    type: 'match',
    question: "What should we wear today?",
    scenario: "It's cold and white outside!",
    options: [
      { 
        emoji: '🧤', 
        weatherType: 'gloves', 
        label: 'Warm Gloves', 
        displaySize: 'text-7xl',
        hint: "Keeps our hands warm!",
        sound: "Warm gloves keep our hands cozy in cold weather!"
      },
      { 
        emoji: '🩴', 
        weatherType: 'sandals', 
        label: 'Sandals', 
        displaySize: 'text-7xl',
        hint: "For warm beach days!",
        sound: "Sandals are great for hot summer days!"
      }
    ],
    correctAnswer: 'gloves',
    feedback: {
      correct: "Yes! We need warm gloves in cold weather! 🧤",
      incorrect: "It's cold! We need warm gloves! 🧤"
    }
  },
  {
    id: 5,
    type: 'identify',
    question: "What's falling from the sky?",
    scenario: "White fluffy flakes are falling!",
    options: [
      { 
        emoji: '🌧️', 
        weatherType: 'rain', 
        label: 'Rain', 
        displaySize: 'text-7xl',
        animation: 'animate-bounce',
        hint: "Water drops falling!",
        sound: "Rain falls as water drops!"
      },
      { 
        emoji: '❄️', 
        weatherType: 'snow', 
        label: 'Snow', 
        displaySize: 'text-7xl',
        animation: 'animate-bounce',
        hint: "White and cold flakes!",
        sound: "Snow is white and fluffy!"
      }
    ],
    correctAnswer: 'snow',
    feedback: {
      correct: "Yes! It's snowing! Time to build a snowman! ⛄",
      incorrect: "Look at the white snowflakes! ❄️"
    }
  }
];

const WeatherWorksheet: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);

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

  const currentQuestion = WEATHER_QUESTIONS[currentQuestionIndex];

  // Speech synthesis for feedback and hints
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return (
    <WorksheetTracker
      totalQuestions={WEATHER_QUESTIONS.length}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Weather Worksheet Summary:', summary);
      }}
    >
      {({ score, markCorrect, markIncorrect, markAttempted }) => {
        const handleOptionClick = (weatherType: string) => {
          if (selectedAnswer !== null) return;
          
          setSelectedAnswer(weatherType);
          markAttempted();
          
          const correct = weatherType === currentQuestion.correctAnswer;
          setIsCorrect(correct);
          
          if (correct) {
            markCorrect();
            speak(currentQuestion.feedback.correct);
            if (currentQuestionIndex === WEATHER_QUESTIONS.length - 1) {
              setShowCelebration(true);
              setTimeout(() => setShowCelebration(false), 5000);
            }
          } else {
            markIncorrect();
            speak(currentQuestion.feedback.incorrect);
          }
          
          setTimeout(() => {
            if (currentQuestionIndex < WEATHER_QUESTIONS.length - 1) {
              setCurrentQuestionIndex(prev => prev + 1);
              setSelectedAnswer(null);
              setIsCorrect(null);
              setShowHint(false);
            }
          }, 3000);
        };

        return (
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
                <ScoreDisplay score={score/10} totalQuestions={WEATHER_QUESTIONS.length} />

                <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
                  {/* Question Section */}
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-purple-700 mb-2">
                      {currentQuestion.question}
                    </h2>
                    <p className="text-lg text-purple-600">
                      {currentQuestion.scenario}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {currentQuestion.options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          flex flex-col items-center justify-center p-6 rounded-lg min-h-[200px]
                          ${selectedAnswer === null ? 'hover:bg-purple-50 cursor-pointer' : 'cursor-default'}
                          ${selectedAnswer === option.weatherType && isCorrect ? 'bg-green-100' : ''}
                          ${selectedAnswer === option.weatherType && !isCorrect ? 'bg-red-100' : ''}
                          border-4 border-purple-200 transition-all duration-300
                        `}
                        onClick={() => handleOptionClick(option.weatherType)}
                        disabled={selectedAnswer !== null}
                        onMouseEnter={() => option.sound && speak(option.sound)}
                      >
                        <div className={`mb-4 ${option.animation || ''}`}>
                          <span className={option.displaySize}>{option.emoji}</span>
                        </div>
                        <span className="text-xl font-medium text-purple-800">{option.label}</span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Hint Button */}
                  <div className="text-center mb-4">
                    <button
                      onClick={() => {
                        setShowHint(true);
                        const currentOption = currentQuestion.options.find(
                          opt => opt.weatherType === currentQuestion.correctAnswer
                        );
                        currentOption?.hint && speak(currentOption.hint);
                      }}
                      className="text-purple-600 hover:text-purple-700 text-lg"
                      disabled={selectedAnswer !== null}
                    >
                      Need a hint? 💭
                    </button>
                  </div>

                  {/* Feedback Message */}
                  <AnimatePresence>
                    {(isCorrect !== null || showHint) && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`text-center text-lg font-bold ${
                          isCorrect === null
                            ? 'text-purple-600'
                            : isCorrect
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {isCorrect === null && showHint
                          ? currentQuestion.options.find(
                              opt => opt.weatherType === currentQuestion.correctAnswer
                            )?.hint
                          : isCorrect
                          ? currentQuestion.feedback.correct
                          : currentQuestion.feedback.incorrect}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Progress Bar */}
                  <div className="mt-8">
                    <div className="flex justify-between text-sm text-purple-600 mb-2">
                      <span>Progress</span>
                      <span>{currentQuestionIndex + 1} of {WEATHER_QUESTIONS.length}</span>
                    </div>
                    <div className="w-full bg-purple-100 rounded-full h-2.5">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${((currentQuestionIndex + 1) / WEATHER_QUESTIONS.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TouchContainer>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default WeatherWorksheet; 
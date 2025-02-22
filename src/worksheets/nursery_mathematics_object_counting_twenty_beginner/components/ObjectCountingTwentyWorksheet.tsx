import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Constants
const TOTAL_QUESTIONS = 10;
const BASE_QUESTIONS = [
  {
    id: 1,
    count: 11,
    options: ['11', '12', '13', '14'],
    objects: Array(11).fill('💎'),
  },
  {
    id: 2,
    count: 12,
    options: ['11', '12', '14', '13'],
    objects: Array(12).fill('💎'),
  },
  {
    id: 3,
    count: 13,
    options: ['14', '12', '13', '11'],
    objects: Array(13).fill('💎'),
  },
  {
    id: 4,
    count: 14,
    options: ['12', '14', '11', '13'],
    objects: Array(14).fill('💎'),
  },
  {
    id: 5,
    count: 15,
    options: ['16', '15', '13', '14'],
    objects: Array(15).fill('💎'),
  },
  {
    id: 6,
    count: 16,
    options: ['15', '17', '16', '14'],
    objects: Array(16).fill('💎'),
  },
  {
    id: 7,
    count: 17,
    options: ['16', '18', '15', '17'],
    objects: Array(17).fill('💎'),
  },
  {
    id: 8,
    count: 18,
    options: ['17', '19', '18', '16'],
    objects: Array(18).fill('💎'),
  },
  {
    id: 9,
    count: 19,
    options: ['18', '19', '17', '20'],
    objects: Array(19).fill('💎'),
  },
  {
    id: 10,
    count: 20,
    options: ['19', '18', '20', '17'],
    objects: Array(20).fill('💎'),
  },
];

// Shuffle array helper
const shuffleArray = <T extends any>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface ConfettiItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'emoji' | 'number';
}

const ObjectCountingTwentyWorksheet: React.FC = () => {
  const [questions] = useState(() => shuffleArray(BASE_QUESTIONS));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback((text: string, rate = 0.8, pitch = 1) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      speak(`Count the crystals and select the correct number.`);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
      speechSynthesis.cancel();
    };
  }, [currentQuestionIndex, speak]);

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  const createConfetti = () => {
    const newConfetti: ConfettiItem[] = [];
    for (let i = 0; i < 20; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5,
        type: Math.random() > 0.5 ? 'emoji' : 'number',
      });
    }
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 2000);
  };

  const handleOptionClick = (
    selectedOption: string,
    { addPoints, markCorrect, markAttempted, markIncorrect }: any
  ) => {
    const currentQuestion = questions[currentQuestionIndex];
    markAttempted();

    if (selectedOption === currentQuestion.count.toString()) {
      createConfetti();
      addPoints(10);
      markCorrect();
      setSuccessMessage('Great job! 🌟');
      speak('Correct! Well done!', 0.8, 1.2);

      setTimeout(() => {
        setSuccessMessage('');
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          setIsComplete(true);
          speak('Congratulations! You have completed the worksheet!', 0.8, 1.2);
        }
      }, 2000);
    } else {
      markIncorrect();
      setSuccessMessage('Try again! 💪');
      speak('Not quite. Try counting again.', 0.8, 0.9);
      setTimeout(() => setSuccessMessage(''), 2000);
    }
  };

  return (
    <WorksheetTracker
      totalQuestions={TOTAL_QUESTIONS}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ addPoints, markCorrect, markAttempted, markIncorrect, score }) => (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
          <WorksheetHeader />
          
          {/* Score Display */}
          <div className="bg-purple-800/50 backdrop-blur-md shadow-lg border border-purple-500/20">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay score={score} totalQuestions={TOTAL_QUESTIONS * 10} />
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4">
            <div className="max-w-4xl mx-auto">
              {!isComplete ? (
                <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-500/20">
                  {/* Question Section */}
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-purple-100 mb-4">
                      Count the Crystals
                    </h2>
                    <button
                      onClick={() => speak(`Count the crystals and select the correct number.`)}
                      disabled={isSpeaking}
                      className="bg-purple-700/50 text-purple-100 px-4 py-2 rounded-lg shadow-md border border-purple-500/30 hover:bg-purple-600/50 transition-colors disabled:opacity-50"
                    >
                      {isSpeaking ? 'Playing...' : '🔊 Hear Question'}
                    </button>
                  </div>

                  {/* Objects Display */}
                  <div className="bg-purple-800/30 rounded-xl p-4 mb-8 border border-purple-500/30">
                    <div className="grid grid-cols-5 md:grid-cols-10 gap-2 justify-items-center">
                      {questions[currentQuestionIndex].objects.map((object, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="text-3xl"
                        >
                          {object}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-2 gap-4">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleOptionClick(option, { addPoints, markCorrect, markAttempted, markIncorrect })}
                        className="bg-purple-700/50 text-purple-100 text-xl font-bold py-4 rounded-xl shadow-lg border border-purple-500/30 hover:bg-purple-600/50 transition-colors"
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>

                  {/* Success Message */}
                  <AnimatePresence>
                    {successMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center mt-6"
                      >
                        <p className="text-2xl font-bold text-purple-100">{successMessage}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-purple-500/20">
                  <h2 className="text-3xl font-bold text-purple-100 mb-4">
                    🎉 Congratulations! 🎉
                  </h2>
                  <p className="text-xl text-purple-200">
                    You've completed the worksheet!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Confetti Animation */}
          <AnimatePresence>
            {confetti.length > 0 && (
              <div className="fixed inset-0 pointer-events-none">
                {confetti.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ 
                      opacity: 1,
                      x: `${item.x}%`,
                      y: '-10%',
                      rotate: item.rotation,
                      scale: item.scale,
                    }}
                    animate={{
                      opacity: 0,
                      y: '100%',
                      transition: { duration: 2, ease: 'easeOut' },
                    }}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      color: `hsl(${280 + Math.random() * 40}, ${70 + Math.random() * 20}%, ${45 + Math.random() * 15}%)`,
                      textShadow: '0 0 5px rgba(0,0,0,0.2)',
                      fontSize: item.type === 'emoji' ? '2.5rem' : '2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.type === 'emoji' ? '💎' : questions[currentQuestionIndex].count}
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default ObjectCountingTwentyWorksheet; 
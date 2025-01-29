import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';

interface RhymeWord {
  word: string;
  emoji?: string;
  audio?: string;
}

interface RhymeSet {
  targetWord: RhymeWord;
  options: RhymeWord[];
  correctWords: string[];
}

const POINTS_PER_QUESTION = 20;

const RHYME_SETS: RhymeSet[] = [
  {
    targetWord: { 
      word: 'cat', 
      emoji: '🐱',
      audio: 'cat'
    },
    options: [
      { word: 'hat', emoji: '🎩' },
      { word: 'rat', emoji: '🐀' },
      { word: 'bat', emoji: '🦇' },
      { word: 'dog', emoji: '🐕' },
      { word: 'pig', emoji: '🐷' },
      { word: 'mat', emoji: '🏠' }
    ],
    correctWords: ['hat', 'rat', 'bat', 'mat']
  },
  {
    targetWord: { 
      word: 'sun', 
      emoji: '☀️',
      audio: 'sun'
    },
    options: [
      { word: 'fun', emoji: '🎮' },
      { word: 'run', emoji: '🏃' },
      { word: 'bun', emoji: '🥖' },
      { word: 'car', emoji: '🚗' },
      { word: 'ball', emoji: '⚽' },
      { word: 'gun', emoji: '🔫' }
    ],
    correctWords: ['fun', 'run', 'bun', 'gun']
  },
  {
    targetWord: { 
      word: 'dog', 
      emoji: '🐕',
      audio: 'dog'
    },
    options: [
      { word: 'log', emoji: '🪵' },
      { word: 'fog', emoji: '🌫️' },
      { word: 'hog', emoji: '🐷' },
      { word: 'cat', emoji: '🐱' },
      { word: 'bird', emoji: '🐦' },
      { word: 'bog', emoji: '💧' }
    ],
    correctWords: ['log', 'fog', 'hog', 'bog']
  },
  {
    targetWord: { 
      word: 'star', 
      emoji: '⭐',
      audio: 'star'
    },
    options: [
      { word: 'car', emoji: '🚗' },
      { word: 'far', emoji: '📍' },
      { word: 'jar', emoji: '🫙' },
      { word: 'sun', emoji: '☀️' },
      { word: 'moon', emoji: '🌙' },
      { word: 'bar', emoji: '📏' }
    ],
    correctWords: ['car', 'far', 'jar', 'bar']
  },
  {
    targetWord: { 
      word: 'bee', 
      emoji: '🐝',
      audio: 'bee'
    },
    options: [
      { word: 'tea', emoji: '🫖' },
      { word: 'sea', emoji: '🌊' },
      { word: 'key', emoji: '🔑' },
      { word: 'ant', emoji: '🐜' },
      { word: 'fly', emoji: '🪰' },
      { word: 'tree', emoji: '🌳' }
    ],
    correctWords: ['tea', 'sea', 'key', 'tree']
  }
];

const RhymingWordsWorksheet: React.FC = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
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

  const currentSet = RHYME_SETS[currentSetIndex];

  // Speech synthesis for feedback and hints
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleWordClick = (word: string) => {
    // Speak the word when clicked
    speak(word);
    
    if (selectedWords.includes(word)) {
      setSelectedWords(prev => prev.filter(w => w !== word));
    } else {
      setSelectedWords(prev => [...prev, word]);
    }
  };

  const checkAnswers = (markCorrect: () => void, markIncorrect: () => void) => {
    if (hasAnswered) return;

    const isAllCorrect = selectedWords.every(word => currentSet.correctWords.includes(word)) &&
                        currentSet.correctWords.every(word => selectedWords.includes(word));
    
    setIsCorrect(isAllCorrect);
    setShowFeedback(true);
    setHasAnswered(true);

    if (isAllCorrect) {
      markCorrect();
      speak("Great job! Those words rhyme perfectly!");
      if (currentSetIndex === RHYME_SETS.length - 1) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 5000);
      }
      setTimeout(() => {
        if (currentSetIndex < RHYME_SETS.length - 1) {
          setCurrentSetIndex(prev => prev + 1);
          setSelectedWords([]);
          setShowFeedback(false);
          setHasAnswered(false);
        }
      }, 2000);
    } else {
      markIncorrect();
      speak("Let's try again! Listen carefully to the sounds.");
      setTimeout(() => {
        setSelectedWords([]);
        setShowFeedback(false);
        setHasAnswered(false);
      }, 2000);
    }
  };

  return (
    <WorksheetTracker
      totalQuestions={RHYME_SETS.length}
      pointsPerQuestion={POINTS_PER_QUESTION}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Rhyming Words Summary:', summary);
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
                totalQuestions={RHYME_SETS.length * POINTS_PER_QUESTION}
              />

              <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
                {/* Target Word Section */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-purple-700 mb-4">
                    Find words that rhyme with:
                  </h2>
                  <motion.div
                    className="inline-block p-6 bg-purple-100 rounded-xl cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => speak(currentSet.targetWord.word)}
                  >
                    <div className="text-6xl mb-2">{currentSet.targetWord.emoji}</div>
                    <div className="text-3xl font-bold text-purple-800">{currentSet.targetWord.word}</div>
                  </motion.div>
                </div>

                {/* Word Options Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {currentSet.options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        p-4 rounded-lg border-4 transition-all duration-300
                        ${selectedWords.includes(option.word)
                          ? 'border-purple-500 bg-purple-100'
                          : 'border-gray-200 hover:border-purple-300'}
                      `}
                      onClick={() => handleWordClick(option.word)}
                    >
                      <div className="text-4xl mb-2">{option.emoji}</div>
                      <div className="text-xl font-semibold text-gray-700">{option.word}</div>
                    </motion.button>
                  ))}
                </div>

                {/* Check Answer Button */}
                <div className="text-center">
                  <button
                    onClick={() => checkAnswers(markCorrect, markIncorrect)}
                    className={`
                      px-8 py-3 rounded-full text-lg font-semibold
                      transition-colors duration-300
                      ${selectedWords.length === 0 || hasAnswered
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-purple-600 text-white hover:bg-purple-700'}
                    `}
                    disabled={selectedWords.length === 0 || hasAnswered}
                  >
                    Check Answers
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
                        ? "Excellent! Those words rhyme perfectly! 🌟"
                        : "Let's try again! Listen to how the words sound. 🎵"}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-purple-600 mb-2">
                    <span>Progress</span>
                    <span>{currentSetIndex + 1} of {RHYME_SETS.length}</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${((currentSetIndex + 1) / RHYME_SETS.length) * 100}%` }}
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

export default RhymingWordsWorksheet; 

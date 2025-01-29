import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';

interface WordPicture {
  word: string;
  image: string;
  emoji: string;
  audio?: string;
}

const POINTS_PER_QUESTION = 10;

const WORD_PICTURES: WordPicture[] = [
  { word: 'cat', emoji: '🐱', image: '🐱', audio: 'cat' },
  { word: 'box', emoji: '📦', image: '📦', audio: 'box' },
  { word: 'jam', emoji: '🍓', image: '🍓', audio: 'jam' },
  { word: 'red', emoji: '🔴', image: '��', audio: 'red' },
  { word: 'fun', emoji: '🎪', image: '��', audio: 'fun' },
  { word: 'dog', emoji: '🐕', image: '🐕', audio: 'dog' },
  { word: 'leg', emoji: '🦵', image: '🦵', audio: 'leg' },
  { word: 'pen', emoji: '🖊️', image: '🖊️', audio: 'pen' },
  { word: 'sun', emoji: '☀️', image: '☀️', audio: 'sun' },
  { word: 'hat', emoji: '👒', image: '👒', audio: 'hat' }
];

const PictureWordWorksheet: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
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

  // Speech synthesis for feedback and hints
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8; // Slower rate for children
      utterance.pitch = 1.2; // Slightly higher pitch
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const currentWord = WORD_PICTURES[currentIndex];
  
  // Shuffle words for options
  const getShuffledOptions = useCallback(() => {
    const options = [...WORD_PICTURES]
      .filter(wp => wp.word !== currentWord.word) // Remove current word from pool
      .sort(() => Math.random() - 0.5)
      .slice(0, 3) // Get 3 random words
      .map(wp => wp.word);
    
    // Add current word at random position
    const position = Math.floor(Math.random() * 4);
    options.splice(position, 0, currentWord.word);
    
    return options;
  }, [currentWord.word]);

  const [wordOptions, setWordOptions] = useState<string[]>(() => getShuffledOptions());

  // Update options when currentIndex changes
  React.useEffect(() => {
    setWordOptions(getShuffledOptions());
  }, [currentIndex, getShuffledOptions]);

  const handleWordSelect = (word: string) => {
    if (hasAnswered) return;
    setSelectedWord(word);
    speak(word);
  };

  const checkAnswer = (markCorrect: () => void, markIncorrect: () => void) => {
    if (hasAnswered || !selectedWord) return;

    const isAnswerCorrect = selectedWord === currentWord.word;
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    setHasAnswered(true);

    if (isAnswerCorrect) {
      markCorrect();
      speak("Excellent! That's correct!");
      if (currentIndex === WORD_PICTURES.length - 1) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 5000);
      }
      setTimeout(() => {
        if (currentIndex < WORD_PICTURES.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setSelectedWord('');
          setShowFeedback(false);
          setHasAnswered(false);
          setWordOptions(getShuffledOptions());
        }
      }, 2000);
    } else {
      markIncorrect();
      speak("Let's try again! Listen carefully to the word.");
      setTimeout(() => {
        setSelectedWord('');
        setShowFeedback(false);
        setHasAnswered(false);
      }, 2000);
    }
  };

  return (
    <WorksheetTracker
      totalQuestions={WORD_PICTURES.length}
      pointsPerQuestion={POINTS_PER_QUESTION}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Picture Word Association Summary:', summary);
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
                totalQuestions={WORD_PICTURES.length * POINTS_PER_QUESTION}
              />

              <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
                {/* Picture Display */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-purple-700 mb-4">
                    What word matches this picture?
                  </h2>
                  <motion.div
                    className="inline-block p-6 bg-purple-100 rounded-xl cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => speak(currentWord.word)}
                  >
                    <div className="text-8xl mb-2">{currentWord.emoji}</div>
                  </motion.div>
                </div>

                {/* Word Options Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {wordOptions.map((word, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        p-4 rounded-lg border-4 transition-all duration-300
                        ${selectedWord === word
                          ? 'border-purple-500 bg-purple-100'
                          : 'border-gray-200 hover:border-purple-300'}
                      `}
                      onClick={() => handleWordSelect(word)}
                    >
                      <div className="text-2xl font-bold text-gray-700">{word}</div>
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
                      ${!selectedWord || hasAnswered
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-purple-600 text-white hover:bg-purple-700'}
                    `}
                    disabled={!selectedWord || hasAnswered}
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
                        ? "Wonderful! You got it right! 🌟"
                        : "Let's try again! You can do it! 💪"}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-purple-600 mb-2">
                    <span>Progress</span>
                    <span>{currentIndex + 1} of {WORD_PICTURES.length}</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${((currentIndex + 1) / WORD_PICTURES.length) * 100}%` }}
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

export default PictureWordWorksheet; 

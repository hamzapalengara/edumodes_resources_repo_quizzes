import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

// Word pairs data with football theme
const WORD_PAIRS = [
  { word1: 'fast', word2: 'slow', emoji1: '⚡', emoji2: '🐢' },
  { word1: 'win', word2: 'lose', emoji1: '🏆', emoji2: '😢' },
  { word1: 'up', word2: 'down', emoji1: '⬆️', emoji2: '⬇️' },
  { word1: 'left', word2: 'right', emoji1: '👈', emoji2: '👉' },
  { word1: 'start', word2: 'finish', emoji1: '🏁', emoji2: '🔚' },
  { word1: 'strong', word2: 'weak', emoji1: '💪', emoji2: '🌱' },
  { word1: 'attack', word2: 'defend', emoji1: '⚔️', emoji2: '🛡️' },
  { word1: 'first', word2: 'last', emoji1: '1️⃣', emoji2: '🔚' },
  { word1: 'loud', word2: 'quiet', emoji1: '📢', emoji2: '🤫' },
  { word1: 'happy', word2: 'sad', emoji1: '😄', emoji2: '😢' },
];

// Success messages with football theme
const SUCCESS_MESSAGES = [
  "GOAL! 🥅",
  "Perfect Pass! ⚽",
  "Great Teamwork! 🤝",
  "Amazing Shot! 🎯",
  "Champion Move! 🏆",
  "Fantastic Play! ⭐",
];

interface WordCard {
  word: string;
  emoji: string;
  pairIndex: number;
  isWord1: boolean;
}

const WordOppositesWorksheet: React.FC = () => {
  // Create shuffled array of word cards
  const createShuffledCards = () => {
    const cards: WordCard[] = WORD_PAIRS.flatMap((pair, index) => [
      { word: pair.word1, emoji: pair.emoji1, pairIndex: index, isWord1: true },
      { word: pair.word2, emoji: pair.emoji2, pairIndex: index, isWord1: false }
    ]);
    return cards.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(createShuffledCards());
  const [selectedCard, setSelectedCard] = useState<WordCard | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
  const [showSuccess, setShowSuccess] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  const totalQuestions = WORD_PAIRS.length;
  const POINTS_PER_QUESTION = 10;

  // Function to stop current speech
  const stopCurrentSpeech = () => {
    if (window.speechSynthesis && currentSpeech.current) {
      window.speechSynthesis.cancel();
      currentSpeech.current = null;
    }
  };

  // Function to speak text
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      stopCurrentSpeech();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      currentSpeech.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Clean up speech on unmount
  React.useEffect(() => {
    return () => {
      stopCurrentSpeech();
    };
  }, []);

  // Play football sound effect
  const playFootballSound = (correct: boolean) => {
    const audio = new Audio(correct ? '/whistle-cheer.mp3' : '/referee-whistle.mp3');
    audio.volume = 0.3;
    audio.play().catch(console.error);
  };

  return (
    <WorksheetTracker 
      totalQuestions={totalQuestions}
      pointsPerQuestion={POINTS_PER_QUESTION}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Summary generated:', summary);
      }}
    >
      {({ score, maxScore, markAttempted, markCorrect, markIncorrect, reset }) => {
        const handleCardClick = (card: WordCard) => {
          if (matchedPairs.has(card.pairIndex)) return;

          if (!selectedCard) {
            setSelectedCard(card);
            speak(card.word);
            return;
          }

          if (selectedCard.pairIndex === card.pairIndex && selectedCard.isWord1 !== card.isWord1) {
            // Correct match
            markAttempted();
            markCorrect();
            playFootballSound(true);
            setMatchedPairs(new Set([...matchedPairs, card.pairIndex]));
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 1500);
            speak(`Correct! ${selectedCard.word} and ${card.word} are opposites!`);

            if (matchedPairs.size + 1 === totalQuestions) {
              setIsComplete(true);
              const celebrationAudio = new Audio('/crowd-cheer.mp3');
              celebrationAudio.play().catch(console.error);
            }
          } else {
            // Incorrect match
            markAttempted();
            markIncorrect();
            playFootballSound(false);
            speak("Try again!");
          }
          setSelectedCard(null);
        };

        const handleReset = () => {
          stopCurrentSpeech();
          setCards(createShuffledCards());
          setSelectedCard(null);
          setMatchedPairs(new Set());
          setIsComplete(false);
          setShowSuccess(false);
          reset();
        };

        return (
          <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-blue-100">
            <WorksheetHeader />
            
            <div className="px-0 md:px-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-6">
                  Match the Opposite Words
                </h1>

                <div className="mb-6">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                {/* Instructions */}
                <div className="text-center text-gray-600 mb-6">
                  <p className="mb-2">Click two cards to find matching opposites!</p>
                  <p className="text-sm">Score goals by matching all pairs</p>
                </div>

                {/* Word Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-0.5 md:gap-4 mb-8">
                  {cards.map((card, index) => (
                    <motion.button
                      key={index}
                      className={`
                        w-full aspect-square rounded-lg p-2
                        ${matchedPairs.has(card.pairIndex)
                          ? 'bg-green-100 ring-2 ring-green-400'
                          : selectedCard?.pairIndex === card.pairIndex && selectedCard?.word === card.word
                            ? 'bg-yellow-100 ring-2 ring-yellow-400'
                            : 'bg-green-50 hover:bg-green-100 ring-1 ring-green-200'}
                        flex flex-col items-center justify-center
                        transition-all duration-300
                        ${matchedPairs.has(card.pairIndex) ? 'cursor-default' : 'cursor-pointer'}
                      `}
                      onClick={() => !matchedPairs.has(card.pairIndex) && handleCardClick(card)}
                      whileHover={!matchedPairs.has(card.pairIndex) ? { scale: 1.05 } : {}}
                      whileTap={!matchedPairs.has(card.pairIndex) ? { scale: 0.95 } : {}}
                    >
                      <span className="text-3xl mb-2">{card.emoji}</span>
                      <span className={`
                        text-lg font-bold
                        ${matchedPairs.has(card.pairIndex)
                          ? 'text-green-600'
                          : selectedCard?.pairIndex === card.pairIndex && selectedCard?.word === card.word
                            ? 'text-yellow-600'
                            : 'text-green-600'}
                      `}>
                        {card.word}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Success Animation */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="fixed inset-0 pointer-events-none flex items-center justify-center"
                  >
                    <div className="relative">
                      {/* Football-themed celebration emoji */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          scale: [1, 1.5, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-7xl">
                          {['⚽', '🥅', '🏆', '🎯', '⭐', '🏃'][Math.floor(Math.random() * 6)]}
                        </div>
                      </motion.div>

                      {/* Success message */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12
                                  bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-lg font-bold text-green-600 whitespace-nowrap">
                          {SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]}
                        </p>
                      </motion.div>

                      {/* Floating football elements */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2"
                        initial="hidden"
                        animate="visible"
                      >
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-2xl"
                            style={{
                              left: Math.random() * 100 + '%',
                              top: Math.random() * 100 + '%',
                            }}
                            animate={{
                              y: [0, -100],
                              x: [0, Math.random() * 40 - 20],
                              opacity: [1, 0],
                              rotate: [0, Math.random() * 360],
                            }}
                            transition={{
                              duration: Math.random() * 2 + 1,
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: Math.random() * 2,
                            }}
                          >
                            {['⚽', '🥅', '🏆', '🎯', '⭐', '🏃'][i % 6]}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Completion celebration */}
                {isComplete && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-white p-8 rounded-2xl shadow-2xl text-center"
                    >
                      <h2 className="text-3xl font-bold text-green-600 mb-4">
                        CHAMPION! 🏆
                      </h2>
                      <p className="text-gray-600 mb-6">
                        You've matched all the opposite pairs!
                      </p>
                      <button
                        onClick={handleReset}
                        className="bg-green-500 text-white px-6 py-2 rounded-full
                                 hover:bg-green-600 transition-colors"
                      >
                        Play Again
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default WordOppositesWorksheet; 
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

// Word pairs data with shopping mall theme
const WORD_PAIRS = [
  { word1: 'buy', word2: 'sell', emoji1: '🛍️', emoji2: '💰' },
  { word1: 'expensive', word2: 'cheap', emoji1: '💎', emoji2: '🏷️' },
  { word1: 'full', word2: 'empty', emoji1: '🛒', emoji2: '🛄' },
  { word1: 'busy', word2: 'quiet', emoji1: '👥', emoji2: '🤫' },
  { word1: 'modern', word2: 'old', emoji1: '🏢', emoji2: '🏚️' },
  { word1: 'open', word2: 'closed', emoji1: '🔓', emoji2: '🔒' },
  { word1: 'heavy', word2: 'light', emoji1: '📦', emoji2: '🪶' },
  { word1: 'many', word2: 'few', emoji1: '💫', emoji2: '⭐' },
  { word1: 'high', word2: 'low', emoji1: '⬆️', emoji2: '⬇️' },
  { word1: 'inside', word2: 'outside', emoji1: '🏬', emoji2: '🌳' },
];

// Success messages with shopping theme
const SUCCESS_MESSAGES = [
  "Great deal! 🛍️",
  "Perfect match! ⭐",
  "Shopping success! 🎯",
  "Keep shopping! 💫",
  "Excellent find! 🏆",
  "Super shopper! 🌟",
];

interface WordCard {
  word: string;
  emoji: string;
  pairIndex: number;
  isWord1: boolean;
}

const WordOppositesWorksheet: React.FC = () => {
  const [cards, setCards] = useState<WordCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<WordCard | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
  const [showSuccess, setShowSuccess] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Add reference to track current speech
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  // Create shuffled cards from word pairs
  const createShuffledCards = () => {
    const allCards: WordCard[] = WORD_PAIRS.flatMap((pair, index) => [
      { word: pair.word1, emoji: pair.emoji1, pairIndex: index, isWord1: true },
      { word: pair.word2, emoji: pair.emoji2, pairIndex: index, isWord1: false },
    ]);
    
    // Fisher-Yates shuffle
    for (let i = allCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }
    
    return allCards;
  };

  // Initialize cards
  React.useEffect(() => {
    setCards(createShuffledCards());
  }, []);

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

  // Play mall-themed sound effect
  const playMallSound = (correct: boolean) => {
    const audio = new Audio(correct ? '/cash-register.mp3' : '/wrong-mall.mp3');
    audio.volume = 0.3;
    audio.play().catch(console.error);
  };

  return (
    <WorksheetTracker 
      totalQuestions={WORD_PAIRS.length}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Summary generated:', summary);
      }}
    >
      {({ score, maxScore, markAttempted, markCorrect, markIncorrect }) => {
        const handleCardClick = (card: WordCard) => {
          if (matchedPairs.has(card.pairIndex)) return;
          
          markAttempted();

          if (!selectedCard) {
            setSelectedCard(card);
            speak(card.word);
            return;
          }

          if (selectedCard.pairIndex === card.pairIndex && selectedCard !== card) {
            // Correct match
            markCorrect();
            playMallSound(true);
            setMatchedPairs(new Set([...matchedPairs, card.pairIndex]));
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 1500);
            speak(`Correct! ${selectedCard.word} and ${card.word} are opposites!`);

            if (matchedPairs.size + 1 === WORD_PAIRS.length) {
              setIsComplete(true);
              const celebrationAudio = new Audio('/celebration.mp3');
              celebrationAudio.play().catch(console.error);
            }
          } else {
            // Incorrect match
            markIncorrect();
            playMallSound(false);
            speak(`Try again! ${selectedCard.word} and ${card.word} are not opposites.`);
          }

          setSelectedCard(null);
        };

        return (
          <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
            <WorksheetHeader />
            
            <div className="px-0 md:px-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
                  Mall Opposites Match
                </h1>

                <div className="mb-6">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                {/* Instructions */}
                <div className="text-center text-gray-600 mb-6">
                  <p className="mb-2">Find and match pairs of opposite words!</p>
                  <p className="text-sm">Score points by matching all pairs correctly</p>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-0.5 md:gap-4 mb-8">
                  {cards.map((card, index) => (
                    <motion.button
                      key={index}
                      className={`
                        w-full aspect-square rounded-lg p-2
                        flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        shadow-sm hover:shadow-md
                        ${matchedPairs.has(card.pairIndex)
                          ? 'bg-gradient-to-br from-pink-400 to-pink-500 text-white ring-2 ring-pink-400 ring-opacity-50'
                          : selectedCard?.word === card.word
                          ? 'bg-gradient-to-br from-purple-400 to-purple-500 text-white ring-2 ring-purple-400 ring-opacity-50'
                          : 'bg-gradient-to-br from-gray-50 to-white hover:from-pink-50 hover:to-purple-50 ring-1 ring-pink-200'}
                        ${matchedPairs.has(card.pairIndex) ? 'cursor-default transform scale-95' : 'cursor-pointer'}
                        backdrop-blur-sm backdrop-filter
                      `}
                      onClick={() => !matchedPairs.has(card.pairIndex) && handleCardClick(card)}
                      whileHover={!matchedPairs.has(card.pairIndex) ? { scale: 1.05 } : {}}
                      whileTap={!matchedPairs.has(card.pairIndex) ? { scale: 0.95 } : {}}
                    >
                      <span className="text-3xl mb-2 filter drop-shadow-md">{card.emoji}</span>
                      <span className={`
                        text-lg font-bold tracking-wide
                        ${matchedPairs.has(card.pairIndex)
                          ? 'text-white'
                          : selectedCard?.word === card.word
                          ? 'text-white'
                          : 'text-gray-700'}
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
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          scale: [1, 1.5, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-7xl filter drop-shadow-lg">
                          {['🛍️', '🎁', '🌟', '⭐', '💫', '🏆'][Math.floor(Math.random() * 6)]}
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12
                                  bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-lg font-bold text-pink-600 whitespace-nowrap">
                          {SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Completion celebration */}
                {isComplete && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4"
                    >
                      <h2 className="text-3xl font-bold text-pink-600 mb-4">
                        Shopping Complete! 🛍️
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Congratulations! You've matched all the opposite pairs!
                      </p>
                      <button
                        onClick={() => window.location.reload()}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full
                                 hover:from-pink-600 hover:to-purple-700 transition-all duration-300
                                 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Shop Again
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
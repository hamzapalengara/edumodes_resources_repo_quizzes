import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface WordCard {
  word: string;
  emoji: string;
  pairIndex: number;
  isWord1: boolean;
}

// Word pairs with food theme
const WORD_PAIRS = [
  { word1: 'delicious', word2: 'tasty', emoji1: '😋', emoji2: '🍽️' },
  { word1: 'crisp', word2: 'crunchy', emoji1: '🍎', emoji2: '🥜' },
  { word1: 'sweet', word2: 'sugary', emoji1: '🍯', emoji2: '🍬' },
  { word1: 'fresh', word2: 'new', emoji1: '🥬', emoji2: '✨' },
  { word1: 'hot', word2: 'warm', emoji1: '🔥', emoji2: '♨️' },
  { word1: 'cold', word2: 'chilly', emoji1: '❄️', emoji2: '🧊' },
  { word1: 'juicy', word2: 'succulent', emoji1: '🍊', emoji2: '💧' },
  { word1: 'spicy', word2: 'hot', emoji1: '🌶️', emoji2: '🔥' },
  { word1: 'salty', word2: 'briny', emoji1: '🧂', emoji2: '🌊' },
  { word1: 'bitter', word2: 'sharp', emoji1: '☕', emoji2: '⚡' },
];

// Success messages with food theme
const SUCCESS_MESSAGES = [
  'Yummy match! 🎉',
  'Delicious pairing! ⭐',
  'Tasty combination! 🌟',
  'Perfect flavor match! 🏆',
  'Wonderful taste! 🎯',
];

const WordSynonymsWorksheet: React.FC = () => {
  const [cards, setCards] = useState<WordCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<WordCard | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const speechSynthesis = window.speechSynthesis;
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null);

  const createShuffledCards = () => {
    const allCards: WordCard[] = [];
    WORD_PAIRS.forEach((pair, index) => {
      allCards.push({
        word: pair.word1,
        emoji: pair.emoji1,
        pairIndex: index,
        isWord1: true,
      });
      allCards.push({
        word: pair.word2,
        emoji: pair.emoji2,
        pairIndex: index,
        isWord1: false,
      });
    });

    // Shuffle cards
    return allCards.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setCards(createShuffledCards());
  }, []);

  const stopCurrentSpeech = () => {
    if (currentUtterance.current) {
      speechSynthesis.cancel();
    }
  };

  const speak = (text: string) => {
    stopCurrentSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    currentUtterance.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const playFoodSound = (correct: boolean) => {
    const audio = new Audio(
      correct
        ? '/sounds/correct_chime.mp3'
        : '/sounds/incorrect_buzz.mp3'
    );
    audio.play();
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  const handleCardClick = (
    card: WordCard,
    {
      markIncorrect,
      speak,
      playSound,
    }: {
      markIncorrect: () => void;
      speak: (text: string) => void;
      playSound: (correct: boolean) => void;
    }
  ) => {
    if (isChecking || matchedPairs.includes(card.pairIndex)) {
      return;
    }

    if (!selectedCard) {
      setSelectedCard(card);
      speak(card.word);
    } else {
      if (
        selectedCard.pairIndex === card.pairIndex &&
        selectedCard.isWord1 !== card.isWord1
      ) {
        // Correct match
        setMatchedPairs([...matchedPairs, card.pairIndex]);
        setSelectedCard(null);
        playSound(true);
        speak(SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]);
      } else {
        // Incorrect match
        setIsChecking(true);
        markIncorrect();
        playSound(false);
        speak('Try again!');
        setTimeout(() => {
          setSelectedCard(null);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const handleReset = () => {
    setCards(createShuffledCards());
    setSelectedCard(null);
    setMatchedPairs([]);
    setIsChecking(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={WORD_PAIRS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ addPoints, markIncorrect, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 w-full">
                <h1 className="text-2xl sm:text-3xl font-bold text-orange-600">
                  Match Similar Food Words
                </h1>
                <div className="w-full sm:w-auto">
                  <ScoreDisplay score={score} totalQuestions={WORD_PAIRS.length * 10} />
                </div>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-5 gap-0.5 md:gap-4">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className={`
                      w-full aspect-square rounded-lg cursor-pointer
                      ${
                        matchedPairs.includes(card.pairIndex)
                          ? 'bg-green-100'
                          : selectedCard?.word === card.word
                          ? 'bg-blue-100'
                          : 'bg-orange-50 hover:bg-orange-100'
                      }
                      flex flex-col items-center justify-center p-1 md:p-2
                      transition-colors duration-300
                    `}
                    onClick={() =>
                      handleCardClick(card, {
                        markIncorrect,
                        speak,
                        playSound: (correct: boolean) => {
                          if (correct) {
                            addPoints(10);
                          }
                          playFoodSound(correct);
                        },
                      })
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl sm:text-3xl mb-1">{card.emoji}</span>
                    <span className="text-xs sm:text-sm font-bold text-center">
                      {card.word}
                    </span>
                  </motion.div>
                ))}
              </div>

              {matchedPairs.length === WORD_PAIRS.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-center"
                >
                  <h2 className="text-xl font-bold text-green-600 mb-4">
                    🎉 Congratulations! You've matched all the pairs! 🎉
                  </h2>
                  <button
                    onClick={handleReset}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Play Again
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default WordSynonymsWorksheet; 
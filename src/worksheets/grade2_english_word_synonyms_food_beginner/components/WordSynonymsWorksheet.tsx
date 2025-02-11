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
  { word1: 'Delicious', word2: 'Tasty', emoji1: '😋', emoji2: '🍽️' },
  { word1: 'Sour', word2: 'Tangy', emoji1: '🍋', emoji2: '🥝' },
  { word1: 'Crisp', word2: 'Crunchy', emoji1: '🍎', emoji2: '🥜' },
  { word1: 'Icy', word2: 'Chilled', emoji1: '🧊', emoji2: '❄️' },
  { word1: 'Mild', word2: 'Light', emoji1: '🥛', emoji2: '🫖' },
  { word1: 'Flavorful', word2: 'Savory', emoji1: '🌶️', emoji2: '🍖' },
  { word1: 'Nutritious', word2: 'Healthy', emoji1: '🥗', emoji2: '🥬' },
  { word1: 'Tender', word2: 'Soft', emoji1: '🥩', emoji2: '🍞' },
  { word1: 'Yummy', word2: 'Appetizing', emoji1: '😊', emoji2: '🍽️' },
  { word1: 'Smelly', word2: 'Fragrant', emoji1: '👃', emoji2: '🌺' },
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const createShuffledCards = () => {
    const allCards = WORD_PAIRS.flatMap((pair, index) => [
      { word: pair.word1, emoji: pair.emoji1, pairIndex: index, isWord1: true },
      { word: pair.word2, emoji: pair.emoji2, pairIndex: index, isWord1: false },
    ]);
    return allCards.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setCards(createShuffledCards());
  }, []);

  const stopCurrentSpeech = () => {
    window.speechSynthesis.cancel();
  };

  const speak = (text: string) => {
    stopCurrentSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const playFoodSound = (correct: boolean) => {
    if (audioRef.current) {
      audioRef.current.src = correct
        ? '/sounds/correct_chime.mp3'
        : '/sounds/incorrect_buzz.mp3';
      audioRef.current.play().catch(console.error);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
    localStorage.setItem('food_synonyms_summary', JSON.stringify(summary));
  };

  const handleCardClick = (
    card: WordCard,
    {
      markCorrect,
      markIncorrect,
      markAttempted,
      speak,
      playSound,
    }: {
      markCorrect: () => void;
      markIncorrect: () => void;
      markAttempted: () => void;
      speak: (text: string) => void;
      playSound: (correct: boolean) => void;
    }
  ) => {
    if (isChecking || matchedPairs.includes(card.pairIndex)) return;

    if (!selectedCard) {
      setSelectedCard(card);
      speak(card.word);
    } else {
      if (selectedCard.pairIndex === card.pairIndex && selectedCard !== card) {
        markAttempted();
        markCorrect();
        setMatchedPairs([...matchedPairs, card.pairIndex]);
        playSound(true);
        speak(
          SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]
        );
      } else {
        markAttempted();
        markIncorrect();
        playSound(false);
        speak('Try again!');
      }
      setIsChecking(true);
      setTimeout(() => {
        setSelectedCard(null);
        setIsChecking(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <WorksheetHeader />
      <audio ref={audioRef} />

      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <WorksheetTracker
          totalQuestions={WORD_PAIRS.length}
          pointsPerQuestion={10}
          onSummaryGenerated={handleSummaryGenerated}
        >
          {({ markCorrect, markIncorrect, markAttempted, score }) => (
            <>
              <div className="bg-white/80 backdrop-blur-sm p-4 shadow-lg rounded-xl mb-4">
                <ScoreDisplay
                  score={score}
                  totalQuestions={WORD_PAIRS.length * 10}
                />
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
                        markCorrect,
                        markIncorrect,
                        markAttempted,
                        speak,
                        playSound: (correct: boolean) => {
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
            </>
          )}
        </WorksheetTracker>
      </div>
    </div>
  );
};

export default WordSynonymsWorksheet; 
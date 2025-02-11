import React, { useState } from 'react';
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

// Word pairs with space theme
const WORD_PAIRS = [
  { word1: 'bright', word2: 'dark', emoji1: '✨', emoji2: '🌑' },
  { word1: 'near', word2: 'far', emoji1: '🛸', emoji2: '🌌' },
  { word1: 'heavy', word2: 'light', emoji1: '🪨', emoji2: '☁️' },
  { word1: 'big', word2: 'small', emoji1: '🌟', emoji2: '⭐' },
  { word1: 'fast', word2: 'slow', emoji1: '⚡', emoji2: '🐌' },
  { word1: 'cold', word2: 'hot', emoji1: '❄️', emoji2: '🔥' },
  { word1: 'empty', word2: 'full', emoji1: '🕳️', emoji2: '💫' },
  { word1: 'high', word2: 'low', emoji1: '🚀', emoji2: '⬇️' },
  { word1: 'deep', word2: 'shallow', emoji1: '🌊', emoji2: '🏖️' },
  { word1: 'new', word2: 'old', emoji1: '🌠', emoji2: '🌘' },
];

const createShuffledCards = () => {
  const cards: WordCard[] = [];
  WORD_PAIRS.forEach((pair, index) => {
    cards.push({
      word: pair.word1,
      emoji: pair.emoji1,
      pairIndex: index,
      isWord1: true,
    });
    cards.push({
      word: pair.word2,
      emoji: pair.emoji2,
      pairIndex: index,
      isWord1: false,
    });
  });
  return cards.sort(() => Math.random() - 0.5);
};

const WordOppositesWorksheet: React.FC = () => {
  const [cards] = useState<WordCard[]>(createShuffledCards());
  const [selectedCard, setSelectedCard] = useState<WordCard | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);

  const stopCurrentSpeech = () => {
    window.speechSynthesis.cancel();
  };

  const speak = (text: string) => {
    stopCurrentSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const playSpaceSound = (correct: boolean) => {
    const audio = new Audio(
      correct
        ? '/sounds/correct_chime.mp3'
        : '/sounds/incorrect_buzz.mp3'
    );
    audio.play();
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
    if (matchedPairs.includes(card.pairIndex)) {
      return;
    }

    markAttempted();

    if (!selectedCard) {
      setSelectedCard(card);
      speak(card.word);
      return;
    }

    if (selectedCard.pairIndex === card.pairIndex && selectedCard !== card) {
      markCorrect();
      playSound(true);
      setMatchedPairs([...matchedPairs, card.pairIndex]);
      speak(`Correct! ${selectedCard.word} and ${card.word} are opposites.`);
    } else {
      markIncorrect();
      playSound(false);
      speak('Try again');
    }

    setSelectedCard(null);
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
    // Store summary in localStorage for persistence
    localStorage.setItem('space_opposites_summary', JSON.stringify(summary));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={WORD_PAIRS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markIncorrect, markAttempted, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2 md:p-4 mb-4">
              <ScoreDisplay 
                score={score}
                totalQuestions={WORD_PAIRS.length * 10}
              />
            </div>

            {/* Game Container */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2 md:p-6">
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-0.5 md:gap-4">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className={`
                      w-full aspect-square rounded-lg cursor-pointer
                      ${
                        matchedPairs.includes(card.pairIndex)
                          ? 'bg-green-900/50 ring-2 ring-green-400'
                          : selectedCard?.word === card.word
                          ? 'bg-blue-900/50 ring-2 ring-blue-400'
                          : 'bg-black/30 hover:bg-black/40 ring-1 ring-blue-500/30'
                      }
                      flex flex-col items-center justify-center p-1 md:p-2
                      transition-colors duration-300
                    `}
                    onClick={() => {
                      if (!matchedPairs.includes(card.pairIndex)) {
                        handleCardClick(card, {
                          markCorrect,
                          markIncorrect,
                          markAttempted,
                          speak,
                          playSound: playSpaceSound,
                        });
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl sm:text-3xl mb-1">{card.emoji}</span>
                    <span className="text-xs sm:text-sm font-bold text-center text-blue-200">
                      {card.word}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Success Messages */}
              {matchedPairs.length === WORD_PAIRS.length && (
                <div className="mt-4 text-center">
                  <h2 className="text-2xl font-bold text-green-400 mb-2">
                    🚀 Mission Complete! 🌟
                  </h2>
                  <p className="text-blue-200">
                    You've mastered all the space opposites!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default WordOppositesWorksheet; 
import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface WordCard {
  word: string;
  emoji: string;
  pairIndex: number;
  isWord1: boolean;
}

// Word pairs with home & family theme
const WORD_PAIRS = [
  { word1: 'Neat', word2: 'Tidy', emoji1: '🧹', emoji2: '✨' },
  { word1: 'Huge', word2: 'Large', emoji1: '🏰', emoji2: '🏡' },
  { word1: 'Silent', word2: 'Quiet', emoji1: '🤫', emoji2: '😶' },
  { word1: 'Quick', word2: 'Fast', emoji1: '⚡', emoji2: '🏃' },
  { word1: 'Shut', word2: 'Closed', emoji1: '🚪', emoji2: '🔒' },
  { word1: 'Cheerful', word2: 'Joyful', emoji1: '😊', emoji2: '😄' },
  { word1: 'Cozy', word2: 'Comfy', emoji1: '🛋️', emoji2: '🧸' },
  { word1: 'Tough', word2: 'Stiff', emoji1: '💪', emoji2: '🪵' },
  { word1: 'Shiny', word2: 'Glowing', emoji1: '✨', emoji2: '💫' },
  { word1: 'Packed', word2: 'Filled', emoji1: '📦', emoji2: '🎁' },
];

// Color pairs for matched cards
const MATCH_COLORS = [
  'from-amber-400 to-amber-600',
  'from-orange-400 to-orange-600',
  'from-rose-400 to-rose-600',
  'from-pink-400 to-pink-600',
  'from-purple-400 to-purple-600',
  'from-indigo-400 to-indigo-600',
  'from-blue-400 to-blue-600',
  'from-cyan-400 to-cyan-600',
  'from-teal-400 to-teal-600',
  'from-emerald-400 to-emerald-600',
];

const WordSynonymsWorksheet: React.FC = () => {
  const [cards, setCards] = useState<WordCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<WordCard | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Create shuffled cards
  const createShuffledCards = () => {
    const allCards: WordCard[] = WORD_PAIRS.flatMap((pair, index) => [
      { word: pair.word1, emoji: pair.emoji1, pairIndex: index, isWord1: true },
      { word: pair.word2, emoji: pair.emoji2, pairIndex: index, isWord1: false },
    ]);
    return allCards.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setCards(createShuffledCards());
  }, []);

  const stopCurrentSpeech = () => {
    if (speechRef.current) {
      window.speechSynthesis.cancel();
    }
  };

  const speak = (text: string) => {
    stopCurrentSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const playHomeSound = (correct: boolean) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const audio = new Audio(correct ? '/sounds/home_correct.mp3' : '/sounds/home_wrong.mp3');
    audioRef.current = audio;
    audio.play().catch(console.error);
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  const handleCardClick = (
    card: WordCard,
    {
      markCorrect,
      markIncorrect,
      speak,
      playSound,
    }: {
      markCorrect: () => void;
      markIncorrect: () => void;
      speak: (text: string) => void;
      playSound: (correct: boolean) => void;
    }
  ) => {
    if (!selectedCard) {
      setSelectedCard(card);
      speak(card.word);
      return;
    }

    if (selectedCard.pairIndex === card.pairIndex && selectedCard !== card) {
      // Correct match
      markCorrect();
      playSound(true);
      setMatchedPairs(prev => [...prev, card.pairIndex]);
      speak(`Correct! ${selectedCard.word} and ${card.word} mean the same thing!`);

      // Check if game is complete
      if (matchedPairs.length + 1 === WORD_PAIRS.length) {
        setIsComplete(true);
        const celebrationAudio = new Audio('/sounds/home_win.mp3');
        celebrationAudio.play().catch(console.error);
      }
    } else {
      // Incorrect match
      markIncorrect();
      playSound(false);
      speak(`Try again! ${selectedCard.word} and ${card.word} are not synonyms.`);
    }

    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={WORD_PAIRS.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markIncorrect, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4">
              <ScoreDisplay 
                score={score}
                totalQuestions={WORD_PAIRS.length * 10}
              />
            </div>

            {/* Game Grid */}
            <div className="relative">
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center opacity-20" 
                   style={{ backgroundImage: 'url("/images/home_bg.jpg")' }} />

              {/* Cards Grid */}
              <div className="relative grid grid-cols-4 sm:grid-cols-5 gap-0.5 md:gap-2 p-2 md:p-4 bg-black/50 backdrop-blur-md rounded-xl">
                {cards.map((card, index) => {
                  const isMatched = matchedPairs.includes(card.pairIndex);
                  const isSelected = selectedCard?.word === card.word;
                  const matchColor = isMatched ? MATCH_COLORS[card.pairIndex] : 'from-amber-900 to-rose-900';

                  return (
                    <div
                      key={index}
                      className={`
                        relative w-full aspect-square rounded-lg transition-all duration-300
                        ${isSelected ? 'ring-4 ring-amber-400 scale-95' : ''}
                      `}
                      onClick={() => {
                        if (!isMatched && !isSelected && selectedCard !== card) {
                          handleCardClick(card, {
                            markCorrect,
                            markIncorrect,
                            speak,
                            playSound: playHomeSound,
                          });
                        }
                      }}
                    >
                      {/* Card Content */}
                      <div className={`
                        absolute inset-0 flex flex-col items-center justify-center p-1
                        bg-gradient-to-br ${matchColor}
                        rounded-lg border border-amber-500/30 hover:border-amber-400
                        ${isSelected ? 'border-amber-400' : ''}
                        cursor-pointer transform hover:scale-95 transition-all duration-300
                      `}>
                        <span className="text-2xl mb-1">{card.emoji}</span>
                        <span className="text-sm font-bold text-amber-100 text-center">
                          {card.word}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Completion Modal */}
            {isComplete && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-gradient-to-br from-amber-900 to-rose-900 p-6 rounded-xl max-w-sm mx-4 text-center">
                  <h2 className="text-2xl font-bold text-amber-300 mb-4">
                    Home Sweet Home! 🏡
                  </h2>
                  <p className="text-amber-200 mb-6">
                    You've mastered home-themed synonyms!
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-6 rounded-full
                             transition-all duration-300 transform hover:scale-105"
                  >
                    Play Again 🎮
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default WordSynonymsWorksheet; 
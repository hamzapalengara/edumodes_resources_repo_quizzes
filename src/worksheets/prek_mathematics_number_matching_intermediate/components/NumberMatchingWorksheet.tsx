import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import WorksheetTracker from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import confetti from 'canvas-confetti';

interface OceanCard {
  id: string;
  number: number;
  emoji: string;
  isMatched: boolean;
  matchColor?: string;
}

const OCEAN_ANIMALS = ['🐠', '🐋', '🐟', '🐡', '🦈'];
const MATCH_COLORS = [
  'bg-blue-100 border-blue-400',
  'bg-teal-100 border-teal-400',
  'bg-cyan-100 border-cyan-400',
  'bg-sky-100 border-sky-400',
  'bg-indigo-100 border-indigo-400'
];

const generateCards = () => {
  const numbers = Array.from({ length: 5 }, (_, i) => i + 6); // Generate numbers 6-10
  const cards: OceanCard[] = [];
  
  numbers.forEach((num, index) => {
    const matchColor = MATCH_COLORS[index];
    // Create number card
    cards.push({
      id: `num-${num}`,
      number: num,
      emoji: '',
      isMatched: false,
      matchColor
    });
    
    // Create animal card with same number
    cards.push({
      id: `animal-${num}`,
      number: num,
      emoji: OCEAN_ANIMALS[index],
      isMatched: false,
      matchColor
    });
  });
  
  // Shuffle cards
  return cards.sort(() => Math.random() - 0.5);
};

// Helper to render multiple animals
const renderAnimals = (emoji: string, count: number) => {
  return (
    <div className="grid grid-cols-3 gap-0.5 place-items-center">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="text-2xl md:text-3xl">
          {emoji}
        </span>
      ))}
    </div>
  );
};

const NumberMatchingWorksheet: React.FC = () => {
  const [cards, setCards] = useState<OceanCard[]>(generateCards());
  const [selectedCard, setSelectedCard] = useState<OceanCard | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [completedPairs, setCompletedPairs] = useState<number[]>([]);

  // Speech synthesis
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Reset game
  const resetGame = useCallback(() => {
    setCards(generateCards());
    setSelectedCard(null);
    setCompletedPairs([]);
    speak("Let's match numbers with ocean animals!");
  }, [speak]);

  // Handle card selection
  const handleCardClick = useCallback((card: OceanCard, markAttempted: () => void, markCorrect: () => void) => {
    if (isChecking || card.isMatched) return;

    markAttempted();
    
    if (!selectedCard) {
      setSelectedCard(card);
      speak(card.emoji ? `${card.number} animals` : `Number ${card.number}`);
    } else {
      setIsChecking(true);
      
      if (selectedCard.number === card.number && selectedCard.id !== card.id) {
        // Correct match
        speak("Correct match!");
        markCorrect();
        setCards(prev => prev.map(c => 
          (c.id === card.id || c.id === selectedCard.id) 
            ? { ...c, isMatched: true }
            : c
        ));
        setCompletedPairs(prev => [...prev, card.number]);
        
        // Ocean-themed celebration
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#60A5FA', '#2DD4BF', '#67E8F9']
        });
      } else {
        // Wrong match
        speak("Try again");
      }
      
      setTimeout(() => {
        setSelectedCard(null);
        setIsChecking(false);
      }, 1000);
    }
  }, [selectedCard, isChecking, speak]);

  // Handle game completion
  useEffect(() => {
    if (completedPairs.length === 5) {
      speak("Congratulations! You've matched all the numbers!");
      confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#60A5FA', '#2DD4BF', '#67E8F9', '#818CF8']
      });
    }
  }, [completedPairs.length, speak]);

  return (
    <WorksheetTracker
      totalQuestions={5}
      pointsPerQuestion={10}
    >
      {({ score, markCorrect, markAttempted }) => (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-cyan-100">
          {/* Standard Header */}
          <WorksheetHeader />

          {/* Score Display */}
          <div className="bg-blue-100/80 p-4 shadow-md">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score}
                totalQuestions={50}
              />
            </div>
          </div>

          <TouchContainer>
            <main className="px-0 md:px-4 py-8">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-6">
                    Match Numbers with Ocean Animals! 🌊
                  </h1>

                  {/* Instructions */}
                  <div className="text-center mb-6">
                    <p className="text-sm md:text-base text-gray-600 bg-blue-50 rounded-full px-4 py-2 inline-block">
                      Match each number with its ocean animal group
                    </p>
                  </div>

                  {/* Game Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                    {cards.map((card) => (
                      <motion.button
                        key={card.id}
                        onClick={() => handleCardClick(card, markAttempted, markCorrect)}
                        className={`aspect-square rounded-xl shadow-md flex items-center justify-center p-2
                          ${card.isMatched ? card.matchColor : 'bg-white'}
                          ${selectedCard?.id === card.id ? 'ring-4 ring-blue-400' : ''}
                          ${!card.isMatched && !isChecking ? 'hover:bg-blue-50 active:bg-blue-100' : ''}
                          transition-all duration-300 ease-in-out
                          border-2 ${card.isMatched ? '' : 'border-blue-200'}`}
                        animate={{
                          scale: card.isMatched ? [1, 1.1, 1] : 1,
                          rotate: card.isMatched ? [0, 10, 0] : 0
                        }}
                        disabled={isChecking || card.isMatched}
                      >
                        {card.emoji ? (
                          renderAnimals(card.emoji, card.number)
                        ) : (
                          <span className="font-bold text-4xl md:text-5xl text-blue-600">
                            {card.number}
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Reset Button */}
                  {completedPairs.length > 0 && (
                    <div className="mt-6 text-center">
                      <button
                        onClick={resetGame}
                        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 active:bg-blue-700 transition-colors"
                      >
                        Play Again 🔄
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </TouchContainer>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default NumberMatchingWorksheet; 
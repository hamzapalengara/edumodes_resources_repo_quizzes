import React, { useState, useEffect, useCallback } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import Confetti from 'react-confetti';

// Card interface
interface Card {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

// Card images with friendly animal emojis and their names
const cardImages = [
  { emoji: '🐶', name: 'Puppy' },
  { emoji: '🐱', name: 'Kitty' },
  { emoji: '🐰', name: 'Bunny' },
  { emoji: '🐼', name: 'Panda' },
  { emoji: '🦊', name: 'Fox' },
  { emoji: '🦁', name: 'Lion' }
];

// Voice feedback messages
const voiceFeedback = {
  matches: [
    "Great job! You found a match!",
    "Wonderful! They match!",
    "Amazing! Keep going!",
    "Perfect match! You're doing great!",
    "Excellent work! That's a pair!"
  ],
  speedBonus: [
    "Super fast! You got bonus points!",
    "Lightning quick! Extra points!",
    "Wow, that was fast! Bonus points!"
  ],
  gameComplete: [
    "Congratulations! You've completed the game! You're a memory master!",
    "Amazing job! You found all the matches! You're fantastic!"
  ],
  encouragement: [
    "Keep trying! You can do it!",
    "Almost there! You're doing great!",
    "You're getting better! Keep going!"
  ]
};

// Visual feedback messages
const matchMessages = [
  "Amazing match! 🌟",
  "Great job! ⭐",
  "You're doing fantastic! 🎯",
  "Wonderful! Keep going! 🌈",
  "Super smart! 🧠",
  "Perfect pair! 🎨"
];

// Scoring system
const SCORING = {
  MATCH_POINTS: 10,
  SPEED_BONUS: 5,
  MAX_BASE_SCORE: 60,
  MAX_BONUS_SCORE: 30
};

const MemoryWorksheet: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [lastFlipTime, setLastFlipTime] = useState<number>(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Speech synthesis setup
  const speak = useCallback((text: string) => {
    // Check if speech synthesis is available
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      // Configure voice settings for child-friendly speech
      utterance.rate = 1.0;  // Normal speed
      utterance.pitch = 1.2; // Slightly higher pitch for child-friendly voice
      utterance.volume = 1.0;

      // Get available voices and try to set a friendly voice
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Female') || 
        voice.name.includes('Girl') || 
        voice.name.includes('Kids')
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Initialize voices
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Load voices
      window.speechSynthesis.getVoices();
      // Welcome message
      speak("Welcome to Magic Memory Match! Find the matching pairs of animal friends!");
    }
  }, [speak]);

  // Initialize cards
  useEffect(() => {
    const shuffledCards = [...cardImages, ...cardImages]
      .map((card, index) => ({
        id: index,
        image: card.emoji,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show feedback message
  const showFeedback = useCallback((message: string) => {
    setFeedbackMessage(message);
    setTimeout(() => setFeedbackMessage(''), 2000);
  }, []);

  // Enhanced handleCardClick with voice feedback
  const handleCardClick = (clickedId: number) => {
    if (flippedCards.length === 2) return;
    
    const clickedCard = cards.find(card => card.id === clickedId);
    if (!clickedCard || clickedCard.isMatched || clickedCard.isFlipped) return;

    const currentTime = Date.now();
    if (flippedCards.length === 0) {
      setLastFlipTime(currentTime);
    }

    const newCards = cards.map(card =>
      card.id === clickedId ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    
    const newFlippedCards = [...flippedCards, clickedId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstId, secondId] = newFlippedCards;
      const firstCard = newCards.find(card => card.id === firstId);
      const secondCard = newCards.find(card => card.id === secondId);

      if (firstCard && secondCard && firstCard.image === secondCard.image) {
        const timeTaken = (currentTime - lastFlipTime) / 1000;
        const speedBonus = timeTaken < 3 ? SCORING.SPEED_BONUS : 0;
        
        setTimeout(() => {
          setCards(cards =>
            cards.map(card =>
              card.id === firstId || card.id === secondId
                ? { ...card, isMatched: true }
                : card
            )
          );
          
          // Voice feedback for match
          const matchMessage = voiceFeedback.matches[
            Math.floor(Math.random() * voiceFeedback.matches.length)
          ];
          speak(matchMessage);

          // Additional voice feedback for speed bonus
          if (speedBonus) {
            setTimeout(() => {
              const bonusMessage = voiceFeedback.speedBonus[
                Math.floor(Math.random() * voiceFeedback.speedBonus.length)
              ];
              speak(bonusMessage);
            }, 1500);
          }

          const bonusMessage = speedBonus ? ` (+${speedBonus} speed bonus!)` : '';
          showFeedback(
            matchMessages[Math.floor(Math.random() * matchMessages.length)] + 
            bonusMessage
          );
          
          setScore(score => score + SCORING.MATCH_POINTS + speedBonus);
          setMatches(matches => {
            const newMatches = matches + 1;
            if (newMatches === cardImages.length) {
              setIsGameComplete(true);
              // Game completion voice feedback
              setTimeout(() => {
                const completionMessage = voiceFeedback.gameComplete[
                  Math.floor(Math.random() * voiceFeedback.gameComplete.length)
                ];
                speak(completionMessage);
              }, 1000);
            } else if (newMatches === cardImages.length - 1) {
              // Encouraging message when close to completion
              setTimeout(() => {
                speak("Just one more pair to go! You're almost there!");
              }, 2000);
            }
            return newMatches;
          });
          setFlippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(cards =>
            cards.map(card =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
          
          // Encouragement for non-matches
          if (Math.random() < 0.3) { // 30% chance to give encouragement
            const encouragement = voiceFeedback.encouragement[
              Math.floor(Math.random() * voiceFeedback.encouragement.length)
            ];
            speak(encouragement);
          }
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {isGameComplete && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={300}
          recycle={false}
          colors={['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C']}
        />
      )}

      <WorksheetHeader />
      
      <TouchContainer>
        <div className="flex flex-col items-center">
          {/* Score Display */}
          <div className="w-full bg-blue-50 p-4 mb-6 text-center rounded-lg border-2 border-blue-100">
            <div className="text-blue-800 text-lg font-bold">
              Score: {score} points
            </div>
            <div className="text-blue-600 text-sm mt-1">
              Matches: {matches}/{cardImages.length}
              <br />
              <span className="text-xs">
                (10 points per match + 5 bonus points for quick matches!)
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-center">
            🌟 Magic Memory Match 🌟
          </h1>
          
          {/* Game instructions */}
          <div className="w-full bg-blue-50 p-4 mb-4 text-center rounded-lg border-2 border-blue-100">
            <p className="text-blue-800 text-lg">
              Find matching pairs of animal friends! 🎯
            </p>
            <p className="text-blue-600 text-sm mt-1">
              Quick matches (under 3 seconds) earn bonus points!
            </p>
          </div>

          {/* Feedback message */}
          {feedbackMessage && (
            <div className="text-xl font-bold text-green-600 mb-4 animate-bounce">
              {feedbackMessage}
            </div>
          )}

          {/* Card grid - Larger tiles with 2x3 layout on mobile */}
          <div 
            className="grid w-full gap-3 px-2"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            {cards.map(card => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`
                  aspect-square
                  flex items-center justify-center
                  text-5xl
                  rounded-xl
                  shadow-lg
                  transition-all duration-300
                  ${card.isFlipped || card.isMatched
                    ? 'bg-white border-4 border-blue-400'
                    : 'bg-gradient-to-br from-blue-400 to-blue-600'
                  }
                  ${card.isMatched ? 'opacity-60' : 'opacity-100'}
                  active:scale-95
                  disabled:cursor-not-allowed
                  touch-manipulation
                  hover:shadow-xl
                `}
                disabled={card.isMatched || flippedCards.length === 2}
                aria-label={`Memory card ${card.id + 1}`}
              >
                {(card.isFlipped || card.isMatched) && card.image}
              </button>
            ))}
          </div>

          {/* Game complete message */}
          {isGameComplete && (
            <div className="mt-8 text-center bg-green-50 p-6 rounded-xl border-2 border-green-200">
              <h2 className="text-3xl font-bold text-green-600 mb-3">
                🎉 Incredible Job! 🎉
              </h2>
              <p className="text-xl text-green-700 mb-4">
                You're a Memory Master!
                <br />
                Final Score: {score} points
                <br />
                <span className="text-sm">
                  {score >= SCORING.MAX_BASE_SCORE + SCORING.MAX_BONUS_SCORE ? 
                    "Perfect Score! You're Amazing! 🌟" :
                    score >= SCORING.MAX_BASE_SCORE ? 
                    "Great job finding all matches! Try to be faster for bonus points! 🚀" :
                    "Keep practicing to improve your score! 💪"}
                </span>
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-green-500 text-white px-8 py-3 rounded-full
                         text-lg font-bold
                         hover:bg-green-600 active:scale-95 transition-all
                         shadow-lg hover:shadow-xl"
              >
                Play Again! 🎮
              </button>
            </div>
          )}
        </div>
      </TouchContainer>
    </div>
  );
};

export default MemoryWorksheet; 
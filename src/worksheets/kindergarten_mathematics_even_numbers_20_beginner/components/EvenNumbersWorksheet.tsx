import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface NumberTile {
  number: number;
  isEven: boolean;
  isSelected: boolean;
}

// Create a grid of numbers from 1 to 20 in random order
const createNumberGrid = (): NumberTile[] => {
  const numbers = Array.from({ length: 20 }, (_, i) => ({
    number: i + 1,
    isEven: (i + 1) % 2 === 0,
    isSelected: false,
  }));
  
  // Shuffle the array
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  
  return numbers;
};

// Success messages
const SUCCESS_MESSAGES = [
  "Great job! That's an even number!",
  "Perfect! You found an even number!",
  "Excellent! Keep finding those even numbers!",
  "Amazing! You're getting good at this!",
  "Wonderful! That number can be divided by 2!",
];

const EvenNumbersWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<NumberTile[]>(createNumberGrid());
  const [message, setMessage] = useState("Click on all the even numbers!");
  const speechSynthesis = window.speechSynthesis;
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  // Stop current speech immediately
  const stopCurrentSpeech = () => {
    if (currentSpeech.current) {
      speechSynthesis.cancel();
      currentSpeech.current = null;
    }
  };

  // Speak text with optimized handling
  const speak = (text: string) => {
    stopCurrentSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.1; // Slightly faster speech
    currentSpeech.current = utterance;
    speechSynthesis.speak(utterance);
  };

  // Play sound effect
  const playSound = (correct: boolean) => {
    const audio = new Audio(correct ? '/correct.mp3' : '/incorrect.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {}); // Ignore errors if sound can't play
  };

  // Handle tile click with optimized feedback
  const handleTileClick = (
    index: number,
    {
      markCorrect,
      markIncorrect,
      markAttempted,
    }: {
      markCorrect: () => void;
      markIncorrect: () => void;
      markAttempted: () => void;
    }
  ) => {
    const tile = grid[index];
    
    if (tile.isSelected) return; // Prevent re-selecting same tile
    
    markAttempted();
    
    const newGrid = [...grid];
    newGrid[index] = { ...tile, isSelected: true };
    setGrid(newGrid);

    if (tile.isEven) {
      markCorrect();
      playSound(true);
      const message = SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)];
      setMessage(message);
      speak(message);
    } else {
      markIncorrect();
      playSound(false);
      const message = "Try again! Look for numbers that can be divided by 2.";
      setMessage(message);
      speak(message);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={10}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ score, markCorrect, markIncorrect, markAttempted }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 md:p-4 mb-4">
              <ScoreDisplay score={score} totalQuestions={100} />
            </div>

            {/* Message Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 md:p-4 mb-4">
              <p className="text-white text-center text-lg">{message}</p>
            </div>

            {/* Number Grid */}
            <div className="grid grid-cols-5 gap-0.5 md:gap-2 p-2 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              {grid.map((tile, index) => (
                <motion.button
                  key={tile.number}
                  className={`
                    w-full aspect-square rounded-lg text-2xl font-bold
                    flex items-center justify-center
                    transition-colors duration-200
                    ${tile.isSelected
                      ? tile.isEven
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-white/90 text-purple-900 hover:bg-white'}
                  `}
                  onClick={() => handleTileClick(index, { markCorrect, markIncorrect, markAttempted })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tile.number}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default EvenNumbersWorksheet; 
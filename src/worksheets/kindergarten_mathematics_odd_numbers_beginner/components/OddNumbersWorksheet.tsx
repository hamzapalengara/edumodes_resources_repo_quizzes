import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface NumberTile {
  number: number;
  isOdd: boolean;
  isSelected: boolean;
}

// Create a grid of numbers 1-10 in random order
const createNumberGrid = () => {
  const numbers = Array.from({ length: 10 }, (_, i) => ({
    number: i + 1,
    isOdd: (i + 1) % 2 === 1,
    isSelected: false,
  }));
  
  // Shuffle the array
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  
  return numbers;
};

const SUCCESS_MESSAGES = [
  "Great job finding that odd number! 🌟",
  "You're getting better at this! ⭐",
  "Keep going, you're doing amazing! 🎯",
  "That's correct! You found an odd number! 🎨",
  "Wonderful work! You're a number expert! 🎪"
];

const OddNumbersWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<NumberTile[]>(createNumberGrid());
  const [message, setMessage] = useState<string>('Find all the odd numbers (1, 3, 5, 7, 9)!');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stopCurrentSpeech = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  const speak = (text: string) => {
    stopCurrentSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const playSound = (correct: boolean) => {
    stopCurrentSpeech();
    const audio = new Audio(correct ? '/correct.mp3' : '/incorrect.mp3');
    audio.play();
    audioRef.current = audio;
  };

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
    
    if (tile.isSelected) return;
    
    markAttempted();
    
    const newGrid = [...grid];
    newGrid[index] = { ...tile, isSelected: true };
    setGrid(newGrid);

    if (tile.isOdd) {
      markCorrect();
      playSound(true);
      const message = SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)];
      setMessage(message);
      speak(message);
    } else {
      markIncorrect();
      playSound(false);
      const message = "That's not an odd number. Try again!";
      setMessage(message);
      speak(message);
    }

    // Check if all odd numbers are found
    const allOddNumbersFound = newGrid
      .filter(t => t.isOdd)
      .every(t => t.isSelected);

    if (allOddNumbersFound) {
      const message = "Congratulations! You've found all the odd numbers! 🎉";
      setMessage(message);
      speak(message);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-emerald-200">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <WorksheetTracker
          totalQuestions={5}
          pointsPerQuestion={10}
          onSummaryGenerated={handleSummaryGenerated}
        >
          {({ markCorrect, markIncorrect, markAttempted, score }) => (
            <div className="space-y-4">
              {/* Score Display */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <ScoreDisplay score={score} totalQuestions={50} />
              </div>

              {/* Message Display */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center text-teal-800 font-bold shadow-lg">
                {message}
              </div>

              {/* Number Grid */}
              <div className="grid grid-cols-5 gap-2 p-2">
                {grid.map((tile, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      w-full aspect-square rounded-xl text-3xl font-bold shadow-lg
                      flex items-center justify-center transition-colors
                      ${tile.isSelected
                        ? tile.isOdd
                          ? 'bg-emerald-500 text-white'
                          : 'bg-red-500/10 text-red-700'
                        : 'bg-white hover:bg-teal-50 text-teal-800'
                      }
                    `}
                    onClick={() => handleTileClick(index, { markCorrect, markIncorrect, markAttempted })}
                    disabled={tile.isSelected}
                  >
                    {tile.number}
                  </motion.button>
                ))}
              </div>

              {/* Instructions */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-teal-700 shadow-lg">
                <h2 className="font-bold mb-2">How to Play:</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Click on the odd numbers (1, 3, 5, 7, 9)</li>
                  <li>Odd numbers cannot be divided evenly by 2</li>
                  <li>Even numbers (2, 4, 6, 8, 10) are not odd numbers</li>
                </ul>
              </div>
            </div>
          )}
        </WorksheetTracker>
      </div>
    </div>
  );
};

export default OddNumbersWorksheet; 
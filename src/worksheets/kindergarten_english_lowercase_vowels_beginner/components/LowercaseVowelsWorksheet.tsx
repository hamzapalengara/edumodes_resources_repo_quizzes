import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface LetterTile {
  letter: string;
  isVowel: boolean;
  isSelected: boolean;
}

// Constants
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// Create a 5x5 grid with random letters, ensuring at least one of each vowel
const createLetterGrid = () => {
  const grid: LetterTile[] = [];
  const vowelsToAdd = [...VOWELS]; // Make sure we include all vowels
  
  // First, add one of each vowel
  while (vowelsToAdd.length > 0) {
    const vowel = vowelsToAdd.pop()!;
    grid.push({
      letter: vowel,
      isVowel: true,
      isSelected: false
    });
  }
  
  // Fill the rest with random letters
  while (grid.length < 25) {
    const isVowel = Math.random() < 0.2; // 20% chance for additional vowels
    const letter = isVowel 
      ? VOWELS[Math.floor(Math.random() * VOWELS.length)]
      : CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
    
    grid.push({
      letter,
      isVowel: VOWELS.includes(letter),
      isSelected: false
    });
  }
  
  // Shuffle the grid
  for (let i = grid.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [grid[i], grid[j]] = [grid[j], grid[i]];
  }
  
  return grid;
};

const LowercaseVowelsWorksheet: React.FC = () => {
  const [grid, setGrid] = useState<LetterTile[]>(createLetterGrid());
  const [message, setMessage] = useState<string>('');
  const [isComplete, setIsComplete] = useState(false);

  const stopCurrentSpeech = () => {
    window.speechSynthesis?.cancel();
  };

  const speak = (text: string) => {
    stopCurrentSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    window.speechSynthesis?.speak(utterance);
  };

  const playSound = (correct: boolean) => {
    const audio = new Audio(correct ? '/correct.mp3' : '/incorrect.mp3');
    audio.play().catch(console.error);
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
    if (isComplete) return;

    const newGrid = [...grid];
    const tile = newGrid[index];
    
    if (tile.isSelected) return;
    
    markAttempted();
    tile.isSelected = true;
    
    if (tile.isVowel) {
      markCorrect();
      playSound(true);
      speak(`Correct! ${tile.letter} is a vowel`);
      setMessage('Great job! That is a vowel!');
    } else {
      markIncorrect();
      playSound(false);
      speak(`Try again! ${tile.letter} is not a vowel`);
      setMessage(`Oops! ${tile.letter} is not a vowel. Keep looking!`);
    }
    
    setGrid(newGrid);
    
    // Check if all vowels are found
    const allVowelsFound = newGrid.every(tile => 
      !tile.isVowel || (tile.isVowel && tile.isSelected)
    );
    
    if (allVowelsFound) {
      setIsComplete(true);
      speak('Congratulations! You found all the vowels!');
      setMessage('🎉 Amazing! You found all the vowels!');
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-violet-200">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={grid.filter(tile => tile.isVowel).length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markIncorrect, markAttempted, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-4">
                Find the Lowercase Vowels
              </h1>
              
              <div className="text-center mb-4">
                <p className="text-lg text-purple-600">
                  Click on the vowels: a, e, i, o, u
                </p>
                <p className="text-sm text-purple-400 mt-1">
                  Score points by finding all the vowels!
                </p>
              </div>

              {/* Score Display */}
              <div className="mb-4">
                <ScoreDisplay
                  score={score}
                  totalQuestions={grid.filter(tile => tile.isVowel).length * 10}
                />
              </div>

              {/* Message Display */}
              <div className="h-8 text-center mb-4">
                <p className={`text-lg ${message.includes('Great') ? 'text-green-600' : 'text-purple-600'}`}>
                  {message}
                </p>
              </div>

              {/* Letter Grid */}
              <div className="grid grid-cols-5 gap-0.5 md:gap-2 aspect-square">
                {grid.map((tile, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleTileClick(index, { markCorrect, markIncorrect, markAttempted })}
                    className={`
                      w-full aspect-square rounded-lg text-2xl sm:text-3xl font-bold
                      flex items-center justify-center
                      ${tile.isSelected
                        ? tile.isVowel
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                      }
                      transition-colors duration-300
                    `}
                    whileHover={!tile.isSelected ? { scale: 1.05 } : {}}
                    whileTap={!tile.isSelected ? { scale: 0.95 } : {}}
                  >
                    {tile.letter}
                  </motion.button>
                ))}
              </div>

              {/* Completion Message */}
              {isComplete && (
                <div className="mt-6 text-center">
                  <p className="text-xl text-green-600 font-bold">
                    🎉 Congratulations! You found all the vowels!
                  </p>
                  <button
                    onClick={() => {
                      setGrid(createLetterGrid());
                      setIsComplete(false);
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Play Again
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </WorksheetTracker>
    </div>
  );
};

export default LowercaseVowelsWorksheet; 
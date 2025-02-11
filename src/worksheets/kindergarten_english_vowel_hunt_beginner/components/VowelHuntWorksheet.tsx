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

// Define vowels and consonants for the grid
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// Create a grid with vowels and consonants
const createLetterGrid = () => {
  // We want a 5x5 grid with at least one of each vowel
  const grid: LetterTile[] = [];
  
  // First, add all vowels
  VOWELS.forEach(vowel => {
    grid.push({
      letter: vowel,
      isVowel: true,
      isSelected: false
    });
  });

  // Add a few more vowels randomly (total 8 vowels)
  for (let i = 0; i < 3; i++) {
    const randomVowel = VOWELS[Math.floor(Math.random() * VOWELS.length)];
    grid.push({
      letter: randomVowel,
      isVowel: true,
      isSelected: false
    });
  }

  // Fill the rest with consonants
  while (grid.length < 25) {
    const randomConsonant = CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
    grid.push({
      letter: randomConsonant,
      isVowel: false,
      isSelected: false
    });
  }

  // Shuffle the grid
  return grid.sort(() => Math.random() - 0.5);
};

const VowelHuntWorksheet: React.FC = () => {
  const [letters, setLetters] = useState<LetterTile[]>(createLetterGrid());
  const totalVowels = letters.filter(l => l.isVowel).length;

  const stopCurrentSpeech = () => {
    window.speechSynthesis.cancel();
  };

  const speak = (text: string) => {
    stopCurrentSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const playSound = (correct: boolean) => {
    const audio = new Audio(
      correct
        ? '/sounds/correct_chime.mp3'
        : '/sounds/incorrect_buzz.mp3'
    );
    audio.play();
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
    const tile = letters[index];
    if (tile.isSelected) return;

    markAttempted();
    
    const newLetters = [...letters];
    newLetters[index] = { ...tile, isSelected: true };
    setLetters(newLetters);

    if (tile.isVowel) {
      markCorrect();
      playSound(true);
      speak(`Correct! ${tile.letter} is a vowel`);
    } else {
      markIncorrect();
      playSound(false);
      speak(`Try again! ${tile.letter} is not a vowel`);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
    localStorage.setItem('vowel_hunt_summary', JSON.stringify(summary));
  };

  const foundVowels = letters.filter(l => l.isVowel && l.isSelected).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-600">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={totalVowels}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markIncorrect, markAttempted, score }) => (
          <div className="px-0 md:px-4 max-w-4xl mx-auto">
            {/* Score Display */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 md:p-4 mb-4">
              <ScoreDisplay 
                score={score}
                totalQuestions={totalVowels * 10}
              />
            </div>

            {/* Instructions */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4 text-white text-center">
              <h2 className="text-xl font-bold mb-2">Find the Vowels!</h2>
              <p>Click on all the vowel letters (a, e, i, o, u) in the grid.</p>
              <p className="text-sm mt-2">Found {foundVowels} of {totalVowels} vowels</p>
            </div>

            {/* Letter Grid */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 md:p-6">
              <div className="grid grid-cols-5 gap-0.5 md:gap-4">
                {letters.map((tile, index) => (
                  <motion.div
                    key={index}
                    className={`
                      w-full aspect-square rounded-lg cursor-pointer
                      flex items-center justify-center text-2xl font-bold
                      ${
                        tile.isSelected
                          ? tile.isVowel
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500/50 text-white'
                          : 'bg-white/90 hover:bg-white text-purple-900'
                      }
                      transition-colors duration-300
                    `}
                    onClick={() => {
                      if (!tile.isSelected) {
                        handleTileClick(index, {
                          markCorrect,
                          markIncorrect,
                          markAttempted,
                        });
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tile.letter.toUpperCase()}
                  </motion.div>
                ))}
              </div>

              {/* Success Message */}
              {foundVowels === totalVowels && (
                <div className="mt-4 text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    🎉 Amazing Job! 🌟
                  </h2>
                  <p className="text-white">
                    You've found all the vowels!
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

export default VowelHuntWorksheet; 
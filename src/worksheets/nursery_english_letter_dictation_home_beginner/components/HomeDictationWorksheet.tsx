import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface Word {
  id: number;
  word: string;
  letters: string[];
  userInput: string[];
  hint: string;
  emoji: string;
}

const WORD_LIST = [
  { word: 'BED', hint: 'Where we sleep', emoji: '🛏️' },
  { word: 'FAN', hint: 'Keeps us cool', emoji: '🌀' },
  { word: 'CUP', hint: 'We drink from it', emoji: '☕' },
  { word: 'MAT', hint: 'We wipe our feet on it', emoji: '🏡' },
  { word: 'PAN', hint: 'We cook in it', emoji: '🍳' },
  { word: 'POT', hint: 'Plants grow in it', emoji: '🪴' },
  { word: 'BOX', hint: 'Stores things', emoji: '📦' },
  { word: 'BIN', hint: 'Put trash in it', emoji: '🗑️' }
];

// Generate letter grid for the current word
const generateLetterGrid = (word: string): string[] => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const wordLetters = word.split('');
  const remainingLetters = letters.filter(l => !wordLetters.includes(l));
  const shuffledRemaining = remainingLetters.sort(() => Math.random() - 0.5);
  // Only add enough letters to make total of 6 (including word letters)
  const grid = [...wordLetters, ...shuffledRemaining.slice(0, 6 - wordLetters.length)];
  return grid.sort(() => Math.random() - 0.5);
};

const HomeDictationWorksheet: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [words, setWords] = useState<Word[]>([]);
  const [letterGrid, setLetterGrid] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize words with user input arrays
  useEffect(() => {
    const initializedWords = WORD_LIST.map((item, index) => ({
      id: index,
      word: item.word,
      letters: item.word.split(''),
      userInput: [],
      hint: item.hint,
      emoji: item.emoji
    }));
    setWords(initializedWords);
    setLetterGrid(generateLetterGrid(initializedWords[0].word));
  }, []);

  // Play welcome message when component mounts
  useEffect(() => {
    if (!hasPlayedIntro && words.length > 0) {
      speak("Welcome! Let's practice spelling home words. Click the speaker to hear each word.");
      setHasPlayedIntro(true);
      // Automatically speak the first word after 6 seconds
      setTimeout(() => {
        speak(words[0].word);
      }, 6000);
    }
  }, [hasPlayedIntro, words]);

  const stopCurrentSpeech = () => {
    if (window.speechSynthesis && currentSpeech.current) {
      window.speechSynthesis.cancel();
      currentSpeech.current = null;
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      stopCurrentSpeech();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8; // Slightly slower for clarity
      currentSpeech.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (showConfetti) {
        setShowConfetti(false);
        setTimeout(() => setShowConfetti(true), 0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showConfetti]);

  const handleLetterClick = (letter: string, { markCorrect, markAttempted, markIncorrect }: any) => {
    const currentWord = words[currentWordIndex];
    const newWords = [...words];
    const currentUserInput = [...currentWord.userInput, letter];
    newWords[currentWordIndex] = {
      ...currentWord,
      userInput: currentUserInput
    };

    // Mark this attempt
    markAttempted();

    // Check if the letter is correct for the current position
    const isCorrectLetter = currentWord.letters[currentUserInput.length - 1] === letter;

    if (!isCorrectLetter) {
      markIncorrect();
      speak("Try again!");
      return;
    }

    setWords(newWords);

    // Check if word is complete
    if (currentUserInput.length === currentWord.letters.length) {
      const isWordCorrect = currentUserInput.join('') === currentWord.word;
      
      if (isWordCorrect) {
        setShowConfetti(true);
        speak("Excellent!");
        // Only use markCorrect which will add the points internally
        markCorrect();

        setTimeout(() => {
          setShowConfetti(false);
          if (currentWordIndex < words.length - 1) {
            setCurrentWordIndex(prev => prev + 1);
            const nextWord = words[currentWordIndex + 1];
            setLetterGrid(generateLetterGrid(nextWord.word));
            setShowHint(false);
            // Automatically speak the next word after 0.5 seconds
            setTimeout(() => {
              speak(nextWord.word);
            }, 500);
          } else {
            setIsComplete(true);
            speak("Congratulations! You've completed all the words!");
          }
        }, 2000);
      } else {
        markIncorrect();
        speak("Try again!");
      }
    }
  };

  const handleBackspace = () => {
    const currentWord = words[currentWordIndex];
    if (currentWord.userInput.length > 0) {
      const newWords = [...words];
      newWords[currentWordIndex] = {
        ...currentWord,
        userInput: currentWord.userInput.slice(0, -1)
      };
      setWords(newWords);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <div className="min-h-screen bg-[#1F2937]">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={8}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ markCorrect, markAttempted, markIncorrect, score }) => (
          <TouchContainer>
            <div className="px-0 md:px-4">
              <div className="max-w-4xl mx-auto">
                {/* Score Display */}
                <div className="bg-[#374151] rounded-2xl p-4 mb-6 border border-[#4B5563]">
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={80}
                  />
                </div>

                {/* Game Area */}
                <div className="bg-[#374151] rounded-2xl p-6 border border-[#4B5563]">
                  {!isComplete ? (
                    <>
                      {/* Current Word Display */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-6">
                          <button
                            onClick={() => speak(words[currentWordIndex]?.word)}
                            className="w-24 h-24 bg-[#4B5563] hover:bg-[#6B7280] rounded-2xl flex items-center justify-center text-4xl shadow-sm transition-all hover:scale-105"
                          >
                            🔊
                          </button>
                          <div className="space-y-2">
                            <span className="text-lg font-medium text-gray-200">Click to hear the word</span>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <button
                            onClick={() => setShowHint(true)}
                            className="px-6 py-3 bg-[#4B5563] text-gray-200 rounded-xl hover:bg-[#6B7280] transition-all hover:scale-105 font-medium"
                          >
                            Need a Hint? 💡
                          </button>
                        </div>
                      </div>

                      {/* Hint Display */}
                      {showHint && (
                        <div className="mb-8 p-6 bg-[#4B5563] rounded-2xl border border-[#6B7280] animate-fade-in">
                          <div className="flex items-center gap-4">
                            <span className="text-4xl">{words[currentWordIndex]?.emoji}</span>
                            <p className="text-gray-200 text-lg">{words[currentWordIndex]?.hint}</p>
                          </div>
                        </div>
                      )}

                      {/* User Input Display */}
                      <div className="flex justify-center gap-4 mb-10">
                        {words[currentWordIndex]?.letters.map((_, index) => (
                          <div
                            key={index}
                            className="w-16 h-16 border-2 border-[#6B7280] rounded-xl flex items-center justify-center text-2xl font-bold text-gray-200 bg-[#2D3748] relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-[#4B5563] opacity-20"></div>
                            <span className="relative z-10">
                              {words[currentWordIndex]?.userInput[index] || '_'}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Letter Grid */}
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {letterGrid.map((letter, index) => (
                          <button
                            key={index}
                            onClick={() => handleLetterClick(letter, { markCorrect, markAttempted, markIncorrect })}
                            className="w-full aspect-square bg-[#4B5563] rounded-xl flex items-center justify-center text-xl font-bold text-gray-200 hover:bg-[#6B7280] transition-all hover:scale-105 border border-[#6B7280] shadow-lg"
                          >
                            {letter}
                          </button>
                        ))}
                        <button
                          onClick={handleBackspace}
                          className="w-full aspect-square bg-[#2D3748] rounded-xl flex items-center justify-center text-xl font-bold text-gray-200 hover:bg-[#4B5563] transition-all hover:scale-105 border border-[#4B5563] shadow-lg"
                        >
                          ←
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-6">🎉</div>
                      <h2 className="text-3xl font-bold text-gray-200 mb-4">
                        Amazing Job!
                      </h2>
                      <p className="text-xl text-gray-300">
                        You've spelled all the words correctly!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TouchContainer>
        )}
      </WorksheetTracker>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          colors={['#FFD700', '#FFA500', '#FF69B4', '#87CEEB', '#98FB98']}
        />
      )}
    </div>
  );
};

export default HomeDictationWorksheet; 
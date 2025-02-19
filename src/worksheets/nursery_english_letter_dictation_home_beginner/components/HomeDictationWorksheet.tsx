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
  { word: 'MAT', hint: 'We wipe our feet on it', emoji: '🏠' },
  { word: 'RUG', hint: 'Covers the floor', emoji: '🏠' },
  { word: 'PAN', hint: 'We cook in it', emoji: '🍳' },
  { word: 'POT', hint: 'Plants grow in it', emoji: '🪴' },
  { word: 'BOX', hint: 'Stores things', emoji: '📦' },
  { word: 'BIN', hint: 'Put trash in it', emoji: '🗑️' },
  { word: 'TAP', hint: 'Water comes from it', emoji: '🚰' }
];

// Generate letter grid for the current word
const generateLetterGrid = (word: string): string[] => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const wordLetters = word.split('');
  const remainingLetters = letters.filter(l => !wordLetters.includes(l));
  const shuffledRemaining = remainingLetters.sort(() => Math.random() - 0.5);
  const grid = [...wordLetters, ...shuffledRemaining.slice(0, 23)];
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

  const handleLetterClick = (letter: string, { addPoints, markCorrect, markAttempted, markIncorrect }: any) => {
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
        markCorrect();
        addPoints(10); // Add 10 points for completing the word correctly

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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={WORD_LIST.length}
        pointsPerQuestion={10}
        onSummaryGenerated={handleSummaryGenerated}
      >
        {({ addPoints, markCorrect, markAttempted, markIncorrect, score }) => (
          <TouchContainer>
            <div className="px-0 md:px-4">
              <div className="max-w-4xl mx-auto">
                {/* Score Display */}
                <div className="bg-white rounded-lg p-2 md:p-4 mb-4 shadow-md">
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={WORD_LIST.length * 10}
                  />
                </div>

                {/* Game Area */}
                <div className="bg-white rounded-lg p-4 shadow-md">
                  {!isComplete ? (
                    <>
                      {/* Current Word Display */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => speak(words[currentWordIndex]?.word)}
                            className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-105 transition-transform"
                          >
                            🔊
                          </button>
                          <span className="text-sm text-amber-600">Click to hear the word</span>
                        </div>
                        <button
                          onClick={() => setShowHint(true)}
                          className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors"
                        >
                          Show Hint
                        </button>
                      </div>

                      {/* Hint Display */}
                      {showHint && (
                        <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                          <div className="flex items-center gap-2">
                            <span className="text-3xl">{words[currentWordIndex]?.emoji}</span>
                            <p className="text-amber-800">{words[currentWordIndex]?.hint}</p>
                          </div>
                        </div>
                      )}

                      {/* User Input Display */}
                      <div className="flex justify-center gap-2 mb-6">
                        {words[currentWordIndex]?.letters.map((_, index) => (
                          <div
                            key={index}
                            className="w-12 h-12 border-2 border-amber-300 rounded flex items-center justify-center text-xl font-bold text-amber-800"
                          >
                            {words[currentWordIndex]?.userInput[index] || ''}
                          </div>
                        ))}
                      </div>

                      {/* Letter Grid */}
                      <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
                        {letterGrid.map((letter, index) => (
                          <button
                            key={index}
                            onClick={() => handleLetterClick(letter, { addPoints, markCorrect, markAttempted, markIncorrect })}
                            className="w-full aspect-square bg-amber-100 rounded-lg flex items-center justify-center text-lg font-bold text-amber-800 hover:bg-amber-200 transition-colors"
                          >
                            {letter}
                          </button>
                        ))}
                        <button
                          onClick={handleBackspace}
                          className="w-full aspect-square bg-red-100 rounded-lg flex items-center justify-center text-lg font-bold text-red-800 hover:bg-red-200 transition-colors"
                        >
                          ←
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <h2 className="text-2xl font-bold text-amber-800 mb-4">
                        Congratulations! 🎉
                      </h2>
                      <p className="text-amber-600">
                        You've completed all the words!
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
        />
      )}
    </div>
  );
};

export default HomeDictationWorksheet; 
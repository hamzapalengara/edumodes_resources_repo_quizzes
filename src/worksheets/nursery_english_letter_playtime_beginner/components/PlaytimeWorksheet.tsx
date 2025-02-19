import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import backgroundImage from '../assets/playtime.jpg';

interface Word {
  id: number;
  word: string;
  letters: string[];
  userInput: string[];
  pattern: string;
  hint: string;
  isMatched: boolean;
}

const WORD_LIST = [
  { word: 'BALL', pattern: '-all', hint: 'Used for playing' },
  { word: 'CALL', pattern: '-all', hint: 'Calling friends to play' },
  { word: 'FALL', pattern: '-all', hint: 'Can happen while playing' },
  { word: 'GAME', pattern: '-ame', hint: 'Fun activities' },
  { word: 'NAME', pattern: '-ame', hint: 'Calling a friend\'s name' },
  { word: 'SAME', pattern: '-ame', hint: 'Matching toys or games' },
  { word: 'BIKE', pattern: '-ike', hint: 'Riding outside' },
  { word: 'HIKE', pattern: '-ike', hint: 'Walking outdoors' },
  { word: 'LIKE', pattern: '-ike', hint: 'Enjoying playtime' }
];

// Generate letter grid for the current word
const generateLetterGrid = (word: string): string[] => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const wordLetters = word.split('');
  const remainingLetters = letters.filter(l => !wordLetters.includes(l));
  const shuffledRemaining = remainingLetters.sort(() => Math.random() - 0.5);
  // Add enough letters to make total of 8 (including word letters)
  const grid = [...wordLetters, ...shuffledRemaining.slice(0, 8 - wordLetters.length)];
  return grid.sort(() => Math.random() - 0.5);
};

const PlaytimeWorksheet: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [words, setWords] = useState<Word[]>([]);
  const [letterGrid, setLetterGrid] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showCompletionOverlay, setShowCompletionOverlay] = useState(false);
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize words with user input arrays
  useEffect(() => {
    const initializedWords = WORD_LIST.map((item, index) => ({
      id: index,
      word: item.word,
      letters: item.word.split(''),
      userInput: [],
      pattern: item.pattern,
      hint: item.hint,
      isMatched: false
    }));
    setWords(initializedWords);
    setLetterGrid(generateLetterGrid(initializedWords[0].word));
  }, []);

  // Play welcome message when component mounts
  useEffect(() => {
    if (!hasPlayedIntro && words.length > 0) {
      speak("Welcome to playtime spelling! Let's learn four-letter words. Click the speaker to hear each word.");
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
            setShowCompletionOverlay(true);
            speak("Congratulations! You've completed all the words!");
            // Remove overlay after 5 seconds
            setTimeout(() => {
              setShowCompletionOverlay(false);
            }, 5000);
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
    <div className="min-h-screen bg-[#F0F9FF] relative">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isComplete ? 'opacity-60' : 'opacity-20'
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="relative z-10">
        <WorksheetHeader />
        
        <WorksheetTracker
          totalQuestions={9}
          pointsPerQuestion={10}
          onSummaryGenerated={handleSummaryGenerated}
        >
          {({ markCorrect, markAttempted, markIncorrect, score }) => (
            <TouchContainer>
              <div className="px-0 md:px-4">
                <div className="max-w-4xl mx-auto">
                  {/* Score Display */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-blue-200">
                    <ScoreDisplay 
                      score={score}
                      totalQuestions={90}
                    />
                  </div>

                  {/* Game Area */}
                  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 ${
                    isComplete ? 'hidden' : ''
                  }`}>
                    {!isComplete ? (
                      <>
                        {/* Current Word Display */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center gap-6">
                            <button
                              onClick={() => speak(words[currentWordIndex]?.word)}
                              className="w-24 h-24 bg-blue-100 hover:bg-blue-200 rounded-2xl flex items-center justify-center text-4xl shadow-sm transition-all hover:scale-105"
                            >
                              🔊
                            </button>
                            <div className="space-y-2">
                              <span className="text-lg font-medium text-gray-700">Click to hear the word</span>
                              <div className="text-blue-600">
                                Pattern: {words[currentWordIndex]?.pattern}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <button
                              onClick={() => setShowHint(true)}
                              className="px-6 py-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition-all hover:scale-105 font-medium"
                            >
                              Need a Hint? 💡
                            </button>
                          </div>
                        </div>

                        {/* Hint Display */}
                        {showHint && (
                          <div className="mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-200 animate-fade-in">
                            <div className="flex items-center gap-4">
                              <p className="text-blue-700 text-lg">
                                {words[currentWordIndex]?.hint}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* User Input Display */}
                        <div className="flex justify-center gap-4 mb-10">
                          {words[currentWordIndex]?.letters.map((_, index) => (
                            <div
                              key={index}
                              className="w-16 h-16 border-2 border-blue-200 rounded-xl flex items-center justify-center text-2xl font-bold text-blue-700 bg-blue-50 relative overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-blue-100 opacity-20"></div>
                              <span className="relative z-10">
                                {words[currentWordIndex]?.userInput[index] || '_'}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Letter Grid */}
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                          {letterGrid.map((letter, index) => (
                            <button
                              key={index}
                              onClick={() => handleLetterClick(letter, { markCorrect, markAttempted, markIncorrect })}
                              className="w-full aspect-square bg-blue-100 rounded-xl flex items-center justify-center text-xl font-bold text-blue-700 hover:bg-blue-200 transition-all hover:scale-105 border border-blue-200 shadow-sm"
                            >
                              {letter}
                            </button>
                          ))}
                          <button
                            onClick={handleBackspace}
                            className="w-full aspect-square bg-blue-50 rounded-xl flex items-center justify-center text-xl font-bold text-blue-700 hover:bg-blue-100 transition-all hover:scale-105 border border-blue-200 shadow-sm"
                          >
                            ←
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Completion Overlay */}
                        <div className={`absolute inset-0 transition-all duration-1000 ${
                          showCompletionOverlay 
                            ? 'opacity-100 pointer-events-auto' 
                            : 'opacity-0 pointer-events-none'
                        }`}>
                          <div className="text-center py-12 space-y-6">
                            <h2 className="text-4xl font-bold text-blue-700 mb-4 animate-bounce">
                              🎉 Congratulations! 🎉
                            </h2>
                            <div className="flex justify-center gap-4">
                              <div className="flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-xl">
                                <span className="text-2xl">⭐</span>
                                <span className="text-blue-700 font-medium">Perfect Score!</span>
                              </div>
                              <div className="flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-xl">
                                <span className="text-2xl">🎯</span>
                                <span className="text-blue-700 font-medium">All Words Mastered</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </TouchContainer>
          )}
        </WorksheetTracker>
      </div>

      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
            gravity={0.3}
            colors={['#60A5FA', '#93C5FD', '#BFDBFE', '#F9A8D4', '#F472B6']}
          />
        </div>
      )}
    </div>
  );
};

export default PlaytimeWorksheet; 
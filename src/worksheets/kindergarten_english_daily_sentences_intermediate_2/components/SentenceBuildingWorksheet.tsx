import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface Word {
  id: string;
  text: string;
  container: 'available' | 'selected';
}

interface Sentence {
  id: number;
  words: Word[];
  correctOrder: string[];
  image: string;
  hint?: string;
}

const Word: React.FC<{ 
  word: Word; 
  isInSentence?: boolean;
  onClick: () => void;
}> = ({ word, isInSentence, onClick }) => {
  return (
    <motion.div 
      onClick={onClick}
      className={`${
        isInSentence 
          ? "bg-green-50 border-2 border-green-400 text-green-600" 
          : "bg-white border-2 border-blue-400 text-blue-600"
      } rounded-lg px-4 py-2 cursor-pointer select-none shadow-md text-lg font-semibold`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {word.text}
    </motion.div>
  );
};

// Helper function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Initialize sentences with container property and shuffled words
const initialSentences: Sentence[] = [
  {
    id: 1,
    words: shuffleArray([
      { id: 'may', text: 'May', container: 'available' },
      { id: 'i', text: 'I', container: 'available' },
      { id: 'borrow', text: 'borrow', container: 'available' },
      { id: 'pencil', text: 'pencil', container: 'available' },
      { id: 'your', text: 'your', container: 'available' }
    ]),
    correctOrder: ['May', 'I', 'borrow', 'your', 'pencil'],
    image: '✏️',
    hint: 'Ask politely to use someone\'s pencil'
  },
  {
    id: 2,
    words: shuffleArray([
      { id: 'what', text: 'What', container: 'available' },
      { id: 'time', text: 'time', container: 'available' },
      { id: 'is', text: 'is', container: 'available' },
      { id: 'lunch', text: 'lunch', container: 'available' },
      { id: 'today', text: 'today', container: 'available' }
    ]),
    correctOrder: ['What', 'time', 'is', 'lunch', 'today'],
    image: '🍱',
    hint: 'Ask about lunch timing'
  },
  {
    id: 3,
    words: shuffleArray([
      { id: 'can', text: 'Can', container: 'available' },
      { id: 'we', text: 'we', container: 'available' },
      { id: 'play', text: 'play', container: 'available' },
      { id: 'together', text: 'together', container: 'available' },
      { id: 'now', text: 'now', container: 'available' }
    ]),
    correctOrder: ['Can', 'we', 'play', 'together', 'now'],
    image: '🎮',
    hint: 'Invite someone to play'
  },
  {
    id: 4,
    words: shuffleArray([
      { id: 'where', text: 'Where', container: 'available' },
      { id: 'did', text: 'did', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'find', text: 'find', container: 'available' },
      { id: 'that', text: 'that', container: 'available' }
    ]),
    correctOrder: ['Where', 'did', 'you', 'find', 'that'],
    image: '🔍',
    hint: 'Ask about where something was found'
  },
  {
    id: 5,
    words: shuffleArray([
      { id: 'do', text: 'Do', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'need', text: 'need', container: 'available' },
      { id: 'any', text: 'any', container: 'available' },
      { id: 'help', text: 'help', container: 'available' }
    ]),
    correctOrder: ['Do', 'you', 'need', 'any', 'help'],
    image: '🤝',
    hint: 'Offer assistance to someone'
  },
  {
    id: 6,
    words: shuffleArray([
      { id: 'this', text: 'This', container: 'available' },
      { id: 'is', text: 'is', container: 'available' },
      { id: 'my', text: 'my', container: 'available' },
      { id: 'favorite', text: 'favorite', container: 'available' },
      { id: 'book', text: 'book', container: 'available' }
    ]),
    correctOrder: ['This', 'is', 'my', 'favorite', 'book'],
    image: '📚',
    hint: 'Share about your favorite book'
  },
  {
    id: 7,
    words: shuffleArray([
      { id: 'shall', text: 'Shall', container: 'available' },
      { id: 'we', text: 'we', container: 'available' },
      { id: 'go', text: 'go', container: 'available' },
      { id: 'outside', text: 'outside', container: 'available' },
      { id: 'now', text: 'now', container: 'available' }
    ]),
    correctOrder: ['Shall', 'we', 'go', 'outside', 'now'],
    image: '🌳',
    hint: 'Suggest going outdoors'
  },
  {
    id: 8,
    words: shuffleArray([
      { id: 'let', text: 'Let', container: 'available' },
      { id: 'me', text: 'me', container: 'available' },
      { id: 'think', text: 'think', container: 'available' },
      { id: 'about', text: 'about', container: 'available' },
      { id: 'it', text: 'it', container: 'available' }
    ]),
    correctOrder: ['Let', 'me', 'think', 'about', 'it'],
    image: '🤔',
    hint: 'Ask for time to consider'
  },
  {
    id: 9,
    words: shuffleArray([
      { id: 'that', text: 'That', container: 'available' },
      { id: 'sounds', text: 'sounds', container: 'available' },
      { id: 'like', text: 'like', container: 'available' },
      { id: 'fun', text: 'fun', container: 'available' }
    ]),
    correctOrder: ['That', 'sounds', 'like', 'fun'],
    image: '🎉',
    hint: 'Express interest in an activity'
  },
  {
    id: 10,
    words: shuffleArray([
      { id: 'would', text: 'Would', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'like', text: 'like', container: 'available' },
      { id: 'to', text: 'to', container: 'available' },
      { id: 'join', text: 'join', container: 'available' }
    ]),
    correctOrder: ['Would', 'you', 'like', 'to', 'join'],
    image: '👥',
    hint: 'Invite someone to participate'
  }
];

const SentenceBuildingWorksheet: React.FC = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [availableWords, setAvailableWords] = useState<Word[]>([]);
  const [showHint, setShowHint] = useState(false);

  // Speech synthesis setup
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          // Optionally set a preferred voice here
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8; // Slightly slower for clarity
    utterance.pitch = 1.2; // Slightly higher pitch for child-friendly voice

    // Get available voices
    const voices = window.speechSynthesis.getVoices();
    // Try to find an English voice
    const englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    resetCurrentSentence();
  }, [currentSentenceIndex]);

  const resetCurrentSentence = () => {
    const currentSentence = initialSentences[currentSentenceIndex];
    setAvailableWords([...currentSentence.words]);
    setSelectedWords([]);
    setShowHint(false);
  };

  const handleWordClick = (word: Word, container: 'available' | 'selected') => {
    if (container === 'available') {
      setAvailableWords(availableWords.filter(w => w.id !== word.id));
      setSelectedWords([...selectedWords, { ...word, container: 'selected' }]);
    } else {
      setSelectedWords(selectedWords.filter(w => w.id !== word.id));
      setAvailableWords([...availableWords, { ...word, container: 'available' }]);
    }
  };

  const checkAnswer = (markAttempted: () => void, markCorrect: () => void, markIncorrect: () => void) => {
    markAttempted();
    const currentSentence = initialSentences[currentSentenceIndex];
    const selectedSentence = selectedWords.map(word => word.text).join(' ');
    const correctSentence = currentSentence.correctOrder.join(' ');

    if (selectedSentence === correctSentence) {
      markCorrect();
      
      // Speak the correct sentence
      speakText(correctSentence);
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Move to next sentence after a delay
      setTimeout(() => {
        if (currentSentenceIndex < initialSentences.length - 1) {
          setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
          // Speak completion message
          speakText("Excellent work! You've mastered these conversation sentences!");
        }
      }, 1500);
    } else {
      markIncorrect();
      setShowHint(true);
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
    window.parent.postMessage({ type: 'WORKSHEET_COMPLETE', summary }, '*');
  };

  const currentSentence = initialSentences[currentSentenceIndex];

  return (
    <WorksheetTracker
      totalQuestions={initialSentences.length}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markIncorrect, markAttempted, score }) => (
        <div className="min-h-screen bg-blue-50">
          <WorksheetHeader />
          
          <div className="px-0 md:px-4 py-4">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score} 
                totalQuestions={initialSentences.length * 10}
              />
              
              <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 mt-4">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-blue-600 mb-2">Build the Sentence</h1>
                  <p className="text-gray-500 text-sm">
                    Sentence {currentSentenceIndex + 1} of {initialSentences.length}
                  </p>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <span className="text-6xl">{currentSentence.image}</span>
                </div>

                {/* Selected Words Container */}
                <div className="min-h-[100px] bg-blue-50 rounded-lg p-2 md:p-4 mb-4">
                  <div className="flex flex-wrap gap-0.5 md:gap-2 items-center justify-center">
                    {selectedWords.map((word) => (
                      <Word
                        key={word.id}
                        word={word}
                        isInSentence={true}
                        onClick={() => handleWordClick(word, 'selected')}
                      />
                    ))}
                  </div>
                </div>

                {/* Available Words Container */}
                <div className="bg-gray-50 rounded-lg p-2 md:p-4 mb-4">
                  <div className="flex flex-wrap gap-0.5 md:gap-2 items-center justify-center">
                    {availableWords.map((word) => (
                      <Word
                        key={word.id}
                        word={word}
                        onClick={() => handleWordClick(word, 'available')}
                      />
                    ))}
                  </div>
                </div>

                {/* Hint Section */}
                {showHint && (
                  <div className="text-center text-gray-600 mb-4">
                    <p className="text-lg">💡 Hint: {currentSentence.hint}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-center gap-2 md:gap-4">
                  <button
                    onClick={() => resetCurrentSentence()}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => checkAnswer(markAttempted, markCorrect, markIncorrect)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    disabled={selectedWords.length === 0}
                  >
                    Check Answer
                  </button>
                </div>

                {/* Instructions Note at Bottom */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex flex-col items-center gap-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="text-xl">👆</span>
                      Touch words to add them to your sentence
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-xl">✨</span>
                      Touch words again to remove them
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default SentenceBuildingWorksheet; 
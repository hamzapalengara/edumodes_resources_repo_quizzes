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

// Initialize sentences with container property
const initialSentences: Sentence[] = [
  {
    id: 1,
    words: [
      { id: 'like', text: 'like', container: 'available' },
      { id: 'cheese', text: 'cheese', container: 'available' },
      { id: 'mice', text: 'Mice', container: 'available' }
    ],
    correctOrder: ['Mice', 'like', 'cheese'],
    image: '🐭🧀',
    hint: 'What do mice love to eat?'
  },
  {
    id: 2,
    words: [
      { id: 'bus', text: 'bus', container: 'available' },
      { id: 'by', text: 'by', container: 'available' },
      { id: 'school', text: 'school', container: 'available' },
      { id: 'i', text: 'I', container: 'available' },
      { id: 'to', text: 'to', container: 'available' },
      { id: 'go', text: 'go', container: 'available' }
    ],
    correctOrder: ['I', 'go', 'to', 'school', 'by', 'bus'],
    image: '🚌',
    hint: 'How do you get to school?'
  },
  {
    id: 3,
    words: [
      { id: 'fast', text: 'fast', container: 'available' },
      { id: 'are', text: 'are', container: 'available' },
      { id: 'jets', text: 'Jets', container: 'available' }
    ],
    correctOrder: ['Jets', 'are', 'fast'],
    image: '✈️',
    hint: 'What do we know about jets?'
  },
  {
    id: 4,
    words: [
      { id: 'taste', text: 'taste', container: 'available' },
      { id: 'sour', text: 'sour', container: 'available' },
      { id: 'has', text: 'has', container: 'available' },
      { id: 'a', text: 'a', container: 'available' },
      { id: 'lemon', text: 'Lemon', container: 'available' }
    ],
    correctOrder: ['Lemon', 'has', 'a', 'sour', 'taste'],
    image: '🍋',
    hint: 'How does a lemon taste?'
  },
  {
    id: 5,
    words: [
      { id: 'swim', text: 'swim', container: 'available' },
      { id: 'can', text: 'can', container: 'available' },
      { id: 'penguins', text: 'Penguins', container: 'available' }
    ],
    correctOrder: ['Penguins', 'can', 'swim'],
    image: '🐧',
    hint: 'What can penguins do?'
  },
  {
    id: 6,
    words: [
      { id: 'milk', text: 'milk', container: 'available' },
      { id: 'drinks', text: 'drinks', container: 'available' },
      { id: 'cat', text: 'cat', container: 'available' },
      { id: 'the', text: 'The', container: 'available' }
    ],
    correctOrder: ['The', 'cat', 'drinks', 'milk'],
    image: '🐱🥛',
    hint: 'What does the cat like to drink?'
  },
  {
    id: 7,
    words: [
      { id: 'bright', text: 'bright', container: 'available' },
      { id: 'is', text: 'is', container: 'available' },
      { id: 'sun', text: 'sun', container: 'available' },
      { id: 'the', text: 'The', container: 'available' }
    ],
    correctOrder: ['The', 'sun', 'is', 'bright'],
    image: '☀️',
    hint: 'How does the sun look?'
  },
  {
    id: 8,
    words: [
      { id: 'sky', text: 'sky', container: 'available' },
      { id: 'in', text: 'in', container: 'available' },
      { id: 'the', text: 'the', container: 'available' },
      { id: 'birds', text: 'Birds', container: 'available' },
      { id: 'fly', text: 'fly', container: 'available' }
    ],
    correctOrder: ['Birds', 'fly', 'in', 'the', 'sky'],
    image: '🐦',
    hint: 'Where do birds fly?'
  },
  {
    id: 9,
    words: [
      { id: 'water', text: 'water', container: 'available' },
      { id: 'the', text: 'the', container: 'available' },
      { id: 'in', text: 'in', container: 'available' },
      { id: 'fish', text: 'Fish', container: 'available' },
      { id: 'swim', text: 'swim', container: 'available' }
    ],
    correctOrder: ['Fish', 'swim', 'in', 'the', 'water'],
    image: '🐠',
    hint: 'Where do fish swim?'
  },
  {
    id: 10,
    words: [
      { id: 'clouds', text: 'clouds', container: 'available' },
      { id: 'the', text: 'the', container: 'available' },
      { id: 'from', text: 'from', container: 'available' },
      { id: 'rain', text: 'Rain', container: 'available' },
      { id: 'falls', text: 'falls', container: 'available' }
    ],
    correctOrder: ['Rain', 'falls', 'from', 'the', 'clouds'],
    image: '🌧️',
    hint: 'Where does rain come from?'
  }
];

const SentenceBuildingWorksheet: React.FC = () => {
  const [currentSentence, setCurrentSentence] = useState<number>(0);
  const [availableWords, setAvailableWords] = useState<Word[]>(initialSentences[0].words);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [completedSentences, setCompletedSentences] = useState<boolean[]>(Array(initialSentences.length).fill(false));
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  // Speech synthesis setup
  useEffect(() => {
    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      // Load voices
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

  const speakText = (text: string, rate = 0.8, pitch = 1.2) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = pitch;

    // Get available voices
    const voices = window.speechSynthesis.getVoices();
    // Try to find an English voice
    const englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => console.log('Started speaking');
    utterance.onend = () => console.log('Finished speaking');
    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Worksheet Summary:', summary);
        // Send summary to parent app
        window.parent.postMessage({ type: 'WORKSHEET_SUMMARY', data: summary }, '*');
      }}
    >
      {({ markAttempted, markCorrect, markIncorrect, score }) => {
        const handleWordClick = (word: Word) => {
          // Mark attempted when user starts forming a sentence
          if (word.container === 'available' && selectedWords.length === 0) {
            markAttempted();
          }

          if (word.container === 'available') {
            // Move word from available to selected
            setAvailableWords(prev => prev.filter(w => w.id !== word.id));
            setSelectedWords(prev => [...prev, { ...word, container: 'selected' }]);
          } else {
            // Move word from selected back to available
            setSelectedWords(prev => prev.filter(w => w.id !== word.id));
            setAvailableWords(prev => [...prev, { ...word, container: 'available' }]);
          }

          // Check if sentence is correct after state updates
          setTimeout(() => {
            const newSelected = word.container === 'available' 
              ? [...selectedWords, { ...word, container: 'selected' }]
              : selectedWords.filter(w => w.id !== word.id);

            const currentWords = newSelected.map(w => w.text).join(' ');
            const correctWords = initialSentences[currentSentence].correctOrder.join(' ');
            
            if (currentWords === correctWords && !completedSentences[currentSentence]) {
              // Mark correct and add points
              markCorrect();
              
              setCompletedSentences(prev => {
                const newCompleted = [...prev];
                newCompleted[currentSentence] = true;
                return newCompleted;
              });
              
              setShowSuccess(true);
              setShowHint(false);
              
              speakText(correctWords);
              
              confetti({
                particleCount: 100,
                spread: 70,
                colors: ['#60A5FA', '#34D399', '#FBBF24'],
                origin: { y: 0.6 }
              });

              setTimeout(() => {
                setShowSuccess(false);
                if (currentSentence < initialSentences.length - 1) {
                  setCurrentSentence(prev => prev + 1);
                  setAvailableWords(initialSentences[currentSentence + 1].words);
                  setSelectedWords([]);
                } else {
                  setIsComplete(true);
                  speakText("Congratulations! You've completed all the sentences!", 0.8, 1.4);
                  confetti({
                    particleCount: 200,
                    spread: 90,
                    colors: ['#60A5FA', '#34D399', '#FBBF24'],
                    origin: { y: 0.6 }
                  });
                }
              }, 2000);
            } else if (currentWords.length === correctWords.length && currentWords !== correctWords) {
              // If sentence is complete but incorrect
              markIncorrect();
            }
          }, 100);
        };

        return (
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 w-full">
            <WorksheetHeader />
            
            <div className="bg-blue-50 p-4 shadow-md mb-4">
              <div className="max-w-4xl mx-auto">
                <ScoreDisplay 
                  score={Math.min(score, 100)}
                  totalQuestions={100}
                />
              </div>
            </div>

            <div className="w-full px-0 md:max-w-4xl md:mx-auto md:px-4">
              {isComplete ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-sm p-8 text-center"
                >
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">
                    🎉 Amazing Job! 🎉
                  </h2>
                  <p className="text-xl text-blue-500 mb-4">
                    You've completed all the sentences!
                  </p>
                  <p className="text-lg text-gray-600">
                    Final Score: {Math.min(score, 100)} / 100
                  </p>
                </motion.div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-blue-600 mb-2">Build the Sentence</h1>
                    <p className="text-gray-600">Click words to build your sentence!</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Sentence {currentSentence + 1} of {10}
                    </p>
                  </div>

                  <motion.div 
                    className="flex justify-center mb-6 text-6xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    {initialSentences[currentSentence].image}
                  </motion.div>

                  <div className="flex justify-center gap-4 mb-4">
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="px-4 py-2 bg-yellow-400 text-white rounded-lg text-sm font-bold hover:bg-yellow-500 active:scale-95 transition-all"
                    >
                      {showHint ? 'Hide Hint' : 'Show Hint'} 💡
                    </button>
                    <button
                      onClick={() => {
                        setAvailableWords(initialSentences[currentSentence].words);
                        setSelectedWords([]);
                        speakText("Let's try again!");
                      }}
                      className="px-4 py-2 bg-red-400 text-white rounded-lg text-sm font-bold hover:bg-red-500 active:scale-95 transition-all"
                    >
                      Reset Words 🔄
                    </button>
                  </div>

                  {showHint && initialSentences[currentSentence].hint && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-yellow-600 mb-4"
                    >
                      {initialSentences[currentSentence].hint}
                    </motion.p>
                  )}

                  {/* Sentence Formation Area */}
                  <div className="bg-green-50 rounded-lg p-4 min-h-[100px] flex items-center justify-center mb-4 border-2 border-dashed border-green-300">
                    <div className="flex flex-wrap gap-2 justify-center items-center min-w-full">
                      {selectedWords.length === 0 ? (
                        <p className="text-green-500 text-center">Click words below to build your sentence!</p>
                      ) : (
                        selectedWords.map((word) => (
                          <Word 
                            key={word.id} 
                            word={word} 
                            isInSentence={true}
                            onClick={() => handleWordClick(word)}
                          />
                        ))
                      )}
                    </div>
                  </div>

                  {/* Available Words Area */}
                  <div className="bg-blue-50 rounded-lg p-4 min-h-[100px] flex items-center justify-center">
                    <div className="flex flex-wrap gap-2 justify-center items-center">
                      {availableWords.map((word) => (
                        <Word 
                          key={word.id} 
                          word={word}
                          onClick={() => handleWordClick(word)}
                        />
                      ))}
                    </div>
                  </div>

                  {showSuccess && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-white rounded-lg p-6 text-center"
                      >
                        <h2 className="text-2xl font-bold text-green-600 mb-2">Great Job! 🎉</h2>
                        <p className="text-gray-600">You made a correct sentence!</p>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default SentenceBuildingWorksheet; 
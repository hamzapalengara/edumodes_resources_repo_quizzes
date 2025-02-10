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

interface DialogueLine {
  id: number;
  speaker: 'kid' | 'mom';
  words: Word[];
  correctOrder: string[];
  emoji: string;
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
          ? "bg-pink-50 border-2 border-pink-400 text-pink-600" 
          : "bg-white border-2 border-orange-400 text-orange-600"
      } rounded-lg px-4 py-2 cursor-pointer select-none shadow-md text-lg font-semibold`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {word.text}
    </motion.div>
  );
};

// Shuffle array utility function
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Initialize dialogue lines with container property and shuffled words
const initialDialogue: DialogueLine[] = [
  {
    id: 1,
    speaker: 'kid',
    words: shuffleArray([
      { id: 'mom', text: 'Mom', container: 'available' },
      { id: 'im', text: "I'm", container: 'available' },
      { id: 'hungry', text: 'hungry', container: 'available' }
    ]),
    correctOrder: ['Mom', "I'm", 'hungry'],
    emoji: '🍽️',
    hint: 'Tell Mom you want to eat'
  },
  {
    id: 2,
    speaker: 'mom',
    words: shuffleArray([
      { id: 'what', text: 'What', container: 'available' },
      { id: 'would', text: 'would', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'like', text: 'like', container: 'available' }
    ]),
    correctOrder: ['What', 'would', 'you', 'like'],
    emoji: '🤔',
    hint: 'Ask what your child wants to eat'
  },
  {
    id: 3,
    speaker: 'kid',
    words: shuffleArray([
      { id: 'can', text: 'Can', container: 'available' },
      { id: 'i', text: 'I', container: 'available' },
      { id: 'have', text: 'have', container: 'available' },
      { id: 'pizza', text: 'pizza', container: 'available' },
      { id: 'please', text: 'please', container: 'available' }
    ]),
    correctOrder: ['Can', 'I', 'have', 'pizza', 'please'],
    emoji: '🍕',
    hint: 'Ask politely for pizza'
  },
  {
    id: 4,
    speaker: 'mom',
    words: shuffleArray([
      { id: 'first', text: 'First', container: 'available' },
      { id: 'eat', text: 'eat', container: 'available' },
      { id: 'your', text: 'your', container: 'available' },
      { id: 'vegetables', text: 'vegetables', container: 'available' }
    ]),
    correctOrder: ['First', 'eat', 'your', 'vegetables'],
    emoji: '🥕',
    hint: 'Tell your child to eat vegetables first'
  },
  {
    id: 5,
    speaker: 'kid',
    words: shuffleArray([
      { id: 'okay', text: 'Okay', container: 'available' },
      { id: 'i', text: 'I', container: 'available' },
      { id: 'will', text: 'will', container: 'available' }
    ]),
    correctOrder: ['Okay', 'I', 'will'],
    emoji: '👍',
    hint: 'Agree to eat your vegetables'
  },
  {
    id: 6,
    speaker: 'mom',
    words: shuffleArray([
      { id: 'good', text: 'Good', container: 'available' },
      { id: 'job', text: 'job', container: 'available' },
      { id: 'sweetie', text: 'sweetie', container: 'available' }
    ]),
    correctOrder: ['Good', 'job', 'sweetie'],
    emoji: '⭐',
    hint: 'Praise your child'
  },
  {
    id: 7,
    speaker: 'kid',
    words: shuffleArray([
      { id: 'can', text: 'Can', container: 'available' },
      { id: 'we', text: 'we', container: 'available' },
      { id: 'play', text: 'play', container: 'available' },
      { id: 'now', text: 'now', container: 'available' }
    ]),
    correctOrder: ['Can', 'we', 'play', 'now'],
    emoji: '🎮',
    hint: 'Ask Mom to play with you'
  },
  {
    id: 8,
    speaker: 'mom',
    words: shuffleArray([
      { id: 'after', text: 'After', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'finish', text: 'finish', container: 'available' },
      { id: 'homework', text: 'homework', container: 'available' }
    ]),
    correctOrder: ['After', 'you', 'finish', 'homework'],
    emoji: '📚',
    hint: 'Remind about homework first'
  },
  {
    id: 9,
    speaker: 'kid',
    words: shuffleArray([
      { id: 'i', text: 'I', container: 'available' },
      { id: 'love', text: 'love', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'mom', text: 'mom', container: 'available' }
    ]),
    correctOrder: ['I', 'love', 'you', 'mom'],
    emoji: '❤️',
    hint: 'Tell Mom you love her'
  },
  {
    id: 10,
    speaker: 'mom',
    words: shuffleArray([
      { id: 'i', text: 'I', container: 'available' },
      { id: 'love', text: 'love', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'too', text: 'too', container: 'available' }
    ]),
    correctOrder: ['I', 'love', 'you', 'too'],
    emoji: '💖',
    hint: 'Return the love'
  }
];

const DialogueWorksheet: React.FC = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [availableWords, setAvailableWords] = useState<Word[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [completedLines, setCompletedLines] = useState<boolean[]>(Array(initialDialogue.length).fill(false));

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

  const speakText = (text: string, speaker: 'kid' | 'mom') => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Different voice settings for kid and mom
    if (speaker === 'kid') {
      utterance.pitch = 1.4; // Higher pitch for kid
      utterance.rate = 1.0;
    } else {
      utterance.pitch = 1.0; // Lower pitch for mom
      utterance.rate = 0.9;
    }

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
    resetCurrentLine();
  }, [currentLineIndex]);

  const resetCurrentLine = () => {
    const currentLine = initialDialogue[currentLineIndex];
    setAvailableWords([...currentLine.words]);
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
    const currentLine = initialDialogue[currentLineIndex];
    const selectedSentence = selectedWords.map(word => word.text).join(' ');
    const correctSentence = currentLine.correctOrder.join(' ');

    if (selectedSentence === correctSentence) {
      markCorrect();
      
      // Speak the correct sentence with appropriate voice
      speakText(correctSentence, currentLine.speaker);
      
      // Colorful confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF69B4', '#FFB6C1', '#FFA07A', '#98FB98', '#87CEEB']
      });

      // Update completed lines
      setCompletedLines(prev => {
        const newCompleted = [...prev];
        newCompleted[currentLineIndex] = true;
        return newCompleted;
      });

      // Move to next line after a delay
      setTimeout(() => {
        if (currentLineIndex < initialDialogue.length - 1) {
          setCurrentLineIndex(currentLineIndex + 1);
        } else {
          // Speak completion message with a kid's voice
          speakText("Yay! We finished our conversation with Mom!", 'kid');
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

  const currentLine = initialDialogue[currentLineIndex];

  return (
    <WorksheetTracker
      totalQuestions={initialDialogue.length}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markIncorrect, markAttempted, score }) => (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
          <WorksheetHeader />
          
          <div className="px-0 md:px-4 py-4">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score} 
                totalQuestions={initialDialogue.length * 10}
              />
              
              <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 mt-4">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-pink-600 mb-2">Talking with Mom</h1>
                  <p className="text-gray-500 text-sm">
                    Line {currentLineIndex + 1} of {initialDialogue.length}
                  </p>
                </div>

                {/* Instructions Note at Top */}
                <div className="mb-4 text-center">
                  <div className="flex flex-col items-center gap-2 text-gray-600 text-sm">
                    <p className="flex items-center gap-2">
                      <span className="text-xl">👆</span>
                      Touch words to build your sentence
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-xl">✨</span>
                      Touch words again to remove them
                    </p>
                  </div>
                </div>

                {/* Dialogue Display with Integrated Word Selection */}
                <div className="space-y-4">
                  {initialDialogue.map((line, index) => (
                    <div key={line.id}>
                      <div 
                        className={`flex items-start gap-2 ${
                          line.speaker === 'mom' ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        {line.speaker === 'mom' && (
                          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                            👩
                          </div>
                        )}
                        <div 
                          className={`rounded-lg p-3 max-w-[80%] ${
                            line.speaker === 'mom' 
                              ? 'bg-pink-100 text-pink-800' 
                              : 'bg-orange-100 text-orange-800'
                          } ${
                            index === currentLineIndex 
                              ? 'ring-2 ring-offset-2 ring-yellow-400' 
                              : ''
                          } ${
                            completedLines[index]
                              ? 'opacity-50'
                              : ''
                          }`}
                        >
                          {completedLines[index] ? (
                            <p>{line.correctOrder.join(' ')} {line.emoji}</p>
                          ) : (
                            index === currentLineIndex ? (
                              <div className="flex items-center gap-2">
                                <span>{line.emoji}</span>
                                <span className="italic text-gray-500">Build this sentence...</span>
                              </div>
                            ) : (
                              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                            )
                          )}
                        </div>
                        {line.speaker === 'kid' && (
                          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                            👧
                          </div>
                        )}
                      </div>

                      {/* Word Selection Area - Only show for current line */}
                      {index === currentLineIndex && (
                        <div className="mt-2 mb-4">
                          {/* Selected Words Container */}
                          <div className="min-h-[60px] bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-2 md:p-4 mb-2">
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
                          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-2 md:p-4 mb-2">
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

                          {/* Hint and Action Buttons */}
                          <div className="flex flex-col items-center gap-2">
                            {showHint && (
                              <div className="text-center text-gray-600">
                                <p className="text-sm">💡 Hint: {currentLine.hint}</p>
                              </div>
                            )}
                            <div className="flex justify-center gap-2 md:gap-4">
                              <button
                                onClick={() => resetCurrentLine()}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                              >
                                Reset
                              </button>
                              <button
                                onClick={() => checkAnswer(markAttempted, markCorrect, markIncorrect)}
                                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg hover:from-pink-600 hover:to-orange-600 transition-colors text-sm"
                                disabled={selectedWords.length === 0}
                              >
                                Check Answer
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default DialogueWorksheet; 
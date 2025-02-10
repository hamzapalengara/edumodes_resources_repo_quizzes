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
  speaker: 'rabbit' | 'tortoise';
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
          ? "bg-lime-50 border-2 border-lime-400 text-lime-600" 
          : "bg-white border-2 border-emerald-400 text-emerald-600"
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
    speaker: 'rabbit',
    words: shuffleArray([
      { id: 'lets', text: "Let's", container: 'available' },
      { id: 'have', text: 'have', container: 'available' },
      { id: 'race', text: 'race', container: 'available' },
      { id: 'a', text: 'a', container: 'available' }
    ]),
    correctOrder: ["Let's", 'have', 'a', 'race'],
    emoji: '🏃',
    hint: 'Rabbit suggests a competition'
  },
  {
    id: 2,
    speaker: 'tortoise',
    words: shuffleArray([
      { id: 'okay', text: 'Okay', container: 'available' },
      { id: 'ready', text: 'ready', container: 'available' },
      { id: 'im', text: "I'm", container: 'available' }
    ]),
    correctOrder: ['Okay', "I'm", 'ready'],
    emoji: '🐢',
    hint: 'Tortoise accepts the challenge'
  },
  {
    id: 3,
    speaker: 'rabbit',
    words: shuffleArray([
      { id: 'i', text: 'I', container: 'available' },
      { id: 'am', text: 'am', container: 'available' },
      { id: 'fast', text: 'fast', container: 'available' },
      { id: 'very', text: 'very', container: 'available' }
    ]),
    correctOrder: ['I', 'am', 'very', 'fast'],
    emoji: '🐰',
    hint: 'Rabbit boasts about speed'
  },
  {
    id: 4,
    speaker: 'tortoise',
    words: shuffleArray([
      { id: 'slow', text: 'Slow', container: 'available' },
      { id: 'steady', text: 'steady', container: 'available' },
      { id: 'and', text: 'and', container: 'available' }
    ]),
    correctOrder: ['Slow', 'and', 'steady'],
    emoji: '🐌',
    hint: 'Tortoise shares his strategy'
  },
  {
    id: 5,
    speaker: 'rabbit',
    words: shuffleArray([
      { id: 'i', text: 'I', container: 'available' },
      { id: 'will', text: 'will', container: 'available' },
      { id: 'take', text: 'take', container: 'available' },
      { id: 'a', text: 'a', container: 'available' },
      { id: 'nap', text: 'nap', container: 'available' }
    ]),
    correctOrder: ['I', 'will', 'take', 'a', 'nap'],
    emoji: '😴',
    hint: 'Rabbit decides to rest'
  },
  {
    id: 6,
    speaker: 'tortoise',
    words: shuffleArray([
      { id: 'keep', text: 'keep', container: 'available' },
      { id: 'going', text: 'going', container: 'available' },
      { id: 'ill', text: "I'll", container: 'available' }
    ]),
    correctOrder: ["I'll", 'keep', 'going'],
    emoji: '👊',
    hint: 'Tortoise stays determined'
  },
  {
    id: 7,
    speaker: 'rabbit',
    words: shuffleArray([
      { id: 'oh', text: 'Oh', container: 'available' },
      { id: 'no', text: 'no', container: 'available' },
      { id: 'late', text: 'late', container: 'available' },
      { id: 'im', text: "I'm", container: 'available' }
    ]),
    correctOrder: ['Oh', 'no', "I'm", 'late'],
    emoji: '😱',
    hint: 'Rabbit realizes his mistake'
  },
  {
    id: 8,
    speaker: 'tortoise',
    words: shuffleArray([
      { id: 'i', text: 'I', container: 'available' },
      { id: 'won', text: 'won', container: 'available' },
      { id: 'race', text: 'race', container: 'available' },
      { id: 'the', text: 'the', container: 'available' }
    ]),
    correctOrder: ['I', 'won', 'the', 'race'],
    emoji: '🏆',
    hint: 'Tortoise announces victory'
  },
  {
    id: 9,
    speaker: 'rabbit',
    words: shuffleArray([
      { id: 'you', text: 'You', container: 'available' },
      { id: 'were', text: 'were', container: 'available' },
      { id: 'right', text: 'right', container: 'available' }
    ]),
    correctOrder: ['You', 'were', 'right'],
    emoji: '🙇',
    hint: 'Rabbit admits defeat'
  },
  {
    id: 10,
    speaker: 'tortoise',
    words: shuffleArray([
      { id: 'always', text: 'Always', container: 'available' },
      { id: 'be', text: 'be', container: 'available' },
      { id: 'patient', text: 'patient', container: 'available' }
    ]),
    correctOrder: ['Always', 'be', 'patient'],
    emoji: '🌟',
    hint: 'What is the most important lesson?'
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

  const speakText = (text: string, speaker: 'rabbit' | 'tortoise') => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Different voice settings for each character
    if (speaker === 'rabbit') {
      utterance.pitch = 1.4; // Higher pitch for rabbit
      utterance.rate = 1.2; // Faster for rabbit
    } else {
      utterance.pitch = 0.8; // Lower pitch for tortoise
      utterance.rate = 0.8; // Slower for tortoise
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
      
      // Jungle-themed confetti colors
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4ade80', '#22c55e', '#15803d', '#166534', '#14532d']
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
          // Speak completion message
          speakText("Great job! You've completed the story of the rabbit and the tortoise!", 'tortoise');
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
        <div className="min-h-screen bg-gradient-to-b from-lime-50 to-emerald-50">
          <WorksheetHeader />
          
          <div className="px-0 md:px-4 py-4">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score} 
                totalQuestions={initialDialogue.length * 10}
              />
              
              <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 mt-4">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-emerald-600 mb-2">The Rabbit and The Tortoise</h1>
                  <p className="text-gray-500 text-sm">
                    Line {currentLineIndex + 1} of {initialDialogue.length}
                  </p>
                </div>

                {/* Dialogue Display */}
                <div className="space-y-4">
                  {initialDialogue.map((line, index) => (
                    <div key={line.id}>
                      <div 
                        className={`flex items-start gap-4 ${
                          line.speaker === 'tortoise' ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          line.speaker === 'tortoise' ? 'bg-emerald-100' : 'bg-lime-100'
                        }`}>
                          {line.speaker === 'tortoise' ? '🐢' : '🐰'}
                        </div>
                        <div className="flex-1">
                          <div className={`rounded-lg p-4 ${
                            line.speaker === 'tortoise' ? 'bg-emerald-50' : 'bg-lime-50'
                          }`}>
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
                        </div>
                      </div>

                      {/* Word Selection Area - Only show for current line */}
                      {index === currentLineIndex && (
                        <div className="mt-2 ml-16">
                          {/* Selected Words Container */}
                          <div className="min-h-[60px] bg-lime-50 rounded-lg p-2 md:p-4 mb-2">
                            <div className="flex flex-wrap gap-0.5 md:gap-2 items-center">
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
                          <div className="bg-emerald-50 rounded-lg p-2 md:p-4 mb-2">
                            <div className="flex flex-wrap gap-0.5 md:gap-2 items-center">
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
                              <p className="text-lg">💡 Hint: {currentLine.hint}</p>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex justify-center gap-2 md:gap-4">
                            <button
                              onClick={() => resetCurrentLine()}
                              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                              Reset
                            </button>
                            <button
                              onClick={() => checkAnswer(markAttempted, markCorrect, markIncorrect)}
                              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                              disabled={selectedWords.length === 0}
                            >
                              Check Answer
                            </button>
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
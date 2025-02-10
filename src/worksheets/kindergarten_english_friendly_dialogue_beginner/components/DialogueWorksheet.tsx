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
  speaker: 'friend1' | 'friend2';
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

// Initialize dialogue lines with container property and shuffled words
const initialDialogue: DialogueLine[] = [
  {
    id: 1,
    speaker: 'friend1',
    words: shuffleArray([
      { id: 'hi', text: 'Hi', container: 'available' },
      { id: 'want', text: 'want', container: 'available' },
      { id: 'to', text: 'to', container: 'available' },
      { id: 'play', text: 'play', container: 'available' }
    ]),
    correctOrder: ['Hi', 'want', 'to', 'play'],
    emoji: '👋',
    hint: 'How do you invite a friend to play?'
  },
  {
    id: 2,
    speaker: 'friend2',
    words: shuffleArray([
      { id: 'sure', text: 'Sure', container: 'available' },
      { id: 'sounds', text: 'sounds', container: 'available' },
      { id: 'fun', text: 'fun', container: 'available' }
    ]),
    correctOrder: ['Sure', 'sounds', 'fun'],
    emoji: '😊',
    hint: 'How do you agree to play?'
  },
  {
    id: 3,
    speaker: 'friend1',
    words: shuffleArray([
      { id: 'what', text: 'What', container: 'available' },
      { id: 'game', text: 'game', container: 'available' },
      { id: 'should', text: 'should', container: 'available' },
      { id: 'we', text: 'we', container: 'available' },
      { id: 'play', text: 'play', container: 'available' }
    ]),
    correctOrder: ['What', 'game', 'should', 'we', 'play'],
    emoji: '🎮',
    hint: 'How do you ask about choosing a game?'
  },
  {
    id: 4,
    speaker: 'friend2',
    words: shuffleArray([
      { id: 'lets', text: "Let's", container: 'available' },
      { id: 'play', text: 'play', container: 'available' },
      { id: 'hide', text: 'hide', container: 'available' },
      { id: 'and', text: 'and', container: 'available' },
      { id: 'seek', text: 'seek', container: 'available' }
    ]),
    correctOrder: ["Let's", 'play', 'hide', 'and', 'seek'],
    emoji: '🙈',
    hint: 'How do you suggest a game?'
  },
  {
    id: 5,
    speaker: 'friend1',
    words: shuffleArray([
      { id: 'that', text: 'That', container: 'available' },
      { id: 'is', text: 'is', container: 'available' },
      { id: 'my', text: 'my', container: 'available' },
      { id: 'favorite', text: 'favorite', container: 'available' }
    ]),
    correctOrder: ['That', 'is', 'my', 'favorite'],
    emoji: '⭐',
    hint: 'How do you show you like the suggestion?'
  },
  {
    id: 6,
    speaker: 'friend2',
    words: shuffleArray([
      { id: 'you', text: 'You', container: 'available' },
      { id: 'count', text: 'count', container: 'available' },
      { id: 'first', text: 'first', container: 'available' }
    ]),
    correctOrder: ['You', 'count', 'first'],
    emoji: '🔢',
    hint: 'How do you decide who starts?'
  },
  {
    id: 7,
    speaker: 'friend1',
    words: shuffleArray([
      { id: 'okay', text: 'Okay', container: 'available' },
      { id: 'i', text: 'I', container: 'available' },
      { id: 'will', text: 'will', container: 'available' },
      { id: 'start', text: 'start', container: 'available' }
    ]),
    correctOrder: ['Okay', 'I', 'will', 'start'],
    emoji: '👍',
    hint: 'How do you agree to start?'
  },
  {
    id: 8,
    speaker: 'friend2',
    words: shuffleArray([
      { id: 'go', text: 'Go', container: 'available' },
      { id: 'hide', text: 'hide', container: 'available' },
      { id: 'now', text: 'now', container: 'available' }
    ]),
    correctOrder: ['Go', 'hide', 'now'],
    emoji: '🏃',
    hint: 'How do you tell friends to hide?'
  },
  {
    id: 9,
    speaker: 'friend1',
    words: shuffleArray([
      { id: 'i', text: 'I', container: 'available' },
      { id: 'found', text: 'found', container: 'available' },
      { id: 'you', text: 'you', container: 'available' }
    ]),
    correctOrder: ['I', 'found', 'you'],
    emoji: '🔍',
    hint: 'What do you say when you find someone?'
  },
  {
    id: 10,
    speaker: 'friend2',
    words: shuffleArray([
      { id: 'that', text: 'That', container: 'available' },
      { id: 'was', text: 'was', container: 'available' },
      { id: 'so', text: 'so', container: 'available' },
      { id: 'much', text: 'much', container: 'available' },
      { id: 'fun', text: 'fun', container: 'available' }
    ]),
    correctOrder: ['That', 'was', 'so', 'much', 'fun'],
    emoji: '🎉',
    hint: 'How do you say you enjoyed playing?'
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

  const speakText = (text: string, speaker: 'friend1' | 'friend2') => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Different voice settings for each friend
    if (speaker === 'friend1') {
      utterance.pitch = 1.2; // Higher pitch for friend1
      utterance.rate = 0.9;
    } else {
      utterance.pitch = 0.8; // Lower pitch for friend2
      utterance.rate = 0.85;
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
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
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
          // Speak completion message with a friendly voice
          speakText("Great job! You've completed the friendly conversation!", 'friend1');
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
        <div className="min-h-screen bg-blue-50">
          <WorksheetHeader />
          
          <div className="px-0 md:px-4 py-4">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score} 
                totalQuestions={initialDialogue.length * 10}
              />
              
              <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 mt-4">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-blue-600 mb-2">Friends Talking</h1>
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
                          line.speaker === 'friend2' ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        {line.speaker === 'friend2' && (
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            👧
                          </div>
                        )}
                        <div 
                          className={`rounded-lg p-3 max-w-[80%] ${
                            line.speaker === 'friend2' 
                              ? 'bg-purple-100 text-purple-800' 
                              : 'bg-blue-100 text-blue-800'
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
                        {line.speaker === 'friend1' && (
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            👦
                          </div>
                        )}
                      </div>

                      {/* Word Selection Area - Only show for current line */}
                      {index === currentLineIndex && (
                        <div className="mt-2 mb-4">
                          {/* Selected Words Container */}
                          <div className="min-h-[60px] bg-blue-50 rounded-lg p-2 md:p-4 mb-2">
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
                          <div className="bg-gray-50 rounded-lg p-2 md:p-4 mb-2">
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
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
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
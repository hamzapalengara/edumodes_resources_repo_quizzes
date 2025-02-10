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
  speaker: 'student' | 'teacher';
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
    speaker: 'student',
    words: shuffleArray([
      { id: 'good', text: 'Good', container: 'available' },
      { id: 'morning', text: 'morning', container: 'available' },
      { id: 'teacher', text: 'teacher', container: 'available' }
    ]),
    correctOrder: ['Good', 'morning', 'teacher'],
    emoji: '👋',
    hint: 'How do you greet your teacher in the morning?'
  },
  {
    id: 2,
    speaker: 'teacher',
    words: shuffleArray([
      { id: 'good', text: 'Good', container: 'available' },
      { id: 'morning', text: 'morning', container: 'available' },
      { id: 'everyone', text: 'everyone', container: 'available' }
    ]),
    correctOrder: ['Good', 'morning', 'everyone'],
    emoji: '🌞',
    hint: 'How does the teacher greet the class?'
  },
  {
    id: 3,
    speaker: 'student',
    words: shuffleArray([
      { id: 'may', text: 'May', container: 'available' },
      { id: 'i', text: 'I', container: 'available' },
      { id: 'ask', text: 'ask', container: 'available' },
      { id: 'question', text: 'question', container: 'available' },
      { id: 'a', text: 'a', container: 'available' }
    ]),
    correctOrder: ['May', 'I', 'ask', 'a', 'question'],
    emoji: '🤔',
    hint: 'How do you politely ask to speak?'
  },
  {
    id: 4,
    speaker: 'teacher',
    words: shuffleArray([
      { id: 'yes', text: 'Yes', container: 'available' },
      { id: 'please', text: 'please', container: 'available' },
      { id: 'go', text: 'go', container: 'available' },
      { id: 'ahead', text: 'ahead', container: 'available' }
    ]),
    correctOrder: ['Yes', 'please', 'go', 'ahead'],
    emoji: '👍',
    hint: 'How does the teacher give permission?'
  },
  {
    id: 5,
    speaker: 'student',
    words: shuffleArray([
      { id: 'i', text: 'I', container: 'available' },
      { id: 'dont', text: "don't", container: 'available' },
      { id: 'understand', text: 'understand', container: 'available' },
      { id: 'this', text: 'this', container: 'available' }
    ]),
    correctOrder: ['I', "don't", 'understand', 'this'],
    emoji: '😕',
    hint: 'How do you say you need help?'
  },
  {
    id: 6,
    speaker: 'teacher',
    words: shuffleArray([
      { id: 'let', text: 'Let', container: 'available' },
      { id: 'me', text: 'me', container: 'available' },
      { id: 'explain', text: 'explain', container: 'available' },
      { id: 'again', text: 'again', container: 'available' }
    ]),
    correctOrder: ['Let', 'me', 'explain', 'again'],
    emoji: '📚',
    hint: 'What does the teacher say to help?'
  },
  {
    id: 7,
    speaker: 'student',
    words: shuffleArray([
      { id: 'now', text: 'Now', container: 'available' },
      { id: 'i', text: 'I', container: 'available' },
      { id: 'get', text: 'get', container: 'available' },
      { id: 'it', text: 'it', container: 'available' }
    ]),
    correctOrder: ['Now', 'I', 'get', 'it'],
    emoji: '💡',
    hint: 'What do you say when you understand?'
  },
  {
    id: 8,
    speaker: 'teacher',
    words: shuffleArray([
      { id: 'very', text: 'Very', container: 'available' },
      { id: 'good', text: 'good', container: 'available' },
      { id: 'job', text: 'job', container: 'available' }
    ]),
    correctOrder: ['Very', 'good', 'job'],
    emoji: '⭐',
    hint: 'How does the teacher praise you?'
  },
  {
    id: 9,
    speaker: 'student',
    words: shuffleArray([
      { id: 'thank', text: 'Thank', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'helping', text: 'helping', container: 'available' },
      { id: 'for', text: 'for', container: 'available' }
    ]),
    correctOrder: ['Thank', 'you', 'for', 'helping'],
    emoji: '🙏',
    hint: 'How do you show gratitude?'
  },
  {
    id: 10,
    speaker: 'teacher',
    words: shuffleArray([
      { id: 'you', text: 'You', container: 'available' },
      { id: 'are', text: 'are', container: 'available' },
      { id: 'welcome', text: 'welcome', container: 'available' }
    ]),
    correctOrder: ['You', 'are', 'welcome'],
    emoji: '😊',
    hint: 'How does the teacher respond to thanks?'
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
      
      // Speak the correct sentence
      speakText(correctSentence);
      
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
          // Speak completion message
          speakText("Great job! You've completed the classroom dialogue!");
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
                  <h1 className="text-2xl font-bold text-blue-600 mb-2">Classroom Dialogue</h1>
                  <p className="text-gray-500 text-sm">
                    Line {currentLineIndex + 1} of {initialDialogue.length}
                  </p>
                </div>

                {/* Instructions Note at Top */}
                <div className="mb-4 text-center">
                  <div className="flex flex-col items-center gap-2 text-gray-600 text-sm">
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

                {/* Dialogue Display with Integrated Word Selection */}
                <div className="space-y-4">
                  {initialDialogue.map((line, index) => (
                    <div key={line.id}>
                      <div 
                        className={`flex items-start gap-2 ${
                          line.speaker === 'teacher' ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        {line.speaker === 'teacher' && (
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            👩‍🏫
                          </div>
                        )}
                        <div 
                          className={`rounded-lg p-3 max-w-[80%] ${
                            line.speaker === 'teacher' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
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
                        {line.speaker === 'student' && (
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            👨‍🎓
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
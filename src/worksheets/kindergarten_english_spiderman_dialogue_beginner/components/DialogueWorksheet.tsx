import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  speaker: 'spiderman' | 'kid';
  words: Word[];
  correctOrder: string[];
  emoji: string;
  hint?: string;
}

// Word component with Spider-Man theme
const Word: React.FC<{
  word: Word;
  isInSentence?: boolean;
  onClick: () => void;
}> = ({ word, isInSentence, onClick }) => {
  const isSpiderManWord = word.text.toLowerCase().includes('spider') || 
                         word.text.toLowerCase().includes('hero') ||
                         word.text.toLowerCase().includes('power');

  return (
    <motion.button
      onClick={onClick}
      className={`
        px-3 py-1.5 rounded-full text-sm font-medium 
        ${isInSentence 
          ? 'bg-opacity-90 shadow-sm' 
          : 'hover:scale-105 active:scale-95'
        }
        ${isSpiderManWord
          ? 'bg-red-700 text-white border-2 border-blue-800'
          : word.container === 'selected'
            ? 'bg-blue-800 text-white'
            : 'bg-white text-blue-900 border-2 border-blue-800 hover:bg-blue-50'
        }
        transition-all duration-200
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {word.text}
    </motion.button>
  );
};

// Utility function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Initial dialogue setup
const initialDialogue: DialogueLine[] = [
  {
    id: 1,
    speaker: 'kid',
    words: shuffleArray([
      { id: 'wow', text: 'Wow', container: 'available' },
      { id: 'its', text: "it's", container: 'available' },
      { id: 'spiderman', text: 'Spider-Man', container: 'available' }
    ]),
    correctOrder: ['Wow', "it's", 'Spider-Man'],
    emoji: '🕷️',
    hint: 'How would you react if you saw Spider-Man?'
  },
  {
    id: 2,
    speaker: 'spiderman',
    words: shuffleArray([
      { id: 'hey', text: 'Hey', container: 'available' },
      { id: 'there', text: 'there', container: 'available' },
      { id: 'buddy', text: 'buddy', container: 'available' }
    ]),
    correctOrder: ['Hey', 'there', 'buddy'],
    emoji: '👋',
    hint: 'Spider-Man greets you in a friendly way'
  },
  {
    id: 3,
    speaker: 'kid',
    words: shuffleArray([
      { id: 'can', text: 'Can', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'fly', text: 'fly', container: 'available' }
    ]),
    correctOrder: ['Can', 'you', 'fly'],
    emoji: '🦸‍♂️',
    hint: 'Ask about Spider-Man\'s abilities'
  },
  {
    id: 4,
    speaker: 'spiderman',
    words: shuffleArray([
      { id: 'i', text: 'I', container: 'available' },
      { id: 'swing', text: 'swing', container: 'available' },
      { id: 'between', text: 'between', container: 'available' },
      { id: 'buildings', text: 'buildings', container: 'available' }
    ]),
    correctOrder: ['I', 'swing', 'between', 'buildings'],
    emoji: '🕸️',
    hint: 'How does Spider-Man move around the city?'
  },
  {
    id: 5,
    speaker: 'kid',
    words: shuffleArray([
      { id: 'that', text: 'That', container: 'available' },
      { id: 'is', text: 'is', container: 'available' },
      { id: 'so', text: 'so', container: 'available' },
      { id: 'cool', text: 'cool', container: 'available' }
    ]),
    correctOrder: ['That', 'is', 'so', 'cool'],
    emoji: '🤩',
    hint: 'Show how amazing you think Spider-Man is!'
  },
  {
    id: 6,
    speaker: 'spiderman',
    words: shuffleArray([
      { id: 'with', text: 'With', container: 'available' },
      { id: 'great', text: 'great', container: 'available' },
      { id: 'power', text: 'power', container: 'available' },
      { id: 'comes', text: 'comes', container: 'available' },
      { id: 'responsibility', text: 'responsibility', container: 'available' }
    ]),
    correctOrder: ['With', 'great', 'power', 'comes', 'responsibility'],
    emoji: '💫',
    hint: 'Spider-Man\'s famous saying about power'
  },
  {
    id: 7,
    speaker: 'kid',
    words: shuffleArray([
      { id: 'i', text: 'I', container: 'available' },
      { id: 'want', text: 'want', container: 'available' },
      { id: 'to', text: 'to', container: 'available' },
      { id: 'help', text: 'help', container: 'available' },
      { id: 'people', text: 'people', container: 'available' }
    ]),
    correctOrder: ['I', 'want', 'to', 'help', 'people'],
    emoji: '❤️',
    hint: 'Tell Spider-Man how you want to be like him'
  },
  {
    id: 8,
    speaker: 'spiderman',
    words: shuffleArray([
      { id: 'you', text: 'You', container: 'available' },
      { id: 'can', text: 'can', container: 'available' },
      { id: 'be', text: 'be', container: 'available' },
      { id: 'a', text: 'a', container: 'available' },
      { id: 'hero', text: 'hero', container: 'available' }
    ]),
    correctOrder: ['You', 'can', 'be', 'a', 'hero'],
    emoji: '🦸‍♂️',
    hint: 'Spider-Man believes in you!'
  }
];

const DialogueWorksheet: React.FC = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [availableWords, setAvailableWords] = useState<Word[]>([]);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  useEffect(() => {
    if (speechSynthesis) {
      const loadVoices = () => {
        setVoices(speechSynthesis.getVoices());
      };

      loadVoices();
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, [speechSynthesis]);

  // Text-to-speech function with different voices for Spider-Man and kid
  const speakText = (text: string, speaker: 'spiderman' | 'kid') => {
    if (speechSynthesis && voices.length > 0) {
      const utterance = new SpeechSynthesisUtterance(text);
      
      if (speaker === 'spiderman') {
        // Deeper voice for Spider-Man
        utterance.pitch = 0.8;
        utterance.rate = 0.9;
      } else {
        // Higher voice for kid
        utterance.pitch = 1.2;
        utterance.rate = 1.0;
      }
      
      speechSynthesis.speak(utterance);
    }
  };

  // Initialize current line
  useEffect(() => {
    if (initialDialogue[currentLineIndex]) {
      setAvailableWords(initialDialogue[currentLineIndex].words);
      setSelectedWords([]);
    }
  }, [currentLineIndex]);

  // Reset current line
  const resetCurrentLine = () => {
    const currentLine = initialDialogue[currentLineIndex];
    setSelectedWords([]);
    setAvailableWords(currentLine.words.map(word => ({ ...word, container: 'available' })));
  };

  // Handle word selection
  const handleWordClick = (word: Word, container: 'available' | 'selected') => {
    if (container === 'available') {
      setSelectedWords([...selectedWords, { ...word, container: 'selected' }]);
      setAvailableWords(availableWords.filter(w => w.id !== word.id));
    } else {
      setAvailableWords([...availableWords, { ...word, container: 'available' }]);
      setSelectedWords(selectedWords.filter(w => w.id !== word.id));
    }
  };

  // Check if answer is correct
  const checkAnswer = (markAttempted: () => void, markCorrect: () => void, markIncorrect: () => void) => {
    markAttempted();
    const currentLine = initialDialogue[currentLineIndex];
    const selectedTexts = selectedWords.map(word => word.text);
    
    if (selectedTexts.join(' ') === currentLine.correctOrder.join(' ')) {
      markCorrect();
      setCompletedLines([...completedLines, selectedTexts.join(' ')]);
      setShowSuccess(true);
      speakText(selectedTexts.join(' '), currentLine.speaker);
      
      // Trigger confetti with Spider-Man colors
      confetti({
        particleCount: 100,
        spread: 70,
        colors: ['#FF0000', '#0000FF', '#000000'], // Spider-Man colors
        shapes: ['circle', 'square'],
      });

      setTimeout(() => {
        setShowSuccess(false);
        if (currentLineIndex < initialDialogue.length - 1) {
          setCurrentLineIndex(currentLineIndex + 1);
        }
      }, 2000);
    } else {
      markIncorrect();
      resetCurrentLine();
    }
  };

  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
  };

  return (
    <WorksheetTracker
      totalQuestions={initialDialogue.length}
      pointsPerQuestion={10}
      onSummaryGenerated={handleSummaryGenerated}
    >
      {({ markCorrect, markAttempted, markIncorrect, score }) => (
        <div className="min-h-screen bg-gradient-to-b from-red-900 to-blue-900">
          <WorksheetHeader />
          
          {/* Score Display */}
          <div className="bg-gradient-to-r from-red-800 to-blue-800 p-4 shadow-lg mb-4">
            <div className="max-w-4xl mx-auto">
              <ScoreDisplay 
                score={score}
                totalQuestions={initialDialogue.length * 10}
              />
            </div>
          </div>

          <div className="px-0 md:px-4 py-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-2 md:p-6">
                {/* Current Progress */}
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white">
                    Line {currentLineIndex + 1} of {initialDialogue.length}
                  </h2>
                  <div className="text-white">
                    {initialDialogue[currentLineIndex].hint}
                  </div>
                </div>

                {/* Completed Lines */}
                <div className="space-y-4 mb-6">
                  {completedLines.map((line, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 ${
                        initialDialogue[index].speaker === 'spiderman' 
                          ? 'flex-row' 
                          : 'flex-row-reverse'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        initialDialogue[index].speaker === 'spiderman'
                          ? 'bg-red-700'
                          : 'bg-blue-700'
                      }`}>
                        {initialDialogue[index].speaker === 'spiderman' ? '🕷️' : '👦'}
                      </div>
                      <div 
                        className={`flex-1 p-4 rounded-lg ${
                          initialDialogue[index].speaker === 'spiderman'
                            ? 'bg-red-700/50'
                            : 'bg-blue-700/50'
                        }`}
                        onClick={() => speakText(line, initialDialogue[index].speaker)}
                      >
                        <p className="text-white font-medium">
                          {line} {initialDialogue[index].emoji}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Current Line */}
                {currentLineIndex < initialDialogue.length && (
                  <div className="space-y-6">
                    {/* Selected Words */}
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex flex-wrap gap-2 min-h-[50px]">
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

                    {/* Available Words */}
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex flex-wrap gap-2">
                        {availableWords.map((word) => (
                          <Word
                            key={word.id}
                            word={word}
                            onClick={() => handleWordClick(word, 'available')}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={resetCurrentLine}
                        className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                      >
                        Reset
                      </button>
                      <button
                        onClick={() => checkAnswer(markAttempted, markCorrect, markIncorrect)}
                        className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg transition-colors"
                      >
                        Check
                      </button>
                    </div>
                  </div>
                )}

                {/* Success Animation */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                    >
                      <motion.div
                        className="bg-white rounded-lg p-6 text-center"
                      >
                        <h2 className="text-2xl font-bold text-red-700 mb-2">Amazing! 🕷️</h2>
                        <p className="text-blue-800">Your Spider-Sense was right!</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default DialogueWorksheet; 
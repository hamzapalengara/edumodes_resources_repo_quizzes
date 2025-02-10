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
      { id: 'you', text: 'you', container: 'available' },
      { id: 'how', text: 'How', container: 'available' },
      { id: 'are', text: 'are', container: 'available' },
      { id: 'today', text: 'today', container: 'available' },
      { id: 'feeling', text: 'feeling', container: 'available' }
    ],
    correctOrder: ['How', 'are', 'you', 'feeling', 'today'],
    image: '👋',
    hint: 'Ask someone about their feelings today'
  },
  {
    id: 2,
    words: [
      { id: 'much', text: 'much', container: 'available' },
      { id: 'very', text: 'very', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'thank', text: 'Thank', container: 'available' },
      { id: 'helping', text: 'helping', container: 'available' },
      { id: 'for', text: 'for', container: 'available' },
      { id: 'me', text: 'me', container: 'available' }
    ],
    correctOrder: ['Thank', 'you', 'very', 'much', 'for', 'helping', 'me'],
    image: '🙏',
    hint: 'Express gratitude for someone\'s help'
  },
  {
    id: 3,
    words: [
      { id: 'morning', text: 'morning', container: 'available' },
      { id: 'good', text: 'Good', container: 'available' },
      { id: 'everyone', text: 'everyone', container: 'available' },
      { id: 'to', text: 'to', container: 'available' }
    ],
    correctOrder: ['Good', 'morning', 'to', 'everyone'],
    image: '🌅',
    hint: 'Greet everyone in the morning'
  },
  {
    id: 4,
    words: [
      { id: 'would', text: 'Would', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'help', text: 'help', container: 'available' },
      { id: 'please', text: 'please', container: 'available' },
      { id: 'me', text: 'me', container: 'available' },
      { id: 'with', text: 'with', container: 'available' },
      { id: 'this', text: 'this', container: 'available' }
    ],
    correctOrder: ['Would', 'you', 'please', 'help', 'me', 'with', 'this'],
    image: '🆘',
    hint: 'Ask for help politely'
  },
  {
    id: 5,
    words: [
      { id: 'am', text: 'am', container: 'available' },
      { id: 'to', text: 'to', container: 'available' },
      { id: 'meet', text: 'meet', container: 'available' },
      { id: 'happy', text: 'happy', container: 'available' },
      { id: 'so', text: 'so', container: 'available' },
      { id: 'i', text: 'I', container: 'available' },
      { id: 'you', text: 'you', container: 'available' }
    ],
    correctOrder: ['I', 'am', 'so', 'happy', 'to', 'meet', 'you'],
    image: '🤝',
    hint: 'Express joy when meeting someone'
  },
  {
    id: 6,
    words: [
      { id: 'am', text: 'am', container: 'available' },
      { id: 'forward', text: 'forward', container: 'available' },
      { id: 'looking', text: 'looking', container: 'available' },
      { id: 'i', text: 'I', container: 'available' },
      { id: 'to', text: 'to', container: 'available' },
      { id: 'it', text: 'it', container: 'available' }
    ],
    correctOrder: ['I', 'am', 'looking', 'forward', 'to', 'it'],
    image: '🎯',
    hint: 'Express excitement about a future event'
  },
  {
    id: 7,
    words: [
      { id: 'have', text: 'have', container: 'available' },
      { id: 'nice', text: 'nice', container: 'available' },
      { id: 'day', text: 'day', container: 'available' },
      { id: 'a', text: 'a', container: 'available' },
      { id: 'please', text: 'Please', container: 'available' }
    ],
    correctOrder: ['Please', 'have', 'a', 'nice', 'day'],
    image: '🌞',
    hint: 'Wish someone a good day'
  },
  {
    id: 8,
    words: [
      { id: 'you', text: 'you', container: 'available' },
      { id: 'see', text: 'see', container: 'available' },
      { id: 'hope', text: 'Hope', container: 'available' },
      { id: 'to', text: 'to', container: 'available' },
      { id: 'again', text: 'again', container: 'available' },
      { id: 'soon', text: 'soon', container: 'available' }
    ],
    correctOrder: ['Hope', 'to', 'see', 'you', 'again', 'soon'],
    image: '👋',
    hint: 'Say goodbye with hope to meet again'
  },
  {
    id: 9,
    words: [
      { id: 'could', text: 'Could', container: 'available' },
      { id: 'that', text: 'that', container: 'available' },
      { id: 'repeat', text: 'repeat', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'please', text: 'please', container: 'available' }
    ],
    correctOrder: ['Could', 'you', 'please', 'repeat', 'that'],
    image: '🔄',
    hint: 'Ask someone to say something again'
  },
  {
    id: 10,
    words: [
      { id: 'wonderful', text: 'wonderful', container: 'available' },
      { id: 'time', text: 'time', container: 'available' },
      { id: 'with', text: 'with', container: 'available' },
      { id: 'you', text: 'you', container: 'available' },
      { id: 'had', text: 'had', container: 'available' },
      { id: 'a', text: 'a', container: 'available' },
      { id: 'i', text: 'I', container: 'available' }
    ],
    correctOrder: ['I', 'had', 'a', 'wonderful', 'time', 'with', 'you'],
    image: '🌟',
    hint: 'Express enjoyment after spending time together'
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
          speakText("Excellent work! You've mastered these longer sentences!");
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

                {/* Progress Indicator */}
                <div className="mt-4 text-center text-gray-600">
                  Sentence {currentSentenceIndex + 1} of {initialSentences.length}
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
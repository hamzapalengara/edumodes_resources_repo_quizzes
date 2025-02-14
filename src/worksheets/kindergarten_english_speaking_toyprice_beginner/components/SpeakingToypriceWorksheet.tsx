import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

// Type declarations for Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly length: number;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

declare global {
  interface Window {
    SpeechRecognition?: {
      new(): SpeechRecognition;
    };
    webkitSpeechRecognition?: {
      new(): SpeechRecognition;
    };
  }
}

interface Dialogue {
  id: number;
  speaker: 'seller' | 'you';
  text: string;
  emoji: string;
  expectedResponse: string;
}

const dialogues: Dialogue[] = [
  {
    id: 1,
    speaker: 'seller',
    text: "Welcome to the toy store! How can I help you?",
    emoji: '🧸',
    expectedResponse: "Hi I would like to know the price of that toy please"
  },
  {
    id: 2,
    speaker: 'seller',
    text: "Which toy would you like to know about? The teddy bear, robot, or car?",
    emoji: '🤖',
    expectedResponse: "How much is the teddy bear please"
  },
  {
    id: 3,
    speaker: 'seller',
    text: "The teddy bear is fifteen dollars.",
    emoji: '💵',
    expectedResponse: "Can you tell me the price of the robot too please"
  },
  {
    id: 4,
    speaker: 'seller',
    text: "The robot is twenty dollars.",
    emoji: '🤖',
    expectedResponse: "And how much is the toy car"
  },
  {
    id: 5,
    speaker: 'seller',
    text: "The toy car is ten dollars. Would you like to buy any of them?",
    emoji: '🚗',
    expectedResponse: "Yes I would like to buy the teddy bear please"
  },
  {
    id: 6,
    speaker: 'seller',
    text: "Great choice! That will be fifteen dollars.",
    emoji: '💰',
    expectedResponse: "Here is fifteen dollars thank you"
  },
  {
    id: 7,
    speaker: 'seller',
    text: "Would you like a gift bag for your teddy bear?",
    emoji: '🎁',
    expectedResponse: "How much is the gift bag"
  },
  {
    id: 8,
    speaker: 'seller',
    text: "The gift bag is two dollars extra.",
    emoji: '🛍️',
    expectedResponse: "Yes please I would like a gift bag"
  },
  {
    id: 9,
    speaker: 'seller',
    text: "Here's your teddy bear in a gift bag. That's seventeen dollars total.",
    emoji: '🧸',
    expectedResponse: "Here is seventeen dollars thank you very much"
  },
  {
    id: 10,
    speaker: 'seller',
    text: "Thank you for shopping! Have a great day!",
    emoji: '😊',
    expectedResponse: "Thank you goodbye have a nice day"
  }
];

const SpeakingToypriceWorksheet: React.FC = () => {
  const [activeDialogueIndex, setActiveDialogueIndex] = useState<number>(0);
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [completedDialogues, setCompletedDialogues] = useState<boolean[]>(Array(dialogues.length).fill(false));
  const [lastSpokenResponse, setLastSpokenResponse] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState('');
  const [showMicPermissionAlert, setShowMicPermissionAlert] = useState(true);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognitionAPI) {
      recognitionRef.current = new SpeechRecognitionAPI();
      
      if (recognitionRef.current) {
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
          setSpokenText(transcript);
          setLastSpokenResponse(transcript);
          setEditableText(transcript);
        };

        recognitionRef.current.onend = () => {
          if (isListening && recognitionRef.current) {
            recognitionRef.current.start();
          }
        };
      }
    }
  }, [isListening]);

  // Play seller's voice on initial load
  useEffect(() => {
    if (activeDialogueIndex === 0) {
      speakSellerText(dialogues[activeDialogueIndex].text);
    }
  }, []);

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

  const speakSellerText = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.pitch = 1.0;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const sellerVoice = voices.find(voice => 
      voice.lang.startsWith('en-') && 
      voice.name.toLowerCase().includes('female')
    );
    
    if (sellerVoice) {
      utterance.voice = sellerVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const speakCustomerResponse = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.pitch = 1.2;
    utterance.rate = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const customerVoice = voices.find(voice => 
      voice.lang.startsWith('en-') && 
      voice.name.toLowerCase().includes('female')
    );
    
    if (customerVoice) {
      utterance.voice = customerVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if (!recognitionRef.current) return;
    
    setIsListening(true);
    setSpokenText('');
    setIsEditing(false);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (!recognitionRef.current) return;
    
    recognitionRef.current.stop();
    setIsListening(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={dialogues.length}
        pointsPerQuestion={10}
        onSummaryGenerated={(summary: WorksheetSummary) => {
          console.log('Worksheet Summary:', summary);
        }}
      >
        {({ score, markCorrect, markAttempted }) => {
          const checkAnswer = (transcript: string) => {
            if (activeDialogueIndex === null) return;
            
            // Stop listening if active
            if (isListening) {
              stopListening();
            }
            
            const currentDialogue = dialogues[activeDialogueIndex];
            const expectedWords = currentDialogue.expectedResponse.toLowerCase().split(' ');
            const spokenWords = transcript.toLowerCase().split(' ');
            
            markAttempted();
            
            const keyWords = expectedWords.filter(word => 
              !['a', 'an', 'the', 'is', 'are', 'to', 'in', 'on', 'at', 'and'].includes(word)
            );
            
            let matchCount = 0;
            keyWords.forEach(word => {
              if (spokenWords.some(spoken => {
                if (spoken === word) return true;
                if (spoken === word + 's' || spoken === word.replace(/s$/, '')) return true;
                if (word === 'yes' && (spoken === 'yeah' || spoken === 'yep')) return true;
                if (word === "i'm" && spoken === "im") return true;
                return false;
              })) {
                matchCount++;
              }
            });
            
            const similarity = matchCount / keyWords.length;
            console.log('Matching score:', similarity, 'for transcript:', transcript);
            
            if (similarity >= 0.6) {
              if (!completedDialogues[activeDialogueIndex]) {
                markCorrect();
                
                const newCompleted = [...completedDialogues];
                newCompleted[activeDialogueIndex] = true;
                setCompletedDialogues(newCompleted);
                
                // Confetti celebration
                confetti({
                  particleCount: 80,
                  spread: 100,
                  origin: { x: 0.5, y: 0.8 },
                  colors: ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8'],
                  ticks: 200
                });

                setTimeout(() => {
                  confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 80,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8']
                  });
                  confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 80,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8']
                  });
                }, 250);

                setTimeout(() => {
                  const nextIndex = activeDialogueIndex + 1;
                  if (nextIndex < dialogues.length) {
                    setActiveDialogueIndex(nextIndex);
                    setSpokenText('');
                    speakSellerText(dialogues[nextIndex].text);
                  }
                }, 1500);
              }
            }
          };

          const handleEditSubmit = () => {
            setSpokenText(editableText);
            setLastSpokenResponse(editableText);
            checkAnswer(editableText);
            setIsEditing(false);
          };

          return (
            <div className="px-0 py-2 md:py-4">
              <div className="max-w-4xl mx-auto">
                {showMicPermissionAlert && (
                  <div className="mx-2 md:mx-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 md:p-4 mb-4 rounded-r">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="text-2xl">🎤</span>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                          Microphone Access Required
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>
                            This speaking practice worksheet requires microphone access. Please allow microphone access when prompted by your browser.
                          </p>
                          <button
                            onClick={() => setShowMicPermissionAlert(false)}
                            className="mt-2 text-yellow-800 hover:text-yellow-900 font-medium"
                          >
                            ✕ Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mx-2 md:mx-4 bg-blue-50 p-3 md:p-4 shadow-md mb-4 rounded-lg">
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={dialogues.length * 10}
                  />
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-2 md:mx-4">
                  <h1 className="text-xl md:text-2xl font-bold text-center text-blue-600 p-4 border-b border-blue-100">
                    Speaking Practice: Asking About Toy Prices
                  </h1>

                  <div className="divide-y divide-gray-100">
                    {dialogues.map((dialogue, index) => (
                      <motion.div 
                        key={dialogue.id}
                        initial={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        animate={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        className={`p-3 md:p-4 ${
                          completedDialogues[index] ? 'bg-blue-50' : 'bg-white'
                        } ${index > activeDialogueIndex ? 'hidden' : ''}`}
                      >
                        {/* Seller's Line */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            👩
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-blue-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl md:text-2xl">{dialogue.emoji}</span>
                                <p className="text-base md:text-lg font-semibold text-blue-800 break-words">
                                  {dialogue.text}
                                </p>
                              </div>
                              <motion.button
                                onClick={() => speakSellerText(dialogue.text)}
                                className="mt-2 bg-blue-200 text-blue-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                🔊 Listen
                              </motion.button>
                            </div>
                          </div>
                        </div>

                        {/* Customer's Response Section */}
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                            👧
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-purple-50 rounded-lg p-3">
                              <div className="text-sm text-purple-600 mb-2">
                                Say: "{dialogue.expectedResponse}"
                              </div>
                              {isEditing && activeDialogueIndex === index ? (
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    value={editableText}
                                    onChange={(e) => setEditableText(e.target.value)}
                                    className="w-full p-2 border border-blue-200 rounded-lg text-base"
                                  />
                                  <div className="flex gap-2 mt-2">
                                    <motion.button
                                      onClick={handleEditSubmit}
                                      className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      Submit
                                    </motion.button>
                                    <motion.button
                                      onClick={() => setIsEditing(false)}
                                      className="bg-gray-300 text-gray-700 px-4 py-1.5 rounded-full text-sm"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      Cancel
                                    </motion.button>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  {spokenText && activeDialogueIndex === index && (
                                    <div className="mb-3 p-2 bg-white rounded-lg text-gray-600">
                                      {spokenText}
                                    </div>
                                  )}
                                </>
                              )}

                              <div className="flex flex-wrap gap-2 mt-3">
                                {activeDialogueIndex === index && !completedDialogues[index] && (
                                  <>
                                    <motion.button
                                      onClick={isListening ? stopListening : startListening}
                                      className={`${
                                        isListening 
                                          ? "bg-red-500" 
                                          : "bg-blue-500"
                                      } text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base`}
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      {isListening ? "⏹️ Stop Recording" : "🎤 Start Speaking"}
                                    </motion.button>
                                    
                                    {spokenText && (
                                      <>
                                        <motion.button
                                          onClick={() => checkAnswer(spokenText)}
                                          className="bg-green-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                        >
                                          ✓ Submit Answer
                                        </motion.button>

                                        <motion.button
                                          onClick={() => {
                                            setIsEditing(true);
                                            setEditableText(spokenText);
                                          }}
                                          className="bg-blue-200 text-blue-700 px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                        >
                                          ✎ Edit Answer
                                        </motion.button>
                                      </>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Add replay button for completed dialogues */}
                        {completedDialogues[index] && lastSpokenResponse && (
                          <div className="mt-3 flex justify-end">
                            <motion.button
                              onClick={() => speakCustomerResponse(lastSpokenResponse)}
                              className="bg-purple-200 text-purple-700 px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              🔊 Replay My Answer
                            </motion.button>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </WorksheetTracker>
    </div>
  );
};

export default SpeakingToypriceWorksheet; 
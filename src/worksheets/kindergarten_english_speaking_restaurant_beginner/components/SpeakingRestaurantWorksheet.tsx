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
  speaker: 'waiter' | 'kid';
  text: string;
  emoji: string;
  expectedResponse: string;
}

const dialogues: Dialogue[] = [
  {
    id: 1,
    speaker: 'waiter',
    text: "Welcome to our restaurant! Would you like to see the menu?",
    emoji: '👨‍🍳',
    expectedResponse: "Yes I would like to see the menu please"
  },
  {
    id: 2,
    speaker: 'waiter',
    text: "Here's our menu. Would you like some time to look at it?",
    emoji: '📖',
    expectedResponse: "Yes please give me a few minutes"
  },
  {
    id: 3,
    speaker: 'waiter',
    text: "Are you ready to order now?",
    emoji: '✍️',
    expectedResponse: "Yes I would like to order now"
  },
  {
    id: 4,
    speaker: 'waiter',
    text: "What would you like to have?",
    emoji: '🍽️',
    expectedResponse: "I would like to have pizza please"
  },
  {
    id: 5,
    speaker: 'waiter',
    text: "Would you like anything to drink?",
    emoji: '🥤',
    expectedResponse: "Yes I would like orange juice please"
  },
  {
    id: 6,
    speaker: 'waiter',
    text: "Your food will be ready soon. Would you like some water while you wait?",
    emoji: '💧',
    expectedResponse: "Yes please bring some water"
  }
];

const SpeakingRestaurantWorksheet: React.FC = () => {
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

  // Play waiter's voice on initial load
  useEffect(() => {
    if (activeDialogueIndex === 0) {
      speakWaiterText(dialogues[activeDialogueIndex].text);
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

  const speakWaiterText = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.pitch = 1.0;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    // Try to find a professional sounding voice
    const waiterVoice = voices.find(voice => 
      voice.lang.startsWith('en-') && 
      (voice.name.toLowerCase().includes('male') || 
       voice.name.toLowerCase().includes('david') ||
       voice.name.toLowerCase().includes('james'))
    );
    
    if (waiterVoice) {
      utterance.voice = waiterVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const speakCustomerResponse = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Higher pitch for customer's voice
    utterance.pitch = 1.2;
    utterance.rate = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
    if (englishVoice) {
      utterance.voice = englishVoice;
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
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
            
            const currentDialogue = dialogues[activeDialogueIndex];
            const expectedWords = currentDialogue.expectedResponse.toLowerCase().split(' ');
            const spokenWords = transcript.toLowerCase().split(' ');
            
            markAttempted();
            
            const keyWords = expectedWords.filter(word => 
              !['a', 'an', 'the', 'is', 'are', 'to', 'in', 'on', 'at', 'and'].includes(word)
            );
            
            let matchCount = 0;
            keyWords.forEach(word => {
              if (spokenWords.some(spoken => spoken.includes(word))) {
                matchCount++;
              }
            });
            
            const similarity = matchCount / keyWords.length;
            
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
                  colors: ['#F59E0B', '#D97706', '#B45309', '#92400E'],
                  ticks: 200
                });

                setTimeout(() => {
                  confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 80,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#F59E0B', '#D97706', '#B45309', '#92400E']
                  });
                  confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 80,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#F59E0B', '#D97706', '#B45309', '#92400E']
                  });
                }, 250);

                setTimeout(() => {
                  const nextIndex = activeDialogueIndex + 1;
                  if (nextIndex < dialogues.length) {
                    setActiveDialogueIndex(nextIndex);
                    setSpokenText('');
                    speakWaiterText(dialogues[nextIndex].text);
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
            <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
              {/* Score Display */}
              <div className="bg-amber-100 p-4 rounded-lg shadow-md mb-6">
                <ScoreDisplay score={score} totalQuestions={dialogues.length * 10} />
              </div>

              {/* Microphone Permission Alert */}
              {showMicPermissionAlert && (
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎤</span>
                    <div className="flex-1">
                      <p className="text-blue-800 font-medium">
                        This activity needs microphone access
                      </p>
                      <p className="text-blue-600 text-sm mt-1">
                        Please allow microphone access when prompted to practice speaking
                      </p>
                    </div>
                    <button
                      onClick={() => setShowMicPermissionAlert(false)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* Dialogue Section */}
              <div className="space-y-6">
                {dialogues.map((dialogue, index) => (
                  <div
                    key={dialogue.id}
                    className={`transition-opacity duration-300 ${
                      index > activeDialogueIndex ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
                    }`}
                  >
                    {/* Waiter's dialogue */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        {dialogue.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="bg-amber-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl md:text-2xl">{dialogue.emoji}</span>
                            <p className="text-base md:text-lg font-semibold text-amber-800 break-words">
                              {dialogue.text}
                            </p>
                          </div>
                          <motion.button
                            onClick={() => speakWaiterText(dialogue.text)}
                            className="mt-2 bg-amber-200 text-amber-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🔊 Listen
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Customer's response section */}
                    {index === activeDialogueIndex && (
                      <div className="ml-12 md:ml-16">
                        <div className="bg-white rounded-lg p-3 shadow-md">
                          {/* Expected Response Display - Always visible */}
                          <div className="text-sm text-amber-600 mb-2">
                            Say: "{dialogue.expectedResponse}"
                          </div>

                          {isEditing ? (
                            <div className="space-y-3">
                              <input
                                type="text"
                                value={editableText}
                                onChange={(e) => setEditableText(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Type your response..."
                              />
                              <div className="flex gap-2">
                                <motion.button
                                  onClick={handleEditSubmit}
                                  className="bg-amber-500 text-white px-4 py-2 rounded-full"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  ✅ Submit
                                </motion.button>
                                <motion.button
                                  onClick={() => setIsEditing(false)}
                                  className="bg-gray-500 text-white px-4 py-2 rounded-full"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  ❌ Cancel
                                </motion.button>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <p className="text-base md:text-lg font-semibold text-amber-800 min-h-[2rem] break-words">
                                {activeDialogueIndex === index ? spokenText : 
                                 completedDialogues[index] ? "✅ Completed!" : 
                                 "Click 'Start Speaking' to respond..."}
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {activeDialogueIndex === index && !completedDialogues[index] && (
                                  <>
                                    <motion.button
                                      onClick={isListening ? stopListening : startListening}
                                      className={`${
                                        isListening 
                                          ? "bg-red-500" 
                                          : "bg-amber-500"
                                      } text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base`}
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      {isListening ? "⏹️ Stop Recording" : "🎤 Start Speaking"}
                                    </motion.button>
                                    
                                    {spokenText && (
                                      <>
                                        <motion.button
                                          onClick={() => {
                                            stopListening();
                                            checkAnswer(spokenText);
                                          }}
                                          className="bg-amber-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                        >
                                          ✅ Submit
                                        </motion.button>
                                        
                                        {!isListening && (
                                          <motion.button
                                            onClick={() => {
                                              setIsEditing(true);
                                              setEditableText(spokenText);
                                            }}
                                            className="bg-amber-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                          >
                                            ✏️ Edit Response
                                          </motion.button>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}

                                {completedDialogues[index] && (
                                  <motion.button
                                    onClick={() => speakCustomerResponse(lastSpokenResponse)}
                                    className="bg-amber-200 text-amber-700 px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    🔊 Play My Response
                                  </motion.button>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Completed state */}
                    {completedDialogues[index] && index < activeDialogueIndex && (
                      <div className="ml-12 md:ml-16">
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">✅</span>
                            <p className="text-green-700">{lastSpokenResponse}</p>
                          </div>
                          <motion.button
                            onClick={() => speakCustomerResponse(lastSpokenResponse)}
                            className="mt-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full flex items-center gap-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🔊 Play My Response
                          </motion.button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </WorksheetTracker>
    </div>
  );
};

export default SpeakingRestaurantWorksheet; 
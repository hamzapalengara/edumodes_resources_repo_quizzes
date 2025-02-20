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
  speaker: 'driver' | 'kid';
  text: string;
  emoji: string;
  expectedResponse: string;
}

const dialogues: Dialogue[] = [
  {
    id: 1,
    speaker: 'driver',
    text: "Good morning! Where would you like to go today?",
    emoji: '👨‍✈️',
    expectedResponse: "I would like to go to the park please"
  },
  {
    id: 2,
    speaker: 'driver',
    text: "The park? Let me check if this bus goes there.",
    emoji: '🚌',
    expectedResponse: "Yes does this bus go to the park"
  },
  {
    id: 3,
    speaker: 'driver',
    text: "Yes, this bus goes to the park. Do you have your bus pass?",
    emoji: '🎫',
    expectedResponse: "Yes I have my bus pass here"
  },
  {
    id: 4,
    speaker: 'driver',
    text: "Perfect! The park is about 15 minutes away. Please take a seat.",
    emoji: '💺',
    expectedResponse: "Thank you how long will it take to get there"
  },
  {
    id: 5,
    speaker: 'driver',
    text: "It will take about 15 minutes. Would you like me to tell you when we reach?",
    emoji: '⏰',
    expectedResponse: "Yes please tell me when we reach there"
  },
  {
    id: 6,
    speaker: 'driver',
    text: "Don't worry, I'll let you know when we reach the park.",
    emoji: '👍',
    expectedResponse: "Thank you very much"
  },
  {
    id: 7,
    speaker: 'driver',
    text: "We're getting close to the park now. Would you like to get off at the next stop?",
    emoji: '🌳',
    expectedResponse: "Yes is the next stop the park"
  },
  {
    id: 8,
    speaker: 'driver',
    text: "Yes, the next stop is right in front of the park.",
    emoji: '🎯',
    expectedResponse: "Thank you I will get off at the next stop"
  },
  {
    id: 9,
    speaker: 'driver',
    text: "We've reached the park now. This is your stop!",
    emoji: '🚏',
    expectedResponse: "Thank you for the ride"
  },
  {
    id: 10,
    speaker: 'driver',
    text: "You're welcome! Have a great time at the park!",
    emoji: '😊',
    expectedResponse: "Thank you goodbye have a nice day"
  }
];

const SpeakingBusWorksheet: React.FC = () => {
  const [activeDialogueIndex, setActiveDialogueIndex] = useState<number>(0);
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [completedDialogues, setCompletedDialogues] = useState<boolean[]>(Array(dialogues.length).fill(false));
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState('');
  const [showMicPermissionAlert, setShowMicPermissionAlert] = useState(true);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [responses, setResponses] = useState<string[]>(Array(dialogues.length).fill(''));

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

  // Play driver's voice on initial load and when it's driver's turn
  useEffect(() => {
    if (activeDialogueIndex === 0 || 
        (dialogues[activeDialogueIndex] && dialogues[activeDialogueIndex].speaker === 'driver')) {
      speakDriverText(dialogues[activeDialogueIndex].text);
    }
  }, [activeDialogueIndex]);

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

  const speakDriverText = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.pitch = 1.0;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    // Try to find a professional sounding voice
    const driverVoice = voices.find(voice => 
      voice.lang.startsWith('en-') && 
      (voice.name.toLowerCase().includes('male') || 
       voice.name.toLowerCase().includes('david') ||
       voice.name.toLowerCase().includes('james'))
    );
    
    if (driverVoice) {
      utterance.voice = driverVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const speakPassengerResponse = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Higher pitch for passenger's voice
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-50">
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
                
                // Update responses array with current response
                const newResponses = [...responses];
                newResponses[activeDialogueIndex] = transcript;
                setResponses(newResponses);
                
                const newCompleted = [...completedDialogues];
                newCompleted[activeDialogueIndex] = true;
                setCompletedDialogues(newCompleted);
                
                // Confetti celebration
                confetti({
                  particleCount: 80,
                  spread: 100,
                  origin: { x: 0.5, y: 0.8 },
                  colors: ['#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF'],
                  ticks: 200
                });

                setTimeout(() => {
                  confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 80,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF']
                  });
                  confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 80,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF']
                  });
                }, 250);

                setTimeout(() => {
                  const nextIndex = activeDialogueIndex + 1;
                  if (nextIndex < dialogues.length) {
                    setActiveDialogueIndex(nextIndex);
                    setSpokenText('');
                    speakDriverText(dialogues[nextIndex].text);
                  }
                }, 1500);
              }
            }
          };

          const handleEditSubmit = () => {
            setSpokenText(editableText);
            checkAnswer(editableText);
            setIsEditing(false);
          };

          return (
            <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
              {/* Score Display */}
              <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6">
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

              {/* Current Dialogue */}
              <div className="space-y-6">
                {dialogues.map((dialogue, index) => (
                  <div
                    key={dialogue.id}
                    className={`transition-opacity duration-300 ${
                      index > activeDialogueIndex ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        {dialogue.emoji}
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
                            onClick={() => speakDriverText(dialogue.text)}
                            className="mt-2 bg-blue-200 text-blue-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🔊 Listen
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {index === activeDialogueIndex && (
                      <div className="ml-12 md:ml-16">
                        <div className="bg-white rounded-lg p-3 shadow-md">
                          {/* Expected Response Display */}
                          <div className="text-sm text-blue-600 mb-2">
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
                                  className="bg-blue-500 text-white px-4 py-2 rounded-full"
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
                              <p className="text-base md:text-lg font-semibold text-blue-800 min-h-[2rem] break-words">
                                {spokenText || "Click 'Start Speaking' to respond..."}
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {!completedDialogues[index] && (
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
                                          onClick={() => {
                                            stopListening();
                                            checkAnswer(spokenText);
                                          }}
                                          className="bg-blue-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                                            className="bg-blue-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {index < activeDialogueIndex && completedDialogues[index] && (
                      <div className="ml-12 md:ml-16">
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">✅</span>
                            <p className="text-green-700">{responses[index]}</p>
                          </div>
                          <motion.button
                            onClick={() => speakPassengerResponse(responses[index])}
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

export default SpeakingBusWorksheet; 
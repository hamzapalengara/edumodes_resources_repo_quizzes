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
  speaker: 'mom' | 'kid';
  text: string;
  emoji: string;
  expectedResponse: string;
}

const dialogues: Dialogue[] = [
  {
    id: 1,
    speaker: 'kid',
    text: "Mom, can I show you something in the toy store?",
    emoji: '🧸',
    expectedResponse: "Sure honey what would you like to show me"
  },
  {
    id: 2,
    speaker: 'kid',
    text: "Look at this amazing robot toy! It can walk and talk!",
    emoji: '🤖',
    expectedResponse: "That looks interesting tell me more about it"
  },
  {
    id: 3,
    speaker: 'kid',
    text: "It helps learn coding and can solve puzzles. Can I have it please?",
    emoji: '💭',
    expectedResponse: "How much does the robot toy cost"
  },
  {
    id: 4,
    speaker: 'kid',
    text: "It's twenty dollars. I'll help with house chores!",
    emoji: '💰',
    expectedResponse: "What chores will you help with at home"
  },
  {
    id: 5,
    speaker: 'kid',
    text: "I'll clean my room and help with dishes every day!",
    emoji: '🧹',
    expectedResponse: "Will you promise to keep your room clean"
  },
  {
    id: 6,
    speaker: 'kid',
    text: "Yes, I promise! I'll organize my toys too!",
    emoji: '📦',
    expectedResponse: "How will you take care of the robot toy"
  },
  {
    id: 7,
    speaker: 'kid',
    text: "I'll be very careful and keep it in its special box!",
    emoji: '🎁',
    expectedResponse: "Will you share the toy with your sister"
  },
  {
    id: 8,
    speaker: 'kid',
    text: "Yes, I'll teach her how to use it and we can play together!",
    emoji: '👧',
    expectedResponse: "That is very nice of you to share"
  },
  {
    id: 9,
    speaker: 'kid',
    text: "So can we get it? I'll be responsible!",
    emoji: '🙏',
    expectedResponse: "Yes we can get it if you keep your promises"
  },
  {
    id: 10,
    speaker: 'kid',
    text: "Thank you so much Mom! You're the best!",
    emoji: '❤️',
    expectedResponse: "You are welcome remember your promises"
  }
];

const SpeakingToyWorksheet: React.FC = () => {
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

  // Play kid's voice on initial load
  useEffect(() => {
    if (activeDialogueIndex === 0) {
      speakKidText(dialogues[activeDialogueIndex].text);
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

  const speakKidText = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Higher pitch for kid's voice
    utterance.pitch = 1.2;
    utterance.rate = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const kidVoice = voices.find(voice => 
      voice.lang.startsWith('en-') && 
      voice.name.toLowerCase().includes('female')
    );
    
    if (kidVoice) {
      utterance.voice = kidVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const speakMomResponse = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.pitch = 1.1;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const momVoice = voices.find(voice => 
      voice.lang.startsWith('en-') && 
      voice.name.toLowerCase().includes('female')
    );
    
    if (momVoice) {
      utterance.voice = momVoice;
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
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
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
                  colors: ['#ec4899', '#db2777', '#be185d', '#9d174d'],
                  ticks: 200
                });

                setTimeout(() => {
                  confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 80,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#ec4899', '#db2777', '#be185d', '#9d174d']
                  });
                  confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 80,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#ec4899', '#db2777', '#be185d', '#9d174d']
                  });
                }, 250);

                setTimeout(() => {
                  const nextIndex = activeDialogueIndex + 1;
                  if (nextIndex < dialogues.length) {
                    setActiveDialogueIndex(nextIndex);
                    setSpokenText('');
                    speakKidText(dialogues[nextIndex].text);
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

                <div className="mx-2 md:mx-4 bg-pink-50 p-3 md:p-4 shadow-md mb-4 rounded-lg">
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={dialogues.length * 10}
                  />
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-2 md:mx-4">
                  <h1 className="text-xl md:text-2xl font-bold text-center text-pink-600 p-4 border-b border-pink-100">
                    Asking for a Toy
                  </h1>

                  <div className="divide-y divide-gray-100">
                    {dialogues.map((dialogue, index) => (
                      <motion.div 
                        key={dialogue.id}
                        initial={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        animate={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        className={`p-3 md:p-4 ${
                          completedDialogues[index] ? 'bg-pink-50' : 'bg-white'
                        } ${index > activeDialogueIndex ? 'hidden' : ''}`}
                      >
                        {/* Kid's Line */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                            👧
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-pink-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl md:text-2xl">{dialogue.emoji}</span>
                                <p className="text-base md:text-lg font-semibold text-pink-800 break-words">
                                  {dialogue.text}
                                </p>
                              </div>
                              <motion.button
                                onClick={() => speakKidText(dialogue.text)}
                                className="mt-2 bg-pink-200 text-pink-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                🔊 Listen
                              </motion.button>
                            </div>
                          </div>
                        </div>

                        {/* Mom's Response Section */}
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                            👩
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
                                    className="w-full p-2 border border-pink-200 rounded-lg text-base"
                                  />
                                  <div className="flex gap-2 mt-2">
                                    <motion.button
                                      onClick={handleEditSubmit}
                                      className="bg-pink-500 text-white px-4 py-1.5 rounded-full text-sm"
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
                                          : "bg-pink-500"
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
                                          className="bg-blue-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                                          className="bg-pink-200 text-pink-700 px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                              onClick={() => speakMomResponse(lastSpokenResponse)}
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

export default SpeakingToyWorksheet; 
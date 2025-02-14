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
  speaker: 'brother' | 'kid';
  text: string;
  emoji: string;
  expectedResponse: string;
  hint?: string;
}

const dialogues: Dialogue[] = [
  {
    id: 1,
    speaker: 'brother',
    text: "Hey! Want to build a pillow fort together?",
    emoji: '🏰',
    expectedResponse: "Yes lets build a big fort",
    hint: "Show excitement about building together"
  },
  {
    id: 2,
    speaker: 'brother',
    text: "Can you help me with my homework please?",
    emoji: '📚',
    expectedResponse: "Sure I will help you study",
    hint: "Be kind and offer help"
  },
  {
    id: 3,
    speaker: 'brother',
    text: "Look what I drew! Do you like it?",
    emoji: '🎨',
    expectedResponse: "Wow your drawing is beautiful",
    hint: "Give a nice compliment"
  },
  {
    id: 4,
    speaker: 'brother',
    text: "Want to share my cookies with me?",
    emoji: '🍪',
    expectedResponse: "Thank you for sharing with me",
    hint: "Show gratitude for sharing"
  },
  {
    id: 5,
    speaker: 'brother',
    text: "Can we play superheroes together?",
    emoji: '🦸‍♂️',
    expectedResponse: "Yes I want to be superman",
    hint: "Choose your superhero character"
  },
  {
    id: 6,
    speaker: 'brother',
    text: "I'm sorry I broke your toy...",
    emoji: '😔',
    expectedResponse: "Its okay I forgive you",
    hint: "Show forgiveness and kindness"
  },
  {
    id: 7,
    speaker: 'brother',
    text: "Race you to the playground!",
    emoji: '🏃',
    expectedResponse: "Ready set lets go race",
    hint: "Show enthusiasm for the race"
  },
  {
    id: 8,
    speaker: 'brother',
    text: "Can you teach me that new game?",
    emoji: '🎮',
    expectedResponse: "Yes I will teach you",
    hint: "Be willing to share knowledge"
  },
  {
    id: 9,
    speaker: 'brother',
    text: "You're the best brother ever!",
    emoji: '❤️',
    expectedResponse: "You are my best brother too",
    hint: "Return the loving sentiment"
  },
  {
    id: 10,
    speaker: 'brother',
    text: "Let's go tell Mom about our day!",
    emoji: '👋',
    expectedResponse: "Yes lets tell mom together",
    hint: "Show excitement to share experiences"
  }
];

const SpeakingBrotherWorksheet: React.FC = () => {
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

  // Play brother's voice on initial load
  useEffect(() => {
    if (activeDialogueIndex === 0) {
      speakBrotherText(dialogues[activeDialogueIndex].text);
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

  const speakBrotherText = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.pitch = 1.2;
    utterance.rate = 1.0;

    const voices = window.speechSynthesis.getVoices();
    // Try to find a young-sounding voice
    const brotherVoice = voices.find(voice => 
      voice.lang.startsWith('en-') && 
      (voice.name.includes('Junior') || 
       voice.name.includes('Kid') || 
       voice.name.toLowerCase().includes('alex'))
    );
    
    if (brotherVoice) {
      utterance.voice = brotherVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const speakKidResponse = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Higher pitch for kid's voice
    utterance.pitch = 1.3;
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
                
                // Star confetti celebration
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
                    speakBrotherText(dialogues[nextIndex].text);
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

                <div className="mx-2 md:mx-4 bg-amber-50 p-3 md:p-4 shadow-md mb-4 rounded-lg">
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={dialogues.length * 10}
                  />
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <h1 className="text-xl md:text-2xl font-bold text-center text-amber-600 p-4 border-b border-amber-100">
                    Speaking with My Brother
                  </h1>

                  <div className="divide-y divide-gray-100">
                    {dialogues.map((dialogue, index) => (
                      <motion.div 
                        key={dialogue.id}
                        initial={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        animate={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        className={`p-3 md:p-4 ${
                          completedDialogues[index] ? 'bg-amber-50' : 'bg-white'
                        } ${index > activeDialogueIndex ? 'hidden' : ''}`}
                      >
                        {/* Brother's Line */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                            👦
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
                                onClick={() => speakBrotherText(dialogue.text)}
                                className="mt-2 bg-amber-200 text-amber-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                🔊 Listen
                              </motion.button>
                            </div>
                          </div>
                        </div>

                        {/* Your Response Section */}
                        <div className="flex items-start gap-3 pl-12">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                            🧑
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-orange-50 rounded-lg p-3">
                              <div className="text-sm text-orange-600 mb-2 font-medium">
                                Say: "{dialogue.expectedResponse}"
                              </div>
                              <div className="text-xs text-orange-500 mb-3">
                                {dialogue.hint}
                              </div>
                              {isEditing && activeDialogueIndex === index ? (
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    value={editableText}
                                    onChange={(e) => setEditableText(e.target.value)}
                                    className="w-full p-2 border border-amber-200 rounded-lg text-base"
                                  />
                                  <div className="flex gap-2 mt-2">
                                    <motion.button
                                      onClick={handleEditSubmit}
                                      className="bg-amber-500 text-white px-3 py-1.5 rounded-full text-sm"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      ✅ Submit
                                    </motion.button>
                                    <motion.button
                                      onClick={() => setIsEditing(false)}
                                      className="bg-gray-500 text-white px-3 py-1.5 rounded-full text-sm"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      ❌ Cancel
                                    </motion.button>
                                  </div>
                                </div>
                              ) : (
                                <p className="text-base md:text-lg font-semibold text-amber-800 min-h-[2rem] break-words">
                                  {activeDialogueIndex === index ? spokenText : 
                                   completedDialogues[index] ? "✅ Completed!" : 
                                   "Click 'Start Speaking' to respond..."}
                                </p>
                              )}
                              <div className="flex flex-wrap gap-2 mt-3">
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
                                    onClick={() => speakKidResponse(lastSpokenResponse)}
                                    className="bg-amber-200 text-amber-700 px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    🔊 Play My Response
                                  </motion.button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
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

export default SpeakingBrotherWorksheet; 
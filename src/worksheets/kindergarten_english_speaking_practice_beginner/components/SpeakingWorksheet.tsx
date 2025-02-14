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
  hint?: string;
  expectedResponse: string;
}

const dialogues: Dialogue[] = [
  {
    id: 1,
    speaker: 'mom',
    text: "Good morning sweetie! Did you sleep well?",
    emoji: '🌅',
    expectedResponse: "Good morning mom yes I did",
    hint: "Try saying: 'Good morning mom, yes I did'"
  },
  {
    id: 2,
    speaker: 'mom',
    text: "What would you like for breakfast?",
    emoji: '🍳',
    expectedResponse: "Can I have pancakes please",
    hint: "Try saying: 'Can I have pancakes please'"
  },
  {
    id: 3,
    speaker: 'mom',
    text: "Sure! Would you like to help me make them?",
    emoji: '👩‍🍳',
    expectedResponse: "Yes I would love to help",
    hint: "Try saying: 'Yes I would love to help'"
  },
  {
    id: 4,
    speaker: 'mom',
    text: "Great! First, wash your hands please.",
    emoji: '🧼',
    expectedResponse: "Okay I will wash my hands",
    hint: "Try saying: 'Okay I will wash my hands'"
  },
  {
    id: 5,
    speaker: 'mom',
    text: "Would you like chocolate chips in your pancakes?",
    emoji: '🍫',
    expectedResponse: "Yes please I love chocolate chips",
    hint: "Try saying: 'Yes please I love chocolate chips'"
  },
  {
    id: 6,
    speaker: 'mom',
    text: "The pancakes are ready! Be careful, they're hot.",
    emoji: '🥞',
    expectedResponse: "Thank you mom they look delicious",
    hint: "Try saying: 'Thank you mom they look delicious'"
  },
  {
    id: 7,
    speaker: 'mom',
    text: "Don't forget to drink your milk too.",
    emoji: '🥛',
    expectedResponse: "I will drink my milk",
    hint: "Try saying: 'I will drink my milk'"
  },
  {
    id: 8,
    speaker: 'mom',
    text: "After breakfast, we need to get ready for school.",
    emoji: '🎒',
    expectedResponse: "Okay I will get ready",
    hint: "Try saying: 'Okay I will get ready'"
  },
  {
    id: 9,
    speaker: 'mom',
    text: "Do you have your homework in your backpack?",
    emoji: '📚',
    expectedResponse: "Yes I packed my homework",
    hint: "Try saying: 'Yes I packed my homework'"
  },
  {
    id: 10,
    speaker: 'mom',
    text: "Have a great day at school! I love you!",
    emoji: '❤️',
    expectedResponse: "I love you too mom bye",
    hint: "Try saying: 'I love you too mom, bye'"
  }
];

const SpeakingWorksheet: React.FC = () => {
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
          // On mobile, automatically restart if we're still in listening mode
          if (isListening && recognitionRef.current) {
            recognitionRef.current.start();
          }
        };
      }
    }
  }, [isListening]);

  // Play mom's voice on initial load
  useEffect(() => {
    if (activeDialogueIndex === 0) {
      speakMomText(dialogues[activeDialogueIndex].text);
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

  const speakMomText = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.pitch = 1.0;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    // Try to find a female English voice
    const femaleVoice = voices.find(voice => 
      voice.lang.startsWith('en-') && 
      (voice.name.includes('female') || 
       voice.name.includes('woman') || 
       voice.name.toLowerCase().includes('samantha') ||
       voice.name.toLowerCase().includes('victoria') ||
       voice.name.toLowerCase().includes('karen'))
    );
    
    // Fallback to any English voice if no female voice is found
    const englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
    
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    } else if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const speakKidResponse = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Higher pitch for kid's voice
    utterance.pitch = 1.4;
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
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
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
            
            // Mark this question as attempted
            markAttempted();
            
            // Calculate similarity score based on key words and phrases
            const keyWords = expectedWords.filter(word => 
              !['a', 'an', 'the', 'is', 'are', 'to', 'in', 'on', 'at', 'and'].includes(word)
            );
            
            let matchCount = 0;
            keyWords.forEach(word => {
              // Check for exact match or close variations
              if (spokenWords.some(spoken => {
                // Exact match
                if (spoken === word) return true;
                // Plural/singular variations
                if (spoken === word + 's' || spoken === word.replace(/s$/, '')) return true;
                // Common variations
                if (word === 'yes' && (spoken === 'yeah' || spoken === 'yep')) return true;
                if (word === 'goodbye' && (spoken === 'bye' || spoken === 'byebye')) return true;
                if (word === 'morning' && spoken === 'mornin') return true;
                // Handle contractions
                if (word === "i'm" && spoken === "im") return true;
                // Handle common word combinations
                if (word === "pancakes" && (spoken === "pancake" || transcript.includes("pancakes"))) return true;
                return false;
              })) {
                matchCount++;
              }
            });
            
            const similarity = matchCount / keyWords.length;
            console.log('Matching score:', similarity, 'for transcript:', transcript); // Debug log
            
            if (similarity >= 0.6) {
              if (!completedDialogues[activeDialogueIndex]) {
                // Update score
                markCorrect();
                
                const newCompleted = [...completedDialogues];
                newCompleted[activeDialogueIndex] = true;
                setCompletedDialogues(newCompleted);
                
                // Enhanced confetti celebration
                // First burst from bottom
                confetti({
                  particleCount: 80,
                  spread: 100,
                  origin: { x: 0.5, y: 0.8 },
                  colors: ['#ff718d', '#ff8c37', '#ffcd3c', '#ff5252'],
                  ticks: 200
                });

                // Second burst from bottom corners
                setTimeout(() => {
                  confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 80,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#ff718d', '#ff8c37', '#ffcd3c', '#ff5252']
                  });
                  confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 80,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#ff718d', '#ff8c37', '#ffcd3c', '#ff5252']
                  });
                }, 250);

                // Move to next uncompleted dialogue after a delay
                setTimeout(() => {
                  const nextIndex = activeDialogueIndex + 1;
                  if (nextIndex < dialogues.length) {
                    setActiveDialogueIndex(nextIndex);
                    setSpokenText('');
                    // Play mom's voice for next dialogue
                    speakMomText(dialogues[nextIndex].text);
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

                <div className="bg-white rounded-lg shadow-lg">
                  <h1 className="text-xl md:text-2xl font-bold text-center text-pink-600 p-4 border-b border-pink-100">
                    Speaking Practice with Mom
                  </h1>

                  {/* All Dialogues Display */}
                  <div className="divide-y divide-gray-100">
                    {dialogues.map((dialogue, index) => (
                      <div 
                        key={dialogue.id}
                        className={`p-3 md:p-4 ${
                          completedDialogues[index] ? 'bg-green-50' : 'bg-white'
                        }`}
                      >
                        {/* Mom's Line */}
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                            👩
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
                                onClick={() => speakMomText(dialogue.text)}
                                className="mt-2 bg-pink-200 text-pink-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                🔊 Listen
                              </motion.button>
                            </div>
                          </div>
                        </div>

                        {/* Kid's Response Section */}
                        <div className="flex items-start gap-3 mt-3 flex-row-reverse">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                            👧
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-orange-50 rounded-lg p-3">
                              <div className="text-sm text-orange-600 mb-2">
                                Say: "{dialogue.expectedResponse}"
                              </div>
                              {isEditing && activeDialogueIndex === index ? (
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    value={editableText}
                                    onChange={(e) => setEditableText(e.target.value)}
                                    className="w-full p-2 border border-orange-200 rounded-lg text-base"
                                  />
                                  <div className="mt-2 flex gap-2">
                                    <motion.button
                                      onClick={handleEditSubmit}
                                      className="bg-green-500 text-white px-3 py-1.5 rounded-full text-sm"
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
                                <p className="text-base md:text-lg font-semibold text-orange-800 min-h-[2rem] break-words">
                                  {activeDialogueIndex === index ? spokenText : 
                                   completedDialogues[index] ? "✅ Completed!" : 
                                   "Click 'Start Speaking' to respond..."}
                                </p>
                              )}
                              <div className="mt-3 flex flex-wrap gap-2">
                                {activeDialogueIndex === index && !completedDialogues[index] && (
                                  <>
                                    <motion.button
                                      onClick={isListening ? stopListening : startListening}
                                      className={`${
                                        isListening 
                                          ? "bg-red-500" 
                                          : "bg-orange-500"
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
                                          className="bg-green-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                                {completedDialogues[index] && (
                                  <motion.button
                                    onClick={() => speakKidResponse(lastSpokenResponse)}
                                    className="bg-green-200 text-green-700 px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                      </div>
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

export default SpeakingWorksheet; 
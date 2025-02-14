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
  speaker: 'dog' | 'kid';
  text: string;
  emoji: string;
  expectedResponse: string;
  hint?: string;
}

const dialogues: Dialogue[] = [
  {
    id: 1,
    speaker: 'dog',
    text: "Hi friend! *tail wag* I'm so happy to see you this morning!",
    emoji: '🐕',
    expectedResponse: "Good morning buddy how are you",
    hint: "Greet your dog with a friendly morning message"
  },
  {
    id: 2,
    speaker: 'dog',
    text: "Look what I found! Can we play? Please please please!",
    emoji: '⚾',
    expectedResponse: "Do you want to play with the ball",
    hint: "Ask your dog if they want to play"
  },
  {
    id: 3,
    speaker: 'dog',
    text: "Oh boy oh boy! I love going outside! Can we go?",
    emoji: '🦮',
    expectedResponse: "Lets go to the park together",
    hint: "Suggest going to the park"
  },
  {
    id: 4,
    speaker: 'dog',
    text: "*tummy growls* I think it's dinner time... isn't it?",
    emoji: '🍖',
    expectedResponse: "Are you hungry its dinner time",
    hint: "Ask if your dog is hungry"
  },
  {
    id: 5,
    speaker: 'dog',
    text: "*excited bouncing* Is that my favorite treat I smell?",
    emoji: '🦴',
    expectedResponse: "Here is your favorite food",
    hint: "Tell your dog you have their food"
  },
  {
    id: 6,
    speaker: 'dog',
    text: "*big yawn* All that playing made me sleepy...",
    emoji: '😴',
    expectedResponse: "Time for your nap buddy",
    hint: "Tell your dog it's nap time"
  },
  {
    id: 7,
    speaker: 'dog',
    text: "Look what I brought! *holds leash* Outside time?",
    emoji: '🦮',
    expectedResponse: "Yes lets go for a walk",
    hint: "Respond to your dog's request for a walk"
  },
  {
    id: 8,
    speaker: 'dog',
    text: "Watch this! *sits and gives paw* Did I do good?",
    emoji: '🌟',
    expectedResponse: "Good job you are so smart",
    hint: "Praise your dog for doing a trick"
  },
  {
    id: 9,
    speaker: 'dog',
    text: "*snuggles close* You're my best friend ever...",
    emoji: '❤️',
    expectedResponse: "I love you too buddy",
    hint: "Tell your dog you love them back"
  }
];

const SpeakingPetWorksheet: React.FC = () => {
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

  // Play dog's "voice" on initial load
  useEffect(() => {
    if (activeDialogueIndex === 0) {
      speakDogText(dialogues[activeDialogueIndex].text);
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

  const speakDogText = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Playful voice for the dog
    utterance.pitch = 1.5;
    utterance.rate = 1.1;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const speakKidResponse = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Kid's voice settings
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
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
                
                // Paw print confetti celebration
                confetti({
                  particleCount: 80,
                  spread: 100,
                  origin: { x: 0.5, y: 0.8 },
                  colors: ['#818CF8', '#6366F1', '#4F46E5', '#4338CA'],
                  ticks: 200
                });

                setTimeout(() => {
                  confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 80,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#818CF8', '#6366F1', '#4F46E5', '#4338CA']
                  });
                  confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 80,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#818CF8', '#6366F1', '#4F46E5', '#4338CA']
                  });
                }, 250);

                setTimeout(() => {
                  const nextIndex = activeDialogueIndex + 1;
                  if (nextIndex < dialogues.length) {
                    setActiveDialogueIndex(nextIndex);
                    setSpokenText('');
                    speakDogText(dialogues[nextIndex].text);
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

                <div className="mx-2 md:mx-4 bg-indigo-50 p-3 md:p-4 shadow-md mb-4 rounded-lg">
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={dialogues.length * 10}
                  />
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <h1 className="text-xl md:text-2xl font-bold text-center text-indigo-600 p-4 border-b border-indigo-100">
                    Speaking with My Dog
                  </h1>

                  <div className="divide-y divide-gray-100">
                    {dialogues.map((dialogue, index) => (
                      <motion.div 
                        key={dialogue.id}
                        initial={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        animate={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        className={`p-3 md:p-4 ${
                          completedDialogues[index] ? 'bg-indigo-50' : 'bg-white'
                        } ${index > activeDialogueIndex ? 'hidden' : ''}`}
                      >
                        {/* Dog's Line */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                            🐕
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-indigo-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl md:text-2xl">{dialogue.emoji}</span>
                                <p className="text-base md:text-lg font-semibold text-indigo-800 break-words">
                                  {dialogue.text}
                                </p>
                              </div>
                              <motion.button
                                onClick={() => speakDogText(dialogue.text)}
                                className="mt-2 bg-indigo-200 text-indigo-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                            🧑
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-purple-50 rounded-lg p-3">
                              <div className="text-sm text-purple-600 mb-2 font-medium">
                                Say: "{dialogue.expectedResponse}"
                              </div>
                              <div className="text-xs text-purple-500 mb-3">
                                {dialogue.hint}
                              </div>
                              {isEditing && activeDialogueIndex === index ? (
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    value={editableText}
                                    onChange={(e) => setEditableText(e.target.value)}
                                    className="w-full p-2 border border-indigo-200 rounded-lg text-base"
                                  />
                                  <div className="flex gap-2 mt-2">
                                    <motion.button
                                      onClick={handleEditSubmit}
                                      className="bg-indigo-500 text-white px-3 py-1.5 rounded-full text-sm"
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
                                <p className="text-base md:text-lg font-semibold text-indigo-800 min-h-[2rem] break-words">
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
                                          : "bg-indigo-500"
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
                                          className="bg-indigo-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                                            className="bg-indigo-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                                    className="bg-indigo-200 text-indigo-700 px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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

export default SpeakingPetWorksheet; 
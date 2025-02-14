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
  speaker: 'teacher' | 'kid';
  text: string;
  emoji: string;
  expectedResponse: string;
  hint?: string;
}

const dialogues: Dialogue[] = [
  {
    id: 1,
    speaker: 'teacher',
    text: "Hello! Did you finish your math homework?",
    emoji: '📚',
    expectedResponse: "Yes I finished my math homework",
    hint: "Try saying: 'Yes I finished my math homework'"
  },
  {
    id: 2,
    speaker: 'teacher',
    text: "Great! Can you show me your counting exercise?",
    emoji: '🔢',
    expectedResponse: "Here is my counting exercise",
    hint: "Try saying: 'Here is my counting exercise'"
  },
  {
    id: 3,
    speaker: 'teacher',
    text: "Very neat work! Did you practice writing numbers?",
    emoji: '✏️',
    expectedResponse: "Yes I practiced writing numbers",
    hint: "Try saying: 'Yes I practiced writing numbers'"
  },
  {
    id: 4,
    speaker: 'teacher',
    text: "What was your favorite part of the homework?",
    emoji: '⭐',
    expectedResponse: "I liked counting the stars",
    hint: "Try saying: 'I liked counting the stars'"
  },
  {
    id: 5,
    speaker: 'teacher',
    text: "Did you need help with any questions?",
    emoji: '❓',
    expectedResponse: "No I did it by myself",
    hint: "Try saying: 'No I did it by myself'"
  },
  {
    id: 6,
    speaker: 'teacher',
    text: "Would you like some extra practice problems?",
    emoji: '📝',
    expectedResponse: "Yes please I want more practice",
    hint: "Try saying: 'Yes please I want more practice'"
  },
  {
    id: 7,
    speaker: 'teacher',
    text: "Remember to check your work carefully!",
    emoji: '✅',
    expectedResponse: "I will check my work carefully",
    hint: "Try saying: 'I will check my work carefully'"
  },
  {
    id: 8,
    speaker: 'teacher',
    text: "Did you enjoy learning about numbers?",
    emoji: '🎯',
    expectedResponse: "Yes I love learning numbers",
    hint: "Try saying: 'Yes I love learning numbers'"
  },
  {
    id: 9,
    speaker: 'teacher',
    text: "Tomorrow we'll learn about shapes!",
    emoji: '🔷',
    expectedResponse: "I am excited to learn shapes",
    hint: "Try saying: 'I am excited to learn shapes'"
  },
  {
    id: 10,
    speaker: 'teacher',
    text: "You did a wonderful job today!",
    emoji: '🌟',
    expectedResponse: "Thank you teacher see you tomorrow",
    hint: "Try saying: 'Thank you teacher see you tomorrow'"
  }
];

const SpeakingHomeworkWorksheet: React.FC = () => {
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

  // Play teacher's voice on initial load
  useEffect(() => {
    if (activeDialogueIndex === 0) {
      speakTeacherText(dialogues[activeDialogueIndex].text);
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

  const speakTeacherText = (text: string) => {
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-teal-50">
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
                
                // Enhanced confetti celebration with purple and teal colors
                confetti({
                  particleCount: 80,
                  spread: 100,
                  origin: { x: 0.5, y: 0.8 },
                  colors: ['#8B5CF6', '#14B8A6', '#A78BFA', '#2DD4BF'],
                  ticks: 200
                });

                setTimeout(() => {
                  confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 80,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#8B5CF6', '#14B8A6', '#A78BFA', '#2DD4BF']
                  });
                  confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 80,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#8B5CF6', '#14B8A6', '#A78BFA', '#2DD4BF']
                  });
                }, 250);

                setTimeout(() => {
                  const nextIndex = activeDialogueIndex + 1;
                  if (nextIndex < dialogues.length) {
                    setActiveDialogueIndex(nextIndex);
                    setSpokenText('');
                    speakTeacherText(dialogues[nextIndex].text);
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

                <div className="mx-2 md:mx-4 bg-purple-50 p-3 md:p-4 shadow-md mb-4 rounded-lg">
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={dialogues.length * 10}
                  />
                </div>

                <div className="bg-white rounded-lg shadow-lg">
                  <h1 className="text-xl md:text-2xl font-bold text-center text-purple-600 p-4 border-b border-purple-100">
                    Speaking Practice with Teacher
                  </h1>

                  <div className="divide-y divide-gray-100">
                    {dialogues.map((dialogue, index) => (
                      <motion.div 
                        key={dialogue.id}
                        initial={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        animate={{ opacity: index <= activeDialogueIndex ? 1 : 0 }}
                        className={`p-3 md:p-4 ${
                          completedDialogues[index] ? 'bg-teal-50' : 'bg-white'
                        } ${index > activeDialogueIndex ? 'hidden' : ''}`}
                      >
                        {/* Teacher's Line */}
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                            👩‍🏫
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-purple-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl md:text-2xl">{dialogue.emoji}</span>
                                <p className="text-base md:text-lg font-semibold text-purple-800 break-words">
                                  {dialogue.text}
                                </p>
                              </div>
                              <motion.button
                                onClick={() => speakTeacherText(dialogue.text)}
                                className="mt-2 bg-purple-200 text-purple-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                            👧
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="bg-teal-50 rounded-lg p-3">
                              <div className="text-sm text-teal-600 mb-2">
                                Say: "{dialogue.expectedResponse}"
                              </div>
                              {isEditing && activeDialogueIndex === index ? (
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    value={editableText}
                                    onChange={(e) => setEditableText(e.target.value)}
                                    className="w-full p-2 border border-teal-200 rounded-lg text-base"
                                  />
                                  <div className="mt-2 flex gap-2">
                                    <motion.button
                                      onClick={handleEditSubmit}
                                      className="bg-teal-500 text-white px-3 py-1.5 rounded-full text-sm"
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
                                <p className="text-base md:text-lg font-semibold text-teal-800 min-h-[2rem] break-words">
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
                                          : "bg-teal-500"
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
                                          className="bg-purple-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                                            className="bg-purple-500 text-white px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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
                                    className="bg-teal-200 text-teal-700 px-4 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-sm md:text-base"
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

export default SpeakingHomeworkWorksheet; 
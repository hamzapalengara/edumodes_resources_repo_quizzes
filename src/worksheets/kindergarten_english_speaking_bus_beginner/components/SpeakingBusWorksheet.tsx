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
  speaker: 'driver' | 'you';
  text: string;
  emoji: string;
  expectedResponse: string;
}

const dialogues: Dialogue[] = [
  {
    id: 1,
    speaker: 'you',
    text: "Excuse me, where is this bus going?",
    emoji: "🧑",
    expectedResponse: "Excuse me where is this bus going"
  },
  {
    id: 2,
    speaker: 'driver',
    text: "This bus goes to the city center. Would you like to know the stops?",
    emoji: "👨‍✈️",
    expectedResponse: "Yes please tell me the stops"
  },
  {
    id: 3,
    speaker: 'you',
    text: "What time will we reach the city center?",
    emoji: "🧑",
    expectedResponse: "What time will we reach the city center"
  },
  {
    id: 4,
    speaker: 'driver',
    text: "It takes about 30 minutes. The fare is two dollars.",
    emoji: "👨‍✈️",
    expectedResponse: "Here is two dollars please"
  },
  {
    id: 5,
    speaker: 'you',
    text: "Does this bus stop at the library?",
    emoji: "🧑",
    expectedResponse: "Does this bus stop at the library"
  },
  {
    id: 6,
    speaker: 'driver',
    text: "Yes, the library is our third stop. Please take a seat.",
    emoji: "👨‍✈️",
    expectedResponse: "Thank you I will take a seat"
  },
  {
    id: 7,
    speaker: 'you',
    text: "Could you tell me when we reach the library?",
    emoji: "🧑",
    expectedResponse: "Could you tell me when we reach the library"
  },
  {
    id: 8,
    speaker: 'driver',
    text: "Of course! I'll announce all stops clearly.",
    emoji: "👨‍✈️",
    expectedResponse: "Thank you very much"
  },
  {
    id: 9,
    speaker: 'you',
    text: "Is there another bus to the park?",
    emoji: "🧑",
    expectedResponse: "Is there another bus to the park"
  },
  {
    id: 10,
    speaker: 'driver',
    text: "Yes, bus number 5 goes to the park every 15 minutes.",
    emoji: "👨‍✈️",
    expectedResponse: "Thank you for the information"
  }
];

const SpeakingBusWorksheet: React.FC = () => {
  const [currentDialogue, setCurrentDialogue] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speakDriverText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find(v => v.lang.startsWith('en'));
    if (voice) {
      utterance.voice = voice;
    }
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const speakPassengerResponse = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find(v => v.lang.startsWith('en'));
    if (voice) {
      utterance.voice = voice;
    }
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <WorksheetHeader />
      
      <WorksheetTracker
        totalQuestions={dialogues.length}
        pointsPerQuestion={10}
        onSummaryGenerated={(summary: WorksheetSummary) => {
          console.log('Worksheet Summary:', summary);
        }}
      >
        {({ addPoints, markCorrect, markAttempted, markIncorrect, score }) => {
          const checkAnswer = (transcript: string) => {
            const currentExpectedResponse = dialogues[currentDialogue].expectedResponse.toLowerCase();
            const isAnswerCorrect = transcript.includes(currentExpectedResponse) ||
              currentExpectedResponse.includes(transcript);

            if (isAnswerCorrect) {
              setIsCorrect(true);
              addPoints(10);
              markCorrect();
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
            } else {
              setIsCorrect(false);
              markIncorrect();
            }
            markAttempted();
          };

          const startListening = () => {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
              recognitionRef.current = new SpeechRecognition();
              recognitionRef.current.continuous = false;
              recognitionRef.current.interimResults = false;
              recognitionRef.current.lang = 'en-US';

              recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                setTranscript(transcript);
                checkAnswer(transcript);
              };

              recognitionRef.current.onend = () => {
                setIsListening(false);
              };

              recognitionRef.current.start();
              setIsListening(true);
            }
          };

          const handleEditSubmit = () => {
            checkAnswer(editText.toLowerCase());
            setIsEditing(false);
            setEditText('');
          };

          return (
            <div className="px-0 md:px-4 py-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-2 md:mx-4">
                  <div className="p-4">
                    <ScoreDisplay 
                      score={score}
                      totalQuestions={dialogues.length * 10}
                    />
                    
                    <div className="mt-6 space-y-4">
                      {dialogues.map((dialogue, index) => (
                        <motion.div
                          key={dialogue.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: index <= currentDialogue ? 1 : 0.5, 
                            y: 0 
                          }}
                          className="flex flex-col gap-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                              dialogue.speaker === 'driver' ? 'bg-orange-100' : 'bg-yellow-100'
                            }`}>
                              <span className="text-2xl">{dialogue.emoji}</span>
                            </div>
                            <div className={`flex-1 p-4 rounded-lg ${
                              dialogue.speaker === 'driver' ? 'bg-orange-50' : 'bg-yellow-50'
                            }`}>
                              <p className="text-gray-800">{dialogue.text}</p>
                            </div>
                            {dialogue.speaker === 'driver' && (
                              <motion.button
                                onClick={() => speakDriverText(dialogue.text)}
                                className="px-3 py-2 bg-orange-100 rounded-lg text-orange-700 hover:bg-orange-200 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                🔊 Listen
                              </motion.button>
                            )}
                          </div>

                          {index === currentDialogue && dialogue.speaker === 'you' && (
                            <div className="ml-12 space-y-4">
                              {!transcript && (
                                <div className="flex gap-4">
                                  <motion.button
                                    onClick={startListening}
                                    disabled={isListening}
                                    className={`px-4 py-2 rounded-lg text-white ${
                                      isListening 
                                        ? 'bg-orange-400 animate-pulse' 
                                        : 'bg-orange-500 hover:bg-orange-600'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    {isListening ? '🎤 Listening...' : '🎤 Speak'}
                                  </motion.button>
                                  <motion.button
                                    onClick={() => setIsEditing(true)}
                                    className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    ⌨️ Type
                                  </motion.button>
                                  <motion.button
                                    onClick={() => speakPassengerResponse(dialogue.expectedResponse)}
                                    className="px-4 py-2 bg-yellow-100 rounded-lg text-yellow-700 hover:bg-yellow-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    💡 Hint
                                  </motion.button>
                                </div>
                              )}

                              {isEditing && (
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Type your response..."
                                  />
                                  <motion.button
                                    onClick={handleEditSubmit}
                                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    Submit
                                  </motion.button>
                                </div>
                              )}

                              {transcript && (
                                <div className="space-y-4">
                                  <div className={`p-4 rounded-lg ${
                                    isCorrect ? 'bg-green-50' : 'bg-red-50'
                                  }`}>
                                    <p className={`font-medium ${
                                      isCorrect ? 'text-green-700' : 'text-red-700'
                                    }`}>
                                      {transcript}
                                    </p>
                                  </div>
                                  
                                  <div className="flex gap-2">
                                    <motion.button
                                      onClick={() => {
                                        setTranscript('');
                                        setIsCorrect(null);
                                        if (isCorrect) {
                                          setCurrentDialogue(prev => prev + 1);
                                        }
                                      }}
                                      className={`px-4 py-2 rounded-lg text-white ${
                                        isCorrect 
                                          ? 'bg-green-500 hover:bg-green-600' 
                                          : 'bg-orange-500 hover:bg-orange-600'
                                      }`}
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      {isCorrect ? '✓ Continue' : '↺ Try Again'}
                                    </motion.button>
                                    <motion.button
                                      onClick={() => speakPassengerResponse(transcript)}
                                      className="px-4 py-2 bg-yellow-100 rounded-lg text-yellow-700 hover:bg-yellow-200"
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      🔊 Replay My Answer
                                    </motion.button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
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

export default SpeakingBusWorksheet; 
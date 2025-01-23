import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';

interface LetterState {
  value: string;
  isHidden: boolean;
  isCorrect?: boolean;
  userInput?: string;
}

// Add interface for worksheet summary
interface WorksheetSummary {
  summary: {
    total_questions: number;
    questions_attempted: number;
    correct_answers: number;
    incorrect_answers: number;
    total_score: number;
    completion_time: string;
    time_spent_seconds: number;
  }
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => ({
  value: letter,
  isHidden: Math.random() < 0.4, // Randomly hide ~40% of letters
}));

const LetterRecognitionWorksheet: React.FC = () => {
  const [letters, setLetters] = useState<LetterState[]>(ALPHABET);
  const [score, setScore] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Add new state variables for tracking
  const [startTime] = useState<Date>(new Date());
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  // Add reference to track current speech
  const currentSpeech = React.useRef<SpeechSynthesisUtterance | null>(null);

  const totalQuestions = letters.filter(l => l.isHidden).length;
  const maxScore = totalQuestions * 10;

  // Add message listener for summary request
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('📝 Worksheet received message:', event.data);
      
      // Handle both string and object message formats
      const isRequestingSummary = 
        event.data === 'GET_SUMMARY' || 
        event.data === 'REQUEST_SUMMARY' ||
        event.data?.type === 'REQUEST_SUMMARY' ||
        event.data?.type === 'GET_SUMMARY';

      if (isRequestingSummary) {
        console.log('📊 Creating worksheet summary...');
        const summary: WorksheetSummary = {
          summary: {
            total_questions: totalQuestions,
            questions_attempted: questionsAttempted,
            correct_answers: score / 10,
            incorrect_answers: incorrectAnswers,
            total_score: (score / maxScore) * 100,
            completion_time: new Date().toISOString(),
            time_spent_seconds: Math.round((new Date().getTime() - startTime.getTime()) / 1000)
          }
        };
        console.log('📤 Sending worksheet summary:', summary);
        window.parent.postMessage({ type: 'WORKSHEET_SUMMARY', data: summary }, '*');
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Log when listener is attached
    console.log('🎯 Worksheet summary listener attached');
    
    return () => {
      console.log('🔄 Worksheet summary listener removed');
      window.removeEventListener('message', handleMessage);
    };
  }, [score, questionsAttempted, incorrectAnswers, totalQuestions, maxScore, startTime]);

  // Function to stop current speech
  const stopCurrentSpeech = () => {
    if (window.speechSynthesis && currentSpeech.current) {
      window.speechSynthesis.cancel();
      currentSpeech.current = null;
    }
  };

  // Function to speak text
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      stopCurrentSpeech();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      currentSpeech.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleReset = () => {
    stopCurrentSpeech();
    const newAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => ({
      value: letter,
      isHidden: Math.random() < 0.4,
    }));
    setLetters(newAlphabet);
    setScore(0);
    setIsComplete(false);
    setShowSuccess(false);
    // Reset tracking variables
    setQuestionsAttempted(0);
    setIncorrectAnswers(0);
  };

  const handleLetterInput = (index: number, value: string) => {
    const upperValue = value.toUpperCase();
    const newLetters = [...letters];
    const letter = newLetters[index];

    if (letter.isHidden) {
      // Increment questions attempted if this is a new attempt or a different answer
      if (!letter.userInput || letter.userInput !== upperValue) {
        setQuestionsAttempted(prev => prev + 1);
      }

      letter.userInput = upperValue;
      letter.isCorrect = upperValue === letter.value;

      if (letter.isCorrect) {
        setScore(prev => Math.min(prev + 10, maxScore));
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 1500);

        // Play success sound
        const audio = new Audio('/success.mp3');
        audio.play().catch(console.error);

        // Speak feedback
        speak(`Correct! This is the letter ${letter.value}`);

        // Check if this was the last letter needed
        const updatedLetters = [...newLetters];
        const allCorrect = updatedLetters
          .filter(l => l.isHidden)
          .every(l => l.isCorrect || l === letter);

        if (allCorrect) {
          setIsComplete(true);
          const celebrationAudio = new Audio('/celebration.mp3');
          celebrationAudio.play().catch(console.error);
        }
      } else if (upperValue !== '') {
        // Increment incorrect answers counter
        setIncorrectAnswers(prev => prev + 1);

        // Play error sound
        const errorAudio = new Audio('/error.mp3');
        errorAudio.play().catch(console.error);

        // Speak hint
        const hint = `Try again! This letter comes ${
          letter.value < upperValue ? 'before' : 'after'
        } ${upperValue} in the alphabet.`;
        speak(hint);
      }

      setLetters(newLetters);
    }
  };

  // Clean up speech on unmount
  React.useEffect(() => {
    return () => {
      stopCurrentSpeech();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-6">
            Fill in the Missing Letters
          </h1>

          <div className="mb-6">
            <ScoreDisplay score={score} totalQuestions={maxScore} />
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-7 gap-4 mb-8">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                className={`
                  aspect-square rounded-lg border-2 
                  ${letter.isHidden ? 'border-dashed border-purple-300' : 'border-purple-200'} 
                  flex items-center justify-center text-2xl font-bold
                  ${letter.isHidden ? 'bg-white' : 'bg-purple-50'}
                  ${letter.isCorrect === false ? 'border-red-300 bg-red-50' : ''}
                  ${letter.isCorrect === true ? 'border-green-300 bg-green-50' : ''}
                  transition-colors duration-300
                `}
                whileHover={letter.isHidden && !letter.isCorrect ? { scale: 1.05 } : {}}
                whileTap={letter.isHidden && !letter.isCorrect ? { scale: 0.95 } : {}}
                animate={letter.isCorrect ? { scale: [1, 1.2, 1] } : {}}
                onClick={() => handleLetterInput(index, letter.userInput || '')}
              >
                {letter.isHidden ? (
                  letter.isCorrect ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-green-600"
                    >
                      {letter.value}
                    </motion.span>
                  ) : (
                    <input
                      type="text"
                      maxLength={1}
                      value={letter.userInput || ''}
                      onChange={(e) => handleLetterInput(index, e.target.value)}
                      className={`
                        w-full h-full text-center bg-transparent focus:outline-none
                        ${letter.isCorrect === false ? 'text-red-500' : 'text-purple-700'}
                      `}
                      style={{ fontSize: '1.5rem' }}
                    />
                  )
                ) : (
                  <span className="text-purple-700">{letter.value}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Instructions */}
          <div className="text-center text-gray-600">
            <p className="mb-2">Fill in the missing letters to complete the alphabet!</p>
            <p className="text-sm">Click on any empty circle and type the correct letter</p>
          </div>
        </div>

        {/* Success Animation */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 pointer-events-none flex items-center justify-center"
          >
            <div className="relative">
              {/* Central celebration emoji */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-7xl">🌟</div>
              </motion.div>

              {/* Encouraging message */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12
                          bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-lg font-bold text-purple-600 whitespace-nowrap">
                  {[
                    "Amazing! 🎯",
                    "Great job! 🎨",
                    "You got it! 🎈",
                    "Wonderful! 🌈",
                    "Perfect! 🎪",
                    "Excellent! 🎠",
                    "Brilliant! 🎡",
                    "Super! 🎢",
                  ][Math.floor(Math.random() * 8)]}
                </p>
              </motion.div>

              {/* Floating emojis */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2"
                initial="hidden"
                animate="visible"
              >
                {[..."🎈🎨🎪🎠🌈🎡✨🎢"].map((emoji, index) => (
                  <motion.span
                    key={index}
                    className="absolute text-3xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: -100,
                      }
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.8,
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Completion Message */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50"
          >
            <motion.div
              className="bg-white rounded-xl p-8 text-center max-w-md mx-4"
              initial={{ scale: 0, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              {/* Trophy Animation */}
              <motion.div
                className="text-8xl mb-6"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                🏆
              </motion.div>

              <motion.h2
                className="text-3xl font-bold text-purple-800 mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🎉 Outstanding Achievement! 🎉
              </motion.h2>

              <p className="text-gray-600 mb-6 text-lg">
                You've mastered the alphabet sequence!
              </p>

              <motion.div 
                className="text-xl font-bold text-purple-600 mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Score: {score}/{maxScore}
              </motion.div>

              {/* Celebration Icons */}
              <div className="grid grid-cols-4 gap-4 text-4xl mb-6">
                {[..."🌟🎨🎪🎠"].map((emoji, index) => (
                  <motion.span
                    key={index}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2 
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>

              <motion.p
                className="text-purple-500 font-medium mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Keep up the amazing work! 🌈
              </motion.p>

              {/* Try Again Button */}
              <motion.button
                onClick={handleReset}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg
                          hover:from-purple-600 hover:to-pink-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Try Again 🎯
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LetterRecognitionWorksheet; 
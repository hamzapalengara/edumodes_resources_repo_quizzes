import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface Question {
  id: number;
  word: string;
  options: string[];
}

const WORD_LIST = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Orange',
  'Pink',
  'Purple',
  'Black',
  'White',
  'Brown'
];

// Generate questions with one correct answer and two random distractors
const generateQuestions = (): Question[] => {
  return WORD_LIST.map((word, index) => {
    const otherWords = WORD_LIST.filter(w => w !== word);
    const shuffledOtherWords = [...otherWords].sort(() => Math.random() - 0.5);
    const options = [word, ...shuffledOtherWords.slice(0, 2)]
      .sort(() => Math.random() - 0.5);

    return {
      id: index + 1,
      word,
      options
    };
  });
};

const ColorWordSoundWorksheet: React.FC = () => {
  const [questions] = useState<Question[]>(generateQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);
  const [showCompletion, setShowCompletion] = useState(false);

  // Stop current speech when component unmounts
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

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
      utterance.rate = 0.8; // Slightly slower for clarity
      currentSpeech.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Update window size for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle summary generation
  const handleSummaryGenerated = (summary: WorksheetSummary) => {
    console.log('Worksheet Summary:', summary);
    if (summary.summary.correct_answers === WORD_LIST.length) {
      setShowCompletion(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}

      <TouchContainer>
        <div className="px-0 md:px-4">
          <WorksheetTracker
            totalQuestions={WORD_LIST.length}
            pointsPerQuestion={10}
            onSummaryGenerated={handleSummaryGenerated}
          >
            {({ addPoints, markCorrect, markAttempted, markIncorrect, score }) => (
              <div className="max-w-4xl mx-auto">
                {/* Score Display */}
                <div className="bg-white rounded-lg p-4 shadow-md mb-4">
                  <ScoreDisplay 
                    score={score}
                    totalQuestions={WORD_LIST.length * 10}
                  />
                </div>

                {showCompletion ? (
                  <div className="bg-white rounded-lg p-6 text-center shadow-lg mt-4">
                    <h2 className="text-2xl font-bold text-purple-600 mb-4">
                      🎉 Congratulations! 🎉
                    </h2>
                    <p className="text-lg text-purple-700 mb-2">
                      You've mastered all the color words!
                    </p>
                    <p className="text-purple-600">
                      Keep practicing to remember them even better!
                    </p>
                  </div>
                ) : (
                  // Main Game Area
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-center mb-6">
                      <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Match Colors with Their Sounds
                      </h1>
                      <p className="text-gray-600">
                        Listen to the color word and select the matching option
                      </p>
                    </div>

                    {/* Question Section */}
                    <div className="mb-8">
                      <div className="flex justify-center mb-6">
                        <button
                          onClick={() => speak(questions[currentQuestionIndex].word)}
                          className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:shadow-xl transition-shadow"
                          aria-label="Play sound"
                        >
                          🔊
                        </button>
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              markAttempted();
                              if (option === questions[currentQuestionIndex].word) {
                                markCorrect();
                                addPoints(10);
                                setShowConfetti(true);
                                if (currentQuestionIndex < questions.length - 1) {
                                  setCurrentQuestionIndex(prev => prev + 1);
                                }
                              } else {
                                markIncorrect();
                              }
                            }}
                            className={`p-4 rounded-lg text-lg font-semibold shadow-md transition-transform hover:scale-105
                              ${option === 'Red' ? 'bg-red-500 text-white' :
                                option === 'Blue' ? 'bg-blue-500 text-white' :
                                option === 'Green' ? 'bg-green-500 text-white' :
                                option === 'Yellow' ? 'bg-yellow-400 text-gray-800' :
                                option === 'Orange' ? 'bg-orange-500 text-white' :
                                option === 'Pink' ? 'bg-pink-500 text-white' :
                                option === 'Purple' ? 'bg-purple-500 text-white' :
                                option === 'Black' ? 'bg-gray-900 text-white' :
                                option === 'White' ? 'bg-gray-100 text-gray-800 border border-gray-300' :
                                'bg-amber-800 text-white' // Brown
                              }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center items-center gap-2">
                      <span className="text-gray-600">
                        Question {currentQuestionIndex + 1} of {questions.length}
                      </span>
                      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </WorksheetTracker>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ColorWordSoundWorksheet; 
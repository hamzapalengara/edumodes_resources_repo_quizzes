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
  'Dog',
  'Cat',
  'Cow',
  'Lion',
  'Tiger',
  'Elephant',
  'Monkey',
  'Horse',
  'Fish',
  'Bird'
];

const generateQuestions = (): Question[] => {
  return WORD_LIST.map((word, index) => {
    // Create options array with correct answer and two random wrong answers
    const otherWords = WORD_LIST.filter(w => w !== word);
    const shuffledOtherWords = [...otherWords].sort(() => Math.random() - 0.5);
    const options = [word, ...shuffledOtherWords.slice(0, 2)].sort(() => Math.random() - 0.5);

    return {
      id: index + 1,
      word,
      options
    };
  });
};

const AnimalWordSoundWorksheet: React.FC = () => {
  const [questions] = useState<Question[]>(generateQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  const stopCurrentSpeech = () => {
    if (window.speechSynthesis && currentSpeech.current) {
      window.speechSynthesis.cancel();
      currentSpeech.current = null;
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      stopCurrentSpeech();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8; // Slightly slower for clarity
      currentSpeech.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Initial instruction
    setTimeout(() => {
      speak("Welcome! Listen to the animal sound and choose the correct word. Click the speaker to hear the word!");
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      stopCurrentSpeech();
    };
  }, []);

  return (
    <WorksheetTracker
      totalQuestions={WORD_LIST.length}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Worksheet Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect, markAttempted }) => {
        const handleOptionClick = (option: string) => {
          if (answeredQuestions.has(questions[currentQuestionIndex].id)) {
            return; // Already answered
          }

          setSelectedOption(option);
          markAttempted();

          if (option === questions[currentQuestionIndex].word) {
            markCorrect();
            speak("Correct! Well done!");
            setAnsweredQuestions(prev => new Set([...prev, questions[currentQuestionIndex].id]));

            // Show confetti for correct answers
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);

            // Move to next question after a delay
            setTimeout(() => {
              if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedOption(null);
              } else {
                speak("Congratulations! You've completed all the questions!");
              }
            }, 1500);
          } else {
            speak("Try again!");
          }
        };

        const currentQuestion = questions[currentQuestionIndex];

        return (
          <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
            {showConfetti && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={200}
                recycle={false}
                colors={['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493']}
              />
            )}
            
            <WorksheetHeader />
            
            <TouchContainer>
              <div className="px-0 md:px-4">
                <div className="w-full mb-4">
                  <ScoreDisplay score={score} totalQuestions={maxScore} />
                </div>

                <div className="bg-white rounded-lg p-4 shadow-lg mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-600 mb-2">
                    Animal Word Sound Game
                  </h1>
                  <p className="text-center text-purple-500">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </p>
                </div>

                {/* Question Section */}
                <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                  <div className="flex flex-col items-center gap-6">
                    {/* Sound Button */}
                    <button
                      onClick={() => speak(currentQuestion.word)}
                      className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 transition-all"
                    >
                      <span className="text-4xl">🔊</span>
                    </button>

                    <p className="text-purple-600 text-lg font-medium">
                      Which animal makes this sound?
                    </p>
                  </div>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      disabled={answeredQuestions.has(currentQuestion.id)}
                      className={`
                        p-6 rounded-lg shadow-lg text-xl font-bold text-center
                        transform hover:scale-105 transition-all
                        ${selectedOption === option
                          ? option === currentQuestion.word
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : 'bg-white hover:bg-purple-50 text-purple-600'
                        }
                        ${answeredQuestions.has(currentQuestion.id) ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-8 bg-white rounded-lg p-4 shadow-lg">
                  <div className="w-full bg-purple-100 rounded-full h-4">
                    <div
                      className="bg-purple-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${(answeredQuestions.size / questions.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-center text-purple-600 mt-2">
                    {answeredQuestions.size} of {questions.length} completed
                  </p>
                </div>
              </div>
            </TouchContainer>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default AnimalWordSoundWorksheet; 
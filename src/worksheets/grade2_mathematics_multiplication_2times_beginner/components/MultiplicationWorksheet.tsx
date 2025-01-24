import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

const MultiplicationWorksheet: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(10).fill(''));
  const [feedback, setFeedback] = useState<Array<'correct' | 'incorrect' | null>>(Array(10).fill(null));
  const [showCelebration, setShowCelebration] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const problems = [
    {
      groups: 1,
      itemsPerGroup: 2,
      visual: '🍎 🍎',
      story: 'You have 1 basket with 2 apples.',
      question: 'How many apples are there in total?'
    },
    {
      groups: 2,
      itemsPerGroup: 2,
      visual: '🌟 🌟  |  🌟 🌟',
      story: 'There are 2 groups of stars.',
      question: 'How many stars are there in total?'
    },
    {
      groups: 3,
      itemsPerGroup: 2,
      visual: '🎈 🎈  |  🎈 🎈  |  🎈 🎈',
      story: 'You have 3 friends, and each friend gets 2 balloons.',
      question: 'How many balloons are there in total?'
    },
    {
      groups: 4,
      itemsPerGroup: 2,
      visual: '🦋 🦋  |  🦋 🦋  |  🦋 🦋  |  🦋 🦋',
      story: 'There are 4 flowers, and each flower has 2 butterflies.',
      question: 'How many butterflies are there in total?'
    },
    {
      groups: 5,
      itemsPerGroup: 2,
      visual: '🐠 🐠  |  🐠 🐠  |  🐠 🐠  |  🐠 🐠  |  🐠 🐠',
      story: 'You see 5 fish bowls with 2 fish in each bowl.',
      question: 'How many fish are there in total?'
    },
    {
      groups: 6,
      itemsPerGroup: 2,
      visual: '🍪 🍪  |  🍪 🍪  |  🍪 🍪  |  🍪 🍪  |  🍪 🍪  |  🍪 🍪',
      story: 'Mom baked 6 batches of cookies with 2 cookies in each batch.',
      question: 'How many cookies are there in total?'
    },
    {
      groups: 7,
      itemsPerGroup: 2,
      visual: '🎨 🎨  |  🎨 🎨  |  🎨 🎨  |  🎨 🎨  |  🎨 🎨  |  🎨 🎨  |  🎨 🎨',
      story: 'The art teacher gave 7 students 2 paint brushes each.',
      question: 'How many paint brushes were given in total?'
    },
    {
      groups: 8,
      itemsPerGroup: 2,
      visual: '🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸',
      story: 'There are 8 flower pots with 2 flowers in each pot.',
      question: 'How many flowers are there in total?'
    },
    {
      groups: 9,
      itemsPerGroup: 2,
      visual: '🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁',
      story: 'You have 9 friends, and each friend gets 2 presents.',
      question: 'How many presents do you need in total?'
    },
    {
      groups: 10,
      itemsPerGroup: 2,
      visual: '⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐',
      story: 'You completed 10 tasks and earned 2 stars for each task!',
      question: 'How many stars did you earn in total?'
    }
  ];

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
    
    // Clear feedback for this question
    const newFeedback = [...feedback];
    newFeedback[index] = null;
    setFeedback(newFeedback);
  };

  return (
    <WorksheetTracker 
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Multiplication Worksheet Summary:', summary);
      }}
    >
      {({ score, markCorrect, markIncorrect, markAttempted }) => {
        const checkAnswer = (index: number) => {
          const problem = problems[index];
          const correctAnswer = problem.groups * problem.itemsPerGroup;
          const newFeedback = [...feedback];
          const isCorrect = Number(userAnswers[index]) === correctAnswer;
          newFeedback[index] = isCorrect ? 'correct' : 'incorrect';
          setFeedback(newFeedback);

          // Mark attempt and update score using WorksheetTracker
          markAttempted();
          if (isCorrect) {
            markCorrect();
          } else {
            markIncorrect();
          }

          // Show celebration if all answers are correct
          const allCorrect = newFeedback.every(f => f === 'correct');
          if (allCorrect) {
            setShowConfetti(true);
            setShowCelebration(true);
            
            // Play celebration sound
            const audio = new Audio('data:audio/mp3;base64,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');
            audio.play();
            
            // Stop confetti after 8 seconds
            setTimeout(() => {
              setShowConfetti(false);
            }, 8000);
          }
        };

        return (
          <div className="min-h-screen bg-white w-full">
            {showConfetti && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={500}
                recycle={true}
                tweenDuration={8000}
                gravity={0.2}
                colors={[
                  '#FFD700', // Gold
                  '#FF69B4', // Pink
                  '#87CEEB', // Sky Blue
                  '#98FB98', // Pale Green
                  '#DDA0DD', // Plum
                  '#F0E68C', // Khaki
                  '#FF6347', // Tomato
                  '#4169E1'  // Royal Blue
                ]}
              />
            )}
            
            <WorksheetHeader />
            <TouchContainer>
              <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8">
                <ScoreDisplay score={score/10} totalQuestions={10} />

                <div className="bg-white md:rounded-lg md:border md:border-gray-200 p-4 md:p-6">
                  <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Fun with the 2 Times Table! 🌟
                  </h1>
                  
                  {/* Student info section */}
                  <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6">
                    <div className="text-sm text-gray-600">
                      Super Star's Name: _____________________
                    </div>
                    <div className="text-sm text-gray-600">
                      Today's Date: _____________________
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6 border-2 border-blue-200">
                    <h2 className="font-bold text-blue-800 mb-2 text-lg">Let's Learn Multiplication! 🎮</h2>
                    <p className="text-blue-700">
                      Look at each group of items carefully. Count how many groups there are and how many items are in each group.
                      Then write the total number of items in the answer box. Remember, multiplication is just counting groups of equal size! ✨
                    </p>
                  </div>

                  {/* Problems */}
                  <div className="space-y-6">
                    {problems.map((problem, index) => (
                      <div 
                        key={index} 
                        className={`bg-gray-50 rounded-lg p-4 md:p-6 border-2 transition-all duration-300 ${
                          feedback[index] === 'correct' ? 'border-green-300 bg-green-50' :
                          feedback[index] === 'incorrect' ? 'border-red-300 bg-red-50' :
                          'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="grid grid-cols-1 gap-4">
                          {/* Problem Number */}
                          <div className="text-lg font-bold text-blue-600">
                            Question {index + 1}
                          </div>

                          {/* Story */}
                          <div className="text-lg font-medium mb-2 text-gray-700">
                            {problem.story}
                            <br />
                            <span className="text-blue-600 font-bold">{problem.question}</span>
                          </div>
                          
                          {/* Visual representation */}
                          <div className="text-2xl md:text-3xl mb-4 text-center break-words">
                            {problem.visual}
                          </div>

                          {/* Multiplication sentence */}
                          <div className="flex flex-col items-center gap-4">
                            <div className="text-xl font-medium text-blue-600">
                              {problem.groups} × 2 = 
                              <input
                                type="number"
                                value={userAnswers[index]}
                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                                className={`w-16 md:w-20 h-12 mx-2 text-center text-xl border-3 rounded-lg focus:outline-none transition-all duration-300 ${
                                  feedback[index] === 'correct' ? 'border-green-400 bg-green-100' :
                                  feedback[index] === 'incorrect' ? 'border-red-400 bg-red-100' :
                                  'border-blue-300 hover:border-blue-400'
                                }`}
                                min="0"
                                max="99"
                              />
                            </div>

                            {/* Check answer button */}
                            <button
                              onClick={() => checkAnswer(index)}
                              className={`w-full md:w-auto px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                feedback[index] === 'correct' ? 'bg-green-500 text-white' :
                                feedback[index] === 'incorrect' ? 'bg-red-500 text-white' :
                                'bg-blue-500 text-white hover:bg-blue-600'
                              }`}
                            >
                              {feedback[index] === 'correct' ? '✓ Correct!' :
                               feedback[index] === 'incorrect' ? 'Try Again' :
                               'Check Answer'}
                            </button>

                            {/* Feedback message */}
                            {feedback[index] === 'incorrect' && (
                              <p className="text-red-600 mt-2 text-center">
                                Look carefully at the groups and count again!
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Celebration message */}
                  {showCelebration && (
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-8 rounded-xl shadow-2xl border-4 border-yellow-400 text-center z-50 mx-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">🎉 Amazing Job! 🎉</h2>
                      <p className="text-lg md:text-xl text-gray-700">You've mastered the 2 times table!</p>
                    </div>
                  )}
                </div>
              </div>
            </TouchContainer>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default MultiplicationWorksheet; 
import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

const MultiplicationArraysWorksheet: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<{ equation: string; total: string }[]>(
    Array(10).fill({ equation: '', total: '' })
  );
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
      rows: 3,
      cols: 4,
      result: 12,
      story: 'A garden has 3 rows of flowers with 4 flowers in each row.',
      question: 'How many flowers are there in total?',
      emoji: '🌸'
    },
    {
      rows: 2,
      cols: 6,
      result: 12,
      story: 'A classroom has 2 rows of desks with 6 desks in each row.',
      question: 'How many desks are there in total?',
      emoji: '🪑'
    },
    {
      rows: 4,
      cols: 3,
      result: 12,
      story: 'A fruit shop displays oranges in 4 rows with 3 oranges in each row.',
      question: 'How many oranges are on display?',
      emoji: '🍊'
    },
    {
      rows: 5,
      cols: 2,
      result: 10,
      story: 'Five children each have 2 balloons.',
      question: 'How many balloons are there in total?',
      emoji: '🎈'
    },
    {
      rows: 3,
      cols: 3,
      result: 9,
      story: 'A bakery arranges cupcakes in 3 rows with 3 cupcakes in each row.',
      question: 'How many cupcakes are there in total?',
      emoji: '🧁'
    },
    {
      rows: 2,
      cols: 5,
      result: 10,
      story: 'Two teams each scored 5 goals in a tournament.',
      question: 'How many goals were scored in total?',
      emoji: '⚽'
    },
    {
      rows: 4,
      cols: 2,
      result: 8,
      story: 'Four friends each brought 2 books to share.',
      question: 'How many books did they bring in total?',
      emoji: '📚'
    },
    {
      rows: 3,
      cols: 5,
      result: 15,
      story: 'Three trees each have 5 birds sitting on their branches.',
      question: 'How many birds are there in total?',
      emoji: '🐦'
    },
    {
      rows: 6,
      cols: 2,
      result: 12,
      story: 'Six children each have 2 toy cars.',
      question: 'How many toy cars are there in total?',
      emoji: '🚗'
    },
    {
      rows: 2,
      cols: 4,
      result: 8,
      story: 'Two shelves each have 4 plants.',
      question: 'How many plants are there in total?',
      emoji: '🪴'
    }
  ];

  const renderArray = (rows: number, cols: number, emoji: string) => {
    return (
      <div className="inline-block bg-white p-4 rounded-lg border-2 border-blue-200">
        <div className="grid gap-2" style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}>
          {Array(rows).fill(null).map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              {Array(cols).fill(null).map((_, colIndex) => (
                <div key={colIndex} className="text-2xl">
                  {emoji}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleAnswerChange = (index: number, type: 'equation' | 'total', value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = {
      ...newAnswers[index],
      [type]: value
    };
    setUserAnswers(newAnswers);
    
    const newFeedback = [...feedback];
    newFeedback[index] = null;
    setFeedback(newFeedback);
  };

  return (
    <WorksheetTracker 
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Multiplication Arrays Worksheet Summary:', summary);
      }}
    >
      {({ score, markCorrect, markIncorrect, markAttempted }) => {
        const checkAnswer = (index: number) => {
          const newFeedback = [...feedback];
          const problem = problems[index];
          
          // Check if equation matches rows × cols or cols × rows
          const equationAnswer = userAnswers[index].equation.replace(/\s/g, '');
          const correctEquations = [
            `${problem.rows}×${problem.cols}`,
            `${problem.rows}*${problem.cols}`,
            `${problem.cols}×${problem.rows}`,
            `${problem.cols}*${problem.rows}`
          ];
          
          const isEquationCorrect = correctEquations.includes(equationAnswer);
          const isTotalCorrect = Number(userAnswers[index].total) === problem.result;
          
          newFeedback[index] = isEquationCorrect && isTotalCorrect ? 'correct' : 'incorrect';
          setFeedback(newFeedback);

          // Mark attempt and update score using WorksheetTracker
          markAttempted();
          if (isEquationCorrect && isTotalCorrect) {
            markCorrect();
          } else {
            markIncorrect();
          }

          const allCorrect = newFeedback.every(f => f === 'correct');
          if (allCorrect) {
            setShowConfetti(true);
            setShowCelebration(true);
            
            const audio = new Audio('data:audio/mp3;base64,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');
            audio.play();
            
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
              <div className="max-w-4xl mx-auto p-6 pt-8">
                <ScoreDisplay score={score/10} totalQuestions={10} />

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Multiplication with Arrays! 🎯
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
                    <h2 className="font-bold text-blue-800 mb-2 text-lg">Let's Learn with Arrays! 🎮</h2>
                    <p className="text-blue-700">
                      Look at each array of objects carefully. Write the multiplication equation you see in the array, 
                      then write the total number of objects. Remember, you can count rows × columns or columns × rows!
                    </p>
                  </div>

                  {/* Sample Question */}
                  <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200 mb-8">
                    <h3 className="font-bold text-green-800 mb-2">Sample Question ✨</h3>
                    <div className="flex justify-center mb-4">
                      {renderArray(2, 3, '🌟')}
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-green-100">
                      <p className="text-green-700 mb-2">For this array:</p>
                      <ul className="space-y-2 text-green-600">
                        <li>• Multiplication Equation: 2 × 3 (or 3 × 2) because we see 2 rows with 3 stars in each row</li>
                        <li>• Total Count: 6 stars</li>
                      </ul>
                    </div>
                  </div>

                  {/* Problems */}
                  <div className="space-y-8">
                    {problems.map((problem, index) => (
                      <div 
                        key={index} 
                        className={`bg-gray-50 rounded-lg p-6 border-2 transition-all duration-300 ${
                          feedback[index] === 'correct' ? 'border-green-300 bg-green-50' :
                          feedback[index] === 'incorrect' ? 'border-red-300 bg-red-50' :
                          'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="grid grid-cols-1 gap-4">
                          {/* Problem Number */}
                          <div className="text-lg font-bold text-blue-600">
                            Puzzle {index + 1}
                          </div>

                          {/* Story and Question */}
                          <div className="text-lg font-medium mb-2 text-gray-700">
                            {problem.story}
                            <br />
                            <span className="text-blue-600 font-bold">{problem.question}</span>
                          </div>
                          
                          {/* Array Visual */}
                          <div className="flex justify-center mb-4">
                            {renderArray(problem.rows, problem.cols, problem.emoji)}
                          </div>

                          {/* Equations and Inputs */}
                          <div className="flex flex-col items-center gap-6">
                            {/* Multiplication Equation */}
                            <div className="flex items-center gap-4 text-xl">
                              <div className="font-medium text-blue-600">
                                Multiplication Equation = 
                              </div>
                              <input
                                type="text"
                                value={userAnswers[index].equation}
                                onChange={(e) => handleAnswerChange(index, 'equation', e.target.value)}
                                className={`w-24 h-12 text-center text-xl border-3 rounded-lg focus:outline-none transition-all duration-300 ${
                                  feedback[index] === 'correct' ? 'border-green-400 bg-green-100' :
                                  feedback[index] === 'incorrect' ? 'border-red-400 bg-red-100' :
                                  'border-blue-300 focus:border-blue-500 hover:border-blue-400'
                                }`}
                                placeholder="2 × 3"
                              />
                            </div>

                            {/* Total Count */}
                            <div className="flex items-center gap-4 text-xl">
                              <div className="font-medium text-blue-600">
                                Total = 
                              </div>
                              <input
                                type="number"
                                value={userAnswers[index].total}
                                onChange={(e) => handleAnswerChange(index, 'total', e.target.value)}
                                className={`w-20 h-12 text-center text-xl border-3 rounded-lg focus:outline-none transition-all duration-300 ${
                                  feedback[index] === 'correct' ? 'border-green-400 bg-green-100' :
                                  feedback[index] === 'incorrect' ? 'border-red-400 bg-red-100' :
                                  'border-blue-300 focus:border-blue-500 hover:border-blue-400'
                                }`}
                                placeholder="?"
                              />
                            </div>

                            {/* Check Answer Button */}
                            <button
                              onClick={() => checkAnswer(index)}
                              disabled={feedback[index] === 'correct'}
                              className={`px-6 py-2 rounded-full text-white transition-all duration-300 ${
                                feedback[index] === 'correct' 
                                  ? 'bg-green-500 cursor-not-allowed opacity-50' 
                                  : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'
                              }`}
                            >
                              {feedback[index] === 'correct' ? 'Correct! 🌟' : 'Check Answer'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Celebration */}
                  {showCelebration && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                      <div className="bg-white rounded-xl p-8 text-center transform animate-bounce">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">
                          🎉 Array-zing Achievement! 🎉
                        </h2>
                        <p className="text-xl text-gray-700">
                          Wow! You're a multiplication master! You understand arrays perfectly! 
                        </p>
                        <button
                          onClick={() => setShowCelebration(false)}
                          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
                        >
                          Keep Learning! ⭐
                        </button>
                      </div>
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

export default MultiplicationArraysWorksheet; 
import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import ScoreDisplay from '../../../components/shared/ScoreDisplay';
import Confetti from 'react-confetti';

const MultiplicationWorksheet: React.FC = () => {
  const [score, setScore] = useState(0);
  const [totalQuestions] = useState(10);
  const [userAnswers, setUserAnswers] = useState<{ addition: string; multiplication: string }[]>(
    Array(10).fill({ addition: '', multiplication: '' })
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
      repeated: '2 + 2 + 2',
      multiplication: '3 × 2',
      result: 6,
      visual: '🍎🍎 + 🍎🍎 + 🍎🍎',
      story: 'You have 3 baskets with 2 apples in each basket.',
      question: 'What is the total number of apples?'
    },
    {
      repeated: '3 + 3 + 3',
      multiplication: '3 × 3',
      result: 9,
      visual: '🐶🐶🐶 + 🐶🐶🐶 + 🐶🐶🐶',
      story: 'There are 3 dog parks with 3 puppies in each park.',
      question: 'What is the total number of puppies?'
    },
    {
      repeated: '4 + 4',
      multiplication: '2 × 4',
      result: 8,
      visual: '🎈🎈🎈🎈 + 🎈🎈🎈🎈',
      story: 'You have 2 friends, and each friend gets 4 balloons.',
      question: 'What is the total number of balloons?'
    },
    {
      repeated: '2 + 2 + 2 + 2',
      multiplication: '4 × 2',
      result: 8,
      visual: '🍦🍦 + 🍦🍦 + 🍦🍦 + 🍦🍦',
      story: '4 children each get 2 ice cream cones.',
      question: 'What is the total number of ice cream cones?'
    },
    {
      repeated: '5 + 5',
      multiplication: '2 × 5',
      result: 10,
      visual: '⭐⭐⭐⭐⭐ + ⭐⭐⭐⭐⭐',
      story: 'You completed 2 tasks and earned 5 stars for each task!',
      question: 'What is the total number of stars you earned?'
    },
    {
      repeated: '3 + 3 + 3 + 3',
      multiplication: '4 × 3',
      result: 12,
      visual: '🎁🎁🎁 + 🎁🎁🎁 + 🎁🎁🎁 + 🎁🎁🎁',
      story: '4 birthday parties each have 3 presents to open.',
      question: 'What is the total number of presents?'
    },
    {
      repeated: '2 + 2 + 2 + 2 + 2',
      multiplication: '5 × 2',
      result: 10,
      visual: '🌟🌟 + 🌟🌟 + 🌟🌟 + 🌟🌟 + 🌟🌟',
      story: '5 teams each scored 2 points in the game.',
      question: 'What is the total number of points scored?'
    },
    {
      repeated: '6 + 6',
      multiplication: '2 × 6',
      result: 12,
      visual: '🍪🍪🍪🍪🍪🍪 + 🍪🍪🍪🍪🍪🍪',
      story: 'You baked 2 batches of cookies with 6 cookies in each batch.',
      question: 'What is the total number of cookies?'
    },
    {
      repeated: '4 + 4 + 4',
      multiplication: '3 × 4',
      result: 12,
      visual: '🎨🎨🎨🎨 + 🎨🎨🎨🎨 + 🎨🎨🎨🎨',
      story: '3 art classes each need 4 paint brushes.',
      question: 'What is the total number of paint brushes needed?'
    },
    {
      repeated: '3 + 3 + 3 + 3 + 3',
      multiplication: '5 × 3',
      result: 15,
      visual: '🌸🌸🌸 + 🌸🌸🌸 + 🌸🌸🌸 + 🌸🌸🌸 + 🌸🌸🌸',
      story: 'You planted 5 flower pots with 3 flowers in each pot.',
      question: 'What is the total number of flowers planted?'
    }
  ];

  const handleAnswerChange = (index: number, type: 'addition' | 'multiplication', value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = {
      ...newAnswers[index],
      [type]: value
    };
    setUserAnswers(newAnswers);
    
    // Clear feedback for this question
    const newFeedback = [...feedback];
    newFeedback[index] = null;
    setFeedback(newFeedback);
  };

  const checkAnswer = (index: number) => {
    const newFeedback = [...feedback];
    const isAdditionCorrect = Number(userAnswers[index].addition) === problems[index].result;
    const isMultiplicationCorrect = Number(userAnswers[index].multiplication) === problems[index].result;
    newFeedback[index] = isAdditionCorrect && isMultiplicationCorrect ? 'correct' : 'incorrect';
    setFeedback(newFeedback);

    // Calculate new score after setting feedback
    const correctCount = newFeedback.filter(f => f === 'correct').length;
    setScore(correctCount);

    // Show celebration if all answers are correct
    if (correctCount === totalQuestions) {
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
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <ScoreDisplay score={score} totalQuestions={totalQuestions} />

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Magic of Multiplication! 🌟
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
              <h2 className="font-bold text-blue-800 mb-2 text-lg">Let's Play! 🎮</h2>
              <p className="text-blue-700">
                Help solve these fun multiplication puzzles! Read each story, look at the pictures, 
                and write your answers in both magic boxes. Check if you got both right! ✨
              </p>
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
                    
                    {/* Visual representation */}
                    <div className="text-3xl mb-4 text-center">
                      {problem.visual}
                    </div>

                    {/* Equations and Inputs */}
                    <div className="flex flex-col items-center gap-6">
                      {/* Repeated Addition */}
                      <div className="flex items-center gap-4 text-xl">
                        <div className="font-medium text-blue-600">
                          {problem.repeated} = 
                        </div>
                        <input
                          type="number"
                          value={userAnswers[index].addition}
                          onChange={(e) => handleAnswerChange(index, 'addition', e.target.value)}
                          className={`w-20 h-12 text-center text-xl border-3 rounded-lg focus:outline-none transition-all duration-300 ${
                            feedback[index] === 'correct' ? 'border-green-400 bg-green-100' :
                            feedback[index] === 'incorrect' ? 'border-red-400 bg-red-100' :
                            'border-blue-300 focus:border-blue-500 hover:border-blue-400'
                          }`}
                          placeholder="?"
                        />
                      </div>

                      {/* Multiplication */}
                      <div className="flex items-center gap-4 text-xl">
                        <div className="font-medium text-blue-600">
                          {problem.multiplication} = 
                        </div>
                        <input
                          type="number"
                          value={userAnswers[index].multiplication}
                          onChange={(e) => handleAnswerChange(index, 'multiplication', e.target.value)}
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
                    🎉 Outstanding Achievement! 🎉
                  </h2>
                  <p className="text-xl text-gray-700">
                    Wow! You got a perfect score! You're a multiplication master! 
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
};

export default MultiplicationWorksheet; 
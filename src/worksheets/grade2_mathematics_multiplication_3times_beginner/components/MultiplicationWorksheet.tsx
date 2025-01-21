import React, { useState, useEffect } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import confetti from 'canvas-confetti';

interface Problem {
  multiplicand: number;
  multiplier: number;
  userAnswer: string;
  isCorrect: boolean | null;
  story: string;
  visual: string;
  isAnswerChecked: boolean;
}

const MultiplicationWorksheet: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [showHint, setShowHint] = useState<number | null>(null);

  useEffect(() => {
    const storyProblems = [
      {
        multiplicand: 1,
        story: "A tricycle has 3 wheels. How many wheels does 1 tricycle have?",
        visual: "🚲"
      },
      {
        multiplicand: 2,
        story: "Each ice cream cone has 3 scoops. How many scoops are on 2 cones?",
        visual: "🍦"
      },
      {
        multiplicand: 3,
        story: "A triangle has 3 sides. How many sides do 3 triangles have?",
        visual: "📐"
      },
      {
        multiplicand: 4,
        story: "Each clover has 3 leaves. How many leaves are on 4 clovers?",
        visual: "🍀"
      },
      {
        multiplicand: 5,
        story: "Each toy car has 3 passengers. How many passengers are in 5 cars?",
        visual: "🚗"
      },
      {
        multiplicand: 6,
        story: "Each spider has 3 pairs of legs. How many legs do 6 spiders have?",
        visual: "🕷️"
      },
      {
        multiplicand: 7,
        story: "Each pizza is cut into 3 slices. How many slices are 7 pizzas?",
        visual: "🍕"
      },
      {
        multiplicand: 8,
        story: "Each flower has 3 petals. How many petals are on 8 flowers?",
        visual: "🌸"
      },
      {
        multiplicand: 9,
        story: "Each package has 3 cookies. How many cookies are in 9 packages?",
        visual: "📦"
      },
      {
        multiplicand: 10,
        story: "Each balloon bundle has 3 balloons. How many balloons are in 10 bundles?",
        visual: "🎈"
      }
    ];

    const initialProblems = storyProblems.map((story, index) => ({
      multiplicand: story.multiplicand,
      multiplier: 3,
      userAnswer: '',
      isCorrect: null,
      story: story.story,
      visual: story.visual,
      isAnswerChecked: false
    }));
    setProblems(initialProblems);
  }, []);

  const handleInputChange = (index: number, value: string) => {
    const newProblems = [...problems];
    newProblems[index].userAnswer = value;
    newProblems[index].isCorrect = null;
    newProblems[index].isAnswerChecked = false;
    setProblems(newProblems);
    setShowCelebration(false);
    setAllCorrect(false);
  };

  const checkSingleAnswer = (index: number) => {
    const newProblems = [...problems];
    const problem = newProblems[index];
    problem.isCorrect = parseInt(problem.userAnswer) === problem.multiplicand * problem.multiplier;
    problem.isAnswerChecked = true;
    setProblems(newProblems);

    const correctCount = newProblems.filter(p => p.isCorrect).length;
    setCurrentScore(correctCount);

    const allAnswered = newProblems.every(p => p.isAnswerChecked);
    const allAnswersCorrect = newProblems.every(p => p.isCorrect);
    
    if (allAnswered && allAnswersCorrect) {
      setShowCelebration(true);
      setAllCorrect(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const checkAllAnswers = () => {
    const newProblems = problems.map(problem => ({
      ...problem,
      isCorrect: parseInt(problem.userAnswer) === problem.multiplicand * problem.multiplier,
      isAnswerChecked: true
    }));
    setProblems(newProblems);

    const correctCount = newProblems.filter(p => p.isCorrect).length;
    setCurrentScore(correctCount);

    const allAnswersCorrect = newProblems.every(problem => problem.isCorrect);
    setAllCorrect(allAnswersCorrect);
    
    if (allAnswersCorrect) {
      setShowCelebration(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const renderVisualRepresentation = (multiplicand: number, visual: string) => {
    return Array.from({ length: multiplicand }, (_, groupIndex) => (
      <div key={groupIndex} className="flex items-center">
        <div className="flex gap-1 animate-fadeIn">
          {Array.from({ length: 3 }, (_, itemIndex) => (
            <span key={itemIndex} className="text-2xl transform hover:scale-110 transition-transform">
              {visual}
            </span>
          ))}
        </div>
        {groupIndex < multiplicand - 1 && (
          <div className="mx-2 text-gray-400 text-2xl">|</div>
        )}
      </div>
    ));
  };

  const toggleHint = (index: number) => {
    setShowHint(showHint === index ? null : index);
  };

  return (
    <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8 bg-white min-h-screen">
      <WorksheetHeader>
        <h1 className="text-2xl font-bold text-white">Fun with the 3 Times Table!</h1>
      </WorksheetHeader>
      
      <div className="md:p-6 space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg md:p-6 p-4">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Let's Practice Multiplication!</h2>
          <p className="text-blue-700 mb-2">Solve these fun story problems using the 3 times table.</p>
          <p className="text-blue-700">Remember: When we multiply by 3, we're making three equal groups!</p>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-medium">Your Progress:</span>
            <span className="text-blue-600 font-bold">{currentScore} / 10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${(currentScore / 10) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-6">
          {problems.map((problem, index) => (
            <TouchContainer key={index}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 md:p-6 p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-4">
                  {/* Story Problem */}
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-lg text-yellow-800">
                      <span className="font-bold">Problem {index + 1}:</span> {problem.story}
                    </p>
                  </div>

                  {/* Visual Representation */}
                  <div className="flex flex-wrap gap-4 justify-center bg-gray-50 rounded-lg p-4">
                    {renderVisualRepresentation(problem.multiplicand, problem.visual)}
                  </div>

                  {/* Calculation Area */}
                  <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                    <div className="flex items-center gap-3 text-lg">
                      <span className="font-medium">{problem.multiplicand}</span>
                      <span>×</span>
                      <span className="font-medium">3</span>
                      <span>=</span>
                      <input
                        type="number"
                        value={problem.userAnswer}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        className={`w-20 p-2 text-center border-2 rounded-md text-lg font-medium transition-colors ${
                          problem.isCorrect === true ? 'bg-green-50 border-green-500' :
                          problem.isCorrect === false ? 'bg-red-50 border-red-500' :
                          'border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                        }`}
                        min="0"
                        max="99"
                      />
                      <button
                        onClick={() => checkSingleAnswer(index)}
                        className="ml-2 px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition-colors"
                        disabled={!problem.userAnswer || problem.isAnswerChecked}
                      >
                        Check
                      </button>
                    </div>

                    {/* Hint Button */}
                    <button
                      onClick={() => toggleHint(index)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                    >
                      <span>Need a hint?</span>
                      <span className="text-lg">💡</span>
                    </button>
                  </div>

                  {/* Success Message for Individual Problem */}
                  {problem.isCorrect === true && problem.isAnswerChecked && (
                    <div className="bg-green-50 rounded-lg p-3 mt-2 animate-fadeIn">
                      <p className="text-green-700 font-medium flex items-center gap-2">
                        <span>✨ Great job! That's correct!</span>
                        {index < problems.length - 1 && (
                          <span className="text-sm">Try the next one!</span>
                        )}
                      </p>
                    </div>
                  )}

                  {/* Hint Panel */}
                  {showHint === index && (
                    <div className="bg-blue-50 rounded-lg p-4 mt-2 animate-fadeIn">
                      <p className="text-blue-700">
                        Try counting by threes {problem.multiplicand} times: {
                          Array.from({ length: problem.multiplicand }, (_, i) => (i + 1) * 3).join(', ')
                        }
                      </p>
                    </div>
                  )}

                  {/* Feedback */}
                  {problem.isCorrect === false && (
                    <div className="text-red-600 text-sm mt-2 animate-fadeIn">
                      Try again! Remember to count all the groups of three.
                    </div>
                  )}
                </div>
              </div>
            </TouchContainer>
          ))}
        </div>

        {/* Check All Answers Button */}
        <button
          onClick={checkAllAnswers}
          className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md"
        >
          Check All Answers
        </button>

        {showCelebration && allCorrect && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-lg p-6 text-center animate-bounceIn">
            <h3 className="text-2xl font-bold text-green-800 mb-2">🎉 Amazing Job! 🎉</h3>
            <p className="text-green-700 text-lg">You've mastered the 3 times table!</p>
            <div className="mt-4 flex justify-center gap-2 text-3xl animate-bounce">
              🌟 🏆 🌟
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiplicationWorksheet; 
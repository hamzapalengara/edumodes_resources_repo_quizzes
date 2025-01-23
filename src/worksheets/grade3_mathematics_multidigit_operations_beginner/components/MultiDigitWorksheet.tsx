import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface Problem {
  id: number;
  num1: number;
  num2: number;
  operation: '+' | '-';
  userAnswer: string;
  isCorrect: boolean | null;
  celebration?: string;
}

const TOTAL_PROBLEMS = 15;

const CELEBRATIONS = [
  "Amazing work! 🌟",
  "Fantastic! 🎉",
  "You're a math star! ⭐",
  "Brilliant! 🏆",
  "Super job! 🚀",
  "Outstanding! 🌈",
  "Math genius! 🧠",
  "Perfect! 💫",
  "Excellent! 🎯",
  "You rock! 🌟"
];

const MultiDigitWorksheet: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const markCorrectRef = useRef<(() => void) | null>(null);

  // Helper function to pad number with spaces for alignment
  const padNumber = (num: number): string => {
    return num.toString().padStart(3, ' ');
  };

  // Generate a new problem
  const generateProblem = useCallback((id: number): Problem => {
    const num1 = Math.floor(Math.random() * 900) + 100;
    const num2 = Math.floor(Math.random() * 900) + 100;
    const operation = (Math.random() < 0.5 ? '+' : '-') as '+' | '-';
    
    // Ensure subtraction doesn't result in negative numbers
    if (operation === '-' && num2 > num1) {
      return generateProblem(id);
    }

    return {
      id,
      num1,
      num2,
      operation,
      userAnswer: '',
      isCorrect: null
    };
  }, []);

  // Initialize problems
  useEffect(() => {
    const initialProblems = Array.from({ length: TOTAL_PROBLEMS }, (_, i) => 
      generateProblem(i + 1)
    );
    setProblems(initialProblems);
  }, [generateProblem]);

  const handleAnswerChange = (problemId: number, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 4);
    setProblems(prev => prev.map(p => 
      p.id === problemId ? { ...p, userAnswer: numericValue, isCorrect: null } : p
    ));
  };

  const checkAnswer = (problem: Problem) => {
    if (!problem.userAnswer) return;

    const expectedAnswer = problem.operation === '+' 
      ? problem.num1 + problem.num2 
      : problem.num1 - problem.num2;
    
    const isAnswerCorrect = parseInt(problem.userAnswer) === expectedAnswer;
    const celebration = isAnswerCorrect ? 
      CELEBRATIONS[Math.floor(Math.random() * CELEBRATIONS.length)] : undefined;

    if (isAnswerCorrect) {
      const newProblems = problems.map(p => 
        p.id === problem.id ? { ...p, isCorrect: true, celebration } : p
      );
      setProblems(newProblems);
      
      // Use WorksheetTracker's markCorrect
      if (markCorrectRef.current) {
        markCorrectRef.current();
      }
    } else {
      setProblems(prev => prev.map(p => 
        p.id === problem.id ? { ...p, isCorrect: false } : p
      ));
    }
  };

  return (
    <WorksheetTracker 
      totalQuestions={TOTAL_PROBLEMS}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Stack & Solve: Multi-Digit Math Magic Summary:', summary);
      }}
    >
      {({ score, maxScore, markCorrect }) => {
        // Store markCorrect function in ref for use in callbacks
        markCorrectRef.current = markCorrect;
        
        return (
          <div className="min-h-screen bg-gray-50">
            <WorksheetHeader />
            
            <div className="py-4 bg-white border-b">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium text-blue-600">
                    Score: {score} / {maxScore} points
                  </div>
                  <div className="text-sm text-gray-600">
                    Problem {problems.filter(p => p.isCorrect === true).length} of {TOTAL_PROBLEMS}
                  </div>
                </div>
              </div>
            </div>

            <TouchContainer>
              <main className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {problems.map((problem) => (
                    <div 
                      key={problem.id}
                      className={`
                        bg-white rounded-lg shadow-md p-4
                        ${problem.isCorrect === true ? 'ring-2 ring-green-500' : 
                          problem.isCorrect === false ? 'ring-2 ring-red-500' : ''}
                      `}
                    >
                      {/* Problem number */}
                      <div className="text-sm text-gray-500 mb-2">
                        Problem {problem.id}
                      </div>

                      {/* Problem in vertical format with aligned digits */}
                      <div className="flex justify-center mb-4">
                        <div className="text-right font-mono text-2xl">
                          <pre className="mb-2">{padNumber(problem.num1)}</pre>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="mr-2">{problem.operation}</span>
                            <pre>{padNumber(problem.num2)}</pre>
                          </div>
                          <div className="border-t-2 border-gray-400 pt-2">
                            <input
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              value={problem.userAnswer}
                              onChange={(e) => handleAnswerChange(problem.id, e.target.value)}
                              className={`
                                w-24 text-center font-mono border-b-2 focus:outline-none
                                ${problem.isCorrect === true ? 'border-green-400 text-green-600' :
                                  problem.isCorrect === false ? 'border-red-400 text-red-600' :
                                  'border-blue-400 focus:border-blue-600'}
                              `}
                              placeholder="?"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Feedback and Check button */}
                      <div className="space-y-2">
                        <AnimatePresence>
                          {problem.isCorrect === true && problem.celebration && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-center text-green-600 font-medium"
                            >
                              {problem.celebration}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button
                          onClick={() => checkAnswer(problem)}
                          disabled={!problem.userAnswer || problem.isCorrect === true}
                          className={`
                            w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors
                            ${problem.isCorrect === true ? 
                              'bg-green-100 text-green-700 cursor-not-allowed' :
                              problem.isCorrect === false ?
                              'bg-red-100 text-red-700 hover:bg-red-200' :
                              'bg-blue-100 text-blue-700 hover:bg-blue-200'}
                          `}
                        >
                          {problem.isCorrect === true ? '✨ Great Job! ✨' :
                           problem.isCorrect === false ? 'Try Again' :
                           'Check Answer'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </TouchContainer>
          </div>
        );
      }}
    </WorksheetTracker>
  );
};

export default MultiDigitWorksheet; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import cherryBlossomImage from '../assets/cherry-blossom.jpg';

interface Problem {
  id: number;
  operation: 'addition' | 'subtraction';
  num1: number;
  num2: number;
  imagePosition: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

const problems: Problem[] = [
  {
    id: 1,
    operation: 'addition',
    num1: 347,
    num2: 285,
    imagePosition: 'top-left'
  },
  {
    id: 2,
    operation: 'subtraction',
    num1: 562,
    num2: 378,
    imagePosition: 'top-center'
  },
  {
    id: 3,
    operation: 'addition',
    num1: 456,
    num2: 367,
    imagePosition: 'top-right'
  },
  {
    id: 4,
    operation: 'subtraction',
    num1: 805,
    num2: 467,
    imagePosition: 'bottom-left'
  },
  {
    id: 5,
    operation: 'addition',
    num1: 628,
    num2: 497,
    imagePosition: 'bottom-center'
  },
  {
    id: 6,
    operation: 'subtraction',
    num1: 943,
    num2: 675,
    imagePosition: 'bottom-right'
  }
];

const TreasureAnswerKey: React.FC = () => {
  const getStepByStepSolution = (problem: Problem) => {
    if (problem.operation === 'addition') {
      const steps = [];
      let carry = 0;
      const num1Str = problem.num1.toString().padStart(3, '0');
      const num2Str = problem.num2.toString().padStart(3, '0');
      const result = problem.num1 + problem.num2;
      
      // Process each digit from right to left
      for (let i = 2; i >= 0; i--) {
        const digit1 = parseInt(num1Str[i]);
        const digit2 = parseInt(num2Str[i]);
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        
        steps.push({
          position: i,
          explanation: `Add ${digit1} + ${digit2}${carry ? ` + ${carry} (carried)` : ''} = ${sum}${carry ? ` (write ${sum % 10}, carry ${carry})` : ''}`
        });
      }
      
      return {
        steps,
        result
      };
    } else {
      const steps = [];
      let borrow = 0;
      const num1Str = problem.num1.toString().padStart(3, '0');
      const num2Str = problem.num2.toString().padStart(3, '0');
      const result = problem.num1 - problem.num2;
      
      // Process each digit from right to left
      for (let i = 2; i >= 0; i--) {
        let digit1 = parseInt(num1Str[i]) - borrow;
        const digit2 = parseInt(num2Str[i]);
        borrow = 0;
        
        if (digit1 < digit2) {
          digit1 += 10;
          borrow = 1;
        }
        
        const diff = digit1 - digit2;
        
        steps.push({
          position: i,
          explanation: borrow 
            ? `${parseInt(num1Str[i])} - 1 (borrowed) = ${digit1}, then ${digit1} - ${digit2} = ${diff}`
            : `${digit1} - ${digit2} = ${diff}`
        });
      }
      
      return {
        steps,
        result
      };
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <WorksheetHeader />
      <TouchContainer>
        <div className="p-4">
          <div className="bg-pink-50 rounded-lg p-4 mb-6">
            <h1 className="text-2xl font-bold text-center text-pink-800 mb-4">
              Cherry Blossom Math Adventure - Answer Key 🌸
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Complete Image */}
            <div className="w-full md:w-1/2 md:sticky md:top-4">
              <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden bg-pink-50 shadow-lg">
                <img 
                  src={cherryBlossomImage}
                  alt="Complete Cherry Blossom Scene"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-2 text-pink-600 font-medium">
                Complete scene revealed after solving all problems
              </p>
            </div>

            {/* Solutions */}
            <div className="w-full md:w-1/2 space-y-6">
              {problems.map((problem) => {
                const solution = getStepByStepSolution(problem);
                
                return (
                  <div key={problem.id} className="bg-white rounded-lg p-6 shadow-lg border-2 border-pink-200">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium text-pink-800">
                          Problem {problem.id} of {problems.length}
                        </span>
                        <span className="text-pink-600 font-medium">
                          Answer: {solution.result}
                        </span>
                      </div>

                      <div className="flex flex-col items-end space-y-2 font-mono text-2xl">
                        <div className="w-full flex justify-end">
                          <span className="mr-4">{problem.operation === 'subtraction' ? '-' : '+'}</span>
                          <span>{problem.num1}</span>
                        </div>
                        <div className="w-full flex justify-end">
                          <span className="mr-4"></span>
                          <span>{problem.num2}</span>
                        </div>
                        <div className="w-full flex justify-end">
                          <span className="mr-4"></span>
                          <div className="border-t-2 border-pink-800 pt-1 min-w-[120px]">
                            <span className="text-green-600">{solution.result}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-pink-50 rounded-lg p-4">
                        <h3 className="font-medium text-pink-800 mb-2">Step by Step:</h3>
                        <ol className="space-y-2 text-pink-700">
                          {solution.steps.map((step, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{step.explanation}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default TreasureAnswerKey; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface Example {
  num1: number;
  num2: number;
  operation: '+' | '-';
  steps: string[];
}

const EXAMPLES: Example[] = [
  {
    num1: 456,
    num2: 378,
    operation: '+',
    steps: [
      "Start with the ones column: 6 + 8 = 14. Write 4, carry 1 to tens.",
      "Add tens (with carry): 1 + 5 + 7 = 13. Write 3, carry 1 to hundreds.",
      "Add hundreds (with carry): 1 + 4 + 3 = 8.",
      "Final answer: 834"
    ]
  },
  {
    num1: 725,
    num2: 346,
    operation: '+',
    steps: [
      "Start with ones: 5 + 6 = 11. Write 1, carry 1 to tens.",
      "Add tens (with carry): 1 + 2 + 4 = 7.",
      "Add hundreds: 7 + 3 = 10.",
      "Final answer: 1,071"
    ]
  },
  {
    num1: 832,
    num2: 547,
    operation: '-',
    steps: [
      "Cannot subtract 7 from 2 in ones. Borrow 1 from tens (3).",
      "Now it's 12 - 7 = 5 in ones.",
      "In tens: 2 (after borrowing) - 4 = cannot do it, borrow 1 from hundreds (8).",
      "Now it's 12 - 4 = 8 in tens.",
      "In hundreds: 7 (after borrowing) - 5 = 2.",
      "Final answer: 285"
    ]
  }
];

const padNumber = (num: number): string => {
  return num.toString().padStart(3, ' ');
};

const MultiDigitAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <main className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Multi-Digit Operations: Answer Key and Solutions
            </h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Key Concepts
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-blue-600 mb-2">Addition Rules:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Start from the rightmost column (ones)</li>
                    <li>Add digits in each column</li>
                    <li>If sum is 10 or greater, carry the tens digit to next column</li>
                    <li>Continue left through each column</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-blue-600 mb-2">Subtraction Rules:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Start from the rightmost column (ones)</li>
                    <li>If top number is smaller, borrow 1 from the next column</li>
                    <li>When borrowing, the digit decreases by 1, and 10 is added to current column</li>
                    <li>Continue left through each column</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {EXAMPLES.map((example, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-4">
                    Example {index + 1}: {example.operation === '+' ? 'Addition' : 'Subtraction'}
                  </h3>

                  <div className="flex gap-8">
                    {/* Problem display */}
                    <div className="flex-shrink-0">
                      <div className="text-right font-mono text-2xl">
                        <pre className="mb-2">{padNumber(example.num1)}</pre>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="mr-2">{example.operation}</span>
                          <pre>{padNumber(example.num2)}</pre>
                        </div>
                        <div className="border-t-2 border-gray-400 pt-2">
                          <pre className="text-green-600">
                            {padNumber(example.operation === '+' 
                              ? example.num1 + example.num2 
                              : example.num1 - example.num2)}
                          </pre>
                        </div>
                      </div>
                    </div>

                    {/* Steps explanation */}
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-700 mb-2">Solution Steps:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-600">
                        {example.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h2 className="text-lg font-semibold text-blue-800 mb-3">
                Tips for Success
              </h2>
              <ul className="list-disc list-inside space-y-2 text-blue-700">
                <li>Always line up digits by place value (ones under ones, tens under tens)</li>
                <li>Write your carrying numbers clearly above the next column</li>
                <li>Double-check your borrowing by ensuring the number decreased by 1</li>
                <li>Verify your answer by estimating if it seems reasonable</li>
              </ul>
            </div>
          </div>
        </main>
      </TouchContainer>
    </div>
  );
};

export default MultiDigitAnswerKey; 
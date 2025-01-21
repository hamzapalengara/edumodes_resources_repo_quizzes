import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const MultiplicationArraysAnswerKey: React.FC = () => {
  const answers = [
    {
      rows: 3,
      cols: 4,
      equations: ['3 × 4', '4 × 3'],
      result: 12,
      story: 'A garden has 3 rows of flowers with 4 flowers in each row.',
      question: 'How many flowers are there in total?',
      emoji: '🌸',
      explanation: 'Looking at the array, we can write either:\n• 3 × 4 (3 rows with 4 flowers in each row)\n• 4 × 3 (4 columns with 3 flowers in each column)\nBoth equations give us 12 flowers in total.'
    },
    {
      rows: 2,
      cols: 6,
      equations: ['2 × 6', '6 × 2'],
      result: 12,
      story: 'A classroom has 2 rows of desks with 6 desks in each row.',
      question: 'How many desks are there in total?',
      emoji: '🪑',
      explanation: 'The array shows:\n• 2 × 6 (2 rows with 6 desks in each row)\n• 6 × 2 (6 columns with 2 desks in each column)\nBoth ways give us 12 desks total.'
    },
    {
      rows: 4,
      cols: 3,
      equations: ['4 × 3', '3 × 4'],
      result: 12,
      story: 'A fruit shop displays oranges in 4 rows with 3 oranges in each row.',
      question: 'How many oranges are on display?',
      emoji: '🍊',
      explanation: 'We can write:\n• 4 × 3 (4 rows with 3 oranges in each row)\n• 3 × 4 (3 columns with 4 oranges in each column)\nEither way shows 12 oranges total.'
    },
    {
      rows: 5,
      cols: 2,
      equations: ['5 × 2', '2 × 5'],
      result: 10,
      story: 'Five children each have 2 balloons.',
      question: 'How many balloons are there in total?',
      emoji: '🎈',
      explanation: 'The array can be written as:\n• 5 × 2 (5 rows with 2 balloons in each row)\n• 2 × 5 (2 columns with 5 balloons in each column)\nBoth equal 10 balloons.'
    },
    {
      rows: 3,
      cols: 3,
      equations: ['3 × 3'],
      result: 9,
      story: 'A bakery arranges cupcakes in 3 rows with 3 cupcakes in each row.',
      question: 'How many cupcakes are there in total?',
      emoji: '🧁',
      explanation: 'This is a square array, so both ways are the same:\n• 3 × 3 (3 rows with 3 cupcakes in each row)\n• 3 × 3 (3 columns with 3 cupcakes in each column)\nGiving us 9 cupcakes total.'
    },
    {
      rows: 2,
      cols: 5,
      equations: ['2 × 5', '5 × 2'],
      result: 10,
      story: 'Two teams each scored 5 goals in a tournament.',
      question: 'How many goals were scored in total?',
      emoji: '⚽',
      explanation: 'The array shows:\n• 2 × 5 (2 rows with 5 goals in each row)\n• 5 × 2 (5 columns with 2 goals in each column)\nBoth equal 10 goals total.'
    },
    {
      rows: 4,
      cols: 2,
      equations: ['4 × 2', '2 × 4'],
      result: 8,
      story: 'Four friends each brought 2 books to share.',
      question: 'How many books did they bring in total?',
      emoji: '📚',
      explanation: 'We can write:\n• 4 × 2 (4 rows with 2 books in each row)\n• 2 × 4 (2 columns with 4 books in each column)\nBoth show 8 books total.'
    },
    {
      rows: 3,
      cols: 5,
      equations: ['3 × 5', '5 × 3'],
      result: 15,
      story: 'Three trees each have 5 birds sitting on their branches.',
      question: 'How many birds are there in total?',
      emoji: '🐦',
      explanation: 'Looking at the array:\n• 3 × 5 (3 rows with 5 birds in each row)\n• 5 × 3 (5 columns with 3 birds in each column)\nBoth equations equal 15 birds.'
    },
    {
      rows: 6,
      cols: 2,
      equations: ['6 × 2', '2 × 6'],
      result: 12,
      story: 'Six children each have 2 toy cars.',
      question: 'How many toy cars are there in total?',
      emoji: '🚗',
      explanation: 'The array can be written as:\n• 6 × 2 (6 rows with 2 cars in each row)\n• 2 × 6 (2 columns with 6 cars in each column)\nBoth show 12 cars total.'
    },
    {
      rows: 2,
      cols: 4,
      equations: ['2 × 4', '4 × 2'],
      result: 8,
      story: 'Two shelves each have 4 plants.',
      question: 'How many plants are there in total?',
      emoji: '🪴',
      explanation: 'We can write:\n• 2 × 4 (2 rows with 4 plants in each row)\n• 4 × 2 (4 columns with 2 plants in each column)\nBoth equal 8 plants total.'
    }
  ];

  const renderArray = (rows: number, cols: number, emoji: string) => {
    return (
      <div className="inline-block bg-white p-4 rounded-lg border-2 border-purple-200">
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

  return (
    <div className="min-h-screen bg-white w-full">
      <WorksheetHeader />
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">
              Array Multiplication Solutions! ✨
            </h1>

            {/* Key Concept */}
            <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200 mb-8">
              <h2 className="text-xl font-bold text-purple-800 mb-4">
                🔑 Key Concept: Reading Arrays Two Ways
              </h2>
              <p className="text-purple-700 mb-4">
                Most arrays can be read in two ways, giving us two correct multiplication equations:
              </p>
              <div className="flex justify-center mb-4">
                {renderArray(2, 3, '🌟')}
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                <ul className="space-y-2 text-purple-600">
                  <li>• Reading by rows: 2 × 3 (2 rows with 3 stars in each row)</li>
                  <li>• Reading by columns: 3 × 2 (3 columns with 2 stars in each column)</li>
                  <li>• Both equations equal 6 stars total!</li>
                </ul>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-8">
              {answers.map((answer, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                  <div className="mb-4">
                    <span className="font-bold text-purple-700 text-lg">Puzzle {index + 1}:</span>
                  </div>
                  
                  {/* Story and Question */}
                  <div className="text-lg text-gray-700 mb-2">
                    {answer.story}
                    <br />
                    <span className="text-purple-600 font-bold">{answer.question}</span>
                  </div>

                  {/* Array Visual */}
                  <div className="flex justify-center mb-4">
                    {renderArray(answer.rows, answer.cols, answer.emoji)}
                  </div>

                  {/* Solution */}
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <div className="flex flex-col gap-4">
                      {/* Equations */}
                      <div className="text-xl text-purple-600 font-medium">
                        Multiplication Equations:
                        <div className="flex gap-4 justify-center mt-2">
                          {answer.equations.map((eq, i) => (
                            <span key={i} className="bg-purple-50 px-4 py-2 rounded-lg">
                              {eq}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Total */}
                      <div className="text-xl text-purple-600 font-medium">
                        Total = {answer.result}
                      </div>
                    </div>
                    <div className="text-gray-600 bg-purple-50 p-3 rounded mt-4">
                      <span className="font-medium text-purple-700">How did we solve it? 🤔</span>
                      <br />
                      {answer.explanation.split('\n').map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Tips */}
            <div className="mt-8 bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <h2 className="text-xl font-bold text-green-700 mb-4">
                🌟 Remember These Points 🌟
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">1️⃣</span>
                  Most arrays can be read in two ways - by rows or by columns
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2️⃣</span>
                  Both ways of writing the equation will give you the same total
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3️⃣</span>
                  Square arrays (same number of rows and columns) give you the same equation both ways
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4️⃣</span>
                  Always check your total by counting all objects one by one
                </li>
              </ul>
            </div>

            {/* Encouragement */}
            <div className="mt-6 text-center text-lg text-purple-600 font-medium">
              Keep practicing! You're becoming an array multiplication expert! 🌟
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default MultiplicationArraysAnswerKey; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const MultiplicationArraysTips: React.FC = () => {
  const examples = [
    {
      title: "Reading Arrays Two Ways",
      description: "Most arrays can be read in two different ways, giving us two correct equations",
      visual: {
        rows: 2,
        cols: 3,
        emoji: "🌟"
      },
      explanation: [
        "By rows: 2 × 3 (2 rows with 3 stars in each row)",
        "By columns: 3 × 2 (3 columns with 2 stars in each column)",
        "Both equations equal 6 stars total!"
      ]
    },
    {
      title: "Square Arrays",
      description: "When rows and columns are equal, both ways give the same equation",
      visual: {
        rows: 3,
        cols: 3,
        emoji: "🎈"
      },
      explanation: [
        "By rows: 3 × 3 (3 rows with 3 balloons in each row)",
        "By columns: 3 × 3 (3 columns with 3 balloons in each column)",
        "Same equation both ways: 3 × 3 = 9 balloons"
      ]
    },
    {
      title: "Larger Arrays",
      description: "The same principles work for bigger arrays too",
      visual: {
        rows: 4,
        cols: 2,
        emoji: "🍎"
      },
      explanation: [
        "By rows: 4 × 2 (4 rows with 2 apples in each row)",
        "By columns: 2 × 4 (2 columns with 4 apples in each column)",
        "Both equal 8 apples total"
      ]
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

  return (
    <div className="min-h-screen bg-white w-full">
      <WorksheetHeader />
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Tips for Writing Array Equations! 🎯
            </h1>

            {/* Main Tips */}
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 mb-8">
              <h2 className="text-xl font-bold text-blue-800 mb-4">
                🌟 Steps to Write Array Equations
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="mr-3 text-2xl">1️⃣</span>
                  <div>
                    <h3 className="font-bold text-blue-700">Look at the Array Pattern</h3>
                    <p className="text-blue-600">
                      Notice how the objects are arranged in equal rows and columns
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="mr-3 text-2xl">2️⃣</span>
                  <div>
                    <h3 className="font-bold text-blue-700">Count Rows and Items</h3>
                    <p className="text-blue-600">
                      Count how many rows you have and how many items are in each row
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="mr-3 text-2xl">3️⃣</span>
                  <div>
                    <h3 className="font-bold text-blue-700">Write First Equation</h3>
                    <p className="text-blue-600">
                      Write: (number of rows) × (items in each row)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="mr-3 text-2xl">4️⃣</span>
                  <div>
                    <h3 className="font-bold text-blue-700">Try Second Way</h3>
                    <p className="text-blue-600">
                      Turn the array sideways in your mind and write: (number of columns) × (items in each column)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples */}
            <div className="space-y-8">
              <h2 className="text-xl font-bold text-blue-800">
                📝 See It in Action
              </h2>

              {examples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border-2 border-blue-200">
                  <h3 className="text-lg font-bold text-blue-700 mb-3">
                    {example.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4">
                    {example.description}
                  </p>

                  <div className="flex justify-center mb-4">
                    {renderArray(example.visual.rows, example.visual.cols, example.visual.emoji)}
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                    <ul className="space-y-2 text-blue-600">
                      {example.explanation.map((line, i) => (
                        <li key={i}>• {line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Reference */}
            <div className="mt-8 bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <h2 className="text-xl font-bold text-green-700 mb-4">
                💡 Remember These Tips
              </h2>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-center">
                  <span className="mr-2">✨</span>
                  Most arrays can be read in two different ways
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📊</span>
                  Both ways of writing the equation give the same answer
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🎯</span>
                  Square arrays (same rows and columns) give the same equation both ways
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔄</span>
                  Practice looking at arrays from different angles
                </li>
              </ul>
            </div>

            {/* Common Mistakes to Avoid */}
            <div className="mt-8 bg-red-50 rounded-lg p-6 border-2 border-red-200">
              <h2 className="text-xl font-bold text-red-700 mb-4">
                ⚠️ Watch Out For These
              </h2>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-center">
                  <span className="mr-2">❌</span>
                  Don't forget to check if your equation matches the array
                </li>
                <li className="flex items-center">
                  <span className="mr-2">❌</span>
                  Don't mix up rows and columns when writing equations
                </li>
                <li className="flex items-center">
                  <span className="mr-2">❌</span>
                  Don't assume there's only one way to write the equation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">❌</span>
                  Don't forget to verify your answer by counting all objects
                </li>
              </ul>
            </div>

            {/* Encouragement */}
            <div className="mt-6 text-center text-lg text-blue-600 font-medium">
              You're doing great! Keep practicing with arrays! 🌟
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default MultiplicationArraysTips; 
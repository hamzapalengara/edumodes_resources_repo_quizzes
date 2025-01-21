import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface CountingExample {
  id: number;
  type: string;
  emoji: string;
  count: number;
  steps: string[];
}

const CountingAnswerKey: React.FC = () => {
  const [activeExample, setActiveExample] = useState<number | null>(null);

  const examples: CountingExample[] = [
    {
      id: 1,
      type: 'apple',
      emoji: '🍎',
      count: 1,
      steps: ["Point to the apple and say 'one'"]
    },
    {
      id: 2,
      type: 'stars',
      emoji: '⭐',
      count: 2,
      steps: [
        "Point to the first star and say 'one'",
        "Move to the second star and say 'two'"
      ]
    },
    {
      id: 3,
      type: 'hearts',
      emoji: '❤️',
      count: 3,
      steps: [
        "Start with the first heart and say 'one'",
        "Count the second heart saying 'two'",
        "Point to the last heart and say 'three'"
      ]
    },
    {
      id: 4,
      type: 'flowers',
      emoji: '🌸',
      count: 4,
      steps: [
        "Point to the first flower and say 'one'",
        "Move to the second flower saying 'two'",
        "Count the third flower with 'three'",
        "End with the fourth flower saying 'four'"
      ]
    },
    {
      id: 5,
      type: 'balloons',
      emoji: '🎈',
      count: 5,
      steps: [
        "Start with the first balloon saying 'one'",
        "Count the second balloon with 'two'",
        "Move to the third balloon saying 'three'",
        "Point to the fourth balloon and say 'four'",
        "End with the fifth balloon saying 'five'"
      ]
    },
    {
      id: 6,
      type: 'butterflies',
      emoji: '🦋',
      count: 6,
      steps: [
        "Count the first butterfly with 'one'",
        "Move to the second saying 'two'",
        "Point to the third and say 'three'",
        "Count the fourth with 'four'",
        "Touch the fifth saying 'five'",
        "End with the sixth saying 'six'"
      ]
    },
    {
      id: 7,
      type: 'rainbows',
      emoji: '🌈',
      count: 7,
      steps: [
        "Start with 'one' on the first rainbow",
        "Count 'two' on the second",
        "Say 'three' for the third",
        "Move to the fourth saying 'four'",
        "Count the fifth with 'five'",
        "Point to the sixth saying 'six'",
        "End with 'seven' on the last rainbow"
      ]
    },
    {
      id: 8,
      type: 'stars',
      emoji: '🌟',
      count: 8,
      steps: [
        "Begin with 'one' on the first star",
        "Count 'two' on the second",
        "Say 'three' for the third",
        "Move to the fourth saying 'four'",
        "Count the fifth with 'five'",
        "Point to the sixth saying 'six'",
        "Touch the seventh saying 'seven'",
        "End with 'eight' on the last star"
      ]
    },
    {
      id: 9,
      type: 'moons',
      emoji: '🌙',
      count: 9,
      steps: [
        "Start counting 'one' on the first moon",
        "Continue with 'two' on the second",
        "Say 'three' for the third",
        "Count 'four' on the fourth",
        "Move to the fifth saying 'five'",
        "Point to the sixth with 'six'",
        "Count the seventh saying 'seven'",
        "Touch the eighth saying 'eight'",
        "Finish with 'nine' on the last moon"
      ]
    },
    {
      id: 10,
      type: 'suns',
      emoji: '☀️',
      count: 10,
      steps: [
        "Begin with 'one' on the first sun",
        "Count 'two' on the second",
        "Say 'three' for the third",
        "Move to the fourth saying 'four'",
        "Count the fifth with 'five'",
        "Point to the sixth saying 'six'",
        "Touch the seventh saying 'seven'",
        "Count the eighth with 'eight'",
        "Say 'nine' for the ninth",
        "Finish with 'ten' on the last sun"
      ]
    }
  ];

  const renderCountingObjects = (example: CountingExample) => {
    return Array.from({ length: example.count }, (_, index) => (
      <div
        key={index}
        className={`text-4xl transform transition-all duration-300 ${
          activeExample === example.id - 1 
            ? 'scale-110 animate-bounce' 
            : 'scale-100'
        }`}
      >
        {example.emoji}
      </div>
    ));
  };

  return (
    <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8 bg-white min-h-screen">
      <WorksheetHeader>
        <h1 className="text-2xl font-bold text-white">Counting Guide</h1>
      </WorksheetHeader>

      <div className="md:p-6 space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg md:p-6 p-4">
          <h2 className="text-xl font-bold text-blue-800 mb-4">How to Count Objects</h2>
          <p className="text-blue-700">
            Click on each example to see how to count step by step!
          </p>
        </div>

        {/* Counting Examples */}
        <div className="space-y-4">
          {examples.map((example, index) => (
            <TouchContainer key={index}>
              <div 
                className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 md:p-6 p-4 ${
                  activeExample === index 
                    ? 'border-purple-400 shadow-lg' 
                    : 'border-gray-200 hover:border-purple-200'
                }`}
                onClick={() => setActiveExample(activeExample === index ? null : index)}
              >
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-purple-800">
                    Counting {example.count} {example.type}
                  </h3>

                  {/* Objects Display */}
                  <div className="flex flex-wrap gap-4 justify-center items-center bg-gray-50 rounded-lg p-4">
                    {renderCountingObjects(example)}
                  </div>

                  {/* Steps */}
                  {activeExample === index && (
                    <div className="space-y-3 animate-fadeIn">
                      <h4 className="font-medium text-purple-700">Follow these steps:</h4>
                      <div className="bg-purple-50 rounded-lg p-4">
                        {example.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-2 mb-2">
                            <span className="text-purple-600 font-bold">{stepIndex + 1}.</span>
                            <p className="text-purple-700">{step}</p>
                          </div>
                        ))}
                      </div>
                      <div className="text-center text-purple-600 font-medium">
                        Total count: {example.count}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TouchContainer>
          ))}
        </div>

        {/* Tips Box */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg md:p-6 p-4">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Remember:</h3>
          <ul className="space-y-3 text-yellow-700">
            <li className="flex items-center gap-2">
              <span className="text-xl">👆</span>
              Point to each object as you count
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">🗣️</span>
              Say each number clearly
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">➡️</span>
              Move from left to right
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">✨</span>
              Count each object only once
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountingAnswerKey; 
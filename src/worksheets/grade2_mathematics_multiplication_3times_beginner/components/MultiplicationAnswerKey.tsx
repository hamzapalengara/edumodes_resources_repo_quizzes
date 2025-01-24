import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface Problem {
  multiplicand: number;
  multiplier: number;
  answer: number;
  story: string;
  visual: string;
  explanation: string;
}

const MultiplicationAnswerKey: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  const problems: Problem[] = [
    {
      multiplicand: 1,
      multiplier: 3,
      answer: 3,
      story: "A tricycle has 3 wheels. How many wheels does 1 tricycle have?",
      visual: "🚲",
      explanation: "1 group of 3 wheels = 3 wheels total"
    },
    {
      multiplicand: 2,
      multiplier: 3,
      answer: 6,
      story: "Each ice cream cone has 3 scoops. How many scoops are on 2 cones?",
      visual: "🍦",
      explanation: "2 groups of 3 scoops = 6 scoops total"
    },
    {
      multiplicand: 3,
      multiplier: 3,
      answer: 9,
      story: "A triangle has 3 sides. How many sides do 3 triangles have?",
      visual: "📐",
      explanation: "3 groups of 3 sides = 9 sides total"
    },
    {
      multiplicand: 4,
      multiplier: 3,
      answer: 12,
      story: "Each clover has 3 leaves. How many leaves are on 4 clovers?",
      visual: "🍀",
      explanation: "4 groups of 3 leaves = 12 leaves total"
    },
    {
      multiplicand: 5,
      multiplier: 3,
      answer: 15,
      story: "Each toy car has 3 passengers. How many passengers are in 5 cars?",
      visual: "🚗",
      explanation: "5 groups of 3 passengers = 15 passengers total"
    },
    {
      multiplicand: 6,
      multiplier: 3,
      answer: 18,
      story: "Each spider has 3 pairs of legs. How many legs do 6 spiders have?",
      visual: "🕷️",
      explanation: "6 groups of 3 pairs = 18 legs total"
    },
    {
      multiplicand: 7,
      multiplier: 3,
      answer: 21,
      story: "Each pizza is cut into 3 slices. How many slices are 7 pizzas?",
      visual: "🍕",
      explanation: "7 groups of 3 slices = 21 slices total"
    },
    {
      multiplicand: 8,
      multiplier: 3,
      answer: 24,
      story: "Each flower has 3 petals. How many petals are on 8 flowers?",
      visual: "🌸",
      explanation: "8 groups of 3 petals = 24 petals total"
    },
    {
      multiplicand: 9,
      multiplier: 3,
      answer: 27,
      story: "Each package has 3 cookies. How many cookies are in 9 packages?",
      visual: "📦",
      explanation: "9 groups of 3 cookies = 27 cookies total"
    },
    {
      multiplicand: 10,
      multiplier: 3,
      answer: 30,
      story: "Each balloon bundle has 3 balloons. How many balloons are in 10 bundles?",
      visual: "🎈",
      explanation: "10 groups of 3 balloons = 30 balloons total"
    }
  ];

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

  return (
    <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8 bg-white min-h-screen">
      <WorksheetHeader>
        <h1 className="text-2xl font-bold text-white">3 Times Table - Answer Key</h1>
      </WorksheetHeader>
      
      <div className="md:p-6 space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg md:p-6 p-4">
          <h2 className="text-xl font-bold text-green-800 mb-4">Answer Key</h2>
          <p className="text-green-700">Here are the correct answers for the 3 times table worksheet. Click on any problem to see the explanation!</p>
        </div>

        <div className="space-y-4">
          {problems.map((problem, index) => (
            <TouchContainer key={index}>
              <div 
                className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 md:p-6 p-4 cursor-pointer ${
                  selectedProblem === index 
                    ? 'border-blue-400 shadow-lg' 
                    : 'border-gray-200 hover:border-blue-200'
                }`}
                onClick={() => setSelectedProblem(selectedProblem === index ? null : index)}
              >
                <div className="flex flex-col gap-4">
                  {/* Story and Answer */}
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <p className="text-lg text-gray-700">
                      <span className="font-bold text-blue-800">Problem {index + 1}:</span> {problem.story}
                    </p>
                    <div className="flex items-center gap-3 text-lg font-bold text-green-600">
                      {problem.multiplicand} × 3 = {problem.answer}
                    </div>
                  </div>

                  {/* Visual Groups */}
                  <div className="flex flex-wrap gap-4 justify-center bg-gray-50 rounded-lg p-4">
                    {renderVisualRepresentation(problem.multiplicand, problem.visual)}
                  </div>

                  {/* Explanation (shown when selected) */}
                  {selectedProblem === index && (
                    <div className="bg-blue-50 rounded-lg p-4 animate-fadeIn">
                      <p className="text-blue-700 font-medium">
                        <span className="text-blue-800">💡 Explanation:</span> {problem.explanation}
                      </p>
                      <div className="mt-2 text-blue-600">
                        Skip counting: {Array.from({ length: problem.multiplicand }, (_, i) => (i + 1) * 3).join(', ')}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TouchContainer>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg md:p-6 p-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Quick Tips for the 3 Times Table:</h3>
          <ul className="list-disc list-inside space-y-3 text-blue-700">
            <li>Each answer in the 3 times table is the same as adding three equal groups</li>
            <li>The answers increase by 3 each time (3, 6, 9, 12, ...)</li>
            <li>Look at the visual groups to help understand multiplication as repeated addition</li>
            <li>Practice skip counting by 3s to make multiplication easier</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationAnswerKey; 
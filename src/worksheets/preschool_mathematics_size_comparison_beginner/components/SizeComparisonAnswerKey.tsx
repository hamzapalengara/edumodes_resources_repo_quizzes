import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const SizeComparisonAnswerKey: React.FC = () => {
  const answers = [
    {
      comparison: "Elephant 🐘 vs Mouse 🐭",
      answer: "The Elephant is BIGGER",
      explanation: "An elephant is much bigger than a mouse. The elephant is one of the biggest land animals!"
    },
    {
      comparison: "Tall Tree 🌳 vs Small Plant 🌱",
      answer: "The Tree is TALLER",
      explanation: "A full-grown tree is much taller than a small plant. Trees can grow very tall!"
    },
    {
      comparison: "Apple 🍎 vs Blueberry 🫐",
      answer: "The Blueberry is SMALLER",
      explanation: "A blueberry is tiny compared to an apple. You can hold many blueberries in your hand!"
    },
    {
      comparison: "House 🏠 vs Tall Building 🏢",
      answer: "The House is SHORTER",
      explanation: "A regular house is shorter than a tall office building. Tall buildings have many floors!"
    },
    {
      comparison: "Soccer Ball ⚽ vs Basketball 🏀",
      answer: "The Soccer Ball is BIGGER",
      explanation: "A soccer ball is slightly bigger than a basketball."
    },
    {
      comparison: "Tulip 🌷 vs Sunflower 🌻",
      answer: "The Sunflower is TALLER",
      explanation: "Sunflowers can grow very tall, much taller than tulips!"
    },
    {
      comparison: "Dog 🐕 vs Hamster 🐹",
      answer: "The Hamster is SMALLER",
      explanation: "A hamster is a small pet, much smaller than most dogs."
    },
    {
      comparison: "Giraffe 🦒 vs Duck 🦆",
      answer: "The Duck is SHORTER",
      explanation: "A duck is much shorter than a giraffe. Giraffes are one of the tallest animals!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-4">
              Size Comparison Answer Key
            </h1>
            <p className="text-center text-purple-600">
              Here are the correct answers with explanations for each comparison!
            </p>
          </div>

          {/* Answer List */}
          <div className="space-y-4">
            {answers.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-400"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Question Number */}
                  <div className="text-lg font-bold text-purple-700 mb-2">
                    Question {index + 1}
                  </div>
                  
                  {/* Comparison */}
                  <div className="text-xl mb-3">
                    {item.comparison}
                  </div>
                </div>

                {/* Answer */}
                <div className="bg-purple-50 rounded-lg p-4 mb-3">
                  <div className="font-bold text-purple-800">
                    Answer: {item.answer}
                  </div>
                </div>

                {/* Explanation */}
                <div className="text-purple-600">
                  <span className="font-medium">Explanation:</span> {item.explanation}
                </div>
              </div>
            ))}
          </div>

          {/* Teaching Tips */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <h2 className="text-xl font-bold text-purple-700 mb-4">
              Teaching Tips 👩‍🏫
            </h2>
            <ul className="space-y-3 text-purple-600">
              <li>• Use real objects when possible to demonstrate size differences</li>
              <li>• Encourage children to use comparison words in daily activities</li>
              <li>• Make it fun by turning comparisons into a game</li>
              <li>• Practice with different types of comparisons (height, width, length)</li>
              <li>• Connect size comparisons to everyday experiences</li>
            </ul>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default SizeComparisonAnswerKey; 

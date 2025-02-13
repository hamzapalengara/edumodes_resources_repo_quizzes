import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationTable5Tips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        {/* Title */}
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-teal-700 text-center">
            Tips for Learning the Multiplication Table of 5
          </h1>
        </div>

        {/* Tips Sections */}
        <div className="space-y-6">
          {/* Visual Patterns */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-teal-700 mb-3">
              Visual Patterns 👀
            </h2>
            <ul className="space-y-2 text-teal-600">
              <li>• Look at your hand - it has 5 fingers! Use your fingers to count in groups of 5</li>
              <li>• Notice that all answers end in either 5 or 0</li>
              <li>• When multiplying by odd numbers (1,3,5,7,9), the answer ends in 5</li>
              <li>• When multiplying by even numbers (2,4,6,8,10), the answer ends in 0</li>
              <li>• Use stars (⭐) to visualize groups of 5</li>
            </ul>
          </div>

          {/* Skip Counting */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-teal-700 mb-3">
              Skip Counting 🦘
            </h2>
            <ul className="space-y-2 text-teal-600">
              <li>• Practice counting by 5s: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50</li>
              <li>• Each jump adds 5 to the previous number</li>
              <li>• Use a number line to visualize the jumps of 5</li>
              <li>• Count nickels (5¢) to practice counting by 5s</li>
            </ul>
          </div>

          {/* Memory Tricks */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-teal-700 mb-3">
              Memory Tricks 🧠
            </h2>
            <ul className="space-y-2 text-teal-600">
              <li>• Think of a clock - counting by 5s helps you tell time!</li>
              <li>• Remember: 5 × 2 = 10 (two hands)</li>
              <li>• 5 × 5 = 25 (like a quarter, 25¢)</li>
              <li>• 5 × 10 = 50 (like half a dollar)</li>
              <li>• Look for patterns: 5, 10, 15, 20 (count the stars ⭐)</li>
            </ul>
          </div>

          {/* Practice Strategies */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-teal-700 mb-3">
              Practice Strategies 📝
            </h2>
            <ul className="space-y-2 text-teal-600">
              <li>• Start with the easier ones (5×1, 5×2, 5×5, 5×10)</li>
              <li>• Use real objects to count in groups of 5</li>
              <li>• Draw stars or tally marks in groups of 5</li>
              <li>• Practice saying the facts out loud</li>
              <li>• Make flashcards with visual aids</li>
            </ul>
          </div>

          {/* Additional Help */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-teal-700 mb-3">
              Need More Help? 🤔
            </h2>
            <ul className="space-y-2 text-teal-600">
              <li>• Use the visual aids in the worksheet</li>
              <li>• Try the listen mode to hear the multiplication facts</li>
              <li>• Practice with a friend or family member</li>
              <li>• Draw your own groups of 5 stars</li>
              <li>• Remember to take breaks and come back fresh!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable5Tips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationTable9Tips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 border-2 border-purple-200">
          <h1 className="text-2xl font-bold text-purple-700 text-center">
            🎪 Tips for Learning the Multiplication Table of 9 🎪
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visual Patterns */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-purple-200 hover:border-purple-300 transition-colors">
            <h2 className="text-xl font-bold text-purple-700 mb-3">
              Visual Patterns 🎈
            </h2>
            <ul className="space-y-2 text-purple-600">
              <li>• Think of 9 as a group of circus balloons</li>
              <li>• Count the balloons in each group to find your answer</li>
              <li>• Notice that all answers follow a special pattern</li>
              <li>• When multiplying by 10, just add a zero</li>
              <li>• Look for patterns in the answers: 9, 18, 27, 36, 45...</li>
            </ul>
          </div>

          {/* Skip Counting */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-purple-200 hover:border-purple-300 transition-colors">
            <h2 className="text-xl font-bold text-purple-700 mb-3">
              Skip Counting 🎭
            </h2>
            <ul className="space-y-2 text-purple-600">
              <li>• Practice counting by 9s: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90</li>
              <li>• Each jump adds 9 to the previous number</li>
              <li>• Use a number line to visualize the jumps of 9</li>
              <li>• Notice how the ones digit follows a pattern: 9, 8, 7, 6, 5, 4, 3, 2, 1, 0</li>
            </ul>
          </div>

          {/* Memory Tricks */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-purple-200 hover:border-purple-300 transition-colors">
            <h2 className="text-xl font-bold text-purple-700 mb-3">
              Memory Tricks 🎩
            </h2>
            <ul className="space-y-2 text-purple-600">
              <li>• 9 × 2 = 18 (like two groups of circus balloons)</li>
              <li>• 9 × 5 = 45 (half of 90)</li>
              <li>• 9 × 10 = 90 (add a zero to 9)</li>
              <li>• For any number × 9, subtract 1 from the number and put that as the first digit, then use a digit that adds up to 9 for the second digit</li>
              <li>• Remember: 9 × 9 = 81 (it's special because both numbers are 9!)</li>
            </ul>
          </div>

          {/* Practice Strategies */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-purple-200 hover:border-purple-300 transition-colors">
            <h2 className="text-xl font-bold text-purple-700 mb-3">
              Practice Strategies 🎪
            </h2>
            <ul className="space-y-2 text-purple-600">
              <li>• Start with the easier ones (9×1, 9×2, 9×5, 9×10)</li>
              <li>• Use real objects to count in groups of 9</li>
              <li>• Draw balloons or circles in groups of 9</li>
              <li>• Practice saying the facts out loud</li>
              <li>• Make flashcards with visual aids</li>
            </ul>
          </div>

          {/* Additional Help */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-purple-200 hover:border-purple-300 transition-colors col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-purple-700 mb-3">
              Need More Help? 🎯
            </h2>
            <ul className="space-y-2 text-purple-600">
              <li>• Use the visual aids in the worksheet</li>
              <li>• Try the listen mode to hear the multiplication facts</li>
              <li>• Practice with a friend or family member</li>
              <li>• Draw your own groups of 9 balloons</li>
              <li>• Remember: Multiplication is like having multiple groups of the same size!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable9Tips; 
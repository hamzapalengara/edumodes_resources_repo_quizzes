import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationTable8Tips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-green-700 text-center">
            Tips for Learning the Multiplication Table of 8
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visual Patterns */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Visual Patterns 👀
            </h2>
            <ul className="space-y-2 text-green-600">
              <li>• Think of 8 as a group of park flags ⛳️</li>
              <li>• Count the flags in each group to find your answer</li>
              <li>• Notice that all answers are even numbers</li>
              <li>• When multiplying by 5, the answer ends in 0</li>
              <li>• Look for patterns in the answers: 8, 16, 24, 32, 40...</li>
            </ul>
          </div>

          {/* Skip Counting */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Skip Counting 🦘
            </h2>
            <ul className="space-y-2 text-green-600">
              <li>• Practice counting by 8s: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80</li>
              <li>• Each jump adds 8 to the previous number</li>
              <li>• Use a number line to visualize the jumps of 8</li>
              <li>• Notice how the ones digit follows a pattern: 8, 6, 4, 2, 0...</li>
            </ul>
          </div>

          {/* Memory Tricks */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Memory Tricks 🧠
            </h2>
            <ul className="space-y-2 text-green-600">
              <li>• 8 × 2 = 16 (like two groups of park flags)</li>
              <li>• 8 × 5 = 40 (half of 80)</li>
              <li>• 8 × 10 = 80 (add a zero to 8)</li>
              <li>• Think of 8 as "double 4" - first multiply by 4, then double it</li>
              <li>• Remember: 8 × 8 = 64 (it's special because both numbers are 8!)</li>
            </ul>
          </div>

          {/* Practice Strategies */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Practice Strategies 📝
            </h2>
            <ul className="space-y-2 text-green-600">
              <li>• Start with the easier ones (8×1, 8×2, 8×5, 8×10)</li>
              <li>• Use real objects to count in groups of 8</li>
              <li>• Draw flags or circles in groups of 8</li>
              <li>• Practice saying the facts out loud</li>
              <li>• Make flashcards with visual aids</li>
            </ul>
          </div>

          {/* Additional Help */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Need More Help? 🤔
            </h2>
            <ul className="space-y-2 text-green-600">
              <li>• Use the visual aids in the worksheet</li>
              <li>• Try the listen mode to hear the multiplication facts</li>
              <li>• Practice with a friend or family member</li>
              <li>• Draw your own groups of 8 flags</li>
              <li>• Remember: Multiplication is repeated addition!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable8Tips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationTable6Tips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-blue-700 text-center">
            Tips for Learning the Multiplication Table of 6
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visual Patterns */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              Visual Patterns 👀
            </h2>
            <ul className="space-y-2 text-blue-600">
              <li>• Think of 6 as two groups of 3 or three groups of 2</li>
              <li>• Use dice 🎲 to visualize groups of six</li>
              <li>• Notice that all answers are even numbers</li>
              <li>• When multiplying by 5, the answer ends in 0</li>
              <li>• Look for patterns in the answers: 6, 12, 18, 24, 30...</li>
            </ul>
          </div>

          {/* Skip Counting */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              Skip Counting 🦘
            </h2>
            <ul className="space-y-2 text-blue-600">
              <li>• Practice counting by 6s: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60</li>
              <li>• Each jump adds 6 to the previous number</li>
              <li>• Use a number line to visualize the jumps of 6</li>
              <li>• Notice how the ones digit follows a pattern: 6, 2, 8, 4, 0...</li>
            </ul>
          </div>

          {/* Memory Tricks */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              Memory Tricks 🧠
            </h2>
            <ul className="space-y-2 text-blue-600">
              <li>• 6 × 2 = 12 (like hours on a clock)</li>
              <li>• 6 × 5 = 30 (half of 60 minutes)</li>
              <li>• 6 × 10 = 60 (like minutes in an hour)</li>
              <li>• Think of 6 as "double 3" - first multiply by 3, then double it</li>
              <li>• Remember: 6 × 6 = 36 (it rhymes!)</li>
            </ul>
          </div>

          {/* Practice Strategies */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              Practice Strategies 📝
            </h2>
            <ul className="space-y-2 text-blue-600">
              <li>• Start with the easier ones (6×1, 6×2, 6×5, 6×10)</li>
              <li>• Use real objects to count in groups of 6</li>
              <li>• Draw dice or boxes in groups of 6</li>
              <li>• Practice saying the facts out loud</li>
              <li>• Make flashcards with visual aids</li>
            </ul>
          </div>

          {/* Additional Help */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-blue-700 mb-3">
              Need More Help? 🤔
            </h2>
            <ul className="space-y-2 text-blue-600">
              <li>• Use the visual aids in the worksheet</li>
              <li>• Try the listen mode to hear the multiplication facts</li>
              <li>• Practice with a friend or family member</li>
              <li>• Draw your own groups of 6 dice</li>
              <li>• Remember: Multiplication is repeated addition!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable6Tips; 
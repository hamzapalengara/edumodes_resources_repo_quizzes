import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationTable7Tips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-fuchsia-700 text-center">
            Tips for Learning the Multiplication Table of 7
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visual Patterns */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-fuchsia-700 mb-3">
              Visual Patterns 👀
            </h2>
            <ul className="space-y-2 text-fuchsia-600">
              <li>• Use lucky dice 🎲 to visualize groups of seven</li>
              <li>• Notice how each group has exactly 7 dice</li>
              <li>• Count the number of groups to find your answer</li>
              <li>• Look for patterns in the ones digit: 7, 4, 1, 8, 5, 2, 9, 6, 3, 0</li>
              <li>• Use the dividers (|) to keep track of groups</li>
            </ul>
          </div>

          {/* Skip Counting */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-fuchsia-700 mb-3">
              Skip Counting 🦘
            </h2>
            <ul className="space-y-2 text-fuchsia-600">
              <li>• Practice counting by 7s: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70</li>
              <li>• Each jump adds 7 to the previous number</li>
              <li>• Use a number line to visualize the jumps of 7</li>
              <li>• Notice how the ones digit follows a pattern</li>
            </ul>
          </div>

          {/* Memory Tricks */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-fuchsia-700 mb-3">
              Memory Tricks 🧠
            </h2>
            <ul className="space-y-2 text-fuchsia-600">
              <li>• 7 × 1 = 7 (One lucky number)</li>
              <li>• 7 × 2 = 14 (Double 7)</li>
              <li>• 7 × 5 = 35 (Half of 70)</li>
              <li>• 7 × 10 = 70 (Add a zero to 7)</li>
              <li>• 7 × 7 = 49 (Lucky seven times itself)</li>
            </ul>
          </div>

          {/* Practice Strategies */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-fuchsia-700 mb-3">
              Practice Strategies 📝
            </h2>
            <ul className="space-y-2 text-fuchsia-600">
              <li>• Start with the easier ones (7×1, 7×2, 7×5, 7×10)</li>
              <li>• Use the Listen Mode to hear the multiplication facts</li>
              <li>• Show the visual aids to see the groups of dice</li>
              <li>• Practice writing the answers in Write Mode</li>
              <li>• Try to beat your previous score!</li>
            </ul>
          </div>

          {/* Additional Help */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-fuchsia-700 mb-3">
              Need More Help? 🤔
            </h2>
            <ul className="space-y-2 text-fuchsia-600">
              <li>• Break down larger problems into smaller ones (7×6 = 7×5 + 7×1)</li>
              <li>• Use the visual aids to count the total number of dice</li>
              <li>• Practice with a friend or family member</li>
              <li>• Draw your own groups of seven objects</li>
              <li>• Remember: Multiplication is repeated addition!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable7Tips; 
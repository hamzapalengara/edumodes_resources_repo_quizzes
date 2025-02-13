import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationTable3Tips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-orange-700 mb-4">
            Tips for Learning the Multiplication Table of 3
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visual Pattern Tips */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-orange-700 mb-3">
              Visual Patterns 👀
            </h2>
            <ul className="space-y-2 text-orange-600">
              <li>• Look at how each group has exactly 3 oranges</li>
              <li>• Count the number of groups to find your answer</li>
              <li>• Notice how the answers increase by 3 each time</li>
              <li>• Use the dividers (|) to keep track of groups</li>
            </ul>
          </div>

          {/* Skip Counting Tips */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-orange-700 mb-3">
              Skip Counting 🔢
            </h2>
            <ul className="space-y-2 text-orange-600">
              <li>• Practice counting by 3s: 3, 6, 9, 12, 15...</li>
              <li>• Each number in the sequence is the answer to a multiplication fact</li>
              <li>• Use this pattern to check your answers</li>
            </ul>
          </div>

          {/* Memory Tips */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-orange-700 mb-3">
              Memory Tricks 🧠
            </h2>
            <ul className="space-y-2 text-orange-600">
              <li>• 3 × 1 = 3 (One group of three)</li>
              <li>• 3 × 2 = 6 (Two groups of three)</li>
              <li>• 3 × 5 = 15 (Half of 30, which is 3 × 10)</li>
              <li>• 3 × 10 = 30 (Add a zero to 3)</li>
            </ul>
          </div>

          {/* Practice Strategies */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-orange-700 mb-3">
              Practice Strategies 🎯
            </h2>
            <ul className="space-y-2 text-orange-600">
              <li>• Use the Listen Mode to hear the multiplication facts</li>
              <li>• Show the visual aids to see the groups</li>
              <li>• Practice writing the answers in Write Mode</li>
              <li>• Try to beat your previous score!</li>
            </ul>
          </div>

          {/* Additional Help */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-orange-700 mb-3">
              Need More Help? 🤔
            </h2>
            <ul className="space-y-2 text-orange-600">
              <li>• Draw your own groups of three objects</li>
              <li>• Use the visual aids to count the total</li>
              <li>• Practice with real objects like coins or buttons</li>
              <li>• Say the facts out loud as you practice</li>
              <li>• Remember: Multiplication is repeated addition!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable3Tips; 
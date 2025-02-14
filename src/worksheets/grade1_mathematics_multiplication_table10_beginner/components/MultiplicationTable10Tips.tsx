import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationTable10Tips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold text-rose-700 mb-4">
            🎡 Tips for Learning the Multiplication Table of 10 🎡
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visual Pattern Tips */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-rose-700 mb-3">
              Visual Patterns 👀
            </h2>
            <ul className="space-y-2 text-rose-600">
              <li>• Look at how each group has exactly 10 tickets</li>
              <li>• Count the number of groups to find your answer</li>
              <li>• Notice how the answers end in zero</li>
              <li>• Use the dividers (|) to keep track of groups</li>
            </ul>
          </div>

          {/* Skip Counting Tips */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-rose-700 mb-3">
              Skip Counting 🔢
            </h2>
            <ul className="space-y-2 text-rose-600">
              <li>• Practice counting by 10s: 10, 20, 30, 40, 50...</li>
              <li>• Each number in the sequence is the answer to a multiplication fact</li>
              <li>• Use this pattern to check your answers</li>
            </ul>
          </div>

          {/* Memory Tips */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-rose-700 mb-3">
              Memory Tricks 🧠
            </h2>
            <ul className="space-y-2 text-rose-600">
              <li>• 10 × 1 = 10 (One group of ten)</li>
              <li>• 10 × 2 = 20 (Two groups of ten)</li>
              <li>• Just add a zero to the number you're multiplying by</li>
              <li>• 10 × 5 = 50 (Half of 100)</li>
              <li>• 10 × 10 = 100 (A perfect hundred!)</li>
            </ul>
          </div>

          {/* Practice Strategies */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-rose-700 mb-3">
              Practice Strategies 🎯
            </h2>
            <ul className="space-y-2 text-rose-600">
              <li>• Use the Listen Mode to hear the multiplication facts</li>
              <li>• Show the visual aids to see the groups of tickets</li>
              <li>• Practice writing the answers in Write Mode</li>
              <li>• Try to beat your previous score!</li>
            </ul>
          </div>

          {/* Additional Help */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-rose-700 mb-3">
              Need More Help? 🤔
            </h2>
            <ul className="space-y-2 text-rose-600">
              <li>• Think of each group as a bundle of 10 carnival tickets</li>
              <li>• Use the visual aids to count the total tickets</li>
              <li>• Remember that multiplying by 10 just adds a zero</li>
              <li>• Say the facts out loud as you practice</li>
              <li>• Remember: Multiplication is repeated addition!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable10Tips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const MultiplicationTable2Tips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-8">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-8">
          <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
            Tips for Learning Multiplication Table of 2
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Concepts */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold text-indigo-600 mb-4">
              Understanding Multiplication by 2
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Think of multiplication by 2 as doubling a number
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                2 × 4 means adding 4 two times: 4 + 4 = 8
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Look for patterns: numbers in 2's table are always even
              </li>
            </ul>
          </div>

          {/* Strategies */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold text-indigo-600 mb-4">
              Helpful Strategies
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Count by 2s: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Use skip counting to check your answers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Remember: 2 × 5 = 10 (half of 20) as a reference point
              </li>
            </ul>
          </div>

          {/* Visual Aids */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold text-indigo-600 mb-4">
              Visual Learning
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Draw pairs of objects to visualize multiplication
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Use number lines to jump by 2s
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Group objects in pairs to see the patterns
              </li>
            </ul>
          </div>

          {/* Practice Tips */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
            <h2 className="text-lg font-bold text-indigo-600 mb-4">
              Practice Tips
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Practice counting by 2s regularly
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Create your own word problems with pairs of items
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                Use real-life examples: pairs of shoes, socks, or gloves
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationTable2Tips; 
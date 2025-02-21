import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberEightTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400/30 to-teal-300/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-700/30 to-blue-600/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-cyan-400/30 to-teal-300/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <WorksheetHeader />

      <main className="relative z-10 px-0">
        <div className="bg-blue-800/80 backdrop-blur-md shadow-lg border border-blue-700 mb-4">
          <div className="max-w-4xl mx-auto px-2 py-3 md:px-4 md:py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
              Tips for Writing Number 8
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-2 md:px-4 space-y-4">
          {/* Examples Section */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">✏️</span> Writing Examples
            </h2>
            <div className="space-y-2 text-white">
              <p>Number 8 looks like two waves rolling together:</p>
              <ul className="list-disc list-inside space-y-1 text-cyan-100">
                <li>Start with the top wave</li>
                <li>Then draw the bottom wave, connecting it to the top</li>
                <li>Make sure both waves are similar in size</li>
              </ul>
            </div>
          </div>

          {/* Writing Tips */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">💡</span> Writing Tips
            </h2>
            <ul className="space-y-2 text-cyan-100">
              <li className="flex items-start gap-2">
                <span className="text-lg">1.</span>
                <span>Start at the top middle and draw a smooth curve like a gentle wave</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">2.</span>
                <span>Continue to the bottom curve, making it flow like the ocean</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">3.</span>
                <span>Practice making both curves smooth and flowing</span>
              </li>
            </ul>
          </div>

          {/* Common Mistakes */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚠️</span> Common Mistakes
            </h2>
            <ul className="space-y-2 text-cyan-100">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Making one wave bigger than the other</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Not connecting the waves smoothly in the middle</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Drawing the curves too choppy or uneven</span>
              </li>
            </ul>
          </div>

          {/* Practice Tips */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span> Practice Tips
            </h2>
            <ul className="space-y-2 text-cyan-100">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Practice drawing waves separately before combining them</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Use the guide dots like buoys to help you stay on course</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Keep your strokes flowing like gentle ocean waves</span>
              </li>
            </ul>
          </div>

          {/* Fun Facts */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg mb-4">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">🌟</span> Fun Ocean Facts About 8
            </h2>
            <ul className="space-y-2 text-cyan-100">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>An octopus has 8 arms to swim through the ocean! 🐙</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Many jellyfish have 8-fold symmetry, like 8 tentacles! 🎐</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Count 8 waves rolling into shore! 🌊</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberEightTips; 
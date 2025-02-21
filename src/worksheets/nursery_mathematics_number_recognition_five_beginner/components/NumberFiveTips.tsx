import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberFiveTips: React.FC = () => {
  const tips = [
    {
      title: "Start at the Right",
      description: "Begin at the right end of the top line and draw straight across to the left.",
      icon: "⬅️"
    },
    {
      title: "Draw Down",
      description: "Next, draw a straight line down from the left end of the top line.",
      icon: "⬇️"
    },
    {
      title: "Complete the Curve",
      description: "Finally, draw a curve from the bottom of the vertical line to the right and back to the left.",
      icon: "↪️"
    },
    {
      title: "Take Your Time",
      description: "Don't rush! It's more important to trace accurately than quickly.",
      icon: "⏱️"
    },
    {
      title: "Practice Makes Perfect",
      description: "Complete all 5 practices to unlock the number finding game.",
      icon: "🔄"
    },
    {
      title: "Find the Numbers",
      description: "After tracing, find all five number 5s with apples in the grid.",
      icon: "🔍"
    },
    {
      title: "Listen to Instructions",
      description: "Pay attention to the voice guidance. It will help you know what to do next.",
      icon: "🔊"
    },
    {
      title: "Count the Apples",
      description: "Count the five apples to understand what number 5 represents.",
      icon: "🍎"
    },
    {
      title: "Watch the Demo",
      description: "Use the 'Play Again' button to see how to write number 5 correctly.",
      icon: "▶️"
    },
    {
      title: "Stay Within the Lines",
      description: "Try to keep your tracing inside the light purple paths for the best results.",
      icon: "📏"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 bg-[url('/fruits-bg.png')] bg-cover bg-center bg-blend-soft-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-pink-200/40 to-purple-200/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 text-center py-3">
          Number Five with Apples
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-white/40 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-white/50">
          <div className="max-w-4xl mx-auto">
            {/* Tips Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/50 shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl md:text-3xl filter drop-shadow-md">{tip.icon}</span>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-indigo-900 mb-1">{tip.title}</h3>
                      <p className="text-sm md:text-base text-indigo-800">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Tips */}
            <div className="mt-6 md:mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/50 shadow-lg">
              <h4 className="text-base md:text-lg font-semibold text-indigo-900 mb-3 md:mb-4">Remember:</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-indigo-800">
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl filter drop-shadow-md">🍎</span>
                  <span>Five apples help you remember what number 5 looks like!</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl filter drop-shadow-md">🎮</span>
                  <span>You can use either a mouse, touchpad, or touch screen to trace the number.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl filter drop-shadow-md">🔍</span>
                  <span>Look at the example carefully before starting to trace.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl filter drop-shadow-md">🌟</span>
                  <span>Celebrate your success! Each completed stroke is an achievement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberFiveTips; 
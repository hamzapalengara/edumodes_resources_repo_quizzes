import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberFourTips: React.FC = () => {
  const tips = [
    {
      title: "Start at the Top",
      description: "Begin at the top of the diagonal line and trace down to the middle.",
      icon: "↘️"
    },
    {
      title: "Draw the Horizontal Line",
      description: "Next, draw the straight line from left to right in the middle.",
      icon: "➡️"
    },
    {
      title: "Complete the Vertical Line",
      description: "Finally, draw the straight line down from the top to the bottom.",
      icon: "⬇️"
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
      description: "After tracing, find all five number 4s with strawberries in the grid.",
      icon: "🔍"
    },
    {
      title: "Listen to Instructions",
      description: "Pay attention to the voice guidance. It will help you know what to do next.",
      icon: "🔊"
    },
    {
      title: "Count the Strawberries",
      description: "Count the four strawberries to understand what number 4 represents.",
      icon: "🍓"
    },
    {
      title: "Watch the Demo",
      description: "Use the 'Play Again' button to see how to write number 4 correctly.",
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
          Number Four with Strawberries
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
                  <span className="text-xl md:text-2xl filter drop-shadow-md">🍓</span>
                  <span>Four strawberries help you remember what number 4 looks like!</span>
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

export default NumberFourTips; 
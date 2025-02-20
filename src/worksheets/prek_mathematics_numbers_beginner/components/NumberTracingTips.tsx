import React from 'react';

const NumberTracingTips: React.FC = () => {
  const tips = [
    {
      title: "Proper Pencil Grip",
      description: "Hold your pencil or stylus with your thumb and first two fingers, like holding a small twig.",
      icon: "✏️"
    },
    {
      title: "Start at the Right Spot",
      description: "Always begin tracing from the glowing dot. This helps form good number writing habits.",
      icon: "🎯"
    },
    {
      title: "Follow the Arrows",
      description: "Pay attention to the direction arrows. They show you the correct way to form each number.",
      icon: "➡️"
    },
    {
      title: "Take Your Time",
      description: "Don't rush! It's more important to trace accurately than quickly.",
      icon: "⏱️"
    },
    {
      title: "Practice Makes Perfect",
      description: "Use the 'Try Again' button to practice each number until you're comfortable.",
      icon: "🔄"
    },
    {
      title: "Listen to Instructions",
      description: "Pay attention to the voice guidance. It will help you know what to do next.",
      icon: "🔊"
    },
    {
      title: "Stay Within the Lines",
      description: "Try to keep your tracing inside the light purple paths for the best results.",
      icon: "📏"
    },
    {
      title: "Complete Each Part",
      description: "Some numbers have multiple parts. Make sure to complete each part before moving to the next.",
      icon: "✅"
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

      {/* Header */}
      <header className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <div className="py-4 px-4">
          <div className="flex items-center justify-between">
            {/* Edumodes Logo */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline leading-none">
                <span className="text-lg sm:text-xl font-black text-[#EC4899]">E</span>
                <span className="text-base sm:text-lg font-black text-sky-500 -ml-0.5">d</span>
                <span className="text-base sm:text-lg font-black text-indigo-500">u</span>
                <span className="text-lg sm:text-xl font-black text-[#EAB308] ml-0.5">M</span>
                <span className="text-base sm:text-lg font-black text-emerald-500 -ml-0.5">o</span>
                <span className="text-base sm:text-lg font-black text-teal-500">d</span>
                <span className="text-base sm:text-lg font-black text-green-500">e</span>
                <span className="text-base sm:text-lg font-black text-teal-500">s</span>
              </div>
              <a href="https://www.edumodes.com" target="_blank" className="text-[9px] sm:text-[10px] text-gray-500 hover:text-gray-700 leading-tight truncate">www.edumodes.com</a>
            </div>
            <h1 className="text-xl font-bold text-indigo-900">Tips & Tricks</h1>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 text-center py-3">
          Number Tracing: 1-10
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-white/40 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-white/50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-indigo-900 mb-4 md:mb-6">Tips for Success</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
              {tips.map((tip, index) => (
                <div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 md:p-4 border border-white/50 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-2 md:gap-4">
                    <span className="text-2xl md:text-3xl filter drop-shadow-md">{tip.icon}</span>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-indigo-900 mb-1 md:mb-2">{tip.title}</h4>
                      <p className="text-sm md:text-base text-indigo-800">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Tips Section */}
            <div className="mt-6 md:mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/50 shadow-lg">
              <h4 className="text-base md:text-lg font-semibold text-indigo-900 mb-3 md:mb-4">Remember:</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-indigo-800">
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl filter drop-shadow-md">🍎</span>
                  <span>Each number is associated with a delicious fruit to make learning fun!</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl filter drop-shadow-md">🎮</span>
                  <span>You can use either a mouse, touchpad, or touch screen to trace the numbers.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl filter drop-shadow-md">🔍</span>
                  <span>Look at the example carefully before starting to trace.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl filter drop-shadow-md">🌟</span>
                  <span>Celebrate your success! Each completed number is an achievement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberTracingTips; 
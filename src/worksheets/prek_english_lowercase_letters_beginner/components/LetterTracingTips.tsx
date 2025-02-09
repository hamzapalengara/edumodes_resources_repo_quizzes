import React from 'react';

const LetterTracingTips: React.FC = () => {
  const tips = [
    {
      title: "Proper Pencil Grip",
      description: "Hold your pencil or stylus with your thumb and first two fingers, like holding a small twig.",
      icon: "✏️"
    },
    {
      title: "Start at the Right Spot",
      description: "Always begin tracing from the glowing dot. This helps form good writing habits.",
      icon: "🎯"
    },
    {
      title: "Follow the Arrows",
      description: "Pay attention to the direction arrows. They show you the correct way to form each letter.",
      icon: "➡️"
    },
    {
      title: "Take Your Time",
      description: "Don't rush! It's more important to trace accurately than quickly.",
      icon: "⏱️"
    },
    {
      title: "Practice Makes Perfect",
      description: "Use the 'Try Again' button to practice each letter until you're comfortable.",
      icon: "🔄"
    },
    {
      title: "Listen to Instructions",
      description: "Pay attention to the voice guidance. It will help you know what to do next.",
      icon: "🔊"
    },
    {
      title: "Stay Within the Lines",
      description: "Try to keep your tracing inside the light green paths for the best results.",
      icon: "📏"
    },
    {
      title: "Complete Each Part",
      description: "Some letters have multiple parts. Make sure to complete each part before moving to the next.",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-200 via-yellow-100 to-emerald-100 bg-[url('/jungle-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-emerald-300/90 to-yellow-200/90 shadow-lg backdrop-blur-sm">
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
              <a href="https://www.edumodes.com" target="_blank" className="text-[9px] sm:text-[10px] text-gray-300 hover:text-white leading-tight truncate">www.edumodes.com</a>
            </div>
            <h1 className="text-xl font-bold text-white">Tips & Tricks</h1>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-emerald-400/30 backdrop-blur-sm shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 text-center py-3">
          Jungle Letter Adventure: a to j
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-emerald-400/40 backdrop-blur-sm p-4 mb-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-emerald-900 mb-6">Tips for Success</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div 
                  key={index}
                  className="bg-emerald-100/80 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{tip.icon}</span>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-900 mb-2">{tip.title}</h4>
                      <p className="text-emerald-700">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Tips Section */}
            <div className="mt-8 bg-emerald-100/80 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
              <h4 className="text-lg font-semibold text-emerald-900 mb-4">Remember:</h4>
              <ul className="space-y-3 text-emerald-700">
                <li className="flex items-center gap-2">
                  <span className="text-xl">🌿</span>
                  <span>Each letter is associated with a jungle animal to make learning fun!</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">🎮</span>
                  <span>You can use either a mouse, touchpad, or touch screen to trace the letters.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">🔍</span>
                  <span>Look at the example carefully before starting to trace.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">🌟</span>
                  <span>Celebrate your success! Each completed letter is an achievement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LetterTracingTips; 
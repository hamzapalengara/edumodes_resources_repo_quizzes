import React from 'react';

const LetterTracingTips: React.FC = () => {
  const tips = [
    {
      title: "Proper Grip and Posture",
      content: "Ensure the child is sitting comfortably with good posture. The device should be at a comfortable angle. For touch devices, a stylus can help develop proper grip.",
      icon: "✍️"
    },
    {
      title: "Follow the Sequence",
      content: "Each letter has numbered steps. Always follow these steps in order - this helps build muscle memory for proper letter formation.",
      icon: "🔢"
    },
    {
      title: "Use Audio Features",
      content: "Encourage the use of audio pronunciation. This helps connect letter shapes with their sounds and associated words.",
      icon: "🔊"
    },
    {
      title: "Word Association",
      content: "Use the example words and emojis to help remember letters. Make connections between the letter shape and the object it represents.",
      icon: "🔤"
    },
    {
      title: "Practice Pacing",
      content: "Don't rush. It's better to trace slowly and accurately than quickly and messily. The animations provide a good pace to follow.",
      icon: "⏱️"
    },
    {
      title: "Celebrate Progress",
      content: "Praise effort and improvement, not just perfect traces. The confetti and sound effects help make learning fun and rewarding.",
      icon: "🎉"
    },
    {
      title: "Regular Practice",
      content: "Short, regular practice sessions are better than long, infrequent ones. Aim for 10-15 minutes of practice daily.",
      icon: "📅"
    },
    {
      title: "Multi-Sensory Learning",
      content: "Combine visual tracing with saying the letter sound and word. This multi-sensory approach helps reinforce learning.",
      icon: "👀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C48] via-[#1B3B8C] to-[#0B1C48] bg-[url('/space-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-black/80 to-gray-900/80 shadow-lg backdrop-blur-sm border-b border-gray-700">
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
              <a href="https://www.edumodes.com" target="_blank" className="text-[9px] sm:text-[10px] text-gray-400 hover:text-white leading-tight truncate">www.edumodes.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-black/50 backdrop-blur-sm shadow-lg border-b border-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center py-3 flex items-center justify-center gap-3">
          <span>🛸</span>
          <span>Space Letters: Teaching Tips</span>
          <span>👨‍🚀</span>
        </h1>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-gray-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl filter drop-shadow-md">{tip.icon}</span>
                <h2 className="text-lg font-semibold text-white">{tip.title}</h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {tip.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span>🚀</span>
            Additional Notes
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <span>📱</span>
              <span>This worksheet works best on tablets or touch-enabled devices.</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🔄</span>
              <span>Students can practice each letter multiple times before moving to the next.</span>
            </li>
            <li className="flex items-center gap-2">
              <span>⚡</span>
              <span>The worksheet automatically saves progress and adapts to the student's pace.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default LetterTracingTips; 
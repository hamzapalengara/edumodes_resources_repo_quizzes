import React from 'react';

interface TipSection {
  title: string;
  icon: string;
  tips: string[];
}

const TIPS: TipSection[] = [
  {
    title: 'Getting Started',
    icon: '🌱',
    tips: [
      'Find a comfortable position with good posture',
      'Hold your device steady on a flat surface',
      'Use your finger or a stylus to trace the letters'
    ]
  },
  {
    title: 'Tracing Technique',
    icon: '🦊',
    tips: [
      'Start at the green dot for each stroke',
      'Follow the gray lines carefully',
      'Complete each stroke before moving to the next',
      'Keep a steady pace while tracing'
    ]
  },
  {
    title: 'Learning Strategy',
    icon: '🦉',
    tips: [
      'Say the letter name while tracing',
      'Think about the animal or object that starts with the letter',
      'Practice each letter multiple times',
      'Try to remember the letter shape and strokes'
    ]
  },
  {
    title: 'Common Mistakes to Avoid',
    icon: '🦝',
    tips: [
      'Don\'t rush through the tracing',
      'Don\'t skip parts of the letter',
      'Don\'t lift your finger before completing a stroke',
      'Don\'t trace outside the gray lines'
    ]
  },
  {
    title: 'Parent/Teacher Guidance',
    icon: '🦋',
    tips: [
      'Encourage and praise effort',
      'Help maintain proper device position',
      'Discuss the letters and associated words',
      'Make the learning experience fun and engaging'
    ]
  }
];

const LetterTracingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-emerald-200 bg-[url('/forest-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-emerald-800/90 to-emerald-700/90 shadow-lg backdrop-blur-sm">
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
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-white/80 backdrop-blur-sm shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center py-3">
          Letter Tracing Tips
        </h1>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 space-y-4">
        {TIPS.map((section) => (
          <div
            key={section.title}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-emerald-100/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{section.icon}</span>
              <h2 className="text-xl font-bold text-emerald-800">{section.title}</h2>
            </div>
            <ul className="space-y-3">
              {section.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">🌿</span>
                  <span className="text-emerald-800">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};

export default LetterTracingTips; 
import React from 'react';

interface TipSection {
  title: string;
  icon: string;
  tips: string[];
}

const TIPS: TipSection[] = [
  {
    title: 'Getting Started',
    icon: '🌊',
    tips: [
      'Find a comfortable position like a calm sea',
      'Keep your device steady on a flat surface',
      'Use your finger or stylus to trace the letters',
      'Take deep breaths like ocean waves before starting'
    ]
  },
  {
    title: 'Tracing Technique',
    icon: '🐋',
    tips: [
      'Start at the blue dot for each stroke',
      'Follow the gray lines as smoothly as a swimming fish',
      'Pay attention to diagonal lines in letters like K and N',
      'Practice curved lines like ocean waves in letters like S'
    ]
  },
  {
    title: 'Learning Strategy',
    icon: '🐙',
    tips: [
      'Say the letter and sea creature name while tracing',
      'Notice how some letters share similar strokes',
      'Practice each letter multiple times like waves on the shore',
      'Remember the order of strokes like a smart octopus'
    ]
  },
  {
    title: 'Common Mistakes to Avoid',
    icon: '🦈',
    tips: [
      'Don\'t rush through the tracing - swim at your own pace',
      'Don\'t skip parts of the letter - every stroke is important',
      'Don\'t lift your finger until the stroke is complete',
      'Watch the direction of lines like a careful navigator'
    ]
  },
  {
    title: 'Parent/Teacher Guidance',
    icon: '🐠',
    tips: [
      'Encourage and praise effort like cheering waves',
      'Help maintain proper device position',
      'Point out similarities between letters (like P and R)',
      'Make connections to ocean creatures they know'
    ]
  }
];

const LetterTracingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-cyan-100 to-blue-200 bg-[url('/ocean-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-blue-800/90 to-blue-700/90 shadow-lg backdrop-blur-sm">
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
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 text-center py-3">
          Ocean Letter Tracing Tips
        </h1>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 space-y-4">
        {TIPS.map((section) => (
          <div
            key={section.title}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-blue-100/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{section.icon}</span>
              <h2 className="text-xl font-bold text-blue-800">{section.title}</h2>
            </div>
            <ul className="space-y-3">
              {section.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">🌊</span>
                  <span className="text-blue-800">{tip}</span>
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
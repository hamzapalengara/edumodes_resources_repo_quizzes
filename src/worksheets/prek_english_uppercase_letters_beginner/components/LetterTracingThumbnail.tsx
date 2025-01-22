import React from 'react';
import { Letter, LETTERS } from './LetterTracingWorksheet';

const LetterTracingThumbnail: React.FC = () => {
  // Sample letters to show in thumbnail
  const previewLetters = LETTERS.slice(0, 3);

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-b from-green-50 via-green-100 to-emerald-200 overflow-hidden flex items-center justify-center">
      {/* Inner Content Container */}
      <div className="w-[420px] h-[240px] bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border-2 border-emerald-100/50 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          {/* Edumodes Logo */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline leading-none">
              <span className="text-lg font-black text-[#EC4899]">E</span>
              <span className="text-base font-black text-sky-500 -ml-0.5">d</span>
              <span className="text-base font-black text-indigo-500">u</span>
              <span className="text-lg font-black text-[#EAB308] ml-0.5">M</span>
              <span className="text-base font-black text-emerald-500 -ml-0.5">o</span>
              <span className="text-base font-black text-teal-500">d</span>
              <span className="text-base font-black text-green-500">e</span>
              <span className="text-base font-black text-teal-500">s</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-2xl">🌟</span>
            <span className="text-2xl">🍃</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-emerald-800 mb-1">Letter Tracing Adventure</h1>
          <p className="text-sm text-emerald-700">Learn to write uppercase letters with animal friends!</p>
        </div>

        {/* Preview Letters */}
        <div className="flex justify-center gap-3 mb-4">
          {previewLetters.map((letter: Letter) => (
            <div key={letter.char} className="relative">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex flex-col items-center justify-center border border-emerald-100">
                <span className="text-3xl font-bold text-emerald-800">{letter.char}</span>
                <span className="text-xl mt-0.5">{letter.objectEmoji}</span>
              </div>
              {/* Green dot indicator */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="flex items-center gap-0.5">
              <span className="text-base">🎯</span>
              <span className="text-xs text-emerald-800 font-medium">Interactive</span>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="text-base">🔊</span>
              <span className="text-xs text-emerald-800 font-medium">Voice Guide</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="text-xl">🦊</span>
            <span className="text-xl">🦉</span>
            <span className="text-xl">🦋</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterTracingThumbnail; 
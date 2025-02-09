import React from 'react';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-100 to-pink-100 bg-[url('/candy-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-pink-300/90 to-purple-200/90 shadow-lg backdrop-blur-sm">
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
      <div className="bg-pink-400/30 backdrop-blur-sm shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-900 text-center py-3">
          Sweet Letter Adventure: u to z
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        {/* General Tips */}
        <div className="bg-pink-400/40 backdrop-blur-sm p-4 mb-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-pink-900 mb-4">Sweet Tips for Success 🍬</h3>
            <ul className="space-y-3 text-pink-800">
              <li className="flex items-start gap-2">
                <span className="text-xl">🍭</span>
                <span>Start at the candy dot and follow the sweet path!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🍪</span>
                <span>Take your time - writing letters is like decorating cookies, it's better when done carefully.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🍬</span>
                <span>Keep your lines smooth like melted chocolate.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🍫</span>
                <span>Practice makes perfect - just like making the perfect candy!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Letter-Specific Tips */}
        <div className="bg-pink-400/40 backdrop-blur-sm p-4 mb-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-pink-900 mb-4">Sweet Letter Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LETTERS.map((letter) => (
                <div key={letter.char} className="bg-pink-100/80 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-pink-900">{letter.char}</span>
                    <span className="text-3xl">{letter.objectEmoji}</span>
                    <span className="text-lg text-pink-900 font-medium">{letter.object}</span>
                  </div>
                  <div className="space-y-2 text-pink-800">
                    {letter.char === 'u' && (
                      <>
                        <p>Think of a unicorn lollipop's stick going down and curving up like a smile! 🍭</p>
                        <p>Start at the top, go down, curve like a candy cane, and up we go!</p>
                      </>
                    )}
                    {letter.char === 'v' && (
                      <>
                        <p>Imagine an ice cream cone pointing down! 🍦</p>
                        <p>Start at the top left, slide down diagonally, then climb back up!</p>
                      </>
                    )}
                    {letter.char === 'w' && (
                      <>
                        <p>Like two wafer cookies standing side by side! 🍪</p>
                        <p>Make two 'v' shapes connected - down, up, down, up!</p>
                      </>
                    )}
                    {letter.char === 'x' && (
                      <>
                        <p>Cross your candy sticks to make an 'x'! 🍬</p>
                        <p>First diagonal line down, then cross it with another!</p>
                      </>
                    )}
                    {letter.char === 'y' && (
                      <>
                        <p>Like a yogurt parfait with a long spoon! 🍨</p>
                        <p>Start at the top, go down and split like a sundae!</p>
                      </>
                    )}
                    {letter.char === 'z' && (
                      <>
                        <p>Like slicing a zebra cake - top to bottom! 🍰</p>
                        <p>Start with the top line, zig-zag down, finish with the bottom line!</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practice Tips */}
        <div className="bg-pink-400/40 backdrop-blur-sm p-4 mb-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-pink-900 mb-4">Sweet Practice Ideas 🍫</h3>
            <ul className="space-y-3 text-pink-800">
              <li className="flex items-start gap-2">
                <span className="text-xl">🎨</span>
                <span>Draw the letters in the air with your finger before writing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📚</span>
                <span>Look for these letters in your favorite candy wrappers!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🗣️</span>
                <span>Say the letter and its candy friend out loud while tracing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">🎯</span>
                <span>Practice each letter 3 times before moving to the next one.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LetterTracingTips; 
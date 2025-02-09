import React from 'react';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingTips: React.FC = () => {
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
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-emerald-400/30 backdrop-blur-sm shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 text-center py-3">
          Jungle Letter Adventure: k to t - Tips
        </h1>
      </div>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl p-4">
        {/* General Tips */}
        <div className="bg-emerald-400/40 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold text-emerald-900 mb-4">General Tips for Letter Tracing</h2>
          <ul className="list-disc list-inside space-y-3 text-emerald-900">
            <li>Always start at the green dot for each stroke</li>
            <li>Take your time and focus on accuracy rather than speed</li>
            <li>Keep your device steady while tracing</li>
            <li>Complete each stroke before moving to the next one</li>
            <li>Practice each letter multiple times to build muscle memory</li>
            <li>Use the "Try Again" button if you need to restart a letter</li>
          </ul>
        </div>

        {/* Letter-Specific Tips */}
        <div className="bg-emerald-400/40 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tips for Each Letter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LETTERS.map((letter) => (
              <div key={letter.char} className="bg-emerald-400/30 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl font-bold text-emerald-900">{letter.char}</span>
                  <span className="text-3xl">{letter.objectEmoji}</span>
                  <span className="text-lg text-emerald-900">{letter.object}</span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-emerald-900 text-sm">
                  {letter.char === 'k' && (
                    <>
                      <li>Start with the vertical line, like a tall tree trunk</li>
                      <li>Add the diagonal lines like branches reaching out</li>
                      <li>Think of a kangaroo's strong legs making these shapes</li>
                    </>
                  )}
                  {letter.char === 'l' && (
                    <>
                      <li>Draw one tall, straight line like a lion standing tall</li>
                      <li>Keep it straight and proud, just like a lion's posture</li>
                      <li>Make sure it reaches from top to bottom</li>
                    </>
                  )}
                  {letter.char === 'm' && (
                    <>
                      <li>Start with the first vertical line</li>
                      <li>Add two smooth humps like a monkey swinging</li>
                      <li>Keep the humps even and rounded</li>
                    </>
                  )}
                  {letter.char === 'n' && (
                    <>
                      <li>Begin with a straight line down</li>
                      <li>Add one smooth curve like a numbat's back</li>
                      <li>End with a straight line down</li>
                    </>
                  )}
                  {letter.char === 'o' && (
                    <>
                      <li>Draw a complete circle like an ostrich egg</li>
                      <li>Keep the shape round and even</li>
                      <li>Connect the end to the beginning smoothly</li>
                    </>
                  )}
                  {letter.char === 'p' && (
                    <>
                      <li>Start with the vertical line going below the line</li>
                      <li>Add a circle like a penguin's round belly</li>
                      <li>Make sure the circle touches the line perfectly</li>
                    </>
                  )}
                  {letter.char === 'q' && (
                    <>
                      <li>Draw a circle like a quokka's cute face</li>
                      <li>Add the tail going down below the line</li>
                      <li>Keep the circle round and the tail straight</li>
                    </>
                  )}
                  {letter.char === 'r' && (
                    <>
                      <li>Start with a straight line like a rabbit's ear</li>
                      <li>Add a small curve at the top</li>
                      <li>Keep the curve smooth and gentle</li>
                    </>
                  )}
                  {letter.char === 's' && (
                    <>
                      <li>Think of a snake's smooth curves</li>
                      <li>Start from the top and flow down</li>
                      <li>Make both curves equally smooth</li>
                    </>
                  )}
                  {letter.char === 't' && (
                    <>
                      <li>Draw the vertical line first like a tiger's stripe</li>
                      <li>Add the horizontal line across the top</li>
                      <li>Make sure the lines cross perfectly</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Tips */}
        <div className="mt-6 bg-emerald-400/40 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Practice Tips</h2>
          <ul className="list-disc list-inside space-y-3 text-emerald-900">
            <li>Practice each letter multiple times before moving to the next</li>
            <li>Say the letter and its animal friend out loud while tracing</li>
            <li>Try to draw the letter in the air before tracing on screen</li>
            <li>Look for these letters in books and try to spot their animal friends</li>
            <li>Create stories with the animals to remember letter shapes</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default LetterTracingTips; 
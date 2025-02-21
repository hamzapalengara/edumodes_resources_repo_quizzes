import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberNineTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 bg-[url('/fruits-bg.png')] bg-cover bg-center bg-blend-soft-light">
      <WorksheetHeader />
      
      <main className="p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6 text-center">
              Tips for Writing Number 9
            </h1>
            
            <div className="space-y-6">
              {/* Basic Tips */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">Basic Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-indigo-700">
                  <li>Start by drawing a circle at the top</li>
                  <li>Make sure the circle is closed and round</li>
                  <li>Draw a straight vertical line down from the right side of the circle</li>
                  <li>Keep the vertical line straight and aligned</li>
                </ul>
              </section>

              {/* Common Mistakes */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">Common Mistakes to Avoid</h2>
                <ul className="list-disc pl-6 space-y-2 text-indigo-700">
                  <li>Don't make the circle too small or too large</li>
                  <li>Avoid leaving gaps in the circle</li>
                  <li>Make sure the vertical line starts from the right side of the circle</li>
                  <li>Don't make the vertical line too short or too long</li>
                </ul>
              </section>

              {/* Practice Tips */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">Practice Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-indigo-700">
                  <li>Watch the animation several times before starting</li>
                  <li>Practice drawing circles separately first</li>
                  <li>Use the guide dots to help with placement</li>
                  <li>Take your time with each stroke</li>
                  <li>Practice both parts (circle and line) separately before combining them</li>
                </ul>
              </section>

              {/* Game Tips */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">Number Finding Game Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-indigo-700">
                  <li>Look for the grape emoji (🍇) next to the number 9</li>
                  <li>Take your time to scan the grid carefully</li>
                  <li>Count the grapes to verify it's a group of nine</li>
                  <li>Remember there are exactly 5 number 9s to find</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberNineTips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberTenTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 bg-[url('/fruits-bg.png')] bg-cover bg-center bg-blend-soft-light">
      <WorksheetHeader />
      
      <main className="p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6 text-center">
              Tips for Writing Number 10
            </h1>
            
            <div className="space-y-6">
              {/* Basic Tips */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">Basic Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-indigo-700">
                  <li>Start with the number 1 - a straight vertical line</li>
                  <li>Add a circle (0) next to the vertical line</li>
                  <li>Make sure the circle is round and closed</li>
                  <li>Keep the vertical line straight and tall</li>
                </ul>
              </section>

              {/* Common Mistakes */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">Common Mistakes to Avoid</h2>
                <ul className="list-disc pl-6 space-y-2 text-indigo-700">
                  <li>Don't make the vertical line too short or slanted</li>
                  <li>Avoid making the circle too small or oval-shaped</li>
                  <li>Keep proper spacing between the 1 and the 0</li>
                  <li>Make sure the circle is properly closed</li>
                </ul>
              </section>

              {/* Practice Tips */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">Practice Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-indigo-700">
                  <li>Watch the animation several times before starting</li>
                  <li>Practice the vertical line and circle separately first</li>
                  <li>Use the guide dots to help with placement</li>
                  <li>Take your time with each stroke</li>
                  <li>Make sure both parts are proportional</li>
                </ul>
              </section>

              {/* Game Tips */}
              <section>
                <h2 className="text-xl font-semibold text-indigo-800 mb-3">Number Finding Game Tips</h2>
                <ul className="list-disc pl-6 space-y-2 text-indigo-700">
                  <li>Look for the orange emoji (🍊) next to the number 10</li>
                  <li>Take your time to scan the grid carefully</li>
                  <li>Count the oranges to verify it's a group of ten</li>
                  <li>Remember there are exactly 10 number 10s to find</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberTenTips; 
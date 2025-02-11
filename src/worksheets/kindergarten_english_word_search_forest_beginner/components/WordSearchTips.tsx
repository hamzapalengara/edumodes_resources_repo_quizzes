import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 to-lime-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">
            Forest Word Search - Tips
          </h1>
          
          <div className="bg-white rounded-xl p-4">
            <section className="mb-6">
              <h2 className="text-xl font-bold text-emerald-800 mb-4">How to Play:</h2>
              <ul className="list-disc list-inside space-y-2 text-emerald-700">
                <li>Look at the list of forest words you need to find</li>
                <li>Search for these words in the letter grid</li>
                <li>Words can go across ➡️ or down ⬇️</li>
                <li>Tap and drag to select letters when you find a word</li>
                <li>The word will highlight when you find it correctly</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold text-emerald-800 mb-4">Helpful Strategies:</h2>
              <ul className="list-disc list-inside space-y-2 text-emerald-700">
                <li>Start by looking for short words like "OWL"</li>
                <li>Look for the first letter of each word</li>
                <li>Use your finger to guide your eyes along the lines</li>
                <li>Take your time and be patient</li>
                <li>Cross off words as you find them</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold text-emerald-800 mb-4">Forest Facts:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-800 mb-2">🌳 Trees</h3>
                  <p className="text-emerald-700">Trees are the biggest plants in the forest. They give us shade and homes for animals.</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-800 mb-2">🍃 Leaves</h3>
                  <p className="text-emerald-700">Leaves help trees make their food using sunlight. They change colors in fall!</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-800 mb-2">🐦 Birds</h3>
                  <p className="text-emerald-700">Birds build nests in trees and help spread seeds around the forest.</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-800 mb-2">🦌 Deer</h3>
                  <p className="text-emerald-700">Deer are gentle animals that eat plants and leaves in the forest.</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-800 mb-2">🐻 Bears</h3>
                  <p className="text-emerald-700">Bears are strong animals that eat berries and fish. They sleep all winter!</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-bold text-emerald-800 mb-2">🦉 Owls</h3>
                  <p className="text-emerald-700">Owls are wise birds that hunt at night and make "hoot" sounds.</p>
                </div>
              </div>
            </section>

            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
              <h2 className="text-xl font-bold text-emerald-800 mb-2">Remember:</h2>
              <ul className="list-disc list-inside space-y-2 text-emerald-700">
                <li>Take breaks if your eyes get tired</li>
                <li>Celebrate when you find each word!</li>
                <li>Learn about the forest animals and plants</li>
                <li>Have fun while learning new words!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchTips; 
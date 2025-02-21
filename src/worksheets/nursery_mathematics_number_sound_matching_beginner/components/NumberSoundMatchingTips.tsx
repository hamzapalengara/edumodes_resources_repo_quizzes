import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberSoundMatchingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 text-center">
            Number Sound Matching - Tips and Strategies
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            {/* For Students */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👨‍🎓</span> For Students
              </h2>
              <div className="grid gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md border border-indigo-100">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">How to Play</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Click the speaker button to hear the number word</li>
                    <li>Listen carefully to the sound</li>
                    <li>Look at the number options provided</li>
                    <li>Click on the number that matches what you heard</li>
                    <li>If you're not sure, you can play the sound again</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md border border-indigo-100">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">Tips for Success</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Take your time - there's no rush!</li>
                    <li>Say the number out loud after you hear it</li>
                    <li>Look at each number option carefully</li>
                    <li>Practice writing the numbers as you learn them</li>
                    <li>Don't be afraid to listen to the sound multiple times</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* For Teachers/Parents */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👩‍🏫</span> For Teachers and Parents
              </h2>
              <div className="grid gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md border border-indigo-100">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">Teaching Strategies</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Start with numbers 1-5 before moving to higher numbers</li>
                    <li>Use physical objects to represent numbers</li>
                    <li>Practice number words in daily conversations</li>
                    <li>Create number songs and rhymes</li>
                    <li>Use visual aids alongside audio learning</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md border border-indigo-100">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">Supporting Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Count objects together in daily activities</li>
                    <li>Play number recognition games</li>
                    <li>Write numbers in sand or with finger paint</li>
                    <li>Create number cards with corresponding objects</li>
                    <li>Practice number sequences through movement activities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Additional Resources
              </h2>
              <div className="bg-white rounded-xl p-4 shadow-md border border-indigo-100">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use number books and counting stories</li>
                  <li>Download number recognition apps</li>
                  <li>Create a number wall in your learning space</li>
                  <li>Use number songs and videos</li>
                  <li>Practice with number puzzles and games</li>
                </ul>
              </div>
            </section>

            {/* Progress Tracking */}
            <section className="mt-8 bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <h2 className="text-xl font-bold text-indigo-900 mb-4">Tracking Progress</h2>
              <div className="space-y-4 text-gray-700">
                <p>Keep track of:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Which numbers are easily recognized</li>
                  <li>Which numbers need more practice</li>
                  <li>Improvement in response time</li>
                  <li>Confidence in number recognition</li>
                  <li>Ability to connect number words with written numbers</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberSoundMatchingTips; 
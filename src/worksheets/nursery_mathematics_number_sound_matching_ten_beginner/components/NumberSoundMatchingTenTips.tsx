import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberSoundMatchingTenTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-black/50 backdrop-blur-md shadow-lg border border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-red-100 text-center">
            Number Sound Matching (5-10) - Tips and Strategies
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-500/20">
            {/* For Students */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-red-100 mb-4 flex items-center gap-2">
                <span className="text-2xl">👨‍🎓</span> For Students
              </h2>
              <div className="grid gap-4">
                <div className="bg-black/50 rounded-xl p-4 shadow-md border border-red-500/30">
                  <h3 className="text-lg font-semibold text-red-200 mb-3">How to Play</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-300">
                    <li>Click the speaker button to hear the number word</li>
                    <li>Listen carefully to the sound</li>
                    <li>Look at the number options provided</li>
                    <li>Click on the number that matches what you heard</li>
                    <li>If you're not sure, you can play the sound again</li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-xl p-4 shadow-md border border-red-500/30">
                  <h3 className="text-lg font-semibold text-red-200 mb-3">Tips for Success</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-300">
                    <li>Take your time - there's no rush!</li>
                    <li>Say the number out loud after you hear it</li>
                    <li>Look at each number option carefully</li>
                    <li>Practice writing numbers 5 to 10 as you learn them</li>
                    <li>Don't be afraid to listen to the sound multiple times</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* For Teachers/Parents */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-red-100 mb-4 flex items-center gap-2">
                <span className="text-2xl">👩‍🏫</span> For Teachers and Parents
              </h2>
              <div className="grid gap-4">
                <div className="bg-black/50 rounded-xl p-4 shadow-md border border-red-500/30">
                  <h3 className="text-lg font-semibold text-red-200 mb-3">Teaching Strategies</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-300">
                    <li>Build on previous knowledge of numbers 1-5</li>
                    <li>Use physical objects to represent larger numbers</li>
                    <li>Practice number words in daily conversations</li>
                    <li>Create number songs and rhymes for higher numbers</li>
                    <li>Use visual aids alongside audio learning</li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-xl p-4 shadow-md border border-red-500/30">
                  <h3 className="text-lg font-semibold text-red-200 mb-3">Supporting Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-300">
                    <li>Count objects up to 10 in daily activities</li>
                    <li>Play number recognition games with higher numbers</li>
                    <li>Write numbers in different creative ways</li>
                    <li>Create number cards with corresponding objects</li>
                    <li>Practice counting sequences through movement</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-xl font-bold text-red-100 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Additional Resources
              </h2>
              <div className="bg-black/50 rounded-xl p-4 shadow-md border border-red-500/30">
                <ul className="list-disc list-inside space-y-2 text-red-300">
                  <li>Use counting books that go up to 10</li>
                  <li>Download number recognition apps for higher numbers</li>
                  <li>Create a number wall for numbers 5-10</li>
                  <li>Use number songs and videos</li>
                  <li>Practice with number puzzles and games</li>
                </ul>
              </div>
            </section>

            {/* Progress Tracking */}
            <section className="mt-8 bg-red-900/30 rounded-xl p-6 border border-red-500/30">
              <h2 className="text-xl font-bold text-red-100 mb-4">Tracking Progress</h2>
              <div className="space-y-4 text-red-200">
                <p>Keep track of:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Recognition of numbers 5-10</li>
                  <li>Speed of number identification</li>
                  <li>Confidence in matching sounds to numbers</li>
                  <li>Ability to count objects up to 10</li>
                  <li>Understanding of number sequence</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberSoundMatchingTenTips; 
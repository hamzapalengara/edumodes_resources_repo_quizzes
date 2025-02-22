import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberSoundMatchingTwentyTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-pink-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-900 text-center">
            Number Sound Matching (11-20) - Tips and Strategies
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200">
            {/* For Students */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👨‍🎓</span> For Students
              </h2>
              <div className="grid gap-4">
                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-pink-200">
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">How to Play</h3>
                  <ul className="list-disc list-inside space-y-2 text-pink-800">
                    <li>Listen carefully to the number word when you click the speaker</li>
                    <li>Look for the matching number in the options</li>
                    <li>Take your time to think about teen numbers</li>
                    <li>Remember that teen numbers end with the digits 1-9</li>
                    <li>You can replay the sound as many times as you need</li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-pink-200">
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">Tips for Success</h3>
                  <ul className="list-disc list-inside space-y-2 text-pink-800">
                    <li>Practice saying the teen numbers out loud</li>
                    <li>Notice the pattern in teen numbers (eleven through nineteen)</li>
                    <li>Pay attention to similar-sounding numbers (13/30, 14/40, etc.)</li>
                    <li>Create a mental picture for each teen number</li>
                    <li>Use your fingers to count along with the numbers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* For Teachers/Parents */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👩‍🏫</span> For Teachers and Parents
              </h2>
              <div className="grid gap-4">
                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-pink-200">
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">Teaching Strategies</h3>
                  <ul className="list-disc list-inside space-y-2 text-pink-800">
                    <li>Explain the pattern of teen numbers (10 plus a digit)</li>
                    <li>Use manipulatives to show groups of ten plus extras</li>
                    <li>Practice pronunciation of teen numbers vs. tens</li>
                    <li>Create number stories involving teen numbers</li>
                    <li>Use real-life examples (ages, objects, etc.)</li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-pink-200">
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">Supporting Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-pink-800">
                    <li>Count objects in groups of ten plus extras</li>
                    <li>Write teen numbers in different creative ways</li>
                    <li>Play number recognition games with teen numbers</li>
                    <li>Create a number line from 11 to 20</li>
                    <li>Practice skip counting with teen numbers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Additional Resources
              </h2>
              <div className="bg-white/60 rounded-xl p-4 shadow-md border border-pink-200">
                <ul className="list-disc list-inside space-y-2 text-pink-800">
                  <li>Use teen number flashcards for quick practice</li>
                  <li>Download number recognition apps focusing on teens</li>
                  <li>Create a teen number wall display</li>
                  <li>Use songs that focus on teen numbers</li>
                  <li>Practice with teen number puzzles and games</li>
                </ul>
              </div>
            </section>

            {/* Progress Tracking */}
            <section className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Tracking Progress</h2>
              <div className="space-y-4 text-blue-800">
                <p>Monitor improvement in:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Recognition of teen numbers (11-19)</li>
                  <li>Understanding of twenty as 2 tens</li>
                  <li>Speed of number identification</li>
                  <li>Confidence with teen number patterns</li>
                  <li>Ability to distinguish similar-sounding numbers</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberSoundMatchingTwentyTips; 
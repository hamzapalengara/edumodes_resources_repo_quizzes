import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ObjectCountingFiveTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-pink-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-900 text-center">
            Count Objects and Match Numbers (1-5) - Tips and Strategies
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
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">How to Count Objects</h3>
                  <ul className="list-disc list-inside space-y-2 text-pink-800">
                    <li>Point to each object as you count</li>
                    <li>Count slowly and carefully</li>
                    <li>Say each number out loud</li>
                    <li>Make sure you count every object once</li>
                    <li>Double-check your count before selecting an answer</li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-pink-200">
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">Tips for Success</h3>
                  <ul className="list-disc list-inside space-y-2 text-pink-800">
                    <li>Use your finger to touch each object as you count</li>
                    <li>Count from left to right</li>
                    <li>Take your time - it's not a race!</li>
                    <li>If you make a mistake, start over</li>
                    <li>Practice counting objects at home</li>
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
                    <li>Model counting objects one at a time</li>
                    <li>Use physical objects for hands-on practice</li>
                    <li>Practice counting in different arrangements</li>
                    <li>Encourage one-to-one correspondence</li>
                    <li>Make counting a fun daily activity</li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-pink-200">
                  <h3 className="text-lg font-semibold text-pink-900 mb-3">Supporting Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-pink-800">
                    <li>Count objects during daily routines</li>
                    <li>Play counting games with toys</li>
                    <li>Create counting songs and rhymes</li>
                    <li>Draw and count pictures together</li>
                    <li>Practice writing numbers 1-5</li>
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
                  <li>Use counting books for story time</li>
                  <li>Create a number wall with objects</li>
                  <li>Make number cards with dots</li>
                  <li>Use counting apps and games</li>
                  <li>Practice with number puzzles</li>
                </ul>
              </div>
            </section>

            {/* Progress Tracking */}
            <section className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Tracking Progress</h2>
              <div className="space-y-4 text-blue-800">
                <p>Monitor improvement in:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Counting accuracy</li>
                  <li>One-to-one correspondence</li>
                  <li>Number recognition</li>
                  <li>Counting confidence</li>
                  <li>Speed of counting</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ObjectCountingFiveTips; 
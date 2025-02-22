import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ObjectCountingTenTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-emerald-50 to-cyan-100">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-emerald-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 text-center">
            Count Objects and Match Numbers (5-10) - Tips and Strategies
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-200">
            {/* For Students */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👨‍🎓</span> For Students
              </h2>
              <div className="grid gap-4">
                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-emerald-200">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-3">How to Count Objects</h3>
                  <ul className="list-disc list-inside space-y-2 text-emerald-800">
                    <li>Start by counting the first 5 objects</li>
                    <li>Then continue counting the remaining objects</li>
                    <li>Point to each object as you count</li>
                    <li>Say each number out loud</li>
                    <li>Double-check your count before selecting an answer</li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-emerald-200">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-3">Tips for Success</h3>
                  <ul className="list-disc list-inside space-y-2 text-emerald-800">
                    <li>Group objects in sets of 5 to make counting easier</li>
                    <li>Count from left to right</li>
                    <li>Take your time - accuracy is more important than speed</li>
                    <li>If you make a mistake, start over from the beginning</li>
                    <li>Practice counting objects at home up to 10</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* For Teachers/Parents */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👩‍🏫</span> For Teachers and Parents
              </h2>
              <div className="grid gap-4">
                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-emerald-200">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-3">Teaching Strategies</h3>
                  <ul className="list-disc list-inside space-y-2 text-emerald-800">
                    <li>Teach grouping objects in sets of 5</li>
                    <li>Use physical objects for hands-on practice</li>
                    <li>Practice counting backwards from 10</li>
                    <li>Encourage one-to-one correspondence</li>
                    <li>Make counting a fun daily activity</li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-xl p-4 shadow-md border border-emerald-200">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-3">Supporting Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-emerald-800">
                    <li>Count objects during daily routines</li>
                    <li>Play counting games with groups of objects</li>
                    <li>Create counting songs and rhymes</li>
                    <li>Draw and count pictures together</li>
                    <li>Practice writing numbers 5-10</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Additional Resources
              </h2>
              <div className="bg-white/60 rounded-xl p-4 shadow-md border border-emerald-200">
                <ul className="list-disc list-inside space-y-2 text-emerald-800">
                  <li>Use counting books that go up to 10</li>
                  <li>Create a number wall with objects</li>
                  <li>Make number cards with groups of objects</li>
                  <li>Use counting apps and games</li>
                  <li>Practice with number puzzles</li>
                </ul>
              </div>
            </section>

            {/* Progress Tracking */}
            <section className="mt-8 bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h2 className="text-xl font-bold text-cyan-900 mb-4">Tracking Progress</h2>
              <div className="space-y-4 text-cyan-800">
                <p>Monitor improvement in:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Counting accuracy for numbers 5-10</li>
                  <li>Ability to group objects in sets of 5</li>
                  <li>Number recognition</li>
                  <li>Counting confidence</li>
                  <li>Speed and accuracy balance</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ObjectCountingTenTips; 
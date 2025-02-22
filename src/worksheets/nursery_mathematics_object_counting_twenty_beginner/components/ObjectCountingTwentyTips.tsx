import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ObjectCountingTwentyTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-purple-800/50 backdrop-blur-md shadow-lg border border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-100 text-center">
            Count Objects and Match Numbers (11-20) - Tips and Strategies
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-500/20">
            {/* For Students */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-purple-100 mb-4 flex items-center gap-2">
                <span className="text-2xl">👨‍🎓</span> For Students
              </h2>
              <div className="grid gap-4">
                <div className="bg-purple-800/50 rounded-xl p-4 shadow-md border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-purple-100 mb-3">How to Count Objects</h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-200">
                    <li>First count out 10 objects</li>
                    <li>Then count the remaining objects</li>
                    <li>Add the remaining count to 10</li>
                    <li>Double-check your total count</li>
                    <li>Take your time to count accurately</li>
                  </ul>
                </div>

                <div className="bg-purple-800/50 rounded-xl p-4 shadow-md border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-purple-100 mb-3">Tips for Success</h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-200">
                    <li>Group objects into sets of 10 plus extras</li>
                    <li>Count from left to right in rows</li>
                    <li>Say teen numbers clearly (thirteen, fourteen, etc.)</li>
                    <li>If you make a mistake, start over from 10</li>
                    <li>Practice counting objects at home up to 20</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* For Teachers/Parents */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-purple-100 mb-4 flex items-center gap-2">
                <span className="text-2xl">👩‍🏫</span> For Teachers and Parents
              </h2>
              <div className="grid gap-4">
                <div className="bg-purple-800/50 rounded-xl p-4 shadow-md border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-purple-100 mb-3">Teaching Strategies</h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-200">
                    <li>Teach the concept of 'ten plus more'</li>
                    <li>Use physical objects for hands-on practice</li>
                    <li>Practice teen number pronunciation</li>
                    <li>Show the pattern in teen numbers</li>
                    <li>Make connections between quantities and numerals</li>
                  </ul>
                </div>

                <div className="bg-purple-800/50 rounded-xl p-4 shadow-md border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-purple-100 mb-3">Supporting Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-purple-200">
                    <li>Create counting games with teen numbers</li>
                    <li>Use ten-frames with additional objects</li>
                    <li>Practice writing teen numbers</li>
                    <li>Sort objects into groups of ten plus extras</li>
                    <li>Use number lines up to 20</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-xl font-bold text-purple-100 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Additional Resources
              </h2>
              <div className="bg-purple-800/50 rounded-xl p-4 shadow-md border border-purple-500/30">
                <ul className="list-disc list-inside space-y-2 text-purple-200">
                  <li>Use counting books that go up to 20</li>
                  <li>Create a teen numbers wall display</li>
                  <li>Make number cards with corresponding objects</li>
                  <li>Use counting apps and games</li>
                  <li>Practice with teen number puzzles</li>
                </ul>
              </div>
            </section>

            {/* Progress Tracking */}
            <section className="mt-8 bg-purple-700/30 rounded-xl p-6 border border-purple-500/30">
              <h2 className="text-xl font-bold text-purple-100 mb-4">Tracking Progress</h2>
              <div className="space-y-4 text-purple-200">
                <p>Monitor improvement in:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Understanding of teen numbers (11-19)</li>
                  <li>Ability to group objects into tens and extras</li>
                  <li>Speed and accuracy of counting</li>
                  <li>Recognition of written teen numbers</li>
                  <li>Confidence with larger quantities</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ObjectCountingTwentyTips; 
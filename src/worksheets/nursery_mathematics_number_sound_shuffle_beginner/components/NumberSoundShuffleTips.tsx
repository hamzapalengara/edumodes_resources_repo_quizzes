import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberSoundShuffleTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-900 text-center">
            Number Sound Shuffle - Tips and Strategies
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            {/* For Students */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">👨‍🎓</span> For Students
              </h2>
              <div className="grid gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md border border-pink-100">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">How to Play</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Listen carefully to the number word when it's spoken</li>
                    <li>The numbers will appear in a different order each time</li>
                    <li>Look at all the number options before choosing</li>
                    <li>Click the speaker button if you need to hear the number again</li>
                    <li>Take your time to make the right choice</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md border border-pink-100">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">Tips for Success</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Say the number out loud after you hear it</li>
                    <li>Practice writing the numbers as you learn them</li>
                    <li>Connect the spoken word with the written number</li>
                    <li>Don't rush - accuracy is more important than speed</li>
                    <li>Celebrate each correct answer!</li>
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
                <div className="bg-white rounded-xl p-4 shadow-md border border-pink-100">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">Teaching Strategies</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>The random order helps prevent memorization by position</li>
                    <li>Encourage active listening skills</li>
                    <li>Use physical objects to represent numbers</li>
                    <li>Practice number words in daily conversations</li>
                    <li>Create number songs and rhymes</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md border border-pink-100">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3">Supporting Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Play number recognition games in random order</li>
                    <li>Practice writing numbers in different sequences</li>
                    <li>Create number cards with corresponding objects</li>
                    <li>Use movement activities with number words</li>
                    <li>Incorporate numbers into storytelling</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section>
              <h2 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Additional Resources
              </h2>
              <div className="bg-white rounded-xl p-4 shadow-md border border-pink-100">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use number books with audio components</li>
                  <li>Download number recognition apps</li>
                  <li>Create a number wall with written and spoken practice</li>
                  <li>Use number songs and videos</li>
                  <li>Practice with interactive number games</li>
                </ul>
              </div>
            </section>

            {/* Progress Tracking */}
            <section className="mt-8 bg-pink-50 rounded-xl p-6 border border-pink-100">
              <h2 className="text-xl font-bold text-pink-900 mb-4">Tracking Progress</h2>
              <div className="space-y-4 text-gray-700">
                <p>Monitor improvement in:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Speed of number recognition</li>
                  <li>Accuracy in random sequences</li>
                  <li>Confidence in number identification</li>
                  <li>Connection between spoken and written numbers</li>
                  <li>Overall number fluency</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberSoundShuffleTips; 
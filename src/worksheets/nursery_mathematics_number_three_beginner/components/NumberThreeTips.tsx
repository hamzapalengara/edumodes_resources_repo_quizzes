import React from 'react';

const NumberThreeTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 px-0 md:p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-6">
          Tips for Learning Number 3
        </h1>

        <div className="space-y-6">
          {/* Visual Recognition */}
          <section className="bg-blue-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              <span className="mr-2">👀</span>
              Visual Recognition
            </h2>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              <li>Number 3 looks like two stacked smiles</li>
              <li>It has three curves: top, middle, and bottom</li>
              <li>All curves face the same direction (to the right)</li>
              <li>Think of it as a butterfly's side view</li>
            </ul>
          </section>

          {/* Physical Activities */}
          <section className="bg-green-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              <span className="mr-2">🏃‍♂️</span>
              Learning Through Movement
            </h2>
            <ul className="list-disc list-inside space-y-2 text-green-700">
              <li>Draw number 3 in the air with your finger</li>
              <li>Walk in the shape of number 3</li>
              <li>Make groups of three objects</li>
              <li>Practice jumping three times while counting</li>
            </ul>
          </section>

          {/* Real-World Examples */}
          <section className="bg-purple-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">
              <span className="mr-2">🌎</span>
              Finding 3 in Your World
            </h2>
            <ul className="list-disc list-inside space-y-2 text-purple-700">
              <li>Traffic lights have three colors</li>
              <li>A triangle has three corners</li>
              <li>Look for groups of three in nature (leaves, petals)</li>
              <li>Count family members or pets in groups of three</li>
            </ul>
          </section>

          {/* Writing Practice */}
          <section className="bg-pink-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-pink-700 mb-4">
              <span className="mr-2">✍️</span>
              Writing Practice Tips
            </h2>
            <ul className="list-disc list-inside space-y-2 text-pink-700">
              <li>Start from the top and make three smooth curves</li>
              <li>Practice on a lined paper to maintain size</li>
              <li>Use dots as guides for the curves</li>
              <li>Take breaks between practice sessions</li>
            </ul>
          </section>

          {/* Fun Activities */}
          <section className="bg-yellow-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-yellow-700 mb-4">
              <span className="mr-2">🎮</span>
              Fun Learning Activities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-yellow-700">
              <li>Play "I Spy" with groups of three</li>
              <li>Create art using three colors</li>
              <li>Tell stories with three characters</li>
              <li>Sing songs that involve counting to three</li>
            </ul>
          </section>

          {/* Parent Tips */}
          <section className="bg-orange-50 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-orange-700 mb-4">
              <span className="mr-2">💝</span>
              Tips for Parents
            </h2>
            <ul className="list-disc list-inside space-y-2 text-orange-700">
              <li>Be patient and encouraging</li>
              <li>Make learning fun and interactive</li>
              <li>Celebrate small achievements</li>
              <li>Practice regularly but keep sessions short</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberThreeTips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordOppositesTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
            Tips for Learning Opposites
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Learning Strategy */}
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Study Strategies
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">1.</span>
                  Look for opposites in your daily school activities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">2.</span>
                  Create flashcards with pictures for each word pair
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">3.</span>
                  Practice using opposites in your writing assignments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">4.</span>
                  Share examples with your classmates during group work
                </li>
              </ul>
            </div>

            {/* Fun Learning Activities */}
            <div className="bg-purple-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎨</span> Classroom Activities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">✏️</span> Word Journal
                  </h3>
                  <p className="text-gray-600">
                    Keep a notebook of opposite pairs you find in your textbooks
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎯</span> Memory Match
                  </h3>
                  <p className="text-gray-600">
                    Play matching games with opposite word cards
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎨</span> Picture Dictionary
                  </h3>
                  <p className="text-gray-600">
                    Draw pictures to show each pair of opposites
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">📝</span> Story Writing
                  </h3>
                  <p className="text-gray-600">
                    Write stories using opposite pairs in your sentences
                  </p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">✋</span> Learning Reminders
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">📝</span>
                  <div>
                    <p className="font-bold text-red-600">Check Your Work</p>
                    <p className="text-gray-600">Make sure you've matched the correct pairs of opposites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">🤔</span>
                  <div>
                    <p className="font-bold text-red-600">Think It Through</p>
                    <p className="text-gray-600">Take time to understand why words are opposites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <p className="font-bold text-red-600">Look for Context</p>
                    <p className="text-gray-600">Think about how words are used in different situations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Tips */}
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Study Tips
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Reading Time</h3>
                  <p className="text-gray-600">
                    Look for opposite words while reading your books
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Word Wall</h3>
                  <p className="text-gray-600">
                    Create a display of opposite pairs in your study area
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Practice Time</h3>
                  <p className="text-gray-600">
                    Set aside time each day to practice with flashcards
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Group Study</h3>
                  <p className="text-gray-600">
                    Practice with friends by quizzing each other
                  </p>
                </div>
              </div>
            </div>

            {/* Parent/Teacher Section */}
            <div className="bg-green-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">👩‍🏫</span> Teacher's Corner
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2">Learning Plan</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Start with familiar classroom examples</li>
                    <li>Use visual aids and real objects</li>
                    <li>Encourage active participation</li>
                    <li>Celebrate learning achievements</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2">Extension Activities</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Create opposite word scavenger hunts</li>
                    <li>Use role-play to demonstrate opposites</li>
                    <li>Make opposite word art projects</li>
                    <li>Create class books about opposites</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesTips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const QUESTIONS = [
  {
    id: 1,
    count: 1,
    options: ['1', '2', '3', '4'],
    objects: ['🌟'],
  },
  {
    id: 2,
    count: 2,
    options: ['1', '2', '4', '3'],
    objects: ['🍎', '🍎'],
  },
  {
    id: 3,
    count: 3,
    options: ['4', '2', '3', '1'],
    objects: ['🐶', '🐶', '🐶'],
  },
  {
    id: 4,
    count: 4,
    options: ['2', '4', '1', '3'],
    objects: ['🎈', '🎈', '🎈', '🎈'],
  },
  {
    id: 5,
    count: 5,
    options: ['3', '4', '5', '2'],
    objects: ['🦋', '🦋', '🦋', '🦋', '🦋'],
  },
  {
    id: 6,
    count: 2,
    options: ['3', '2', '1', '4'],
    objects: ['🌸', '🌸'],
  },
  {
    id: 7,
    count: 4,
    options: ['4', '3', '5', '2'],
    objects: ['🐠', '🐠', '🐠', '🐠'],
  },
  {
    id: 8,
    count: 1,
    options: ['2', '3', '1', '5'],
    objects: ['🎁'],
  },
  {
    id: 9,
    count: 3,
    options: ['4', '3', '2', '1'],
    objects: ['🌈', '🌈', '🌈'],
  },
  {
    id: 10,
    count: 5,
    options: ['4', '2', '5', '3'],
    objects: ['⭐', '⭐', '⭐', '⭐', '⭐'],
  },
];

const ObjectCountingFiveAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-pink-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-900 text-center">
            Count Objects and Match Numbers (1-5) - Answer Key
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200">
            <div className="grid gap-6">
              {QUESTIONS.map((question) => (
                <div
                  key={question.id}
                  className="bg-white/60 rounded-xl p-4 shadow-md border border-pink-200"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <div className="bg-pink-100 rounded-lg p-3 inline-block border border-pink-200">
                        <span className="text-lg font-semibold text-pink-900">
                          Question {question.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <span className="font-medium text-pink-900">Objects:</span>
                          <div className="flex gap-2 text-3xl">
                            {question.objects.map((object, index) => (
                              <span key={index}>{object}</span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-pink-900">Correct Count:</span>
                          <span className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded-lg border border-green-200">
                            {question.count}
                          </span>
                        </div>

                        <div>
                          <p className="font-medium text-pink-900 mb-2">Options:</p>
                          <div className="flex flex-wrap gap-2">
                            {question.options.map((option, index) => (
                              <div
                                key={index}
                                className={`
                                  px-4 py-2 rounded-lg font-semibold
                                  ${option === question.count.toString()
                                    ? 'bg-green-100 text-green-800 border-2 border-green-200'
                                    : 'bg-gray-100 text-gray-600 border border-gray-200'
                                  }
                                `}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips Section */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Teaching Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-blue-900">
                <li>Questions appear in random order for each attempt</li>
                <li>Help students count objects one by one</li>
                <li>Encourage using fingers to point while counting</li>
                <li>Practice counting in sequence (1, 2, 3, 4, 5)</li>
                <li>Use real objects for hands-on practice</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ObjectCountingFiveAnswerKey; 
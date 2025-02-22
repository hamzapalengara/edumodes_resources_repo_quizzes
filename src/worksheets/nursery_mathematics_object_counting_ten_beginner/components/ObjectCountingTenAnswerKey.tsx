import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const QUESTIONS = [
  {
    id: 1,
    count: 5,
    options: ['5', '6', '7', '8'],
    objects: ['🧊', '🧊', '🧊', '🧊', '🧊'],
  },
  {
    id: 2,
    count: 6,
    options: ['5', '6', '8', '7'],
    objects: ['🌿', '🌿', '🌿', '🌿', '🌿', '🌿'],
  },
  {
    id: 3,
    count: 7,
    options: ['8', '6', '7', '5'],
    objects: ['🧊', '🧊', '🧊', '🧊', '🧊', '🧊', '🧊'],
  },
  {
    id: 4,
    count: 8,
    options: ['6', '8', '7', '9'],
    objects: ['🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿'],
  },
  {
    id: 5,
    count: 9,
    options: ['7', '8', '9', '10'],
    objects: ['🧊', '🧊', '🧊', '🧊', '🧊', '🧊', '🧊', '🧊', '🧊'],
  },
  {
    id: 6,
    count: 10,
    options: ['8', '9', '10', '7'],
    objects: ['🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿'],
  },
  {
    id: 7,
    count: 6,
    options: ['7', '5', '6', '8'],
    objects: ['🧊', '🧊', '🧊', '🧊', '🧊', '🧊'],
  },
  {
    id: 8,
    count: 8,
    options: ['9', '7', '8', '6'],
    objects: ['🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿'],
  },
  {
    id: 9,
    count: 7,
    options: ['6', '7', '8', '9'],
    objects: ['🧊', '🧊', '🧊', '🧊', '🧊', '🧊', '🧊'],
  },
  {
    id: 10,
    count: 9,
    options: ['8', '10', '9', '7'],
    objects: ['🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿', '🌿'],
  },
];

const ObjectCountingTenAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-emerald-50 to-cyan-100">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-emerald-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 text-center">
            Count Objects and Match Numbers (5-10) - Answer Key
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-200">
            <div className="grid gap-6">
              {QUESTIONS.map((question) => (
                <div
                  key={question.id}
                  className="bg-white/60 rounded-xl p-4 shadow-md border border-emerald-200"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <div className="bg-emerald-100 rounded-lg p-3 inline-block border border-emerald-200">
                        <span className="text-lg font-semibold text-emerald-900">
                          Question {question.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <span className="font-medium text-emerald-900">Objects:</span>
                          <div className="flex gap-2 text-3xl">
                            {question.objects.map((object, index) => (
                              <span key={index}>{object}</span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-emerald-900">Correct Count:</span>
                          <span className="bg-emerald-100 text-emerald-800 font-bold px-4 py-2 rounded-lg border border-emerald-200">
                            {question.count}
                          </span>
                        </div>

                        <div>
                          <p className="font-medium text-emerald-900 mb-2">Options:</p>
                          <div className="flex flex-wrap gap-2">
                            {question.options.map((option, index) => (
                              <div
                                key={index}
                                className={`
                                  px-4 py-2 rounded-lg font-semibold
                                  ${option === question.count.toString()
                                    ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-200'
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
            <div className="mt-8 bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h2 className="text-xl font-bold text-cyan-900 mb-4">Teaching Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-cyan-900">
                <li>Questions appear in random order for each attempt</li>
                <li>Help students count objects in groups of 5 first</li>
                <li>Encourage using fingers to point while counting</li>
                <li>Practice counting in sequence (5, 6, 7, 8, 9, 10)</li>
                <li>Use real objects for hands-on practice</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ObjectCountingTenAnswerKey; 
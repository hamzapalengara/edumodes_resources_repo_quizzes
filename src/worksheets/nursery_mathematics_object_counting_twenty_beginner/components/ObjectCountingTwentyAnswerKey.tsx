import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const QUESTIONS = [
  {
    id: 1,
    count: 11,
    options: ['11', '12', '13', '14'],
    objects: Array(11).fill('💎'),
  },
  {
    id: 2,
    count: 12,
    options: ['11', '12', '14', '13'],
    objects: Array(12).fill('💎'),
  },
  {
    id: 3,
    count: 13,
    options: ['14', '12', '13', '11'],
    objects: Array(13).fill('💎'),
  },
  {
    id: 4,
    count: 14,
    options: ['12', '14', '11', '13'],
    objects: Array(14).fill('💎'),
  },
  {
    id: 5,
    count: 15,
    options: ['16', '15', '13', '14'],
    objects: Array(15).fill('💎'),
  },
  {
    id: 6,
    count: 16,
    options: ['15', '17', '16', '14'],
    objects: Array(16).fill('💎'),
  },
  {
    id: 7,
    count: 17,
    options: ['16', '18', '15', '17'],
    objects: Array(17).fill('💎'),
  },
  {
    id: 8,
    count: 18,
    options: ['17', '19', '18', '16'],
    objects: Array(18).fill('💎'),
  },
  {
    id: 9,
    count: 19,
    options: ['18', '19', '17', '20'],
    objects: Array(19).fill('💎'),
  },
  {
    id: 10,
    count: 20,
    options: ['19', '18', '20', '17'],
    objects: Array(20).fill('💎'),
  },
];

const ObjectCountingTwentyAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-purple-800/50 backdrop-blur-md shadow-lg border border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-100 text-center">
            Count Objects and Match Numbers (11-20) - Answer Key
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-500/20">
            <div className="grid gap-6">
              {QUESTIONS.map((question) => (
                <div
                  key={question.id}
                  className="bg-purple-800/50 rounded-xl p-4 shadow-md border border-purple-500/30"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <div className="bg-purple-700/50 rounded-lg p-3 inline-block border border-purple-500/30">
                        <span className="text-lg font-semibold text-purple-100">
                          Question {question.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <span className="font-medium text-purple-100">Objects:</span>
                          <div className="flex flex-wrap gap-2 text-3xl">
                            {question.objects.map((object, index) => (
                              <span key={index}>{object}</span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-purple-100">Correct Count:</span>
                          <span className="bg-purple-600/50 text-purple-100 font-bold px-4 py-2 rounded-lg border border-purple-500/30">
                            {question.count}
                          </span>
                        </div>

                        <div>
                          <p className="font-medium text-purple-100 mb-2">Options:</p>
                          <div className="flex flex-wrap gap-2">
                            {question.options.map((option, index) => (
                              <div
                                key={index}
                                className={`
                                  px-4 py-2 rounded-lg font-semibold
                                  ${option === question.count.toString()
                                    ? 'bg-purple-600/50 text-purple-100 border-2 border-purple-400/30'
                                    : 'bg-purple-800/50 text-purple-200 border border-purple-500/30'
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
            <div className="mt-8 bg-purple-700/30 rounded-xl p-6 border border-purple-500/30">
              <h2 className="text-xl font-bold text-purple-100 mb-4">Teaching Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-purple-200">
                <li>Help students group objects in sets of 10 plus extras</li>
                <li>Practice counting teen numbers clearly and distinctly</li>
                <li>Use visual aids to reinforce number recognition</li>
                <li>Make connections between spoken and written numbers</li>
                <li>Celebrate progress and provide positive reinforcement</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ObjectCountingTwentyAnswerKey; 
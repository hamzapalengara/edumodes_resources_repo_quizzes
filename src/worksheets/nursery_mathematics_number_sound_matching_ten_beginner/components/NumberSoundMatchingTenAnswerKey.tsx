import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const QUESTIONS = [
  { id: 1, word: 'five', number: '5', options: ['5', '6', '7', '8'] },
  { id: 2, word: 'six', number: '6', options: ['5', '6', '8', '7'] },
  { id: 3, word: 'seven', number: '7', options: ['8', '6', '7', '5'] },
  { id: 4, word: 'eight', number: '8', options: ['6', '8', '5', '7'] },
  { id: 5, word: 'nine', number: '9', options: ['7', '9', '8', '10'] },
  { id: 6, word: 'ten', number: '10', options: ['8', '9', '10', '7'] },
];

const NumberSoundMatchingTenAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-black/50 backdrop-blur-md shadow-lg border border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-red-100 text-center">
            Number Sound Matching (5-10) - Answer Key
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-500/20">
            <div className="grid gap-6">
              {QUESTIONS.map((question) => (
                <div
                  key={question.id}
                  className="bg-black/50 rounded-xl p-4 shadow-md border border-red-500/30"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <div className="bg-red-900/50 rounded-lg p-3 inline-block border border-red-500/30">
                        <span className="text-lg font-semibold text-red-100">
                          Question {question.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col gap-2">
                        <p className="text-red-200">
                          <span className="font-medium">Sound:</span>{' '}
                          <span className="text-red-400 font-semibold">"{question.word}"</span>
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-red-200">Correct Answer:</span>
                          <span className="bg-red-900/50 text-red-300 font-bold px-4 py-2 rounded-lg border border-red-500/30">
                            {question.number}
                          </span>
                        </div>

                        <div className="mt-2">
                          <p className="font-medium text-red-200 mb-2">Options:</p>
                          <div className="flex flex-wrap gap-2">
                            {question.options.map((option, index) => (
                              <div
                                key={index}
                                className={`
                                  px-4 py-2 rounded-lg font-semibold
                                  ${option === question.number
                                    ? 'bg-red-900/50 text-red-300 border-2 border-red-500/30'
                                    : 'bg-black/50 text-slate-300 border border-red-500/30'
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
            <div className="mt-8 bg-red-900/30 rounded-xl p-6 border border-red-500/30">
              <h2 className="text-xl font-bold text-red-100 mb-4">Teaching Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-red-200">
                <li>Focus on one number at a time before moving to multiple choices</li>
                <li>Practice saying the numbers out loud together</li>
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

export default NumberSoundMatchingTenAnswerKey; 
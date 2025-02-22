import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const QUESTIONS = [
  { id: 1, word: 'eleven', number: '11', options: ['11', '12', '13', '14'] },
  { id: 2, word: 'twelve', number: '12', options: ['11', '12', '14', '13'] },
  { id: 3, word: 'thirteen', number: '13', options: ['14', '12', '13', '11'] },
  { id: 4, word: 'fourteen', number: '14', options: ['12', '14', '11', '13'] },
  { id: 5, word: 'fifteen', number: '15', options: ['16', '15', '13', '14'] },
  { id: 6, word: 'sixteen', number: '16', options: ['15', '17', '16', '14'] },
  { id: 7, word: 'seventeen', number: '17', options: ['16', '18', '15', '17'] },
  { id: 8, word: 'eighteen', number: '18', options: ['17', '19', '18', '16'] },
  { id: 9, word: 'nineteen', number: '19', options: ['18', '19', '17', '20'] },
  { id: 10, word: 'twenty', number: '20', options: ['19', '18', '20', '17'] },
];

const NumberSoundMatchingTwentyAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-blue-100">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-pink-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-900 text-center">
            Number Sound Matching (11-20) - Answer Key
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
                      <div className="flex flex-col gap-2">
                        <p className="text-pink-900">
                          <span className="font-medium">Sound:</span>{' '}
                          <span className="text-blue-600 font-semibold">"{question.word}"</span>
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-pink-900">Correct Answer:</span>
                          <span className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded-lg border border-green-200">
                            {question.number}
                          </span>
                        </div>

                        <div className="mt-2">
                          <p className="font-medium text-pink-900 mb-2">Options:</p>
                          <div className="flex flex-wrap gap-2">
                            {question.options.map((option, index) => (
                              <div
                                key={index}
                                className={`
                                  px-4 py-2 rounded-lg font-semibold
                                  ${option === question.number
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
                <li>Practice saying teen numbers clearly and distinctly</li>
                <li>Help students understand the pattern of "-teen" numbers</li>
                <li>Use visual aids to reinforce number recognition</li>
                <li>Make connections between spoken and written numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberSoundMatchingTwentyAnswerKey; 
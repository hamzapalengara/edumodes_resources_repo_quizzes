import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const BASE_QUESTIONS = [
  { id: 1, word: 'one', number: '1', options: ['1', '2', '3', '4'] },
  { id: 2, word: 'two', number: '2', options: ['1', '2', '4', '3'] },
  { id: 3, word: 'three', number: '3', options: ['4', '2', '3', '1'] },
  { id: 4, word: 'four', number: '4', options: ['2', '4', '1', '3'] },
  { id: 5, word: 'five', number: '5', options: ['6', '5', '3', '4'] },
  { id: 6, word: 'six', number: '6', options: ['5', '7', '6', '4'] },
  { id: 7, word: 'seven', number: '7', options: ['6', '8', '5', '7'] },
  { id: 8, word: 'eight', number: '8', options: ['7', '9', '8', '6'] },
  { id: 9, word: 'nine', number: '9', options: ['8', '9', '7', '6'] },
  { id: 10, word: 'ten', number: '10', options: ['9', '8', '10', '7'] },
];

const NumberSoundShuffleAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-900 text-center">
            Number Sound Shuffle - Answer Key
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="grid gap-6">
              {BASE_QUESTIONS.map((question) => (
                <div
                  key={question.id}
                  className="bg-white rounded-xl p-4 shadow-md border border-pink-100"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <div className="bg-pink-100 rounded-lg p-3 inline-block">
                        <span className="text-lg font-semibold text-pink-900">
                          Number {question.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col gap-2">
                        <p className="text-gray-700">
                          <span className="font-medium">Sound:</span>{' '}
                          <span className="text-pink-600 font-semibold">"{question.word}"</span>
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-700">Correct Answer:</span>
                          <span className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded-lg">
                            {question.number}
                          </span>
                        </div>

                        <div className="mt-2">
                          <p className="font-medium text-gray-700 mb-2">Options:</p>
                          <div className="flex flex-wrap gap-2">
                            {question.options.map((option, index) => (
                              <div
                                key={index}
                                className={`
                                  px-4 py-2 rounded-lg font-semibold
                                  ${option === question.number
                                    ? 'bg-green-100 text-green-800 border-2 border-green-300'
                                    : 'bg-gray-100 text-gray-600'
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
            <div className="mt-8 bg-pink-50 rounded-xl p-6 border border-pink-100">
              <h2 className="text-xl font-bold text-pink-900 mb-4">Teaching Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-pink-900">
                <li>Numbers appear in random order for each attempt</li>
                <li>Encourage students to listen carefully to the number sounds</li>
                <li>Practice saying the numbers out loud together</li>
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

export default NumberSoundShuffleAnswerKey; 
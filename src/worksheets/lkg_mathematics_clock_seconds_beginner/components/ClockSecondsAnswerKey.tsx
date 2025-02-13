import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TIME_ANSWERS = [
  {
    seconds: 3,
    explanation: "The seconds hand moves 3 tick marks, taking 3 seconds to complete the movement."
  },
  {
    seconds: 5,
    explanation: "The seconds hand moves 5 tick marks, taking 5 seconds to complete the movement."
  },
  {
    seconds: 8,
    explanation: "The seconds hand moves 8 tick marks, taking 8 seconds to complete the movement."
  },
  {
    seconds: 4,
    explanation: "The seconds hand moves 4 tick marks, taking 4 seconds to complete the movement."
  },
  {
    seconds: 6,
    explanation: "The seconds hand moves 6 tick marks, taking 6 seconds to complete the movement."
  },
  {
    seconds: 10,
    explanation: "The seconds hand moves 10 tick marks, taking 10 seconds to complete the movement."
  },
  {
    seconds: 7,
    explanation: "The seconds hand moves 7 tick marks, taking 7 seconds to complete the movement."
  },
  {
    seconds: 9,
    explanation: "The seconds hand moves 9 tick marks, taking 9 seconds to complete the movement."
  },
  {
    seconds: 2,
    explanation: "The seconds hand moves 2 tick marks, taking 2 seconds to complete the movement."
  },
  {
    seconds: 12,
    explanation: "The seconds hand moves 12 tick marks, taking 12 seconds to complete the movement."
  }
];

const ClockSecondsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-100 mb-6">
          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
            Understanding Seconds on a Clock
          </h1>
          
          <div className="space-y-4 text-gray-700">
            <p>
              The seconds hand on a clock:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Moves once every second</li>
              <li>Makes a complete circle in 60 seconds</li>
              <li>Each tick mark represents one second</li>
              <li>You can count the seconds by counting the tick marks the hand passes</li>
            </ul>
          </div>
        </div>

        {/* Answers */}
        <div className="space-y-4">
          {TIME_ANSWERS.map((answer, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-100"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-full md:w-32">
                  <div className="text-2xl font-mono font-bold text-orange-600 text-center md:text-left">
                    {answer.seconds} {answer.seconds === 1 ? 'second' : 'seconds'}
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700">
                    {answer.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-100 mt-6">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
            Tips for Counting Seconds
          </h2>
          
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm mt-0.5">
                1
              </span>
              <p>Count out loud as the seconds hand moves ("one, two, three...")</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm mt-0.5">
                2
              </span>
              <p>Watch the tick marks that the seconds hand passes</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm mt-0.5">
                3
              </span>
              <p>Remember that each tick mark equals one second</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm mt-0.5">
                4
              </span>
              <p>Practice counting at a steady pace - not too fast, not too slow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockSecondsAnswerKey; 
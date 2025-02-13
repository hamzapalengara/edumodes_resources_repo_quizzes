import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TIME_QUESTIONS = [
  {
    timeText: "2:30",
    explanation: "The hour hand should be between 2 and 3 because it's halfway to 3. The minute hand should point to 6 because 30 minutes is halfway around the clock."
  },
  {
    timeText: "5:45",
    explanation: "The hour hand should be between 5 and 6, closer to 6. The minute hand should point to 9 because 45 minutes is three-quarters around the clock."
  },
  {
    timeText: "9:15",
    explanation: "The hour hand should be just past 9. The minute hand should point to 3 because 15 minutes is a quarter around the clock."
  },
  {
    timeText: "11:00",
    explanation: "The hour hand should point exactly to 11. The minute hand should point to 12 because it's exactly on the hour."
  },
  {
    timeText: "4:30",
    explanation: "The hour hand should be between 4 and 5 because it's halfway to 5. The minute hand should point to 6 because 30 minutes is halfway around the clock."
  },
  {
    timeText: "7:15",
    explanation: "The hour hand should be just past 7. The minute hand should point to 3 because 15 minutes is a quarter around the clock."
  },
  {
    timeText: "1:45",
    explanation: "The hour hand should be between 1 and 2, closer to 2. The minute hand should point to 9 because 45 minutes is three-quarters around the clock."
  },
  {
    timeText: "8:00",
    explanation: "The hour hand should point exactly to 8. The minute hand should point to 12 because it's exactly on the hour."
  },
  {
    timeText: "10:30",
    explanation: "The hour hand should be between 10 and 11 because it's halfway to 11. The minute hand should point to 6 because 30 minutes is halfway around the clock."
  },
  {
    timeText: "3:15",
    explanation: "The hour hand should be just past 3. The minute hand should point to 3 because 15 minutes is a quarter around the clock."
  }
];

const ClockDigitalAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-100 mb-6">
          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
            Digital Clock Time - Answer Key
          </h1>
          
          <div className="space-y-4">
            {TIME_QUESTIONS.map((question, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-lg p-4 shadow-md border border-purple-100"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0 w-full md:w-32">
                    <div className="text-2xl font-mono font-bold text-purple-600 text-center md:text-left">
                      {question.timeText}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockDigitalAnswerKey; 
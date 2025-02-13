import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ClockSettingAnswerKey: React.FC = () => {
  const answers = [
    {
      question: "3 o'clock",
      answer: "Hour hand points to 3, minute hand points to 12"
    },
    {
      question: "Half past 6",
      answer: "Hour hand between 6 and 7, minute hand points to 6"
    },
    {
      question: "Quarter past 9",
      answer: "Hour hand just past 9, minute hand points to 3"
    },
    {
      question: "Quarter to 12",
      answer: "Hour hand between 11 and 12, minute hand points to 9"
    },
    {
      question: "Half past 4",
      answer: "Hour hand between 4 and 5, minute hand points to 6"
    },
    {
      question: "Quarter past 7",
      answer: "Hour hand just past 7, minute hand points to 3"
    },
    {
      question: "Quarter to 2",
      answer: "Hour hand between 1 and 2, minute hand points to 9"
    },
    {
      question: "8 o'clock",
      answer: "Hour hand points to 8, minute hand points to 12"
    },
    {
      question: "Half past 10",
      answer: "Hour hand between 10 and 11, minute hand points to 6"
    },
    {
      question: "Quarter past 5",
      answer: "Hour hand just past 5, minute hand points to 3"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-teal-100 mb-6">
          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 mb-6">
            Clock Setting - Answer Key
          </h1>
          
          <div className="space-y-4">
            {answers.map((item, index) => (
              <div key={index} className="bg-white/80 rounded-lg p-4 shadow-sm border border-teal-50">
                <div className="font-bold text-teal-700 mb-1">
                  Question {index + 1}: {item.question}
                </div>
                <div className="text-teal-600">
                  Answer: {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockSettingAnswerKey; 
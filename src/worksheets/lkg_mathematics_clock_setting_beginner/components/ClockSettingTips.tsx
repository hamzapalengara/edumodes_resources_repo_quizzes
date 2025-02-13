import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const ClockSettingTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding Clock Hands",
      points: [
        "The short hand is the hour hand (H)",
        "The long hand is the minute hand (M)",
        "Hour hand moves slowly between numbers",
        "Minute hand moves around the whole clock"
      ]
    },
    {
      title: "O'clock Times",
      points: [
        "Hour hand points exactly to a number",
        "Minute hand points to 12",
        "Example: 3 o'clock - hour hand at 3, minute hand at 12"
      ]
    },
    {
      title: "Half Past Times",
      points: [
        "Hour hand is halfway between two numbers",
        "Minute hand points to 6",
        "Example: Half past 6 - hour hand between 6 and 7, minute hand at 6"
      ]
    },
    {
      title: "Quarter Past Times",
      points: [
        "Hour hand is just past a number",
        "Minute hand points to 3",
        "Example: Quarter past 9 - hour hand just past 9, minute hand at 3"
      ]
    },
    {
      title: "Quarter To Times",
      points: [
        "Hour hand is just before the next number",
        "Minute hand points to 9",
        "Example: Quarter to 12 - hour hand between 11 and 12, minute hand at 9"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-teal-100 mb-6">
          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 mb-6">
            Tips for Setting Clock Times
          </h1>
          
          <div className="space-y-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-white/80 rounded-lg p-4 shadow-sm border border-teal-50">
                <h2 className="font-bold text-lg text-teal-700 mb-3">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-teal-600">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockSettingTips; 
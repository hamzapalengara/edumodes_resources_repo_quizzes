import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TIPS = [
  {
    title: "Understanding Digital Time",
    tips: [
      "Digital time is shown as hours:minutes (e.g., 2:30)",
      "The number before the colon is the hour (1-12)",
      "The number after the colon is the minutes (00-59)"
    ]
  },
  {
    title: "Reading Minutes",
    tips: [
      "Each number on the clock represents 5 minutes",
      "1 = 5 minutes",
      "2 = 10 minutes",
      "3 = 15 minutes (quarter past)",
      "6 = 30 minutes (half past)",
      "9 = 45 minutes (quarter to)",
      "12 = 0/60 minutes (o'clock)"
    ]
  },
  {
    title: "Hour Hand Position",
    tips: [
      "For exact hours (e.g., 3:00), the hour hand points exactly to the number",
      "For half hours (e.g., 3:30), the hour hand is halfway between numbers",
      "For quarter hours (e.g., 3:15), the hour hand is a quarter way to the next number",
      "The hour hand moves slowly and continuously between numbers"
    ]
  },
  {
    title: "Minute Hand Position",
    tips: [
      "The minute hand moves around the clock face once per hour",
      "It points to 12 for ':00' (o'clock)",
      "It points to 3 for ':15' (quarter past)",
      "It points to 6 for ':30' (half past)",
      "It points to 9 for ':45' (quarter to)"
    ]
  },
  {
    title: "Common Patterns",
    tips: [
      "':00' - Both hands align with numbers (minute hand at 12)",
      "':15' - Minute hand at 3, hour hand just past the hour",
      "':30' - Minute hand at 6, hour hand halfway between numbers",
      "':45' - Minute hand at 9, hour hand almost at the next number"
    ]
  }
];

const ClockDigitalTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-100 mb-6">
          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
            Tips for Reading Digital Time on an Analog Clock
          </h1>
          
          <div className="space-y-6">
            {TIPS.map((section, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-lg p-4 shadow-md border border-purple-100"
              >
                <h2 className="text-xl font-bold text-purple-600 mb-3">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm mt-0.5">
                        •
                      </span>
                      <span>{tip}</span>
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

export default ClockDigitalTips; 
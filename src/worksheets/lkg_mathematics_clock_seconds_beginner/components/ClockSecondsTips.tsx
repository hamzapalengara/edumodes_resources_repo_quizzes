import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const TIPS = [
  {
    title: "Understanding Seconds",
    tips: [
      "A second is a unit of time",
      "60 seconds make one minute",
      "The seconds hand moves once every second",
      "Count 'one-one-thousand' for each second"
    ]
  },
  {
    title: "Reading the Seconds Hand",
    tips: [
      "The red hand is the seconds hand",
      "It moves smoothly around the clock",
      "Each tick mark shows one second",
      "Watch it move from one mark to the next"
    ]
  },
  {
    title: "Counting Seconds",
    tips: [
      "Count out loud as the hand moves",
      "Keep a steady counting pace",
      "Watch the tick marks carefully",
      "Practice counting with a friend"
    ]
  },
  {
    title: "Common Patterns",
    tips: [
      "5 seconds = hand moves 5 tick marks",
      "10 seconds = hand moves 10 tick marks",
      "15 seconds = hand moves to number 3",
      "30 seconds = hand moves to number 6"
    ]
  },
  {
    title: "Practice Tips",
    tips: [
      "Try counting seconds while doing activities",
      "Use a timer to check your counting",
      "Practice counting backwards too",
      "Make it fun with counting games"
    ]
  }
];

const ClockSecondsTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-100 mb-6">
          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-6">
            Tips for Counting Seconds
          </h1>
          
          <div className="space-y-6">
            {TIPS.map((section, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-lg p-4 shadow-md border border-orange-100"
              >
                <h2 className="text-xl font-bold text-orange-600 mb-3">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm mt-0.5">
                        •
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Fun Facts */}
          <div className="mt-6 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-4 shadow-inner">
            <h2 className="text-lg font-bold text-orange-600 mb-3">
              Fun Facts About Seconds!
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <span>Your heart beats about once every second</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🌟</span>
                <span>Light travels 186,282 miles in just one second</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">✨</span>
                <span>A hummingbird flaps its wings 50 times in one second</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🌈</span>
                <span>There are 86,400 seconds in one day</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockSecondsTips; 
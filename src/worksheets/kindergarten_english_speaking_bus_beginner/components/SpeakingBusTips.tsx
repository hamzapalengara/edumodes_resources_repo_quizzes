import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingBusTips: React.FC = () => {
  const tips = [
    {
      title: "Being Polite",
      icon: "🎩",
      points: [
        "Always start with 'Excuse me' when speaking to the driver",
        "Say 'please' when making requests",
        "Say 'thank you' when getting off the bus",
        "Speak in a clear, friendly voice"
      ]
    },
    {
      title: "Asking Questions",
      icon: "🗣️",
      points: [
        "Use 'Does this bus go to...' to ask about destinations",
        "Ask 'When will we get there?' to know the arrival time",
        "Say 'Could you tell me when we reach...' to request a stop notification",
        "Ask 'Is this the right bus for...' if unsure"
      ]
    },
    {
      title: "Key Phrases",
      icon: "💫",
      points: [
        "'Excuse me, does this bus go to...?'",
        "'Could you tell me when we reach...?'",
        "'Yes, I have my bus pass'",
        "'Thank you for the ride'"
      ]
    },
    {
      title: "Safety Tips",
      icon: "🎯",
      points: [
        "Wait for the bus to stop completely before speaking",
        "Hold onto handrails when walking to your seat",
        "Stay seated while the bus is moving",
        "Keep your bus pass ready before boarding"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 border-2 border-blue-200">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">
            🚌 Bus Conversation Tips
          </h1>

          <div className="space-y-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                  <span className="text-2xl mr-2">{section.icon}</span>
                  {section.title}
                </h2>

                <ul className="space-y-2 pl-9">
                  {section.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className="text-blue-800 flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Remember
            </h2>
            <p className="text-blue-800">
              Being polite and clear when speaking to the bus driver helps make your journey smoother and safer. 
              Always have your bus pass ready and stay alert for your stop. 
              Don't be afraid to ask questions if you're unsure about anything!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingBusTips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingRestaurantTips: React.FC = () => {
  const tips = [
    {
      title: "Being Polite",
      icon: "🎩",
      points: [
        "Always say 'please' when making requests",
        "Say 'thank you' when receiving something",
        "Speak in a clear, friendly voice",
        "Wait for the waiter to finish speaking before responding"
      ]
    },
    {
      title: "Making Requests",
      icon: "🗣️",
      points: [
        "Use 'I would like...' or 'Could I have...'",
        "Speak in complete sentences",
        "Be specific about what you want",
        "Ask questions if you don't understand something"
      ]
    },
    {
      title: "Key Phrases",
      icon: "💫",
      points: [
        "'Could I see the menu, please?'",
        "'I would like to order now'",
        "'Could you bring me some water, please?'",
        "'Thank you for your service'"
      ]
    },
    {
      title: "Practice Tips",
      icon: "🎯",
      points: [
        "Listen carefully to the waiter's questions",
        "Take your time to form complete sentences",
        "Practice the key phrases before starting",
        "Don't worry about making mistakes - learning takes time!"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 border-2 border-amber-200">
          <h1 className="text-2xl font-bold text-amber-700 mb-6">
            🍽️ Restaurant Conversation Tips
          </h1>

          <div className="space-y-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-amber-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                  <span className="text-2xl mr-2">{section.icon}</span>
                  {section.title}
                </h2>

                <ul className="space-y-2 pl-9">
                  {section.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className="text-amber-800 flex items-start gap-2"
                    >
                      <span className="text-amber-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Remember
            </h2>
            <p className="text-amber-800">
              The key to successful restaurant conversations is being polite, clear, and patient. 
              Take your time to practice these phrases and don't be afraid to ask for help if needed. 
              Good manners and clear communication will make your restaurant experience more enjoyable!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingRestaurantTips; 
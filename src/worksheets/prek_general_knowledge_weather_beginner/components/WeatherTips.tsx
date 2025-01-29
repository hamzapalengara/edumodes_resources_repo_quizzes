import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WeatherTips: React.FC = () => {
  const tips = [
    {
      title: "Weather Watching",
      emoji: "👀",
      description: "Look outside every day and observe the weather!",
      activities: [
        "Look at the sky - is it sunny, cloudy, or rainy?",
        "Feel the temperature - is it hot, warm, or cold?",
        "Listen for weather sounds - rain, thunder, wind",
        "Keep a simple weather calendar with stickers"
      ]
    },
    {
      title: "Weather Dress-Up",
      emoji: "👕",
      description: "Learn about weather-appropriate clothing!",
      activities: [
        "Practice putting on rain boots and coats",
        "Sort clothes for different weather",
        "Play dress-up for different weather scenarios",
        "Match weather symbols to clothing items"
      ]
    },
    {
      title: "Weather Art",
      emoji: "🎨",
      description: "Create weather-themed artwork!",
      activities: [
        "Draw pictures of different types of weather",
        "Make cotton ball clouds",
        "Create sun catchers",
        "Paint with water on a sunny day"
      ]
    },
    {
      title: "Weather Songs",
      emoji: "🎵",
      description: "Learn through music and movement!",
      activities: [
        "Sing 'Rain, Rain, Go Away'",
        "Do weather action songs",
        "Make weather sound effects",
        "Dance like different weather elements"
      ]
    },
    {
      title: "Weather Safety",
      emoji: "🏠",
      description: "Learn basic weather safety!",
      activities: [
        "Practice what to do during storms",
        "Learn about indoor vs. outdoor activities",
        "Identify safe places during bad weather",
        "Remember to use sunscreen on sunny days"
      ]
    }
  ];

  const generalTips = [
    "Use weather-related words daily",
    "Make weather observations fun and exciting",
    "Connect weather to daily activities",
    "Encourage questions about weather",
    "Use weather as a conversation starter"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Fun Weather Learning Tips
          </h1>

          {/* Learning Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02]"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{tip.emoji}</span>
                  <h2 className="text-xl font-bold text-purple-700">
                    {tip.title}
                  </h2>
                </div>

                <p className="text-gray-700 mb-4">
                  {tip.description}
                </p>

                <ul className="list-disc list-inside space-y-2">
                  {tip.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="text-gray-600">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* General Tips Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span>
              Helpful Reminders
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generalTips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start p-3 bg-purple-50 rounded-lg"
                >
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="text-3xl mr-3">📚</span>
              Extension Activities
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2">
                  Weather Journal
                </h3>
                <p className="text-gray-700">
                  Create a simple weather journal using stickers or drawings to track the weather each day.
                  This helps develop observation skills and understanding of weather patterns.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold text-green-700 mb-2">
                  Weather Station
                </h3>
                <p className="text-gray-700">
                  Set up a simple weather station with a thermometer and rain gauge.
                  Children can help check and record measurements.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-bold text-yellow-700 mb-2">
                  Weather Stories
                </h3>
                <p className="text-gray-700">
                  Read books about weather and encourage children to create their own weather stories
                  through drawings or verbal storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default WeatherTips; 
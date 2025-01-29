import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WeatherAnswerKey: React.FC = () => {
  const answers = [
    {
      question: "What's the weather like when you see this?",
      answer: "Sunny Day ☀️",
      explanation: "When we see the bright sun in the sky, it's a sunny day! The sun makes the day warm and bright.",
      tips: [
        "The sun appears as a bright yellow circle in the sky",
        "Sunny days are usually warm",
        "The sky is often clear and blue on sunny days"
      ]
    },
    {
      question: "What do we need on this day?",
      answer: "Umbrella ☔",
      explanation: "When it's raining, we need an umbrella to stay dry! Rain falls from clouds as water drops.",
      tips: [
        "Umbrellas protect us from getting wet in the rain",
        "We can hear the sound of rain hitting the umbrella",
        "Umbrellas come in many colors and sizes"
      ]
    },
    {
      question: "What's happening in the sky?",
      answer: "Thunder & Lightning ⚡",
      explanation: "During a thunderstorm, we see bright flashes (lightning) and hear loud booms (thunder)!",
      tips: [
        "Lightning is very bright and quick",
        "Thunder makes a loud boom sound",
        "It's safe to watch thunderstorms from inside"
      ]
    },
    {
      question: "What should we wear today?",
      answer: "Warm Gloves 🧤",
      explanation: "When it's cold outside, we need warm gloves to keep our hands cozy and protected from the cold!",
      tips: [
        "Gloves keep our fingers warm",
        "We wear gloves in cold weather",
        "Gloves help us play in the snow"
      ]
    },
    {
      question: "What's falling from the sky?",
      answer: "Snow ❄️",
      explanation: "Snow falls as white, fluffy flakes when it's very cold outside. Snow makes everything look white!",
      tips: [
        "Snow is cold and white",
        "Snowflakes are all different shapes",
        "Snow is fun to play in and make snowmen"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Weather Learning - Answer Key
          </h1>

          <div className="space-y-6">
            {answers.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02]"
              >
                <div className="border-b-2 border-purple-100 pb-4 mb-4">
                  <h2 className="text-xl font-bold text-purple-700 mb-2">
                    Question {index + 1}: {item.question}
                  </h2>
                  <div className="text-2xl font-bold text-green-600">
                    Answer: {item.answer}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-600 mb-2">
                      Explanation:
                    </h3>
                    <p className="text-gray-700">{item.explanation}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-purple-600 mb-2">
                      Learning Tips:
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      {item.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-gray-700">
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Teaching Notes
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                This worksheet helps children develop:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Weather recognition skills</li>
                <li>Understanding of appropriate weather gear</li>
                <li>Basic weather safety awareness</li>
                <li>Vocabulary related to weather</li>
                <li>Observation and matching skills</li>
              </ul>
              <p className="mt-4">
                Encourage children to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Look outside and describe the weather each day</li>
                <li>Draw pictures of different types of weather</li>
                <li>Talk about what clothes to wear in different weather</li>
                <li>Share their experiences with different weather conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default WeatherAnswerKey; 
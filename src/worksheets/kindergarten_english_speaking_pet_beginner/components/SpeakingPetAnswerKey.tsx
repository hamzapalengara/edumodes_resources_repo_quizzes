import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface AnswerExample {
  dogText: string;
  response: string;
  explanation: string;
  keywords: string[];
  tips: string[];
}

const answers: AnswerExample[] = [
  {
    dogText: "Hi friend! *tail wag* I'm so happy to see you this morning!",
    response: "Good morning buddy how are you",
    explanation: "A warm morning greeting shows your pet you're happy to see them too.",
    keywords: ["good", "morning", "buddy", "how", "are", "you"],
    tips: [
      "Use a cheerful tone",
      "Match their enthusiasm",
      "Include a friendly word like 'buddy'"
    ]
  },
  {
    dogText: "Look what I found! Can we play? Please please please!",
    response: "Do you want to play with the ball",
    explanation: "Acknowledge their excitement about playing and specifically mention the toy.",
    keywords: ["play", "ball", "want"],
    tips: [
      "Show excitement in your voice",
      "Name the toy they're interested in",
      "Use a playful tone"
    ]
  },
  {
    dogText: "Oh boy oh boy! I love going outside! Can we go?",
    response: "Lets go to the park together",
    explanation: "Respond to their enthusiasm about going outside with a specific destination.",
    keywords: ["lets", "go", "park", "together"],
    tips: [
      "Match their excitement",
      "Mention where you'll go",
      "Use 'together' to show companionship"
    ]
  },
  {
    dogText: "*tummy growls* I think it's dinner time... isn't it?",
    response: "Are you hungry its dinner time",
    explanation: "Acknowledge their hunger and confirm it's time to eat.",
    keywords: ["hungry", "dinner", "time"],
    tips: [
      "Use a caring tone",
      "Acknowledge their need",
      "Confirm mealtime"
    ]
  },
  {
    dogText: "*excited bouncing* Is that my favorite treat I smell?",
    response: "Here is your favorite food",
    explanation: "Acknowledge their excitement about food and confirm you have it.",
    keywords: ["here", "favorite", "food"],
    tips: [
      "Use an enthusiastic tone",
      "Mention it's their favorite",
      "Show you're happy to give them food"
    ]
  },
  {
    dogText: "*big yawn* All that playing made me sleepy...",
    response: "Time for your nap buddy",
    explanation: "Recognize their tiredness and suggest rest time gently.",
    keywords: ["time", "nap", "buddy"],
    tips: [
      "Use a soft, soothing voice",
      "Add 'buddy' to show affection",
      "Keep the tone calm"
    ]
  },
  {
    dogText: "Look what I brought! *holds leash* Outside time?",
    response: "Yes lets go for a walk",
    explanation: "Respond positively to their request for a walk.",
    keywords: ["yes", "lets", "go", "walk"],
    tips: [
      "Start with a positive 'yes'",
      "Show enthusiasm for walking",
      "Use clear, simple words"
    ]
  },
  {
    dogText: "Watch this! *sits and gives paw* Did I do good?",
    response: "Good job you are so smart",
    explanation: "Praise them enthusiastically for performing a trick.",
    keywords: ["good", "job", "smart"],
    tips: [
      "Use an excited, proud voice",
      "Give specific praise",
      "Show enthusiasm"
    ]
  },
  {
    dogText: "*snuggles close* You're my best friend ever...",
    response: "I love you too buddy",
    explanation: "Return their affection with loving words.",
    keywords: ["love", "you", "buddy"],
    tips: [
      "Use a gentle, loving voice",
      "Show emotional connection",
      "Add 'buddy' for warmth"
    ]
  }
];

const SpeakingPetAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
              Talking with Your Dog - Answer Guide
            </h1>

            <div className="space-y-6">
              {answers.map((item, index) => (
                <div key={index} className="bg-indigo-50 p-4 rounded-lg">
                  {/* Dog's Message */}
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-indigo-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">🐕</span>
                      Dog Says:
                    </h2>
                    <p className="text-indigo-800 pl-9">
                      "{item.dogText}"
                    </p>
                  </div>

                  {/* Expected Response */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">🗣️</span>
                      Your Response:
                    </h3>
                    <p className="text-indigo-800 pl-9">
                      "{item.response}"
                    </p>
                  </div>

                  {/* Key Words */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">🔑</span>
                      Key Words:
                    </h3>
                    <div className="pl-9 flex flex-wrap gap-2">
                      {item.keywords.map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className="bg-white px-2 py-1 rounded-full text-indigo-600 text-sm border border-indigo-200"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Speaking Tips */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">💡</span>
                      Speaking Tips:
                    </h3>
                    <div className="pl-9 space-y-2">
                      {item.tips.map((tip, tipIndex) => (
                        <div
                          key={tipIndex}
                          className="bg-white px-3 py-2 rounded-lg text-indigo-600"
                        >
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explanation */}
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">📝</span>
                      Explanation:
                    </h3>
                    <p className="text-indigo-800 pl-9">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingPetAnswerKey; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface AnswerExample {
  brotherText: string;
  response: string;
  explanation: string;
  keywords: string[];
  tips: string[];
}

const answers: AnswerExample[] = [
  {
    brotherText: "Hey! Want to build a pillow fort together?",
    response: "Yes lets build a big fort",
    explanation: "Show enthusiasm and agree to play together, making the activity sound exciting.",
    keywords: ["yes", "lets", "build", "fort", "big"],
    tips: [
      "Use an excited tone",
      "Show willingness to play together",
      "Add descriptive words like 'big'"
    ]
  },
  {
    brotherText: "Can you help me with my homework please?",
    response: "Sure I will help you study",
    explanation: "Respond positively to helping requests and show willingness to support.",
    keywords: ["sure", "help", "you", "study"],
    tips: [
      "Use a kind, helpful tone",
      "Show you're happy to help",
      "Be encouraging"
    ]
  },
  {
    brotherText: "Look what I drew! Do you like it?",
    response: "Wow your drawing is beautiful",
    explanation: "Give specific praise and show appreciation for their creative work.",
    keywords: ["wow", "drawing", "beautiful"],
    tips: [
      "Sound impressed",
      "Use positive words",
      "Be specific about what you like"
    ]
  },
  {
    brotherText: "Want to share my cookies with me?",
    response: "Thank you for sharing with me",
    explanation: "Show gratitude when someone offers to share with you.",
    keywords: ["thank", "you", "sharing"],
    tips: [
      "Sound grateful",
      "Acknowledge their kindness",
      "Show appreciation"
    ]
  },
  {
    brotherText: "Can we play superheroes together?",
    response: "Yes I want to be superman",
    explanation: "Show excitement about playing and add your own ideas to the game.",
    keywords: ["yes", "want", "superman"],
    tips: [
      "Sound enthusiastic",
      "Share your character choice",
      "Show you want to join in"
    ]
  },
  {
    brotherText: "I'm sorry I broke your toy...",
    response: "Its okay I forgive you",
    explanation: "Show forgiveness and understanding when someone apologizes.",
    keywords: ["okay", "forgive", "you"],
    tips: [
      "Use a gentle tone",
      "Show understanding",
      "Be forgiving"
    ]
  },
  {
    brotherText: "Race you to the playground!",
    response: "Ready set lets go race",
    explanation: "Show enthusiasm for the competition and use playful language.",
    keywords: ["ready", "set", "go", "race"],
    tips: [
      "Sound excited",
      "Use racing words",
      "Show you're ready to play"
    ]
  },
  {
    brotherText: "Can you teach me that new game?",
    response: "Yes I will teach you",
    explanation: "Show willingness to share knowledge and help others learn.",
    keywords: ["yes", "teach", "you"],
    tips: [
      "Sound patient",
      "Be willing to help",
      "Show you're happy to teach"
    ]
  },
  {
    brotherText: "You're the best brother ever!",
    response: "You are my best brother too",
    explanation: "Return affection and show love when someone expresses care for you.",
    keywords: ["you", "best", "brother", "too"],
    tips: [
      "Sound loving",
      "Return the compliment",
      "Show you care back"
    ]
  },
  {
    brotherText: "Let's go tell Mom about our day!",
    response: "Yes lets tell mom together",
    explanation: "Show enthusiasm for sharing experiences with family members.",
    keywords: ["yes", "tell", "mom", "together"],
    tips: [
      "Sound excited",
      "Agree to share",
      "Emphasize doing it together"
    ]
  }
];

const SpeakingBrotherAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-amber-600 mb-6">
              Talking with My Brother - Answer Guide
            </h1>

            <div className="space-y-6">
              {answers.map((item, index) => (
                <div key={index} className="bg-amber-50 p-4 rounded-lg">
                  {/* Brother's Message */}
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">👦</span>
                      Brother Says:
                    </h2>
                    <p className="text-amber-800 pl-9">
                      "{item.brotherText}"
                    </p>
                  </div>

                  {/* Expected Response */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">🗣️</span>
                      Your Response:
                    </h3>
                    <p className="text-amber-800 pl-9">
                      "{item.response}"
                    </p>
                  </div>

                  {/* Key Words */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">🔑</span>
                      Key Words:
                    </h3>
                    <div className="pl-9 flex flex-wrap gap-2">
                      {item.keywords.map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className="bg-white px-2 py-1 rounded-full text-amber-600 text-sm border border-amber-200"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Speaking Tips */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">💡</span>
                      Speaking Tips:
                    </h3>
                    <div className="pl-9 space-y-2">
                      {item.tips.map((tip, tipIndex) => (
                        <div
                          key={tipIndex}
                          className="bg-white px-3 py-2 rounded-lg text-amber-600"
                        >
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explanation */}
                  <div>
                    <h3 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">📝</span>
                      Explanation:
                    </h3>
                    <p className="text-amber-800 pl-9">
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

export default SpeakingBrotherAnswerKey; 
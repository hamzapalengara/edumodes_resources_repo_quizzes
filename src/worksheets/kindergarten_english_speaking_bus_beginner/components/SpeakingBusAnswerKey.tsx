import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface AnswerExample {
  question: string;
  answer: string;
  explanation: string;
  keywords: string[];
}

const answers: AnswerExample[] = [
  {
    question: "Good morning! Where would you like to go today?",
    answer: "I would like to go to the park please",
    explanation: "This response is polite and clear. Using 'please' shows good manners, and specifying the destination (park) makes the request clear.",
    keywords: ["like", "go", "park", "please"]
  },
  {
    question: "Yes, this bus stops at the park. Do you have your bus pass?",
    answer: "Yes I have my bus pass here",
    explanation: "This response confirms you have your pass ready. Adding 'here' indicates you're prepared to show it.",
    keywords: ["yes", "have", "bus", "pass"]
  },
  {
    question: "Perfect! Please take a seat. The park is about 15 minutes away.",
    answer: "Thank you how long will it take to get there",
    explanation: "This response shows politeness with 'thank you' and asks for specific travel time information.",
    keywords: ["thank", "how", "long", "take"]
  },
  {
    question: "It will take about 15 minutes. Would you like me to tell you when we reach?",
    answer: "Yes please tell me when we reach there",
    explanation: "This is a polite way to request notification. Using 'please' maintains good manners throughout the conversation.",
    keywords: ["yes", "please", "tell", "reach"]
  },
  {
    question: "Don't worry, I'll let you know when we reach the park.",
    answer: "Thank you very much",
    explanation: "A simple expression of gratitude is appropriate here. It acknowledges the driver's helpfulness.",
    keywords: ["thank", "you", "very", "much"]
  },
  {
    question: "We're getting close to the park now. Would you like to get off at the next stop?",
    answer: "Yes please is this the park stop",
    explanation: "This response confirms your intention to get off while politely double-checking it's the correct stop.",
    keywords: ["yes", "please", "park", "stop"]
  },
  {
    question: "Yes, the next stop is right in front of the park entrance.",
    answer: "Thank you I will get off at the next stop",
    explanation: "This response confirms your understanding and intention to exit at the next stop.",
    keywords: ["thank", "get", "off", "next", "stop"]
  },
  {
    question: "We've reached the park now. This is your stop!",
    answer: "Thank you for the ride",
    explanation: "This is a polite way to thank the driver for the service as you prepare to exit.",
    keywords: ["thank", "you", "ride"]
  },
  {
    question: "You're welcome! Have a great time at the park!",
    answer: "Thank you goodbye have a nice day",
    explanation: "This is a friendly way to end the conversation, showing appreciation and wishing the driver well.",
    keywords: ["thank", "goodbye", "nice", "day"]
  }
];

const SpeakingBusAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 border-2 border-blue-200">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">
            🚌 Bus Conversation Guide
          </h1>

          <div className="space-y-6">
            {answers.map((item, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                {/* Question */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">👨‍✈️</span>
                    Driver's Question:
                  </h2>
                  <p className="text-blue-800 pl-9">
                    "{item.question}"
                  </p>
                </div>

                {/* Expected Response */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">🗣️</span>
                    Your Response:
                  </h3>
                  <p className="text-blue-800 pl-9">
                    "{item.answer}"
                  </p>
                </div>

                {/* Explanation */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">💡</span>
                    Why This Works:
                  </h3>
                  <p className="text-blue-800 pl-9">
                    {item.explanation}
                  </p>
                </div>

                {/* Key Words */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">🔑</span>
                    Key Words:
                  </h3>
                  <div className="pl-9">
                    <div className="flex flex-wrap gap-2">
                      {item.keywords.map((keyword, keyIndex) => (
                        <span
                          key={keyIndex}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingBusAnswerKey; 
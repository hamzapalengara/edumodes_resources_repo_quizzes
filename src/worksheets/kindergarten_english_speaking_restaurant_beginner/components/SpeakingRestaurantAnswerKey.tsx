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
    question: "Welcome to our restaurant! Would you like to see the menu?",
    answer: "Yes I would like to see the menu please",
    explanation: "This response is polite and clear. Using 'please' shows good manners, and the complete sentence shows proper English structure.",
    keywords: ["yes", "like", "see", "menu", "please"]
  },
  {
    question: "Here's our menu. Would you like some time to look at it?",
    answer: "Yes please give me a few minutes",
    explanation: "This response acknowledges the question and politely asks for time to review the menu. Using 'please' maintains good manners.",
    keywords: ["yes", "please", "give", "minutes"]
  },
  {
    question: "Are you ready to order now?",
    answer: "Yes I would like to order now",
    explanation: "This is a clear and direct response that confirms readiness to order. Using a complete sentence is better than just saying 'yes'.",
    keywords: ["yes", "like", "order", "now"]
  },
  {
    question: "What would you like to have?",
    answer: "I would like to have pizza please",
    explanation: "This response uses proper structure to make a food request. Adding 'please' makes it polite, and specifying the food item clearly communicates the order.",
    keywords: ["like", "have", "pizza", "please"]
  },
  {
    question: "Would you like anything to drink?",
    answer: "Yes I would like orange juice please",
    explanation: "This response clearly specifies the drink choice and maintains politeness with 'please'. Using a complete sentence shows good language skills.",
    keywords: ["yes", "like", "orange", "juice", "please"]
  },
  {
    question: "Your food will be ready soon. Would you like some water while you wait?",
    answer: "Yes please bring some water",
    explanation: "This is a polite way to accept the offer of water. The response is clear and uses 'please' to maintain good manners.",
    keywords: ["yes", "please", "bring", "water"]
  }
];

const SpeakingRestaurantAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 border-2 border-amber-200">
          <h1 className="text-2xl font-bold text-amber-700 mb-6">
            🍽️ Restaurant Conversation Guide
          </h1>

          <div className="space-y-6">
            {answers.map((item, index) => (
              <div key={index} className="bg-amber-50 p-4 rounded-lg">
                {/* Question */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">👨‍🍳</span>
                    Waiter's Question:
                  </h2>
                  <p className="text-amber-800 pl-9">
                    "{item.question}"
                  </p>
                </div>

                {/* Expected Response */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">🗣️</span>
                    Expected Response:
                  </h3>
                  <p className="text-amber-800 pl-9">
                    "{item.answer}"
                  </p>
                </div>

                {/* Explanation */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">💡</span>
                    Why This Works:
                  </h3>
                  <p className="text-amber-800 pl-9">
                    {item.explanation}
                  </p>
                </div>

                {/* Key Words */}
                <div>
                  <h3 className="text-lg font-semibold text-amber-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">🔑</span>
                    Key Words:
                  </h3>
                  <div className="pl-9">
                    <div className="flex flex-wrap gap-2">
                      {item.keywords.map((keyword, keyIndex) => (
                        <span
                          key={keyIndex}
                          className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm"
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

export default SpeakingRestaurantAnswerKey; 
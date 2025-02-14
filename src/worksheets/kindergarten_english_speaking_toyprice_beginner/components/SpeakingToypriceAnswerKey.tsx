import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface AnswerExample {
  question: string;
  answer: string;
  explanation: string;
  keywords: string[];
}

const SpeakingToypriceAnswerKey: React.FC = () => {
  const answers: AnswerExample[] = [
    {
      question: "Welcome to the toy store! How can I help you?",
      answer: "Hi I would like to know the price of that toy please",
      explanation: "Start with a polite greeting and clearly state that you want to know the price.",
      keywords: ["hi", "like", "know", "price", "please"]
    },
    {
      question: "Which toy would you like to know about? The teddy bear, robot, or car?",
      answer: "How much is the teddy bear please",
      explanation: "Ask about the price using 'How much is' and specify which toy you're interested in.",
      keywords: ["how", "much", "teddy", "bear", "please"]
    },
    {
      question: "The teddy bear is fifteen dollars.",
      answer: "Can you tell me the price of the robot too please",
      explanation: "Ask about additional items politely using 'Can you tell me' and 'please'.",
      keywords: ["can", "tell", "price", "robot", "please"]
    },
    {
      question: "The robot is twenty dollars.",
      answer: "And how much is the toy car",
      explanation: "Use 'And how much' to ask about another item in a natural way.",
      keywords: ["how", "much", "toy", "car"]
    },
    {
      question: "The toy car is ten dollars. Would you like to buy any of them?",
      answer: "Yes I would like to buy the teddy bear please",
      explanation: "Make your choice clearly and remember to be polite.",
      keywords: ["yes", "like", "buy", "teddy", "please"]
    },
    {
      question: "Great choice! That will be fifteen dollars.",
      answer: "Here is fifteen dollars thank you",
      explanation: "Hand over the money and express gratitude.",
      keywords: ["here", "fifteen", "dollars", "thank"]
    },
    {
      question: "Would you like a gift bag for your teddy bear?",
      answer: "How much is the gift bag",
      explanation: "Ask about additional costs before making a decision.",
      keywords: ["how", "much", "gift", "bag"]
    },
    {
      question: "The gift bag is two dollars extra.",
      answer: "Yes please I would like a gift bag",
      explanation: "Accept the offer politely after knowing the price.",
      keywords: ["yes", "please", "like", "gift", "bag"]
    },
    {
      question: "Here's your teddy bear in a gift bag. That's seventeen dollars total.",
      answer: "Here is seventeen dollars thank you very much",
      explanation: "Pay the total amount and show appreciation.",
      keywords: ["here", "seventeen", "dollars", "thank"]
    },
    {
      question: "Thank you for shopping! Have a great day!",
      answer: "Thank you goodbye have a nice day",
      explanation: "End the conversation politely with a friendly goodbye.",
      keywords: ["thank", "goodbye", "nice", "day"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-2 md:mx-4">
            <h1 className="text-xl md:text-2xl font-bold text-center text-blue-600 p-4 border-b border-blue-100">
              Speaking Practice: Asking About Toy Prices - Answer Key
            </h1>

            <div className="p-4 space-y-6">
              {answers.map((item, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 rounded-lg p-4 border border-blue-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      👩
                    </div>
                    <p className="text-blue-800 font-medium">
                      {item.question}
                    </p>
                  </div>

                  <div className="ml-11">
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2 text-blue-700">
                        <span>✓</span>
                        <p className="font-medium">{item.answer}</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3">
                      <h3 className="text-sm font-medium text-purple-800 mb-2">
                        Explanation:
                      </h3>
                      <p className="text-purple-700 mb-2">
                        {item.explanation}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.keywords.map((keyword, kidx) => (
                          <span 
                            key={kidx}
                            className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm"
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
    </div>
  );
};

export default SpeakingToypriceAnswerKey; 
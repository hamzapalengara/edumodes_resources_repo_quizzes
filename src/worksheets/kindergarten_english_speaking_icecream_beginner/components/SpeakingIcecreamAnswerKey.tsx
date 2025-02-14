import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface AnswerExample {
  question: string;
  answer: string;
  explanation: string;
  keywords: string[];
}

const SpeakingIcecreamAnswerKey: React.FC = () => {
  const answers: AnswerExample[] = [
    {
      question: "Welcome to Sweet Treats! How can I help you today?",
      answer: "Hi I would like to buy some ice cream please",
      explanation: "Start with a polite greeting and clearly state what you want to buy.",
      keywords: ["hi", "like", "buy", "ice cream", "please"]
    },
    {
      question: "Sure! We have chocolate, vanilla, strawberry, and mint. What flavor would you like?",
      answer: "Can I have chocolate ice cream please",
      explanation: "Choose a flavor and ask politely using 'Can I have' or 'I would like'.",
      keywords: ["can", "have", "chocolate", "please"]
    },
    {
      question: "Would you like it in a cup or cone?",
      answer: "I would like it in a cone please",
      explanation: "State your preference clearly and remember to say please.",
      keywords: ["would", "like", "cone", "please"]
    },
    {
      question: "Would you like any toppings? We have sprinkles, nuts, and chocolate chips.",
      answer: "Yes I would like sprinkles on top please",
      explanation: "Choose a topping and use polite language to make your request.",
      keywords: ["yes", "like", "sprinkles", "please"]
    },
    {
      question: "That will be three dollars, please.",
      answer: "Here is three dollars thank you",
      explanation: "Hand over the money and say thank you.",
      keywords: ["here", "three", "dollars", "thank"]
    },
    {
      question: "Here's your ice cream with sprinkles. Enjoy!",
      answer: "Thank you very much have a nice day",
      explanation: "Express gratitude and wish the seller a nice day.",
      keywords: ["thank", "you", "nice", "day"]
    },
    {
      question: "Would you like a napkin with that?",
      answer: "Yes please that would be helpful",
      explanation: "Accept the offer politely and show appreciation.",
      keywords: ["yes", "please", "helpful", "would"]
    },
    {
      question: "Is there anything else you'd like?",
      answer: "No thank you that is all I need",
      explanation: "Politely decline if you don't need anything else.",
      keywords: ["no", "thank", "all", "need"]
    },
    {
      question: "Please come again! We have new flavors every week.",
      answer: "I will come back to try new flavors thank you",
      explanation: "Show interest in returning and express gratitude.",
      keywords: ["will", "come", "try", "thank"]
    },
    {
      question: "Have a sweet day! Bye bye!",
      answer: "Goodbye have a nice day too",
      explanation: "End the conversation politely with a friendly goodbye.",
      keywords: ["goodbye", "nice", "day", "too"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-2 md:mx-4">
            <h1 className="text-xl md:text-2xl font-bold text-center text-blue-600 p-4 border-b border-blue-100">
              Speaking Practice: Buying Ice Cream - Answer Key
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

export default SpeakingIcecreamAnswerKey; 
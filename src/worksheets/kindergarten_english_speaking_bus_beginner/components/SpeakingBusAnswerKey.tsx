import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface AnswerExample {
  question: string;
  answer: string;
  explanation: string;
  keywords: string[];
}

const SpeakingBusAnswerKey: React.FC = () => {
  const answers: AnswerExample[] = [
    {
      question: "Welcome! How can I help you?",
      answer: "Excuse me where is this bus going",
      explanation: "Start with a polite 'excuse me' and ask clearly about the bus destination.",
      keywords: ["excuse", "where", "bus", "going"]
    },
    {
      question: "This bus goes to the city center. Would you like to know the stops?",
      answer: "Yes please tell me the stops",
      explanation: "Show interest in learning more information about the route.",
      keywords: ["yes", "please", "tell", "stops"]
    },
    {
      question: "It takes about 30 minutes. The fare is two dollars.",
      answer: "Here is two dollars please",
      explanation: "Pay the fare politely using 'please' and state the amount clearly.",
      keywords: ["here", "two", "dollars", "please"]
    },
    {
      question: "Does this bus stop at the library?",
      answer: "Does this bus stop at the library",
      explanation: "Ask about specific stops using clear, direct questions.",
      keywords: ["does", "bus", "stop", "library"]
    },
    {
      question: "Yes, the library is our third stop. Please take a seat.",
      answer: "Thank you I will take a seat",
      explanation: "Show gratitude and confirm following instructions.",
      keywords: ["thank", "will", "take", "seat"]
    },
    {
      question: "Could you tell me when we reach the library?",
      answer: "Could you tell me when we reach the library",
      explanation: "Use 'could you' to make polite requests for assistance.",
      keywords: ["could", "tell", "reach", "library"]
    },
    {
      question: "Of course! I'll announce all stops clearly.",
      answer: "Thank you very much",
      explanation: "Express gratitude for the driver's help and confirmation.",
      keywords: ["thank", "you", "very", "much"]
    },
    {
      question: "Is there another bus to the park?",
      answer: "Is there another bus to the park",
      explanation: "Ask about alternative routes using clear questions.",
      keywords: ["is", "there", "another", "bus"]
    },
    {
      question: "Yes, bus number 5 goes to the park every 15 minutes.",
      answer: "Thank you for the information",
      explanation: "Show appreciation when receiving helpful information.",
      keywords: ["thank", "you", "information"]
    },
    {
      question: "You're welcome! Have a good trip!",
      answer: "Thank you have a nice day",
      explanation: "End the conversation politely with a friendly goodbye.",
      keywords: ["thank", "you", "nice", "day"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-2 md:mx-4">
            <h1 className="text-xl md:text-2xl font-bold text-center text-orange-600 p-4 border-b border-orange-100">
              Speaking with Bus Driver - Answer Key
            </h1>

            <div className="p-4 space-y-6">
              {answers.map((item, index) => (
                <div 
                  key={index}
                  className="bg-orange-50 rounded-lg p-4 border border-orange-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      👨‍✈️
                    </div>
                    <p className="text-orange-800 font-medium">
                      {item.question}
                    </p>
                  </div>

                  <div className="ml-11">
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2 text-orange-700">
                        <span>✓</span>
                        <p className="font-medium">{item.answer}</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-3">
                      <h3 className="text-sm font-medium text-yellow-800 mb-2">
                        Explanation:
                      </h3>
                      <p className="text-yellow-700 mb-2">
                        {item.explanation}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.keywords.map((keyword, kidx) => (
                          <span 
                            key={kidx}
                            className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm"
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

export default SpeakingBusAnswerKey; 
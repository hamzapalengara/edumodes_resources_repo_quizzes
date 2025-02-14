import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface AnswerExample {
  question: string;
  answer: string;
  explanation: string;
  keywords: string[];
}

const SpeakingBirthdayAnswerKey: React.FC = () => {
  const answers: AnswerExample[] = [
    {
      question: "Hi Sarah! I have something exciting to tell you!",
      answer: "Hi what is the exciting news",
      explanation: "Show interest and curiosity when someone has news to share.",
      keywords: ["hi", "what", "exciting", "news"]
    },
    {
      question: "It's my birthday party this Saturday! Would you like to come?",
      answer: "That sounds fun when is the party",
      explanation: "Express enthusiasm and ask for important details about the event.",
      keywords: ["sounds", "fun", "when", "party"]
    },
    {
      question: "It starts at 2 o'clock in the afternoon at my house!",
      answer: "What activities will we do at the party",
      explanation: "Ask about planned activities to show interest and prepare for the event.",
      keywords: ["what", "activities", "do", "party"]
    },
    {
      question: "We'll have games, cake, and a bouncy castle!",
      answer: "That sounds really exciting I would love to come",
      explanation: "Express enthusiasm and confirm your attendance.",
      keywords: ["sounds", "exciting", "love", "come"]
    },
    {
      question: "Great! We're also having face painting and a magician!",
      answer: "Should I bring anything to the party",
      explanation: "Be considerate by asking if you need to bring anything.",
      keywords: ["should", "bring", "anything", "party"]
    },
    {
      question: "Just bring yourself! And wear something comfortable for playing!",
      answer: "What time does the party finish",
      explanation: "Ask about end time to help plan transportation.",
      keywords: ["what", "time", "party", "finish"]
    },
    {
      question: "The party ends at 5 o'clock. Your parents can pick you up then!",
      answer: "Can my little sister come too",
      explanation: "Ask politely about including family members.",
      keywords: ["can", "sister", "come", "too"]
    },
    {
      question: "Of course! The more friends, the more fun!",
      answer: "Thank you for inviting us to your party",
      explanation: "Express gratitude for the invitation.",
      keywords: ["thank", "you", "inviting", "party"]
    },
    {
      question: "I'll give you an invitation card with all the details!",
      answer: "Can you write your address on the card",
      explanation: "Ask for specific information needed to attend.",
      keywords: ["can", "write", "address", "card"]
    },
    {
      question: "Yes, I'll write everything you need to know. See you Saturday!",
      answer: "See you on Saturday I am so excited",
      explanation: "Show enthusiasm and confirm the meeting day.",
      keywords: ["see", "you", "saturday", "excited"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-2 md:mx-4">
            <h1 className="text-xl md:text-2xl font-bold text-center text-blue-600 p-4 border-b border-blue-100">
              Speaking Practice: Inviting to a Birthday Party - Answer Key
            </h1>

            <div className="p-4 space-y-6">
              {answers.map((item, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 rounded-lg p-4 border border-blue-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      👧
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

export default SpeakingBirthdayAnswerKey; 
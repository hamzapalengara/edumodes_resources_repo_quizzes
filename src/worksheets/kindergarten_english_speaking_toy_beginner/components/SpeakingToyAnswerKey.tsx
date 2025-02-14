import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface AnswerExample {
  question: string;
  answer: string;
  explanation: string;
  keywords: string[];
}

const SpeakingToyAnswerKey: React.FC = () => {
  const answers: AnswerExample[] = [
    {
      question: "Mom, can I show you something in the toy store?",
      answer: "Sure honey what would you like to show me",
      explanation: "Respond with warmth and interest, showing willingness to listen to your child.",
      keywords: ["sure", "honey", "show", "like"]
    },
    {
      question: "Look at this amazing robot toy! It can walk and talk!",
      answer: "That looks interesting tell me more about it",
      explanation: "Show interest in the toy and encourage the child to provide more details.",
      keywords: ["looks", "interesting", "tell", "more"]
    },
    {
      question: "It helps learn coding and can solve puzzles. Can I have it please?",
      answer: "How much does the robot toy cost",
      explanation: "Ask about the price to teach financial awareness and responsibility.",
      keywords: ["how", "much", "cost", "robot"]
    },
    {
      question: "It's twenty dollars. I'll help with house chores!",
      answer: "What chores will you help with at home",
      explanation: "Encourage responsibility by discussing specific commitments.",
      keywords: ["what", "chores", "help", "home"]
    },
    {
      question: "I'll clean my room and help with dishes every day!",
      answer: "Will you promise to keep your room clean",
      explanation: "Seek a specific commitment to maintain good habits.",
      keywords: ["will", "promise", "keep", "clean"]
    },
    {
      question: "Yes, I promise! I'll organize my toys too!",
      answer: "How will you take care of the robot toy",
      explanation: "Teach responsibility for belongings by discussing care and maintenance.",
      keywords: ["how", "take", "care", "robot"]
    },
    {
      question: "I'll be very careful and keep it in its special box!",
      answer: "Will you share the toy with your sister",
      explanation: "Promote sharing and consideration for siblings.",
      keywords: ["will", "share", "toy", "sister"]
    },
    {
      question: "Yes, I'll teach her how to use it and we can play together!",
      answer: "That is very nice of you to share",
      explanation: "Praise positive behavior and reinforce good values.",
      keywords: ["nice", "you", "share"]
    },
    {
      question: "So can we get it? I'll be responsible!",
      answer: "Yes we can get it if you keep your promises",
      explanation: "Set clear conditions for the reward and reinforce the importance of keeping promises.",
      keywords: ["yes", "can", "keep", "promises"]
    },
    {
      question: "Thank you so much Mom! You're the best!",
      answer: "You are welcome remember your promises",
      explanation: "Remind about responsibilities while accepting gratitude warmly.",
      keywords: ["welcome", "remember", "promises"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-2 md:mx-4">
            <h1 className="text-xl md:text-2xl font-bold text-center text-pink-600 p-4 border-b border-pink-100">
              Asking for a Toy - Answer Key
            </h1>

            <div className="p-4 space-y-6">
              {answers.map((item, index) => (
                <div 
                  key={index}
                  className="bg-pink-50 rounded-lg p-4 border border-pink-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                      👧
                    </div>
                    <p className="text-pink-800 font-medium">
                      {item.question}
                    </p>
                  </div>

                  <div className="ml-11">
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2 text-pink-700">
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

export default SpeakingToyAnswerKey; 
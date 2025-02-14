import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

interface AnswerExample {
  question: string;
  answer: string;
  explanation: string;
  keywords: string[];
}

const SpeakingFarmerAnswerKey: React.FC = () => {
  const answers: AnswerExample[] = [
    {
      question: "Hello! Welcome to my farm. Would you like to learn about farming?",
      answer: "Yes I would love to learn about farming",
      explanation: "Show enthusiasm and interest in learning about farming. Use 'would love to' to express strong interest.",
      keywords: ["yes", "love", "learn", "farming"]
    },
    {
      question: "Great! Let's start with the vegetables. Can you see the carrots growing?",
      answer: "Yes I can see the orange carrots",
      explanation: "Describe what you see by mentioning the color (orange) and the vegetable (carrots).",
      keywords: ["yes", "see", "orange", "carrots"]
    },
    {
      question: "Would you like to help me water the plants?",
      answer: "Yes I will help water the plants",
      explanation: "Show willingness to help by using 'will help' and specify the task (water the plants).",
      keywords: ["yes", "help", "water", "plants"]
    },
    {
      question: "Look at these chickens! Do you want to feed them?",
      answer: "Yes I want to feed the chickens",
      explanation: "Express desire to participate in farm activities using 'want to' and mention the specific task (feed chickens).",
      keywords: ["yes", "want", "feed", "chickens"]
    },
    {
      question: "Can you collect eggs from the chicken coop?",
      answer: "Yes I will collect the eggs carefully",
      explanation: "Show responsibility by adding 'carefully' when handling delicate items like eggs.",
      keywords: ["yes", "collect", "eggs", "carefully"]
    },
    {
      question: "It's time to milk the cow. Have you ever milked a cow?",
      answer: "No I have never milked a cow",
      explanation: "Be honest about lack of experience using 'never' when appropriate.",
      keywords: ["no", "never", "milked", "cow"]
    },
    {
      question: "Look at the apple trees! Can you help me pick some apples?",
      answer: "Yes I will help pick the apples",
      explanation: "Show eagerness to help with fruit picking by using 'will help' and specifying the fruit.",
      keywords: ["yes", "help", "pick", "apples"]
    },
    {
      question: "The sheep need their wool cut. Would you like to watch?",
      answer: "Yes I would like to watch please",
      explanation: "Show politeness by adding 'please' and express interest in observing farm activities.",
      keywords: ["yes", "like", "watch", "please"]
    },
    {
      question: "Time to plant some seeds. Can you dig small holes in the soil?",
      answer: "Yes I can dig holes for the seeds",
      explanation: "Show ability and understanding of the task by mentioning both the action (dig) and purpose (for seeds).",
      keywords: ["yes", "dig", "holes", "seeds"]
    },
    {
      question: "You've been a great helper! Would you like to come back tomorrow?",
      answer: "Yes I would love to come back tomorrow",
      explanation: "Express enthusiasm for future visits using 'would love to' and specify when (tomorrow).",
      keywords: ["yes", "love", "come", "tomorrow"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-2 md:mx-4">
            <h1 className="text-xl md:text-2xl font-bold text-center text-green-600 p-4 border-b border-green-100">
              Speaking with Farmer - Answer Key
            </h1>

            <div className="p-4 space-y-6">
              {answers.map((item, index) => (
                <div 
                  key={index}
                  className="bg-green-50 rounded-lg p-4 border border-green-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      👨‍🌾
                    </div>
                    <p className="text-green-800 font-medium">
                      {item.question}
                    </p>
                  </div>

                  <div className="ml-11">
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2 text-green-700">
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

export default SpeakingFarmerAnswerKey; 
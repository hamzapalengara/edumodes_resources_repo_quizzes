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
    question: "Hello! I'm Dr. Smith. How are you feeling today?",
    answer: "I am not feeling well today",
    explanation: "This response clearly tells the doctor that you're sick. It's a complete sentence that directly answers the question.",
    keywords: ["not", "feeling", "well", "today"]
  },
  {
    question: "Can you tell me where it hurts?",
    answer: "My stomach hurts a lot",
    explanation: "This response specifies the exact location of pain (stomach) and indicates the intensity (a lot).",
    keywords: ["stomach", "hurts", "lot"]
  },
  {
    question: "I see. Did you eat anything different yesterday?",
    answer: "Yes I ate some spicy food",
    explanation: "This response identifies a potential cause of the stomach pain by mentioning specific food type.",
    keywords: ["ate", "spicy", "food"]
  },
  {
    question: "Let me check your temperature. Can you open your mouth?",
    answer: "Yes I will open my mouth",
    explanation: "This response shows understanding and willingness to follow the doctor's instructions.",
    keywords: ["yes", "will", "open", "mouth"]
  },
  {
    question: "You have a slight fever. Have you been drinking enough water?",
    answer: "No I need to drink more water",
    explanation: "This response acknowledges the need to improve hydration, which is important when having a fever.",
    keywords: ["need", "drink", "more", "water"]
  },
  {
    question: "I'll give you some medicine. Will you take it on time?",
    answer: "Yes I will take the medicine",
    explanation: "This response shows responsibility and commitment to following the treatment plan.",
    keywords: ["yes", "will", "take", "medicine"]
  }
];

const SpeakingDoctorAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 border-2 border-cyan-200">
          <h1 className="text-2xl font-bold text-cyan-700 mb-6">
            🏥 Doctor Visit Conversation Guide
          </h1>

          <div className="space-y-6">
            {answers.map((item, index) => (
              <div key={index} className="bg-cyan-50 p-4 rounded-lg">
                {/* Question */}
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">👨‍⚕️</span>
                    Doctor's Question:
                  </h2>
                  <p className="text-cyan-800 pl-9">
                    "{item.question}"
                  </p>
                </div>

                {/* Expected Response */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">🗣️</span>
                    Expected Response:
                  </h3>
                  <p className="text-cyan-800 pl-9">
                    "{item.answer}"
                  </p>
                </div>

                {/* Key Words */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">🔑</span>
                    Key Words:
                  </h3>
                  <div className="pl-9 flex flex-wrap gap-2">
                    {item.keywords.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className="bg-cyan-100 px-2 py-1 rounded-full text-cyan-700 text-sm"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explanation */}
                <div>
                  <h3 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center">
                    <span className="text-2xl mr-2">💡</span>
                    Explanation:
                  </h3>
                  <p className="text-cyan-800 pl-9">
                    {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingDoctorAnswerKey; 
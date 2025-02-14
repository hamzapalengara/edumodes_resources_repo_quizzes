import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingHomeworkAnswerKey: React.FC = () => {
  const dialogue = [
    {
      speaker: 'teacher',
      text: "Hello! Did you finish your math homework?",
      response: "Yes I finished my math homework",
      emoji: '📚',
      explanation: 'Confirm that you completed your homework'
    },
    {
      speaker: 'teacher',
      text: "Great! Can you show me your counting exercise?",
      response: "Here is my counting exercise",
      emoji: '🔢',
      explanation: 'Show willingness to share your work'
    },
    {
      speaker: 'teacher',
      text: "Very neat work! Did you practice writing numbers?",
      response: "Yes I practiced writing numbers",
      emoji: '✏️',
      explanation: 'Confirm that you practiced the assigned task'
    },
    {
      speaker: 'teacher',
      text: "What was your favorite part of the homework?",
      response: "I liked counting the stars",
      emoji: '⭐',
      explanation: 'Share what you enjoyed about the homework'
    },
    {
      speaker: 'teacher',
      text: "Did you need help with any questions?",
      response: "No I did it by myself",
      emoji: '❓',
      explanation: 'Show independence in completing work'
    },
    {
      speaker: 'teacher',
      text: "Would you like some extra practice problems?",
      response: "Yes please I want more practice",
      emoji: '📝',
      explanation: 'Show enthusiasm for learning more'
    },
    {
      speaker: 'teacher',
      text: "Remember to check your work carefully!",
      response: "I will check my work carefully",
      emoji: '✅',
      explanation: 'Agree to be thorough with your work'
    },
    {
      speaker: 'teacher',
      text: "Did you enjoy learning about numbers?",
      response: "Yes I love learning numbers",
      emoji: '🎯',
      explanation: 'Express enthusiasm for learning'
    },
    {
      speaker: 'teacher',
      text: "Tomorrow we'll learn about shapes!",
      response: "I am excited to learn shapes",
      emoji: '🔷',
      explanation: 'Show excitement for future lessons'
    },
    {
      speaker: 'teacher',
      text: "You did a wonderful job today!",
      response: "Thank you teacher see you tomorrow",
      emoji: '🌟',
      explanation: 'Show gratitude and polite goodbye'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-teal-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">
              Speaking Practice with Teacher - Answer Key
            </h1>
            
            <div className="space-y-6">
              {dialogue.map((line, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg p-4"
                >
                  {/* Teacher's Line */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      👩‍🏫
                    </div>
                    <div className="flex-1">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{line.emoji}</span>
                          <p className="text-lg font-semibold text-purple-800">
                            {line.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expected Response */}
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      👧
                    </div>
                    <div className="flex-1">
                      <div className="bg-teal-50 rounded-lg p-3">
                        <p className="text-lg font-semibold text-teal-800">
                          {line.response}
                        </p>
                      </div>
                      <div className="mt-2 bg-white rounded-lg p-3 border border-teal-200">
                        <p className="text-sm text-teal-600">
                          💡 {line.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Speaking Tips */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                <span>🗣️</span> Key Speaking Tips:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-purple-700">
                  <span>✨</span>
                  Always respond politely and clearly
                </li>
                <li className="flex items-center gap-2 text-teal-700">
                  <span>🎯</span>
                  Show enthusiasm for learning
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <span>👂</span>
                  Listen carefully to instructions
                </li>
                <li className="flex items-center gap-2 text-teal-700">
                  <span>💝</span>
                  Express gratitude and appreciation
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <span>✅</span>
                  Take responsibility for your work
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingHomeworkAnswerKey; 
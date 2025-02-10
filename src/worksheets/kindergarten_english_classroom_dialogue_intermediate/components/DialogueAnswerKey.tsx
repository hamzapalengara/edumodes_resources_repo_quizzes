import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DialogueAnswerKey: React.FC = () => {
  const dialogue = [
    {
      speaker: 'student',
      sentence: 'Good morning teacher',
      emoji: '👋',
      explanation: 'A polite morning greeting to show respect to your teacher'
    },
    {
      speaker: 'teacher',
      sentence: 'Good morning everyone',
      emoji: '🌞',
      explanation: 'The teacher greets the whole class warmly'
    },
    {
      speaker: 'student',
      sentence: 'May I ask a question',
      emoji: '🤔',
      explanation: 'A polite way to ask permission before speaking'
    },
    {
      speaker: 'teacher',
      sentence: 'Yes please go ahead',
      emoji: '👍',
      explanation: 'The teacher gives permission in a friendly way'
    },
    {
      speaker: 'student',
      sentence: "I don't understand this",
      emoji: '😕',
      explanation: 'Expressing confusion or difficulty honestly'
    },
    {
      speaker: 'teacher',
      sentence: 'Let me explain again',
      emoji: '📚',
      explanation: 'The teacher offers to help by explaining again'
    },
    {
      speaker: 'student',
      sentence: 'Now I get it',
      emoji: '💡',
      explanation: 'Expressing understanding after the explanation'
    },
    {
      speaker: 'teacher',
      sentence: 'Very good job',
      emoji: '⭐',
      explanation: 'The teacher praises the student for understanding'
    },
    {
      speaker: 'student',
      sentence: 'Thank you for helping',
      emoji: '🙏',
      explanation: 'Showing gratitude for the teacher\'s help'
    },
    {
      speaker: 'teacher',
      sentence: 'You are welcome',
      emoji: '😊',
      explanation: 'A friendly response to being thanked'
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Classroom Dialogue - Answer Key</h1>
            
            <div className="space-y-4">
              {dialogue.map((line, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 ${
                    line.speaker === 'teacher' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    line.speaker === 'teacher' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {line.speaker === 'teacher' ? '👩‍🏫' : '👨‍🎓'}
                  </div>
                  <div className="flex-1">
                    <div className={`rounded-lg p-4 ${
                      line.speaker === 'teacher' ? 'bg-blue-50' : 'bg-green-50'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{line.emoji}</span>
                        <p className="text-lg font-semibold">{line.sentence}</p>
                      </div>
                      <p className="text-gray-600 text-sm">{line.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">Key Learning Points:</h2>
              <ul className="space-y-2 text-yellow-700">
                <li>• Always start with a polite greeting</li>
                <li>• Ask permission before speaking</li>
                <li>• Don't be afraid to say when you don't understand</li>
                <li>• Show gratitude when someone helps you</li>
                <li>• Use polite words like "please" and "thank you"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogueAnswerKey; 
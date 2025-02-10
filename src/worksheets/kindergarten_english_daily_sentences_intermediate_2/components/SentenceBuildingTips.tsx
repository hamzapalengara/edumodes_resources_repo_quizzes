import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SentenceBuildingTips: React.FC = () => {
  const tips = [
    {
      title: 'Start with Question Words',
      description: 'Words like "What", "Where", "May", "Can" usually come at the start of questions.',
      icon: '❓',
      example: 'In "What time is lunch today", start with "What"'
    },
    {
      title: 'Use Polite Words',
      description: 'Words like "May", "Please", "Would" make your sentences more polite.',
      icon: '🙏',
      example: 'In "May I borrow your pencil", "May" makes it polite'
    },
    {
      title: 'Add Time Words',
      description: 'Words about time (today, now) usually go at the end of the sentence.',
      icon: '⏰',
      example: 'In "Can we play together now", "now" goes at the end'
    },
    {
      title: 'Use Helper Words',
      description: 'Small words like "is", "to", "about" help connect the main parts.',
      icon: '🔄',
      example: 'In "Let me think about it", "about" connects the parts'
    },
    {
      title: 'Express Feelings',
      description: 'Use words that show how you feel or what you like.',
      icon: '😊',
      example: 'In "That sounds like fun", we show positive feelings'
    }
  ];

  const commonPatterns = [
    {
      pattern: 'Asking Questions',
      examples: [
        { wrong: 'time lunch what is today', correct: 'What time is lunch today' },
        { wrong: 'where you find that did', correct: 'Where did you find that' }
      ]
    },
    {
      pattern: 'Making Polite Requests',
      examples: [
        { wrong: 'I borrow pencil', correct: 'May I borrow your pencil' },
        { wrong: 'you like join', correct: 'Would you like to join' }
      ]
    },
    {
      pattern: 'Making Suggestions',
      examples: [
        { wrong: 'we go now outside', correct: 'Shall we go outside now' },
        { wrong: 'play together we can', correct: 'Can we play together now' }
      ]
    }
  ];

  const sentenceTypes = [
    {
      type: 'Questions',
      structure: 'Question Word + Helper + Subject + Verb + Details',
      examples: [
        'What time is lunch today?',
        'Where did you find that?'
      ]
    },
    {
      type: 'Polite Requests',
      structure: 'Polite Word + Subject + Verb + Object',
      examples: [
        'May I borrow your pencil?',
        'Would you like to join?'
      ]
    },
    {
      type: 'Statements',
      structure: 'Subject + Verb + Details',
      examples: [
        'This is my favorite book',
        'That sounds like fun'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Tips Section */}
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 mb-4">
            <h1 className="text-2xl font-bold text-center mb-6">Tips for Building Better Sentences</h1>
            
            <div className="grid gap-2 md:gap-4">
              {tips.map((tip, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 rounded-lg p-2 md:p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{tip.icon}</span>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-blue-700 mb-2">{tip.title}</h2>
                      <p className="text-gray-600 mb-2">{tip.description}</p>
                      <div className="bg-white rounded p-3">
                        <p className="text-gray-700 text-sm">
                          <span className="font-semibold">Example:</span> {tip.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Patterns Section */}
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 mb-4">
            <h2 className="text-xl font-bold text-center mb-6">Common Sentence Patterns</h2>
            
            <div className="grid gap-4">
              {commonPatterns.map((pattern, index) => (
                <div 
                  key={index}
                  className="bg-yellow-50 rounded-lg p-2 md:p-4"
                >
                  <h3 className="font-semibold text-yellow-800 mb-3">{pattern.pattern}</h3>
                  <div className="space-y-3">
                    {pattern.examples.map((example, i) => (
                      <div key={i} className="bg-white rounded p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-red-500">❌</span>
                          <p className="text-red-600">{example.wrong}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✅</span>
                          <p className="text-green-600 font-semibold">{example.correct}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sentence Types Section */}
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h2 className="text-xl font-bold text-center mb-6">Types of Sentences</h2>
            
            <div className="grid gap-4">
              {sentenceTypes.map((type, index) => (
                <div 
                  key={index}
                  className="bg-purple-50 rounded-lg p-2 md:p-4"
                >
                  <h3 className="font-semibold text-purple-800 mb-2">{type.type}</h3>
                  <p className="text-gray-600 mb-3">
                    <span className="font-medium">Structure:</span> {type.structure}
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm text-gray-700 mb-2">Examples:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {type.examples.map((example, i) => (
                        <li key={i} className="text-blue-600">{example}</li>
                      ))}
                    </ul>
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

export default SentenceBuildingTips; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SentenceBuildingAnswerKey: React.FC = () => {
  const sentences = [
    {
      sentence: 'May I borrow your pencil',
      image: '✏️',
      context: 'Polite way to ask for something',
      explanation: 'Starts with "May" for politeness, followed by subject (I), verb (borrow), and what you want to borrow'
    },
    {
      sentence: 'What time is lunch today',
      image: '🍱',
      context: 'Asking about schedule',
      explanation: 'Question word (What) + noun (time) + verb (is) + subject (lunch) + time word (today)'
    },
    {
      sentence: 'Can we play together now',
      image: '🎮',
      context: 'Inviting to play',
      explanation: 'Modal verb (Can) + subject (we) + verb (play) + how (together) + when (now)'
    },
    {
      sentence: 'Where did you find that',
      image: '🔍',
      context: 'Asking about location or source',
      explanation: 'Question word (Where) + helping verb (did) + subject (you) + verb (find) + object (that)'
    },
    {
      sentence: 'Do you need any help',
      image: '🤝',
      context: 'Offering assistance',
      explanation: 'Helping verb (Do) + subject (you) + verb (need) + modifier (any) + noun (help)'
    },
    {
      sentence: 'This is my favorite book',
      image: '📚',
      context: 'Expressing preference',
      explanation: 'Subject (This) + verb (is) + possessive (my) + adjective (favorite) + noun (book)'
    },
    {
      sentence: 'Shall we go outside now',
      image: '🌳',
      context: 'Making a suggestion',
      explanation: 'Modal verb (Shall) + subject (we) + verb (go) + where (outside) + when (now)'
    },
    {
      sentence: 'Let me think about it',
      image: '🤔',
      context: 'Asking for time to consider',
      explanation: 'Verb (Let) + object (me) + verb (think) + preposition phrase (about it)'
    },
    {
      sentence: 'That sounds like fun',
      image: '🎉',
      context: 'Showing enthusiasm',
      explanation: 'Subject (That) + verb (sounds) + preposition (like) + noun (fun)'
    },
    {
      sentence: 'Would you like to join',
      image: '👥',
      context: 'Inviting someone',
      explanation: 'Modal verb (Would) + subject (you) + verb (like) + infinitive (to join)'
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Daily Conversation Sentences - Answer Key</h1>
            
            <div className="grid gap-2 md:gap-4">
              {sentences.map((item, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 rounded-lg p-2 md:p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{item.image}</span>
                    <div className="flex-1">
                      <div className="mb-2">
                        <p className="text-lg font-semibold text-blue-700">{item.sentence}</p>
                        <p className="text-gray-600 italic">{item.context}</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="text-gray-700 text-sm">
                          <span className="font-semibold">Structure:</span> {item.explanation}
                        </p>
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

export default SentenceBuildingAnswerKey; 
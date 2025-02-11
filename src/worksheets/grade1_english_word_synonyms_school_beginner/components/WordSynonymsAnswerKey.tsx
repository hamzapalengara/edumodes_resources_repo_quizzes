import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_PAIRS = [
  {
    word1: 'Simple',
    word2: 'Easy',
    emoji1: '📖',
    emoji2: '✅',
    explanation: 'Both words describe something that is not difficult to understand or do, like basic math problems.',
  },
  {
    word1: 'Intelligent',
    word2: 'Clever',
    emoji1: '🧠',
    emoji2: '💡',
    explanation: 'These words describe someone who learns and understands things quickly and can solve problems well.',
  },
  {
    word1: 'Correct',
    word2: 'Right',
    emoji1: '✔️',
    emoji2: '👍',
    explanation: 'Both words mean that an answer or solution is accurate and without mistakes.',
  },
  {
    word1: 'Quick',
    word2: 'Speedy',
    emoji1: '⚡',
    emoji2: '🏃',
    explanation: 'These words describe doing something in a short amount of time, like finishing a quiz early.',
  },
  {
    word1: 'Bright',
    word2: 'Sharp',
    emoji1: '✨',
    emoji2: '📐',
    explanation: 'Both words describe someone who is smart and good at learning new things quickly.',
  },
  {
    word1: 'Knowledgeable',
    word2: 'Wise',
    emoji1: '📚',
    emoji2: '🦉',
    explanation: 'These words describe someone who knows a lot and can use what they know to make good decisions.',
  },
  {
    word1: 'Bold',
    word2: 'Courageous',
    emoji1: '💪',
    emoji2: '🦁',
    explanation: 'Both words describe being brave enough to try new things or face challenges in learning.',
  },
  {
    word1: 'Neat',
    word2: 'Orderly',
    emoji1: '📏',
    emoji2: '📝',
    explanation: 'These words describe keeping things well-organized and tidy, like your school supplies and homework.',
  },
  {
    word1: 'Attentive',
    word2: 'Focused',
    emoji1: '👀',
    emoji2: '🎯',
    explanation: 'Both words mean paying careful attention to what you are learning or doing in class.',
  },
  {
    word1: 'Thoughtful',
    word2: 'Considerate',
    emoji1: '🤔',
    emoji2: '💭',
    explanation: 'These words describe thinking carefully about others and being kind in your actions.',
  },
];

const WordSynonymsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h1 className="text-2xl font-bold text-blue-300 text-center mb-2">
            School & Learning Synonyms - Answer Key
          </h1>
          <p className="text-blue-200 text-center">
            Learn about words that mean the same thing in your learning journey
          </p>
        </div>

        <div className="grid gap-0.5 md:gap-4">
          {WORD_PAIRS.map((pair, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-black/40"
            >
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <div className="flex items-center bg-blue-900/50 rounded-lg px-3 py-1">
                  <span className="text-xl mr-2">{pair.emoji1}</span>
                  <span className="font-bold text-blue-300">{pair.word1}</span>
                </div>
                <div className="text-blue-300 font-bold">=</div>
                <div className="flex items-center bg-blue-900/50 rounded-lg px-3 py-1">
                  <span className="text-xl mr-2">{pair.emoji2}</span>
                  <span className="font-bold text-blue-300">{pair.word2}</span>
                </div>
              </div>
              <p className="text-blue-100 text-sm md:text-base">
                {pair.explanation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-blue-300 mb-4">
            Tips for Learning Synonyms
          </h2>
          <ul className="list-disc list-inside text-blue-100 space-y-2">
            <li>Use both words in sentences about your school day</li>
            <li>Practice with a study buddy to remember the pairs</li>
            <li>Look for these words in your textbooks and assignments</li>
            <li>Create your own examples using classroom situations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordSynonymsAnswerKey; 
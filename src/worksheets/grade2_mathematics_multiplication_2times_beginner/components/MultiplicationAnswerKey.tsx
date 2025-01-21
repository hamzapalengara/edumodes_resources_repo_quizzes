import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const MultiplicationAnswerKey: React.FC = () => {
  const problems = [
    {
      groups: 1,
      itemsPerGroup: 2,
      visual: '🍎 🍎',
      story: 'You have 1 basket with 2 apples.',
      question: 'How many apples are there in total?',
      explanation: '1 group of 2 apples = 1 × 2 = 2 apples'
    },
    {
      groups: 2,
      itemsPerGroup: 2,
      visual: '🌟 🌟  |  🌟 🌟',
      story: 'There are 2 groups of stars.',
      question: 'How many stars are there in total?',
      explanation: '2 groups of 2 stars = 2 × 2 = 4 stars'
    },
    {
      groups: 3,
      itemsPerGroup: 2,
      visual: '🎈 🎈  |  🎈 🎈  |  🎈 🎈',
      story: 'You have 3 friends, and each friend gets 2 balloons.',
      question: 'How many balloons are there in total?',
      explanation: '3 groups of 2 balloons = 3 × 2 = 6 balloons'
    },
    {
      groups: 4,
      itemsPerGroup: 2,
      visual: '🦋 🦋  |  🦋 🦋  |  🦋 🦋  |  🦋 🦋',
      story: 'There are 4 flowers, and each flower has 2 butterflies.',
      question: 'How many butterflies are there in total?',
      explanation: '4 groups of 2 butterflies = 4 × 2 = 8 butterflies'
    },
    {
      groups: 5,
      itemsPerGroup: 2,
      visual: '🐠 🐠  |  🐠 🐠  |  🐠 🐠  |  🐠 🐠  |  🐠 🐠',
      story: 'You see 5 fish bowls with 2 fish in each bowl.',
      question: 'How many fish are there in total?',
      explanation: '5 groups of 2 fish = 5 × 2 = 10 fish'
    },
    {
      groups: 6,
      itemsPerGroup: 2,
      visual: '🍪 🍪  |  🍪 🍪  |  🍪 🍪  |  🍪 🍪  |  🍪 🍪  |  🍪 🍪',
      story: 'Mom baked 6 batches of cookies with 2 cookies in each batch.',
      question: 'How many cookies are there in total?',
      explanation: '6 groups of 2 cookies = 6 × 2 = 12 cookies'
    },
    {
      groups: 7,
      itemsPerGroup: 2,
      visual: '🎨 🎨  |  🎨 🎨  |  🎨 🎨  |  🎨 🎨  |  🎨 🎨  |  🎨 🎨  |  🎨 🎨',
      story: 'The art teacher gave 7 students 2 paint brushes each.',
      question: 'How many paint brushes were given in total?',
      explanation: '7 groups of 2 paint brushes = 7 × 2 = 14 paint brushes'
    },
    {
      groups: 8,
      itemsPerGroup: 2,
      visual: '🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸  |  🌸 🌸',
      story: 'There are 8 flower pots with 2 flowers in each pot.',
      question: 'How many flowers are there in total?',
      explanation: '8 groups of 2 flowers = 8 × 2 = 16 flowers'
    },
    {
      groups: 9,
      itemsPerGroup: 2,
      visual: '🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁  |  🎁 🎁',
      story: 'You have 9 friends, and each friend gets 2 presents.',
      question: 'How many presents do you need in total?',
      explanation: '9 groups of 2 presents = 9 × 2 = 18 presents'
    },
    {
      groups: 10,
      itemsPerGroup: 2,
      visual: '⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐  |  ⭐ ⭐',
      story: 'You completed 10 tasks and earned 2 stars for each task!',
      question: 'How many stars did you earn in total?',
      explanation: '10 groups of 2 stars = 10 × 2 = 20 stars'
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <WorksheetHeader />
      <TouchContainer>
        <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8">
          <div className="bg-white md:rounded-lg md:border md:border-gray-200 p-4 md:p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
              2 Times Table Answer Key 🔑
            </h1>

            {/* Quick Reference */}
            <div className="bg-yellow-50 rounded-lg p-4 mb-6 md:mb-8 border-2 border-yellow-200">
              <h2 className="font-bold text-yellow-800 mb-2 text-lg">Quick Reference: 2 Times Table</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 text-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <div key={num} className="bg-white rounded-lg p-2 shadow-sm">
                    <div className="font-medium text-yellow-700">
                      {num} × 2 = {num * 2}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 md:p-6 border-2 border-blue-200">
                  <div className="grid grid-cols-1 gap-4">
                    {/* Problem Number */}
                    <div className="text-lg font-bold text-blue-600">
                      Question {index + 1}
                    </div>

                    {/* Story */}
                    <div className="text-lg font-medium mb-2 text-gray-700">
                      {problem.story}
                      <br />
                      <span className="text-blue-600">{problem.question}</span>
                    </div>

                    {/* Visual representation */}
                    <div className="text-2xl md:text-3xl mb-4 text-center break-words">
                      {problem.visual}
                    </div>

                    {/* Solution */}
                    <div className="bg-white rounded-lg p-3 md:p-4">
                      <div className="text-lg md:text-xl font-medium text-green-600 mb-2">
                        Solution: {problem.groups} × 2 = {problem.groups * 2}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-medium">Explanation:</span> {problem.explanation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pattern Recognition */}
            <div className="mt-6 md:mt-8 bg-purple-50 rounded-lg p-4 md:p-6 border-2 border-purple-200">
              <h2 className="font-bold text-purple-800 mb-4 text-xl">Did You Notice? 🤔</h2>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>When we multiply by 2, we're adding the same number twice</li>
                <li>The answers in the 2 times table are all even numbers</li>
                <li>Each answer is 2 more than the previous answer</li>
                <li>You can count by 2s to find the answers: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20</li>
              </ul>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default MultiplicationAnswerKey; 
import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const MultiplicationAnswerKey: React.FC = () => {
  const answers = [
    {
      story: 'You have 3 baskets with 2 apples in each basket.',
      total: 'In total, there are 6 apples.',
      repeated: '2 + 2 + 2',
      multiplication: '3 × 2',
      result: 6,
      visual: '🍎🍎 + 🍎🍎 + 🍎🍎',
      explanation: 'We can see 3 groups of 2 apples. Adding 2 three times (2 + 2 + 2) gives us 6, which is the same as multiplying 3 × 2 = 6'
    },
    {
      story: 'There are 3 dog parks with 3 puppies in each park.',
      total: 'In total, there are 9 puppies.',
      repeated: '3 + 3 + 3',
      multiplication: '3 × 3',
      result: 9,
      visual: '🐶🐶🐶 + 🐶🐶🐶 + 🐶🐶🐶',
      explanation: 'We have 3 parks with 3 puppies each. Adding 3 three times (3 + 3 + 3) gives us 9, which is the same as multiplying 3 × 3 = 9'
    },
    {
      story: 'You have 2 friends, and each friend gets 4 balloons.',
      total: 'In total, there are 8 balloons.',
      repeated: '4 + 4',
      multiplication: '2 × 4',
      result: 8,
      visual: '🎈🎈🎈🎈 + 🎈🎈🎈🎈',
      explanation: 'Each friend gets 4 balloons, and we have 2 friends. Adding 4 two times (4 + 4) gives us 8, which is the same as multiplying 2 × 4 = 8'
    },
    {
      story: '4 children each get 2 ice cream cones.',
      total: 'In total, there are 8 ice cream cones.',
      repeated: '2 + 2 + 2 + 2',
      multiplication: '4 × 2',
      result: 8,
      visual: '🍦🍦 + 🍦🍦 + 🍦🍦 + 🍦🍦',
      explanation: 'Each child gets 2 ice creams, and there are 4 children. Adding 2 four times (2 + 2 + 2 + 2) gives us 8, which is the same as multiplying 4 × 2 = 8'
    },
    {
      story: 'You completed 2 tasks and earned 5 stars for each task!',
      total: 'In total, there are 10 stars.',
      repeated: '5 + 5',
      multiplication: '2 × 5',
      result: 10,
      visual: '⭐⭐⭐⭐⭐ + ⭐⭐⭐⭐⭐',
      explanation: 'You earned 5 stars for each of the 2 tasks. Adding 5 two times (5 + 5) gives us 10, which is the same as multiplying 2 × 5 = 10'
    },
    {
      story: '4 birthday parties each have 3 presents to open.',
      total: 'In total, there are 12 presents.',
      repeated: '3 + 3 + 3 + 3',
      multiplication: '4 × 3',
      result: 12,
      visual: '🎁🎁🎁 + 🎁🎁🎁 + 🎁🎁🎁 + 🎁🎁🎁',
      explanation: 'There are 4 parties with 3 presents each. Adding 3 four times (3 + 3 + 3 + 3) gives us 12, which is the same as multiplying 4 × 3 = 12'
    },
    {
      story: '5 teams each scored 2 points in the game.',
      total: 'In total, there are 10 points.',
      repeated: '2 + 2 + 2 + 2 + 2',
      multiplication: '5 × 2',
      result: 10,
      visual: '🌟🌟 + 🌟🌟 + 🌟🌟 + 🌟🌟 + 🌟🌟',
      explanation: 'Each team scored 2 points, and there are 5 teams. Adding 2 five times (2 + 2 + 2 + 2 + 2) gives us 10, which is the same as multiplying 5 × 2 = 10'
    },
    {
      story: 'You baked 2 batches of cookies with 6 cookies in each batch.',
      total: 'In total, there are 12 cookies.',
      repeated: '6 + 6',
      multiplication: '2 × 6',
      result: 12,
      visual: '🍪🍪🍪🍪🍪🍪 + 🍪🍪🍪🍪🍪🍪',
      explanation: 'Each batch has 6 cookies, and you baked 2 batches. Adding 6 two times (6 + 6) gives us 12, which is the same as multiplying 2 × 6 = 12'
    },
    {
      story: '3 art classes each need 4 paint brushes.',
      total: 'In total, there are 12 paint brushes.',
      repeated: '4 + 4 + 4',
      multiplication: '3 × 4',
      result: 12,
      visual: '🎨🎨🎨🎨 + 🎨🎨🎨🎨 + 🎨🎨🎨🎨',
      explanation: 'Each class needs 4 brushes, and there are 3 classes. Adding 4 three times (4 + 4 + 4) gives us 12, which is the same as multiplying 3 × 4 = 12'
    },
    {
      story: 'You planted 5 flower pots with 3 flowers in each pot.',
      total: 'In total, there are 15 flowers.',
      repeated: '3 + 3 + 3 + 3 + 3',
      multiplication: '5 × 3',
      result: 15,
      visual: '🌸🌸🌸 + 🌸🌸🌸 + 🌸🌸🌸 + 🌸🌸🌸 + 🌸🌸🌸',
      explanation: 'Each pot has 3 flowers, and there are 5 pots. Adding 3 five times (3 + 3 + 3 + 3 + 3) gives us 15, which is the same as multiplying 5 × 3 = 15'
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <WorksheetHeader />
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">
              Multiplication Magic Solutions! ✨
            </h1>

            {/* Solutions */}
            <div className="space-y-8">
              {answers.map((answer, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                  <div className="mb-4">
                    <span className="font-bold text-purple-700 text-lg">Magic Puzzle {index + 1}:</span>
                  </div>
                  
                  {/* Story */}
                  <div className="text-lg text-gray-700 mb-2">
                    {answer.story}
                  </div>
                  <div className="text-lg text-purple-600 italic mb-4">
                    {answer.total}
                  </div>

                  {/* Visual */}
                  <div className="text-3xl mb-4 text-center">
                    {answer.visual}
                  </div>

                  {/* Solution */}
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-100">
                    <div className="flex flex-col gap-4">
                      {/* Repeated Addition */}
                      <div className="text-xl text-purple-600 font-medium">
                        Repeated Addition: {answer.repeated} = {answer.result}
                      </div>
                      {/* Multiplication */}
                      <div className="text-xl text-purple-600 font-medium">
                        Multiplication: {answer.multiplication} = {answer.result}
                      </div>
                    </div>
                    <div className="text-gray-600 bg-purple-50 p-3 rounded mt-4">
                      <span className="font-medium text-purple-700">How did we solve it? 🤔</span>
                      <br />
                      {answer.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Tips */}
            <div className="mt-8 bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <h2 className="text-xl font-bold text-green-700 mb-4">
                🌟 Helpful Tips for Learning Multiplication 🌟
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">🎨</span>
                  Draw pictures or use objects to make groups - it helps you see the multiplication!
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚀</span>
                  Remember: Multiplication is just a faster way to add the same number many times
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎮</span>
                  Practice by making up your own fun stories with groups of things
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💡</span>
                  Look for multiplication in everyday life - like pairs of socks or rows of chairs
                </li>
              </ul>
            </div>

            {/* Encouragement */}
            <div className="mt-6 text-center text-lg text-purple-600 font-medium">
              Keep practicing! You're becoming a multiplication master! 🌟
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default MultiplicationAnswerKey; 
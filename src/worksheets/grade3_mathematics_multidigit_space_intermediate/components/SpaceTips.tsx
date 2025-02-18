import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpaceTips: React.FC = () => {
  const tips = [
    {
      title: "Understanding Multi-Digit Operations",
      points: [
        "Line up digits carefully by place value (ones, tens, hundreds)",
        "Start solving from right to left",
        "Remember to carry or borrow when needed",
        "Double-check your work after completion"
      ]
    },
    {
      title: "Addition Tips",
      points: [
        "Add each column separately, starting from the right",
        "Remember to carry over when sum is 10 or greater",
        "Write the carried number small and clear",
        "Check by adding in reverse order"
      ]
    },
    {
      title: "Subtraction Tips",
      points: [
        "Always start with the larger number on top",
        "Borrow from the next column when needed",
        "Cross out and reduce the borrowed-from digit",
        "Check by adding your answer to the number you subtracted"
      ]
    },
    {
      title: "Multiplication Tips",
      points: [
        "Know your basic multiplication facts (1-12)",
        "Multiply each digit of the bottom number with each digit of the top number",
        "Keep numbers aligned properly",
        "Don't forget to add carried numbers"
      ]
    },
    {
      title: "Problem-Solving Strategy",
      points: [
        "Read the problem carefully",
        "Identify the important information",
        "Choose the correct operation",
        "Estimate your answer before calculating",
        "Check if your answer makes sense"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <WorksheetHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-white">
          <h1 className="text-3xl font-bold text-center mb-8">
            Space Math Adventure - Tips & Strategies 🚀
          </h1>

          <div className="grid gap-6">
            {tips.map((section, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-blue-300">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-blue-300">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-blue-300">
              Remember! 🌟
            </h2>
            <div className="space-y-3">
              <p>
                Take your time with each problem. It's better to solve them carefully
                than to rush and make mistakes.
              </p>
              <p>
                If you get stuck, try breaking the problem into smaller parts.
                Sometimes looking at a big number in pieces makes it easier to handle!
              </p>
              <p>
                Don't forget to use estimation to check if your answer makes sense.
                If you think something's wrong, it's okay to start over!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTips; 
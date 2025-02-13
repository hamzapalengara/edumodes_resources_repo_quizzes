import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Fixed dice combinations for consistent questions and answers
const DICE_COMBINATIONS = [
  { dice1: 2, dice2: 3, sum: 5 },  // Simple addition starting with smaller numbers
  { dice1: 4, dice2: 2, sum: 6 },  // Common sum of 6
  { dice1: 3, dice2: 5, sum: 8 },  // Mixed numbers
  { dice1: 6, dice2: 4, sum: 10 }, // Larger sum
  { dice1: 5, dice2: 5, sum: 10 }, // Double numbers
  { dice1: 6, dice2: 6, sum: 12 }, // Maximum possible sum
  { dice1: 1, dice2: 4, sum: 5 },  // Starting with 1
  { dice1: 3, dice2: 3, sum: 6 },  // Double numbers
  { dice1: 2, dice2: 5, sum: 7 },  // Mixed numbers
  { dice1: 4, dice2: 5, sum: 9 }   // Near maximum sum
];

const DiceAdditionAnswerKey: React.FC = () => {
  const renderDots = (number: number) => {
    const positions = {
      1: ['center'],
      2: ['top-left', 'bottom-right'],
      3: ['top-left', 'center', 'bottom-right'],
      4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
      6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right'],
    };

    return positions[number as keyof typeof positions].map((position, index) => (
      <div key={index} className={`dot ${position}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-rose-400">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Title */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            Answer Key: Adding Numbers on Dice
          </h1>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 md:p-4">
          {DICE_COMBINATIONS.map((combo, index) => (
            <div 
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-xl p-2 md:p-4 flex flex-col items-center"
            >
              {/* Question Number */}
              <div className="text-white text-lg font-bold mb-2">
                Question {index + 1}
              </div>
              
              {/* Dice Container - Stack on mobile, row on larger screens */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                {/* First Dice */}
                <div className="dice-face">
                  {renderDots(combo.dice1)}
                </div>

                {/* Plus Sign */}
                <div className="text-2xl md:text-3xl font-bold text-white">+</div>

                {/* Second Dice */}
                <div className="dice-face">
                  {renderDots(combo.dice2)}
                </div>

                {/* Equals Sign */}
                <div className="text-2xl md:text-3xl font-bold text-white">=</div>

                {/* Sum */}
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {combo.sum}
                </div>
              </div>

              {/* Explanation */}
              <p className="text-white text-center mt-2">
                {combo.dice1} + {combo.dice2} = {combo.sum}
              </p>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mt-4">
          <h2 className="text-xl font-bold text-white mb-2">How to Add:</h2>
          <ol className="list-decimal list-inside text-white space-y-2">
            <li>Count all dots on the first dice</li>
            <li>Count all dots on the second dice</li>
            <li>Add both numbers together to find the total sum</li>
            <li>Double-check your answer by counting again</li>
          </ol>
        </div>

        <style>{`
          .dice-face {
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 8px;
            box-shadow: 
              inset 0 0 15px rgba(0,0,0,0.1),
              0 5px 15px rgba(0,0,0,0.2);
            position: relative;
          }

          .dot {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #333;
            border-radius: 50%;
            box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
          }

          .center {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .top-left {
            top: 20%;
            left: 20%;
          }

          .top-right {
            top: 20%;
            right: 20%;
          }

          .middle-left {
            top: 50%;
            left: 20%;
            transform: translateY(-50%);
          }

          .middle-right {
            top: 50%;
            right: 20%;
            transform: translateY(-50%);
          }

          .bottom-left {
            bottom: 20%;
            left: 20%;
          }

          .bottom-right {
            bottom: 20%;
            right: 20%;
          }
        `}</style>
      </div>
    </div>
  );
};

export default DiceAdditionAnswerKey; 
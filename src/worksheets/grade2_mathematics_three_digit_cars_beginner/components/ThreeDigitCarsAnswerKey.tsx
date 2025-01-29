import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface Answer {
  id: number;
  number: number;
  targetDigit: number;
  targetPlace: 'hundreds' | 'tens' | 'ones';
  placeValue: number;
  explanation: string;
}

const ANSWERS: Answer[] = [
  {
    id: 1,
    number: 378,
    targetDigit: 7,
    targetPlace: 'tens',
    placeValue: 70,
    explanation: "The digit 7 is in the tens place. In the tens place, we multiply by 10: 7 × 10 = 70"
  },
  {
    id: 2,
    number: 542,
    targetDigit: 5,
    targetPlace: 'hundreds',
    placeValue: 500,
    explanation: "The digit 5 is in the hundreds place. In the hundreds place, we multiply by 100: 5 × 100 = 500"
  },
  {
    id: 3,
    number: 906,
    targetDigit: 6,
    targetPlace: 'ones',
    placeValue: 6,
    explanation: "The digit 6 is in the ones place. In the ones place, we multiply by 1: 6 × 1 = 6"
  },
  {
    id: 4,
    number: 234,
    targetDigit: 3,
    targetPlace: 'tens',
    placeValue: 30,
    explanation: "The digit 3 is in the tens place. In the tens place, we multiply by 10: 3 × 10 = 30"
  },
  {
    id: 5,
    number: 150,
    targetDigit: 1,
    targetPlace: 'hundreds',
    placeValue: 100,
    explanation: "The digit 1 is in the hundreds place. In the hundreds place, we multiply by 100: 1 × 100 = 100"
  },
  {
    id: 6,
    number: 847,
    targetDigit: 4,
    targetPlace: 'tens',
    placeValue: 40,
    explanation: "The digit 4 is in the tens place. In the tens place, we multiply by 10: 4 × 10 = 40"
  },
  {
    id: 7,
    number: 623,
    targetDigit: 2,
    targetPlace: 'tens',
    placeValue: 20,
    explanation: "The digit 2 is in the tens place. In the tens place, we multiply by 10: 2 × 10 = 20"
  },
  {
    id: 8,
    number: 495,
    targetDigit: 4,
    targetPlace: 'hundreds',
    placeValue: 400,
    explanation: "The digit 4 is in the hundreds place. In the hundreds place, we multiply by 100: 4 × 100 = 400"
  },
  {
    id: 9,
    number: 701,
    targetDigit: 0,
    targetPlace: 'tens',
    placeValue: 0,
    explanation: "The digit 0 is in the tens place. In the tens place, we multiply by 10: 0 × 10 = 0"
  },
  {
    id: 10,
    number: 359,
    targetDigit: 9,
    targetPlace: 'ones',
    placeValue: 9,
    explanation: "The digit 9 is in the ones place. In the ones place, we multiply by 1: 9 × 1 = 9"
  }
];

const QUICK_GUIDE = [
  {
    place: "Hundreds Place",
    rule: "Multiply by 100",
    example: "3 in hundreds = 3 × 100 = 300"
  },
  {
    place: "Tens Place",
    rule: "Multiply by 10",
    example: "3 in tens = 3 × 10 = 30"
  },
  {
    place: "Ones Place",
    rule: "Multiply by 1",
    example: "3 in ones = 3 × 1 = 3"
  }
];

const ThreeDigitCarsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-4">
              Place Value Answer Key
            </h1>
            <p className="text-center text-blue-600">
              Understanding the value of digits based on their place
            </p>
          </div>

          {/* Quick Guide */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Quick Place Value Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {QUICK_GUIDE.map((guide, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-bold text-blue-700 mb-2">{guide.place}</h3>
                  <p className="text-blue-600 font-semibold">{guide.rule}</p>
                  <p className="text-blue-500 text-sm mt-2">{guide.example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Answers */}
          <div className="space-y-4">
            {ANSWERS.map((answer) => (
              <div key={answer.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-700">Question {answer.id}</span>
                  <div className="bg-blue-100 rounded-lg px-4 py-2">
                    <span className="font-mono text-xl text-blue-700">{answer.number}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Car visualization */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-4">
                      <span className="text-4xl">🚗</span>
                      <div className="text-center">
                        <p className="text-blue-700 font-bold mb-2">Target Digit</p>
                        <div className="bg-blue-200 rounded-lg px-4 py-2">
                          <span className="font-mono text-2xl text-blue-700">{answer.targetDigit}</span>
                        </div>
                        <p className="text-blue-600 mt-2">in {answer.targetPlace} place</p>
                      </div>
                    </div>
                  </div>

                  {/* Answer explanation */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-700 font-bold mb-2">Place Value</p>
                    <div className="bg-blue-200 rounded-lg px-4 py-2 mb-2">
                      <span className="font-mono text-2xl text-blue-700">{answer.placeValue}</span>
                    </div>
                    <p className="text-blue-600">{answer.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ThreeDigitCarsAnswerKey; 
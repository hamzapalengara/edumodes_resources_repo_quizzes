import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface PlaceValueExample {
  number: number;
  hundreds: number;
  tens: number;
  ones: number;
  explanation: string;
}

const EXAMPLES: PlaceValueExample[] = [
  {
    number: 234,
    hundreds: 2,
    tens: 3,
    ones: 4,
    explanation: "234 = 200 + 30 + 4\n• 2 in hundreds place means 200\n• 3 in tens place means 30\n• 4 in ones place means 4\n• Together: 200 + 30 + 4 = 234"
  },
  {
    number: 567,
    hundreds: 5,
    tens: 6,
    ones: 7,
    explanation: "567 = 500 + 60 + 7\n• 5 in hundreds place means 500\n• 6 in tens place means 60\n• 7 in ones place means 7\n• Together: 500 + 60 + 7 = 567\n\nBe careful not to mix up with:\n• 576 (tens and ones swapped)\n• 657 (hundreds and tens swapped)\n• 765 (reading right to left)"
  },
  {
    number: 308,
    hundreds: 3,
    tens: 0,
    ones: 8,
    explanation: "308 = 300 + 0 + 8\n• 3 in hundreds place means 300\n• 0 in tens place means NO tens\n• 8 in ones place means 8\n• Together: 300 + 0 + 8 = 308\n\nRemember: The zero means there are no tens!"
  },
  {
    number: 150,
    hundreds: 1,
    tens: 5,
    ones: 0,
    explanation: "150 = 100 + 50 + 0\n• 1 in hundreds place means 100\n• 5 in tens place means 50\n• 0 in ones place means NO ones\n• Together: 100 + 50 + 0 = 150\n\nWatch out for: 105, 510, 501 (wrong place values)"
  },
  {
    number: 999,
    hundreds: 9,
    tens: 9,
    ones: 9,
    explanation: "999 = 900 + 90 + 9\n• 9 in hundreds place means 900\n• 9 in tens place means 90\n• 9 in ones place means 9\n• Together: 900 + 90 + 9 = 999\n\nThis is the largest three-digit number!"
  },
  {
    number: 203,
    hundreds: 2,
    tens: 0,
    ones: 3,
    explanation: "203 = 200 + 0 + 3\n• 2 in hundreds place means 200\n• 0 in tens place means NO tens\n• 3 in ones place means 3\n• Together: 200 + 0 + 3 = 203\n\nDon't confuse with:\n• 230 (zero in wrong place)\n• 320 (digits in wrong order)\n• 302 (digits mixed up)"
  },
  {
    number: 440,
    hundreds: 4,
    tens: 4,
    ones: 0,
    explanation: "440 = 400 + 40 + 0\n• 4 in hundreds place means 400\n• 4 in tens place means 40\n• 0 in ones place means NO ones\n• Together: 400 + 40 + 0 = 440\n\nNotice: Same digit (4) in hundreds and tens!"
  },
  {
    number: 700,
    hundreds: 7,
    tens: 0,
    ones: 0,
    explanation: "700 = 700 + 0 + 0\n• 7 in hundreds place means 700\n• 0 in tens place means NO tens\n• 0 in ones place means NO ones\n• Together: 700 + 0 + 0 = 700\n\nDon't confuse with:\n• 70 (missing hundreds)\n• 707 (added ones)\n• 770 (moved zero)"
  },
  {
    number: 125,
    hundreds: 1,
    tens: 2,
    ones: 5,
    explanation: "125 = 100 + 20 + 5\n• 1 in hundreds place means 100\n• 2 in tens place means 20\n• 5 in ones place means 5\n• Together: 100 + 20 + 5 = 125"
  },
  {
    number: 480,
    hundreds: 4,
    tens: 8,
    ones: 0,
    explanation: "480 = 400 + 80 + 0\n• 4 in hundreds place means 400\n• 8 in tens place means 80\n• 0 in ones place means NO ones\n• Together: 400 + 80 + 0 = 480\n\nDon't confuse with:\n• 408 (tens and ones swapped)\n• 840 (hundreds and tens swapped)\n• 804 (digits mixed up)"
  }
];

const ThreeDigitNumbersAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-4">
              Understanding Three-Digit Numbers
            </h1>
            <p className="text-center text-green-600">
              Learn how numbers are made up of hundreds, tens, and ones!
            </p>
          </div>

          {/* Special Cases Box */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              Special Cases to Remember 🌟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-700 mb-2">Numbers with Zero</h3>
                <ul className="space-y-2 text-green-600">
                  <li>• 308 has 0 tens (300 + 0 + 8)</li>
                  <li>• 150 has 0 ones (100 + 50 + 0)</li>
                  <li>• 700 has 0 tens AND 0 ones (700 + 0 + 0)</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-700 mb-2">Same Digits</h3>
                <ul className="space-y-2 text-green-600">
                  <li>• 999 is the biggest three-digit number</li>
                  <li>• 440 has same digit in hundreds and tens</li>
                  <li>• 111 would have same digit everywhere</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Place Value Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              Place Value Chart
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-green-200 p-3 bg-green-50 text-green-700">Hundreds</th>
                    <th className="border-2 border-green-200 p-3 bg-green-50 text-green-700">Tens</th>
                    <th className="border-2 border-green-200 p-3 bg-green-50 text-green-700">Ones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-green-200 p-3 text-center">Worth 100 each</td>
                    <td className="border-2 border-green-200 p-3 text-center">Worth 10 each</td>
                    <td className="border-2 border-green-200 p-3 text-center">Worth 1 each</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-green-200 p-3 text-center text-green-600">100, 200, 300...</td>
                    <td className="border-2 border-green-200 p-3 text-center text-green-600">10, 20, 30...</td>
                    <td className="border-2 border-green-200 p-3 text-center text-green-600">1, 2, 3...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Number Examples */}
          <div className="space-y-4">
            {EXAMPLES.map((example, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
              >
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  Example {index + 1}: {example.number}
                </h3>

                {/* Place Value Blocks */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-20 bg-purple-100 rounded-lg flex items-center justify-center text-2xl font-bold text-purple-700 mb-2">
                      {example.hundreds}
                    </div>
                    <div className="text-sm font-medium text-purple-600">Hundreds</div>
                    <div className="text-xs text-purple-500">{example.hundreds * 100}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-20 bg-blue-100 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-700 mb-2">
                      {example.tens}
                    </div>
                    <div className="text-sm font-medium text-blue-600">Tens</div>
                    <div className="text-xs text-blue-500">{example.tens * 10}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-20 bg-green-100 rounded-lg flex items-center justify-center text-2xl font-bold text-green-700 mb-2">
                      {example.ones}
                    </div>
                    <div className="text-sm font-medium text-green-600">Ones</div>
                    <div className="text-xs text-green-500">{example.ones}</div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="bg-green-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-green-700 font-medium">
                    {example.explanation}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Tips */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              Quick Tips for Success 💡
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-green-700">
                  Always read numbers from left to right (hundreds → tens → ones)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-green-700">
                  When you see a zero, that place has no value
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-green-700">
                  Each place is worth 10 times more than the place to its right
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-green-700">
                  Double-check your answer by adding up the values of each place
                </span>
              </li>
            </ul>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ThreeDigitNumbersAnswerKey; 
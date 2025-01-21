import React from 'react';

const padNumber = (num: number): string => {
  return num.toString().padStart(3, ' ');
};

const MultiDigitThumbnail: React.FC = () => {
  const example1 = { num1: 456, num2: 378, operation: '+' };
  const example2 = { num1: 832, num2: 547, operation: '-' };

  return (
    <div className="relative w-[500px] h-[375px] bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
      {/* Inner content container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[240px] bg-white rounded-2xl shadow-xl p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Stack & Solve: Multi-Digit Math 🔢
        </h1>

        {/* Examples Grid */}
        <div className="grid grid-cols-2 gap-6 mb-4">
          {/* Addition Example */}
          <div className="text-right font-mono">
            <pre className="mb-1">{padNumber(example1.num1)}</pre>
            <div className="flex items-center justify-end gap-2 mb-1">
              <span>{example1.operation}</span>
              <pre>{padNumber(example1.num2)}</pre>
            </div>
            <div className="border-t border-gray-400"></div>
          </div>

          {/* Subtraction Example */}
          <div className="text-right font-mono">
            <pre className="mb-1">{padNumber(example2.num1)}</pre>
            <div className="flex items-center justify-end gap-2 mb-1">
              <span>{example2.operation}</span>
              <pre>{padNumber(example2.num2)}</pre>
            </div>
            <div className="border-t border-gray-400"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-sm text-gray-600">
          Master multi-digit addition and subtraction with step-by-step guidance and instant feedback!
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white text-sm">
          15 Interactive Problems
        </p>
      </div>
    </div>
  );
};

export default MultiDigitThumbnail; 
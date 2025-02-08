import React from 'react';
import { motion } from 'framer-motion';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const MultiplicationSafariAnswerKey: React.FC = () => {
  const gridNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
  const correctAnswers = gridNumbers.filter(num => num % 4 === 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-700 to-green-800">
      <AnswerKeyHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Safari Explorer's Answer Map 🗺️
          </h2>

          <div className="space-y-6">
            <div className="bg-yellow-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                🎯 Complete Multiplication Path
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {gridNumbers.map((num) => (
                  <div
                    key={num}
                    className={`p-4 rounded-lg text-center font-bold ${
                      correctAnswers.includes(num)
                        ? 'bg-green-500/50 text-white'
                        : 'bg-gray-700/30 text-gray-400'
                    }`}
                  >
                    {num}
                    {correctAnswers.includes(num) && (
                      <div className="text-xs mt-1">
                        {num / 4} × 4 = {num}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">
                🦁 Animal Discovery Guide
              </h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {correctAnswers.slice(0, 5).map((num, index) => (
                  <div
                    key={num}
                    className="bg-white/10 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl mb-2">
                      {index === 0 && '🦁'}
                      {index === 1 && '🐘'}
                      {index === 2 && '🦒'}
                      {index === 3 && '🦏'}
                      {index === 4 && '🦓'}
                    </div>
                    <div className="text-white font-bold">
                      {num / 4} × 4 = {num}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                📝 Pattern Recognition
              </h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-100">
                <li>All answers are multiples of 4</li>
                <li>Each number increases by 4 from the previous</li>
                <li>The pattern follows: 4, 8, 12, 16, 20</li>
                <li>To find any answer, multiply the position by 4</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationSafariAnswerKey; 
import React from 'react';
import { motion } from 'framer-motion';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const TREAT_EMOJIS = ['🐟', '🥩', '🍗', '🥪', '🥓', '🍤', '🥐', '🧀', '🥨', '🥣'];
const TREAT_NAMES = ['fish', 'steak', 'chicken', 'sandwich', 'bacon', 'shrimp', 'croissant', 'cheese', 'pretzel', 'bowl of food'];

const MultiplicationPathAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-teal-50">
      <AnswerKeyHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            Multiplication Path Solution 🐱
          </h2>

          <div className="space-y-6">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                Complete Path to Food Bowl
              </h3>
              <p className="text-teal-700 mb-4">
                Follow the numbers multiplied by 2, starting from 2 and ending at 20.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {[2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map((number, index) => (
                  <React.Fragment key={number}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-teal-500 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                        {number}
                      </div>
                      <div className="absolute -top-6 text-2xl">
                        {TREAT_EMOJIS[index]}
                      </div>
                    </div>
                    {index < 9 && (
                      <div className="text-teal-500">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-2">
                Multiplication Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow">
                    <div className="text-red-700 font-semibold">
                      {index + 1} × 2 =
                    </div>
                    <div className="text-2xl font-bold text-red-800 flex items-center gap-2">
                      {(index + 1) * 2}
                      <span className="text-xl">{TREAT_EMOJIS[index]}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {TREAT_NAMES[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                Pattern Recognition
              </h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-700">
                <li>Each number in the path is even (ends in 0, 2, 4, 6, or 8)</li>
                <li>Each number is 2 more than the previous number</li>
                <li>The path follows the pattern: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20</li>
                <li>Final destination is the food bowl (20) 🥣</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationPathAnswerKey; 
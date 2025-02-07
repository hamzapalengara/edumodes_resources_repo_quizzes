import React from 'react';
import { motion } from 'framer-motion';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const SPACE_OBJECTS = ['🌟', '🌍', '🌙', '🪐', '☄️', '🌠', '🛸', '🚀', '🌌', '👨‍🚀'];
const OBJECT_NAMES = ['star', 'Earth', 'moon', 'Saturn', 'comet', 'shooting star', 'UFO', 'rocket', 'galaxy', 'astronaut'];

const MultiplicationSpaceAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900">
      <AnswerKeyHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Space Multiplication Solution 👨‍🚀
          </h2>

          <div className="space-y-6">
            <div className="bg-indigo-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Complete Path to Galaxy
              </h3>
              <p className="text-indigo-100 mb-4">
                Follow the numbers multiplied by 3, starting from 3 and ending at 30.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {[3, 6, 9, 12, 15, 18, 21, 24, 27, 30].map((number, index) => (
                  <React.Fragment key={number}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                        {number}
                      </div>
                      <div className="absolute -top-6 text-2xl">
                        {SPACE_OBJECTS[index]}
                      </div>
                    </div>
                    {index < 9 && (
                      <div className="text-white">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-purple-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Multiplication Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                    <div className="text-purple-100 font-semibold">
                      {index + 1} × 3 =
                    </div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                      {(index + 1) * 3}
                      <span className="text-xl">{SPACE_OBJECTS[index]}</span>
                    </div>
                    <div className="text-sm text-purple-200">
                      {OBJECT_NAMES[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-900/30 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-100 mb-2">
                Pattern Recognition
              </h3>
              <ul className="list-disc list-inside space-y-2 text-yellow-100">
                <li>Each number in the path is a multiple of 3</li>
                <li>Each number is 3 more than the previous number</li>
                <li>The path follows the pattern: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30</li>
                <li>Final destination is the galaxy (30) 🌌</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationSpaceAnswerKey; 
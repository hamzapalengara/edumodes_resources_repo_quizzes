import React from 'react';
import { motion } from 'framer-motion';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const COMPONENTS = ['🔧', '⚡', '🔌', '🔋', '💾', '🎮', '📱', '💻', '🤖', '🚀'];
const COMPONENT_NAMES = ['wrench', 'power', 'plug', 'battery', 'chip', 'controller', 'screen', 'processor', 'robot', 'rocket'];

const MultiplicationRobotAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-pink-900">
      <AnswerKeyHeader />
      
      <div className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Robot Assembly Solution 🤖
          </h2>

          <div className="space-y-6">
            <div className="bg-cyan-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Complete Assembly Sequence
              </h3>
              <p className="text-cyan-100 mb-4">
                Follow the numbers multiplied by 8, starting from 8 and ending at 80.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {[8, 16, 24, 32, 40, 48, 56, 64, 72, 80].map((number, index) => (
                  <React.Fragment key={number}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-cyan-500 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                        {number}
                      </div>
                      <div className="absolute -top-6 text-2xl">
                        {COMPONENTS[index]}
                      </div>
                    </div>
                    {index < 9 && (
                      <div className="text-white">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="bg-pink-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Multiplication Facts
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                    <div className="text-pink-100 font-semibold">
                      {index + 1} × 8 =
                    </div>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                      {(index + 1) * 8}
                      <span className="text-xl">{COMPONENTS[index]}</span>
                    </div>
                    <div className="text-sm text-pink-200">
                      {COMPONENT_NAMES[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cyan-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Pattern Recognition
              </h3>
              <ul className="list-disc list-inside space-y-2 text-cyan-100">
                <li>Each number in the path is a multiple of 8</li>
                <li>Each number is 8 more than the previous number</li>
                <li>The path follows the pattern: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80</li>
                <li>Final component is the rocket (80) 🚀</li>
              </ul>
            </div>

            <div className="bg-pink-900/50 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Assembly Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-pink-100">
                <li>To find any answer, multiply the position by 8</li>
                <li>Use skip counting: count by 8s to find the next number</li>
                <li>Think of each number as a group of robot components</li>
                <li>Visualize the robot getting more advanced with each component</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationRobotAnswerKey; 
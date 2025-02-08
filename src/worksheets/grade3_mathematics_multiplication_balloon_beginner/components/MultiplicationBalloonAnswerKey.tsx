import React from 'react';
import { motion } from 'framer-motion';
import AnswerKeyHeader from '../../../components/shared/layout/Header/AnswerKeyHeader';

const BALLOONS = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];

const MultiplicationBalloonAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-pink-100">
      <AnswerKeyHeader />
      
      <div className="max-w-4xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-3xl font-bold text-sky-600 mb-4 text-center">
            🎈 Balloon Festival Multiplication Guide 🎈
          </h2>
          
          <div className="space-y-6">
            {/* Complete Balloon Collection */}
            <section>
              <h3 className="text-2xl font-bold text-pink-500 mb-3">
                Complete Balloon Collection
              </h3>
              <div className="grid grid-cols-2 gap-4 bg-sky-50 rounded-lg p-4">
                {Array.from({ length: 10 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm"
                  >
                    <span className="text-2xl">{BALLOONS[i]}</span>
                    <div>
                      <div className="font-bold text-sky-600">
                        {(i + 1) * 10} Balloons
                      </div>
                      <div className="text-sm text-gray-600">
                        {i + 1} × 10 = {(i + 1) * 10}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Multiplication Facts */}
            <section className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-sky-600 mb-4">
                Multiplication by 10 Facts
              </h3>
              <div className="space-y-4">
                <div className="bg-sky-50 rounded-lg p-4">
                  <p className="font-bold text-lg mb-2">
                    🎯 The Zero Rule
                  </p>
                  <p>
                    When we multiply a number by 10, we just add a zero to the end of the number!
                  </p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="bg-white rounded p-2 text-center">
                      1 × 10 = 10
                    </div>
                    <div className="bg-white rounded p-2 text-center">
                      2 × 10 = 20
                    </div>
                    <div className="bg-white rounded p-2 text-center">
                      3 × 10 = 30
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-lg p-4">
                  <p className="font-bold text-lg mb-2">
                    🎈 Pattern Recognition
                  </p>
                  <p>
                    Notice how the answers always end in zero and increase by 10 each time:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {Array.from({ length: 10 }, (_, i) => (
                      <div key={i} className="bg-white rounded px-3 py-1">
                        {(i + 1) * 10}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Balloon Festival Tips */}
            <section className="bg-gradient-to-r from-sky-100 to-pink-100 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-sky-600 mb-4">
                Balloon Festival Tips
              </h3>
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-md rounded-lg p-4">
                  <p className="font-bold text-lg text-pink-500">
                    💡 Quick Counting Strategy
                  </p>
                  <p>
                    Count by 10s to find the next bundle: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-md rounded-lg p-4">
                  <p className="font-bold text-lg text-pink-500">
                    🎯 Visual Helper
                  </p>
                  <p>
                    Each balloon bundle represents a group of 10. To find the total, just count the number of bundles and add a zero!
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-lg p-4">
                  <p className="font-bold text-lg text-pink-500">
                    🌈 Remember
                  </p>
                  <p>
                    The balloons are arranged in order from 10 to 100. Follow the pattern to collect them all!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiplicationBalloonAnswerKey; 
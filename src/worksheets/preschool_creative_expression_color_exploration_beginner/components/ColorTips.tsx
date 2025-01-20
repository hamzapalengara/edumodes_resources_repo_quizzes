import React from 'react';
import TipsHeader from '../../../components/shared/layout/Header/TipsHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const ColorTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-white w-full">
      <TipsHeader />
      <TouchContainer>
        <div className="max-w-4xl mx-auto p-6 pt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
              Tips for Parents & Teachers
            </h1>

            <div className="space-y-8">
              {/* Getting Started */}
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-3">Getting Started</h2>
                <div className="bg-blue-50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ensure device audio is turned on</li>
                    <li>• Find a quiet environment for voice recognition</li>
                    <li>• Position the device at the child's eye level</li>
                    <li>• Sit with the child to provide guidance</li>
                  </ul>
                </div>
              </section>

              {/* Learning Strategies */}
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-3">Learning Strategies</h2>
                <div className="bg-green-50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Start with one color at a time</li>
                    <li>• Use clear, simple language</li>
                    <li>• Celebrate each successful attempt</li>
                    <li>• Connect colors to familiar objects</li>
                  </ul>
                </div>
              </section>

              {/* Troubleshooting */}
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-3">Troubleshooting</h2>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• If voice recognition fails, try speaking more clearly</li>
                    <li>• Ensure microphone access is enabled</li>
                    <li>• Refresh the page if audio stops working</li>
                    <li>• Take breaks if the child becomes frustrated</li>
                  </ul>
                </div>
              </section>

              {/* Extension Activities */}
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-3">Extension Activities</h2>
                <div className="bg-purple-50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Find objects of each color in your environment</li>
                    <li>• Draw pictures using the learned colors</li>
                    <li>• Sort toys or objects by color</li>
                    <li>• Play "I Spy" with colors</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default ColorTips; 
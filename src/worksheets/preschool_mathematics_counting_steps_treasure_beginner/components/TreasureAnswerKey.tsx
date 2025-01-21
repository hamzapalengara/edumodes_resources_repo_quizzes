import React, { useState } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

interface StepExample {
  id: number;
  footprints: number;
  explanation: string[];
}

const TreasureAnswerKey: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps: StepExample[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    footprints: i + 1,
    explanation: [
      `Look at step ${i + 1}`,
      `Count each footprint from left to right`,
      `There ${i + 1 === 1 ? 'is' : 'are'} ${i + 1} ${i + 1 === 1 ? 'footprint' : 'footprints'} in total`
    ]
  }));

  const renderFootprints = (count: number, isActive: boolean) => {
    return Array.from({ length: count }, (_, i) => (
      <div key={i} className="relative">
        <span
          className={`text-xl transform transition-all duration-300 ${
            isActive ? 'text-amber-500 scale-110' : 'text-amber-400'
          }`}
          style={{ marginLeft: i > 0 ? '0.5rem' : '0' }}
        >
          👣
        </span>
        {isActive && i === count - 1 && (
          <div className="absolute -top-8 left-0 transform -translate-x-1/4 animate-bounce">
            <span className="text-2xl inline-block" style={{ transform: 'scaleX(-1)' }}>🏃</span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-full md:max-w-4xl md:mx-auto md:p-6 md:pt-8 bg-white min-h-screen">
      <WorksheetHeader>
        <h1 className="text-2xl font-bold text-white">Counting Steps Guide</h1>
      </WorksheetHeader>

      <div className="md:p-6 space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg md:p-6 p-4">
          <h2 className="text-xl font-bold text-blue-800 mb-4">How to Count the Steps</h2>
          <p className="text-blue-700">
            Click on each row to see how to count the footprints. Remember to count from left to right!
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <TouchContainer key={step.id}>
              <div 
                className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 md:p-6 p-4 ${
                  activeStep === index 
                    ? 'border-purple-400 shadow-lg' 
                    : 'border-gray-200 hover:border-purple-200'
                }`}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                <div className="space-y-4">
                  {/* Step Number */}
                  <h3 className="text-lg font-semibold text-purple-800">
                    Step {step.id}
                  </h3>

                  {/* Footprints Display */}
                  <div className="flex items-center gap-4">
                    <div className="min-w-[2rem] w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                      {step.id}
                    </div>
                    <div className="flex-1 flex items-center gap-2 justify-start pl-2">
                      {renderFootprints(step.footprints, activeStep === index)}
                    </div>
                    <div className="text-3xl">
                      🎁
                    </div>
                  </div>

                  {/* Explanation */}
                  {activeStep === index && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="bg-purple-50 rounded-lg p-4">
                        {step.explanation.map((text, expIndex) => (
                          <div key={expIndex} className="flex items-start gap-2 mb-2">
                            <span className="text-purple-600 font-bold">{expIndex + 1}.</span>
                            <p className="text-purple-700">{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TouchContainer>
          ))}
        </div>

        {/* Tips Box */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg md:p-6 p-4">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Remember:</h3>
          <ul className="space-y-3 text-yellow-700">
            <li className="flex items-center gap-2">
              <span className="text-xl">👣</span>
              Count each footprint one by one
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">➡️</span>
              Always count from left to right
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">🏃</span>
              Follow the running friend
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl">🎁</span>
              Keep going until you reach the treasure
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TreasureAnswerKey; 
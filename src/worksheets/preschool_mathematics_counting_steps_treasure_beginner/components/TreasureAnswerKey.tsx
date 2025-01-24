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
      <div key={i} className="relative inline-flex shrink-0">
        <span
          className={`text-base xs:text-xl sm:text-2xl transform transition-all duration-300 ${
            isActive ? 'text-amber-500 scale-110' : 'text-amber-400'
          }`}
          style={{ marginLeft: i > 0 ? '0.25rem' : '0' }}
        >
          👣
        </span>
        {isActive && i === count - 1 && (
          <div className="absolute -top-6 xs:-top-8 sm:-top-10 left-0 transform -translate-x-1/4 animate-bounce">
            <span className="text-xl xs:text-2xl sm:text-3xl inline-block" style={{ transform: 'scaleX(-1)' }}>🏃</span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <WorksheetHeader>
        <h1 className="text-xl sm:text-2xl font-bold text-white px-4">Counting Steps Guide</h1>
      </WorksheetHeader>

      <div className="p-4 md:p-6 space-y-4 md:space-y-6 max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 md:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-blue-800 mb-3 sm:mb-4">How to Count the Steps</h2>
          <p className="text-blue-700 text-base sm:text-lg">
            Click on each row to see how to count the footprints. Remember to count from left to right!
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3 sm:space-y-4">
          {steps.map((step, index) => (
            <TouchContainer key={step.id}>
              <div 
                className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 p-4 sm:p-6 ${
                  activeStep === index 
                    ? 'border-purple-400 shadow-lg' 
                    : 'border-gray-200 hover:border-purple-200'
                }`}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Step Number */}
                  <h3 className="text-base sm:text-lg font-semibold text-purple-800">
                    Step {step.id}
                  </h3>

                  {/* Footprints Display */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="min-w-[2rem] w-8 h-8 sm:min-w-[2.5rem] sm:w-10 sm:h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shrink-0">
                      {step.id}
                    </div>
                    <div className="flex-1 flex items-center justify-start gap-1 sm:gap-3 pl-2 sm:pl-4 min-w-0 py-2">
                      {renderFootprints(step.footprints, activeStep === index)}
                    </div>
                    <div className="text-2xl sm:text-4xl shrink-0">
                      🎁
                    </div>
                  </div>

                  {/* Explanation */}
                  {activeStep === index && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
                        {step.explanation.map((text, expIndex) => (
                          <div key={expIndex} className="flex items-start gap-2 mb-2 last:mb-0">
                            <span className="text-purple-600 font-bold text-sm sm:text-base">{expIndex + 1}.</span>
                            <p className="text-purple-700 text-sm sm:text-base">{text}</p>
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
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 md:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-yellow-800 mb-3 sm:mb-4">Remember:</h3>
          <ul className="space-y-2 sm:space-y-3 text-yellow-700">
            <li className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">👣</span>
              <span className="text-sm sm:text-base">Count each footprint one by one</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">➡️</span>
              <span className="text-sm sm:text-base">Always count from left to right</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">🏃</span>
              <span className="text-sm sm:text-base">Follow the running friend</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">🎁</span>
              <span className="text-sm sm:text-base">Keep going until you reach the treasure</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TreasureAnswerKey; 
import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import WorksheetTracker, { WorksheetSummary } from '../../../components/shared/WorksheetTracker';

interface Step {
  id: number;
  isActive: boolean;
  isCompleted: boolean;
}

const TreasureWorksheet: React.FC = () => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVoiceReady, setIsVoiceReady] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Initialize speech synthesis
    synthRef.current = window.speechSynthesis;
    const loadVoices = () => {
      const voices = synthRef.current?.getVoices() || [];
      if (voices.length > 0) {
        setIsVoiceReady(true);
        speak("Let's count our steps to reach the treasure! Count each footprint as we go.");
      }
    };
    
    synthRef.current?.addEventListener('voiceschanged', loadVoices);
    loadVoices();

    // Initialize steps
    const initialSteps: Step[] = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      isActive: i === 0,
      isCompleted: false
    }));
    setSteps(initialSteps);

    return () => {
      synthRef.current?.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  const speak = (text: string) => {
    if (!synthRef.current || !isVoiceReady) return;
    
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    synthRef.current.speak(utterance);
  };

  const handleStepClick = (stepId: number, markAttempted: () => void, markCorrect: () => void) => {
    if (!steps[stepId - 1].isActive || isSpeaking) return;

    markAttempted();
    speak(`${stepId} ${stepId === 1 ? 'step' : 'steps'}! Keep going!`);

    setSteps(prevSteps => prevSteps.map(step => {
      if (step.id === stepId) {
        markCorrect();
        return { ...step, isCompleted: true, isActive: false };
      }
      if (step.id === stepId + 1) {
        return { ...step, isActive: true };
      }
      return step;
    }));

    setCurrentStep(stepId);

    if (stepId === 10) {
      setTimeout(() => {
        speak("Congratulations! You've counted all ten steps and reached the treasure!");
      }, 1000);
    }
  };

  const renderFootprints = (count: number, isActive: boolean, isCompleted: boolean) => {
    return Array.from({ length: count }, (_, i) => (
      <div key={i} className="relative inline-flex shrink-0">
        <span
          className={`text-base xs:text-xl sm:text-2xl transform transition-all duration-300 ${
            isActive ? 'text-amber-500 scale-110' :
            isCompleted ? 'text-amber-400' : 'text-gray-300'
          }`}
          style={{ marginLeft: i > 0 ? '0.25rem' : '0' }}
        >
          👣
        </span>
        {/* Runner above current footprint */}
        {isActive && i === count - 1 && (
          <div className="absolute -top-6 xs:-top-8 sm:-top-10 left-0 transform -translate-x-1/4 animate-bounce">
            <span className="text-xl xs:text-2xl sm:text-3xl inline-block" style={{ transform: 'scaleX(-1)' }}>🏃</span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <WorksheetTracker
      totalQuestions={10}
      pointsPerQuestion={10}
      onSummaryGenerated={(summary: WorksheetSummary) => {
        console.log('Counting Steps Worksheet Summary:', summary);
      }}
    >
      {({ markCorrect, markAttempted }) => (
        <div className="w-full min-h-screen bg-white">
          <WorksheetHeader>
            <h1 className="text-xl sm:text-2xl font-bold text-white px-4">Count Steps to the Treasure!</h1>
          </WorksheetHeader>

          <div className="p-4 md:p-6 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            {/* Instructions */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4 md:p-6">
              <p className="text-amber-800 text-base sm:text-lg">
                Help our friend count the footsteps to reach the treasure! Count from left to right.
              </p>
            </div>

            {/* Steps */}
            <div className="relative space-y-3 sm:space-y-5">
              {steps.map((step) => (
                <TouchContainer key={step.id}>
                  <div
                    className={`relative p-4 sm:p-6 rounded-lg transition-all duration-300 cursor-pointer
                      ${step.isActive ? 'bg-yellow-100 shadow-lg scale-105' : 
                        step.isCompleted ? 'bg-green-50' : 'bg-gray-50'}`}
                    onClick={() => handleStepClick(step.id, markAttempted, markCorrect)}
                  >
                    <div className="flex items-center gap-3 sm:gap-6">
                      {/* Step number */}
                      <div className="min-w-[2rem] w-8 h-8 sm:min-w-[2.5rem] sm:w-10 sm:h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shrink-0">
                        {step.id}
                      </div>

                      {/* Footprints with runner */}
                      <div className="flex-1 flex items-center justify-start gap-1 sm:gap-3 pl-2 sm:pl-4 min-w-0 py-2">
                        {renderFootprints(step.id, step.isActive, step.isCompleted)}
                      </div>

                      {/* Checkmark */}
                      {step.isCompleted && (
                        <span className="text-xl sm:text-3xl text-green-500 shrink-0">✓</span>
                      )}
                    </div>

                    {step.isActive && (
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-2xl sm:text-4xl animate-bounce">
                        👆
                      </div>
                    )}
                  </div>
                </TouchContainer>
              ))}
            </div>

            {/* Treasure at the bottom */}
            <div className="flex justify-center items-center mt-6 sm:mt-8">
              <div className={`relative ${currentStep === 10 ? 'scale-150 transition-transform duration-1000' : ''}`}>
                <div className={`text-4xl sm:text-6xl ${
                  currentStep === 10 ? 'animate-bounce' : 
                  steps[9]?.isActive ? 'animate-pulse' : 'opacity-50'
                }`}>
                  🎁
                </div>
                {currentStep === 10 && (
                  <>
                    {/* Celebration effects */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-bounce text-4xl sm:text-6xl">
                      🎉
                    </div>
                    <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 animate-bounce delay-100 text-4xl sm:text-6xl">
                      ⭐
                    </div>
                    <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 animate-bounce delay-200 text-4xl sm:text-6xl">
                      🌟
                    </div>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce delay-300 text-4xl sm:text-6xl">
                      🎊
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Celebration Message */}
            {currentStep === 10 && (
              <div className="text-center animate-fadeIn">
                <div className="flex justify-center items-center gap-3 sm:gap-6 text-4xl sm:text-6xl mb-4">
                  <span className="transform" style={{ transform: 'scaleX(-1)' }}>🏃</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-amber-600 mt-4 animate-pulse">
                  Congratulations! You've counted all ten steps and found the treasure! 🎉
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </WorksheetTracker>
  );
};

export default TreasureWorksheet; 
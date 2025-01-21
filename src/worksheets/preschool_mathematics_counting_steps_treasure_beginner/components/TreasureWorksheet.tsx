import React, { useState, useEffect, useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

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

  const handleStepClick = (stepId: number) => {
    if (!steps[stepId - 1].isActive || isSpeaking) return;

    speak(`${stepId} ${stepId === 1 ? 'step' : 'steps'}! Keep going!`);

    setSteps(prevSteps => prevSteps.map(step => {
      if (step.id === stepId) {
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
      <div key={i} className="relative">
        <span
          className={`text-xl transform transition-all duration-300 ${
            isActive ? 'text-amber-500 scale-110' :
            isCompleted ? 'text-amber-400' : 'text-gray-300'
          }`}
          style={{ marginLeft: i > 0 ? '0.5rem' : '0' }}
        >
          👣
        </span>
        {/* Runner above current footprint */}
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
        <h1 className="text-2xl font-bold text-white">Count Steps to the Treasure!</h1>
      </WorksheetHeader>

      <div className="md:p-6 space-y-6">
        {/* Instructions */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg md:p-6 p-4">
          <p className="text-amber-800 text-lg">
            Help our friend count the footsteps to reach the treasure! Count from left to right.
          </p>
        </div>

        {/* Steps */}
        <div className="relative space-y-4">
          {steps.map((step) => (
            <TouchContainer key={step.id}>
              <div
                className={`relative p-4 rounded-lg transition-all duration-300 cursor-pointer
                  ${step.isActive ? 'bg-yellow-100 shadow-lg scale-105' : 
                    step.isCompleted ? 'bg-green-50' : 'bg-gray-50'}`}
                onClick={() => handleStepClick(step.id)}
              >
                <div className="flex items-center gap-4">
                  {/* Step number */}
                  <div className="min-w-[2rem] w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                    {step.id}
                  </div>

                  {/* Footprints with runner */}
                  <div className="flex-1 flex items-center gap-2 justify-start pl-2">
                    {renderFootprints(step.id, step.isActive, step.isCompleted)}
                  </div>

                  {/* Treasure */}
                  <div className={`text-3xl transition-all duration-300 ${
                    step.isCompleted ? 'opacity-50' : 
                    step.isActive ? 'animate-pulse' : ''
                  }`}>
                    🎁
                  </div>

                  {/* Checkmark */}
                  {step.isCompleted && (
                    <span className="text-green-500 text-2xl ml-2">✓</span>
                  )}
                </div>

                {step.isActive && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-3xl animate-bounce">
                    👆
                  </div>
                )}
              </div>
            </TouchContainer>
          ))}
        </div>

        {/* Celebration */}
        {currentStep === 10 && (
          <div className="text-center animate-bounce">
            <div className="flex justify-center gap-4 text-6xl">
              <span>🎉</span>
              <span className="transform" style={{ transform: 'scaleX(-1)' }}>🏃</span>
              <span>🎁</span>
            </div>
            <p className="text-2xl font-bold text-amber-600 mt-4">
              You counted all the steps and found the treasure!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreasureWorksheet; 
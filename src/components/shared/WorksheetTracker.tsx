import React, { useEffect, useState } from 'react';

export interface WorksheetSummary {
  summary: {
    total_questions: number;
    questions_attempted: number;
    correct_answers: number;
    incorrect_answers: number;
    total_score: number;
    completion_time: string;
    time_spent_seconds: number;
  }
}

interface WorksheetTrackerProps {
  // Required props
  totalQuestions: number;
  pointsPerQuestion?: number;  // Default to 10
  
  // Optional callback when summary is generated
  onSummaryGenerated?: (summary: WorksheetSummary) => void;
  
  // Children render prop to expose tracking methods
  children: (props: {
    // Score tracking
    score: number;
    maxScore: number;
    addPoints: (points?: number) => void;
    
    // Question tracking
    markAttempted: () => void;
    markCorrect: () => void;
    markIncorrect: () => void;
    
    // Progress info
    questionsAttempted: number;
    correctAnswers: number;
    incorrectAnswers: number;
    
    // Reset functionality
    reset: () => void;
  }) => React.ReactNode;
}

const WorksheetTracker: React.FC<WorksheetTrackerProps> = ({
  totalQuestions,
  pointsPerQuestion = 10,
  onSummaryGenerated,
  children
}) => {
  // Scoring state
  const [score, setScore] = useState(0);
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [startTime] = useState<Date>(new Date());

  const maxScore = totalQuestions * pointsPerQuestion;

  // Message listener for summary requests
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('📝 Worksheet received message:', event.data);
      
      const isRequestingSummary = 
        event.data === 'GET_SUMMARY' || 
        event.data === 'REQUEST_SUMMARY' ||
        event.data?.type === 'REQUEST_SUMMARY' ||
        event.data?.type === 'GET_SUMMARY';

      if (isRequestingSummary) {
        console.log('📊 Creating worksheet summary...');
        const summary: WorksheetSummary = {
          summary: {
            total_questions: totalQuestions,
            questions_attempted: questionsAttempted,
            correct_answers: correctAnswers,
            incorrect_answers: incorrectAnswers,
            total_score: (score / maxScore) * 100,
            completion_time: new Date().toISOString(),
            time_spent_seconds: Math.round((new Date().getTime() - startTime.getTime()) / 1000)
          }
        };
        
        console.log('📤 Sending worksheet summary:', summary);
        window.parent.postMessage({ type: 'WORKSHEET_SUMMARY', data: summary }, '*');
        
        // Notify parent component if callback provided
        onSummaryGenerated?.(summary);
      }
    };

    window.addEventListener('message', handleMessage);
    console.log('🎯 Worksheet summary listener attached');
    
    return () => {
      console.log('🔄 Worksheet summary listener removed');
      window.removeEventListener('message', handleMessage);
    };
  }, [score, questionsAttempted, correctAnswers, incorrectAnswers, totalQuestions, maxScore, startTime, onSummaryGenerated]);

  // Score tracking methods
  const addPoints = (points: number = pointsPerQuestion) => {
    setScore(prev => Math.min(prev + points, maxScore));
  };

  const markAttempted = () => {
    setQuestionsAttempted(prev => prev + 1);
  };

  const markCorrect = () => {
    setCorrectAnswers(prev => prev + 1);
    addPoints();
  };

  const markIncorrect = () => {
    setIncorrectAnswers(prev => prev + 1);
  };

  const reset = () => {
    setScore(0);
    setQuestionsAttempted(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  return children({
    score,
    maxScore,
    addPoints,
    markAttempted,
    markCorrect,
    markIncorrect,
    questionsAttempted,
    correctAnswers,
    incorrectAnswers,
    reset
  });
};

export default WorksheetTracker; 
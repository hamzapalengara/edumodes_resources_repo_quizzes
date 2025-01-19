import React from 'react';
import BaseHeader from './BaseHeader';

interface AnswerKeyHeaderProps {
  children?: React.ReactNode;
}

const AnswerKeyHeader: React.FC<AnswerKeyHeaderProps> = ({ children }) => {
  return (
    <BaseHeader gradient="bg-gradient-to-r from-green-500 to-emerald-700">
      {children}
    </BaseHeader>
  );
};

export default AnswerKeyHeader; 
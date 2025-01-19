import React from 'react';
import BaseHeader from './BaseHeader';

interface WorksheetHeaderProps {
  children?: React.ReactNode;
}

const WorksheetHeader: React.FC<WorksheetHeaderProps> = ({ children }) => {
  return (
    <BaseHeader gradient="bg-gradient-to-r from-pink-500 to-yellow-500">
      {children}
    </BaseHeader>
  );
};

export default WorksheetHeader; 
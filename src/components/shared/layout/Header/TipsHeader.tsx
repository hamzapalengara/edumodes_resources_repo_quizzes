import React from 'react';
import BaseHeader from './BaseHeader';

interface TipsHeaderProps {
  children?: React.ReactNode;
}

const TipsHeader: React.FC<TipsHeaderProps> = ({ children }) => {
  return (
    <BaseHeader gradient="bg-gradient-to-r from-yellow-500 to-orange-500">
      {children}
    </BaseHeader>
  );
};

export default TipsHeader; 
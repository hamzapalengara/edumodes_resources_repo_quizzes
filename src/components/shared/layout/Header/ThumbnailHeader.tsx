import React from 'react';
import BaseHeader from './BaseHeader';

interface ThumbnailHeaderProps {
  children?: React.ReactNode;
}

const ThumbnailHeader: React.FC<ThumbnailHeaderProps> = ({ children }) => {
  return (
    <BaseHeader gradient="bg-gradient-to-r from-pink-500 to-yellow-500">
      {children}
    </BaseHeader>
  );
};

export default ThumbnailHeader; 
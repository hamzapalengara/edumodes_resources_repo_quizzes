import React from 'react';
import BaseContainer from './BaseContainer';

interface TouchContainerProps {
  children: React.ReactNode;
  className?: string;
}

const TouchContainer: React.FC<TouchContainerProps> = ({ children, className = '' }) => {
  return (
    <BaseContainer
      className={`
        min-h-[44px]                     /* Minimum touch target height */
        touch-manipulation                /* Optimize for touch */
        -webkit-tap-highlight-color-transparent
        select-none                      /* Prevent text selection */
        ${className}
      `}
    >
      <div className="
        space-y-4                        /* Spacing between elements */
        [&>*]:min-h-[44px]              /* All direct children minimum height */
        [&>*]:w-full                    /* Full width children on mobile */
      ">
        {children}
      </div>
    </BaseContainer>
  );
};

export default TouchContainer; 
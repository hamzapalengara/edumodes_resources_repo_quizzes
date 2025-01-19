import React from 'react';

interface BaseContainerProps {
  children: React.ReactNode;
  className?: string;
}

const BaseContainer: React.FC<BaseContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      min-w-[280px]                    /* Minimum width for Galaxy Fold */
      w-full                           /* Full width on mobile */
      mx-auto                          /* Center on larger screens */
      px-0 sm:px-4                     /* No horizontal padding on mobile */
      py-3 sm:py-6                     /* Vertical padding */
      max-w-7xl                        /* Maximum width on large screens */
      ${className}                     /* Additional classes */
    `}>
      {children}
    </div>
  );
};

export default BaseContainer; 
import React from 'react';

interface BaseHeaderProps {
  gradient?: string;  // Tailwind gradient classes
  children?: React.ReactNode;
  themeColor?: string; // Theme color for meta tag
  size?: 'small' | 'default' | 'large';
}

const sizeClasses = {
  small: {
    e: 'text-xl',
    du: 'text-lg',
    modes: 'text-lg'
  },
  default: {
    e: 'text-3xl',
    du: 'text-2xl',
    modes: 'text-2xl'
  },
  large: {
    e: 'text-4xl',
    du: 'text-3xl',
    modes: 'text-3xl'
  }
};

const BaseHeader: React.FC<BaseHeaderProps> = ({ 
  gradient = '', 
  children,
  themeColor = '#EC4899', // Default pink theme
  size = 'small'
}) => {
  // Update theme color meta tag
  React.useEffect(() => {
    // Add Fredoka One font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = themeColor;
      document.head.appendChild(meta);
    }

    // Cleanup
    return () => {
      document.head.removeChild(link);
    };
  }, [themeColor]);

  return (
    <nav className="border-b print:border-0 bg-white">
      <div className="container mx-auto">
        <div className="px-0 sm:px-4 pt-0 pb-1">
          <div className="flex items-center justify-between">
            {/* Logo Section - Always visible */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline group">
                {/* E */}
                <div className="inline-block transform-origin-center">
                  <span 
                    className={`${sizeClasses[size].e} font-['Fredoka_One'] tracking-[0.5px] text-primary-500
                    [-webkit-text-stroke:1.5px_#2C3E50] [paint-order:stroke_fill]
                    group-hover:scale-105 transition-all duration-300 ease-out hover:-rotate-6`}
                  >
                    E
                  </span>
                </div>
                
                {/* du */}
                <div className="inline-block transform-origin-center">
                  <span 
                    className={`${sizeClasses[size].du} font-['Fredoka_One'] tracking-[0.5px] text-primary-500
                    [-webkit-text-stroke:1.5px_#2C3E50] [paint-order:stroke_fill]
                    group-hover:scale-105 transition-all duration-300 ease-out hover:rotate-3`}
                  >
                    du
                  </span>
                </div>
                
                {/* Modes */}
                <div className="inline-block transform-origin-center ml-0.5">
                  <span 
                    className={`${sizeClasses[size].modes} font-['Fredoka_One'] tracking-[0.5px] text-secondary-500
                    [-webkit-text-stroke:1.5px_#2C3E50] [paint-order:stroke_fill]
                    group-hover:scale-105 transition-all duration-300 ease-out hover:rotate-6`}
                  >
                    Modes
                  </span>
                </div>
              </div>
              <a 
                href="https://www.edumodes.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[9px] sm:text-[10px] text-gray-500 hover:text-gray-800 leading-tight truncate"
              >
                www.edumodes.com
              </a>
            </div>

            {/* Additional header content */}
            {children}
          </div>
        </div>
      </div>

      {/* Gradient Bar */}
      {gradient && (
        <div className={`h-1 ${gradient}`} />
      )}
    </nav>
  );
};

export default BaseHeader; 
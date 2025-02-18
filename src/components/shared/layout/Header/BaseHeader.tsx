import React from 'react';

interface BaseHeaderProps {
  gradient?: string;  // Tailwind gradient classes
  children?: React.ReactNode;
  themeColor?: string; // Theme color for meta tag
  size?: 'small' | 'default' | 'large';
}

const sizeClasses = {
  small: {
    container: 'flex items-baseline',
    e: 'text-xl',
    du: 'text-xl',
    modes: 'text-xl'
  },
  default: {
    container: 'flex items-baseline',
    e: 'text-2xl',
    du: 'text-2xl',
    modes: 'text-2xl'
  },
  large: {
    container: 'flex items-baseline',
    e: 'text-3xl',
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

    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
      .kidszoo-style {
        font-family: 'Fredoka One', cursive;
        letter-spacing: 0.5px;
        paint-order: stroke fill;
      }

      .letter-box {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        line-height: 1;
        border-radius: 0.15em;
        transform-origin: center;
        box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1),
                   inset -0.5px -0.5px 1px rgba(0, 0, 0, 0.05),
                   inset 0.5px 0.5px 1px rgba(255, 255, 255, 0.1);
        border: 1px solid #FCD34D;
        margin: 0 0.02em;
        height: 1.2em;
        width: 1.2em;
        aspect-ratio: 1;
        text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.2);
        background-image: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.15) 0%, 
            rgba(255, 255, 255, 0) 50%, 
            rgba(0, 0, 0, 0.05) 100%);
      }

      .letter-box.e-box {
        transform: rotate(4deg);
        margin-top: 0.1em;
        width: 0.9em;
      }

      .letter-box.m-box {
        transform: rotate(-4deg);
        margin-top: 0.1em;
      }

      .letter-container {
        display: inline-block;
        transform-origin: center;
      }

      @keyframes tiltBounceRight {
        0%, 100% { transform: rotate(4deg); }
        50% { transform: rotate(-2deg); }
      }

      @keyframes tiltBounceLeft {
        0%, 100% { transform: rotate(-4deg); }
        50% { transform: rotate(2deg); }
      }

      .tilt-e {
        animation: tiltBounceRight 3s ease-in-out infinite;
      }

      .tilt-m {
        animation: tiltBounceLeft 3s ease-in-out infinite;
      }

      .letter-container:hover .letter-box {
        animation-play-state: paused;
        transform: rotate(0deg) scale(1.1);
        transition: all 0.3s ease-out;
        box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1),
                   inset -0.5px -0.5px 1px rgba(0, 0, 0, 0.05),
                   inset 0.5px 0.5px 1px rgba(255, 255, 255, 0.2);
      }

      .bounce-effect {
        animation: bounce 1s ease-in-out infinite;
      }

      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-3px); }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, [themeColor]);

  return (
    <nav className="border-b print:border-0 bg-white">
      <div className="container mx-auto">
        <div className="px-0 sm:px-4 pt-0 pb-1">
          <div className="flex items-center justify-between">
            {/* Logo Section - Always visible */}
            <div className="flex flex-col min-w-0">
              <div className={sizeClasses[size].container}>
                <div className="flex items-baseline">
                  {/* Special E with box */}
                  <div className="letter-container">
                    <div className={`${sizeClasses[size].e} kidszoo-style letter-box e-box tilt-e bg-secondary-600 text-white leading-none flex items-center justify-center`}>E</div>
                  </div>
                  
                  {/* du */}
                  <div className="letter-container -ml-1">
                    <span className={`${sizeClasses[size].du} kidszoo-style text-primary-500 bounce-effect leading-none`}>du</span>
                  </div>
                </div>
                
                {/* Modes with boxed M */}
                <div className="letter-container ml-0.5">
                  <span className={`${sizeClasses[size].modes} kidszoo-style`}>
                    <span className="letter-box m-box tilt-m bg-primary-600 text-white leading-none flex items-center justify-center">M</span>
                    <span className="text-secondary-500 bounce-effect -ml-1">odes</span>
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
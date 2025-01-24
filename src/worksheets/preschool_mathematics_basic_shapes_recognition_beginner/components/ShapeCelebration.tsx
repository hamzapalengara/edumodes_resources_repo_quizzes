import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ShapeCelebrationProps {
  onComplete?: () => void;
}

const ShapeCelebration: React.FC<ShapeCelebrationProps> = ({ onComplete }) => {
  useEffect(() => {
    // First burst of confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#FF69B4', '#4CAF50', '#FFC107', '#2196F3', '#9C27B0'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Fire stars
    setTimeout(() => {
      const starConfetti = () => {
        confetti({
          spread: 360,
          ticks: 50,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
          colors: colors,
          particleCount: 40,
          scalar: 2,
          origin: { x: 0.3, y: 0.6 }
        });
        confetti({
          spread: 360,
          ticks: 50,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
          colors: colors,
          particleCount: 40,
          scalar: 2,
          origin: { x: 0.7, y: 0.6 }
        });
      };

      starConfetti();
    }, 1000);

    // Cleanup and callback
    const timer = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 md:p-8 text-center transform animate-celebration max-w-md mx-4">
        <div className="space-y-4">
          <div className="text-4xl md:text-6xl animate-bounce">
            🎉
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-purple-600 animate-pulse">
            Amazing Job!
          </h2>
          <p className="text-lg md:text-xl text-purple-500">
            You've found all the shapes!
          </p>
          <div className="flex justify-center gap-3 text-3xl md:text-4xl animate-wiggle">
            <span>⭐</span>
            <span>🌟</span>
            <span>⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeCelebration; 
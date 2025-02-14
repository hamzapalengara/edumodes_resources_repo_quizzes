import React from 'react';

const SpeakingIcecreamThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="text-4xl mb-4 flex items-center gap-4">
          <span role="img" aria-label="kid">👧</span>
          <span role="img" aria-label="ice cream">🍦</span>
          <span role="img" aria-label="seller">👩</span>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Speaking Practice: Buying Ice Cream
        </h1>

        <div className="flex items-center justify-center gap-3 text-lg text-blue-500">
          <span>Order</span>
          <span>→</span>
          <span>Pay</span>
          <span>→</span>
          <span>Enjoy</span>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {['🍫', '🍦', '🌈', '💵', '😊'].map((emoji, index) => (
            <span 
              key={index}
              className="text-2xl"
              role="img"
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakingIcecreamThumbnail; 
import React, { useRef } from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  {
    word: 'Kitchen',
    hint: 'A room where food is prepared and cooked',
    example: 'The kitchen is where we make delicious meals.'
  },
  {
    word: 'Spoon',
    hint: 'A utensil with a small bowl at the end, used for eating or stirring',
    example: 'Use the spoon to eat your soup.'
  },
  {
    word: 'Fork',
    hint: 'A utensil with prongs, used for picking up food',
    example: 'Pick up your pasta with the fork.'
  },
  {
    word: 'Plate',
    hint: 'A flat dish used for serving food',
    example: 'Put your sandwich on the plate.'
  },
  {
    word: 'Glass',
    hint: 'A container for drinking liquids',
    example: 'Fill the glass with water.'
  },
  {
    word: 'Cup',
    hint: 'A small container for drinking hot or cold beverages',
    example: 'Drink your milk from the cup.'
  },
  {
    word: 'Knife',
    hint: 'A tool with a sharp blade for cutting food',
    example: 'Cut the bread with the knife.'
  },
  {
    word: 'Pan',
    hint: 'A flat-bottomed container used for cooking on the stove',
    example: 'Cook the eggs in the pan.'
  },
  {
    word: 'Pot',
    hint: 'A deep container used for cooking soups and stews',
    example: 'Make soup in the pot.'
  },
  {
    word: 'Stove',
    hint: 'An appliance used for cooking food with heat',
    example: 'Cook the pasta on the stove.'
  }
];

const KitchenWordSoundAnswerKey: React.FC = () => {
  const currentSpeech = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      if (currentSpeech.current) {
        window.speechSynthesis.cancel();
      }

      // Create and configure new utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8; // Slightly slower for clarity
      currentSpeech.current = utterance;

      // Speak the text
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="bg-white rounded-lg p-2 md:p-4 mb-4 shadow-md">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-3 text-[#C2410C]">
              Kitchen Words and Their Meanings
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WORD_LIST.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-[#C2410C]">{item.word}</h2>
                  <button
                    onClick={() => speak(item.word)}
                    className="bg-[#22C55E] text-white p-2 rounded-full hover:bg-[#16A34A] transition-colors"
                    aria-label={`Pronounce ${item.word}`}
                  >
                    🔊
                  </button>
                </div>
                
                <div className="space-y-2">
                  <p className="text-[#C2410C]">
                    <span className="font-medium">Meaning: </span>
                    {item.hint}
                  </p>
                  <p className="text-[#C2410C]">
                    <span className="font-medium">Example: </span>
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Word Categories Section */}
          <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold mb-4 text-[#C2410C]">Word Categories</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-[#C2410C] mb-2">Utensils:</h3>
                <p className="text-[#C2410C]">Spoon, Fork, Knife</p>
              </div>
              
              <div>
                <h3 className="font-medium text-[#C2410C] mb-2">Containers:</h3>
                <p className="text-[#C2410C]">Cup, Glass, Plate</p>
              </div>
              
              <div>
                <h3 className="font-medium text-[#C2410C] mb-2">Cooking Equipment:</h3>
                <p className="text-[#C2410C]">Pan, Pot, Stove</p>
              </div>
              
              <div>
                <h3 className="font-medium text-[#C2410C] mb-2">Location:</h3>
                <p className="text-[#C2410C]">Kitchen</p>
              </div>
            </div>
          </div>

          {/* Pronunciation Tips */}
          <div className="mt-4 bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-bold mb-3 text-[#C2410C]">Pronunciation Tips</h2>
            <ul className="space-y-2 text-[#C2410C]">
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Click the speaker icon next to each word to hear it pronounced clearly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Practice saying each word after hearing it</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FB923C]">•</span>
                <span>Notice how some words rhyme (e.g., pan, can)</span>
              </li>
            </ul>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default KitchenWordSoundAnswerKey; 
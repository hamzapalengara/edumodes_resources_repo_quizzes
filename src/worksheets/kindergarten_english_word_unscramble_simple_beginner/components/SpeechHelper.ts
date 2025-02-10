export const speak = (text: string, options: { rate?: number; pitch?: number; volume?: number } = {}) => {
  // Check if speech synthesis is available
  if (!window.speechSynthesis) {
    console.warn('Speech synthesis not supported');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Create utterance
  const utterance = new SpeechSynthesisUtterance(text);

  // Set default options
  utterance.rate = options.rate || 0.9; // Slightly slower for clarity
  utterance.pitch = options.pitch || 1;
  utterance.volume = options.volume || 1;

  // Use a child-friendly voice if available
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(voice => 
    voice.name.toLowerCase().includes('child') || 
    voice.name.toLowerCase().includes('female')
  );
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  // Speak
  window.speechSynthesis.speak(utterance);
};

export const speakLetter = (letter: string) => {
  speak(letter, { rate: 0.8, pitch: 1.2 });
};

export const speakWord = (word: string) => {
  speak(word, { rate: 0.8, pitch: 1 });
};

export const speakHint = (hint: string) => {
  speak(hint, { rate: 0.9, pitch: 0.9 });
};

export const speakCongrats = () => {
  const messages = [
    "Great job!",
    "Well done!",
    "Excellent!",
    "Perfect!",
    "Amazing!"
  ];
  speak(messages[Math.floor(Math.random() * messages.length)], { rate: 1.1, pitch: 1.2 });
}; 
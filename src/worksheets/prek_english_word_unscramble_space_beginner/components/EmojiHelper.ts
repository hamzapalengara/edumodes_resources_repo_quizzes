// Space and astronomy emojis from different Unicode ranges
export const SPACE_EMOJIS = {
  // Basic space objects
  star: '⭐',
  glowingStar: '🌟',
  sparkles: '✨',
  moon: '🌙',
  fullMoon: '🌕',
  newMoon: '🌑',
  firstQuarterMoon: '🌓',
  lastQuarterMoon: '🌗',
  moonFace: '🌝',
  sun: '☀️',
  sunWithFace: '🌞',
  
  // Celestial objects
  ringedPlanet: '🪐',
  comet: '☄️',
  meteor: '💫',
  milkyWay: '🌌',
  
  // Space travel
  rocket: '🚀',
  flyingSaucer: '🛸',
  satellite: '🛰️',
  astronaut: '👨‍🚀',
  
  // Constellations (using star combinations)
  constellation1: '⭐ ✨ ⭐',
  constellation2: '🌟 ✨ 🌟',
  
  // Weather/Sky related
  rainbow: '🌈',
  cloudWithLightning: '⛈️',
  shootingStar: '🌠',
  
  // Directional stars
  whiteSmallStar: '⭐',
  glowStar: '🌟',
  eightPointedStar: '✴️',
  sixPointedStar: '✡️',
  sparkle: '❇️',
  
  // Additional decorative elements
  sparklingHeart: '💖',
  crystalBall: '🔮',
  
  // Animated variations (CSS classes to apply)
  animations: {
    twinkle: 'animate-twinkle',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    bounce: 'animate-bounce',
    float: 'animate-float'
  }
};

// Helper function to get random emoji from a category
export const getRandomSpaceEmoji = (category: keyof typeof SPACE_EMOJIS) => {
  const emoji = SPACE_EMOJIS[category];
  if (typeof emoji === 'string') return emoji;
  if (Array.isArray(emoji)) {
    return emoji[Math.floor(Math.random() * emoji.length)];
  }
  return SPACE_EMOJIS.star; // Default fallback
};

// Helper function to combine emoji with animation class
export const getAnimatedEmoji = (emoji: string, animation: keyof typeof SPACE_EMOJIS.animations) => {
  return {
    emoji,
    className: SPACE_EMOJIS.animations[animation]
  };
}; 
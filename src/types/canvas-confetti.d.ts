declare module 'canvas-confetti/dist/confetti.module.mjs' {
  interface ConfettiConfig {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    origin?: { x: number; y: number };
    colors?: string[];
    shapes?: string[];
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
  }

  type ConfettiFunction = (config?: ConfettiConfig) => Promise<null>;
  const confetti: ConfettiFunction;
  export default confetti;
} 
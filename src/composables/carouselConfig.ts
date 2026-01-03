import { reactive } from "vue";

interface CarouselConfig {
  wrapAround: boolean;
  autoplay: number;
  pauseAutoplayOnHover: boolean;
  gap: number;
  transition: number;
  // mouseWheel: boolean;
  // preventExcessiveDragging: boolean;
  // mouseDrag: { threshold: number };
  // touchDrag: { threshold: number };
  ignoreAnimations: string[];
  breakpoints: Record<number, { itemsToShow: number }>;
}

export function useCarouselConfig(overrides: Partial<CarouselConfig> = {}) {
  // Base config
  const defaultConfig: CarouselConfig = {
    wrapAround: true,
    autoplay: 8000,
    pauseAutoplayOnHover: true,
    // default values being explicit
    gap: 0,
    transition: 300,
    // mouseWheel: true,
    // preventExcessiveDragging: true,
    // mouseDrag: { threshold: 0.3 },
    // touchDrag: { threshold: 0.3 },
    ignoreAnimations: ["transform"],
    breakpoints: {
      0: { itemsToShow: 1 },
      992: { itemsToShow: 3 },
    },
  };

  // Merge user overrides
  const config = reactive({ ...defaultConfig, ...overrides });

  return config;
}

import { reactive } from "vue";

interface CarouselConfig {
  wrapAround: boolean;
  snapAlign: string;
  autoplay: number;
  transition: number;
  pauseAutoplayOnHover: boolean;
  gap: number;
  breakpoints: Record<number, { itemsToShow: number }>;
}

export function useCarouselConfig(overrides: Partial<CarouselConfig> = {}) {
  // Base config
  const defaultConfig: CarouselConfig = {
    wrapAround: true,
    snapAlign: "start",
    autoplay: 8000,
    transition: 300,
    pauseAutoplayOnHover: true,
    gap: 0,
    breakpoints: {
      0: { itemsToShow: 1 },
      992: { itemsToShow: 3 },
    },
  };

  // Merge user overrides
  const config = reactive({ ...defaultConfig, ...overrides });

  return config;
}

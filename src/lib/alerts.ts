import { AlertConfig } from 'app';

export const AppError: AlertConfig = {
  title: 'Processing Error',
  message: "It's not you, it's us. Please try again.",
};

export const BiometricsError: AlertConfig = {
  title: 'Face ID Error',
  message: 'Face ID is not available. Please try again.',
};

import { ThemeMode } from '@rneui/themed';

export type ThemeSettings = {
  followDevice: boolean;
  app: ThemeMode;
};

export type ThemeTarget = 'device' | 'app';

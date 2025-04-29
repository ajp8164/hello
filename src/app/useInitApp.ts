import '@react-native-firebase/app';

import { ReactNativeHello, log } from '@react-native-hello/core';

import { AppError } from 'lib/errors';
import { BackHandler } from 'react-native';
import { appConfig } from 'config';
import { svgImages } from 'theme';

export enum InitStatus {
  InProgress = 'InProgress',
  Success = 'Success',
}

export const useInitApp = () => {
  return async (): Promise<InitStatus> => {
    try {
      // Disable Android hardware back button.
      BackHandler.addEventListener('hardwareBackPress', () => {
        return true;
      });

      ReactNativeHello.init({
        buildEnvironment: appConfig.buildEnvironment,
        svgImages,
      });

      return InitStatus.Success;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      log.error(`App initialization: ${e.message}`);
      throw new AppError(e.message);
    }
  };
};

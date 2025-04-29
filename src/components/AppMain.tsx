import { ColorModeSwitch, NetworkConnectionBar } from '@react-native-hello/ui';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { AppError } from 'lib/errors';
import { useAppToastConfig, useNetworkConnectionBarToastProps } from 'lib/toast';
import ErrorBoundary from 'react-native-error-boundary';
import MainNavigator from 'components/navigation/MainNavigator';
import RNBootSplash from 'react-native-bootsplash';
import React from 'react-native';
import { StatusBar } from 'react-native';
import { useInitApp, useNavigationTheme, InitStatus } from 'app';
import { EventProvider, NetworkContext, log, useNetworkContext } from '@react-native-hello/core';
import { selectThemeSettings } from 'store/selectors/appSettings';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const AppMain = () => {
  const navigationTheme = useNavigationTheme();
  const themeSettings = useSelector(selectThemeSettings);
  const appToastConfig = useAppToastConfig();
  const network = useNetworkContext();
  const networkConnectionBarToastProps = useNetworkConnectionBarToastProps();
  const initApp = useInitApp();

  const [fatal, setFatal] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<InitStatus>(InitStatus.InProgress);

  useEffect(() => {
    const hideSplashScreen = () => {
      return new Promise<void>(resolve => {
        setTimeout(() => {
          RNBootSplash.hide({ fade: true });
          StatusBar.setHidden(false);
          resolve();
        }, 200);
      });
    };

    (async () => {
      try {
        // Main application initialization.
        const result = await initApp();
        log.info(`Initialization status: ${result}`);
        setStatus(result);

        hideSplashScreen();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        log.error(`App main: ${e.message}`);
        // Expose any initialization error.
        setFatal(e.message);
        hideSplashScreen();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fatal) {
    throw new AppError(fatal);
  }

  const onError = (error: Error, stack: string) => {
    log.fatal(`Unhandled app error: ${error.message}\n${stack}`);
  };

  if (status === InitStatus.InProgress) {
    return null;
  }

  return (
    <>
      <NavigationContainer
        // Removes default background (white) flash on tab change when in dark mode.
        theme={navigationTheme}>
        <BottomSheetModalProvider>
          <ColorModeSwitch themeSettings={themeSettings}>
            <ErrorBoundary onError={onError}>
              <NetworkContext.Provider value={network}>
                <NetworkConnectionBar toastProps={networkConnectionBarToastProps} />
                <EventProvider>
                  <MainNavigator />
                </EventProvider>
              </NetworkContext.Provider>
            </ErrorBoundary>
          </ColorModeSwitch>
        </BottomSheetModalProvider>
      </NavigationContainer>
      <Toast config={{ ...appToastConfig }} />
    </>
  );
};

export default AppMain;

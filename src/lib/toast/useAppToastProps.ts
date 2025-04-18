import { ToastShowParams } from 'react-native-toast-message';
import { useTheme } from 'theme';

export const useAppToastProps = () => {
  const theme = useTheme();

  return {
    errorSyncingAccounts: {
      type: 'error',
      text1: 'Error Syncing Accounts',
      position: 'bottom',
      autoHide: true,
      visibilityTime: 3000,
      bottomOffset: (theme.styles.navigationBottomTabBar.height as number) + 15,
    } as ToastShowParams,
    noNetworkConnection: {
      type: 'networkConnection',
      text1: 'No Internet Connection',
      position: 'bottom',
      autoHide: true,
      visibilityTime: 3000,
      bottomOffset: (theme.styles.navigationBottomTabBar.height as number) + 15,
    } as ToastShowParams,
    profileSaved: {
      type: 'success',
      text1: 'Profle Saved',
      position: 'bottom',
      autoHide: true,
      visibilityTime: 3000,
      bottomOffset: (theme.styles.navigationBottomTabBar.height as number) + 15,
    } as ToastShowParams,
    syncingAccounts: {
      type: 'activity',
      text1: 'Syncing Accounts',
      position: 'bottom',
      autoHide: false,
      bottomOffset: (theme.styles.navigationBottomTabBar.height as number) + 15,
    } as ToastShowParams,
  };
};

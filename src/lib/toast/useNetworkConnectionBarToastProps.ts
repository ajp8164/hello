import { ToastShowParams } from 'react-native-toast-message';
import { useTheme } from 'theme';

export const useNetworkConnectionBarToastProps = () => {
  const theme = useTheme();
  // Overrides or adds props to lib network connection toast.
  return {
    position: 'bottom',
    autoHide: true,
    visibilityTime: 3000,
    bottomOffset: (theme.styles.navigationBottomTabBar.height as number) + 15,
  } as ToastShowParams;
};

import { MoreNavigatorParamList } from 'types/navigation';
import MoreScreen from 'components/MoreScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'theme';
import SettingsScreen from 'components/SettingsScreen';
import WebViewScreen from 'components/WebViewScreen';

const MoreStack = createNativeStackNavigator<MoreNavigatorParamList>();

const MoreNavigator = () => {
  const theme = useTheme();

  return (
    <MoreStack.Navigator
      initialRouteName="More"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.screenHeaderBackground },
        headerTitleStyle: { color: theme.colors.screenHeaderTitle },
        headerTintColor: theme.colors.screenHeaderButtonText,
        headerShadowVisible: theme.mode === 'light',
      }}>
      <MoreStack.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          headerLargeTitle: true,
        }}
      />
      <MoreStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerLargeTitle: true,
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
      <MoreStack.Screen
        name="WebView"
        component={WebViewScreen}
        options={{
          title: '',
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
    </MoreStack.Navigator>
  );
};

export default MoreNavigator;

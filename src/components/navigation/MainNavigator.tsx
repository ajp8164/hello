import { MainNavigatorParamList } from 'types/navigation';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from 'components/navigation/TabNavigator';
import { useTheme } from 'theme';

const MainStack = createNativeStackNavigator<MainNavigatorParamList>();

const MainNavigator = () => {
  const theme = useTheme();

  return (
    <MainStack.Navigator
      initialRouteName={'Tabs'}
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.screenHeaderBackground },
        headerTintColor: theme.colors.screenHeaderButtonText,
        headerBackButtonDisplayMode: 'minimal',
      }}>
      <MainStack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;

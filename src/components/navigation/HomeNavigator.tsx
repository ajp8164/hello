import { HomeNavigatorParamList } from 'types/navigation';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'theme';
import HomeScreen from 'components/HomeScreen';

const HomeStack = createNativeStackNavigator<HomeNavigatorParamList>();

const HomeNavigator = () => {
  const theme = useTheme();

  return (
    <HomeStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.screenHeaderBackground },
        headerTintColor: theme.colors.screenHeaderButtonText,
        headerBackButtonDisplayMode: 'minimal',
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

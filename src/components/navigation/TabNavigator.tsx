import { Platform, StatusBar } from 'react-native';
import React, { useEffect } from 'react';

import SystemNavigationBar from 'react-native-system-navigation-bar';
import { TabNavigatorParamList } from 'types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppTheme, useTheme } from 'theme';
import MoreNavigator from 'components/navigation/MoreNavigator';
import { LayoutDashboard, Menu } from 'lucide-react-native';
import { TabNavigationState } from '@react-navigation/core';
import { makeStyles } from '@rneui/themed';
import HomeNavigator from 'components/navigation/HomeNavigator';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator = () => {
  const theme = useTheme();
  const s = useStyles(theme);

  useEffect(() => {
    StatusBar.setBarStyle(theme.mode === 'light' ? 'dark-content' : 'light-content');

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.colors.white);
      SystemNavigationBar.setNavigationColor(
        theme.colors.androidNavigationBar,
        theme.mode === 'light' ? 'dark' : 'light',
        'navigation',
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.mode]);

  const isThisTab = (state: TabNavigationState<TabNavigatorParamList>, tabName: string) => {
    return state.history.slice(-1)[0].key.includes(tabName);
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.tabBarActive,
          tabBarInactiveTintColor: theme.colors.tabBarInactive,
          tabBarActiveBackgroundColor: theme.colors.tabBarActiveBackground,
          tabBarInactiveBackgroundColor: theme.colors.tabBarInactiveBackground,
          tabBarStyle: {
            backgroundColor: theme.colors.tabBarInactiveBackground,
            borderTopColor: theme.colors.tabBarBorder,
          },
        }}>
        <Tab.Screen
          name="HomeTab"
          component={HomeNavigator}
          options={props => {
            const show = isThisTab(props.navigation.getState(), 'HomeTab');
            return {
              tabBarLabel: 'Dashboard',
              tabBarIcon: ({ color }) => <LayoutDashboard color={color} />,
              tabBarIconStyle: s.tabBarIcon,
              tabBarItemStyle: [
                s.tabBarItem,
                {
                  borderTopColor: show ? theme.colors.tabBarActive : theme.colors.transparent,
                },
              ],
            };
          }}
        />
        <Tab.Screen
          name="MoreTab"
          component={MoreNavigator}
          options={props => {
            const show = isThisTab(props.navigation.getState(), 'MoreTab');
            return {
              tabBarLabel: 'More',
              tabBarIcon: ({ color }) => <Menu color={color} />,
              tabBarIconStyle: s.tabBarIcon,
              tabBarItemStyle: [
                s.tabBarItem,
                {
                  borderTopColor: show ? theme.colors.tabBarActive : theme.colors.transparent,
                },
              ],
            };
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const useStyles = makeStyles((_theme, __theme: AppTheme) => ({
  dot: {
    position: 'absolute',
    top: -22,
    left: -6,
  },
  tabBarIcon: {
    marginTop: -1,
  },
  tabBarItem: {
    borderTopWidth: 2,
    marginTop: 2,
  },
}));

export default TabNavigator;

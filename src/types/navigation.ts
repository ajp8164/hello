import { NavigatorScreenParams } from '@react-navigation/core';

export type HomeNavigatorParamList = {
  Home: undefined;
};

export type MainNavigatorParamList = {
  Tabs: NavigatorScreenParams<TabNavigatorParamList>;
};

export type MoreNavigatorParamList = {
  More: undefined;
  Settings: undefined;
  WebView: {
    url: string;
  };
};

export type TabNavigatorParamList = {
  HomeTab: undefined;
  MoreTab: undefined;
};

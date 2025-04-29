import { DashboardNavigatorParamList } from 'types/navigation';
import React, { useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppTheme, useTheme } from 'theme';
import InstitutionAccountScreen from 'components/InstitutionAccountScreen';
import Animated, { FadeIn } from 'react-native-reanimated';
import Button from 'components/atoms/Button';
import { View } from 'react-native';
import { BellRing, Dot } from 'lucide-react-native';
import { makeStyles } from '@rneui/themed';
import { NotificationsModal } from 'components/molecules/notifications';
import BrandHeader from 'components/atoms/BrandHeader';
import { useNotifications } from 'lib/notifications';
import DashboardTopTabsNavigator from 'components/navigation/DashboardTopTabsNavigator';

const DashboardStack = createNativeStackNavigator<DashboardNavigatorParamList>();

const DashboardNavigator = () => {
  const theme = useTheme();
  const s = useStyles(theme);

  const { unreadCount: unreadNotificationCount } = useNotifications();

  const notificationsModalRef = useRef<NotificationsModal>(null);

  return (
    <>
      <DashboardStack.Navigator
        initialRouteName="DashboardTopTabs"
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.screenHeaderBackground },
          headerTitleStyle: { color: theme.colors.screenHeaderTitle },
          headerTintColor: theme.colors.screenHeaderButtonText,
          headerShadowVisible: theme.mode === 'light',
        }}>
        <DashboardStack.Screen
          name="DashboardTopTabs"
          component={DashboardTopTabsNavigator}
          options={{
            title: 'DASHBOARD',
            headerShadowVisible: false,
            headerTitle: () => <BrandHeader />,
            headerRight: () => {
              return (
                <Animated.View entering={FadeIn}>
                  <Button
                    icon={
                      <View>
                        <BellRing color={theme.colors.screenHeaderButtonText} />
                        {unreadNotificationCount > 0 && (
                          <Dot color={theme.colors.assertive} size={50} style={s.dot} />
                        )}
                      </View>
                    }
                    buttonStyle={theme.styles.buttonScreenHeader}
                    onPress={() => notificationsModalRef.current?.present()}
                  />
                </Animated.View>
              );
            },
          }}
        />
        {/* <DashboardStack.Screen
          name="Dashboard"
          component={DashboardMoneyScreen}
          options={() => {
            return {
              title: 'Dashboard',
              headerLargeTitle: true,
              headerTitle: () => <BrandHeader />,
              headerRight: () => {
                return (
                  <Animated.View entering={FadeIn}>
                    <Button
                      icon={
                        <View>
                          <BellRing color={theme.colors.screenHeaderButtonText} />
                          {unreadNotificationCount > 0 && (
                            <Dot color={theme.colors.assertive} size={50} style={s.dot} />
                          )}
                        </View>
                      }
                      buttonStyle={theme.styles.buttonScreenHeader}
                      onPress={() => notificationsModalRef.current?.present()}
                    />
                  </Animated.View>
                );
              },
            };
          }}
        />
        <DashboardStack.Screen
          name="InstitutionAccount"
          component={InstitutionAccountScreen}
          options={{
            title: '',
            headerBackButtonDisplayMode: 'minimal',
            headerLargeTitle: true,
          }}
        />
      </DashboardStack.Navigator>
      <NotificationsModal ref={notificationsModalRef} /> */}
        <DashboardStack.Screen
          name="InstitutionAccount"
          component={InstitutionAccountScreen}
          options={{
            title: '',
            headerBackButtonDisplayMode: 'minimal',
            headerLargeTitle: true,
          }}
        />
      </DashboardStack.Navigator>
      <NotificationsModal ref={notificationsModalRef} />
    </>
  );
};

const useStyles = makeStyles((_theme, __theme: AppTheme) => ({
  dot: {
    position: 'absolute',
    top: -22,
    left: -6,
  },
}));

export default DashboardNavigator;

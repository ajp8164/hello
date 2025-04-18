import { Platform, ScrollView, useColorScheme } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { MoreNavigatorParamList } from 'types/navigation';
import { makeStyles } from '@rneui/themed';
import { Divider } from 'components/atoms/Divider';
import ListItemSwitch from 'components/atoms/ListItemSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { selectBiometrics, selectThemeSettings } from 'store/selectors/appSettings';
import { saveBiometrics, saveThemeSettings } from 'store/slices/appSettings';
import { biometricAuthentication } from 'lib/biometrics';
import { ScanFace, Moon } from 'lucide-react-native';
import Version from 'components/molecules/Version';
import { AppTheme, useTheme } from 'theme';

export type Props = NativeStackScreenProps<MoreNavigatorParamList, 'Settings'>;

const SettingsScreen = ({ navigation: _navigation }: Props) => {
  const theme = useTheme();
  const s = useStyles(theme);
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  const biometrics = useSelector(selectBiometrics);
  const themeSettings = useSelector(selectThemeSettings);

  const [biometricsValue, setBiometricsValue] = useState(biometrics);

  const toggleAppearance = (value: boolean) => {
    dispatch(
      saveThemeSettings({
        themeSettings: { ...themeSettings, app: value ? 'dark' : 'light' },
      }),
    );
    theme.updateTheme({ mode: value ? 'dark' : 'light' });
  };

  const toggleBiometrics = async (value: boolean) => {
    setBiometricsValue(value);
    await biometricAuthentication({ require: true })
      .then(() => {
        dispatch(saveBiometrics({ value }));
      })
      .catch(() => {
        setBiometricsValue(true);
      });
  };

  const toggleUseDevice = (value: boolean) => {
    dispatch(
      saveThemeSettings({
        themeSettings: { ...themeSettings, followDevice: value },
      }),
    );
    const control = value ? colorScheme : themeSettings.app;
    theme.updateTheme({ mode: control === 'dark' ? 'dark' : 'light' });
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior={'automatic'}
        style={[theme.styles.view, s.container]}>
        <Divider text={'Security'} />
        <Divider note light text={'Prevent others from accessing your information.'} />
        <ListItemSwitch
          position={['first', 'last']}
          title={Platform.OS === 'ios' ? 'Use Face ID' : 'Use Biometrics ID'}
          leftContent={<ScanFace color={theme.colors.listItemIcon} />}
          value={biometricsValue}
          onValueChange={toggleBiometrics}
        />
        <Divider text={'Appearance'} />
        <ListItemSwitch
          position={['first']}
          title={'Dark Appearance'}
          leftContent={<Moon color={theme.colors.listItemIcon} />}
          value={themeSettings.app === 'dark'}
          disabled={themeSettings.followDevice}
          onValueChange={toggleAppearance}
        />
        <ListItemSwitch
          position={['last']}
          title={'Use Device Setting'}
          value={themeSettings.followDevice}
          onValueChange={toggleUseDevice}
        />
      </ScrollView>
      <Version style={s.version} />
    </>
  );
};

const useStyles = makeStyles((_theme, __theme: AppTheme) => ({
  container: {
    paddingHorizontal: 15,
  },
  version: {
    bottom: 10,
  },
}));

export default SettingsScreen;

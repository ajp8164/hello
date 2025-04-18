import { AppTheme, useTheme } from 'theme';
import { Platform, Text, ViewStyle } from 'react-native';
import React from 'react';
import { makeStyles } from '@rneui/themed';
import VersionNumber from 'react-native-version-number';
import { appConfig } from 'config';

export interface Props {
  style?: ViewStyle | ViewStyle[];
}

const Version = (props: Props) => {
  const { style } = props;

  const theme = useTheme();
  const s = useStyles(theme);

  return (
    <Text style={[s.version, style]} allowFontScaling={false}>
      {`Version ${VersionNumber.appVersion}.${VersionNumber.buildVersion}${appConfig.appId ? '.' + appConfig.appId : ''}`}
    </Text>
  );
};

const useStyles = makeStyles((_theme, theme: AppTheme) => ({
  version: {
    ...theme.styles.textSmall,
    ...theme.styles.textDim,
    position: 'absolute',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        bottom: 15,
      },
      android: {
        bottom: '1%',
      },
    }),
  },
}));

export default Version;

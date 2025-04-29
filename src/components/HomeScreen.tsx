import { AppTheme, useTheme } from 'theme';
import { Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { makeStyles } from '@rneui/themed';
import { HomeNavigatorParamList } from 'types/navigation';
import Version from 'components/molecules/Version';

export type Props = NativeStackScreenProps<HomeNavigatorParamList, 'Home'>;

const HomeScreen = ({ navigation: _navigation }: Props) => {
  const theme = useTheme();
  const s = useStyles(theme);

  return (
    <View style={[theme.styles.view, s.container]}>
      <Text style={s.text}>{'Hello.'}</Text>
      <Version />
    </View>
  );
};

const useStyles = makeStyles((_theme, theme: AppTheme) => ({
  container: {
    justifyContent: 'center',
  },
  text: {
    ...theme.styles.textHeading1,
    textAlign: 'center',
  },
}));

export default HomeScreen;

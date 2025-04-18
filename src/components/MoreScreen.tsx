import { AppTheme, useTheme } from 'theme';
import { ScrollView } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { MoreNavigatorParamList } from 'types/navigation';
import ListItem from 'components/atoms/ListItem';
import { makeStyles } from '@rneui/themed';
import { Divider } from 'components/atoms/Divider';
import { appConfig } from 'config';
import { WebViewModal } from 'components/molecules/webview/WebViewModal';
import { CircleHelp, Settings } from 'lucide-react-native';

export type Props = NativeStackScreenProps<MoreNavigatorParamList, 'More'>;

const MoreScreen = ({ navigation }: Props) => {
  const theme = useTheme();
  const s = useStyles(theme);

  const webviewModalRef = useRef<WebViewModal>(null);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior={'automatic'}
        style={[theme.styles.view, s.container]}>
        <Divider />
        <ListItem
          position={['first']}
          title={'Settings'}
          leftContent={<Settings color={theme.colors.listItemIcon} />}
          rightContent={'chevron-right'}
          onPress={() => navigation.navigate('Settings')}
        />
        <ListItem
          position={['last']}
          title={'Get Help'}
          leftContent={<CircleHelp color={theme.colors.listItemIcon} />}
          rightContent={'chevron-right'}
          onPress={() =>
            navigation.navigate('WebView', {
              url: appConfig.supportUrl,
            })
          }
        />
      </ScrollView>
      <WebViewModal ref={webviewModalRef} />
    </>
  );
};

const useStyles = makeStyles((_theme, theme: AppTheme) => ({
  demoButton: {
    paddingHorizontal: 15,
  },
  buttonTOCTitle: {
    ...theme.styles.textNormal,
    color: theme.colors.textLink,
  },
  container: {
    paddingHorizontal: 15,
  },
  tocContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
}));

export default MoreScreen;

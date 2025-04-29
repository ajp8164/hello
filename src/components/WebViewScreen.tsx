import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { MoreNavigatorParamList } from 'types/navigation';
import WebView from 'components/molecules/WebView';

export type Props = NativeStackScreenProps<MoreNavigatorParamList, 'WebView'>;

const WebViewScreen = ({ navigation: _navigation, route }: Props) => {
  const { url } = route.params;
  return <WebView url={url} />;
};

export default WebViewScreen;

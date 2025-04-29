import { log } from '@react-native-hello/core';
import Config from 'react-native-config';

export interface AppConfig extends Record<string, boolean | number | string> {
  appId: string;
  appName: string;
  appNameNS: string;
  buildEnvironment: string;
  businessName: string;
  businessNameShort: string;
  persistStoreVersion: string;
  supportUrl: string;
}

export const appConfig: AppConfig = {
  appId: Config.APP_ID || '',
  appName: Config.APP_NAME || '',
  appNameNS: Config.APP_NAME_NS || '',
  buildEnvironment: Config.BUILD_ENVIRONMENT || '',
  businessName: Config.BUSINESS_NAME || '',
  businessNameShort: Config.BUSINESS_NAME_SHORT || '',
  persistStoreVersion: Config.PERSIST_STORE_VERSION || '',
  supportUrl: Config.SUPPORT_URL || '',
};

log.debug(appConfig);

/**
 * @format
 */

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import 'react-native-gesture-handler';

// formatjs imports must appear in the correct order.
// See https://formatjs.io/docs/polyfills
import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-numberformat/locale-data/en';
import '@formatjs/intl-datetimeformat/polyfill';
import '@formatjs/intl-datetimeformat/locale-data/en';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// This section to support streaming responses for @ai-sdk
// See https://github.com/facebook/react-native/issues/27741#issuecomment-2362901032
import {polyfill} from 'react-native-polyfill-globals/src/fetch';
polyfill();

// https://stackoverflow.com/a/77744609/14056591
import {ReadableStream as ReadableStreamPolyfill} from 'web-streams-polyfill/dist/ponyfill';
// @ts-ignore
globalThis.ReadableStream = ReadableStreamPolyfill;

// https://stackoverflow.com/a/78858040/14056591
import 'text-encoding';

import structuredClone from '@ungap/structured-clone';
if (!('structuredClone' in globalThis)) {
  globalThis.structuredClone = structuredClone;
}

AppRegistry.registerComponent(appName, () => App);

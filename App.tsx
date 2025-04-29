import AppMain from 'components/AppMain';
import {PersistGate} from 'redux-persist/integration/react';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {theme} from 'theme';
import {persistor, store} from 'store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppMain />
            </PersistGate>
          </ReduxProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;

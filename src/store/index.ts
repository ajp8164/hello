import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  createMigrate,
  persistReducer,
  persistStore,
} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { migrations } from './migrations';

// redux-persist is pushing a function into a reducer (not best practice)
// it has insisted not to fix the issue, but toolkit has an escape-hatch:
// we tell toolkit to ignore serializable inspection on redux-persist actions
// https://github.com/rt2zz/redux-persist/issues/988
const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

/**
 * Live store
 */

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0,
  whitelist: ['appSettings'],
  migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: { name: 'Hello' },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,

      // serializableCheck: {
      //   ignoredActions,
      // },
    }),
});

export const persistor = persistStore(store);

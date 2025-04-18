import { appSettingsReducer } from 'store/slices/appSettings';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  appSettings: appSettingsReducer,
});

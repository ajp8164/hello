import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ThemeSettings } from 'types/theme';
import { revertAppSettings } from 'store/actions';

export interface AppSettingsState {
  biometrics: boolean;
  themeSettings: ThemeSettings;
}

export const initialAppSettingsState = Object.freeze<AppSettingsState>({
  biometrics: false,
  themeSettings: {
    followDevice: true,
    app: 'light',
  },
});

const handleSaveThemeSettings: CaseReducer<
  AppSettingsState,
  PayloadAction<{ themeSettings: ThemeSettings }>
> = (state, { payload }) => {
  return {
    ...state,
    themeSettings: payload.themeSettings,
  };
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState: initialAppSettingsState,
  extraReducers: builder => builder.addCase(revertAppSettings, () => initialAppSettingsState),
  reducers: {
    saveThemeSettings: handleSaveThemeSettings,
  },
});

export const appSettingsReducer = appSettingsSlice.reducer;
export const saveThemeSettings = appSettingsSlice.actions.saveThemeSettings;

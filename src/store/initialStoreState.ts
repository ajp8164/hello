import { AppSettingsState, initialAppSettingsState } from 'store/slices/appSettings';

export interface StoreState {
  appSettings: AppSettingsState;
}

export const initialStoreState = Object.freeze<StoreState>({
  appSettings: initialAppSettingsState,
});

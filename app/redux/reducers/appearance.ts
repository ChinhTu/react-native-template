import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface AppearanceState {
  dark: boolean;
  language: string
}

// Define the initial state using that type
const initialState: AppearanceState = {
  dark: true,
  language: 'vi'
};

export const AppearanceSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeMode: (state, actions) => {
      state.dark = actions.payload;
    },
    changeLanguage: (state, actions) => {
      state.language = actions.payload;
    }
  },
});

export const { changeMode, changeLanguage } = AppearanceSlice.actions;
export const selectDark = (state: RootState) => state.appearance.dark;
export const selectLanguage = (state: RootState) => state.appearance.language;


export default AppearanceSlice.reducer;

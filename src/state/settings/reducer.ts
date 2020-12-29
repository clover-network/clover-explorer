import { createReducer } from '@reduxjs/toolkit';
import { setDarkMode } from './actions';

export interface SettingState {
  darkMode: boolean
}

const initialState: SettingState = {
  darkMode: false
}

export default createReducer(initialState, builder =>
  builder
    .addCase(setDarkMode, (state, action) => {
      state.darkMode = action.payload
    })
);

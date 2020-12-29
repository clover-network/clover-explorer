import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

import settings from './settings/reducer'

// states that are auto persisted to localstorage and reloade
const PERSISTED_KEYS: string[] = ['settings'];

const store = configureStore({
  reducer: {
    settings
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS })],
  preloadedState: load({ states: PERSISTED_KEYS })
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

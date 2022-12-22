import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export const createStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;

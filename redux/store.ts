import { configureStore } from "@reduxjs/toolkit";
import featureToggleReducer from "./slice/featureToggle";

const store = configureStore({
  reducer: {
    featureToggle: featureToggleReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

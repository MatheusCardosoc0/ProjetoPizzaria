import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthContext } from "./AuthContext";

export const store = configureStore({
  reducer: {
    AuthContext: AuthContext.reducer
  }
})

export const rootReducer = combineReducers({
  AuthContext: AuthContext.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch
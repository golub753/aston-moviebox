import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import popUpReducer from './popUpSlice';
import userReducer from './userSlice';

export const store = configureStore({
 reducer: {
  movies: moviesReducer,
  popUp: popUpReducer,
  user: userReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

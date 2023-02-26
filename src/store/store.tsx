import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import popUpReducer from './popUpSlice';

export default configureStore({
 reducer: {
  movies: moviesReducer,
  popUp: popUpReducer,
 },
});

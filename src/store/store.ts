import { combineReducers, configureStore } from '@reduxjs/toolkit';
import popUpReducer from './reducers/popUpSlice';
import userReducer from './reducers/userSlice';
import { moviesAPI } from '../services/MoviesService';
import { wishlistAPI } from '../services/WishlistService';
import { usersAPI } from '../services/UsersService';
import { localStorageMiddleware } from '../middleware/localStorageMiddleware';

const rootReducers = combineReducers({
 popUpReducer,
 userReducer,
 [moviesAPI.reducerPath]: moviesAPI.reducer,
 [wishlistAPI.reducerPath]: wishlistAPI.reducer,
 [usersAPI.reducerPath]: usersAPI.reducer,
});

export const store = configureStore({
 reducer: rootReducers,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
   .concat(moviesAPI.middleware)
   .concat(wishlistAPI.middleware)
   .concat(usersAPI.middleware)
   .concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

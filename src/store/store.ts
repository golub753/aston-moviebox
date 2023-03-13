import { combineReducers, configureStore } from '@reduxjs/toolkit';
import popUpReducer from './reducers/popUpSlice';
import userReducer from './reducers/userSlice';
import searchReducer from './reducers/searchSlice';
import { moviesAPI } from '../services/MoviesService';
import { wishlistAPI } from '../services/WishlistService';
import { usersAPI } from '../services/UsersService';
import { searchAPI } from '../services/SearchService';
import { userMiddleware } from '../middleware/userMiddleware';

const rootReducers = combineReducers({
 popUpReducer,
 userReducer,
 searchReducer,
 [moviesAPI.reducerPath]: moviesAPI.reducer,
 [wishlistAPI.reducerPath]: wishlistAPI.reducer,
 [usersAPI.reducerPath]: usersAPI.reducer,
 [searchAPI.reducerPath]: searchAPI.reducer,
});

export const store = configureStore({
 reducer: rootReducers,
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
   .concat(moviesAPI.middleware)
   .concat(wishlistAPI.middleware)
   .concat(usersAPI.middleware)
   .concat(searchAPI.middleware)
   .concat(userMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

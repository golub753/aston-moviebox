import { applyMiddleware, createStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import moviesReducer from './moviesSlice';
import popUpReducer from './popUpSlice';
import userReducer from './userSlice';
import wishlistReducer from './wishlistSlice';
import { logger } from '../middleware/logger';

const rootReducers = combineReducers({
 movies: moviesReducer,
 popUp: popUpReducer,
 user: userReducer,
 wishlist: wishlistReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

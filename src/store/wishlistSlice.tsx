import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 wishlist: [],
};

export const wishlistSlice = createSlice({
 name: 'wishlist',
 initialState,
 reducers: {
  pushMovie(state, action) {
   state.wishlist = [...state.wishlist, action.payload];
  },
 },
});

export const { pushMovie } = wishlistSlice.actions;
export default wishlistSlice.reducer;

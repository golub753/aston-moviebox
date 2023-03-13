import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 searchMovies: [],
};

export const searchSlice = createSlice({
 name: 'search',
 initialState,
 reducers: {
  setSearchMovies(state, action) {
   state.searchMovies = action.payload;
  },
 },
});

export default searchSlice.reducer;
export const { setSearchMovies } = searchSlice.actions;

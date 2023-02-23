import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
 const response = await fetch('https://api-movies.github.io/collaps/datasets/page-52.json');
 const data = await response.json();
 return data;
});

export const moviesSlice = createSlice({
 name: 'movies',
 initialState: {
  movies: [],
  status: '',
 },
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(fetchMovies.pending, (state) => {
   state.status = 'loading';
  });
  builder.addCase(fetchMovies.fulfilled, (state, action) => {
   state.movies = action.payload.results;
   state.status = 'success';
  });
  builder.addCase(fetchMovies.rejected, (state) => {
   state.status = 'error';
   state.movies = [];
  });
 },
});

export default moviesSlice.reducer;

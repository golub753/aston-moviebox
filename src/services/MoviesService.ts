import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const moviesAPI = createApi({
 reducerPath: 'moviesApi',
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://api-movies.github.io/collaps/datasets/',
 }),
 endpoints: (build) => ({
  fetchAllMovies: build.query({
   query: () => ({
    url: 'page-6.json',
   }),
  }),
 }),
});

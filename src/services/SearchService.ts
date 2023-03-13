import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const searchAPI = createApi({
 reducerPath: 'searchApi',
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://api-movies.github.io/collaps/datasets/',
 }),
 endpoints: (build) => ({
  searchMovies: build.query({
   query: () => ({
    url: 'page-6.json',
   }),
   transformResponse: (response, meta, arg) => {
    if (arg.length <= 1) {
     return [];
    }
    return response.results.filter((item) => item.origin_name.toLowerCase().includes(arg.toLowerCase()));
   },
  }),
 }),
});

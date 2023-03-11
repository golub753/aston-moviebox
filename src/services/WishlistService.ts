import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const wishlistAPI = createApi({
 reducerPath: 'wishlistApi',
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://aston-moviebox-default-rtdb.firebaseio.com/users/',
 }),
 tagTypes: ['WishList'],
 endpoints: (build) => ({
  getWishlist: build.query({
   query: (token) => ({
    url: `${token}/wishlist.json`,
   }),
   providesTags: ['WishList'],
  }),
  pushMovieInUser: build.mutation({
   query: ({ token, movie }) => ({
    url: `${token}/wishlist.json`,
    method: 'POST',
    body: movie,
   }),
   invalidatesTags: ['WishList'],
  }),
 }),
});

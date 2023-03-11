import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const usersAPI = createApi({
 reducerPath: 'usersApi',
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://aston-moviebox-default-rtdb.firebaseio.com/',
 }),
 endpoints: (build) => ({
  getAllUsers: build.query({
   query: () => ({
    url: 'users.json',
   }),
  }),
 }),
});

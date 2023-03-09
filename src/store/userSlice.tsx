import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserInLocalStorage } from '../helpers/getUserInLocalStorage';

export const getUser = createAsyncThunk(
 'user/getUser',
 async ({ mail, password, remember }: { mail: string; password: string; remember: boolean }) => {
  const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json');
  const data = await response.json();
  const authorization = getUserInLocalStorage(mail, password, remember, data);
  return authorization;
 }
);

export const pushUser = createAsyncThunk(
 'user/registerUser',
 async ({ name, mail, password, remember }: { name: string; mail: string; password: string; remember: boolean }) => {
  const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json', {
   method: 'post',
   body: JSON.stringify({ name: name, mail: mail, password: password, wishlist: '' }),
  });
  const data = await response.json();
  return data;
 }
);

export const pushMovieInUser = createAsyncThunk(
 'user/pushMovie',
 async ({ token, moviesArray }: { token: string; moviesArray: Array<object> }) => {
  const response = await fetch(`https://aston-moviebox-default-rtdb.firebaseio.com/users/${token}.json`, {
   method: 'PATCH',
   body: JSON.stringify({ wishlist: moviesArray }),
   headers: {
    'Content-type': 'application/json; charset=UTF-8',
   },
  });
  const data = await response.json();
  return data;
 }
);

const initialState = {
 user: {},
 status: '',
};

export const userSlice = createSlice({
 name: 'user',
 initialState,
 reducers: {
  setUserFromLocal(state, action) {
   state.user = action.payload;
  },
  authorizationWithourRemember(state, action) {
   state.user = action.payload;
  },
  removeUser(state, action) {
   state.user = action.payload;
  },
 },
 extraReducers: (builder) => {
  builder.addCase(getUser.pending, (state) => {
   state.status = 'loading';
  });
  builder.addCase(getUser.fulfilled, (state, action) => {
   state.user = action.payload;
   state.status = 'success';
  });
  builder.addCase(getUser.rejected, (state) => {
   state.user = {};
   state.status = 'error';
  });
 },
});

export default userSlice.reducer;
export const { setUserFromLocal, authorizationWithourRemember, removeUser } = userSlice.actions;

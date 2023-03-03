import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setUserInLocalStorage } from '../helpers/setUserInLocalStorage';

export const getUser = createAsyncThunk(
 'user/getUser',
 async ({ valueMail, valuePassword, remember }: { valueMail: string; valuePassword: string; remember: boolean }) => {
  const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json');
  const data = await response.json();
  const authorization = setUserInLocalStorage(valueMail, valuePassword, remember, data);
  return authorization;
 }
);

export const pushUser = createAsyncThunk(
 'user/registerUser',
 async ({
  valueName,
  valueMail,
  valuePassword,
  remember,
 }: {
  valueName: string;
  valueMail: string;
  valuePassword: string;
  remember: boolean;
 }) => {
  const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json', {
   method: 'post',
   body: JSON.stringify({ name: valueName, mail: valueMail, password: valuePassword }),
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
export const { setUserFromLocal, authorizationWithourRemember } = userSlice.actions;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useAuthorization } from '../hooks/hooks';

export const getUser = createAsyncThunk(
 'user/getUser',
 async ({ valueMail, valuePassword, remember }: { valueMail: string; valuePassword: string; remember: boolean }) => {
  const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json');
  const data = await response.json();
  const authorization = useAuthorization(valueMail, valuePassword, remember, data);
  return authorization;
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
  takeUserFromLocal(state, action) {
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
export const { takeUserFromLocal } = userSlice.actions;

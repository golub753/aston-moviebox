import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userActionCreators/userActionCreators';

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
   console.log(action);
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

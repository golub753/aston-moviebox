import { createSlice } from '@reduxjs/toolkit';

export const popUpSlice = createSlice({
 name: 'popUp',
 initialState: {
  auth: false,
  reg: false,
 },
 reducers: {
  changeAuth: (state) => {
   state.auth = !state.auth;
  },
  changeReg: (state) => {
   state.reg = !state.reg;
  },
 },
});

export default popUpSlice.reducer;
export const { changeAuth, changeReg } = popUpSlice.actions;

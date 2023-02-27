import { createSlice } from '@reduxjs/toolkit';

export type MyState = {
 authorizationPopUp: boolean;
 registrationPopUp: boolean;
};

const initialState: MyState = {
 authorizationPopUp: false,
 registrationPopUp: false,
};

export const popUpSlice = createSlice({
 name: 'popUp',
 initialState,
 reducers: {
  toggleAuthorization: (state) => {
   state.authorizationPopUp = !state.authorizationPopUp;
  },
  toggleRegistration: (state) => {
   state.registrationPopUp = !state.registrationPopUp;
  },
 },
});

export const { toggleAuthorization, toggleRegistration } = popUpSlice.actions;
export default popUpSlice.reducer;

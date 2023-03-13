import { createAsyncThunk } from '@reduxjs/toolkit';

type getUserType = {
 mail: string;
 password: string;
 isRemember: boolean;
 users?: Array<object>;
};

type pushUserType = {
 name: string;
 mail: string;
 password: string;
 isRemember: boolean;
};

export const getUser = createAsyncThunk('user/getUser', async ({ mail, password, isRemember, users }: getUserType) => {
 const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json');
 const data = await response.json();
 return data;
});

export const pushUser = createAsyncThunk(
 'user/registerUser',
 async ({ name, mail, password, isRemember }: pushUserType) => {
  const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json', {
   method: 'post',
   body: JSON.stringify({ name, mail, password, wishlist: '' }),
  });
  const data = await response.json();
  return data;
 }
);

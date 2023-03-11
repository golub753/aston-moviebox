import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { setUserFromLocal } from '../store/reducers/userSlice';

export function useUser() {
 const dispatch = useAppDispatch();
 useEffect(() => {
  const localUser = JSON.parse(localStorage.getItem('user'));
  if (localUser) {
   dispatch(setUserFromLocal(localUser));
  }
 }, []);
}

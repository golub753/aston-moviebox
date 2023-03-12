const SET_USER_IN_LOCALSTORAGE = 'user/getUser/fulfilled';
import { getUserInLocalStorage } from '../helpers/getUserInLocalStorage';

export const localStorageMiddleware = (store) => (next) => (action) => {
 let result = next(action);
 switch (action.type) {
  case SET_USER_IN_LOCALSTORAGE:
   const { mail, password, remember } = action.meta.arg;
   const authorization = getUserInLocalStorage(mail, password, remember, action.payload);
   action.payload = authorization;
   result = next(action);
   break;
 }
 return result;
};

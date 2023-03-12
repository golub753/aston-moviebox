const GET_USERS_FULFILLED = 'user/getUser/fulfilled';
import { isRememberUser } from '../helpers/isRememberUser';

export const userMiddleware = (store) => (next) => (action) => {
 switch (action.type) {
  case GET_USERS_FULFILLED:
   const { mail, password, isRemember } = action.meta.arg;
   const user = isRememberUser(mail, password, isRemember, action.payload);
   action.payload = user;
   break;
 }
 let result = next(action);
 return result;
};

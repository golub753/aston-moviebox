export function setUserInLocalStorage(mail: string, password: string, remember: boolean, data: Array<object>) {
 let user;
 for (let key in data) {
  if (data[key].mail === mail) {
   user = data[key];
   break;
  }
 }
 if (remember) {
  if (user) {
   if (user.password === password) {
    localStorage.setItem('user', JSON.stringify(user));
   }
  }
 }
 return user ? (user.password === password ? user : {}) : {};
}

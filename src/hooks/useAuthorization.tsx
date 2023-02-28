export function useAuthorization(mail: string, password: string, remember: boolean, data: Array<object>) {
 let user = data.find((item) => item.mail === mail);
 if (remember) {
  if (user) {
   if (user.password === password) {
    localStorage.setItem('user', JSON.stringify(user));
   }
  }
 }
 return user ? (user.password === password ? user : {}) : {};
}

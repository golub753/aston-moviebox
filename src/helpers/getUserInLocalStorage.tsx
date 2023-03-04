export function getUserInLocalStorage(mail: string, password: string, remember: boolean, data: Array<object>) {
 let users = Object.entries(data);
 const user = users.find((item) => item[1].mail === mail)[1];
 if (remember && user && user.password === password) {
  localStorage.setItem('user', JSON.stringify(user));
 }
 return user ? (user.password === password ? user : {}) : {};
}

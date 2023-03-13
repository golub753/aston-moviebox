export const getTokenUser = (users: object, mail: string) => {
 let usersArray = Object.entries(users);
 let token = usersArray.find((item) => {
  if (item[1].mail === mail) {
   return item[0];
  }
 });
 return token[0];
};

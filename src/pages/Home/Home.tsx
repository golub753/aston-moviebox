import { Main, Movies, Authorization, Registration } from '../../components';

export const Home = () => {
 return (
  <>
   <Main />
   <Movies />
   <Authorization />
   <Registration />
  </>
 );
};

export { Home as default };

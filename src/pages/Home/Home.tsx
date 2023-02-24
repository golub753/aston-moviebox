import { Main, Movies } from '../../components';
import { Outlet } from 'react-router-dom';

export const Home = () => {
 return (
  <>
   <Main />
   <Movies />
   <Outlet />
  </>
 );
};

import s from './HeaderHome.module.scss';
import { Link } from 'react-router-dom';

export const HeaderHome = () => {
 return (
  <Link to={'/'} className={s.header_link}>
   <img src="./src/assets/logo.svg" alt="Logo" className="header-logo" />
   <span className={s.header_name}>MovieBox</span>
  </Link>
 );
};

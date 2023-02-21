import s from './HeaderHome.module.scss';

export const HeaderHome = () => {
 return (
  <a href="/" className={s.header_link}>
   <img src="./src/assets/logo.svg" alt="Logo" className="header-logo" />
   <span className={s.header_name}>MovieBox</span>
  </a>
 );
};

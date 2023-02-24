import { Form } from 'react-router-dom';
import s from './Authorization.module.scss';
import { Link } from 'react-router-dom';

export const Authorization = () => {
 return (
  <>
   <Link to="/" className={s.overlay}></Link>
   <div className={s.authorization}></div>
  </>
 );
};

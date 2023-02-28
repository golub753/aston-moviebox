import s from './Preloader.module.scss';
import spinner from '../../assets/spinner.svg';

export const Preloader = () => {
 return (
  <div className={s.preloader}>
   <img src={spinner} alt={spinner} />
  </div>
 );
};

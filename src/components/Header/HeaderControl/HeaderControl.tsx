import s from './HeaderControl.module.scss';
import { Link } from 'react-router-dom';

type HeaderControl = {
 text: string;
 action: string;
};

export const HeaderControl = ({ text, action }: HeaderControl) => {
 return (
  <Link to={action} className={s.header_control}>
   {text}
  </Link>
 );
};

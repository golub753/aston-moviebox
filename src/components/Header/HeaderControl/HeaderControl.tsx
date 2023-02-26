import s from './HeaderControl.module.scss';
import { useAppDispatch } from '../../../hooks/hooks';
import { toggleAuthorization, toggleRegistration } from '../../../store/popUpSlice';

type HeaderControl = {
 text: string;
 action: 'auth' | 'reg';
};

export const HeaderControl = ({ text, action }: HeaderControl) => {
 const dispatch = useAppDispatch();
 const toggleAction = () => {
  action === 'auth' ? dispatch(toggleAuthorization()) : dispatch(toggleRegistration());
 };
 return (
  <button onClick={toggleAction} className={s.header_control}>
   {text}
  </button>
 );
};

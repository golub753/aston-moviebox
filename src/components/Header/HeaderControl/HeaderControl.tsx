import s from './HeaderControl.module.scss';
import { useDispatch } from 'react-redux';
import { changeAuth, changeReg } from '../../../store/popUpSlice';

type HeaderControl = {
 text: string;
 action: string;
};

export const HeaderControl = ({ text, action }: HeaderControl) => {
 const dispatch = useDispatch();
 function changeStyle() {
  if (action === 'auth') {
   dispatch(changeAuth());
  } else {
   dispatch(changeReg());
  }
 }
 return (
  <span onClick={changeStyle} className={s.header_control}>
   {text}
  </span>
 );
};

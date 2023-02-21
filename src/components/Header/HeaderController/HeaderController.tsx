import { HeaderControl } from '../HeaderControl/HeaderControl';
import s from './HeaderController.module.scss';

export const HeaderController = () => {
 return (
  <div className={s.header_controller}>
   <HeaderControl text="Sign in" />
   <HeaderControl text="Register" />
  </div>
 );
};

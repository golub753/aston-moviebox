import { HeaderControl } from '../HeaderControl/HeaderControl';
import s from './HeaderController.module.scss';

export const HeaderController = () => {
 return (
  <div className={s.header_controller}>
   <HeaderControl text="Sign in" action="auth" />
   <HeaderControl text="Register" action="reg" />
  </div>
 );
};

import { useAppSelector } from '../../../hooks/hooks';
import { HeaderControl } from '../HeaderControl/HeaderControl';
import s from './HeaderController.module.scss';

export const HeaderController = () => {
 const user = useAppSelector((state) => state.user.user.name);
 return (
  <div className={s.header_controller}>
   {user ? (
    <span className={s.header_name}>{user}</span>
   ) : (
    <>
     <HeaderControl text="Sign in" action="auth" />
     <HeaderControl text="Sign up" action="reg" />{' '}
    </>
   )}
  </div>
 );
};

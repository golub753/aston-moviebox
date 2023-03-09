import { useState } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { HeaderControl } from '../HeaderControl/HeaderControl';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import s from './HeaderController.module.scss';

export const HeaderController = () => {
 const user = useAppSelector((state) => state.user.user.name);
 const [visibleMenu, setVisibleMenu] = useState(false);

 const toggleVisibleMenu = (e) => {
  e.preventDefault();
  setVisibleMenu(!visibleMenu);
 };

 return (
  <div className={s.header_controller}>
   {user ? (
    <>
     <button onClick={toggleVisibleMenu} className={s.header_name}>
      {user}
     </button>
     <HeaderMenu isVisible={visibleMenu} />
    </>
   ) : (
    <>
     <HeaderControl text="Sign in" action="auth" />
     <HeaderControl text="Sign up" action="reg" />{' '}
    </>
   )}
  </div>
 );
};

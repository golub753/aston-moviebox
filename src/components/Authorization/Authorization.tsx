import { useAppDispatch } from '../../hooks/hooks';
import { useState } from 'react';
import s from './Authorization.module.scss';
import { toggleAuthorization } from '../../store/popUpSlice';

import showImg from '../../assets/show.svg';
import hide from '../../assets/hide.svg';

export const Authorization = () => {
 const [show, setShow] = useState(false);
 const dispatch = useAppDispatch();

 const rechangeShowPass = () => {
  setShow(!show);
 };
 const toggleAuth = () => {
  dispatch(toggleAuthorization());
 };
 return (
  <>
   <div className={s.overlay} onClick={toggleAuth}></div>
   <div className={s.authorization}>
    <div className={s.authorization_wrapper}>
     <form method="post">
      <div className={s.authorization_title}>Authorization</div>
      <div className={s.authorization_inputs}>
       <div className={s.authorization_block}>
        <label htmlFor="" className={s.authorization_label}>
         E-mail
        </label>
        <input type="email" placeholder="E-mail" className={s.authorization_input} />
       </div>
       <div className={s.authorization_block}>
        <label htmlFor="" className={s.authorization_label}>
         Password
        </label>
        <input type={!show ? 'password' : 'text'} placeholder="Password" className={s.authorization_input} />
        <div className={s.authorization_img} onClick={rechangeShowPass}>
         {!show ? <img src={showImg} alt={showImg} /> : <img src={hide} alt={hide} />}
        </div>
       </div>
      </div>
      <div className={s.authorization_remember}>
       <input type="checkbox" name="remember" id="remember" className={s.authorization_check} />
       <label htmlFor="remember" className={s.authorization_check_label}>
        Remember me
       </label>
      </div>
      <button className={s.authorization_sign}>Sign In</button>
     </form>
    </div>
   </div>
  </>
 );
};

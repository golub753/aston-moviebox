import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import s from './Registration.module.scss';
import { changeReg } from '../../store/popUpSlice';

import showImg from '../../assets/show.svg';
import hide from '../../assets/hide.svg';

export const Registration = () => {
 const [showPass, setShowPass] = useState(false);
 const reg = useSelector((state: any) => state.popUp.reg);
 const dispatch = useDispatch();

 const rechangeShow = () => {
  setShowPass(!showPass);
 };
 const closeReg = () => {
  dispatch(changeReg());
 };

 return (
  <>
   <div className={s.overlay} data-style={reg} onClick={closeReg}></div>
   <div className={s.registration} data-style={reg}>
    <div className={s.registration_wrapper}>
     <form method="post">
      <div className={s.registration_title}>Registration</div>
      <div className={s.registration_inputs}>
       <div className={s.registration_block}>
        <label htmlFor="" className={s.registration_label}>
         Name
        </label>
        <input type="text" placeholder="Name" className={s.registration_input} />
       </div>
       <div className={s.registration_block}>
        <label htmlFor="" className={s.registration_label}>
         E-mail
        </label>
        <input type="email" placeholder="E-mail" className={s.registration_input} />
       </div>
       <div className={s.registration_block}>
        <label htmlFor="" className={s.registration_label}>
         Password
        </label>
        <input type={!showPass ? 'password' : 'text'} placeholder="Password" className={s.registration_input} />
        <div className={s.registration_img} onClick={rechangeShow}>
         {!showPass ? <img src={showImg} alt={showImg} /> : <img src={hide} alt={hide} />}
        </div>
       </div>
       <div className={s.registration_block}>
        <label htmlFor="" className={s.registration_label}>
         Confirm the password
        </label>
        <input type={!showPass ? 'password' : 'text'} placeholder="Password" className={s.registration_input} />
       </div>
      </div>
      <div className={s.registration_remember}>
       <input type="checkbox" name="remember" id="remember" className={s.registration_check} />
       <label htmlFor="remember" className={s.registration_check_label}>
        Remember me
       </label>
      </div>
      <button className={s.registration_sign}>Sign Up</button>
     </form>
    </div>
   </div>
  </>
 );
};

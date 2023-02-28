import { useAppDispatch } from '../../hooks/hooks';
import { useState } from 'react';
import s from './Authorization.module.scss';
import { toggleAuthorization } from '../../store/popUpSlice';
import { getUser } from '../../store/userSlice';

import showImg from '../../assets/show.svg';
import hide from '../../assets/hide.svg';

export const Authorization = () => {
 const [show, setShow] = useState(false);
 const [valueMail, setValueMail] = useState('');
 const [valuePassword, setValuePassword] = useState('');
 const [remember, setRemember] = useState(false);
 const dispatch = useAppDispatch();

 const submitForm = (e) => {
  e.preventDefault();
  dispatch(getUser({ valueMail, valuePassword, remember }));
  toggleAuth();
  e.target.reset();
 };

 const rechangeShowPass = () => {
  setShow(!show);
 };

 const toggleAuth = () => {
  dispatch(toggleAuthorization());
 };

 const changeInputMail = (e) => {
  setValueMail(e.target.value);
 };

 const changeInputPassword = (e) => {
  setValuePassword(e.target.value);
 };

 const changeRemember = () => {
  setRemember(!remember);
 };

 return (
  <>
   <div className={s.overlay} onClick={toggleAuth}></div>
   <div className={s.authorization}>
    <div className={s.authorization_wrapper}>
     <form method="get" onSubmit={(e) => submitForm(e)}>
      <div className={s.authorization_title}>Authorization</div>
      <div className={s.authorization_inputs}>
       <div className={s.authorization_block}>
        <label htmlFor="email_auth" className={s.authorization_label}>
         E-mail
        </label>
        <input
         type="email"
         required
         value={valueMail}
         onChange={(e) => changeInputMail(e)}
         placeholder="E-mail"
         id="email_auth"
         className={s.authorization_input}
        />
       </div>
       <div className={s.authorization_block}>
        <label htmlFor="req_auth" className={s.authorization_label}>
         Password
        </label>
        <input
         value={valuePassword}
         type={!show ? 'password' : 'text'}
         required
         placeholder="Password"
         onChange={(e) => changeInputPassword(e)}
         id="req_auth"
         className={s.authorization_input}
        />
        <div className={s.authorization_img} onClick={rechangeShowPass}>
         {!show ? <img src={showImg} alt={showImg} /> : <img src={hide} alt={hide} />}
        </div>
       </div>
      </div>
      <div className={s.authorization_remember}>
       <input
        type="checkbox"
        checked={remember}
        onChange={changeRemember}
        name="remember"
        id="remember"
        className={s.authorization_check}
       />
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

import { useAppDispatch } from '../../hooks/hooks';
import { useState } from 'react';
import s from './Authorization.module.scss';
import { toggleAuthorization } from '../../store/popUpSlice';
import { getUser } from '../../store/userSlice';

import showImg from '../../assets/show.svg';
import hide from '../../assets/hide.svg';
import close from '../../assets/close.svg';

interface FormState {
 mail: string;
 password: string;
 remember: boolean;
}

export const Authorization = () => {
 const [formState, setFormState] = useState<FormState>({
  mail: '',
  password: '',
  remember: false,
 });

 const { mail, password, remember } = formState;

 const [show, setShow] = useState(false);

 const dispatch = useAppDispatch();

 const submitForm = (e) => {
  e.preventDefault();
  dispatch(getUser({ mail, password, remember }));
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
  setFormState((prev) => {
   return { ...prev, mail: e.target.value };
  });
 };

 const changeInputPassword = (e) => {
  setFormState((prev) => {
   return { ...prev, password: e.target.value };
  });
 };

 const changeRemember = () => {
  setFormState((prev) => {
   return { ...prev, remember: !remember };
  });
 };

 return (
  <>
   <div className={s.overlay}></div>
   <div className={s.authorization}>
    <div className={s.authorization_wrapper}>
     <img src={close} alt={close} className={s.authorization_close} onClick={toggleAuth} />
     <form onSubmit={submitForm}>
      <div className={s.authorization_title}>Authorization</div>
      <div className={s.authorization_inputs}>
       <div className={s.authorization_block}>
        <label htmlFor="email_auth" className={s.authorization_label}>
         E-mail
        </label>
        <input
         type="email"
         required
         value={mail}
         onChange={changeInputMail}
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
         value={password}
         type={!show ? 'password' : 'text'}
         required
         placeholder="Password"
         onChange={changeInputPassword}
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

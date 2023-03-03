import { useAppDispatch } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import s from './Registration.module.scss';
import { toggleRegistration } from '../../store/popUpSlice';
import { pushUser } from '../../store/userSlice';
import { getUser } from '../../store/userSlice';
import { authorizationWithourRemember } from '../../store/userSlice';

import showImg from '../../assets/show.svg';
import hide from '../../assets/hide.svg';

export const Registration = () => {
 const [userValid, setUserValid] = useState(false);
 const [mailValid, setMailValid] = useState(false);
 const [passValid, setPassValid] = useState(false);
 const [passConfirmValid, setPassConfirmValid] = useState(false);

 const [valueName, setValueName] = useState('');
 const [valueMail, setValueMail] = useState('');
 const [valuePassword, setValuePassword] = useState('');
 const [valueConfirmPassword, setValueConfirmPassword] = useState('');

 const [confirm, setConfirm] = useState(false);
 const [showPass, setShowPass] = useState(false);

 const [disabledSubmit, setDisabledSubmit] = useState(true);
 const [userIsExists, setUserIsExists] = useState(false);

 const [remember, setRemember] = useState(false);

 const dispatch = useAppDispatch();

 useEffect(() => {
  if (userValid && mailValid && passValid && passConfirmValid) {
   setDisabledSubmit(false);
  } else {
   setDisabledSubmit(true);
  }
 }, [userValid, mailValid, passValid, passConfirmValid]);

 const submitForm = (e) => {
  e.preventDefault();
  dispatch(pushUser({ valueName, valueMail, valuePassword, remember }));
  if (remember) {
   dispatch(getUser({ valueMail, valuePassword, remember }));
  } else {
   dispatch(authorizationWithourRemember({ name: valueName, mail: valueMail, password: valuePassword }));
  }
  toggleRegist();
  e.target.reset();
 };

 const changeInputName = (e) => {
  setValueName(e.target.value);
  if (e.target.value.length > 1) {
   setUserValid(true);
  } else {
   setUserValid(false);
  }
 };

 const changeInputMail = (e) => {
  setValueMail(e.target.value);
  if (e.target.value) {
   setMailValid(true);
  } else {
   setMailValid(false);
  }
 };

 const checkUserInDataBase = async (e) => {
  const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json');
  const data = await response.json();
  for (let key in data) {
   if (data[key].mail === e.target.value) {
    setUserIsExists(true);
    setMailValid(false);
    break;
   } else {
    setUserIsExists(false);
    setMailValid(true);
   }
  }
 };

 const changeInputPassword = (e) => {
  setValuePassword(e.target.value);
  if (e.target.value) {
   setPassValid(true);
  } else {
   setPassValid(false);
  }
 };

 const changeInputConfirmPassword = (e) => {
  setValueConfirmPassword(e.target.value);
  if (e.target.value !== valuePassword) {
   setConfirm(true);
   setDisabledSubmit(true);
   setPassConfirmValid(false);
  } else {
   setConfirm(false);
   setPassConfirmValid(true);
  }
 };

 const changeRemember = () => {
  setRemember(!remember);
 };

 const rechangeShow = () => {
  setShowPass(!showPass);
 };

 const toggleRegist = () => {
  dispatch(toggleRegistration());
 };

 return (
  <>
   <div className={s.overlay} onClick={toggleRegist}></div>
   <div className={s.registration}>
    <div className={s.registration_wrapper}>
     <form onSubmit={submitForm}>
      <div className={s.registration_title}>Registration</div>
      <div className={s.registration_inputs}>
       <div className={s.registration_block}>
        <label htmlFor="name_reg" className={s.registration_label}>
         Name
        </label>
        <input
         type="text"
         id="name_reg"
         value={valueName}
         placeholder="Name"
         required
         onChange={changeInputName}
         className={s.registration_input}
         minLength={2}
        />
       </div>
       <div className={s.registration_block}>
        <label htmlFor="email_reg" className={s.registration_label}>
         E-mail
        </label>
        <input
         id="email_reg"
         type="email"
         placeholder="E-mail"
         required
         onChange={changeInputMail}
         value={valueMail}
         onBlur={checkUserInDataBase}
         className={`${userIsExists ? s.registration_input_error : s.registration_input}`}
        />
       </div>
       {userIsExists && <div className={s.error}>Human with this mail is exists.</div>}
       <div className={s.registration_block}>
        <label htmlFor="pass_reg" className={s.registration_label}>
         Password
        </label>
        <input
         id="pass_reg"
         type={!showPass ? 'password' : 'text'}
         placeholder="Password"
         required
         onChange={changeInputPassword}
         className={s.registration_input}
        />
        <div className={s.registration_img} onClick={rechangeShow}>
         {!showPass ? <img src={showImg} alt={showImg} /> : <img src={hide} alt={hide} />}
        </div>
       </div>
       <div className={s.registration_block}>
        <label htmlFor="confirm_reg" className={s.registration_label}>
         Confirm the password
        </label>
        <input
         id="confirm_reg"
         type={!showPass ? 'password' : 'text'}
         placeholder="Password"
         value={valueConfirmPassword}
         required
         onChange={changeInputConfirmPassword}
         className={`${confirm ? s.registration_input_error : s.registration_input}`}
        />
       </div>
       {confirm && <div className={s.error}>Password mismatch</div>}
      </div>
      <div className={s.registration_remember}>
       <input
        type="checkbox"
        name="remember"
        id="remember_reg"
        checked={remember}
        onChange={changeRemember}
        className={s.registration_check}
       />
       <label htmlFor="remember_reg" className={s.registration_check_label}>
        Remember me
       </label>
      </div>
      <button className={s.registration_sign} disabled={disabledSubmit}>
       Sign Up
      </button>
     </form>
    </div>
   </div>
  </>
 );
};

import { useAppDispatch } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import { toggleRegistration } from '../../store/popUpSlice';
import { pushUser } from '../../store/userSlice';
import { getUser } from '../../store/userSlice';
import { authorizationWithourRemember } from '../../store/userSlice';

import s from './Registration.module.scss';

import showImg from '../../assets/show.svg';
import hide from '../../assets/hide.svg';

interface FormState {
 name: string;
 mail: string;
 password: string;
 passwordConfirm: string;
 remember: boolean;
}

interface IsFormNotEmpty {
 userValid: boolean;
 mailValid: boolean;
 passValid: boolean;
 passConfirmValid: boolean;
}

export const Registration = () => {
 const [formState, setFormState] = useState<FormState>({
  name: '',
  mail: '',
  password: '',
  passwordConfirm: '',
  remember: false,
 });

 const [isFormNotEmpty, setIsFormNotEmpty] = useState<IsFormNotEmpty>({
  userValid: false,
  mailValid: false,
  passValid: false,
  passConfirmValid: false,
 });

 const { name, mail, password, passwordConfirm, remember } = formState;
 const { userValid, mailValid, passValid, passConfirmValid } = isFormNotEmpty;

 const [confirm, setConfirm] = useState(false);
 const [showPass, setShowPass] = useState(false);

 const [disabledSubmit, setDisabledSubmit] = useState(true);
 const [userIsExists, setUserIsExists] = useState(false);

 const dispatch = useAppDispatch();

 function isValidationInputs(userValid: boolean, mailValid: boolean, passValid: boolean, passConfirmValid: boolean) {
  if (userValid && mailValid && passValid && passConfirmValid) {
   return true;
  } else {
   return false;
  }
 }

 //  useEffect(() => {
 //   isValidationInputs(userValid, mailValid, passValid, passConfirmValid);
 //  }, [userValid, mailValid, passValid, passConfirmValid]);

 const submitForm = (e) => {
  e.preventDefault();
  dispatch(pushUser({ name, mail, password, remember }));
  if (formState.remember) {
   dispatch(getUser({ mail, password, remember }));
  } else {
   dispatch(authorizationWithourRemember({ name: name, mail: mail, password: password }));
  }
  toggleRegist();
  e.target.reset();
 };

 const changeInputName = (e) => {
  setFormState((prev) => {
   return { ...prev, name: e.target.value };
  });
  if (e.target.value.length > 1) {
   setIsFormNotEmpty((prev) => {
    return { ...prev, userValid: true };
   });
  } else {
   setIsFormNotEmpty((prev) => {
    return { ...prev, userValid: false };
   });
  }
  const isValid = isValidationInputs(userValid, mailValid, passValid, passConfirmValid);
  !isValid ? setDisabledSubmit(true) : setDisabledSubmit(false);
 };

 const changeInputMail = (e) => {
  setFormState((prev) => {
   return { ...prev, mail: e.target.value };
  });
  if (e.target.value) {
   setIsFormNotEmpty((prev) => {
    return { ...prev, mailValid: true };
   });
  } else {
   setIsFormNotEmpty((prev) => {
    return { ...prev, mailValid: false };
   });
  }
  const isValid = isValidationInputs(userValid, mailValid, passValid, passConfirmValid);
  !isValid ? setDisabledSubmit(true) : setDisabledSubmit(false);
 };

 const checkUserInDataBase = async (e) => {
  const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json');
  const data = await response.json();
  for (let key in data) {
   if (data[key].mail === e.target.value) {
    setUserIsExists(true);
    setIsFormNotEmpty((prev) => {
     return { ...prev, mailValid: false };
    });
    break;
   } else {
    setUserIsExists(false);
    setIsFormNotEmpty((prev) => {
     return { ...prev, mailValid: true };
    });
   }
  }
 };

 const changeInputPassword = (e) => {
  setFormState((prev) => {
   return { ...prev, password: e.target.value };
  });
  if (e.target.value) {
   setIsFormNotEmpty((prev) => {
    return { ...prev, passValid: true };
   });
  } else {
   setIsFormNotEmpty((prev) => {
    return { ...prev, passValid: false };
   });
  }
  const isValid = isValidationInputs(userValid, mailValid, passValid, passConfirmValid);
  !isValid ? setDisabledSubmit(true) : setDisabledSubmit(false);
 };

 const changeInputConfirmPassword = (e) => {
  setFormState((prev) => {
   return { ...prev, passwordConfirm: e.target.value };
  });
  if (e.target.value !== password) {
   setConfirm(true);
   setIsFormNotEmpty((prev) => {
    return { ...prev, passConfirmValid: false };
   });
  } else {
   setConfirm(false);
   setIsFormNotEmpty((prev) => {
    return { ...prev, passConfirmValid: true };
   });
  }
  const isValid = isValidationInputs(userValid, mailValid, passValid, passConfirmValid);
  !isValid ? setDisabledSubmit(true) : setDisabledSubmit(false);
 };

 const changeRemember = () => {
  setFormState((prev) => {
   return { ...prev, remember: !remember };
  });
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
         value={name}
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
         value={mail}
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
         value={password}
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
         value={passwordConfirm}
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

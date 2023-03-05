import { useAppDispatch } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import { toggleRegistration } from '../../store/popUpSlice';
import { pushUser } from '../../store/userSlice';
import { getUser } from '../../store/userSlice';
import { authorizationWithourRemember } from '../../store/userSlice';

import s from './Registration.module.scss';

import showImg from '../../assets/show.svg';
import hide from '../../assets/hide.svg';
import close from '../../assets/close.svg';

interface FormState {
 name: FormStatePros;
 mail: FormStatePros;
 password: FormStatePros;
 passwordConfirm: FormStatePros;
 remember: boolean;
 errorForm: boolean;
}

type FormStatePros = {
 value: string;
 error: boolean;
 errorMessage: string;
};

export const Registration = () => {
 const [formState, setFormState] = useState<FormState>({
  name: {
   value: '',
   error: false,
   errorMessage: '',
  },
  mail: {
   value: '',
   error: false,
   errorMessage: '',
  },
  password: {
   value: '',
   error: false,
   errorMessage: '',
  },
  passwordConfirm: {
   value: '',
   error: false,
   errorMessage: '',
  },
  remember: false,
  errorForm: true,
 });

 const { name, mail, password, passwordConfirm, remember, errorForm } = formState;
 const [showPass, setShowPass] = useState(false);

 const REG_MAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 const dispatch = useAppDispatch();

 const submitForm = (e) => {
  e.preventDefault();
  const inputs = Object.entries(formState);
  inputs.forEach((item) => {
   const title = item[0];
   const values = item[1];
   if (title !== 'remember' && title !== 'errorForm') {
    if (!values.value) {
     setFormState((prev) => {
      return { ...prev, [title]: { value: '', error: true, errorMessage: `${title} is empty` }, errorForm: true };
     });
    }
   }
  });
  if (!errorForm) {
   dispatch(
    pushUser({
     name: name.value,
     mail: mail.value,
     password: password.value,
     remember: remember,
    })
   );
   if (remember) {
    dispatch(getUser({ mail: mail.value, password: password.value, remember: remember }));
   } else {
    dispatch(
     authorizationWithourRemember({
      name: name.value,
      mail: mail.value,
      password: password.value,
     })
    );
   }
   toggleRegist();
   e.target.reset();
  }
 };

 const checkUserInDataBase = async (e) => {
  const response = await fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json');
  const data = await response.json();
  for (let key in data) {
   if (data[key].mail === e.target.value) {
    setFormState((prev) => {
     return { ...prev, mail: { ...mail, error: true, errorMessage: 'Human with this mail is exists.' } };
    });
    break;
   } else {
    setFormState((prev) => {
     return { ...prev, mail: { ...mail, error: false, errorMessage: '' } };
    });
   }
  }
 };

 const changeInputName = (e) => {
  if (e.target.value.length >= 2) {
   setFormState((prev) => {
    return { ...prev, name: { value: e.target.value, error: false, errorMessage: '' } };
   });
  } else {
   setFormState((prev) => {
    return {
     ...prev,
     name: { value: e.target.value, error: true, errorMessage: 'Name must contain more than 1 character' },
    };
   });
  }
  if (name.value && mail.value && password.value && passwordConfirm.value) {
   setFormState((prev) => {
    return { ...prev, errorForm: false };
   });
  }
 };

 const changeInputMail = (e) => {
  if (!REG_MAIL.test(e.target.value)) {
   setFormState((prev) => {
    return { ...prev, mail: { value: e.target.value, error: true, errorMessage: 'Wrong format' } };
   });
  } else {
   setFormState((prev) => {
    return { ...prev, mail: { value: e.target.value, error: false, errorMessage: '' } };
   });
  }
  if (name.value && mail.value && password.value && passwordConfirm.value) {
   setFormState((prev) => {
    return { ...prev, errorForm: false };
   });
  }
 };

 const changeInputPassword = (e) => {
  if (e.target.value.length >= 3) {
   setFormState((prev) => {
    return { ...prev, password: { value: e.target.value, error: false, errorMessage: '' } };
   });
  } else {
   setFormState((prev) => {
    return {
     ...prev,
     password: { value: e.target.value, error: true, errorMessage: 'Password must be at least 3 characters' },
    };
   });
  }
  if (name.value && mail.value && password.value && passwordConfirm.value) {
   setFormState((prev) => {
    return { ...prev, errorForm: false };
   });
  }
 };

 const changeInputConfirmPassword = (e) => {
  if (e.target.value !== password.value) {
   setFormState((prev) => {
    return {
     ...prev,
     passwordConfirm: { value: e.target.value, error: true, errorMessage: 'Password mismatch' },
    };
   });
  } else {
   setFormState((prev) => {
    return { ...prev, passwordConfirm: { value: e.target.value, error: false, errorMessage: '' } };
   });
  }
  if (name.value && mail.value && password.value && passwordConfirm.value) {
   setFormState((prev) => {
    return { ...prev, errorForm: false };
   });
  }
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
   <div className={s.overlay}></div>
   <div className={s.registration}>
    <div className={s.registration_wrapper}>
     <img src={close} alt={close} className={s.registration_close} onClick={toggleRegist} />
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
         value={name.value}
         placeholder="Name"
         onChange={changeInputName}
         className={`${name.error ? s.registration_input_error : s.registration_input}`}
         minLength={2}
        />
       </div>
       {name.error && <div className={s.error}>{name.errorMessage}</div>}
       <div className={s.registration_block}>
        <label htmlFor="email_reg" className={s.registration_label}>
         E-mail
        </label>
        <input
         id="email_reg"
         type="email"
         placeholder="E-mail"
         onChange={changeInputMail}
         value={mail.value}
         onBlur={checkUserInDataBase}
         className={`${mail.error ? s.registration_input_error : s.registration_input}`}
        />
       </div>
       {mail.error && <div className={s.error}>{mail.errorMessage}</div>}
       <div className={s.registration_block}>
        <label htmlFor="pass_reg" className={s.registration_label}>
         Password
        </label>
        <input
         id="pass_reg"
         type={!showPass ? 'password' : 'text'}
         placeholder="Password"
         value={password.value}
         onChange={changeInputPassword}
         className={`${password.error ? s.registration_input_error : s.registration_input}`}
        />
        <div className={s.registration_img} onClick={rechangeShow}>
         {!showPass ? <img src={showImg} alt={showImg} /> : <img src={hide} alt={hide} />}
        </div>
       </div>
       {password.error && <div className={s.error}>{password.errorMessage}</div>}
       <div className={s.registration_block}>
        <label htmlFor="confirm_reg" className={s.registration_label}>
         Confirm the password
        </label>
        <input
         id="confirm_reg"
         type={!showPass ? 'password' : 'text'}
         placeholder="Password"
         value={passwordConfirm.value}
         onChange={changeInputConfirmPassword}
         className={`${passwordConfirm.error ? s.registration_input_error : s.registration_input}`}
        />
       </div>
      </div>
      {passwordConfirm.error && <div className={s.error}>{passwordConfirm.errorMessage}</div>}
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
      <button className={s.registration_sign}>Sign Up</button>
     </form>
    </div>
   </div>
  </>
 );
};

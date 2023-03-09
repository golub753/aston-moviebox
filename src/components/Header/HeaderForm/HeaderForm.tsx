import { InputSearch } from '../../index';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export const HeaderForm = () => {
 const [isSubmit, setIsSubmit] = useState(false);
 const submitFormEnter = (e) => {
  e.preventDefault();
  setIsSubmit(true);
 };

 return (
  <form className="header-form" onSubmit={submitFormEnter}>
   {isSubmit && <Navigate to="/result" />}
   <InputSearch placeholder="What do you want to watch?" />
  </form>
 );
};

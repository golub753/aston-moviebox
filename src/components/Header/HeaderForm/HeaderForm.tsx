import { InputSearch } from '../../index';

export const HeaderForm = () => {
 const submitFormEnter = (e) => {
  e.preventDefault();
  window.location.href = '/result';
 };

 return (
  <form className="header-form" onSubmit={submitFormEnter}>
   <InputSearch placeholder="What do you want to watch?" />
  </form>
 );
};

import { InputSearch } from '../../index';
import { useNavigate } from 'react-router-dom';

export const HeaderForm = () => {
 const navigate = useNavigate();
 const submitFormEnter = (e) => {
  e.preventDefault();
  navigate('/result');
 };

 return (
  <form className="header-form" onSubmit={submitFormEnter}>
   <InputSearch placeholder="What do you want to watch?" />
  </form>
 );
};

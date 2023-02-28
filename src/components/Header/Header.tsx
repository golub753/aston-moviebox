import { Container } from '../index';
import { HeaderHome } from './HeaderHome/HeaderHome';
import { HeaderForm } from './HeaderForm/HeaderForm';
import { HeaderController } from './HeaderController/HeaderController';
import { Authorization, Registration } from '../index';
import s from './Header.module.scss';
import { useAppSelector } from '../../hooks/hooks';

export const Header = () => {
 const { authorizationPopUp, registrationPopUp } = useAppSelector((state) => state.popUp);
 return (
  <div className={s.header}>
   <Container>
    <div className={s.header_wrapper}>
     <HeaderHome />
     <HeaderForm />
     <HeaderController />
    </div>
   </Container>
   {authorizationPopUp && <Authorization />}
   {registrationPopUp && <Registration />}
  </div>
 );
};

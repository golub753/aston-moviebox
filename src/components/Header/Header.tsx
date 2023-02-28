import { Container } from '../index';
import { HeaderHome } from './HeaderHome/HeaderHome';
import { HeaderForm } from './HeaderForm/HeaderForm';
import { HeaderController } from './HeaderController/HeaderController';
import { Authorization, Registration } from '../index';
import s from './Header.module.scss';
import { useAppSelector } from '../../hooks/hooks';

export const Header = () => {
 const showPopUpAuthorization = useAppSelector((state) => state.popUp.authorizationPopUp);
 const showPopUpRegistration = useAppSelector((state) => state.popUp.registrationPopUp);
 return (
  <div className={s.header}>
   <Container>
    <div className={s.header_wrapper}>
     <HeaderHome />
     <HeaderForm />
     <HeaderController />
    </div>
   </Container>
   {showPopUpAuthorization ? <Authorization /> : null}
   {showPopUpRegistration ? <Registration /> : null}
  </div>
 );
};

import { Container } from '../index';
import { HeaderHome } from './HeaderHome/HeaderHome';
import { HeaderForm } from './HeaderForm/HeaderForm';
import { HeaderController } from './HeaderController/HeaderController';
import s from './Header.module.scss';

export const Header = () => {
 return (
  <div className={s.header}>
   <Container>
    <div className={s.header_wrapper}>
     <HeaderHome />
     <HeaderForm />
     <HeaderController />
    </div>
   </Container>
  </div>
 );
};

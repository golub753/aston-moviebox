//container
import { Container } from '../index';
//Header
import { HeaderHome, HeaderForm, HeaderController } from '../index';

export const Header = () => {
 return (
  <div className="header">
   <Container>
    <div className="header-wrapper">
     <HeaderHome />
     <HeaderForm />
     <HeaderController />
    </div>
   </Container>
  </div>
 );
};

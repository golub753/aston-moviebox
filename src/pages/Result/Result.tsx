import s from './Result.module.scss';
import { Main, Container } from '../../components/index';

export const Result = () => {
 return (
  <div className={s.result}>
   <Main />
   <Container>
    <div className={s.result_title}>Results</div>
   </Container>
  </div>
 );
};

export { Result as default };

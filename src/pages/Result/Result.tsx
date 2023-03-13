import s from './Result.module.scss';
import { Main, Container } from '../../components/index';
import { ResultMovies } from './ResultMovies/ResultMovies';
import { useAppSelector } from '../../hooks/hooks';

export const Result = () => {
 const movies = useAppSelector((state) => state.searchReducer.searchMovies);
 return (
  <div className={s.result}>
   <Main />
   <Container>
    <div className={s.result_title}>Results</div>
    <ResultMovies movies={movies} />
   </Container>
  </div>
 );
};

export { Result as default };

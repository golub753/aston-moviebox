import { Container } from '../index';
import { MoviesList } from './MoviesList/MoviesList';
import s from './Movies.module.scss';

export const Movies = () => {
 return (
  <div className={s.movies}>
   <Container>
    <div className={s.movies_title}>Movies</div>
    <MoviesList />
   </Container>
  </div>
 );
};

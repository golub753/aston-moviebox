import { useContext } from 'react';
import { Container } from '../index';
import { MoviesList } from './MoviesList/MoviesList';
import s from './Movies.module.scss';
import { ThemeContext } from '../../App';
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';

export const Movies = () => {
 const themes = useContext(ThemeContext);

 return (
  <div className={s.movies} style={themes}>
   <Container>
    <ErrorBoundary>
     <div className={s.movies_title}>Movies</div>
     <MoviesList />
    </ErrorBoundary>
   </Container>
  </div>
 );
};

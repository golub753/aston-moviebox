import { useContext, useEffect } from 'react';
// import { fetchMovies } from '../../store/reducers/moviesActionCreators/moviesActionCreators';
// import { useAppDispatch } from '../../hooks/hooks';
import { Container } from '../index';
import { MoviesList } from './MoviesList/MoviesList';
import s from './Movies.module.scss';
import { ThemeContext } from '../../App';
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';

export const Movies = () => {
 //  const dispatch = useAppDispatch();
 const themes = useContext(ThemeContext);

 //  useEffect(() => {
 //   dispatch(fetchMovies());
 //  }, []);

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

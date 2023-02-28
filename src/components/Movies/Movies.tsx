import { useContext, useEffect, useState } from 'react';
import { fetchMovies } from '../../store/moviesSlice';
import { useDispatch } from 'react-redux';
import { Container } from '../index';
import { MoviesList } from './MoviesList/MoviesList';
import s from './Movies.module.scss';
import { ThemeContext } from '../../App';

export const Movies = () => {
 const dispatch = useDispatch();
 const themes = useContext(ThemeContext);

 useEffect(() => {
  dispatch(fetchMovies());
 }, []);

 return (
  <div className={s.movies} style={themes}>
   <Container>
    <div className={s.movies_title}>Movies</div>
    <MoviesList />
   </Container>
  </div>
 );
};

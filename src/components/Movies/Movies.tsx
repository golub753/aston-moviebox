import { useEffect, useState } from 'react';
import { fetchMovies } from '../../store/moviesSlice';
import { useDispatch } from 'react-redux';
import { Container } from '../index';
import { MoviesList } from './MoviesList/MoviesList';
import s from './Movies.module.scss';

export const Movies = () => {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchMovies());
 }, []);

 return (
  <div className={s.movies}>
   <Container>
    <div className={s.movies_title}>Movies</div>
    <MoviesList />
   </Container>
  </div>
 );
};

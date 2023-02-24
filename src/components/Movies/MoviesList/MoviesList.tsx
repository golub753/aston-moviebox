import { MoviesCart } from '../MoviesCart/MoviesCart';
import { useSelector } from 'react-redux';
import s from './MoviesList.module.scss';

export const MoviesList = () => {
 const movies = useSelector((state: any) => state.movies);
 return (
  <div className={s.movies_carts}>
   {movies.status === 'success'
    ? movies.movies.map((item: any) => {
       return (
        <MoviesCart
         key={item.id}
         name={item.origin_name}
         poster={item.poster}
         category={item.type}
         year={item.year}
         country={item.country}
         imdb={item.imdb}
         genre={item.genre}
        />
       );
      })
    : null}
  </div>
 );
};

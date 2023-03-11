import { MoviesCart } from '../MoviesCart/MoviesCart';
import s from './MoviesList.module.scss';
import { moviesAPI } from '../../../services/MoviesService';

export const MoviesList = () => {
 const { data: movies, isLoading, status } = moviesAPI.useFetchAllMoviesQuery('');
 return (
  <div className={s.movies_carts}>
   {isLoading && <div>Loading...</div>}
   {status === 'fulfilled' &&
    movies.results.map((item: any) => {
     return (
      <MoviesCart
       key={item.id}
       id={item.id}
       name={item.origin_name}
       poster={item.poster}
       category={item.type}
       year={item.year}
       country={item.country}
       imdb={item.imdb}
       genre={item.genre}
      />
     );
    })}
  </div>
 );
};

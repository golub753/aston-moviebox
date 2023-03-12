import { Header, Preloader } from '../index';
import { useParams } from 'react-router-dom';
import { MovieMain } from './MovieMain/MovieMain';
import { moviesAPI } from '../../services/MoviesService';

export const Movie = () => {
 const { data: movies, isLoading } = moviesAPI.useFetchAllMoviesQuery('');
 const { id } = useParams();
 const movie = isLoading ? false : movies.find((element) => element.id === +id);
 return (
  <>
   {isLoading ? (
    <Preloader />
   ) : (
    <>
     <Header />
     <MovieMain id={id} img={movie.poster} title={movie.origin_name} imdb={movie.imdb} />
    </>
   )}
  </>
 );
};

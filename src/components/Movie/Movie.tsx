import { Header, Preloader } from '../index';
import { useParams } from 'react-router-dom';
import { MovieMain } from './MovieMain/MovieMain';
import { moviesAPI } from '../../services/MoviesService';

type MovieType = {
 id: number;
 poster: string;
 origin_name: string;
 imdb?: number;
};

export const Movie = () => {
 let { data: movie = [], isLoading } = moviesAPI.useFetchAllMoviesQuery('');
 const { id } = useParams();
 movie = movie.find((element: MovieType) => element.id === +id);
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

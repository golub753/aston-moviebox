import { Header } from '../index';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { MovieMain } from './MovieMain/MovieMain';

export const Movie = () => {
 const { id } = useParams();
 const movie = useAppSelector((state) => state.movies.movies.find((element) => element.id === +id));
 return (
  <div>
   <Header />
   <MovieMain id={id} img={movie.poster} title={movie.origin_name} imdb={movie.imdb} />
  </div>
 );
};

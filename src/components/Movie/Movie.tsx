import { Header } from '../index';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { MovieMain } from './MovieMain/MovieMain';

export const Movie = () => {
 const { id } = useParams();
 const notification = useAppSelector((state) => state.movies.movies.find((element) => element.id === +id));
 return (
  <div>
   <Header />
   <MovieMain img={notification.poster} title={notification.origin_name} imdb={notification.imdb} />
  </div>
 );
};

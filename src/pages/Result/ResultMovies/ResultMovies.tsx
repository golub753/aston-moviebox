import s from './ResultMovies.module.scss';
import { ResultMovie } from '../ResultMovie/ResultMovie';

type ResultMoviesProps = {
 movies: Array<object>;
};

export const ResultMovies = ({ movies }: ResultMoviesProps) => {
 return (
  <div className={s.results}>
   {movies &&
    movies.map((item: any) => {
     return (
      <ResultMovie
       key={item.id}
       id={item.id}
       name={item.origin_name}
       poster={item.poster}
       category={item.type}
       year={item.year}
       country={item.country}
       imdb={item.imdb}
       genre={item.genre}
       latest={item.latest}
      />
     );
    })}
  </div>
 );
};

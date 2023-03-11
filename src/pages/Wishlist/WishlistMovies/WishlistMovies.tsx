import { WishlistMovie } from '../WishlistMovie/WishlistMovie';
import s from './WishlistMovies.module.scss';

type WishlistMoviesProps = {
 movies: Array<object>;
};

export const WishlistMovies = ({ movies }: any) => {
 const wishlist = Object.entries(movies);
 return (
  <div className={s.wishlist}>
   {wishlist &&
    wishlist.map((item) => {
     return (
      <WishlistMovie
       key={item[1].id}
       id={item[1].id}
       name={item[1].origin_name}
       poster={item[1].poster}
       category={item[1].type}
       year={item[1].year}
       country={item[1].country}
       imdb={item[1].imdb}
       genre={item[1].genre}
      />
     );
    })}
  </div>
 );
};

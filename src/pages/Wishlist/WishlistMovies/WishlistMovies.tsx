import { WishlistMovie } from '../WishlistMovie/WishlistMovie';
import s from './WishlistMovies.module.scss';

type WishlistMoviesProps = {
 movies: Array<object>;
};

export const WishlistMovies = ({ movies }: any) => {
 const wishlist = Object.entries(movies).reduce((array, item) => array.concat(item[1]), []);
 return (
  <div className={s.wishlist}>
   {wishlist &&
    wishlist.map((item) => {
     return (
      <WishlistMovie
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

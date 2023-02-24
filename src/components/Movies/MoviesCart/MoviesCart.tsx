import s from './MoviesCart.module.scss';
import imdbImage from '../../../assets/imdb.svg';
import heart from '../../../assets/heart.svg';

type MoviesCartType = {
 name: string;
 poster: string;
 category: string;
 year: number;
 country: object;
 imdb: string;
 genre: Array<string>;
};

export const MoviesCart = ({ name, poster, category, year, country, imdb, genre }: MoviesCartType) => {
 return (
  <div className={s.movies_cart}>
   <div>
    <div className={s.movies_poster}>
     <img src={poster} alt={poster} className={s.movies_cart_img} />
     <span className={s.movies_cart_category}>{category}</span>
     <button className={s.movies_cart_wish}>
      <img src={heart} alt={heart} />
     </button>
    </div>
    <div>
     <div className={s.movies_cart_info}>
      <span className={s.movies_cart_span}>{country[Object.keys(country)[0]]} </span>
      <span className={s.movies_cart_span}>{year}</span>
     </div>
     <div className={s.movies_cart_name}>{name}</div>
     <div className={s.movies_cart_rating}>
      <img src={imdbImage} alt={imdbImage} />
      <span className={s.movies_cart_rating_span}>{imdb ? imdb : 0} / 100</span>
     </div>
     <div className={s.movies_cart_genres}>
      {genre
       ? Object.values(genre).map((item, index) => {
          return (
           <span key={index} className={s.movies_cart_genre}>
            {item}
           </span>
          );
         })
       : null}
     </div>
    </div>
   </div>
  </div>
 );
};

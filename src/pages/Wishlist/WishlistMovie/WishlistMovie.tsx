import { MoviesCartType } from '../../../components/Movies/MoviesCart/MoviesCart';
import { Link } from 'react-router-dom';
import imdbImage from '../../../assets/imdb.svg';
import cross from '../../../assets/cross.svg';
import s from './WishlistMovie.module.scss';

export const WishlistMovie = ({ name, poster, category, year, country, imdb, genre, id }: MoviesCartType) => {
 const countryArray = Array.isArray(country) ? country.filter((item) => item) : Object.values(country);
 const deleteItem = (e) => {
  const target = document.querySelector('img[src="/src/assets/cross.svg"]');
  if (e.target === target) {
   e.preventDefault();
  }
 };
 return (
  <div className={s.movie}>
   <Link to={`/${id}`} className={s.movies_cart} onClick={deleteItem}>
    <img src={cross} alt={cross} className={s.movies_delete} />
    <div className={s.movies_poster}>
     <img src={poster} alt={poster} className={s.movies_cart_img} />
     <span className={s.movies_cart_category}>{category}</span>
    </div>
    <div>
     <div className={s.movies_cart_info}>
      <span className={s.movies_cart_span}>
       {countryArray.map((item, index) => (
        <span key={index}>{item}</span>
       ))}
      </span>
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
   </Link>
  </div>
 );
};

import { Container } from '../../index';
import s from './MovieMain.module.scss';
import { useEffect, useState } from 'react';
import { MovieButtonWishList } from '../MovieButtonWishList/MovieButtonWishList';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { pushMovie } from '../../../store/wishlistSlice';
import { pushMovieInUser } from '../../../store/userSlice';
import { getTokenUser } from '../../../helpers/getTokenUser';

import imdbImage from '../../../assets/imdb.svg';

type MovieMainProps = {
 img: string;
 title: string;
 imdb: string;
 id: string | undefined;
};

export const MovieMain = ({ img, title, imdb, id }: MovieMainProps) => {
 const [dataUsers, setDataUsers] = useState([]);
 const user = useAppSelector((state) => state.user.user);
 const movies = useAppSelector((state) => state.movies.movies);
 const wishlist = useAppSelector((state) => state.wishlist.wishlist);
 const dispatch = useAppDispatch();

 useEffect(() => {
  fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json')
   .then((response) => response.json())
   .then((json) => setDataUsers(json));
 }, []);

 const addInWishlist = () => {
  const movie = movies.find((item) => item.id === +id);
  const moviesArray = [...wishlist, movie];
  const inWishlist = wishlist.find((item) => item.id === +movie.id);
  if (!inWishlist) {
   const token = getTokenUser(dataUsers, user.mail);
   dispatch(pushMovie(movie));
   dispatch(pushMovieInUser({ token, moviesArray }));
  }
 };
 return (
  <div className={s.movie}>
   <img src={img} alt={img} className={s.movie_main} />
   <div className={s.movie_wrapper}>
    <Container>
     <div className={s.movie_info}>
      <div className={s.movie_title}>{title}</div>
      {imdb && (
       <div className={s.movie_info_rates}>
        <div className={s.movie_info_rate}>
         <img src={imdbImage} alt={imdbImage} className={s.movie_info_rate_img} />
         <span className={s.movie_info_rate_text}>{imdb} / 100</span>
        </div>
       </div>
      )}
      {user.name && (
       <MovieButtonWishList id={id} click={addInWishlist}>
        Add to WishList
       </MovieButtonWishList>
      )}
     </div>
    </Container>
   </div>
  </div>
 );
};

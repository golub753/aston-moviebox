import { useState, useEffect } from 'react';
import { getTokenUser } from '../../helpers/getTokenUser';
import { Main, Container } from '../../components/index';
import { useAppSelector } from '../../hooks/hooks';
import { WishlistMovies } from './WishlistMovies/WishlistMovies';
import s from './Wishlist.module.scss';

export const Wishlist = () => {
 const [movies, setMovies] = useState('');
 const user = useAppSelector((state) => state.user.user);

 useEffect(() => {
  fetch('https://aston-moviebox-default-rtdb.firebaseio.com/users.json')
   .then((response) => response.json())
   .then((users) => getMovies(users));
 }, []);

 const getMovies = (users) => {
  const token = getTokenUser(users, user.mail);
  fetch(`https://aston-moviebox-default-rtdb.firebaseio.com/users/${token}.json`)
   .then((json) => json.json())
   .then((data) => setMovies(data.wishlist));
 };

 return (
  <div className={s.wishlist}>
   <Main />
   <Container>
    <div className={s.wishlist_title}>WishList</div>
    {user ? (
     movies ? (
      <WishlistMovies movies={movies} />
     ) : (
      <div className={s.wishlist}>No movies in WishList, add your favorite movies</div>
     )
    ) : (
     <div className={s.error}>Please, Sign In App</div>
    )}
   </Container>
  </div>
 );
};

export { Wishlist as default };

import { ReactNode, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import s from './MovieButtonWishList.module.scss';
import { pushMovie } from '../../../store/wishlistSlice';
import { pushMovieInUser } from '../../../store/userSlice';
import { getTokenUser } from '../../../helpers/getTokenUser';

type MovieButtonWishListProps = {
 children: ReactNode;
 props: object;
 id: string | undefined;
};

export const MovieButtonWishList = (props: MovieButtonWishListProps) => {
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
  const movie = movies.find((item) => item.id === +props.id);
  const inWishlist = wishlist.find((item) => item.id === +movie.id);
  if (!inWishlist) {
   const token = getTokenUser(dataUsers, user.mail);
   dispatch(pushMovie(movie));
   const moviesArray = [...wishlist, movie];
   dispatch(pushMovieInUser({ token, moviesArray }));
  }
 };
 return (
  user.name && (
   <button onClick={addInWishlist} className={s.button}>
    {props.children}
   </button>
  )
 );
};

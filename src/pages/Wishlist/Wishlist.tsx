import { getTokenUser } from '../../helpers/getTokenUser';
import { Main, Container } from '../../components/index';
import { useAppSelector } from '../../hooks/hooks';
import { WishlistMovies } from './WishlistMovies/WishlistMovies';
import s from './Wishlist.module.scss';
import { usersAPI } from '../../services/UsersService';
import { wishlistAPI } from '../../services/WishlistService';

export const Wishlist = () => {
 const { data: users, isLoading } = usersAPI.useGetAllUsersQuery('');
 const user = useAppSelector((state) => state.userReducer.user);
 const token = user.name ? (isLoading ? false : getTokenUser(users, user.mail)) : false;
 const { data: wishlist } = wishlistAPI.useGetWishlistQuery(token);

 return (
  <div className={s.wishlist}>
   <Main />
   <Container>
    <div className={s.wishlist_title}>WishList</div>
    {user.name ? (
     wishlist ? (
      <WishlistMovies movies={wishlist} />
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

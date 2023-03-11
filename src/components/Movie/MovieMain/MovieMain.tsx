import { Container } from '../../index';
import s from './MovieMain.module.scss';
import { MovieButtonWishList } from '../MovieButtonWishList/MovieButtonWishList';
import { useAppSelector } from '../../../hooks/hooks';
import { getTokenUser } from '../../../helpers/getTokenUser';
import { moviesAPI } from '../../../services/MoviesService';
import { usersAPI } from '../../../services/UsersService';
import { wishlistAPI } from '../../../services/WishlistService';

import imdbImage from '../../../assets/imdb.svg';

type MovieMainProps = {
 img: string;
 title: string;
 imdb: string;
 id: string | undefined;
};

export const MovieMain = ({ img, title, imdb, id }: MovieMainProps) => {
 const { data: users, isLoading } = usersAPI.useGetAllUsersQuery('');
 const { data: movies } = moviesAPI.useFetchAllMoviesQuery('');
 const user = useAppSelector((state) => state.userReducer.user);
 const token = user.name ? (isLoading ? false : getTokenUser(users, user.mail)) : false;
 const { data: wishlist } = wishlistAPI.useGetWishlistQuery(token);
 const [pushMovie, {}] = wishlistAPI.usePushMovieInUserMutation();

 const addInWishlist = () => {
  const movie = movies.find((item) => item.id === +id);
  if (wishlist) {
   const wishlistArray = Object.entries(wishlist);
   const inWishlist = wishlistArray.find((item) => item[1].id === +movie.id);
   if (!inWishlist) {
    pushMovie({ token, movie });
   }
  } else {
   pushMovie({ token, movie });
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

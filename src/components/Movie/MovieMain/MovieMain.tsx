import { Container } from '../../index';
import s from './MovieMain.module.scss';
import { MovieButtonWishList } from '../MovieButtonWishList/MovieButtonWishList';

import imdbImage from '../../../assets/imdb.svg';

type MovieMainProps = {
 img: string;
 title: string;
 imdb: string;
 id: string | undefined;
};

export const MovieMain = ({ img, title, imdb, id }: MovieMainProps) => {
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
      <MovieButtonWishList id={id}>Add to WishList</MovieButtonWishList>
     </div>
    </Container>
   </div>
  </div>
 );
};

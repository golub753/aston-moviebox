import { Container } from '../../index';
import s from './MovieMain.module.scss';
import { MainSlideProps } from 'components/Main/MainSlide/MainSlide';

import imdbImage from '../../../assets/imdb.svg';
import { useAppSelector } from '../../../hooks/hooks';

type MovieMainProps = {
 img: string;
 title: string;
 imdb: string;
};

export const MovieMain = ({ img, title, imdb }: MovieMainProps) => {
 const user = useAppSelector((state) => state.user.user.name);
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
      {user && <button className={s.movie_button}>Add to WishList</button>}
     </div>
    </Container>
   </div>
  </div>
 );
};

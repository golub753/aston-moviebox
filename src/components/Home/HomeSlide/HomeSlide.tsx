import s from './HomeSlide.module.scss';
import { Container } from '../../index';

import imdbImage from '../../../assets/imdb.svg';
import potatosImage from '../../../assets/potatos.svg';
import imgPlay from '../../../assets/play.svg';

export type HomeSlideType = {
 img: string;
 title: string;
 imdb: string;
 text: string;
 potatos: string;
 trailer: string;
};

export const HomeSlide = ({ img, title, imdb, text, potatos, trailer }: HomeSlideType) => {
 return (
  <div className={s.home_slide}>
   <div className={s.home_slide_wrapper}>
    <Container>
     <div className={s.home_slide_info}>
      <div className={s.home_slide_info_title}>{title}</div>
      <div className={s.home_slide_info_rates}>
       <div className={s.home_slide_info_rate}>
        <img src={imdbImage} alt={imdbImage} className={s.home_slide_info_rate_img} />
        <span className={s.home_slide_info_rate_text}>{imdb}</span>
       </div>
       <div className={s.home_slide_info_rate}>
        <img src={potatosImage} alt={potatosImage} className={s.home_slide_info_rate_img} />
        <span className={s.home_slide_info_rate_text}>{potatos}</span>
       </div>
      </div>
      <div className={s.home_slide_info_text}>{text}</div>
      <a href={trailer} className={s.home_slide_info_link}>
       <img src={imgPlay} alt={imgPlay} className={s.home_slide_info_link_icon} />
       <span className={s.home_slide_info_link_text}>Watch trailer</span>
      </a>
     </div>
    </Container>
    <img src={img} alt={title} className={s.home_img} />
   </div>
  </div>
 );
};

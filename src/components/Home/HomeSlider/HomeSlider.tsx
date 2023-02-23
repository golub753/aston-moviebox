import { HomeSlide } from '../HomeSlide/HomeSlide';
import Slider from 'react-slick';
import s from './HomeSlider.module.scss';

type HomeSliderObject = {
 img: string;
 title: string;
 imdb: string;
 text: string;
 potatos: string;
 trailer: string;
};

type HomeSlider = {
 slides: HomeSliderObject[];
};

export const HomeSlider = ({ slides }: HomeSlider) => {
 const settings = {
  customPaging: function (i) {
   return <span>{i + 1}</span>;
  },
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
 };
 return (
  <div className={s.home_slider}>
   <Slider {...settings}>
    {slides.map((slide, index) => {
     return (
      <HomeSlide
       key={index}
       img={slide.img}
       title={slide.title}
       imdb={slide.imdb}
       text={slide.text}
       potatos={slide.potatos}
       trailer={slide.trailer}
      />
     );
    })}
   </Slider>
  </div>
 );
};

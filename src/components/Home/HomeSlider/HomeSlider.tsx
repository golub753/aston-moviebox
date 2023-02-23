import { HomeSlide } from '../HomeSlide/HomeSlide';
import Slider from 'react-slick';
import s from './HomeSlider.module.scss';
import { HomeSlideType } from '../HomeSlide/HomeSlide';

type HomeSlider = {
 slides: HomeSlideType[];
};

const settings = {
 customPaging: function (i: number) {
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

export const HomeSlider = ({ slides }: HomeSlider) => {
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

import { MainSlide } from '../MainSlide/MainSlide';
import Slider from 'react-slick';
import s from './MainSlider.module.scss';
import { MainSlideType } from '../MainSlide/MainSlide';

type MainSlider = {
 slides: MainSlideType[];
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

export const MainSlider = ({ slides }: MainSlider) => {
 return (
  <div className={s.main_slider}>
   <Slider {...settings}>
    {slides.map((slide, index) => {
     return (
      <MainSlide
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

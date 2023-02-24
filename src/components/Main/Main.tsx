import { Header } from '../index';
import { MainSlider } from './MainSlider/MainSlider';
import s from './Main.module.scss';

const slides = [
 {
  img: '../src/assets/poster_1.png',
  title: 'John Wick 3 : Parabellum',
  imdb: '86.0 / 100',
  potatos: '97%',
  text:
   'John Wick is on the run after killing a member of the international assassins" guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.',
  trailer: '',
 },
 {
  img: '../src/assets/poster_2.jpg',
  title: 'Spider Man Across Universes',
  imdb: '81.0 / 100',
  potatos: '60%',
  text:
   'Spiders from different dimensions unite in front of a common threat. Inventive film comic with an Oscar for animation',
  trailer: '',
 },
 {
  img: '../src/assets/poster_3.jpg',
  title: 'IT',
  imdb: '7.3 / 100',
  potatos: '78%',
  text:
   'When children begin to go missing in the town of Derry, Maine, several children face their greatest fears and are forced to face off against the evil clown Pennywise, whose cruelty and victim list stretch back centuries.',
  trailer: '',
 },
];

export const Main = () => {
 return (
  <div className={s.main}>
   <Header />
   <MainSlider slides={slides} />
  </div>
 );
};

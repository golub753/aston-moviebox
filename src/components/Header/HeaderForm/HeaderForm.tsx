import s from './HeaderForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { searchAPI } from '../../../services/SearchService';
import { Link } from 'react-router-dom';
import throttle from 'lodash.throttle';
import { useAppDispatch } from '../../../hooks/hooks';
import { setSearchMovies } from '../../../store/reducers/searchSlice';

import imdbImage from '../../../assets/imdb.svg';
import { useEffect, useState } from 'react';

export const HeaderForm = () => {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();
 const [submitSearch, { data: movies, isSuccess, error }] = searchAPI.useLazySearchMoviesQuery();

 const submitForm = async (e) => {
  e.preventDefault();
  navigate('/result');
 };

 const changeInput = async (e) => {
  if (e.target.value.length >= 1) {
   submitSearch(e.target.value);
   dispatch(setSearchMovies(movies));
  }
 };

 return (
  <>
   <form className="header-form" onSubmit={submitForm}>
    <input onChange={changeInput} placeholder="What do you want to watch?" className={s.input} />
   </form>
   {isSuccess && movies.length >= 1 && (
    <ul className={s.ul}>
     {movies.map((item) => {
      return (
       <li className={s.li} key={item.id}>
        <Link to={`/${item.id}`} className={s.li_link}>
         <div className={s.li_wrapper}>
          <div className={s.li_img}>
           <img src={item.poster} alt={item.poster} className={s.li_img_img} />
          </div>
          <div className={s.info}>
           <div className={s.name}>{item.origin_name}</div>
           <div className={s.genres}>
            {item.genre
             ? Object.values(item.genre).map((item, index) => {
                return (
                 <span key={index} className={s.genres_genre}>
                  {item}
                 </span>
                );
               })
             : null}
           </div>
           <div className={s.rating}>
            <img src={imdbImage} alt={imdbImage} />
            <span className={s.rating_span}>{item.imdb ? item.imdb : 0} / 100</span>
           </div>
          </div>
         </div>
        </Link>
       </li>
      );
     })}
    </ul>
   )}
  </>
 );
};

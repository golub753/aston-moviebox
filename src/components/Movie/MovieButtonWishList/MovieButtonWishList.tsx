import { ReactNode } from 'react';
import s from './MovieButtonWishList.module.scss';

type MovieButtonWishListProps = {
 children: ReactNode;
 props: object;
 id: string | undefined;
 click: Function;
};

export const MovieButtonWishList = (props: MovieButtonWishListProps) => {
 return (
  <button className={s.button} onClick={() => props.click()}>
   {props.children}
  </button>
 );
};

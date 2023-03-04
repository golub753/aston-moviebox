import { ReactNode } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import s from './MovieButtonWishList.module.scss';

type MovieButtonWishListProps = {
 children: ReactNode;
 props: object;
};

export const MovieButtonWishList = (props: MovieButtonWishListProps) => {
 const user = useAppSelector((state) => state.user.user.name);
 return user && <button className={s.button}>{props.children}</button>;
};

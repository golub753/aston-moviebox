import s from './HeaderMenu.module.scss';
import { Link } from 'react-router-dom';
import { removeUser } from '../../../store/reducers/userSlice';
import { useAppDispatch } from '../../../hooks/hooks';

type HeaderMenuProps = {
 isVisible: boolean;
};

export const HeaderMenu = ({ isVisible }: HeaderMenuProps) => {
 const dispatch = useAppDispatch();
 const signOut = (e) => {
  e.preventDefault();
  localStorage.removeItem('user');
  dispatch(removeUser({}));
 };

 return (
  <nav className={`${isVisible ? s.header_nav_active : s.header_nav}`}>
   <ul className={s.header_nav_ul}>
    <li className={s.header_nav_li}>
     <Link to={'/wishlist'} className={s.header_nav_li_link}>
      WishList
     </Link>
    </li>
    <li className={s.header_nav_li}>
     <a href="#" onClick={signOut} className={s.header_nav_li_link}>
      Sign out
     </a>
    </li>
   </ul>
  </nav>
 );
};

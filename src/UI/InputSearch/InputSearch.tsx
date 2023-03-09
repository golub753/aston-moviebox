import { useState } from 'react';
import s from './InputSearch.module.scss';

type InputSearch = {
 placeholder: string;
};

export const InputSearch = ({ placeholder }: InputSearch) => {
 const [search, setSearch] = useState('');

 const changeInput = (e) => {
  setSearch(e.target.value);
 };

 return <input placeholder={placeholder} value={search} className={s.input} onChange={changeInput} />;
};

import s from './InputSearch.module.scss';

type InputSearch = {
 placeholder: string;
};

export const InputSearch = ({ placeholder }: InputSearch) => {
 return <input placeholder={placeholder} className={s.input} />;
};

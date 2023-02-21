import s from './Input.module.scss';

type Input = {
 placeholder: string;
};

export const Input = ({ placeholder }: Input) => {
 return <input placeholder={placeholder} className={s.input} />;
};

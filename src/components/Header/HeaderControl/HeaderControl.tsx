import s from './HeaderControl.module.scss';

type HeaderControl = {
 text: string;
 action: string;
};

export const HeaderControl = ({ text, action }: HeaderControl) => {
 return <span className={s.header_control}>{text}</span>;
};

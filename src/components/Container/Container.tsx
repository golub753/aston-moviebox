import s from './Container.module.scss';

export const Container = (props: any) => {
 return <div className={s.container}>{props.children}</div>;
};

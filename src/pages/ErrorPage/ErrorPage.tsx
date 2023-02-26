import s from './ErrorPage.module.scss';

export const ErrorPage = () => {
 return (
  <div id="error-page" className={s.error}>
   <h1>Oops!</h1>
   <p>Sorry, an unexpected error has occurred.</p>
   <p>
    <i></i>
   </p>
  </div>
 );
};

export { ErrorPage as default };

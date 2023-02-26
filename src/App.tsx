import { Home, ErrorPage, Authorization, Registration } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
 {
  path: '/',
  element: <Home />,
  errorElement: <ErrorPage />,
  children: [
   {
    path: 'auth',
    element: <Authorization />,
   },
   {
    path: 'register',
    element: <Registration />,
   },
  ],
 },
]);

const App = () => {
 return (
  <div className="App">
   <RouterProvider router={router} />
  </div>
 );
};

export default App;

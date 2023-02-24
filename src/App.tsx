import { Home, ErrorPage, Authorization } from './pages';
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
